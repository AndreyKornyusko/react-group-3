import { connect } from 'react-redux';
import CartView from './CartView';
import * as selecors from '../../redux/selectors';
import * as actions from '../../redux/actions';

const mapState = state => ({
    products: selecors.getCartProducts(state),
});

const mapDispatch = { removeFromCart: actions.removeFromCart };

export default connect(
    mapState,
    mapDispatch,
)(CartView);
