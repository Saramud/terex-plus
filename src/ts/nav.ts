export function initNav(): void {
  // Scroll to form (homepage "Отправить заявку" link)
  document.querySelectorAll<HTMLElement>('.indexPage').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      const href = el.getAttribute('href') ?? el.getAttribute('data-href') ?? '#requestform'
      const target = document.querySelector<HTMLElement>(href)
      if (!target) return

      const sendBtn = document.getElementById('sendMail')
      if (sendBtn) {
        sendBtn.style.animation = 'blink 0.7s ease-in-out 3'
        sendBtn.addEventListener('animationend', () => { sendBtn.style.animation = '' }, { once: true })
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })

  // Bootstrap-compatible collapse / accordion for tech menu
  document.querySelectorAll<HTMLElement>('[data-toggle="collapse"]').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault()

      const targetSelector = trigger.getAttribute('href') ?? trigger.getAttribute('data-target')
      if (!targetSelector) return

      const target = document.querySelector<HTMLElement>(targetSelector)
      if (!target) return

      const isOpen = target.classList.contains('show')

      // Close siblings within same data-parent
      const parentSelector = trigger.getAttribute('data-parent')
      if (parentSelector) {
        const parent = document.querySelector(parentSelector)
        parent?.querySelectorAll<HTMLElement>('.collapse.show').forEach(el => el.classList.remove('show'))
        parent?.querySelectorAll<HTMLElement>('[aria-expanded="true"]').forEach(el => {
          el.setAttribute('aria-expanded', 'false')
          el.classList.add('collapsed')
        })
      }

      if (!isOpen) {
        target.classList.add('show')
        trigger.setAttribute('aria-expanded', 'true')
        trigger.classList.remove('collapsed')
      } else {
        target.classList.remove('show')
        trigger.setAttribute('aria-expanded', 'false')
        trigger.classList.add('collapsed')
      }
    })
  })
}
