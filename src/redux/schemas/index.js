import { schema } from 'normalizr';

const AuthorSchema = new schema.Entity('authors');

export const PostSchema = new schema.Entity('posts', {
    author: AuthorSchema,
});
