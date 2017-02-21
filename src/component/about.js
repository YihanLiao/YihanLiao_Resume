import React from 'react';
import { connect } from 'react-redux';

const About = ({ data }) =>
  <section>
    <img src={data.photo} className="avatar" alt="Baymax" />
    <h3 className="name">姓名：{ data.name }</h3>
    <article className="summary">
      { data.summary }
    </article>
    <div>
      {
        data.weblink.map((obj, index) => {
          return (<div className="weblink" key={index}><a href={obj.url}>{obj.desc}</a></div>);
        })
      }
    </div>
  </section>;


const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(About);
