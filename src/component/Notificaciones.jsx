
import React from 'react'
import { useParams } from 'react-router'

const Notificaciones = () => {
   const {id} = useParams();
   
    const [notific,setNotific] = React.useState([])
    React.useEffect(() => {
        obtenerDatos()
    },[])
const obtenerDatos = async()=>{
    const dato = await fetch("http://localhost:3001/notifications/");
    const notific = await dato.json()
    setNotific(notific)
}
return(
    
    <div>
 
<div className="notification mb30 mt10">
 {
     notific.map(item=>(
        <div className="notification mb30 mt10">
        <div className="notif-left flex-display flexa-jcsb">

        {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
     <h4 className="textsize-3">{item.date}</h4>
    </div>
    <div className="notif-right">
     <h4 className="mt4 textsize-2 fs-regular cBlue">{item.fromUser.name}</h4>
     <p className="mt4 textsize-3 cGray">{item.content}</p>
    </div>
       </div>
     ))
 }
    </div>
      
    </div>

);
}
export default Notificaciones;