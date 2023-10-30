import React, {useState} from 'react'
import '../Style Components/Consumables.css'

function Consumables() {

     const[count, setCount]= useState(new Array(5).fill(0))


     const increment=(index)=>{
           setCount((prevCount)=>{
           const updateCount=[...prevCount]
           updateCount[index] +=1
      
            return updateCount

        })  
     }
     const decrement=(index)=>{
           setCount((prevCount)=>{
              if(prevCount[index] <= 0){
                     return prevCount
              }

              const updateCount= [...prevCount]

              updateCount[index] -=1

              return updateCount
           })  
     }

    return (
        <>
            <div className="consumables_List">
                <h2>Equipment</h2>

                <div className="lists">
                    <ul>
                        <li>
                           
                           
                            <div className="details">
                            <h3>Gloves</h3>
                                <div className="own_rent">
                                    <p className='middle_red_line'>own</p>
                                    <p>Rent</p>
                                </div>
                                <div className="count">
                                    <p className='increment' onClick={()=>increment(0)}>+</p>
                                    <p className='count_value'>{count[0]}</p>
                                    <p className='decremnet' onClick={()=>decrement(0)}>-</p>
                                </div>
                            </div>
                        </li>


                     <li>
                            <div className="details">
                            <h3>Loaders</h3>
                                <div className="own_rent">
                                    <p className='middle_red_line'>own</p>
                                    <p>Rent</p>
                                </div>
                                <div className="count">
                                    <p  className='increment' onClick={()=>increment(1)}>+</p>
                                    <p className='count_value'>{count[1]}</p>
                                    <p  className='decremnet' onClick={()=>decrement(1)}>-</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="details">
                            <h3>Roller</h3>
                                <div className="own_rent">
                                    <p className='middle_red_line'>own</p>
                                    <p>Rent</p>
                                </div>
                                <div className="count">
                                    <p  className='increment' onClick={()=>increment(2)}>+</p>
                                    <p className='count_value'>{count[2]}</p>
                                    <p  className='decremnet' onClick={()=>decrement(2)}>-</p>
                                </div>
                            </div>
                            
                            </li>
                        <li>
                            
                            <div className="details">
                            <h3>Dump Trucks</h3>
                                <div className="own_rent">
                                    <p className='middle_red_line'>own</p>
                                    <p>Rent</p>
                                </div>
                                <div className="count">
                                    <p  className='increment' onClick={()=>increment(3)}>+</p>
                                    <p className='count_value'>{count[3]}</p>
                                    <p  className='decremnet' onClick={()=>decrement(3)}>-</p>
                                </div>
                            </div>
                            
                            </li>


                        <li>
                            <div className="details">
                            <h3>Bulldozers</h3>
                                <div className="own_rent">
                                    <p className='middle_red_line'>own</p>
                                    <p>Rent</p>
                                </div>
                                <div className="count">
                                    <p  className='increment' onClick={()=>increment(4)}>+</p>
                                    <p className='count_value'>{count[4]}</p>
                                    <p  className='decremnet' onClick={()=>decrement(4)}>-</p>
                                </div>
                            </div>
                            
                            </li>
                    </ul>
                </div>
                    
                 <button className='add'>+</button>

            </div>

        </>
    )
}

export default Consumables
