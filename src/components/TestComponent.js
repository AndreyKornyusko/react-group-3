import React from 'react';
// import withLog from '../enhancers/withLog';
// import passProps from '../enhancers/passProps';
import withToggle from '../enhancers/withToggle';

const TestComponent = ({ title, text }) => (
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

export default TestComponent;

// export default passProps({
//   title: 'Pass props title',
//   text: 'Pass props text'
// })(TestComponent);
// export default withLog(TestComponent);
