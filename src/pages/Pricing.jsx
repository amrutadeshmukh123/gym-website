import './Pricing.css';

export default function Pricing(){
    return(
        <>
          <div className='pricing'>
                <div className="title">
                    <h2>Our Plans</h2>
                </div>
                <div className="card-container2">
                    <div className="card1">
                        <h1>BASIC</h1>
                        <h2>500 Rs./Month</h2>
                        <li>Small workout plan</li>
                        <li>At home workout</li>
                        <li>Workout plan</li>
                        <button>Join Now</button>
                        
                    </div>
                    <div className="card1">
                    <h1>PRO</h1>
                        <h2>1000 Rs./Month</h2>
                        <li>Pro Gyms</li>
                        <li>Small workout plan</li>
                        <li>At home workout</li>
                        <button>Join Now</button>
                        
                    </div>
                    <div className="card1">
                    <h1>PREMIUM</h1>
                        <h2>1500 Rs./Month</h2>
                        <li>Elite gyms and classes</li>
                        <li>Small workout plan</li>
                        <li>At home workout</li>
                        <button>Join Now</button>                      
                    </div>
                
                
                </div>
            </div>
        
        </>
    )
}