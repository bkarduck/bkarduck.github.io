
const Education = ({title, description, awards, imageUrl, gradYear}) => {
  
    return (
        <>
        <p class='p2'>{title}</p>
        <div class="wrapper">
            <div class="one"><img src={imageUrl} alt={title} class='img-small'/>
            </div>
            <div class="two">{description} <br></br> Graduated in: {gradYear}
        
            </div>
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