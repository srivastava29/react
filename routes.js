let router = require('express').Router();
let controller=require("./controllers/controller")
//set default API response
router.get('/', controller.getData);
router.post('/data', controller.createPost);
	
//Export API routes
module.exports = router;