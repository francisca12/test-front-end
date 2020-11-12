import React, { useState } from 'react';
import IosAnalyticsOutline from 'react-ionicons/lib/IosAnalyticsOutline'
import IosMailOutline from 'react-ionicons/lib/IosMailOutline'
import IosCard from 'react-ionicons/lib/IosCard'
import IosAppsOutline from 'react-ionicons/lib/IosAppsOutline'
import IosExitOutline from 'react-ionicons/lib/IosExitOutline'
import { Modal } from './component/Modal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}from "react-router-dom";

import Hoteles from "./component/Hoteles";
import Notificaciones from "./component/Notificaciones";
import Pago from "./component/Pago";
const App = () => {
   
   const[show,setShow] = useState(false);
   const closeModalHandler=() =>setShow(false);
   
  return (
   
    <Router>

      <div className="container">
        <nav className="h100vh w60 panel bcPurple flexa-jcsb flexa-ai">
            <div className="panel">
        <Link to="/">
         {/* HOME */}
         <a className="mt10 mb30 h50px" href="#"><IosAnalyticsOutline className="cWhite" fontSize="35px" color="#C9C9C9" beat={true}/></a>
        </Link>
        
        <Link to="/hoteles">
         {/* HOTELS   */}
         <a className="mt30" href="#"><IosAppsOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></a>
        </Link>
        <Link to="/notificaciones">
    {/* NOTIFICATIONS */}
    <a className="mt30" href="#"><IosMailOutline className="cWhite" fontSize="35px" color="#C9C9C9"/></a>
        </Link>
        <Link to="/pago">
         {/* PAYMENTS */}
         <a className="mt30" href="#"><IosCard className="cWhite" fontSize="35px" color="#C9C9C9"/></a>
        </Link>
             
            </div>          
            <a className="mb10" href="#"><IosExitOutline fontSize="35px" color="#C9C9C9"/></a>
        </nav>
        <Switch>
        <section className="wMax1000 panel flex-one pl12em pr12em">

<div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
    <div>
        <h2>Dashboard</h2>
    </div>
    <div>
        <a className="mr2em" href="#"><ion-icon className="icoGray" name="search-outline"></ion-icon></a>
        <Link to="/notificaciones">
        <a className="mr2em" href="#"><ion-icon className="icoGray" name="mail-unread-outline"></ion-icon></a>
        </Link>
        <Link to="/configuraciones">
        <a className="mr2em" href="#"><ion-icon className="icoGray" name="settings-outline"></ion-icon></a>
        </Link>
        
    </div>
</div>

<div className="containerCenter">
    <div className="row flex-dir-c">
        <div className="card p40 w96Porc gradient">
            <h4 className="textsize-2 fs-regular cWhite">Bienvenido</h4>
            <h2 className="textsize-1 fs-sbold cWhite mt10">David Anderson</h2>
            <hr/>
            <p className="textsize-3 cWhite mt10">is simply dum text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum text ever since the 1500s, when </p>
        </div>
        <div className="flex-display flex-dir-r card p10 w96Porc mt10 bcWhite flexa-jcsb">
            <div className="bloque bl mb30 flex-display flex-dir-r">
                <div className="notif-left ">
                    <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}} name="mail-open-outline"></ion-icon>
                </div>
                <Link to="/notificaciones">
                <div className="notif-right">
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Notificaciones</h4>
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                </div>
                </Link>
                
            </div>
            <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                <div className="notif-left ">
                    <ion-icon className="cPurple  icoSize3m" style={{fontSize:'3em'}}  name="bed-outline"></ion-icon>                                
                </div>
                <Link to="/Hoteles">
                <div className="notif-right">
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Hoteles</h4>
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                </div>
                </Link>
               
            </div>
            <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                <div className="notif-left ">
                    <ion-icon className="cPurple icoSize3m" style={{fontSize:'3em'}}  name="card-outline"></ion-icon>                                
                </div>
                <Link to="/Pago">
                <div className="notif-right">
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Pagos recibidos</h4>
                    <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                </div>
                </Link>
               
            </div>
            
            
        </div>
        <Route path="/pago">

<Pago/>
</Route>
<h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>
<Route path="/hoteles">
<Hoteles/>
</Route>
       
      

<Route path="/" exact>
<div className="row flex-dir-r w96Porc flex-wrap ">

            <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-1 wMin150 hMin150 m2px mt10 bcWhite">
                
                <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                <a onClick={()=>setShow(true,'boton1')}  href="#" className="btn bcPurple">Reservar</a>
                
            </div>
            <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-2 wMin150 hMin150 m2px mt10 bcWhite">
                <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                <a onClick={()=>setShow(true,"boton2")}href="#" className="btn bcPurple">Reservar</a>
            </div>
            <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-3 wMin150 hMin150 m2px mt10 bcWhite">
                <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                <a onClick={()=>setShow(true,"boton3")} href="#" className="btn bcPurple">Reservar</a>
            </div>
            <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-4 wMin150 hMin150 m2px mt10 bcWhite">
                <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                <a onClick={()=>setShow(true,"boton4")} href="#" className="btn bcPurple">Reservar</a>
            </div>

            <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-5 wMin150 hMin150 m2px mt10 bcWhite">
                <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
                <a onClick={(e)=>setShow(true,"boton5")} href="#" className="btn bcPurple">Reservar</a>
            </div>
        </div>
</Route>
        
    
    </div>
    
    <div className="sectionRight mb10">
        <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones 1</h2>
        <Route path="/notificaciones">
        <Notificaciones/>
        </Route>

        <Route path="/">
        <div className="notification mb30 mt10">
            <div className="notif-left flex-display flexa-jcsb">

                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">02 abril</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">Miguel Ruiz</h4>
                <p className="mt4 textsize-3 cGray">It is a long established fact that a reader will</p>
            </div>
        </div>
        <div className="notification mb30">
            <div className="notif-left flex-display flexa-jcsb">
                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">02 abril</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">Miguel Ruiz</h4>
                <p className="mt4 textsize-3 cGray">It is a long established fact that a reader will</p>
            </div>
        </div>
        <div className="notification mb30">
            <div className="notif-left flex-display flexa-jcsb">
                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">02 abril</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">Miguel Ruiz</h4>
                <p className="mt4 textsize-3 cGray">It is a long established fact that a reader will</p>
            </div>
        </div>
        <div className="notification mb30">
            <div className="notif-left flex-display flexa-jcsb">
                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">02 abril</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">Miguel Ruiz</h4>
                <p className="mt4 textsize-3 cGray">It is a long established fact that a reader will</p>
            </div>
        </div>
        <div className="notification mb30">
            <div className="notif-left flex-display flexa-jcsb">
                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">02 abril</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">Miguel Ruiz</h4>
                <p className="mt4 textsize-3 cGray">It is a long established fact that a reader will</p>
            </div>
        </div>
        </Route>
    </div>

</div>

</section>
        </Switch>
        
        
      </div>  
      <div>
      {show ? <div className="back drop"></div> : null }
      <Modal show={show} close={closeModalHandler} modal={setShow}/>
      </div>
      
    </Router>
  );
}

  
export default App;
