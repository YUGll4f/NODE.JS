const express = require('express')
const app = express()
const port = 3004
app.use(express.json())

let mov = [
   { id: 1, Title: "Inception", Director: "Chirtopher nolon"},
   { id: 2, Title: "The matrix", Director: "The Wachowskis"},
]

app.get('/',(req,res) => res.send('Name : Pisit , L-Name : Ponglapatworachai'))
app.get('/mov',(req,res) => res.json(mov))
app.get('/mov/:id',(req,res) =>{
    let data = mov.find(i => i.id == req.params.id)
    if (data != undefined) res.json(data)
    else res.json({ masage: "can't find"})
})

app.post('/mov',(req,res) => {
    let movID = mov[mov.length - 1].id + 1
    let movTitle = req.body.Title
    let movDirector = req.body.Director
    mov = [...mov, {id: movID , Title: movTitle , Director: movDirector}]
    res.json(mov)
})

app.put('/mov/:id',(req,res) => {
    let data = mov.find(i => i.id == req.params.id)
    if (data == undefined) res.json('dont have id let fucking go!!!!')
    else data.Title = req.body.Title , data.Director = req.body.Director
    mov.map((i)=> {
        if (i.id == data.id) i.Title = data.Title , i.Director = data.Director;
    })
    res.json(mov)
})

app.delete('/mov/:id',(req,res) => {
    let data = mov.find(i => i.id == req.params.id)
    if (data == undefined) res.json('dont have id let fucking go!!!!')
    else  data.Title = req.body.Title , data.Director = req.body.Director
    mov.map((i)=> {
        if (i.id == data.id) i.Title = data.Title , i.Director = data.Director;
    })
    res.json(mov)
})

app.listen(3004,()=>console.log('Server is runing on port'))