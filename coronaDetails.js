const request=require('request');

const cheerio=require('cheerio');


request('https://www.worldometers.info/coronavirus/',cb);
function cb(err,response,HTML)
{
    if(err)
    console.log(err);
    else
    handHtml(HTML);
}
function handHtml(HTML)
{
    let selTool=cheerio.load(HTML);
    let contentArr=selTool('.maincounter-number span');
   let totalCases=selTool(contentArr[0]).text();
   let deaths=selTool(contentArr[1]).text();

     let recover=selTool(contentArr[2]).text();
     console.log("total casee " +totalCases);
     console.log("deaths  are " + deaths)
     console.log("recovery "+ recover)
}