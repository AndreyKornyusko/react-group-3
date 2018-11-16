import React, { Component } from 'react';
import Counter from './Counter';
import StepChanger from './StepChanger';

export default class App extends Component {
  state = {
    counterStep: 0
  };

  handleChangeStep = () => {
    this.setState(prevState => ({
      counterStep: prevState.counterStep + 1
    }));
  };

  render() {
    const { counterStep } = this.state;

    return (
      <div>
        <StepChanger
          currentStep={counterStep}
          onUpdateStep={this.handleChangeStep}
        />
        <Counter step={counterStep} initialValue={10} />
      </div>
    );
  }
}
