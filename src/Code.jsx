import QRCode from'qrcode'
import React,{useState} from 'react'
function Code()
{
    const[url,setUrl]=useState("");
    const[qrcode,setQrcode]=useState("");
    function handleInputChange(e)
    {
     setUrl(e.target.value);
    }
    const GenerateQRcode=()=>
    {
        QRCode.toDataURL(url,(err,url)=>
        {
            if(err)
                return console.err(err)
     console.log(url)
     setQrcode(url)
        })
    }
   
    return( 
        <>
        <div>
        
<input type="text" placeholder="Type your data to generate QR code" value={url} onChange={handleInputChange}></input>
<button onClick={GenerateQRcode} >GenerateQRcode</button>
{qrcode && <>
<img src={qrcode}/>
<a href={qrcode} download="qrcode.png">Download</a>
 </>
}
</div>
        </> 

    );

}
export default Code


