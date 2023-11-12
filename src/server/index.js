import express from 'express'
import compression from 'compression'
import render from 'preact-render-to-string'
import {Main} from '../pages/Main'
import {h} from 'preact'
import {Layout} from './Layout'


const PORT=3000

const app = express()
app.use(compression())

app.get("/client.js",(req,res)=>{
  res.sendFile('./bundle.js',{root: __dirname})
})

app.get("/*",async (req,res)=>{
  console.log(req.url)
  console.log(render(
    <Layout title={req.url} children={<Main/>} location={req.url}/>
  ))
  res.send("<!DOCTYPE html>"+render((
    <Layout title={req.url} location={req.url}>
    <Main/>
    </Layout>)
  )) // send the HTML string
})

app.listen(PORT,console.log(`server on port ${PORT}`))
