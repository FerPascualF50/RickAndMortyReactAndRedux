import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import useModal from '../custom-hooks/useModal';
//import CharacterDetails from './CharacterDetails';
import { Fragment } from "react";

const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 335,
  bgcolor: '#f646799',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const {modal, handleCloseModal, handleOpenModal } = useModal();
  //const { id, image, name, status, species, gender } = data;

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpenModal}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DETAILS</Button>
      <Modal
        open={modal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Fragment>{props.children}</Fragment>
        </Box>
      </Modal>
    </div>
  );
}







// const Modal = (props) =>
//   props.isOpen ?
//     createPortal(
//       <Fragment>
//         <figure onClick={props.onClose}>
//           X
//         </figure>
//         <Fragment>{props.children}</Fragment>
//       </Fragment>,
//       document.getElementById('modal'),
//     )
//     : '';

export default BasicModal;