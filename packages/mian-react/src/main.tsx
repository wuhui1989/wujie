import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import WujieReact from 'wujie-react'

import {hostMap} from './hostMap'

const {setupApp,bus } = WujieReact;
import lifecycles from './lefecycles'

// const attrs = {src:"http://localhost:6900"}

bus.$on('click',(msg:string)=>{
  alert(msg)
})

// setupApp({
//   name: "myapp",
//   url: hostMap["//localhost:6900/"],
//   attrs,
//   exec: true,
//   // fetch: credentialsFetch,
//   // degrade,
//   ...lifecycles as any,
// });




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
