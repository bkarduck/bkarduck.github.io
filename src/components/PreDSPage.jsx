// HomePage.js
import PreDS from "./preDS";
import chem from './../assets/images/chem.jpeg'
import dmum from './../assets/images/dmum.jpeg'
import michmed from './../assets/images/michmed2.png'
import orgo from './../assets/images/orgo3.png'
import umsi from './../assets/images/umsi.png'
function ProjectsPage() {
    return (
      <>
    
      <main>
    <div class="container">

        <h2>a little less technical</h2>
        <p>
            Throughout my undergraduate career, I admittedly thought my life was going in a wildly different direction. I was as pre-med oriented as you could be. Ultimately, I decided to pursue my love for logic and problem solving in another fashion. I'd love to highlight some of my experiences both within healthcare and outside of that realm that have shaped me into the person I am today.
        </p>
        <PreDS title="School of Information Master's Association (SIMA) Event Planning and Marketing Lead" description="This is project 2" imageUrl={umsi} date='April 2023 - April 2024'/>
        <PreDS title="Information Ethics (SI 302) Graduate Student Instructor" description="This is project 2" imageUrl={umsi} date='September 2023 - December 2023'/>
        <PreDS title="Undergraduate Clinical Research Assistant" description="This is project 1" imageUrl={michmed} date='September 2018 - June 2022'/>
        <PreDS title="Chemistry 211 (Organic Chemistry 1 Lab) Graduate Student Instructor" description="This is project 2" imageUrl={chem} date='September 2021 - May 2022; January 2023 - May 2023'/>
        <PreDS title="MMSS Organic Chemistry Course Assistant" description="This is project 2" imageUrl={chem} date='June 2021 - July 2021'/>
        
        <PreDS title="Dance Marathon at the University of Michigan" description="This is project 1" imageUrl={dmum} date='June 2020 - April 2022'/>
        <PreDS title="Organic Chemistry Tutoring" description="This is project 2" imageUrl={orgo} date='September 2021 - Current' />
        </div>
    </main>
    
    </>
  )}
  
  export default ProjectsPage;