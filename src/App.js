// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/Aboutus';

function App() {
  return (
    <>
      
      <Navbar title="textutils"></Navbar>
      {/* <TextForm heading="Enter your text below"></TextForm> */}
      <About></About>
    </>
  );
}

export default App;
