import React from "react";

export const GifItem = ({title,url,isLoading})=>{
    return (
        <>
        { isLoading && (<h3>Cargando...</h3>)}
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
        </>
    )
}