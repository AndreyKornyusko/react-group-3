import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import * as selectors from '../../redux/selectors';

const mapState = state => ({
    amount: selectors.getCartProductsAmount(state),
});

// class CartIconContainer extends Component {
//     componentDidMount() {}

//     componentDidUpdate() {}

//     render() {
//         return <CartIconView {...this.props} />;
//     }
// }

export default connect(mapState)(CartIconView);
