import Modal from 'react-modal'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import { toggleModal } from '@redux/stopwatch/slice.stopwatch'
import { FormModal } from './form.modal'

import style from './style.module.css'
import { CloseIcon } from '@/components/images'

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
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
        },
        content: {
          position: 'absolute',
          top: '45%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid #b9b3ac',
          background: '#cccccc',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0.375rem',
          outline: 'none',
          padding: '20px',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
      }}
      isOpen={modal.open}
      onRequestClose={() => dispatch(toggleModal(!modal.open))}
      contentLabel="Example Modal"
    >
      <button
        onClick={() => dispatch(toggleModal(!modal.open))}
        className={style.modal__btnClose}
      >
        <CloseIcon size={10} />
      </button>
      <FormModal />
    </Modal>
  )
}
