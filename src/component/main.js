import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { querydata } from '../action';
// import request from 'superagent';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'NAME',
    };
  }
  componentWillMount() {
    this.props.querydata();
  }
  render() {
    return (
      <header className="container">
        <Link to="/"><h1>{this.props.data.name} &apos;s WebSite</h1></Link>
        <nav className="btn-group" role="group" aria-label="...">
          <Link to="/experience"><button type="button" className="btn btn-default">experience</button></Link>
          <Link to="/portfoilo"><button type="button" className="btn btn-default">Portfoilo</button></Link>
        </nav>
        { this.props.children }
      </header>

    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element,
  querydata: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    data: state.dataStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    querydata: () => {
      dispatch(querydata('Yihan'))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
