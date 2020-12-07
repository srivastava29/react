const Post=require('../models/post');


exports.getData=function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
}

exports.createPost=(req,res)=>
{
const post=new Post(req.body);
console.log("creating post");
/*post.save((err,result)
{
	if(err)
	{
	return res.status(400).json({
	error:err;
	});
	}
res.status(200);
})*/
}