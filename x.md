```js
const blogPosts = [
    {
        id: 'post1',
        author: { username: 'user1', name: 'User 1' },
        body: '......',
        comments: [
            {
                id: 'comment1',
                author: { username: 'user2', name: 'User 2' },
                comment: '.....',
            },
            {
                id: 'comment2',
                author: { username: 'user3', name: 'User 3' },
                comment: '.....',
            },
        ],
    },
    {
        id: 'post2',
        author: { username: 'user2', name: 'User 2' },
        body: '......',
        comments: [
            {
                id: 'comment3',
                author: { username: 'user3', name: 'User 3' },
                comment: '.....',
            },
            {
                id: 'comment4',
                author: { username: 'user1', name: 'User 1' },
                comment: '.....',
            },
            {
                id: 'comment5',
                author: { username: 'user3', name: 'User 3' },
                comment: '.....',
            },
        ],
    },
];

const AuthorSchema = new schema.Entity(
    'authors',
    {},
    { idAttribute: 'username' },
);

const CommentSchema = new schema.Entity('comments', {
    author: AuthorSchema,
});

const PostSchema = new schema.Entity('posts', {
    author: AuthorSchema,
    comments: [CommentSchema],
});

console.log(normalize(blogPosts, [PostSchema]));
```

```js
const menu = [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }];

const reduxState = {
    menu: [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }],
    cart: [{ id: 1, amount: 10 }],
};

const reduxState = {
    menu: [1, 2],
    cart: [{ id: 1, amount: 10 }],
    entities: {
        menu: {
            1: { id: 1, title: 'title 1' },
            2: { id: 2, title: 'title 2' },
        },
    },
};
```
