const request = require('request');

const instaScraper = {};

// instaScraper.getPictures = new Promise(function(resolve, reject){
    request('https://www.instagram.com/explore/tags/paris/?__a=1',(error,response, html)=>{
        // console.log(JSON.parse(html))
        let target = JSON.parse(html).graphql.hashtag;
        console.log(target["edge_hashtag_to_top_posts"].edges[0].node.display_url)
        console.log(target["edge_hashtag_to_top_posts"].edges[1].node.display_url)
    })
// })