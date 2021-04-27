const reasonInput = document.querySelector('#input-reason')
const reviewInput = document.querySelector('#input-review')
const cancelBtn = document.querySelector('#btn-cancel')
const confirmBtn = document.querySelector('#btn-confirm')
const reviewsList = document.querySelector('#reviews-list')
const totalReviewsOutput = document.querySelector('#total-reviews')

let totalReviews = 0

const clear = () => {
  reasonInput.value = ''
  reviewInput.value = ''
}

//Add event listeners to the buttons
confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value
  const enteredReview = reviewInput.value

  if (
    enteredReason.trim().length <= 0 ||
    enteredReview <= 0 ||
    enteredReview.trim().length <= 0
  ) {
    return
  }

  const newItem = document.createElement('ion-item')
  newItem.textContent = enteredReason + ': $' + enteredReview

  reviewsList.appendChild(newItem)

  totalReviews += +enteredReview
  totalReviewsOutput.textContent = totalReviews
  clear()
})

cancelBtn.addEventListener('click', clear)
