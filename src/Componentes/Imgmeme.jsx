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
    const [textomeme7, setTextomeme7] = useState();
    const [textomeme8, setTextomeme8] = useState();
    const [textomeme9, setTextomeme9] = useState();
    const [textomeme10, setTextomeme10] = useState();
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

    const textmeme7 = (e) =>{
      setTextomeme7(e.target.value);
      console.log(e.target.value);
    }

    const textmeme8 = (e) =>{
      setTextomeme8(e.target.value);
      console.log(e.target.value);
    }

    const textmeme9 = (e) =>{
      setTextomeme9(e.target.value);
      console.log(e.target.value);
    }

    const textmeme10 = (e) =>{
      setTextomeme10(e.target.value);
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

      
        <h2 className='mt-2 mb-3'>Elegí la imagen para tu meme</h2>
        <select id="contenedor" onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" aria-label="Default select example">
          <option>Selecciona una imagen</option>
          {apiMeme.map((item) => (
           <option key={item.id} value={item.url}>{item.name}</option>
         ))}
        </select>   


      <div className="contenedorfraces">
        <div className="form-floating mb-3 w-250 m-auto d-block ariz borra">
          <input onChange={textmeme} className="form-control" id="floatingInput texto1" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la izquierda</label>
        </div>
        <div className="form-floating mb-3 w-250 m-auto d-block arce">
          <input onChange={textmeme2} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba al centro</label>
        </div>
        <div className="form-floating mb-3 w-250 m-auto d-block arde borra">
          <input onChange={textmeme3} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la derecha</label>
        </div>
        <div className="form-floating mb-3 w-250 m-auto d-block ce1iz borra">
          <input onChange={textmeme7} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la derecha</label>
        </div>
        <div className="form-floating mb-3 w-250 m-auto d-block ce2iz borra">
          <input onChange={textmeme8} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la derecha</label>
        </div>

        <figure id='exportar' className='cece'>
          <p className='mt-5 w-100 position-absolute top-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-700px, 0px)`}}>{textomeme}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme txt1' style={{transform: `translate(-450px, 0px)`}}>{textomeme2}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-200px, 0px)`}}>{textomeme3}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-700px, 650px)`}}>{textomeme4}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme txt2' style={{transform: `translate(-450px, 650px)`}}>{textomeme5}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-200px, 650px)`}}>{textomeme6}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-700px, 200px)`}}>{textomeme7}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-700px, 400px)`}}>{textomeme8}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-200px, 200px)`}}>{textomeme9}</p>
          <p className='mt-5 w-100 position-absolute end-20 start-30 h1 text-light txtmeme' style={{transform: `translate(-200px, 400px)`}}>{textomeme10}</p>
          <img src={imgMeme} id='fondomeme' className='figure-img mt-3 d-block m-auto memeImg'/>
        </figure>

        <div className="form-floating mb-3 w-250 m-auto d-block ce1de borra">
          <input onChange={textmeme9} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la derecha</label>
        </div>
        <div className="form-floating mb-3 w-250 m-auto d-block ce2de borra">
          <input onChange={textmeme10} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frase de arriba a la derecha</label>
        </div>

        <div className="form-floating mb-3 w-250 m-auto d-block abiz borra">
          <input onChange={textmeme4} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frace de abajo a la izquierda</label>
        </div>
        <div className="form-floating mb-3 w-250 m-auto d-block abce">
          <input onChange={textmeme5} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frace de abajo al centro</label>
        </div>
        <div className="form-floating mb-3 w-250 m-auto d-block abde borra">
          <input onChange={textmeme6} className="form-control" id="floatingInput" type="text" placeholder="Pone tu frase" name="meme"/>
          <label for="floatingInput">Frace de abajo a la derecha</label>
        </div>
      </div>

        <button onClick={descarga} type='button' className='btn btn-primary mt-5 mb-4'>Descargar meme</button>
   
        </div>
  )
}

export default Imgmeme;