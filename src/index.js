import express from 'express'
import path from 'path'

const app = express()
const __dirname = path.resolve();

const staticPath = path.join(__dirname,"/public")

console.log(staticPath)

app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send('Hi');
})

app.listen(8000,()=>{
    console.log('listening')
})