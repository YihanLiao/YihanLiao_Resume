import React from 'react';
import { connect } from 'react-redux';

const About = ({ data }) =>
  <div className="col-md-12">
    <div>姓名：{ data.name }</div>
    <img src={data.photo} className="avatar" />
    <section>
      { data.summary }
    </section>
  </div>;

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(About);
