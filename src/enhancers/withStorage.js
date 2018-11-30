import React, { Component } from 'react';

const withStorage = WrappedComponent => {
  return class WithStorage extends React.Component {
    state = {
      isAvailable: false
    };
    componentDidMount() {
      this.checkLocalStorageExists();
    }
    checkLocalStorageExists() {
      this.setState({ isAvailable: 'localStorage' in window });
    }
    load = key => {
      return this.state.isAvailable ? localStorage.getItem(key) : null;
    };
    save = (key, data) => {
      if (!this.state.isAvailable) return;
      localStorage.setItem(key, data);
    };
    remove = key => {
      if (!this.state.isAvailable) return;
      localStorage.removeItem(key);
    };
    render() {
      return (
        <WrappedComponent
          storage={{
            available: this.state.isAvailable,
            load: this.load,
            save: this.save,
            remove: this.remove
          }}
          {...this.props}
        />
      );
    }
  };
};

export default withStorage;
