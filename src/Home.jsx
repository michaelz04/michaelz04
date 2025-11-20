import './Home.css'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div> 
      <h1>Michael Zhou</h1>
      <h2>CS & Stats @ University of Toronto</h2>
      <hr className="divider" />
      <h3>Image of Me</h3>
      <div class='sections'>
        <p>Hey! I'm Michael.</p>
        <hr className="subtle-divider" />
        
        <h3>
          [ <Link to="/work">Work Experience</Link> ]
        </h3>
        <h3>
          [ <Link to="/projects">Projects</Link> ]
        </h3>
        <h3>[ Writing ]</h3>

      </div>

      <div class='contacts'>
        <a href='https://linkedin.com/in/michaelz04' target="_blank">LinkedIn</a>
        <a href='https://github.com/michaelz04/' target="_blank">GitHub</a>
        <a href="/Michael_Resume.pdf" target="_blank">Resume</a>
      </div>
      
    </div>
  )
}

export default Home
