// import request from 'superagent';

// export const querydata = (dispatch) => {
//   return (
//     request
//       .get('/api/yihan')
//       .end((err, res) => {
//         console.log(res.body);
//         dispatch({
//           action: 'QueryData',
//           data: res.body,
//         });
//       })
//   );
// };

export const querydata = (name) => {
  return {
    type: 'QueryData',
    data: { name },
  };
};
