import React, { Component } from 'react';

type User = {
    name: string,
    password: string,
};

type Props = {
    onSubmit: (user: User) => void,
};

type State = {
    name: string,
    password: string,
};

export default class Form extends Component<Props, State> {
    state = { name: '', password: '' };

    handleChange = (evt: SyntheticEvent<HTMLInputElement>) => {
        (evt.currentTarget: HTMLInputElement);

        const { name, value } = evt.currentTarget;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.props.onSubmit({ ...this.state });
    };

    render() {
        const { name, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
