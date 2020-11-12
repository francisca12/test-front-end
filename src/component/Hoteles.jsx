
import React from 'react'

const Hoteles = () => {
   
    const [hotel,setHotel] = React.useState([])
    React.useEffect(() => {
        obtenerDatos()
    },[])
const obtenerDatos = async()=>{
    const dato = await fetch('http://localhost:3001/hotels');
    const hotel = await dato.json()
    setHotel(hotel)
}
return(
    
    <div>

<div className="row flex-dir-r w96Porc flex-wrap ">
 {
     hotel.map(item=>(
        <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-1 wMin150 hMin150 m2px mt10 bcWhite">
                            
        <h2 className="textsize-1 fs-sbold cWhite">{item.name}</h2>
        <a href={item.imgUrl} className="btn bcPurple">Reservar</a>
        
    </div>
     ))
 }
    </div>
      
    </div>

);
}
export default Hoteles;