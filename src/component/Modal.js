import './Modal.css'

export const Modal = ({show,close,moda}) => {
   function modal(m,d){
       alert(m);
   }
    return (
<div className="modal-wrapper"
 style={
    {
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1':'0'
    }
}
>

<div className="modal-header">
    <p>Welcom</p>
    <span onClick={close} className="close-modal-btn">x</span>
</div>
<div className="modal-content">
<div className="modal-body">
<h4>Modal</h4>
<div className="row flex-dir-r w96Porc flex-wrap ">
<div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-1 wMin150 hMin150 m2px mt10 bcWhite">                           
    <h2 className="textsize-1 fs-sbold cWhite">WANHARA HOTEL</h2>
    <a  href="#" onClick={modal} className="btn bcPurple">Reservar</a>   
           
    </div>
</div>
</div>
<div className="modal-footer">
    <button onClick={close} className="btn-cancel">Close</button>
</div>
</div>
</div>
    )
   
};
