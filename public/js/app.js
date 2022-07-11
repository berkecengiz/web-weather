console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

// messageOne.textContent = 'Node.js weather web application.'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = encodeURIComponent(search.value)

    messageOne.textContent = 'Loading..'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                console.log(data.error)
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})