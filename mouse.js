document.addEventListener("DOMContentLoaded", function () {

  const cursor = document.createElement("img");
  cursor.id = "custom-cursor";
  cursor.src = './WhatsApp Image 2023-05-29 at 23.34.15.jpeg'
//   cursor.innerHTML = "<img src='./WhatsApp Image 2023-05-29 at 23.34.15.jpeg'>";
//   document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});
