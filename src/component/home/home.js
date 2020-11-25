import React, { useState, useEffect, createRef } from 'react';
import Header from '../header/header';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './css/main.css';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategories } from '../redux/category/categorySelector';
import { getProductList } from '../redux/product/productAction';
import { toggleMoreItems } from '../redux/toggleBar/toggleBarAction';
import { selectToggleMoreItems } from '../redux/toggleBar/toggleBarSelector';
import { setTabValue } from '../redux/tabs/tabsAction';
import { selectTabValue } from '../redux/tabs/tabSelector';
import ProductListContainer from './productListContainer';

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`
  };
}

const Home = ({ categories, dispatch, loadMore, value }) => {
  const [name, setName] = useState("");
  const tabRef = createRef();

  useEffect(() => {
    const categoryItem = categories.filter((item, index) => index === value);
    const id = categoryItem[0].category_id;
    const categoryName = categoryItem[0].category_name;
    setName(categoryName);
    dispatch(getProductList(id));
  }, [value]);

  const getTabStyle = url => {
    return {
        backgroundImage: `url(${url})`,
        backgroundSize: '100% 100%',
        marginRight: '1rem',
        borderRadius: '0.3rem',
        marginBottom: '0.5rem',
        backgroundColor: '#757575'
    }
};

  function handleChange(event, newValue) {
    dispatch(setTabValue(newValue));
    return loadMore ? dispatch(toggleMoreItems()) : null;
  }

  return (
    <div>
      <Header />
      <h1 className="category-title">Our Products</h1>

      <div className="tabs-container">
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          ref={tabRef}
        >
          {categories.map(
            ({ category_name, category_id, category_image }, index) => (
              <Tab
                key={category_id}
                label={
                  <span style={{ fontWeight: index === value ? "bold" : "normal" }}>
                    {category_name}
                  </span>
                }
                {...a11yProps(index)}
                style={getTabStyle(category_image)}
              />
            )
          )}
          <button className="view-all">
            <span>
              <span>View All</span>
            </span>
          </button>
        </Tabs>
      </AppBar>
      </div>
      <ProductListContainer divRef={tabRef} categoryName={name} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
  loadMore: selectToggleMoreItems,
  value: selectTabValue
});

export default connect(mapStateToProps)(Home);
