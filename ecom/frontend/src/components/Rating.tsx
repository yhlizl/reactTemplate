import React from 'react'

interface Props {
    value : number;
    text : string; 
    color : string; 

}

const Rating:React.FC<Props>=({value,text,color})=>{
    const starCounts :number[] = [1,2,3,4,5]
    return (
        <React.Fragment>                        
            <div className="rating">

        {starCounts.map((item:number)=>(
            <span>
                <i style ={{color}} className={value>item?'fas fa-star':value>=item-0.5?'fas fa-star-half-alt':'far fa-star'}/>
            </span>
        ))
        }
        <span>{text&&text}</span>
        </div>
        </React.Fragment>
    )
    
}

export default Rating
