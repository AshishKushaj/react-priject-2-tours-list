import React from "react";
import Button from "./Button";
import { useState } from "react";


const Tour = ({id, name ,info , image, price , removeTour }) =>{

    const [fullText , setFullText] = useState(false);

    return(
        <div className="dib tc container br3">
            <img 
                className="image"
                src={image}
                alt={name}

            />
            
            <div className="pr3 pl3 tc">
                <h3 className="name">{name}</h3>
                <h3 className="price ">$ {price}</h3>
            </div>

            <div>
                <p className="info">
                    {
                        fullText? info : `${info.substring(0,200)}...`
                    }

                    <button 
                        className="toggle-btn"
                        onClick={()=> setFullText(!fullText)}>
                            {
                                fullText? ' Show Less':' Read More'
                            }
                    </button>
                </p>

            </div>

            <Button id={id} removeTour={removeTour}/>
                
        </div>
    )

}


export default Tour;