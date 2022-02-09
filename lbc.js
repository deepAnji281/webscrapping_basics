const request=require('request');
const cheerio=require('cheerio');
request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary',cb);
function cb(err,response,HTML)
{
    if(err)
    {
        console.log(err);
    }
    else{
        handleHtml(HTML);
    }
    function handleHtml(HTML){
        let selTool=cheerio.load(HTML);
        let contentArr= selTool('.d-flex.match-comment-padder.align-items-center .match-comment-long-text')
        let lbc=selTool(contentArr[0]).text();
        console.log(lbc);
    }
}