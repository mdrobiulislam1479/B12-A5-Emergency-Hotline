// count heart clicked
document.getElementById("card-heart").addEventListener("click", function () {
  const count = document.getElementById("head-heart").innerText;
  const totalCount = Number(count) + 1;
  document.getElementById("head-heart").innerText = totalCount;
});

