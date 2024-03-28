import {useState} from "react";

const Projects = ({title, description, imageUrl, projectUrl}) => {
  
    return (
        <>
        <p2>{title}</p2>
        <div class = 'data'>
            
            <img src = {imageUrl} class = 'data-img'/>
            <div class = 'data-div'>
                <p>
                    {description}
                </p>
                <p>
                    <a href = {projectUrl}>GitHub Repo</a>
                </p>
            </div>
    </div>
     </>
        
    )
   
    
 } 
 export default Projects;