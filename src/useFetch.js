import { useState, useEffect } from "react";


export function useFetch(url){
const [apiMeme, setapiMeme]= useState([]);

const fetchapiMeme = (url) => {
    fetch (url)
    .then((response) => response.json())
    .then((data) => setapiMeme(data.data.memes));

};

useEffect(() => {
    fetchapiMeme(url)

}, []);

    return{ apiMeme };
}