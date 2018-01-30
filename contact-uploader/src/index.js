import fs from 'fs';
import minimist from 'minimist';

import Personnel from './Personnel';

const WP_CONFIG = JSON.parse(fs.readFileSync('contactUploader.json'));

uploadPersonnel();

// const schools = fs.readFileSync('schools.csv');
// const offices = fs.readFileSync('offices.csv');

async function uploadPersonnel() {
  const personnel = new Personnel(WP_CONFIG);
  await personnel.parse();
  await personnel.post();
}
