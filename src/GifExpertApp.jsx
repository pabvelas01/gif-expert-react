import React, { useState } from "react";  // desde la version 17de react ya no es necesario importar esto
import { AddCategory ,GifGrid } from "./components";

export const GiftExpertAPP = ()=>{
    const [categories, setCategories] = useState(['One Punch','Cazador X']);
    console.log(categories)    
    const onAddCategory=(value)=>{
       if (categories.includes(value)) return;
        setCategories([value , ...categories])
    } 
    return (
        <>
        {/** titulo */}
            <h1>GiftExpertAPP</h1>
            {/** input */}
            {/*<AddCategory setCategories={onAddCategory}/> */}
            <AddCategory 
            onNewCategory ={onAddCategory}
            /> 

            {/** listado de gift */}
                {categories.map(category=>
                         ( <GifGrid key={category} category={category} />) )
                    }
                
           
             {/** individualhttp://localhost:5174 */}
        </>
    )
}