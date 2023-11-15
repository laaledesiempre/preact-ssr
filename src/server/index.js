// Imports:
import express from 'express'
import compression from 'compression'
import render from 'preact-render-to-string'
import {h} from 'preact'

// Configs:
import {APP_PORT} from '../configs/server.js'

// Components:
import {Main} from '../Main'
import {Layout} from './Layout'

// App
const app = express()

//Middlewares
app.use(compression())
app.use(express.static(`${__dirname}/../css`)) //This one serves css

//Routers
// TODO

//Endpoints:

//Hydration Endpoint
app.get(
  "/client.js",
  (req,res)=>{
    res.sendFile('./bundle.js',{root: __dirname})
  }
)

//App Endpoint
app.get(
  "/*",
  async (req,res)=>{
    res.send("<!DOCTYPE html>" + render((
      <Layout title={req.url} location={req.url}>
      <Main/>
      </Layout>)
    ))
  }
)

//App Start
app.listen(
  APP_PORT,
  console.log(`server on port ${PORT}`
  ))
