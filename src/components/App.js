import React, { Component } from 'react';
import v4 from 'uuid/v4';
// import SignupForm from './SignupForm';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import NoteFilter from './NoteFilter';

const filterNotes = (filter, notes) => {
  return notes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    notes: [],
    filter: ''
  };

  handleAddNote = text => {
    this.setState(prevState => ({
      notes: [{ id: v4(), text }, ...prevState.notes]
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    const { notes, filter } = this.state;

    const filteredNotes = filterNotes(filter, notes);

    return (
      <div>
        <h1>Forms in React</h1>
        <NoteEditor onSubmit={this.handleAddNote} />
        <NoteFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <NoteList notes={filteredNotes} onDeleteNote={this.handleDeleteNote} />
      </div>
    );
  }
}
