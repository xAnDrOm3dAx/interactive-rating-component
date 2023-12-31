const ratingStateContainer = document.getElementById("rating-state");
const thankyouStateContainer = document.getElementById("thankyou-state");
const submitButton = document.getElementById("submit-rating");
const rateAgainButton = document.getElementById("rate-again");
const ratingChoices = document.querySelectorAll(".btn");
const userRating = document.getElementById("user-rating");

const defaultRating = userRating.innerHTML;

submitButton.addEventListener("click", () => {
  if (userRating.innerHTML === defaultRating) {
    return
  } else {
    thankyouStateContainer.classList.remove("hidden");
    ratingStateContainer.style.display = "none";
  }
});

ratingChoices.forEach((rating) => {
  rating.addEventListener("click", () => {
    userRating.innerHTML = rating.innerHTML;
  });
});

rateAgainButton.addEventListener("click", () => {
  thankyouStateContainer.classList.add("hidden");
  ratingStateContainer.style.display = "block";
  userRating.innerHTML = defaultRating;
});
