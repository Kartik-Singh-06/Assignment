let data = [];

let city = [
  "Delhi",
  "Mumbai",
  "Pune",
  "Noida",
  "Lucknow",
  "Chandigarh",
  "Banglore",
  "Kolkata",
  "Patna",
  "Kota",
  "Jaipur",
  "Gurugram",
  "Ahemdabad",
];

let student = document.getElementById("student");
notifyEmailexist = () => {
  let alert = document.getElementById("alert-danger");
  let student = document.getElementById("student");
  student.classList.add("student");
  alert.classList.remove("alert");
  alert.classList.add("alert-danger");

  setTimeout(() => {
    alert.classList.add("alert");
    alert.classList.remove("alert-danger");
  }, 2000);
};

function hallticket(Input) {
  let checkemail = data.filter((user) => {
    return user.email == Input.email;
  });
  if (checkemail.length == 0) {
    data.push(Input);
    let student = document.getElementById("student");
    student.classList.remove("student");
  } else {
    notifyEmailexist();
  }
}

examCenter = () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let randomCity = Math.floor(Math.random() * city.length);
  let user = {
    name: name.value,
    email: email.value,
    city: city[randomCity],
  };

   let sname = document.getElementById("student-name");
   let fname = "Name : " + user.name;
   sname.innerText = fname;
   let semail = document.getElementById("student-email");
   let femail = "E-mail : " + user.email;
   semail.innerText = femail;
   let cityr = document.getElementById("center");
   let fcity = "Examination Center : " + user.city;
   cityr.innerText = fcity;

  hallticket(user);
  console.log(data);
  

};
