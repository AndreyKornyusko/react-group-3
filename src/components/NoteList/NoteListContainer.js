import { connect } from 'react-redux';
import NoteList from './NoteList';
// import { getItems } from '../../modules/notes/notesSelectors';
// import { deleteNote } from '../../modules/notes/notesActions';

import { notesActions, notesSelectors } from '../../modules/notes';

const mapStateToProps = state => ({
  notes: notesSelectors.getVisibleNotes(state),
});

const mapDispatchToProps = {
  deleteNote: notesActions.deleteNote,
  toggleNote: notesActions.toggleNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
