import { connect } from 'react-redux';
import PostListView from './PostListView';
import * as actions from '../../redux/actions';
import * as selectors from '../../redux/selectors';

const mapState = state => ({
    posts: selectors.getPostsWithAuthor(state),
});

const mapDispatch = {
    deletePost: actions.deletePost,
};

export default connect(
    mapState,
    mapDispatch,
)(PostListView);
