import React from "react";
import { selectProductList } from "../redux/product/productSelector";
import ProductItem from "./productItem";
import './css/productList.css'
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { toggleMoreItems } from "../redux/toggleBar/toggleBarAction";
import { selectToggleMoreItems } from "../redux/toggleBar/toggleBarSelector";
import CustomButton from "./customButton/customButton";
import Footer from "./footer/footer";
import { createStructuredSelector } from "reselect";
import { ScrollToTab } from '../../utils/scrollToTabs';

const ProductList = ({ product, loadMore, dispatch, divRef, categoryName }) => {

  const onClick = () => {
    ScrollToTab(divRef);
    setTimeout(() => {dispatch(toggleMoreItems())}, 1400)
  }
  return (
    <Fade>
      <div className="product-list-outer">
        <div className="product-list-inner">
          {
            product
            .filter((item, index) => index < 3)
            .map(item => (
              <ProductItem key={item.id} item={item} />
            ))
          }
          {
            loadMore
            ? product
                .filter((item, index) => index >= 3)
                .map(item => <ProductItem key={item.id} item={item} />)
            : null
          }
        </div>
      </div>
      <div className="product-list-button">
        {
          product.length > 3 ? (
          loadMore ? (
            <CustomButton
              viewall
              onClick={onClick}
            >
              View Less Products
            </CustomButton>
          ) : (
            <CustomButton viewall onClick={() => dispatch(toggleMoreItems())}>
              View All Products
            </CustomButton>
          )
        ) : null
        }
      </div>
      <Footer divRef={divRef} name={categoryName} />
    </Fade>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectProductList,
  loadMore: selectToggleMoreItems
});

export default connect(mapStateToProps)(ProductList);
