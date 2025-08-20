let userInput = document.querySelector('.user-input')
let seeBtn = document.querySelector('.see-btn')
let displayText = document.querySelector('.guess-h1')

let computerGenerater = Math.floor(Math.random() * 100)
console.log(computerGenerater)

seeBtn.addEventListener('click', () => {
    if (userInput.value > computerGenerater) {
        displayText.style.color = 'red' 
        displayText.innerHTML = 'Your Guess Number is too High from Computer Guess'
    } else if (userInput.value < computerGenerater) {
        displayText.style.color = 'blue' 
        displayText.innerHTML = 'Your Guess Number is too low from Computer Guess'
    } else if (userInput.value = computerGenerater) {
        displayText.style.color = 'green' 
        displayText.innerHTML = 'Congratulation You Win Your Guess Number is Equal to Computer Guess'
        setTimeout(()=>{
            location.reload()
        },2000)
    }

})
