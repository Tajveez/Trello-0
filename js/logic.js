let button = document.getElementById("add_new");
let count = 0;
let content = document.getElementById("content");
content.innerHTML += "<br/>";
button.addEventListener("click", () => {
  if (count < 10) {
    content.innerHTML +=
      "<input type='text' value='test..." + count + "' /><br/>";
    count++;
    console.log(count);
  }
});
