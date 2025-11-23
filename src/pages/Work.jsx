import '../styles/Work.css'
import Header from '../components/Header.jsx'

function Work() {

  const workHistory = [
    {
      role: "Incoming Software Engineer Intern @ AMD",
      dateRange:"May 2026 - Aug 2027",
      description: "Data & ML Infrastructure"
    },
    {
      role: "IT Business Analyst @ Intact",
      dateRange:"Sept 2025 - Dec 2025",
      description: "Snowflake Cortex AI"
    },
    {
      role: "Software Developer @ Toromont CAT",
      dateRange:"Sept 2024 - Dec 2024",
      description: "Data Pipelines"
    },
    {
      role: "Data Analyst @ Toromont CAT",
      dateRange:"Jan 2024 - Apr 2024",
      description: "Model Fitting"
    }
  ];
  return (
    <div> 
      <Header></Header>
        <h3>Work Experience</h3>
        <div class='items'>
            {
            workHistory.map((job, index) => (
                <div key={index}>
                <h4 className="box">{job.role}</h4>
                <p className="box">{job.dateRange}</p>
                <hr className="subtle-divider" />
                <p className="box">{job.description}</p>
                </div>
            
            ))
            }
        </div>
    </div>
  )
}

export default Work
