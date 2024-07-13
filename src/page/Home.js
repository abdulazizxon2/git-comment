import React, { useContext } from "react";
import { Context } from "../context/Context";
function Home(){
  let {text} = useContext(Context)
  return <>
  <h1>{text}</h1>
  </>
}
export default Home;