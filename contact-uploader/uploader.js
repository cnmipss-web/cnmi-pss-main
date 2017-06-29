const csv = require('csv');
const fs = require('fs');
const {isEmail} = require('validator');
const wordpress = require('wordpress');

const client = wordpress.createClient({url: 'localhost.test', username: 'Tyler Collins', password: '3GSnVwuTt$NEGNzS'});

const personnel = fs.readFileSync('personnel.csv');
const schools = fs.readFileSync('schools.csv');

// uploadPersonnel(personnel, client);
uploadSchools(schools, client);

// client.getTaxonomy('level', console.log);
// client.getTerms('level', console.log);

function uploadPersonnel(personnel, client) {
  csv.parse(personnel, (err, data) => {
    data
      .filter(line => {
        return isEmail(line[line.length - 1])
      })
      .map(parsePersonnel)
      .map(checkAndPostPersonnel);
  });
}

function uploadSchools(schools, client) {
  csv.parse(schools, (err, data) => {
    // console.log(data);
    const schoolList = [[]];
    let index = 0;
    data.forEach(line => {
      if (parseInt(line[0]) > 0) {
        index = parseInt(line[0]);
        schoolList[index] = [line];
      } else {
        schoolList[index].push(line);
      }
    });
    schoolList
      .filter(school => school.length > 2)
      .map(parseSchool)
      .map(checkAndPostSchool);
  });
}

function parseSchool(school) {
  return {
    name: school[0][1],
    address: [school[1][1], school[2][1], school[3][1]].join('\r\n'),
    fax: school[0][4],
    tel: school[0][3],
    staff: school.map(row => {
      return {
              name: row[2],
              tel: [row[3], row[5]].filter(n => n.length > 0).join(' / '),
              email: row[6],
            };
    }),
  };
}

function checkAndPostSchool({name, address, tel, fax, staff}){
  const level = selectLevel(name);
  const admin = staff
                  .filter(({name}) => name.length >0)
                  .map(({name, tel, email}) => {
                      return [name, 'Tel: ' + tel, 'Email: ' + email].join('\r\n');
                  }).join('\r\n\r\n');
                  
  const schoolPost = {
    title: name,
    type: 'school',
    status: 'publish',
    content: '',
    excerpt: '',
    menuOrder: 0,
    format: 'standard',
    terms: {
      'level': level,
    },
    customFields: [
      {key: 'address', value: address},
      {key: 'fax', value: fax},
      {key: 'long_name', value: name},
      {key: 'school_level', value: level.name},
      {key: 'short_name', value: acronym(name)},
      {key: 'telephone', value: tel},
      {key: 'website', value: 'https://cnmipss.org'},
      {key: 'email', value: staff[0].email},
      {key: 'admin_staff', value: admin}
    ],
  };

  const query = {
    title: name,
    type: 'school',
  }
  client.getPosts(query, (err, schools) => {
    if(err) return console.error(err);
    const thisSchool = schools.filter(school => school.title === name);
    // console.log(schools[0]);
    // client.getTerms('level', console.log);
    if (thisSchool.length === 0) {
      client.newPost(schoolPost, handleResponse);
    } else if (thisSchool.length === 1) {
      client.editPost(thisSchool[0].id, schoolPost, handleResponse);
    } else {
      // console.log('Match Too Many', query, schools[3]);
      // throw new Error(`Too many schools match ${name}: ${schools}`)
    }
  })
}

function parsePersonnel(line) {
  let [name,
    phone,
    cell,
    altTel,
    fax,
    email] = line;
  let tel = (/\d/.test(phone)
    ? '(670) ' + phone
    : '') + (/\d/.test(cell)
    ? ' / (670) ' + cell
    : '') + (/\d/.test(altTel)
    ? ' / (670) ' + altTel
    : '');
  return {name, tel, fax, email};
}

function checkAndPostPersonnel({name, tel, email, fax}) {
  const contactInfo = {
    title: name,
    content: '',
    type: 'contact_info',
    status: 'publish',
    customFields: [
      {
        key: 'telephone',
        value: tel
      }, {
        key: 'email',
        value: email
      }, {
        key: 'fax',
        value: fax
      }
    ]
  };
  client.getPosts({
    title: name,
    type: 'contact_info'
  }, (err, posts) => {
    if (err)
      return console.error(err);

    if (posts.filter(post => post.title === name).length === 0) {
      client.newPost(contactInfo, handleResponse);
    } else if (posts.length === 1) {
      client.editPost(posts[0].id, contactInfo, handleResponse);
    } else {
      throw new Error(`Too many posts match ${name}: ${posts}`)
    }
  });
}

function handleResponse(err, id) {
  if (err)
    return console.error(err);
  else
    return console.log('Id: ', id);
}

function selectLevel(name) {
  const elem = new RegExp('Elem', 'i');
  const mid = new RegExp('middle', 'i');
  const jr = new RegExp('jr', 'i');
  const high = new RegExp('high', 'i');
  if(elem.test(name)) {
    console.log('Elementary');
    return [51];
  } else if (mid.test(name)) {
    console.log('Middle');
    return [50];
  } else if (jr.test(name)) {
    console.log('Jr Sr');
    return [53];
  } else if (high.test(name)){
    console.log('High');
    return [52];
  } else {
    return [];
  }
}

function acronym(s){
    var words, acronym, nextWord;

    words = s.split(' ');
    acronym= "";
    index = 0
    while (index<words.length) {
            nextWord = words[index];
            acronym = acronym + nextWord.charAt(0);
            index = index + 1 ;
    }
    return acronym
}
