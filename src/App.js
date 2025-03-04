
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import { useEffect, useState } from 'react';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate()

  const onLoginClick = () => {

    if (localStorage.getItem('user') != null) {
      localStorage.removeItem('user')
      navigate('/login')

    } else {
      navigate('/login')
    }
  }

  function NotFoundComp() {

    const navigate = useNavigate()

    const goToHome = () => {
      navigate('/home')
    }

    return (
      <>
        <div className='not-found-container'>
          <p>404 Page is not found.</p>
          <p>Click here to visit homepage !</p>
          <button onClick={goToHome}>Homepage</button>
        </div>
      </>
    )
  }

  const Login = () => {

    const { register,
      handleSubmit,
      formState: { errors },
      reset } = useForm()

    useEffect(() => {
      if (localStorage.getItem('user') != null) {
        navigate('user')
      }


    }, [])
    //empty defeciancy useEffect

    const userArray = [
      {
        username: 'amruta@gmail.com',
        password: '1234567',
        fullname: 'Amruta Deshmukh'
      },
      {
        username: 'shruti@gmail.com',
        password: '123456',
        fullname: 'Shrutika Kadam'
      },
      {
        username: 'praju@gmail.com',
        password: '12345',
        fullname: 'Prajakta Deshmukh'
      },
      {
        username: 'nikita@gmail.com',
        password: '1234',
        fullname: 'Nikita Ingle'
      }
    ]

    const onFormSubmit = (data) => {
      let status = false
      let i = 0
      for (i = 0; i < userArray.length; i++) {
        if (userArray[i].username === data.username && userArray[i].password === data.pwd) {
          status = true;
          break;
        }
      }
      if (status === true) {
        localStorage.setItem('user', JSON.stringify(userArray[i]))
        toast.success('Login successfull !');
        navigate('user')
      } else {
        toast.error('Invalid username and password !')
        reset();
      }
    }



    return (
      <>
        <div className='login-container'>
          <div className='title'>
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className='input-field'>
              <label>Username</label>
              <input type='email' {...register('username', {
                required: 'Username is required !!',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid username !!'
                }
              })}></input>
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className='input-field'>
              <label>Password</label>
              <input type='password' {...register('pwd', {
                required: 'Password is required !!'
              })}></input>
              {errors.pwd && <p>{errors.pwd.message}</p>}
            </div>
            <button type='submit'>Login</button>

          </form>

        </div>

      </>
    );
  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <div className='header'>
        <h2>Basic-fit Gym</h2>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`}>
          <NavLink to="home" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="about" onClick={toggleMenu}>About us</NavLink>
          <NavLink to="services" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="pricing" onClick={toggleMenu}>Pricing</NavLink>
          <button className={
            localStorage.getItem('user') != null ? 'logout' : ''
          }  onClick={() => {
            onLoginClick(); 
            toggleMenu();
          }}>
            {
              localStorage.getItem('user') != null ? 'Logout' : 'Login'
            }
          </button>
        </div>
      </div>
      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/services' Component={Services} />
        <Route path='/pricing' Component={Pricing} />
        <Route path='/login' element={Login()} />
        <Route path='/user' Component={Dashboard} />
        <Route path='*' element={NotFoundComp()} />
      </Routes>

    </>
  )

}

export default App;
