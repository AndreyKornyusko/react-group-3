import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './MyComponent.module.css';

// classNames={{
//   enter: styles.boxEnter,
//   enterActive: styles.boxEnterActive,
//   exit: styles.boxExit,
//   exitActive: styles.boxExitActive,
// }}

// const defaultStyles = {
//     width: 400,
//     height: 400,
//     backgroundColor: '#009688',
//     opacity: 0,
//     transition: `opacity 500ms ease-in-out`,
// };

// const transitionStyles = {
//     entering: { opacity: 0 },
//     entered: { opacity: 1 },
// };

export default class MyComponent extends Component {
    state = { visible: false };

    toggle = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    };

    render() {
        const { visible } = this.state;

        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>

                <CSSTransition
                    in={visible}
                    timeout={500}
                    classNames={{
                        enter: styles.boxEnter,
                        enterActive: styles.boxEnterActive,
                        exit: styles.boxExit,
                        exitActive: styles.boxExitActive,
                    }}
                    unmountOnExit
                >
                    {state => (
                        <div className={styles.box}>
                            <h1>Current State: {state}</h1>
                        </div>
                    )}
                </CSSTransition>
            </div>
        );
    }
}
