import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../action';
import ExpTabUnit from '../unit/experience';
import ProjectUnit from '../unit/project';

class ExperienceList extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.queryexp();
  }
  render() {
    const { work, education, project } = this.props.exp;
    return (
      <section>
        <h2>簡歷</h2>
        <table className="table table-striped tableExp">
          <thead>
            <tr>
              <th>期間</th>
              <th>單位</th>
              <th>稱謂</th>
            </tr>
          </thead>
          <tbody>
            {
              work.map((obj, index) => {
                return (
                  <ExpTabUnit data={obj} key={index} />
                );
              })
            }
            {
              education.map((obj, index) => {
                return (
                  <ExpTabUnit data={obj} key={index} />
                );
              })
            }
          </tbody>
        </table>
        <h2>參與專案：</h2>
        {
          project.map((obj, index) => {
            return (
              <ProjectUnit data={obj} key={index} />
            );
          })
        }
      </section>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    exp: state.exp,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceList);
