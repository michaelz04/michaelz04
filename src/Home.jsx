import './Home.css'

function Home() {

  const workHistory = [
    {
      role: "Incoming Software Engineer Intern @ AMD",
      dateRange:"May 2026 - Aug 2027"
    },
    {
      role: "IT Business Analyst @ Intact",
      dateRange:"Sept 2025 - Dec 2025"
    },
    {
      role: "Software Developer @ Toromont CAT",
      dateRange:"Sept 2024 - Dec 2024"
    },
    {
      role: "Data Analyst @ Toromont CAT",
      dateRange:"Jan 2024 - Apr 2024"
    }
  ];
  return (
    <div className="dynamic-background"> 
      <h1>Michael Zhou</h1>
      <h2>CS & Stats @ University of Toronto</h2>
      <hr className="divider" />
      <h3>Image of Me</h3>
      <div class='sections'>
        <p>Hey! I'm Michael.</p>
        <hr className="subtle-divider" />
        <h3>Work Experience</h3>
        <div class='work-items'>
          {
            workHistory.map((job, index) => (
              <div key={index}>
                <p className="box">{job.role}</p>
                <p className="box">{job.dateRange}</p>
              </div>
            
            ))
          }
        </div>
        
        <hr className="subtle-divider" />
        <h3>Projects</h3>
        <h3>Writing</h3>

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
