import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Cookies = () => {
   
    Swal.fire('Bienvenido, al entrar en este sitio estas aceptando nuestras cookies');

}

export default Cookies;