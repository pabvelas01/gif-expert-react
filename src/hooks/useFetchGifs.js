import {useState, useEffect} from "react"
import { getGif } from "../helpers/getGifs"

export const useFetchGifs = (category)=>{

    const [images,setImages]=useState([])
    const [isloading,setIsLoading]=useState(true)
    
    const getImage= async (category)=>{
         await getGif(category)
         .then(newImages=>setImages(newImages))
    }
     useEffect(()=>{
         /*  getGif(category)
         .then(newImages=>setImages(newImages))
         */
        getImage(category);
        setIsLoading(false)
 
 
    }, [] )

    return {
        images:images,
        isLoading: true
    }
}