import { Field, Form, Formik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../redux.store/hook'
import { start, stop, toggleModal } from '../../../redux.store/stopwatch/slice.stopwatch'

interface Values {
  page: number
}

export function FormModal() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.stopwatch.modal__cfg)

  const initialValues: Values = { page: 0 }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false)

        if (state.buttonText === 'Start') {
          dispatch(toggleModal(!state.open))
          dispatch(start())
        }

        if (state.buttonText === 'Stop') {
          dispatch(toggleModal(!state.open))
          dispatch(stop())
        }
      }}
    >
      <Form>
        <label htmlFor="page">Page</label>
        <Field id="page" name="page" type="number" placeholder="Page" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
