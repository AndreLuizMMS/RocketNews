var emailInput = document.querySelector('.email-input')

var emailConfirmBtn = document.querySelector('.btn-email-confirm')

emailConfirmBtn.addEventListener('click', () => {
  emailInput.value = ''
})