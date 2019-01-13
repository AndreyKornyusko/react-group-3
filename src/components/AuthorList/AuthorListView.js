import React from 'react';
import s from './AuthorList.module.css';

// // Mock
// import passProps from '../hoc/passProps';

const getItemStyles = (id, activeId) =>
    id === activeId ? s.activeItem : s.item;

const AuthorList = ({ authors, selectAuthor, activeAuthorId }) =>
    authors.length > 0 ? (
        <ul className={s.list}>
            {authors.map(author => (
                <li
                    key={author.id}
                    className={getItemStyles(author.id, activeAuthorId)}
                >
                    <img src={author.image} alt="" width="80" />
                    <p className={s.name}>{author.name}</p>
                    <button
                        className={s.button}
                        onClick={() => selectAuthor(author.id)}
                    >
                        <i className={s.icon} />
                    </button>
                </li>
            ))}
        </ul>
    ) : null;

export default AuthorList;

// export default passProps({
//     authors: [
//         {
//             id: '796f9087-4c42-4d4a-abed-c29fc5e7d6ae',
//             name: 'Tate Kemmer',
//             image:
//                 'https://s3.amazonaws.com/uifaces/faces/twitter/normanbox/128.jpg',
//         },
//         {
//             id: 'ace8dff9-c7c7-4e8b-a863-73c180d7516e',
//             name: 'Werner Ullrich',
//             image:
//                 'https://s3.amazonaws.com/uifaces/faces/twitter/emmandenn/128.jpg',
//         },
//         {
//             id: '9444442d-8e5c-407c-b5e4-86d7bfcdd968',
//             name: 'Quinten Howe',
//             image:
//                 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
//         },
//         {
//             id: 'cac1911d-2ca1-485d-88db-56ecfe43b867',
//             name: 'Zackery Goodwin',
//             image:
//                 'https://s3.amazonaws.com/uifaces/faces/twitter/pixage/128.jpg',
//         },
//         {
//             id: '660b9244-9edc-46bf-80ad-f4ca43725a6d',
//             name: 'Rollin Lehner',
//             image:
//                 'https://s3.amazonaws.com/uifaces/faces/twitter/alsobrooks/128.jpg',
//         },
//     ],
//     activeAuthorId: 'cac1911d-2ca1-485d-88db-56ecfe43b867',
// })(AuthorListView);
