import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'NAME',
    }
  }
  componentWillMount() {
    request
      .get('/api/yihan')
      .end((err, res) => {
        this.setState({ name: res.body.name });
        console.log(res.body);
      });
  }
  render() {
    return (
      <div className="container">
        <Link to="/"><h1>{ this.state.name }</h1></Link>
        <nav className="btn-group" role="group" aria-label="...">
          <button type="button" className="btn btn-default"><Link to="/about">About</Link></button>
          <button type="button" className="btn btn-default"><Link to="/portfoilo">Portfoilo</Link></button>
        </nav>
        { this.props.children }
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element,
};

export default Main;
