var title = localStorage.getItem("title")

if (localStorage.hasOwnProperty("title")) {
    document.title = title
}



function settitle(title) {
  if (title !== "") {
  localStorage.setItem("title", title)
  document.title = title
  } else {
  localStorage.removeItem("title")
  document.title = "\u200E"
  }
}

function setfavicon(icon) {
  if (icon !== "") {
  localStorage.setItem("favicon", icon)
  document.querySelector("link[rel='shortcut icon']").href = icon;
  } else {
  localStorage.removeItem("favicon")
  document.querySelector("link[rel='shortcut icon']").href = "/img/logo.svg";
  }
}

function setgoogle() {
  settitle("Google")
  setfavicon("https://www.google.com/favicon.ico")
}

function setgoogled() {
  settitle("Google Drive")
  setfavicon("https://www.drive.google.com/favicon.ico")
}

function setedpuzzle() {
  settitle("Edpuzzle")
  setfavicon("https://edpuzzle.imgix.net/favicons/favicon-32.png")
}

function setzoom() {
  settitle("Zoom")
  setfavicon("https://st1.zoom.us/zoom.ico")
}

function setreset() {
  localStorage.removeItem("title")
  localStorage.removeItem("favicon")
  location.reload();
}


function setdefault() {
  settitle("Obvious Unblocker")
}

