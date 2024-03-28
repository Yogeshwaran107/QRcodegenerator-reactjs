import { useState } from "react";

 function Qrcode()
 {

    const [img,setimg]=useState("");
    const [loading,setloading]=useState(false);

    const [qrdata,setqrdata]=useState("");

    const [qrsize,setqrsize]=useState("");

    

    async function generate()
    {
        

        setloading(true);
        try{
             const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
             setimg(url);
        }
        catch(error)
        {
           console.log("Error occured due api slow", error)
        }
        finally{
            setloading(false);
        }

        
    }
    function download()
    {
        fetch(img)
        .then((response) => response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href =URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            

        })
        .catch((error)=>
        {
            console.error("Error downloading AR code",error);
        })
      
    }
    


   
    return (
        (<div className="app-container">
            <h1>QR CODE GENERATOR</h1>
           { loading && <p>please wait loading...</p>}
           {img && <img src={img} className="qr-code-img"/>}
           <div className="nice">
            <label htmlFor="datainput" className="Input-label">Data for Qr code:</label>
            <input type="text" id="datainput" placeholder="enter the data for qrcode"  onChange={(e)=>{
                setqrdata(e.target.value)
            }}/>
           
           
            <label htmlFor="sizeinput" className="Input-label">Image Size (e.g., 150):</label>
            <input type="text" id="sizeinput" placeholder="enter the size for qrcode" onChange={(e)=>
            {
                setqrsize(e.target.value)  
            }}/>
           
           <button className="generate-btn" onClick={generate} disabled={loading}>Generate Qr Code</button>
           <button  className="Download-btn" onClick={download}>Download Qr Code</button>
           </div>



        </div>)
    )


 }

 export default Qrcode;