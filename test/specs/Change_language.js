var webdriverio = require('webdriverio');  //import webdriver io
var assert = require('assert'); // import assert 

describe('whoscall index test', function() {
	describe('multilanguage test', function() {


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
});
