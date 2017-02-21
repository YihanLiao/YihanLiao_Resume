import React from 'react';

const Exp = ({ data }) =>
  <tr>
    <td>{data.periodStart}-{data.periodEnd}</td>
    <td>{data.componyName}{data.schoolName}</td>
    <td>{data.major}{data.title}</td>
  </tr>;

Exp.propTypes = {
  data: React.PropTypes.object,
};

export default Exp;
