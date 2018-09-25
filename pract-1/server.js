var express=require("express");

var app=express();

app.get("/",(req,res)=>{
    res.send("hi there welcome to my assignment ");
})

app.get("/speak/:animal",(req,res)=>{
    let say=req.params.animal;
    // res.send(say);
    if(say.toString()==="pig")
    {
    res.send("pig");
    }
    else if(say.toString()==="dog")
    {
        res.send("dog")
    }

    
})


app.listen(3000,()=>{
    console.log("server on port 3000");

});




