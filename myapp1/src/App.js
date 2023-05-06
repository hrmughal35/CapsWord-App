import { useState } from "react";
// import About from "./Components/About";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Main, Routes, Route} from 'react-router-dom';
function App() {
  // Below code is for setting the darkmode of web
  const [Dark, setDark] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const theme = () => {
    if (Dark === "light") {
      setDark("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Darkmode has been enabled!", "Success");
      document.title = "CapsWord-Darkmode"; //This will be written by using the equal signs because this is not a function.
    } else {
      setDark("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled!", "Success");
      document.title = "CapsWord-Lightmode"; //This will be written by using the equal signs because this is not a function.
    }
  };

  return (
    <>
      {/* <Main> */}
        {/* Here the Navbar is the main property name which helps to catch the properties in "Navbar.js" page */}
      <Navbar title="CapsWord" mode={Dark} theme={theme} />
      <Alert alert={alert} />
      <div className="container my-4" >
      {/* <Routes> */}
        {/* <Route exact path="/About" element={<About mode={Dark}/>} /> */}
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here below" mode={Dark}/>} /> */}
      {/* </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter your text here below" mode={Dark}/>
      </div>  
      {/* </Main> */}
 
{/* 
      // <div className="container my-4">
      // <TextForm showAlert={showAlert} heading="Enter your text here below" mode={Dark}/>
      // <About mode={Dark}/>
      // </div> */}
    </>
  );
}
export default App;
