function getData(getHumour) {
  fetch(getHumour)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw `${getHumour}: ${res.status} ${res.statusText}`;
      }
    })
    .then((data) => {
      console.log(data);
      onDataReceived(data);
    })
    .catch(addError);
}

function addError(error) {
  const errorMsg = document.createElement("p");
  errorMsg.innerText = `Sorry, an error occurred: ${error}`;
  getRootDiv().appendChild(errorMsg);
}

function onDataReceived(humourData) {
  getHumourImg(humourData);
  getHumourTitle(humourData);
}

function getRootDiv() {
  return document.querySelector("#root");
}

function getHumourImg(humourImg) {
  const imgElem = document.createElement("img");
  imgElem.src = humourImg.img;
  getRootDiv().appendChild(imgElem);
}

function getHumourTitle(humorTitle) {
  const title = document.createElement("h1");
  title.innerText = humorTitle.title;
  getRootDiv().appendChild(title);
}

function fetchUrl() {
  getData("https://xkcd.now.sh/?comic=latest");
}

window.onload = fetchUrl;
