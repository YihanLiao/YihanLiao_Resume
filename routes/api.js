const express = require('express');

const router = express.Router();

/* GET APIs listing. */

router.get('/yihan', (req, res) => {
  res.send({
    name: 'Yihan Liao',
  });
});

router.get('/*', (req, res) => {
  res.send({
    errorMsg: '請給一個正確的Path來取得你的資料',
  });
});

module.exports = router;
