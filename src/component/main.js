import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../action';

class Main extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.querydata();
  }
  render() {
    return (
      <div className="container">
        <header>
          <Link to="/"><h1>{this.props.data.name}</h1></Link>
          <nav className="btn-group" role="group" aria-label="...">
            <Link to="/about"><button type="button" className="btn btn-default">about</button></Link>
            <Link to="/experience"><button type="button" className="btn btn-default">experience</button></Link>
            <Link to="/portfoilo"><button type="button" className="btn btn-default">Portfoilo</button></Link>
          </nav>
        </header>
        {
          this.props.location.pathname === '/' &&
          <span>MainPage</span>
        }
        { this.props.children }
        <footer>
          <div>{this.props.data.email}</div>
        </footer>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element,
  querydata: React.PropTypes.func,
  data: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
