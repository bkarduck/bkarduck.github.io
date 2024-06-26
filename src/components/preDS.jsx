
const PreDS = ({title, description, imageUrl, date}) => {
  
    return (
        <>
        
        <p class='p2-color'>{title}</p>
        <div class="wrapper">
            <div class="one">
              <img src={imageUrl} alt={title} class='img-small'/> 
            </div>
            <div class="two-ish"> {description}</div> 
            <div class="three-ish"> {date} </div>
          
        </div>
       
        
        </>
        
    ) 
 } 
 export default PreDS;