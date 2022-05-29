import React , {useEffect, useState}from 'react';
import {Button,Modal} from 'react-bootstrap';

// taken from bootstrap
export default function ModalComponent({show,setShow}) {

  const handleClose = () => setShow(false);
  const handleShow = () =>  setShow(true);
//   const handleEdit = ()=>{
//       const {name,email,role} = details;
//       editUser(id,name,email,role);
//       handleClose();
//   }

//   useEffect(()=>{
//       if(show){
//          for(let i=0;i<users.length;i++){
//              if(users[i].id===id){
//                 const {name,email,role} = users[i];
//                 setDetails({name,email,role});
//              }
//          }
//       }
//   },[show]);

  return (
    <div> 
      {/* <AiOutlineEdit onClick={handleShow} className="mx-3" style={{cursor:'pointer'}} /> */}
      {/* <button className='btn btn-success' 
      onClick={()=>{
         handleShow();
         handleSubmit();
      }}>Submit</button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className='bg-dark bg-opacity-25'
      >
        <Modal.Body className='bg-dark text-success' align='center'>
            <h4>All details are submitted Successfully.</h4>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}