import Modal from 'react-modal'
import { ModalProps } from './type'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
export default function RootModalComponent({ modalIsOpen, closeModal }: ModalProps) {
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div>Modal Component</div>
    </Modal>
  )
}
