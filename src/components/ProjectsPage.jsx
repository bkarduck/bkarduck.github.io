// HomePage.js
import Projects from "./Projects";
import PreDS from "./preDS";
import michmed from './../assets/images/michmed2.png'
import stocks from './../assets/images/stocks.png'
import aon from './../assets/images/aon.png'
import umsi from './../assets/images/umsi.png'
import css_meme from './../assets/images/css_meme.jpeg'

function ProjectsPage() {
    return (
      <>
    
      <main>
    <div class="container">
        <h2>Technical Experience</h2>
        <p>
            Code Code Code Code Code!
        </p>
        <PreDS title="Data Science Intern @ Aon" description="This is project 1" imageUrl={aon} date='June 2023 - August 2023'/>
        <PreDS title="Python Developer" description="This is project 1" imageUrl={stocks} date='May 2022 - September 2022'/>

        <h2>Projects</h2>
        <p>
            Here are some of my projects.
        </p>
        <Projects title="Recipe Recommender System" description="This is project 1" imageUrl={umsi} projectUrl=""/>
        <Projects title="ChatGPTravel – Your New Virtual Travel Agent" description="This is project 2" imageUrl={umsi} projectUrl=""/>
        <Projects title="Generation Z Language Classifier" description="This is project 2" imageUrl={umsi} projectUrl=""/>
        <Projects title="Ann Arbor Water Main Break Predictions" description="This is project 2" imageUrl={umsi} projectUrl=""/>
        <Projects title="In Progress - America’s Next Top Model: Demystifying Two Methods for Election Prediction" description="This is project 2" imageUrl={umsi} projectUrl=""/>
        <Projects title="In Progress - This Website :)" description="This is project 2" imageUrl={css_meme} projectUrl=""/>

        </div>
    </main>
    
    </>
  )}
  
  export default ProjectsPage;