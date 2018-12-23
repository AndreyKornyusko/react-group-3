import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';

import { notesActions } from '../../modules/notes';

const mapDispatchToProps = { addNote: notesActions.addNote };

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
