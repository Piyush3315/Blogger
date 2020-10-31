var Comments=require('../dataset/comments');

function getComments(req,res) {
    Comments.find({postid:req.params.id},function (err, Comments) {

        if (err) {
            res.send(err);
        }

        res.json(Comments); 
    });
};

module.exports.new=function(req,res){

    var id=req.params.id;

            Comments.create({
                postid:id,
                name:req.body.title,
                comment:req.body.desc
            },function(err,data){
                    if(err)
                        res.send(err);

                res.send({"message":"success","data":data});
            });

};

module.exports.getComments=function(req,res){
    getComments(req,res);
};