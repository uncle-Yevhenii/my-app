import { Dispatch } from 'react'

export const openModal = (setOpen: Dispatch<React.SetStateAction<boolean>>): void => setOpen(true)
export const closeModal = (setOpen: Dispatch<React.SetStateAction<boolean>>): void => setOpen(false)
