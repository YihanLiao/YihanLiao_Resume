const express = require('express');

const router = express.Router();

/* GET APIs listing. */

router.get('/yihan/experience', (req, res) => {
  res.send({
    work: [
      {
        componyName: '嘉碼科技有限公司',
        title: '全端工程師',
        periodStart: '2017.03',
        periodEnd: 'present',
      },
      {
        componyName: '一零四資訊科技股份有限公司',
        title: '前端工程師',
        periodStart: '2015.07',
        periodEnd: '2017.03',
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
        schoolName: '國立中正大學',
        major: '會計與資訊科技',
        title: '碩士',
        periodStart: '2012.09',
        periodEnd: '2014.08',
      },
      {
        schoolName: '元智大學',
        major: '資訊傳播系',
        title: '學士',
        periodStart: '2006.09',
        periodEnd: '2010.07',
      },
    ],
    project: [
      {
        projectName: '104職涯社群更版',
        desc: '使用nodeJs, ReactJs, Redux, Webpack 各式開源套件建立的Single Page Application 網站利用nodeJs server side render, 搭配 Redux 處理資料流。此專案中 nodeJs 層任務充當facade，代call 公司其他服務來與一些資料的預處理，此層伺服器一次提供給多種平台使用iOS、Android、網站、行動裝置瀏覽器。搭配ReactJs + Redux prerender 處理掉Server Side render 議題。',
        task: '在此專案中負責刻前端畫面的Component、撰寫Redux actions & reducers, 寫 nodeJs 層發送 Request 嫁接公司其他專案產品。',
        periodStart: '2016.02',
        periodEnd: 'Present',
        status: '預計2017.04 上線',
        img: 'http://i.imgur.com/lpyyRWh.jpg',
        url: '',
        isOnline: false,
      },
      {
        projectName: '104職涯社群',
        desc: '使用AngularJs 1.x 版本建立的Single Page Application 網站主要搭配Java撰寫的後端來做的社群網站，利用AngularJs 內建的Api來處理Router, 雙向資料綁定。此網站為jsp搭配 AngularJs 來渲染資料呈現。',
        task: '在此專案中負責刻前端畫面根據邏輯與功能撰寫directive & controller。',
        periodStart: '2015.07',
        periodEnd: '2016.02',
        status: '在線中',
        img: 'http://i.imgur.com/UYjb8x2.jpg',
        url: 'http://plus.104.com.tw',
        isOnline: true,
      },
      {
        projectName: '4Gamers 官方網站 ＆ 各式活動網站',
        desc: '使用php 作為後端直出html，前端一些特效清一色都是jQuery搭配以jQuery為基底的Plugin做出效果。',
        task: '切板、CSS撰寫、動畫特效',
        periodStart: '2014.08',
        periodEnd: '2015.07',
        status: '皆下線了',
        img: 'http://i.imgur.com/feIx2lt.png',
        url: '',
        isOnline: false,
      },
    ],
  });
});

router.get('/yihan', (req, res) => {
  res.send({
    name: '廖倚韓 Yihan Liao',
    email: 'yiihanliao@gmail.com',
    photo: 'http://i.imgur.com/IURMzz0.jpg',
    summary: '目前任職於104科技，職稱為前端工程師。目前手上專案所使用的工具為開源居多，很喜歡開源的理念。近期專案所使用的框架為React Js 之前則是Angular Js 1.x edition. 工作上最常去的網站大概就是MDN 跟stackoverflow 另外無關公司專案的進修類型的會看 Medium 跟 知乎、Quora 裡面很多很棒的文章跟討論串 (很喜歡這種Less is More的概念)。工作以外的興趣為看美式卡通尤其Cartoon Network下的相關作品，每天上班中午一定要配飯吃XD...... 其中的最愛是Regular Show(台譯：天兵公園)有時正經有時又挺有病的作品。假日沒事喜歡開著Twitch當廣播聽，最喜歡的實況主群為LNG workshop。之前為了遊戲學了日文跟為了偶像學了韓文，不過換了工作以後就中斷了有點可惜希望之後有一天可以撿回來繼續念。',
    skill: 'Html, Css, Javascript, Git, Webpack ......',
    weblink: [
      {
        desc: 'personalWeb',
        url: 'http://www.yiihanliao.info/',
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
