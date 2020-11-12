import React from 'react'

const Pago = () => {
   
    const [pago,setPago] = React.useState([])
    React.useEffect(() => {
        obtenerDatos()
    },[])
const obtenerDatos = async()=>{
    const dato = await fetch('http://localhost:3001/payments');
    const pago = await dato.json()
    setPago(pago)
}
return(
    
    <div>

    <div className="notification mb30 mt10">
     {
         pago.map(item=>(
            <div className="notification mb30 mt10">
            <div className="notif-left flex-display flexa-jcsb">
    
            {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
            
         <h4 className="textsize-3">{item.price}</h4>
         <h4 className="textsize-3">{item.idReservation}</h4>
         <h4 className="textsize-3">{item.Payments}</h4>
         <h4 className="textsize-3">{item.date}</h4>
        </div>
        <div className="notif-right">
         <h4 className="mt4 textsize-2 fs-regular cBlue">{}</h4>
         <p className="mt4 textsize-3 cGray">{}</p>
        </div>
           </div>
         ))
     }
        </div>
          
        </div>

);
}
export default Pago;