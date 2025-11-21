import '../styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div> 
      <div class="header-links">
          <h3>
            [ <Link to="/">Home</Link> ]
          </h3>
          <h3>
            [ <Link to="/work">Work Experience</Link> ]
          </h3>
          <h3>
            [ <Link to="/projects">Projects</Link> ]
          </h3>
          <h3>
            [ <Link to="/writing">Writing</Link> ]
          </h3>
        </div>
        <hr className="subtle-divider" />    
    </div>
    
  )
}

export default Header
