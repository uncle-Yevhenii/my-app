import Modal from 'react-modal'
import { CloseIcon } from '../../images'

import { Formik, Field, Form, FormikHelpers } from 'formik'

Modal.setAppElement('#root')

interface RootModalProps {
  contentLabel?: string
  isOpen: boolean
  setCloseModal: () => void
  triggerStopwatch: () => void
  children: 'Start page' | 'Finish page'
}
interface Values {
  page: number
}
export function RootModal({
  isOpen,
  setCloseModal,
  triggerStopwatch,
  contentLabel = 'Example Modal',
  children,
}: RootModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={() => setCloseModal()} contentLabel={contentLabel}>
      <div className="modal-wrapper">
        <button onClick={() => setCloseModal()} type="button">
          <CloseIcon size={20} />
        </button>

        <div className="modal-content">
          <p>{children}</p>
          <Formik
            initialValues={{ page: 0 }}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
              console.log(values)
              setSubmitting(false)

              if (children === 'Start page') {
                setCloseModal()
                triggerStopwatch()
              }
            }}
          >
            <Form>
              <label htmlFor="page">Page</label>
              <Field id="page" type="number" name="page" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </Modal>
  )
}
