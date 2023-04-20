const express=require('express');
const cors=require('cors')

const app = express();
app.use(express.json());
app.use(cors());


app.listen(3000, ()=>{
    console.log("Servidor funcionando")
})

app.get('/hola',(req,res)=>{
    const data ='5'
    res.send(data)
})

app.post('/hola',(req,res)=>{
    let number=req.body.number || "";
    console.log(number)
    res.end();
})



