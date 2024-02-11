import {UserContext} from "./Second"
import {  useContext } from "react"
function Form() {
        const user = useContext(UserContext);  
    
  return (
    <div className="wrapper-two">
        {
            user.map((data, i) => {
                return(
                <div key={i} className="cards">
                    <h3>{data.name}</h3>
                    <div>
                      <h3>{data.age}</h3>
                      <button>Delete</button>
                      </div>
                </div>
                )
                })
            
        }
    </div>
  )
}

export default Form