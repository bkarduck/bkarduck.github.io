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
          I am a data scientist
      </p>
      <p>
          I am a master's student at the University of Michigan 
      </p>
      <p>
          This summer I was a data science intern at Aon and 
      </p>
      <p>
          Currently looking for new grad roles for 2024
      {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          
      </p>
      <h2>Education</h2>
      <Education title="University of Michigan School of Information" description="Master of Science in Information and Data Science" awards='Relevant Coursework: Applied Machine Learning, Data Mining, Data Manipulation & Analysis, Applied Data Science, Information Retrieval, Data Oriented Programming (Python), SQL and Databases, Natural Language Processing, Information Visualization, Building Interactive Applications'imageUrl={umich} gradYear='2024'/>

      <Education title="University of Michigan" description="Bachelor of Science; Double major in Biopsychology, Cognition & Neuroscience and Biomolecular Science" awards='Honors: Phi Beta Kappa, James B. Angell Scholar (7 terms), University Honors (8 terms)' imageUrl={umich} gradYear='2022'/>

      
  </div>
 
   

    </body>
 
    </>
  )}
  
  export default HomePage;
  