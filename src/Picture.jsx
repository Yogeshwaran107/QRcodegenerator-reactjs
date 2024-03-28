
function Picture()
{

    const val='./src/assets/download.jpg'
    
    const handle= (e)=> e.target.style.display="none";

    return( <img  onClick={(e)=>handle(e)}
        
        
        src={val}></img>)
}


export default Picture;