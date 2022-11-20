//tasks variable

let Tasks = [
  {
    Task_name: "Get some stuffs from the market🤩.",
    Task_date: "16/12/2022",
    id: "id1",
  },
  {
    Task_name: "Learn how to make tuwo😂.",
    Task_date: "17/12/2022",
    id: "id2",
  },
  {
    Task_name: "Tidy up the my room😑.",
    Task_date: "18/12/2022",
    id: "id3",
  },
];

render_task();

function push() {
  // all submit button for pushing in new tasks

  const input = document.getElementById("input");
  const new_task = input.value;
  const date = document.getElementById("date");
  const new_date = date.value;
  // for grabbing ID OBJECT

  if (new_date == "" || new_task == "") {
    alert("Date and task are not appropriately written.");
  } else if (new_task.length >= 32) {
    alert("please, Make task short for quick remebrance. ");
  } else {
    const ids = "" + new Date().getTime();

    Tasks.push({
      Task_name: new_task,
      Task_date: new_date,
      id: ids,
    });

    render_task();
  }

  // alert(Tasks.Task_date);
}

//function for rendering new tasks
function deletetask(event) {
  const clear = event.target;
  const buttonidentity = clear.id;
  Tasks = Tasks.filter((Tasks) => {
    //if the identity of the Task matches BUTTONIDENTITY, return
    //for everthing else, return true
    if (Tasks.id === buttonidentity) {
      return false;
    } else {
      return true;
    }
  });
  render_task();
}

function render_task() {
  //reseting lists for all news
  document.getElementById("Task_div").innerHTML = "";

  //Array FOREACH method for running the Task innertext individually
  Tasks.forEach((Tasks) => {
    //defining and creating element
    //div for tasks
    const element = document.createElement("p");
    element.innerText = Tasks.Task_name;
    element.style.marginTop = "20px";
    element.style.fontSize = "17px";
    //div for date
    const datediv = document.createElement("div");
    datediv.innerText = Tasks.Task_date;
    datediv.style.color = "blue";
    datediv.style.marginTop = "20px";
    datediv.style.fontSize = "17px";
    element.style.borderBottomStyle = "solid";
    element.appendChild(datediv);
    //div for button
    const clear = document.createElement("button");
    clear.innerText = "Delete";
    clear.style.backgroundColor = "blue";
    clear.style.height = "40px";
    clear.style.width = "91px";
    clear.style.color = "white";
    clear.style.fontStyle = "italic";
    clear.style.border = "none";
    clear.style.marginLeft = "100px";
    clear.style.borderRadius = "5px";
    clear.style.marginBottom = "3px";
    clear.style.cursor = "pointer";
    clear.onclick = deletetask;
    //associating identity button for todo
    clear.id = Tasks.id;

    datediv.appendChild(clear);

    //getting the body for Taskd appendchild
    const task_con = document.getElementById("Task_div");
    task_con.appendChild(element);
  });
}
