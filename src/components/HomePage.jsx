// HomePage.js
import Education from "./Education";
import reactLogo from './../assets/react.svg'
import umich from './../assets/images/umich.png'
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
      <img src={reactLogo} className="logo react" alt="React logo" />
          
      </p>
      <h2>Education</h2>
      <Education title="University of Michigan" description="I am a master's student at the University of Michigan" awards='yeet' imageUrl={umich}/>
     
  </div>
 
   

    </body>
 
    </>
  )}
  
  export default HomePage;
  