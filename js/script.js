const mailStart = document.getElementById("mail_start");
const mailLetter = document.getElementById("mail_letter");
const startBtn = document.getElementById("start_btn");
const letterBtn = document.getElementById("letter_btn");
const startError = document.getElementById("start_error");
const letterError = document.getElementById("letter_error");

const mailRegex = /\S+@\S+/;

const incorrectMail = (mail) => {
    return !mail.match(mailRegex);
}

startBtn.addEventListener("click", () => {
    if (incorrectMail(mailStart.value)) {
        mailStart.style.outlineColor = "var(--cl-red)";
        startError.style.display = "block";
    } else {
        mailStart.style.outlineColor = "var(--cl-light-gray)";
        startError.style.display = "none";
    }
});

letterBtn.addEventListener("click", () => {
    if (incorrectMail(mailLetter.value)) {
        mailLetter.style.outlineColor = "var(--cl-red)";
        letterError.style.display = "block";
    } else {
        mailLetter.style.outlineColor = "var(--cl-light-gray)";
        letterError.style.display = "none";
    }
});
