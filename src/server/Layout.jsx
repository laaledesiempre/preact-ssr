import {h, Fragment} from 'preact'
import {StaticRouter} from 'react-router-dom/server'

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
    <script type="module" src="/client.js" async></script>
  </body>
</html> 
  </>)
}
