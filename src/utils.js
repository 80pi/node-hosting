const request=require('postman-request')

const apiCall=(no,c)=>{
        request({url:'https://jsonplaceholder.typicode.com/users',json:true},(err,{body})=>{
            if(err){
                c('no internet',undefined)
            }else if(Object.values(body).length==0){
                c('404 unable to reach',undefined)
            }
            else{  
            const dd= body.filter(i=>i.id==no)[0]      
            dd!=undefined?c(undefined,dd):c('out of range',undefined)
            }
        })
    }

module.exports={apiCall}