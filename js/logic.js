let addPanel = document.getElementById("add_panel");
let panelCount = 0;
let panel = document.querySelector(".panel");
panel.innerHTML += "<br/>";
addPanel.addEventListener("click", () => {
  if (panelCount < 5) {
    panel.innerHTML +=
      "<div class='panel_content' id='panel_content-"+panelCount+"'> panel# " +
      panelCount +
      "<button id='add_stack-"+panelCount+"' class='add_stack'>Add Stack +</button></div > <br />";
    panelCount++;
    console.log(panelCount);
  }
});
let addStack = document.querySelector(".add_stack");

// addStack.addEventListener("click", () => {});
stackCount = 0;
document.addEventListener("click", function (e) {
  console.log(e);
  let target = e.target.id.split('-');
  if (e.target && target[0] == "add_stack") {
    //do something
    let panel_content = document.querySelector("#panel_content-"+target[1]);

    if (stackCount < 10) {
      panel_content.innerHTML +=
        "<input type='text' value='test..." + stackCount + "' /><br/>";
      stackCount++;
      console.log(stackCount);
    }
  }
});
