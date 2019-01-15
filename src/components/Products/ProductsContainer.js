import { connect } from 'react-redux';
import ProductsView from './ProductsView';
import * as selectors from '../../redux/selectors';
import * as actions from '../../redux/actions';

const mapState = state => ({
    products: selectors.getProducts(state),
});

const mapDispatch = { addToCart: actions.addToCart };

export default connect(
    mapState,
    mapDispatch,
)(ProductsView);
