import useAuth from '../hooks/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth();

    const location = useLocation()

    if (user) {
        return children
    }
    
    else if(loading){
        return `<span className="loading loading-spinner loading-lg"></span>`
    }



    return ( 
        Swal.fire({
            icon: "warning",
            title: "Please Login First!!",
          }),
    <Navigate state={location.pathname} to="/login"></Navigate>
    
    );
};

export default PrivateRoutes;