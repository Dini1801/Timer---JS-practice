let intervalId;

function startTimer() {
 
  intervalId = setInterval(() => {
    let now = new Date();
    document.getElementById("clock").innerText =
      now.getHours().toString().padStart(2, "0") + ":" +
      now.getMinutes().toString().padStart(2, "0") + ":" +
      now.getSeconds().toString().padStart(2, "0");
  }, 1000);

 
  setTimeout(() => {
    document.getElementById("message").innerText = "⏰ 5 seconds have passed!";
    clearInterval(intervalId); // stop the clock after message
  }, 5000);
}
