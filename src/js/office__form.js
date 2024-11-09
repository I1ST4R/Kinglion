const checkbox = document.querySelector('.office__checkbox')
const checkboxError = document.querySelector('.office__fake')

const form = document.querySelector('.office__form')

const fields = [
  {
    field: document.querySelector('#form__name'),
    error: document.querySelector('#form__name-error'),
    pattern: /^[A-Za-z\s]+$/,
    value: '',
  },
  {
    field: document.querySelector('#form__mail'),
    error: document.querySelector('#form__mail-error'),
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    value: '',
  },
  {
    field: document.querySelector('#form__phone'),
    error: document.querySelector('#form__phone-error'),
    pattern: /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
    value: '',
  },
  {
    
    field: document.querySelector('.form__field-message'),
    error: false,
    pattern: false,
    value: '',
    
  }
]

form.addEventListener('submit', function(e){
  e.preventDefault()
  clearErrors()
  if (!checkbox.checked) checkboxError.classList.add('office__fake--error')
  else if(validateFields()) form.reset()
})

function validateFields(){
  var tests = 0

  fields.forEach(function(el){

    const fieldValue = el.field.value.trim()
    const pattern = el.pattern
    const error = el.error

    if(pattern && !pattern.test(fieldValue)){
      error.classList.add('form__error-message--active')
    }
    else{
      el.value = fieldValue
      tests++
    } 

  })

  if(tests === fields.length) return true 
  else return false

}

function clearErrors(){
  fields.forEach(function(el){
    if(el.error)
    el.error.classList.remove('form__error-message--active')
  })
  checkboxError.classList.remove('office__fake--error')
}