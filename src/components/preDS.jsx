
const PreDS = ({title, description, imageUrl, date}) => {
  
    return (
        <>
        
        <p class='p2'>{title}</p>
        <div class="wrapper">
            <div class="one">
              <img src={imageUrl} alt={title} class='img-small'/> 
            </div>
            <div class="two"> {description}</div> 
            <div class="three"> {date} </div>
          
        </div>
       
        
        </>
        
    ) 
 } 
 export default PreDS;