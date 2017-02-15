const express = require('express');

const router = express.Router();

/* GET APIs listing. */

router.get('/yihan', (req, res) => {
  res.send({
    name: 'Yihan Liao',
    exp: [
      {
        componyName: '一零四資訊科技股份有限公司',
        title: '前端工程師',
        periodStart: '2015.07',
        periodEnd: 'current',
      },
      {
        componyName: '4Gamers 就肆電競股份有限公司',
        title: '前端工程師',
        periodStart: '2014.08',
        periodEnd: '2015.07',
      },
    ],
    edu: [
      {
        schoolname: '國立中正大學',
        major: '會計與資訊科技',
        title: '碩士',
        periodStart: '2012.09',
        periodEnd: '2014.08',
      },
      {
        schoolname: '元智大學',
        major: '資訊傳播系',
        title: '學士',
        periodStart: '2006.09',
        periodEnd: '2010.07',
      },
    ],
  });
});

router.get('/*', (req, res) => {
  res.send({
    errorMsg: '請給一個正確的Path來取得你的資料',
  });
});

module.exports = router;
