var express = require('express');
var router = express.Router();
var dbAbstractionLayer = require('../public/javascripts/DBAbstractionLayer');

/* GET users listing. */
router.get('/', function(req, res, next) {

  setTimeout(() =>{
    let jsonResponse ={
      "handsetCards": [
        { imageName:'offer1', title: '10% off', cols: 2, rows: 1 },
        { imageName:'offer2',title: '5% off', cols: 2, rows: 1 },
        { imageName:'offer3',title: 'random ', cols: 2, rows: 1 },
        { imageName:'offer4',title: 'free', cols: 2, rows: 1 }
      ],
      "webCards": [
          { imageName:'offer1',title: '10% off', cols: 2, rows: 1 },
          { imageName:'offer2',title: '5% off', cols: 1, rows: 1 },
          { imageName:'offer3',title: 'random ', cols: 1, rows: 2 },
          { imageName:'offer4',title: 'free', cols: 1, rows: 1 }
        ]
    };
    res.json(jsonResponse)
  }, 3000);
// dbAbstractionLayer.queryDealsCollection().then(response=>{
//   res.json(response);
// }).catch(error=>{
//   res.status(500).json({});
//   console.log(error);
// });

});

module.exports = router;
