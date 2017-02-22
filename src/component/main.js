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
        <header className="header">
          <Link to="/"><h1>{this.props.data.name}</h1></Link>
          <nav className="btn-group" role="group" aria-label="...">
            <Link to="/about"><button type="button" className="btn btn-default">about</button></Link>
            <Link to="/experience"><button type="button" className="btn btn-default">experience</button></Link>
          </nav>
        </header>
        <main className="main">
          {
            this.props.location.pathname === '/' &&
            <section>
              <img src="/image/nynacat.gif" className="nyancat" alt="nyan cat." />
              <article className="introduce">
                <p>這個自我介紹的專案開發使用Express做伺服器框架與 ReactJs 做前端渲染。</p>
                <p>專案原始碼可以在我的 <a href="https://github.com/YihanLiao/YihanLiao_Resume">Github專案</a> 下載來看。</p>
                <p>對...... 我知道這網站很沒設計感 但是我盡力了Orz</p>
              </article>
            </section>
          }
          { this.props.children }
        </main>
        <footer className="footer">
          <p>聯絡資訊: {this.props.data.email}</p>
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
