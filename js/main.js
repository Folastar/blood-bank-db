const medicalCenters = [
  {
    center: "City Blood Bank",
    types: "A+, B-, O+",
    contact: "(123) 456-7890",
    update: "[date/time]",
  },
  {
    center: "Downtown Health Center",
    types: "AB-, O-",
    contact: "(987) 654-3210",
    update: "[date/time]",
  },
  {
    center: "Red Cross Center",
    types: "A-, B+, AB+",
    contact: "(555) 123-4567",
    update: "[date/time]",
  },
];

const medCenter = document.querySelector(".med-center-wrapper");
let medCenterHtml = "";

medicalCenters.forEach((medicalCenter) => {
  medCenterHtml += `
   <div class= "center-wrapper">
    <p class="center-name">${medicalCenter.center}</p>
    <p class="available-btypes">Available types: ${medicalCenter.types}</p>
    <p class= "center-contact">Contact <a href="">${medicalCenter.contact}</a></p>
    <p class="date-time-update">Last updated: [date/time]</p>
   </div>
  `;
  medCenter.innerHTML = medCenterHtml;
});


/* HAMBURGER MENU */
const hamburgerMenu = document.querySelector('.js-ham-menu');
const navContainer = document.querySelector('.js-nav-container');
const backdrop = document.querySelector('.backdrop');

hamburgerMenu.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
  backdrop.classList.toggle('active');
});

/* BACKDROP */
backdrop.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
  backdrop.classList.toggle('active');
})