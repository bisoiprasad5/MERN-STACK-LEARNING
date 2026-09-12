import React from 'react'
import Hero from './Hero'
import CustomButton from './CustomButton'
export default function App() {
  let styles ={
    color:"red",
    backgroundColor:"black",
    padding:"10px",
    margin:"10px",
    boarderRadius:"5px"
  }
  let btn1={...styles};
  btn1.backgroundColor="violet"
  return (
    <div>
      This is demo
      <Hero intro={"Welcome to our website!"} />
      <Hero/>
      {/* <Hero/>
      <Hero/>
      <Hero/>
      <Hero/> */}
      <CustomButton title={"login"} styles={styles} />
      <CustomButton title={"Sign up"} styles={btn1} />
    </div>
  )
}
