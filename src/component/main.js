import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.goBacktoIndex = () => {
      location.href = '/';
    }
  }
  render() {
    return (
      <div>
        <h2 onClick={this.goBacktoIndex} >YihanLiao</h2>
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
