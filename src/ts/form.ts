import IMask from 'imask'

function showError(msg: string): void {
  const errorEl = document.getElementById('error')
  const phoneEl = document.getElementById('phone') as HTMLInputElement | null
  if (errorEl) errorEl.textContent = msg
  if (phoneEl) phoneEl.style.border = msg ? '2px solid red' : ''
}

export function initForm(): void {
  const phoneInput = document.getElementById('phone') as HTMLInputElement | null
  if (phoneInput) {
    IMask(phoneInput, { mask: '+7(000)000-00-00' })
  }

  const sendBtn = document.getElementById('sendMail') as HTMLButtonElement | null
  if (!sendBtn) return

  sendBtn.addEventListener('click', async () => {
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value.replace(/[(),\-_]/g, '') ?? ''

    if (!phone) {
      showError('Поле обязательно для заполнения!')
      return
    }
    if (phone.replace(/\D/g, '').length < 11) {
      showError('Некорректно введен номер телефона')
      return
    }
    showError('')

    const form = document.getElementById('requestform') as HTMLFormElement | null
    if (!form) return

    const formData = new FormData(form)

    try {
      sendBtn.textContent = 'Отправлено'
      sendBtn.disabled = true
      sendBtn.style.cssText = 'background:#28a745;color:#fff'

      await fetch('/telegram.php', { method: 'POST', body: formData })

      form.reset()
    } catch {
      showError('Ошибка отправки. Попробуйте позже.')
    } finally {
      sendBtn.textContent = 'Отправить'
      sendBtn.disabled = false
      sendBtn.style.cssText = ''
    }
  })
}
