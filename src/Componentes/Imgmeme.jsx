import React, {useState, useEffect} from 'react';
import html2canvas from 'html2canvas';
import { useFetch } from '../useFetch';

const Imgmeme = () => {
  
    const { apiMeme } = useFetch("https://api.imgflip.com/get_memes");
    const [textomeme, setTextomeme] = useState();
    const [textomeme2, setTextomeme2] = useState();
    const [textomeme3, setTextomeme3] = useState();
    const [textomeme4, setTextomeme4] = useState();
    const [textomeme5, setTextomeme5] = useState();
    const [textomeme6, setTextomeme6] = useState();
    const [imgMeme, setImgMeme] = useState();

    const textmeme = (e) =>{
        setTextomeme(e.target.value);
        console.log(e.target.value);
    }

    const textmeme2 = (e) =>{
      setTextomeme2(e.target.value);
      console.log(e.target.value);
    }

    const textmeme3 = (e) =>{
      setTextomeme3(e.target.value);
      console.log(e.target.value);
    }

    const textmeme4 = (e) =>{
      setTextomeme4(e.target.value);
      console.log(e.target.value);
    }

    const textmeme5 = (e) =>{
      setTextomeme5(e.target.value);
      console.log(e.target.value);
    }

    const textmeme6 = (e) =>{
      setTextomeme6(e.target.value);
      console.log(e.target.value);
    }

    const seleccionarImg = (e) => {
        setImgMeme(e.target.value);
        console.log(e.target.value);
    }

    const descarga = (e) => {
      html2canvas(document.querySelector("#exportar"), {useCORS: true}).then(function(canvas) {
        let img = canvas.toDataURL("image/jpeg");
        let link = document.createElement("a");
        link.download = "memepropio.png";
        link.href = img;
        link.click();

    });
    }

  return (
    <div>
      <h1 className='mt-5 mb-3 text-light '>Editá tu propio meme</h1>

      <h2 className='mt-2 mb-3'>Escribí tu frase</h2>
      <div class="container">
      <div class = "row">
        <div class="form-floating mb-3 w-25 m-auto d-block">
          <input onChange={textmeme} className="form-control" id="floatingInput texto1" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la izquierda</label>
        </div>
        <div class="form-floating mb-3 w-25 m-auto d-block">
          <input onChange={textmeme2} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba al centro</label>
        </div>
        <div class="form-floating mb-3 w-25 m-auto d-block">
          <input onChange={textmeme3} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la derecha</label>
        </div>
      </div>
      <div class = "row">
        <div class="form-floating mb-3 w-25 m-auto d-block">
          <input onChange={textmeme4} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frace de abajo a la izquierda</label>
        </div>
        <div class="form-floating mb-3 w-25 m-auto d-block">
          <input onChange={textmeme5} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frace de abajo al centro</label>
        </div>
        <div class="form-floating mb-3 w-25 m-auto d-block">
          <input onChange={textmeme6} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frace de abajo a la derecha</label>
        </div>
      </div>
      </div>
        <h2 className='mt-2 mb-3'>Elegí la imagen para tu meme</h2>
        <select id="contenedor" onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" aria-label="Default select example">
          <option>Selecciona una imagen</option>
          {apiMeme.map((item) => (
           <option key={item.id} value={item.url}>{item.name}</option>
         ))}
        </select>   
        
        <figure id='exportar'>
          <p className='mt-5 w-100 position-absolute top-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-200px, 0px)`}}>{textomeme}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(0px, 0px)`}}>{textomeme2}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(200px, 0px)`}}>{textomeme3}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-200px, 650px)`}}>{textomeme4}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(0px, 650px)`}}>{textomeme5}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(200px, 650px)`}}>{textomeme6}</p>  
          <img src={imgMeme} id='fondomeme' className='figure-img mt-3 d-block m-auto memeImg'/>
        </figure>

        <button onClick={descarga} type='button' className='btn btn-primary mt-5 mb-4'>Descargar meme</button>
   
        </div>
  )
}

export default Imgmeme;