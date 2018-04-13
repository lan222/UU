const express=require('express')
const mysql=require('mysql')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.urlencoded({}))

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'kechengbiao',
    port:'3306'
})



app.use('/aa',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    pool.getConnection((err,con)=>{
        if(err) throw err;
        con.query( `SELECT * FROM kechengbiao WHERE kecheng='${req.body.kecheng}' AND state='${req.body.state}'`,(err,a)=>{
            if(err) throw err;
            // if(a.length==0){//取到的是一个空数组  空的就说明帐号和密码有一个是错的
            //     res.send({state:'',con:a})
            // }else{
            //     res.send({state:a[0].state,con:a})
            // }
            res.send({b:'',con:a})
            // console.log(a)
              
        })
    })
})

app.use('/xin',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    pool.getConnection((err,con)=>{
        if(err) throw err;
        con.query( `SELECT * FROM kechengbiao'`,(err,a)=>{
            if(err) throw err;
            // res.send([{b:'',con:a}])
              res.send(a)
        })
    })
})









app.listen(5000,function(){
    console.log('哈哈哈哈哈哈')
})