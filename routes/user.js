const express=require("express");
const router=express.Router();
const user=require("../schemas/user");


router.get('/', (req, res) => {
    res.send('User route');
});

module.exports=router;