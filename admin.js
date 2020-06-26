
window.onload = function () {
  let mainForm = document.getElementById("main-form");

  let inputValue = document.querySelector('#name');
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
    setStyleImg(imgElement);
    pElement.textContent = `${inputValue.value}`;
    let folder = "image/";
    imgElement.setAttribute(
      "src",
      folder.concat(imgElement.textContent.substring(12))
    );
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
function setStyleImg(x) {
  x.style.width = "200px";
  x.style.height = "200px";
}
function setCssP(x) {
  x.style.display = "block";
  x.style.width = "70%";
  x.style.padding = "10px";
  x.style.margin = "5px";
}

function DisplayLogin() {
  document.getElementById("show-login").style.display = "block"
}

function Login(){
  var user = document.getElementById("user").value;
  var pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1") {
    alert('Đăng nhập thành công !')
    document.getElementById("show-login").style.display = "none";
    document.getElementById("before-login").style.display = "none";
    document.getElementById("after-login").style.display = "block";
  } else {
    document.getElementById("failed").innerHTML = "Ngu ! dcmm co cai mat khau ma cung quen";
  }
}

function DisplayForm() {
  document.getElementById("show-form-add").style.display = "block"
}
function hideForm() {
  document.getElementById("show-form-add").style.display = "none"
}