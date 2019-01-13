import React from 'react';
import Post from '../Post/Post';
import s from './PostList.module.css';

// Mock
// import passProps from '../hoc/passProps';
// import posts from '../../posts.json';

const PostList = ({ posts, deletePost }) =>
    posts.length > 0 ? (
        <ul className={s.list}>
            {posts.map(post => (
                <li key={post.id} className={s.item}>
                    <Post {...post} onDelete={() => deletePost(post.id)} />
                </li>
            ))}
        </ul>
    ) : null;

// export default passProps({ posts })(PostList);

export default PostList;
