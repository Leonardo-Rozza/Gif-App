import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Blue look', 'Code Geass']);

    const onAddCategory = ( newCategorie ) =>{
        if (categories.includes(newCategorie)) return;
        setCategories([newCategorie, ...categories]);
    }


    return (
        <>

            <h1>GifExpertApp</h1>


            <AddCategory onNewCategory = { onAddCategory }/>

            {
                categories.map((category) => <GifGrid key={ category} category={category}/>)
            }


            
        </>
    );
}