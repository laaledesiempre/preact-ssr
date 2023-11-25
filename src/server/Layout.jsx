//Imports:
import {h, Fragment} from 'preact'
import {StaticRouter} from 'react-router-dom/server'

//Static layout code:
export const Layout = (props) => {
  return(
  <>
    <html>
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet"/>
        <title>{props.title}</title>
      </head>
      <body>
        <StaticRouter location={props.location}>
          {props.children}
        </StaticRouter>
      </body>
      <script type="module" src="/client.js" async></script>
    </html> 
  </>)
}
