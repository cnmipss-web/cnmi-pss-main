const csv = require('csv');
const fs = require('fs');
const {
    isEmail
} = require('validator');
const wordpress = require('wordpress');

const MAX_CONTACTS = 1000;

const client = wordpress.createClient({
    url: 'localhost.test',
    username: 'Tyler Collins',
    password: '3GSnVwuTt$NEGNzS'
});

const personnel = fs.readFileSync('personnel.csv');
const schools = fs.readFileSync('schools.csv');
const offices = fs.readFileSync('offices.csv');

uploadPersonnel(personnel, client);
uploadSchools(schools, client);
uploadOffices(offices, client);

function uploadPersonnel(personnel) {
    csv.parse(personnel, (err, data) => {
        const parsedData = data
            .filter(line => {
                return isEmail(line[line.length - 1]);
            }).map(parsePersonnel);
        checkAndPostContactInfo(parsedData);
    });
}

function uploadOffices(offices) {
    csv.parse(offices, (err, data) => {
        const parsedData = data
            .filter(line => {
                return line[2].trim().length > 1 && line[0].trim().length > 0;
            }).map(parseOffices);
        checkAndPostContactInfo(parsedData);
    });
}

function uploadSchools(schools) {
    csv.parse(schools, (err, data) => {
        const schoolList = [
            []
        ];
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

function parseOffices(office) {
    const location = office[2] == 'Capitol Hill' ?
        'Capitol Hill Bldg #' + office[0] :
        office[2];
    return {
        name: office[1],
        location,
        tel: office[3],
        fax: parseTel(office[4])
    }
}

function checkAndPostOffices(parsedData) {
    client.getPosts({
        type: 'contact_info',
        number: MAX_CONTACTS
    }, (err, posts) => {
        parsedData.map(({
            name,
            location,
            tel,
            fax
        }) => {
            const contactInfo = {
                title: name,
                content: '',
                type: 'contact_info',
                status: 'publish',
                customFields: [{
                        key: 'address',
                        value: location
                    },
                    {
                        key: 'telephone',
                        value: tel
                    },
                    {
                        key: 'fax',
                        value: fax
                    }
                ]
            };
            const filteredPosts = posts.filter(post => post.title === name.trim());
            if (err)
                return console.error(err);

            if (filteredPosts.length === 0) {
                client.newPost(contactInfo, handleResponse);
            } else if (filteredPosts.length === 1) {
                client.editPost(posts[0].id, contactInfo, handleResponse);
            } else {
                throw new Error(`Too many posts match ${name}: ${posts}`);
            }
        });
    });
}

function parseSchool(school) {
    return {
        name: school[0][1],
        short: school[1][0],
        address: [school[1][1], school[2][1], school[3][1]].join('\r\n'),
        fax: parseTel(school[0][4]),
        tel: parseTel(school[0][3]),
        staff: school.map(row => {
            return {
                name: row[2],
                tel: [row[3], row[5]].filter(n => n.length > 0).map(parseTel).join(' / '),
                email: row[6]
            };
        })
    };
}

function checkAndPostSchool({
    name,
    address,
    tel,
    fax,
    staff
}) {
    const level = selectLevel(name);
    const admin = staff
        .filter(({
            name
        }) => name.length > 0)
        .map(({
            name,
            tel,
            email
        }) => {
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
            'level': level
        },
        customFields: [{
                key: 'address',
                value: address
            },
            {
                key: 'fax',
                value: fax
            },
            {
                key: 'long_name',
                value: name
            },
            {
                key: 'school_level',
                value: level.name
            },
            {
                key: 'short_name',
                value: acronym(name)
            },
            {
                key: 'telephone',
                value: tel
            },
            {
                key: 'website',
                value: 'https://cnmipss.org'
            },
            {
                key: 'email',
                value: staff[0].email
            },
            {
                key: 'admin_staff',
                value: admin
            }
        ],
    };

    const query = {
        title: name,
        type: 'school'
    }
    client.getPosts(query, (err, schools) => {
        if (err) return console.error(err);
        const thisSchool = schools.filter(school => school.title === name);
        // console.log(schools[0]);
        // client.getTerms('level', console.log);
        if (thisSchool.length === 0) {
            client.newPost(schoolPost, handleResponse);
        } else if (thisSchool.length === 1) {
            client.editPost(thisSchool[0].id, schoolPost, handleResponse);
        } else {
            throw new Error(`Too many schools match ${name}: ${schools}`)
        }
    });
}

function parsePersonnel(line) {
    let [name,
        phone,
        cell,
        altTel,
        fax,
        email
    ] = line;

    let tel = [parseTel(phone), parseTel(cell), parseTel(altTel)]
        .filter(str => str !== undefined && str.trim().length > 0)
        .join(' / ');
    return {
        name,
        tel,
        fax: parseTel(fax),
        email
    };
}

function checkAndPostContactInfo(parsedData) {
    client.getPosts({
        type: 'contact_info',
        number: 10000
    }, (err, posts) => {
        if (err)
            return console.error(err);

        parsedData.map(({
            name,
            location,
            tel,
            fax,
            email,
        }) => {
            const contactInfo = {
                title: name,
                content: '',
                type: 'contact_info',
                status: 'publish',
                customFields: [{
                    key: 'address',
                    value: location
                }, {
                    key: 'telephone',
                    value: tel
                }, {
                    key: 'email',
                    value: email
                }, {
                    key: 'fax',
                    value: fax
                }]
            };
            const filteredPosts = posts.filter(post => post.title === name.trim());
            if (filteredPosts.length === 0) {
                client.newPost(contactInfo, handleResponse);
            } else if (filteredPosts.length === 1) {
                const {
                    customFields
                } = contactInfo;
                client.editPost(filteredPosts[0].id, {
                    customFields
                }, handleResponse);
            } else {
                throw new Error(`Too many posts match ${name}: ${posts}`);
            }
        });
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
    if (elem.test(name)) {
        console.log('Elementary');
        return [51];
    } else if (mid.test(name)) {
        console.log('Middle');
        return [50];
    } else if (jr.test(name)) {
        console.log('Jr Sr');
        return [53];
    } else if (high.test(name)) {
        console.log('High');
        return [52];
    } else {
        return [];
    }
}

function acronym(s) {
    var words, acronym, nextWord;

    words = s.split(' ');
    acronym = "";
    index = 0;
    while (index < words.length) {
        nextWord = words[index];
        acronym = acronym + nextWord.charAt(0);
        index = index + 1;
    }
    return acronym;
}

function parseTel(tel) {
    if (/^\(\d{3}\)\s\d{3}\-\d{4}$/.test(tel)) {
        console.log('Already Clean...');
        return tel;
    }

    const parser = new RegExp(/(\(\d{3}\))?\s*(\d{3})\-([\d\/\-\s]{4,})/, '');
    const matches = parser.exec(tel);

    if (matches) {
        return matches[1] ? matches[1] : '(670)' + ' ' + matches[2] + '-' + matches[3];
    }
}