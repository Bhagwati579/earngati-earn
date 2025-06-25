async function getTask() {
  const res = await fetch('task.json');
  const data = await res.json();
  if (data.available) {
    document.getElementById("taskTitle").innerText = data.task.title;
    document.getElementById("taskDesc").innerText = data.task.description;
    document.getElementById("taskSection").style.display = "block";
    document.getElementById("noTask").style.display = "none";
    startTimer(5 * 60);
  } else {
    document.getElementById("noTask").style.display = "block";
    document.getElementById("taskSection").style.display = "none";
  }
}
function submitTask() {
  alert("Task submitted successfully! Admin will review it shortly.");
}