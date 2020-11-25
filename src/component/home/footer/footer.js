import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import {
  toggleMoreItems,
  toggleHideDropdown
} from "../../redux/toggleBar/toggleBarAction";
import {
  selectToggleMoreItems,
  selectDropdownHidden
} from "../../redux/toggleBar/toggleBarSelector";
import Dropdown from "../dropDown/dropDown";
import onClickOutside from "react-onclickoutside";
import { selectTabValue } from "../../redux/tabs/tabSelector";
import { createStructuredSelector } from "reselect";
import {ScrollToTab} from '../../../utils/scrollToTabs';
import { selectProductList } from "../../redux/product/productSelector";
import '../css/footer.css'


class Footer extends React.Component {

  handleClickOutside = () => {
    return this.props.hidden ? null : this.props.dispatch(toggleHideDropdown());
  };

  onChange = () => {
    const{divRef, dispatch} = this.props;
    ScrollToTab(divRef);
    window.setTimeout(dispatch, 1400, toggleMoreItems(), null);
}

  render() {
    const { dispatch, loadMore, hidden, divRef, product, name } = this.props;
    return (
      <Fade>
        <div
          className="footer"
          onClick={() => (hidden ? null : dispatch(toggleHideDropdown()))}
        >
          <div className="footer-inner">
            <div className="footer-start">
              <span
                className="footer-category"
                onClick={() => dispatch(toggleHideDropdown())}
              >
                Showing For
                <span className="footer-name" >{name}</span>
              </span>
            </div>
            <div className="footer-end">
              <span
                className="footer-category-change"
                onClick={() => dispatch(toggleHideDropdown())}
              >
                change
              </span>
              { 
                product.length > 3
                ? (loadMore 
                  ? <span
                    className="footer-view-more"
                    onClick={this.onChange}>
                   [-] view less
                  </span>
                 : null )
                : null
              }
              { 
                product.length > 3
                ? (!loadMore 
                  ? <span
                    className="footer-view-more"
                    onClick={() => dispatch(toggleMoreItems())}>
                   [+] view more
                  </span>
                 : null )
                : null
              }
            </div>
            {console.log(product.length,loadMore)}
          </div>
          {hidden ? null : <Dropdown divRef={divRef} />}
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loadMore: selectToggleMoreItems,
  hidden: selectDropdownHidden,
  value: selectTabValue,
  product: selectProductList,  
});

export default connect(mapStateToProps)(onClickOutside(Footer));
