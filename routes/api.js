const express = require('express');

const router = express.Router();

/* GET APIs listing. */

router.get('/yihan/experience', (req, res) => {
  res.send({
    work: [
      {
        componyName: '一零四資訊科技股份有限公司',
        title: '前端工程師',
        periodStart: '2015.07',
        periodEnd: 'Present',
      },
      {
        componyName: '4Gamers 就肆電競股份有限公司',
        title: '前端工程師',
        periodStart: '2014.08',
        periodEnd: '2015.07',
      },
    ],
    education: [
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

router.get('/yihan', (req, res) => {
  res.send({
    name: 'Yihan Liao',
    email: 'yiihanliao@gmail.com',
    personalSummary: '目前任職於104科技，職稱為前端工程師。目前手上專案所使用的工具為開源居多，很喜歡開源的理念。近期專案所使用的框架為React Js 之前則是Angular Js 1.x edition. 工作上最常去的網站大概就是MDN 跟stackoverflow 另外無關公司專案的進修類型的會看 Medium 跟 知乎、Quora 裡面很多很棒的文章跟討論串 (很喜歡這種Less is More的概念)。工作以外的興趣為看美式卡通尤其Cartoon Network下的相關作品，每天上班中午一定要配飯吃XD...... 其中的最愛是Regular Show(台譯：天兵公園)有時正經有時又挺有病的作品。假日沒事喜歡開著Twitch當廣播聽，最喜歡的實況主群為LNG workshop。之前為了遊戲學了點日文跟為了偶像學了韓文',
    personalWebLink: [
      {
        desc: 'personalWeb',
        url: 'http://tw.yahoo.com/',
      },
      {
        desc: 'Linkedin',
        url: 'https://www.linkedin.com/in/yihan-liao-781099128/',
      },
      {
        desc: 'github',
        url: 'https://github.com/YihanLiao',
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
