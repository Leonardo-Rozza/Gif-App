import {getGif} from "../helpers/getGifs.js";
import {useEffect, useState} from "react";

export const GifGrid = ({category}) => {
    const [image, setImage] = useState([]);

    const getImage = async ()=>{
        const newImage = await getGif(category);
        setImage(newImage);
    }


    useEffect(() => {
        getImage()
    }, []);

    return (
        <>
            <h3>{category}</h3>

        </>
    );
}