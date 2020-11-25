import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsProductListFetching } from "../redux/product/productSelector";
import WithSpinner from "./withSpinner";
import ProductList from "./ProductList";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsProductListFetching
});

const ProductListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductList);

export default ProductListContainer;
