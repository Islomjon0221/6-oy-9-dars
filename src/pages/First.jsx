import axios from "axios"
import { useEffect, useState } from "react"

function First() {
    
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + 'card')
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (<div className="first-wrapper">
        {
            data.map((app, i) => {
                return(
                    <div key={i} className="card">
                        <img src={app.img} alt="img" />
                        <div className="text">
                            <h4>{app.name}</h4>
                            <h4>{app.age}</h4>
                            <h4>{app.desc}</h4>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default First