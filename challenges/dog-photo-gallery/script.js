const apiUrl = "https://dog.ceo/api/breeds/image/random";
const imgButton = document.createElement("button");
const secondBtn = document.createElement("button");
imgButton.className = "btn";
secondBtn.className = "btn";

function dogsApi() {
  fetch(apiUrl)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
      throw "error";
    })

    .then(function (data) {
      const root = document.querySelector("#root");
      const img = document.createElement("img");
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const btnWrapper = document.querySelector(".header");

      btnWrapper.appendChild(imgButton);
      btnWrapper.appendChild(secondBtn);
      imgButton.innerText = "Dogs";
      secondBtn.innerText = "More Dogs";
      root.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(img);
      img.src = data.message;
    });
}

dogsApi();
imgButton.addEventListener("click", dogsApi);
secondBtn.addEventListener("click", dogsApi);
