import React from 'react';

const ProjectUnit = ({ data }) =>
  <article className="col-md-12 articleBlock">
    <header>
      <h3 className="headTitle">{data.projectName}</h3>
    </header>
    <div>
      <img src={data.img} alt="projectSnap" className="articleImg" />
      <h4 className="headTitle">時間：{data.periodStart}-{data.periodEnd}</h4>
      <span>網站狀態：{data.status}</span>
      {
        data.isOnline &&
        <a href={data.url} target="_blank" rel="noopener noreferrer"> 線上連結（點我前往）</a>
      }
      <p>專案描述：{data.desc}</p>
      <p>專案中負責：{data.task}</p>
    </div>
  </article>;

ProjectUnit.propTypes = {
  data: React.PropTypes.object,
};

export default ProjectUnit;
