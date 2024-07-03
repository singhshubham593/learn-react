import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
/* 
//Create element using tag
  const anotherElement=(
    <a href="https://google.com" target='_blank'>click me to visit google</a>
  )

  //variable pass after ancertag
  const anotherUser= "another way"
  //create Element tree using react 
  const reactElement= react.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'
    anotherUser // work as evaluated Expression like in App.jsx 
  )
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    /* anotherElement */
    /* reactElement */
    <App />
  </React.StrictMode>,
)
