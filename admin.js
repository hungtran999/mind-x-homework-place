// function Myfunction() {
//   var x = document.getElementById("name").value;
//   document.getElementById("demo").innerHTML = x;
//   var y = document.getElementById("anh").value;
//   document.getElementById("demoanh").children = y;
// }

window.onload = function () {
  let mainForm = document.getElementById("main-form");

  let inputValue = document.querySelector('input[type="text"]');
  let inputImg = document.querySelector('input[type="file"]');
  let box_content = document.querySelector(".box-content");
  // let anh_content = document.querySelector(".anh-content");
  let count = 0;

  mainForm.addEventListener("submit", onSubmitEvent);

  function onSubmitEvent(e) {
    e.preventDefault();
    let imgElement = document.createElement("IMG");
    let pElement = document.createElement("ul");
    setCssP(pElement);
    let btnDelete = document.createElement("button");
    setCssBtn(btnDelete);
    imgElement.textContent = `${inputImg.value}`;
    pElement.textContent = `${inputValue.value}`;
    let folder = "image/";
    imgElement.setAttribute(
      "src",
      folder.concat(imgElement.textContent.substring(12, 20))
    );
    // console.log(folder.concat(imgElement.textContent.substring(12, 20)), img);
    if (pElement.textContent !== "") {
      btnDelete.textContent = "DELETE";
      localStorage.setItem(
        `${count++}`,
        imgElement.textContent,
        pElement.textContent
      );
      box_content.appendChild(imgElement);
      box_content.appendChild(pElement);
      //   box_content.appendChild(btnDelete);
    }
    inputValue.value = "";
    btnDelete.addEventListener("click", () => {
      box_content.removeChild(pElement);
      box_content.removeChild(btnDelete);
      localStorage.removeItem(`$count`);
    });
  }
};

function setCssBtn(x) {
  x.style.width = "20%";
  x.style.border = "none";
  x.style.borderRadius = "3px";
  x.style.marginBottom = "5px";
}

function setCssP(x) {
  x.style.display = "block";
  x.style.width = "70%";
  x.style.padding = "10px";
  x.style.margin = "5px";
}
