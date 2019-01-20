import React, { Component } from 'react';
import s from './Counter.module.css';

type Props = {
    initialValue: number,
    step: number,
};

type State = {
    value: number,
};

export default class Counter extends Component<Props, State> {
    static defaultProps = {
        initialValue: 0,
        step: 1,
    };

    state = {
        value: this.props.initialValue,
    };

    increment = () =>
        this.setState((state, props) => ({ value: state.value + props.step }));

    decrement = () =>
        this.setState((state, props) => ({ value: state.value - props.step }));

    reset = () => this.setState({ value: 0 });

    render() {
        const { value } = this.state;
        const { step } = this.props;

        return (
            <div className={s.container}>
                <span className={s.value}>{value}</span>

                <div className={s.actions}>
                    <button className={s.button} onClick={this.increment}>
                        Increment by {step}
                    </button>
                    <button className={s.button} onClick={this.reset}>
                        Reset
                    </button>
                    <button className={s.button} onClick={this.decrement}>
                        Decrement by {step}
                    </button>
                </div>
            </div>
        );
    }
}
