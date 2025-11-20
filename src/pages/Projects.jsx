import '../styles/Projects.css'

function Work() {

  const workHistory = [
    {
      role: "Incoming Software Engineer Intern @ AMD",
      dateRange:"May 2026 - Aug 2027",
      description: ""
    },
    {
      role: "IT Business Analyst @ Intact",
      dateRange:"Sept 2025 - Dec 2025",
      description: ""
    },
    {
      role: "Software Developer @ Toromont CAT",
      dateRange:"Sept 2024 - Dec 2024",
      description: ""
    },
    {
      role: "Data Analyst @ Toromont CAT",
      dateRange:"Jan 2024 - Apr 2024",
      description: ""
    }
  ];
  return (
    <div> 
        <h3>Projects</h3>
        <div class='project-items'>
          <p className="box">Stock Market SNS</p>
          <p className="box">Developed a comprehensive database-backed social networking application for stocks using PostgreSQL that managed user portfolios, computed in-database statistics and predictions from 5 years of historical data , and implemented features for friend management and controlled sharing and reviewing of stock lists.</p>
        </div>
    </div>
  )
}

export default Work
