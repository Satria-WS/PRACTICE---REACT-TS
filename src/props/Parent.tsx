
import React, { useContext, useEffect, useState } from "react";
import { Child , ChildAsFC } from "./Child";


const Parent = () => {
  return (
    <>
    <ChildAsFC color="red" children="1" onClick={() => {
      console.log('Hello World')
    }}/>
    </>
  )
}

export default Parent;