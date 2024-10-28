const express=require('express')
const ejs=require('ejs')
const path=require('path');
const { title } = require('process');

const app=express()

app.use(express.urlencoded({extended:true})); //this is required for form  submission

app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))

//define a route for the home page
app.get('/',(req,res)=>{
    res.render('index',{title:'home page'})
})


const userData={
    name:'vasisht',
    age:24,
    place:'kozhikode',
    mobile:7356289776

}


app.get('/profile',(req,res)=>{
    res.render('profile',{title:'profile page',userData})
})

app.get('/contact',(req,res)=>{
    res.render('contactUS',{title:"contact page"})
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    //destructure form data from req.body
    console.log( req.body);
    const{name,age,place,mobile}=req.body

    if(!name|| !age|| !place|| !mobile){
        return res.status(400).send('missing required fields')
    }
    //send a response after form submission
    res.send(`form submitted and recieved data: Name:${name}, Age:${age}, Place:${place}, Mobile:${mobile} `)
    
})
app.listen(3000,()=>{
    console.log('server listening at port 3000');
    
})
