import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TEInput, TERipple } from 'tw-elements-react';
import SocialLogin from './SocialLogin';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Login = () => {

  const {loginUser} = useAuth();
  const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        loginUser(email, password)
        .then(res => {
          console.log(res.user)
          Swal.fire({
            title: "User Login SuccessFull",
            showConfirmButton: false,
            icon: "success",
            timer: 1500
          });
          navigate("/")
        })
        .catch(err => {
          console.log(err.message);
        })
    
      }

    return (
        <>
          <div className="g-6 px-10  my-10 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="./img/login-form.png"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
          <h2 className='text-4xl font-semibold my-3'>Login Now</h2>
            <form onSubmit={handleLogin}>
              {/* <!-- Email input --> */}
              <TEInput
                type="email"
                name='email'
                label="Email address"
                size="lg"
                className="mb-6"
              ></TEInput>

              {/* <!--Password input--> */}
              <TEInput
                type="password"
                name='password'
                label="Password"
                className="mb-6"
                size="lg"
              ></TEInput>
              {/* <!-- Submit button --> */}

              <TERipple rippleColor="light" className="w-full">
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign in
                </button>
              </TERipple>
              {/* register Link */}
              <p className="mb-0 mt-2 pt-1 text-sm font-semibold dark:text-white">
                  Don't have an account?{" "}
                  <Link to='/register' className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Register</Link>
                </p>
              {/* <!-- Divider --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                  OR
                </p>
              </div>

              {/* <!-- Social login buttons --> */}
            </form>
            <SocialLogin/>
          </div>
        </div>
        </>
    );
};

export default Login;