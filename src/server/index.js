import express from 'express'
import compression from 'compression'
import render from 'preact-render-to-string'
import {h} from 'preact'

import {Main} from '../Main'
import {Layout} from './Layout'

const PORT=3000

const app = express()
app.use(compression())
app.use(express.static(`${__dirname}/../css`))

app.get(
  "/client.js",
  (req,res)=>{
    res.sendFile('./bundle.js',{root: __dirname})
  }
)

app.get(
  "/*",
  async (req,res)=>{
    res.send("<!DOCTYPE html>"+render((
      <Layout title={req.url} location={req.url}>
      <Main/>
      </Layout>)
    ))}
)



app.listen(
  PORT,
  console.log(`server on port ${PORT}`
  ))
