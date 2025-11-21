import '../styles/Projects.css'

function Work() {

  const projects = [
    {
      name: "Stock Market SNS",
      tools:"React.js, Node.js, Express.js, PostgreSQL",
      description: "Developed a comprehensive database-backed social networking application for stocks using PostgreSQL that managed user portfolios, computed in-database statistics and predictions from 5 years of historical data , and implemented features for friend management and controlled sharing and reviewing of stock lists."
    },
    {
      name: "Grant Service",
      tools:"Svelte, Shadcn, PrismaDB, Supabase, Docker, Vercel",
      description: "Developed a full-stack grant management application using SvelteKit and Shadcn/UI for a responsive user interface, PrismaDB and Supabase for the database, and Docker for standardized development, all supported by an automated CI/CD pipeline on Vercel and GitHub to ensure rapid deployment."
    },
    {
      name: "Mall Application",
      tools:"Java, Android Studio, Firebase, MVC, Agile",
      description: "Developed a Mall Application, an Android mobile application developed using Java and Android Studio. The development was managed by a team of five utilizing the Agile Scrum methodology with a focus on incremental delivery. The application leveraged the Model-View-Controller (MVC) architectural pattern for code modularity and integrated Firebase for real-time authentication and database storage."
    }
  ];
  return (
    <div> 
        <h3>Projects</h3>
        <div class='items'>
            {
            projects.map((project, index) => (
                <div key={index}>
                <h4 className="box">{project.name}</h4>
                <p className="box">{project.tools}</p>
                <hr className="subtle-divider" />
                <p className="box">{project.description}</p>
                </div>
            
            ))
            }
        </div>
    </div>
  )
}

export default Work
