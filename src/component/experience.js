import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../action';
import Exptabunit from '../unit/experience';

class ExperienceList extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.queryexp();
  }
  render() {
    const { work, education } = this.props.exp;
    return (
      <table className="table table-striped tableExp col-md-7">
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
                <Exptabunit data={obj} key={index} />
              );
            })
          }
          {
            education.map((obj, index) => {
              return (
                <Exptabunit data={obj} key={index} />
              );
            })
          }
        </tbody>
      </table>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    exp: state.exp,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceList);
