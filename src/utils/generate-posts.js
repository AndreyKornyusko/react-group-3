const faker = require('faker');
const fs = require('fs');
const path = require('path');

const authors = [
    {
        id: '796f9087-4c42-4d4a-abed-c29fc5e7d6ae',
        name: 'Tate Kemmer',
        image:
            'https://s3.amazonaws.com/uifaces/faces/twitter/normanbox/128.jpg',
    },
    {
        id: 'ace8dff9-c7c7-4e8b-a863-73c180d7516e',
        name: 'Werner Ullrich',
        image:
            'https://s3.amazonaws.com/uifaces/faces/twitter/emmandenn/128.jpg',
    },
    {
        id: '9444442d-8e5c-407c-b5e4-86d7bfcdd968',
        name: 'Quinten Howe',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
    },
    {
        id: 'cac1911d-2ca1-485d-88db-56ecfe43b867',
        name: 'Zackery Goodwin',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixage/128.jpg',
    },
    {
        id: '660b9244-9edc-46bf-80ad-f4ca43725a6d',
        name: 'Rollin Lehner',
        image:
            'https://s3.amazonaws.com/uifaces/faces/twitter/alsobrooks/128.jpg',
    },
];

const generatePosts = amount => {
    const posts = [];

    for (let i = 0; i < amount; i += 1) {
        const post = {
            id: faker.random.uuid(),
            createdAt: faker.date.recent(),
            image: faker.image.imageUrl(),
            title: faker.lorem.words(),
            body: faker.lorem.sentences(),
            author: faker.random.arrayElement(authors),
        };

        posts.push(post);
    }

    return posts;
};

fs.writeFileSync(
    path.resolve(__dirname, '../posts.json'),
    JSON.stringify(generatePosts(30)),
);
