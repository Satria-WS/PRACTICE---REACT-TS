import React, { useContext, useEffect, useState } from "react";

interface ChildProps {
  color: string;
  children: string;
  onClick: () => void;
}

export const Child = ({ color , onClick }: ChildProps) => {
  return (
    <>
      <div>
        return{" "}
        <div>
          I have {color}
          <button onClick={onClick}>FUCK OFF!!!</button>
        </div>
      </div>
    </>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color  , onClick , children}) => {
  return <div>
    
    {color}
    {children}
  </div>;
};


// this code can be broken if running yarn local , the solutin comment this part
//the fucntion this part , for seeks compnent of props type typescript
// ChildAsFC.displayName;
