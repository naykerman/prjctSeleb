function showSurprise() {
   const surprise = document.getElementById('surprise');
   surprise.style.display = 'block';
}

function createFallingElement(type) {
   const element = document.createElement("div");
   element.classList.add(type);
   element.style.left = Math.random() * window.innerWidth + "px";
   element.style.animationDuration = Math.random() * 3 + 2 + "s";
   if (type === "heart") {
      element.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/833/833472.png')";
   } else {
      element.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/616/616485.png')";
   }
   document.querySelector(".background-container").appendChild(element);
   setTimeout(() => element.remove(), 5000);
}

setInterval(() => createFallingElement("heart"), 333);
setInterval(() => createFallingElement("flower"), 466);