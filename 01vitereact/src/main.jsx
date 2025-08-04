import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function Myapp (){
  return(
    <h1>hello shubham</h1>
  )
}

// const reactElement ={
//   type:"a",
//   props: {
//       href:"htttp://google.com",
//       target:"_blank"
//   },
//   children:"Click me to visit google"
// }

// trying to render an object in correct way 
const anotherElement =(
  <a href="https://google.com" target='_blank' >Visit google</a>
)


// creating object using Recat .createElemnt
const reactElement = React.createElement(
  'a',//tag name,
  {href:"https://google.com",target:"_blank"},//attribute of that element if there is o attribute to that tag then you can let it be blank
  "Click me to visit google shubham"//content inside that tag
)

createRoot(document.getElementById('root')).render(

    // reactElement //it will not run because if we are using bundler to craete a react app so then there are some of restristion to take parameter or pass an arguments so this is not the way the bundler accepts the arguments
    // Myapp()//it will also run because in this function we are just executing function or calling a function now it is just another way of writing <Myapp /> both will work as same
    // <Myapp />
    // anotherElement //this will be executed this is how a bundler accepts object

    reactElement//craeted using React.craeteelement 

  )
