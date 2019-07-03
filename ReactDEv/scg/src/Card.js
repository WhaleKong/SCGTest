import React from 'react';
 
const Card = (props) => {
    return (
        <div className ='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt ='robot' src={ `https://robohash.org/${props.id}?200x200 `}/>
            <div className = 'b f4'>
                {props.name}
            </div>
        </div>
        
    )
}

export default Card;