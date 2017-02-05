import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to="/"><h2>YihanLiao</h2></Link>
        <ul>
          <li><Link to="/about">About ME.</Link></li>
          <li><Link to="/portfoilo">Portfoilo</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element,
};

export default Main;
