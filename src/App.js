import { useState, useEffect } from 'react'
import './App.css';
import HeaderSection from './components/Header';
import Form from './components/jobForm'
import Footer from './components/Footer'
import JobContainer from './components/JobContainer'
import FormTitle from './components/FormTitle';
import 'semantic-ui-css/semantic.min.css'





const App = () => {

  const [jobs, setJobs] = useState([])
  const [stale, setStale] = useState(true)


  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then(resp => resp.json())
      .then(data => {
        setJobs(data)
        setStale(false)
      })
  }, [stale])

  return (
    <div>
      <HeaderSection />
      <FormTitle />
      <Form onSubmit={() => setStale(true)} />
      <JobContainer jobs={jobs} delete={() => setJobs()}/>
      <Footer />
    </div>
  )

}
 export default App