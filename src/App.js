import { useState } from 'react'
import './App.css';
import HeaderSection from './components/Header';
import Form from './components/Form'
import Footer from './components/Footer'


const submitCareerForm = () => {
console.log("submitted Career form")
}


function App() {
  const [results, setresults] = useState([])
  return (
    <div className="App">
      <HeaderSection />
      <Form submitCareerForm={submitCareerForm}/>
      <Footer />
    </div>
  );
}

export default App;
