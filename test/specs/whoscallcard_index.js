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

});

