const request=require('postman-request')

// const respo=(no,c)=>{
//     request({url:'https://jsonplaceholder.typicode.com/todos',json:true},(err,res)=>{
//         if(err){
//             c('no internet',undefined)
//         }else if(Object.values(res.body).length==0){
//             c('404 unable to reach',undefined)
//         }
//         else{
//         const dd=res.body
//         c(undefined,dd.filter(i=>i.id==no))
//         }
//     })
// }
// respo(2,(err,res)=>{
//     err?console.log('error',err):
//     res.map(j=>console.log('id be '+j.id+'\ntitle be '+j.title))
// })

// const pp={
//     l:'a',
//     id:1,
//     c:'b'
// }
// const prd=(ty,kk)=>{
//     console.log(ty,kk)
// }

// prd('op',pp)


const path = require('path');
const express = require('express');
const hbs = require('hbs');
const apiCall=require('./utils')
const app=express();
const port=process.env.PORT || 3000

// basic routes

// app.get('',(req,res)=>{
//     res.send('Hello !')
    
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>in about</h1>')
// })
// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'gopi',
//         id:1
//     },{
//         name:'a',
//         id:2
//     }])
// })
// app.get('/emp',(req,res)=>{
//     res.send('in emp')
// })


// use to get static contenet

app.use(express.static(path.join(__dirname,'/public/')))
// in which we can delete the .html files but for reference not delteing

// dynamic rendering

app.set('view engine','hbs')
hbs.registerPartials(path.join(__dirname,'../partials'))
app.use(express.static(path.join(__dirname,'../public/')))

app.get('',(req,res)=>{
    res.render('index',{title:'Index',name:'gopi'})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About',name:'gopi'})
})
app.get('/help',(req,res)=>{
    res.render('help',{title:'Help',name:'gopi'})
})

app.get('/search',(req,res)=>{
    if(!req.query.id){
        return res.send({error:'enter id plz'})
    }
    apiCall.apiCall(req.query.id,(error,respo)=>{
        if(error){
            return res.send({ error })
        }
        res.send(respo)
    })
})

// customizing name to views\

// app.set('view engine','hbs')
// app.set('views',path.join(__dirname,'/customizeViews/'))
// app.use(express.static(path.join(__dirname,'/public/')))

// app.get('',(req,res)=>{
//         res.render('index',{title:'Index',name:'gopi'})
//     })
//     app.get('/about',(req,res)=>{
//         res.render('about')
//     })
//     app.get('/help',(req,res)=>{
//         res.render('help',{title:'Help',name:'gopi'})
//     })


app.listen(port,()=>{console.log('at port '+port)})