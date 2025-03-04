import { useEffect } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){

    const navigate = useNavigate()


    useEffect(()=>{
        if(localStorage.getItem('user') === null){
           navigate('/login')
        }
    },[])

    return(
        <> 
          <div className="dashboard">
            <h2>Welcome User..!!</h2>
          </div>   
        </>
    )
}