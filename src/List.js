import React from "react";
import Tour from './Tour';


const List = ({tours , removeTour}) =>{
    return(
        <div>
            <h1 className="tc">OUR TOURS</h1>
            {
                tours.map(tour =>{
                    return(
                        <div className="list tc">
                            <Tour
                                key ={tour.id}
                                {...tour}
                                removeTour={removeTour}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default List;