import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

console.log('CV or Resume REACT APP with useState()')
//What I've Learned:

//This project was to "hammer in" the concept of the REACT hook -> useState
//Specifically, this project was designed to create and use many useState variables
//One aspect I've learned is to use useState by "pass up to the parent component" - this action controlls the child components
//Another aspect I've tried was "overloading" a child component with many props, designed to use for that child component's child component. Looked kinda messy
//Lastly, to solve the previously "overloading" props, I instead, in the parent component, explicitly defined the grandchild component inside the body of the child component.
//The last approach was implemented using the "children" default prop and I extracted each grandchild component from "children" into their own variables...
//...and I think this approach was the best approach and visuallly elegant to read than the overloading props approach.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
