
const Education = ({title, description, awards, imageUrl}) => {
  
    return (
        <>
        <p2>{title}</p2>
        <div class="wrapper">
            <p2 class="one"><img src={imageUrl} alt={title} class='img-small'/></p2>
            <div class="two">{description}</div>
            <div class="three">{awards}</div>
        </div>
        {/* <div class = 'data'>
            
            <img src = {imageUrl} class = 'data-img'/>
            <div class = 'data-div'>
                <p>
                    {description}
                </p> 
                <p>
                    <a href = {projectUrl}>GitHub Repo</a>
                </p>
            </div>*/}
    {/* </div> */}
     </>
        
    )
   
    
 } 
 export default Education;