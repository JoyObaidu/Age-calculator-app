const birthDay = document.querySelector("#birth-day"),
birthMonth = document.querySelector("#birth-month"),
birthYear = document.querySelector("#birth-year"),
btn = document.querySelector("#btn"),
yearsLived = document.querySelector(".years-lived"),
months = document.querySelector(".months"),
input = document.querySelector(".input"),
days = document.querySelector(".days");

btn.addEventListener('click', function (event) {
    event.preventDefault();
   successOrError();
});

let dates = {
    year: null,
    month: null,
    day: null
};

if (dates.year!==null) {
     birthYear.value = dates.year;
}
if (dates.month!==null) {
    birthYear.day= dates.year;
}
if (dates.year!==null) {
    birthYear.value = dates.year;
}

function setError(input, message) {
  inputDiv = input.parentElement;
  input.style.borderColor = 'hsl(0, 100%, 67%)';
  inputDiv.classList.add('error');

  const errorMessage = inputDiv.querySelector('.error-message');
  errorMessage.innerText = message;

  const labels = input.previousElementSibling;
  labels.style.color = 'hsl(0, 100%, 67%)';
}

function setSuccess(input) {
    inputDiv = input.parentElement;
    inputDiv.classList.add('success');
    input.style.borderColor = 'hsl(0, 0%, 86%)';

    const errorMessage = input.nextElementSibling;
    const labels = input.previousElementSibling;
    labels.style.color = 'hsl(0, 1%, 44%)';
    
}

function calculateAge() {
    var d1 = birthDay.value;
    var m1 = birthMonth.value;
    var y1 = birthYear.value;

    var date = new Date();
    var d2 = date.getDate();
    var y2 = date.getFullYear();
    var m2 = 1 + date.getMonth();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
  }
  if (m1 > m2) {
    m2 = m2 +12;
    y2 = y2 - 1;
  }

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  yearsLived.innerText = y;
  months.innerText = m;
  days.innerText = d;

  setSuccess(birthDay);
  setSuccess(birthMonth);
  setSuccess(birthYear);
}

function wholeError() {
    if ((birthDay.value.length == 0) && (birthMonth.value.length == 0) && (birthYear.value.length == 0)) {
         setError(birthDay, "This field is required");
         setError(birthMonth, "This field is required");
         setError(birthYear, "This field is required");
    } else {
        calculateAge();
        validDate();
    }
}

function validDate() {
    if (birthDay.value > 31) {
        setError(birthDay, "Must be a valid day");

        yearsLived.innerText = "--";
        months.innerText = "--";
        days.innerText = "--";
    }
    else{
        setSuccess(birthDay);
    }

    if (birthMonth.value > 12) {
        setError(birthMonth, "Must be a valid month");

        yearsLived.innerText = " --";
        months.innerText = " --";
        days.innerText = " --";
    } else {
        setSuccess(birthMonth);
    }

    var newDate = new Date();
    var newYear = newDate.getFullYear();


    if (birthYear.value > newYear) {
        setError(birthYear, "Must be a valid year");
        setError(birthMonth, '');
        setError(birthDay, '');

        yearsLived.innerText = "--";
        months.innerText = "--";
        days.innerText = "--";
    } else {
        setSuccess(birthYear);
    }
}

function successOrError(){
    var month2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (birthDay.value > month2[birthMonth.value - 1]) {
        setError(birthDay, "Must be a valid date");
        setError(birthMonth, '');
        setError(birthYear, '');

        yearsLived.innerText = "--";
        months.innerText = "--";
        days.innerText = "--";

    } else {
        setSuccess(birthDay);
        wholeError();
    }
}






