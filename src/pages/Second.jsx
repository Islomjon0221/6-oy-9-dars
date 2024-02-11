import React from "react";
import FAQ from "./FAQ";

export  const UserContext = React.createContext(null);

function Second() {
  const user =[ 
    {id : 1, name: 'John', age: 54},
    {id : 2, name: 'Adam', age: 29},
    {id : 3, name: 'Alex', age: 13}
]
  return (
    
    <UserContext.Provider value={user}>
      <FAQ></FAQ>
    </UserContext.Provider>
  )
}

export default Second