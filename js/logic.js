//* Trello Master Object
let dataObj = {
  userName: 'Adam',
  darkMode: 'off',
  panelsCount: 1,
  panels:
  [
    {
      id: 1,
      stackCount: 1,
      color: '#ffff',
      createdAt: '01-01-1970',
      position: '1',
      stacks: [
        {
          id: 1,
          text: 'lorem ipsm',
          status: '',
          color: '',
          position: '',
          createdAt: '',
        },
        {
          id: 2,
          text: 'lorem ipsm',
          status: '',
          color: '',
          position: '',
          createdAt: '',
        }
      ]
    }
  ]
};

renderElements(dataObj);
 
let addPanel = document.getElementById("add_panel");
let panelCount = 0;
let panel = document.querySelector(".panel");
panel.innerHTML += "<br/>";
addPanel.addEventListener("click", () => {
  if (panelCount < 5) {
    panel.innerHTML +=
      "<div class='panel_content' id='panel_content-"+panelCount+"'> panel# " +
      panelCount +
      " <button id='add_stack-"+panelCount+"' class='add_stack'>Add Stack +</button></div > <br />";
    panelCount++;
    console.log(panelCount);
  }
});
let addStack = document.querySelector(".add_stack");

// addStack.addEventListener("click", () => {});
document.addEventListener("click", function (e) {
  // console.log(e);
  let target = e.target.id.split('-');
  if (e.target && target[0] == "add_stack") {
    //do something
    let panel_content = document.querySelector("#panel_content-"+target[1]);
    // console.log(panel_content);
    let secondLastEl = panel_content.lastElementChild.previousElementSibling;
    let stackCount = 0;
    if(secondLastEl !== null){
      stackCount = parseInt(secondLastEl.id.split('-')[1]) + 1;
    }

    if (stackCount < 10) {
      let stackId = `stack-${stackCount}`;
      panel_content.innerHTML +=
        "<div id='"+stackId+"'><input type='text' value='test..." + stackCount + "' /><a href='javascript:deleteElement("+'"'+stackId+'"'+")'>delete</a></div><br/>";
      stackCount++;
      console.log(stackCount);
    }
  }
});

function deleteElement(elementId){
  console.log(elementId);
  document.querySelector('#'+elementId).remove();
}

//Render element
function renderElements(object){
  if(object['panels'] !== 'undefined' && object['panels'].length > 0){
    console.log(object['panels']);

    for(ob of object['panels']){
      console.log('>>> ',ob);
    }
  }
}

// git add . && git commit -m "Code update" && git push origin master