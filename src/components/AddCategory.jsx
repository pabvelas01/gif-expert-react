import { useState } from "react"

// aca lo mas normal es el props para leer las etiquetas en caso de tenerlas
// en caso de desempaquetar, se aplica directamente
export const AddCategory= ({onNewCategory})=>{

    const [inputValue,setInputValue]=useState()

    const onInputChange=(event)=>{
        console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmitForm=(event)=>{
        event.preventDefault();

        if (inputValue.trim().length<=1) return;

        //setCategories((categories)=>[inputValue,...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')

    }

    return (
    <form onSubmit={onSubmitForm}>
        <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
    
    )
}