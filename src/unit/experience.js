import React from 'react';

const Exp = ({ desc }) =>
  <div>{desc}</div>;

Exp.propTypes = {
  desc: React.PropTypes.obj,
};

export default Exp;
