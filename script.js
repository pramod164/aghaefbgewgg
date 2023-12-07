const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, but now i don't know how to respond hehe...so i don't know";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Ohh.... ok ";
  gif.src =
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif";
});