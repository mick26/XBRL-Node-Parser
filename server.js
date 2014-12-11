/*=========================================================
Michael Cullen
server.js
2014

Working - (Tá se ag obair)

CheerioJS - JQuery manipulation of the DOM at the back end. Also parses HTML & XML

Ref.
https://github.com/request/request
http://www.sec.gov/Archives/edgar/data/1018724/000144530513002495/amzn-20130930.xml
============================================================*/

'use strict';

/* ========================================================== 
External Modules/Packages Required
============================================================ */
var request = require('request');
var cheerio = require('cheerio');


request('http://www.sec.gov/Archives/edgar/data/1018724/000144530513002495/amzn-20130930.xml', function(err, resp, body) {
	if(!err && resp.statusCode == 200) {
		/*
		Load the html into cheerio
		*/
		var $ = cheerio.load(body);
		/*
		Find the following
		*/
		var docFiscalPeriodFocus = $('dei\\:CurrentFiscalYearEndDate').text().trim();
		var docType = $('dei\\:DocumentType').text().trim();
		var yrEndDate = $('dei\\:CurrentFiscalYearEndDate').text().trim();
		var regName = $('dei\\:EntityRegistrantName').text().trim();
		var tradingSymbol = $('dei\\:TradingSymbol').text().trim();
		var footnotes = $('link\\:footnoteLink').text().trim();


		console.log("Year End Date = " +yrEndDate);
		console.log("Document Type = " +docType);
		console.log("Fiscal Period Focus = " +docFiscalPeriodFocus);
		console.log("Company Name = " +regName);
		console.log("Trading Symbol = " +tradingSymbol);
		console.log("Footnotes = " +footnotes);
	}

});
