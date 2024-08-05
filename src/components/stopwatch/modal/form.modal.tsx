import { Field, Form, Formik } from 'formik'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import { start, stop, toggleModal } from '@redux/stopwatch/slice.stopwatch'

import style from './style.module.css'

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
      onSubmit={(_, actions) => {
        actions.setSubmitting(false)
        if (state.buttonText === 'play') {
          dispatch(toggleModal(!state.open))
          dispatch(start())
        }

        if (state.buttonText === 'stop') {
          dispatch(toggleModal(!state.open))
          dispatch(stop())
        }
      }}
    >
      <Form className={style.modal__form}>
        <label htmlFor="page" className={style.modal__label}>
          {state.buttonText === 'play' ? 'Start page' : 'Finish page'}
        </label>
        <Field
          className={style.modal__input}
          id="page"
          name="page"
          type="number"
          placeholder="Page"
        />
        <button type="submit" className={style.modal__button}>
          Submit
        </button>
      </Form>
    </Formik>
  )
}
