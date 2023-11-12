import {h, Fragment} from 'preact'
import {StaticRouter} from 'react-router-dom/server'
export const Layout = (props) => {
  return(<>
<html>
<head>
<title>{props.title}</title>
</head>
<body>

<h1>This seems to work!</h1>
        <div id="hi"></div>
        <div id="app">

<StaticRouter location={props.location}>
  {props.children}
</StaticRouter>

        </div>
           <script type="module" src="/client.js" async></script>
</body>
</html> 
  </>)
}
