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
          <h1>Dashboard page</h1>       
        </>
    )
}