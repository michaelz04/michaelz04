import '../styles/Work.css'

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
        <h3>Work Experience</h3>
        <div class='work-items'>
            {
            workHistory.map((job, index) => (
                <div key={index}>
                <p className="box">{job.role}</p>
                <p className="box">{job.dateRange}</p>
                <p className="box">{job.description}</p>
                </div>
            
            ))
            }
        </div>
    </div>
  )
}

export default Work
