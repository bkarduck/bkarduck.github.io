
const Projects = ({title, description, imageUrl, projectUrl}) => {

    return (
        <>
        <p class='p2'>{title}</p>
        <div class = 'data'>
            
            <img src = {imageUrl} class = 'data-img2'/>
            <div class = 'data-div'>
                <p class='p3'>
                    {description}
                </p>
                {projectUrl.length > 0 &&
                 <p class='p3'>
                    <a href = {projectUrl} class='boldy'> Check out this project</a>
                </p>
                    
                }
                {projectUrl.length === 0 &&
                 <p class='p3-bold'>
                    No link yet. Coming soon!
                </p>
                    
                }
               
            </div>
    </div>
     </>
        
    )
   
    
 } 
 export default Projects;