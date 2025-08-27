// count heart clicked
document.getElementById("card-box").addEventListener("click", function (e) {
  if (e.target.className.includes("card-heart")) {
    const count = document.getElementById("head-heart").innerText;
    const totalCount = Number(count) + 1;
    document.getElementById("head-heart").innerText = totalCount;
  }
});

// current time function
function currentTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 === 0 ? 12 : hours % 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let currentTime = `${hours}:${minutes}:${seconds} ${period}`;
  return currentTime;
}

// call button clicked activities
document.getElementById("call-btn").addEventListener("click", function () {
  const coin = Number(document.getElementById("coin").innerText);
  if (coin < 20) {
    alert(
      `❌ You don't have enough coins.You need at least 20 coins to make a call.`
    );
    return;
  }
  const title = document.getElementById("title").innerText;
  const number = document.getElementById("number").innerText;
  alert(`📞 Calling ${title} ${number}...`);
  const currentCoin = coin - 20;
  document.getElementById("coin").innerText = currentCoin;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
          <div
            class="flex justify-between items-center p-4 bg-[#dfdcdc] rounded-lg mb-2"
          >
            <div>
              <h1 class="text-[18px] font-semibold">${title}</h1>
              <p class="text-[18px] text-[#5C5C5C]">${number}</p>
            </div>
            <p class="text-[18px]">${currentTime()}</p>
          </div>
  `;
  document.getElementById("history").appendChild(newDiv);
});
// clear button function
document.getElementById("clear").addEventListener("click", function () {
  const history = document.getElementById("history");
  history.innerHTML = "";
});
// copy count and text copied
document.getElementById("copy").addEventListener("click", function () {
  const copy = document.getElementById("copy-count").innerText;
  const number = document.getElementById("number").innerText;
  navigator.clipboard.writeText(number);
  alert(`Number copied : ${number}`);
  const copyCount = Number(copy) + 1;
  document.getElementById("copy-count").innerText = copyCount;
});
