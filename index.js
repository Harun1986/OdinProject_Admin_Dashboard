let svgSize = 30;

let titleIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><path d='M8.29 10.28L11.53 7.03L12.59 8.09L9.35 11.34L8.29 10.28M8.7 14.61L14.36 8.95L15.42 10L9.76 15.67L8.7 14.61M18 3V21H6V3H18M20 1H4V23H20V1Z' /></svg>";

let homeIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>home</title><path d='M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z' /></svg>";

let profileIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>card-account-details-outline</title><path d='M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14' /></svg>";

let messageIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>message-reply-outline</title><path d='M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2M20 17.2L18.8 16H4V4H20V17.2Z' /></svg>";

let historyIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>clock-time-three-outline</title><path d='M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 11.5V13H11V7H12.5V11.5H17Z' /></svg>";

let tasksIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>note-multiple-outline</title><path d='M3,6V22H21V24H3A2,2 0 0,1 1,22V6H3M16,9H21.5L16,3.5V9M7,2H17L23,8V18A2,2 0 0,1 21,20H7C5.89,20 5,19.1 5,18V4A2,2 0 0,1 7,2M7,4V18H21V11H14V4H7Z' /></svg>";

let communitiesIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>account-group-outline</title><path d='M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z' /></svg>";

let settingsIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>cog</title><path d='M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z' /></svg>";

let supportIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>help-box-multiple-outline</title><path d='M20 16V4H8V16H20M22 16C22 17.1 21.1 18 20 18H8C6.9 18 6 17.1 6 16V4C6 2.9 6.9 2 8 2H20C21.1 2 22 2.9 22 4V16M16 20V22H4C2.9 22 2 21.1 2 20V7H4V20H16M14.2 5C13.3 5 12.6 5.2 12.1 5.6C11.6 6 11.3 6.6 11.3 7.4H13.2C13.2 7.1 13.3 6.9 13.5 6.7C13.7 6.6 13.9 6.5 14.2 6.5C14.5 6.5 14.8 6.6 15 6.8C15.2 7 15.3 7.2 15.3 7.6C15.3 7.9 15.2 8.2 15.1 8.4C15 8.6 14.7 8.8 14.5 9C14 9.3 13.6 9.6 13.5 9.9C13.1 10.1 13 10.5 13 11H15C15 10.7 15 10.4 15.1 10.3C15.2 10.1 15.4 9.9 15.6 9.8C16 9.6 16.4 9.3 16.7 8.9C17 8.4 17.2 8 17.2 7.5C17.2 6.7 16.9 6.1 16.4 5.7C15.9 5.2 15.1 5 14.2 5M13 12V14H15V12H13Z' /></svg>";

let privacyIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>shield-check-outline</title><path d='M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9' /></svg>";

let starPlus =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>star-plus-outline</title><path d='M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z' /></svg>";

let eyePlus =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>eye-plus-outline</title><path d='M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z' /></svg>";

let shareIcon =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width=" +
  svgSize +
  " height=" +
  svgSize +
  "><title>share-variant-outline</title><path d='M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z' /></svg>";

const sidebarIcons1 = {
  Home: homeIcon,
  Profile: profileIcon,
  Messages: messageIcon,
  History: historyIcon,
  Tasks: tasksIcon,
  Communities: communitiesIcon,
};

const sidebarIcons2 = {
  Settings: settingsIcon,
  Support: supportIcon,
  Privacy: privacyIcon,
};

const cardProjectsObj = {
  title: [
    "Super Cool Project",
    "Less Cool Project",
    "Impossible App",
    "Easy Peasy App",
    "Ad Blocker",
    "Money Maker",
  ],
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum fringilla varius. Cras finibus.",
    "Suspendisse aliquet eu quam et tincidunt. Cras pharetra, purus ac cursus ullamcorper, tellus dolor dapibus enim, quis feugiat enim massa vitae justo. Pellentesque et posuere nisi. Phasellus semper lorem eu.",
    "Donec faucibus turpis vehicula vestibulum sagittis. Aenean nec ligula velit.",
    "Nulla ornare dapibus ante a tincidunt. Nulla consectetur neque libero, eu cursus nulla consequat a. Suspendisse potenti. Cras in nisl gravida, semper nulla feugiat, lacinia leo. Curabitur diam urna, vehicula id lectus nec, dignissim venenatis sapien. Aliquam ac rutrum ligula. Aenean suscipit condimentum leo sed.",
    "Nulla imperdiet pulvinar justo a fringilla. Fusce viverra odio in orci ornare, id rutrum nibh fringilla. Vestibulum porta viverra mi a molestie. Nullam interdum neque eget tellus mollis tristique. Sed laoreet, nisi nec gravida scelerisque.",
    "Quisque consequat magna quis nulla sodales, vitae interdum quam ullamcorper. Duis iaculis quam dui, at consectetur purus convallis ac. Nulla sagittis pharetra nunc, vel lobortis nibh. Integer tristique aliquet porta.",
  ],
};

document.getElementById("sidebarIcons").innerHTML = titleIcon;

let text1 = "";
for (let [key, value] of Object.entries(sidebarIcons1)) {
  text1 +=
    "<div class='adjustmentContainer'><div class='sidebarIcons'> <a href='#'>" +
    value +
    "</a></div> <h2><a href='#'>" +
    key +
    "</a></h2></div>";
}

let text2 = "";
for (let [key, value] of Object.entries(sidebarIcons2)) {
  text2 +=
    "<div class='adjustmentContainer'><div class='sidebarIcons'> <a href='#'> " +
    value +
    "</a></div> <h2> <a href='#'>" +
    key +
    "</a></h2></div>";
}

document.getElementById("sidebarPartOneContainer").innerHTML = text1;
document.getElementById("sidebarPartTwoContainer").innerHTML = text2;

for (let i = 0; i < 6; i++) {
  document.getElementById("mainPartOne").innerHTML +=
    "<div class='projectCard'>" +
    "<div class='text'>" +
    "<h3>" +
    cardProjectsObj.title[i] +
    "</h3>" +
    "<p>" +
    cardProjectsObj.text[i] +
    "</p>" +
    "</div>" +
    "<div class='svgCardContainer'>" +
    starPlus +
    eyePlus +
    shareIcon +
    "</div>" +
    "</div>";
}

document.getElementById("mptTop").innerHTML +=
  "<div id='card' class='cardAnnouncements'></div>";

for (let i = 0; i < 3; i++) {
  document.querySelector(".card").innerHTML +=
    "<div class='text'><h5> " +
    cardProjectsObj.title[i] +
    "<br/>  <p style='color: grey;'>" +
    cardProjectsObj.text[i] +
    " " +
    "</p><hr></h5></div>";
}

document.getElementById("mptBottom").innerHTML +=
  "<div id='card' class='card'></div>";
