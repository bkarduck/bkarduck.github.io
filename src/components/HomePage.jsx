// HomePage.js
import Education from "./Education";
// import reactLogo from './../assets/react.svg'
import umich from './../assets/images/umich.png'
import umsi from './../assets/images/umsi.png'
function HomePage() {
    return( 
    <>
    
    <body>
      
    
    <div class="container">
      <h2>About me</h2>
      <p>
          I am a whimsical data scientist and a #girlboss. 
      </p>
      <p>
          I am a master's student at the University of Michigan, set to graduate in May 2024.
      </p>
      <p>
          Last summer I was a data science intern at Aon. My favorite fun fact to share   
      </p>
      <p>
          My favorite fun fact to share is that I've been to more countries than US states. My last journey took me to Spain and Portugal in March 2024. I also am obsessed with the iMessage game Word Hunt. No shame. 
      </p>
      <p>
          Currently looking for new grad roles for Summer/Fall 2024.
      {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          
      </p>
      <h2>Education</h2>
      <Education title="University of Michigan School of Information" description="Master of Science in Information and Data Science" awards='Relevant Coursework: Applied Machine Learning, Data Mining, Data Manipulation & Analysis, Applied Data Science, Information Retrieval, Data Oriented Programming (Python), SQL and Databases, Natural Language Processing, Information Visualization, Building Interactive Applications'imageUrl={umich} gradYear='2024'/>

      <Education title="University of Michigan College of Literature, Science and the Arts" description="Bachelor of Science; Double major in Biopsychology, Cognition & Neuroscience and Biomolecular Science" awards='Honors: Phi Beta Kappa, James B. Angell Scholar (7 terms), University Honors (8 terms)' imageUrl={umich} gradYear='2022'/>

      
  </div>
 
   

    </body>
 
    </>
  )}
  
  export default HomePage;
  