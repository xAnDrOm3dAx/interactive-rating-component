const ratingStateContainer = document.getElementById("rating-state");
const thankyouStateContainer = document.getElementById("thankyou-state");
const submitButton = document.getElementById("submit-rating");
const rateAgainButton = document.getElementById("rate-again");
const ratingChoices = document.querySelectorAll(".btn");
const userRating = document.getElementById("user-rating");

submitButton.addEventListener("click", () => {
  thankyouStateContainer.classList.remove("hidden");
  ratingStateContainer.style.display = "none";
});

const defaultRating = userRating.innerHTML;

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
