import React, { useState } from "react";

const dummy: any = [
  { name: "Joko", age: 10 },
  { name: "Sulitysyo", age: 45 },
  { name: "Naruto", age: 45 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user , setUser] = useState<{name: string , age: number | undefined}>();
  
  const Hello =  (x: number , y: number) : string =>  {
    if (x + y === 5) return 'here'
    else return 'heelo'

  }

  return (
    <>
      <div>
        <span>User Search: </span>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            console.log(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const foundUser = dummy.find((user: any) => {
              return user.name === name;
              
            });
            setUser(foundUser); 
            console.log('foundUser???',foundUser)
          }}
        >
          Find User:{" "}
        </button>

        <span> Text name: {name}</span>
        <p> User Name:{user?.name}</p>
        <p>age: {user?.age}</p>
        <p>all user: {user && user?.name && user?.age}</p>
        <span>function: {Hello(2,3)} </span>
      </div>
    </>
  );
};

export default UserSearch;
