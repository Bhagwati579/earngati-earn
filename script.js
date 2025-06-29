
function startTask() {
  document.getElementById('status').innerText = "Task in progress...";
  setTimeout(() => {
    document.getElementById('status').innerText = "✅ ₹2000 added to your UPI!";
    alert("Task complete! ₹2000 sent to your UPI: bhagwatilalpushkarna123-1@oksbi");
  }, 5000);
}
