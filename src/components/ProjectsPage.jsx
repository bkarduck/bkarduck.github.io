// HomePage.js
import Projects from "./Projects";
function ProjectsPage() {
    return (
      <>
    
      <main>
    <div class="container">

        <h2>Projects</h2>
        <p>
            Here are some of my projects.
        </p>
        <Projects title="Project 1" description="This is project 1" imageUrl="https://via.placeholder.com/150" projectUrl=""/>
        <Projects title="Project 2" description="This is project 2" imageUrl="https://via.placeholder.com/150" projectUrl=""/>
        </div>
    </main>
    
    </>
  )}
  
  export default ProjectsPage;