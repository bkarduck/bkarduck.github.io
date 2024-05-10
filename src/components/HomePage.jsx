// HomePage.js
import Education from "./Education";
// import reactLogo from './../assets/react.svg'
import umich from './../assets/images/umich.png'
import umsi from './../assets/images/umsi.png'
import headshot from './../assets/images/BellaKarduck_copy.jpg'

import sintra from './../assets/images/sintra.jpeg'
import sintra2 from './../assets/images/sintra2.jpeg'
import go_blue from './../assets/images/go_blue.jpeg'
import grad_pic from './../assets/images/grad_pic.jpeg'
function HomePage() {
    return( 
    <>
    
    <body>
      
    
    <div class="container">
      <h2>About me</h2>
      <div class="wrapper2">
      <img src={headshot} alt='headshot' class='img-padded'/>
      <p>

            <br></br>
          I am a data scientist, I love to travel, and I was raised in the Chicago suburbs.
            <br></br>
            <br></br>
          I recently graduated with a Master's of Science in Information from the University of Michigan School of Information. I also went to Michigan for undergrad. I completed a double major in Biopsychology, Cognition & Neuroscience and Biomolecular Science in 2022. Go Blue!
            <br></br>
            <br></br>

          Last summer, I was a data science intern at Aon. 


      </p>
      {/* <img src={headshot} alt='headshot' class='img-padded'/> */}
        </div>
      {/* <p>
          I recently graduated with a Master's of Science in Information from the University of Michigan School of Information. I also went to Michigan for undergrad. I completed a double major in Biopsychology, Cognition & Neuroscience and Biomolecular Science in 2022. Go Blue!
      </p>
      <img src={headshot} alt='headshot' class='img-med'/>
      <p>
          Last summer, I was a data science intern at Aon.   
      </p> */}
      <p>
          My favorite fun fact to share is that I've been to more countries than US states. My last journey took me to Spain and Portugal in March 2024. I also am obsessed with the iMessage game Word Hunt. No shame. 
      </p>
      <p>
          Currently looking for new grad Data Scientist/Machine Learning Engineer roles for Summer 2024.
      {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          
      </p>
      <h2>Education</h2>
      <Education title="University of Michigan School of Information" description="Master of Science in Information and Data Science" awards='Relevant Coursework: Applied Machine Learning, Data Mining, Data Manipulation & Analysis, Applied Data Science, Information Retrieval, Data Oriented Programming (Python), SQL and Databases, Natural Language Processing, Information Visualization, Building Interactive Applications'imageUrl={umsi} gradYear='2024'/>

      <Education title="University of Michigan College of Literature, Science and the Arts" description="Bachelor of Science; Double major in Biopsychology, Cognition & Neuroscience and Biomolecular Science" awards='Honors: Phi Beta Kappa, James B. Angell Scholar (7 terms), University Honors (8 terms)' imageUrl={umich} gradYear='2022'/>


      <h2>Photos</h2>
      <div class="wrapper2">
    
        <figure>
        <img src={grad_pic} alt='masters grad' class='img-padded2'/>

        <figcaption>Master's Graduation</figcaption>
        </figure>
      <figure>
      <img src={go_blue} alt='michigan game' class='img-padded2'/>

        <figcaption>Michigan Games!!</figcaption>
        </figure>

        <figure>
        <img src={sintra2} alt='sintra' class='img-padded2'/>
        <figcaption>Sintra, Portugal</figcaption>
        </figure>
      </div>

      {/* <figure>
      <img src={go_blue} alt='michigan game' class='img-padded2'/>

        <figcaption>This is a caption of slightly longer length. It should wrap, regardless of the size of the image.</figcaption>
        </figure> */}
      
      
  </div>
 
   

    </body>
 
    </>
  )}
  
  export default HomePage;
  