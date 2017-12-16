const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

/* GET APIs listing. */

router.get('/yihan/experience', (req, res) => {
  const experience = JSON.parse(fs.readFileSync(path.resolve('static_data', 'experience.json')));
  res.send(experience);
});

router.get('/yihan', (req, res) => {
  const summary = JSON.parse(fs.readFileSync(path.resolve('static_data', 'summary.json')));
  res.send(summary);
});

router.get('/*', (req, res) => {
  res.send({
    errorMsg: '請給一個正確的Path來取得你的資料',
  });
});

module.exports = router;
