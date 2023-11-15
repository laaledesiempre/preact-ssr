//Imports:
import {h, Fragment} from 'preact'
import {StaticRouter} from 'react-router-dom/server'

//Static layout code:
export const Layout = (props) => {
  return(
  <>
    <html>
      <head>
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
