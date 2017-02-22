import request from 'superagent';

export const mapDispatchToProps = (dispatch) => {
  return {
    querydata: () => {
      request
        .get('/api/yihan')
        .end((err, res) => {
          const data = res.body;
          dispatch({ type: 'QueryData', data });
        });
    },
    queryexp: () => {
      request
        .get('/api/yihan/experience')
        .end((err, res) => {
          const exp = res.body;
          dispatch({ type: 'QueryExp', exp });
        });
    },
  };
};
