import { connect } from 'react-redux';
import AuthorListView from './AuthorListView';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';

const mapState = state => ({
    authors: selectors.getAllAuthors(state),
    activeAuthorId: selectors.getSelectedAuthorId(state),
});

const mapDispatch = {
    selectAuthor: actions.selectAuthor,
};

export default connect(
    mapState,
    mapDispatch,
)(AuthorListView);
