import fs from 'fs';
import parse from 'csv-parse';
import {
  isEmail,
} from 'validator';
import axios from 'axios';

import {
  getToken,
} from './WordPress';

const FILE = Symbol('Personnel File');
const PERSONNEL = Symbol('Valid personnel records');
const WP_CONFIG = Symbol('WordPress Client');
const MAIN_ROUTE = Symbol('Personnel API Route');
const ACF_ROUTE = Symbol('Advanced Custom Field Route');
const AUTH_TOKEN = Symbol('JWT for WP API');
const PROTOCOL = Symbol('HTTP vs HTTPS');

export default class PersonnelHandler {
  constructor(config) {
    this[FILE] = fs.readFileSync('personnel.csv', {
      encoding: 'utf-8',
    });
    this[WP_CONFIG] = config;
    this[PROTOCOL] = config.secure ? 'https://' : 'http://';
    this[MAIN_ROUTE] = `${this[PROTOCOL]}${config.host}/wp-json/wp/v2/contact_info/`;
    this[ACF_ROUTE] = `${this[PROTOCOL]}${config.host}/wp-json/acf/v3/contact_info/`;
  }

  async parse() {
    const file = this[FILE];
    const data = await new Promise((resolve, reject) => {
      parse(file, {}, (err, out) => {
        if (err) reject(err);
        resolve(out);
      });
    });
    this[PERSONNEL] = await data.reduce(reducePersonnel, [])
      .map(filterRows)
      .map(parseRows)
      .reduce((list, officePersonnel) => [...list, ...officePersonnel], []);
  }

  async post() {
    this[AUTH_TOKEN] = await getToken(this[WP_CONFIG]);
    const personnel = [];
    for (const person of this[PERSONNEL]) {
      console.log(`Searching ${person.fields.email}`);
      const newPerson = await searchWP.call(this, person);
      personnel.push(newPerson);
    }

    for (const person of personnel) {
      if (person instanceof Error) {
        console.error(person.config.headers);
      } else if (person.title.trim().length > 0) {
        console.log(`Posting ${person.title}`);
        await postData.call(this, person);
      }
    }
  }
}

function reducePersonnel(personnelList, nextLine) {
  if (nextLine[1] === 'PHONE') {
    personnelList.push([nextLine]);
    return personnelList;
  }

  const currentBuilding = personnelList.pop();
  currentBuilding.push(nextLine);
  personnelList.push(currentBuilding);
  return personnelList;
}

async function postData(entry) {
  const {
    existingData,
    ...data
  } = await entry;
  const authToken = this[AUTH_TOKEN].token;
  const dataString = JSON.stringify(data);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  const mainRoute = existingData ? this[MAIN_ROUTE] + existingData.id : this[MAIN_ROUTE];
  const mainResult = await axios.post(mainRoute, dataString, config).catch(err => console.error(mainRoute, data.title, '\n', err));
}
/**
 * Search for existing WP Contact Info posts based on email address.
 *
 * @param {any} personnelRecord
 * @returns
 */
async function searchWP(personnelRecord) {
  const queryRoute = `${this[MAIN_ROUTE]}?per_page=50&search=${personnelRecord.fields.email}`;
  const searchResults = await axios.get(queryRoute);
  const searchResult = searchResults.data.filter(res => res.type === 'contact_info')[0];
  return {
    ...personnelRecord,
    existingData: searchResult,
  };
}

function filterRows(officePersonnel) {
  const office = officePersonnel[0];
  const personnel = officePersonnel.slice(1);
  return {
    office,
    personnel: personnel.filter(person => isEmail(person[5])),
  };
}

function parseRows(officePersonnel) {
  const { office, personnel } = officePersonnel;
  return personnel.map((person) => {
    const address = `${office[0]}\nPO Box 501370 CK\nSaipan MP, 96950`;

    let name;
    let jobTitle;
    const splitName = person[0].split(', ');
    if (splitName.length > 1) {
      name = person[0].split(', ').slice(0, -1).join(', ');
      jobTitle = person[0].split(', ').slice(-1);
    } else {
      name = person[0];
      jobTitle = [''];
    }

    const telephone = person.slice(1, 4).filter(s => s.trim().length > 0).join(', ');
    const fax = person[4];
    const email = person[5];

    return {
      title: name,
      status: 'publish',
      fields: {
        address,
        name,
        telephone,
        fax,
        email,
        job_title: jobTitle.join(',').trim(),
      },
    };
  });
}
