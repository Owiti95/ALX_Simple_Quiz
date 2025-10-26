v
// Define the function that checks the user's answer
function checkAnswer() {
  // Step 1: Identify the correct answer
  const correctAnswer = '4'

  // Step 2: Retrieve the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked')

  // Step 3: Get feedback element
  const feedback = document.getElementById('feedback')

  // Step 4: Handle case where no option is selected
  if (!selectedOption) {
    feedback.textContent = 'Please select an answer before submitting.'
    feedback.style.color = '#dc3545' // red for warning
    return
  }

  const userAnswer = selectedOption.value

  // Step 5: Compare and provide feedback
  if (userAnswer === correctAnswer) {
    feedback.textContent = 'Correct! Well done.'
    feedback.style.color = '#28a745' // green for correct
  } else {
    feedback.textContent = "That's incorrect. Try again!"
    feedback.style.color = '#dc3545' // red for incorrect
  }
}

// Step 6: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer)
