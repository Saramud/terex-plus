function openModal(modalEl: HTMLElement): void {
  modalEl.classList.add('show')
  document.body.style.overflow = 'hidden'
}

function closeModal(modalEl: HTMLElement): void {
  modalEl.classList.remove('show')
  document.body.style.overflow = ''
}

export function initModals(): void {
  document.querySelectorAll<HTMLElement>('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault()
      const targetSelector = trigger.getAttribute('data-modal')
      if (!targetSelector) return
      const modal = document.querySelector<HTMLElement>(targetSelector)
      if (modal) openModal(modal)
    })
  })

  document.querySelectorAll<HTMLElement>('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest<HTMLElement>('.modal')
      if (modal) closeModal(modal)
    })
  })

  document.querySelectorAll<HTMLElement>('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal(modal)
    })
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll<HTMLElement>('.modal.show').forEach(closeModal)
    }
  })
}
