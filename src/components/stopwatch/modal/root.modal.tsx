import Modal from 'react-modal'
import { useAppDispatch, useAppSelector } from '../../../redux.store/hook'
import { toggleModal } from '../../../redux.store/stopwatch/slice.stopwatch'
import { FormModal } from './form.modal'

Modal.setAppElement('#root')

export function RootModal() {
  const modal = useAppSelector((state) => state.stopwatch.modal__cfg)
  const dispatch = useAppDispatch()

  return (
    <Modal
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
