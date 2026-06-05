import '../styles/main.scss'
import { initFilter } from './filter'
import { initModals } from './modal'
import { initForm } from './form'
import { initNav } from './nav'

document.addEventListener('DOMContentLoaded', () => {
  initNav()
  initModals()
  initForm()
  initFilter()
})
