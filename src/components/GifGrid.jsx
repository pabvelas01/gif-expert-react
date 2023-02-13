import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'


export const GifGrid = ({category})=> {

    /*
    const [images,setImages]=useState([])
    
   const getImage= async ()=>{
        await getGif()
        .then(newImages=>setImages(newImages))
   }
    useEffect(()=>{
          getGif(category)
        .then(newImages=>setImages(newImages))


   }, [] )
    */

   const {images, isLoading} = useFetchGifs( category );

    return (
        <>
        <h3>{category}</h3>
       
        <div className="card-grid">
            { images.map( (image) =>
                ( <GifItem key={image.id}
                    {...image}
                /> )
             ) }
        </div>
        </>
    )
}