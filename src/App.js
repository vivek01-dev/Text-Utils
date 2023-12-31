import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/Form';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1100);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1f1f1f'
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below " mode={mode} />}></Route>
          </Routes>
        </div >
      </Router>
    </>
  );
}
export default App;