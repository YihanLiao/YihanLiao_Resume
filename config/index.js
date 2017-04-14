module.exports = Object.assign({
  weburl: 'http://www.yihanliao.info/',
  port: '1333',
}, require(`./config.${process.env.ENV}.js`));
