'use strict'; 

import * as express from 'express';

let router = express.Router();

/* GET home page. */
router.get('/api/dashboard_host_info', function(req, res, next) {
  res.writeHead(200);
  res.write(JSON.stringify(['Ubuntu 14.04']));
  res.end();
});

export = router;
