import React from 'react';
import RoutingComponent from './routes/routes';
import { getCategories } from './component/redux/category/categoryAction';
import { selectCategories } from './component/redux/category/categorySelector';
import { connect } from 'react-redux';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  render() {
    return (
      <RoutingComponent />
    );
  }
}

const mapStateToProps = state => ({
  categories: selectCategories(state)
});

export default connect(mapStateToProps)(App);