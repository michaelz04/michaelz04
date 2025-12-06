import '../styles/Home.css'
import Header from '../components/Header.jsx'

function Home() {

  return (
    
    <div> 
      <Header></Header>
      <h1>Michael Zhou</h1>
      <h2>CS & Stats @ University of Toronto</h2>
      <h3>Image of Me</h3>
      <hr className="subtle-divider" />

      <div class='contacts'>
        <a href='https://linkedin.com/in/michaelz04' target="_blank">LinkedIn</a>
        <a href='https://github.com/michaelz04/' target="_blank">GitHub</a>
        <a href="/Michael_Resume.pdf" target="_blank">Resume</a>
      </div>
      
    </div>
  )
}

export default Home
