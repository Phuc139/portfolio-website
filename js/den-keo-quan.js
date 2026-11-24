// Lấy phần tử đèn và dòng thông báo trạng thái
var lantern = document.getElementById("lantern");
var statusText = document.getElementById("status");

// Khi rê chuột vào đèn thì dừng hiệu ứng
lantern.addEventListener("mouseenter", function () {
    lantern.style.animationPlayState = "paused";
    statusText.innerHTML = "Trạng thái: Đèn đã dừng";
});

// Khi đưa chuột ra khỏi đèn thì cho quay tiếp
lantern.addEventListener("mouseleave", function () {
    lantern.style.animationPlayState = "running";
    statusText.innerHTML = "Trạng thái: Đèn đang quay";
});
