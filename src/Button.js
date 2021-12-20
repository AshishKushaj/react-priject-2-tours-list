import React from "react";


const Button =({id,removeTour})=>{

    return(
        <div className="tc">
            <button
                className="button"
                onClick={() => removeTour(id)}
                type="button">Not Interested!</button>
        </div>
    );
}

export default Button;