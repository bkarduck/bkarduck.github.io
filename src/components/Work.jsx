
const Work = ({title, description, imageUrl, date}) => {
  
    return (
        <>
        
        <p class='p2'>{title}</p>
        <div class="wrapper">
            <div class="one">
              <img src={imageUrl} alt={title} class='img-medium'/> 
            </div>
            <div class="two-ish"> {description}</div> 
            <div class="three-ish"> {date} </div>
          
        </div>
       
        
        </>
        
    ) 
 } 
 export default Work;