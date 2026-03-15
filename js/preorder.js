(function () {
  var overlay = document.getElementById("qr-overlay");
  var payBtn = document.getElementById("preorder-pay-btn");
  var closeBtn = document.getElementById("qr-close");

  function openQR() {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeQR() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  payBtn.addEventListener("click", openQR);
  closeBtn.addEventListener("click", closeQR);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeQR();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("active")) closeQR();
  });
})();
