var assert = require('assert');
var webdriverio = require('webdriverio');

describe('whoscallcard index page', function() {
   it('click multilanguage button - TW', function () {
       browser.url('https://card.whoscall.com/');
       browser.selectByValue('body > footer > div > div.copyright > ul > li > span.lang-selector-container > select', 'zh-TW') ;
       var title = browser.getTitle();
       assert.equal(title, 'Whoscall Card | 個人名片服務');
   });

     it('click multilanguage button - EN', function () {
       browser.url('https://card.whoscall.com/');
       browser.selectByValue('body > footer > div > div.copyright > ul > li > span.lang-selector-container > select', 'en-US') ;
       var title = browser.getTitle();
       assert.equal(title, 'Whoscall Card - Your Personal Business Card');
   });

  it('click multilanguage botton KR', function ()  {
     browser.selectByValue('body > footer > div > div.copyright > ul > li > span.lang-selector-container > select' ,'ko-KR');
     var title = browser.getTitle();
     assert.equal(title,'후스콜카드 | Whoscall 개인 명함 서비스');
  });

  it('click multilanguage botton TH', function ()  {
     browser.selectByValue('body > footer > div > div.copyright > ul > li > span.lang-selector-container > select' ,'th-TH');
     var title = browser.getTitle();
     assert.equal(title,'Whoscall Card - นามบัตรส่วนตัวของคุณ');
  });

  it('click multilanguage botton BR', function ()  {
     browser.selectByValue('body > footer > div > div.copyright > ul > li > span.lang-selector-container > select' ,'pt-BR');
     var title = browser.getTitle();
     assert.equal(title,'Cartão Whoscall - Seu cartão de visitas pessoal e de negócios');
  });

});

