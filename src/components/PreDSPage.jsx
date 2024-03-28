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
        <PreDS title="School of Information Master's Association (SIMA) Event Planning and Marketing Lead" description="I was in charge of planning and marketing program-wide events for SIMA. This student led organization supports 600+ master's students (MSI program) within the School of Information. As an organization, we provide weekly events for the MSI students to attend. I worked with the office of student life to develop and host most of the events held during the fall 2023 orientation week for all new incoming MSI students. I revamped the MSI social experience and am proud!" imageUrl={umsi} date='April 2023 - April 2024'/>

        <PreDS title="Information Ethics (SI 302) Graduate Student Instructor" description="I was a Graduate Student Instructor for an undergraduate level information ethics course (SI 302). I help plan material for the course, meet with students to offer constructive feedback, and participate in the grading process. One of my favorite topics from the semester revolved around AI and the various ways it's permeating into our life. Is that a generational problem? We'll see!" imageUrl={umsi} date='September 2023 - December 2023'/>

        <PreDS title="Undergraduate Clinical Research Assistant" description="I was involved with multiple clinical studies for various gastrointestinal disorders, including Celiac Disease, GERD, IBS, IBD, and Barrett’s Esophagus. I facilitated study recruitment, led clinic visits, and monitored data collection. I interacted with over 16,000 patient charts and made hundreds of calls to greatly influence study recruitment. One of the highlights of being involved in research was the exposure to how complex healthcare is. And that the MiChart UX needs to fundamentally be altered (one inspiration for going into tech)" imageUrl={michmed} date='September 2018 - June 2022'/>

        <PreDS title="Chemistry 211 (Organic Chemistry 1 Lab) Graduate Student Instructor" description="I supervised Chemistry 211 (Organic Chemistry 1 Lab) students in weekly lab sessions and evaluated student progress to consistently improve the quality of lab techniques and understanding of course material" imageUrl={chem} date='September 2021 - May 2022; January 2023 - May 2023'/>

        <PreDS title="MMSS Organic Chemistry Course Assistant" description="I taught and mentored high school students participating in two different 3-week summer enrichment experiences in organic chemistry. Cheers to Professor Nolta for getting me involved in this fun experience!" imageUrl={chem} date='June 2021 - July 2021'/>
        
        <PreDS title="Dance Marathon at the University of Michigan" description="I got involved with DMUM my junior year, where I was on the family relations committee. This was during COVID, so I helped facilitate virtual events bringing together the families DMUM helps and organization members in lieu of normal in-person gatherings. My senior year, I was on the K-12 Engagement committee, where I helped foster communication with many local schools to generate awareness about DMUM and provided initiatives for K-12 student involvement which culminated in arranging K-12 student-specific events." imageUrl={dmum} date='June 2020 - April 2022'/>

        <PreDS title="Organic Chemistry Tutoring" description="I've dedicated countless hours towards educating future healthcare professionals in the domain of Chemistry 210 and 215 (Organic Chemistry 1 and 2) these past couple years. I love teaching (in small bursts) and creating silly analogies on the spot to relate the chemistry to real life. Orgo can really just be broken down into human emotion and friend drama." imageUrl={orgo} date='2022 - Present' />
        </div>
    </main>
    
    </>
  )}
  
  export default ProjectsPage;