
function startTask() {
  document.getElementById('status').innerText = "Task started. Please wait...";
  setTimeout(() => {
    document.getElementById('status').innerText = "✅ Task complete! ₹2000 added to your UPI.";
  }, 5000);
}
