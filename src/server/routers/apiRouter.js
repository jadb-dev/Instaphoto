const express = require('express');
const apiRouter = express.Router();

// apiRouter.get('/flickr')

// // apiRouter.get('/instagram');

// let insta = (city) => { return new Promise(function(resolve, reject){
//     request(`https://www.instagram.com/explore/tags/${city}/?__a=1`,(error,response, html)=>{
//         let target = JSON.parse(html).graphql.hashtag["edge_hashtag_to_top_posts"];
//         let instaScraper =[];
//         for(let i=0; i<9; i++){
//             instaScraper.push(target.edges[i].node.display_url)
//         }
//         resolve(instaScraper);
//     })
// })
// }



// apiRouter.get('/instagram/', function(request, response){
//     console.log(req.params.id)
//     insta(req.params.id)
//     .then(function(dataArr){response.status(200).send(dataArr)})
// })



module.exports = apiRouter;