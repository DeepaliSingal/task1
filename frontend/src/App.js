import './App.css';
import { Header, Footer } from './components';
import Img1 from "./img/main_img.png";
import Img2 from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container mx-auto flex'>
        <img src={Img1}></img>
        <div className='form bg-white mt-10 rounded-3xl ml-60 pt-8 pr-12 pl-12 pb-12'>
          <img src={Img2} className='ml-auto mr-auto'></img>
          <form>
            <input className='border-2 border-gray w-full mt-7 rounded-2xl p-2' placeholder='Email or Phone'></input>
            <input className='border-2 border-gray w-full mt-5 rounded-2xl p-2' placeholder='Password'></input>
            <p className='text-l font-semibold mt-2 ml-1'>Forgot Password?</p>
            <button type='submit' className='rounded-2xl w-full mt-2 bg-primary pt-1 pb-1 text-white'>Sign in</button>
            <p className='text-xs text-center mt-2 ml-1 text-gray-100'>Don't have an account? <span className='text-secondary'>Signup</span></p>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
