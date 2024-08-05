import Modal from 'react-modal'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import { toggleModal } from '@redux/stopwatch/slice.stopwatch'
import { FormModal } from './form.modal'

Modal.setAppElement('#root')

export function RootModal() {
  const modal = useAppSelector((state) => state.stopwatch.modal__cfg)
  const dispatch = useAppDispatch()

  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: -100,
          bottom: 0,
          backgroundColor: 'transparent',
        },
        content: {
          maxWidth: '500px',
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #b9b3ac',
          background: '#cccccc',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0.375rem',
          outline: 'none',
          padding: '20px',
        },
      }}
      isOpen={modal.open}
      onRequestClose={() => dispatch(toggleModal(!modal.open))}
      contentLabel="Example Modal"
    >
      <button onClick={() => dispatch(toggleModal(!modal.open))}>close</button>
      <div>I am a modal</div>
      <FormModal />
    </Modal>
  )
}
