const reasonInput = document.querySelector('#input-reason')
const reviewInput = document.querySelector('#input-review')
const cancelBtn = document.querySelector('#btn-cancel')
const confirmBtn = document.querySelector('#btn-confirm')
const reviewsList = document.querySelector('#reviews-list')
const totalReviewsOutput = document.querySelector('#total-reviews')
const alertCtrl = document.querySelector('ion-alert-controller')

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
    /* alertCtrl
      .create({
        message: 'Please enter a valid course and review',
        header: 'Invalid inputs',
        buttons: ['Ok'],
      })
      .then((alertElement) => {
        alertElement.present()
      }) */
      alert('Please enter a valid course and review')
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
