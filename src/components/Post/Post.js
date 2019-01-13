import React from 'react';
import s from './Post.module.css';

const Post = ({ image, title, body, onDelete }) => (
    <article>
        <img className={s.image} src={image} alt="" />
        <div className={s.content}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.body}>{body}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    </article>
);

export default Post;
