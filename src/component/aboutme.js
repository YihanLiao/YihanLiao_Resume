import React from 'react';

class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div>
        <h2>關於我</h2>
        <div>
          <h3>經歷</h3>
          <div>一零四資訊科技股份有限公司 前端工程師OKG</div>
          <div>4Gamers 就肆電競股份有限公司 前端工程師</div>
          <div>國立中正大學 會計與資訊科技研究所</div>
          <div>元智大學 資訊傳播系（互動育樂科技組</div>
        </div>
      </div>
    );
  }
}

AboutMe.propTypes = {
  children: React.PropTypes.element,
};

export default AboutMe;
