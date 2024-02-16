// range background
let range = document.querySelector("#range");
// set price span value
let priceSpan = document.querySelector("#price");
// set page views span value
let viewsSpan = document.querySelector("#pageviews");
// discount
let checkbox = document.querySelector("#checkbox");

range.addEventListener("mousemove", () => {
  if (checkbox.checked) {
    range.style.background = `linear-gradient(90deg, #a4f1e9 ${range.value}%, rgba(206, 205, 205, 0.319) ${range.value}%)`;
    priceSpan.innerHTML = `$${(range.value * 0.25).toFixed(2)}`;
  } else {
    range.style.background = `linear-gradient(90deg, #a4f1e9 ${range.value}%, rgba(206, 205, 205, 0.319) ${range.value}%)`;
    priceSpan.innerHTML = `$${range.value}.00`;
  }
  if (range.value >= 0 && range.value <= 8) {
    viewsSpan.innerHTML = `0K Pageviews`;
  } else if (range.value <= 30 && range.value >= 8) {
    viewsSpan.innerHTML = `50K Pageviews`;
  } else if (range.value > 30 && range.value < 60) {
    viewsSpan.innerHTML = `100K Pageviews`;
  } else if (range.value >= 60 && range.value < 80) {
    viewsSpan.innerHTML = `200K Pageviews`;
  } else {
    viewsSpan.innerHTML = `300K Pageviews`;
  }
});

checkbox.addEventListener("change", function () {
  if (this.checked) {
    priceSpan.innerHTML = `$${(range.value * 0.25).toFixed(2)}`;
  } else {
    priceSpan.innerHTML = `$${range.value}.00`;
  }
});

// button click
let myBtn = document.querySelector("#btn");

myBtn.addEventListener("click", () => {
  location.reload();
});

// range for mobile
range.addEventListener("touchmove", () => {
  if (checkbox.checked) {
    range.style.background = `linear-gradient(90deg, #a4f1e9 ${range.value}%, rgba(206, 205, 205, 0.319) ${range.value}%)`;
    priceSpan.innerHTML = `$${(range.value * 0.25).toFixed(2)}`;
  } else {
    range.style.background = `linear-gradient(90deg, #a4f1e9 ${range.value}%, rgba(206, 205, 205, 0.319) ${range.value}%)`;
    priceSpan.innerHTML = `$${range.value}.00`;
  }
  if (range.value >= 0 && range.value <= 8) {
    viewsSpan.innerHTML = `0K Pageviews`;
  } else if (range.value <= 30 && range.value >= 8) {
    viewsSpan.innerHTML = `50K Pageviews`;
  } else if (range.value > 30 && range.value < 60) {
    viewsSpan.innerHTML = `100K Pageviews`;
  } else if (range.value >= 60 && range.value < 80) {
    viewsSpan.innerHTML = `200K Pageviews`;
  } else {
    viewsSpan.innerHTML = `300K Pageviews`;
  }
});

range.addEventListener("input", () => {
  if (checkbox.checked) {
    range.style.background = `linear-gradient(90deg, #a4f1e9 ${range.value}%, rgba(206, 205, 205, 0.319) ${range.value}%)`;
    priceSpan.innerHTML = `$${(range.value * 0.25).toFixed(2)}`;
  } else {
    range.style.background = `linear-gradient(90deg, #a4f1e9 ${range.value}%, rgba(206, 205, 205, 0.319) ${range.value}%)`;
    priceSpan.innerHTML = `$${range.value}.00`;
  }
  if (range.value >= 0 && range.value <= 8) {
    viewsSpan.innerHTML = `0K Pageviews`;
  } else if (range.value <= 30 && range.value >= 8) {
    viewsSpan.innerHTML = `50K Pageviews`;
  } else if (range.value > 30 && range.value < 60) {
    viewsSpan.innerHTML = `100K Pageviews`;
  } else if (range.value >= 60 && range.value < 80) {
    viewsSpan.innerHTML = `200K Pageviews`;
  } else {
    viewsSpan.innerHTML = `300K Pageviews`;
  }
});
