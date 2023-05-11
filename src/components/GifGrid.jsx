import { useState, useEffect } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifItem } from '../components';

export const GifGrid = ( { category } ) => {
    
    const { images, isLoading } = useFetchGifs( category );

    return (
    <>
        <h3>{category}</h3>
        {/* custom component */}
        {/* <LoadingMessage isLoading /> */}
        {
            // operador and logico
            isLoading && ( <h2>Cargando...</h2> ) 
            //operador ternario
            // isLoading 
            // ? ( <h2>Cargando...</h2> ) 
            // : null
        }
        
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id } 
                        {...image}
                    />
                ))
            }
        </div>
    </>
    )
}

