function doihinh() {
    var input = document.getElementById("pic").value;
    var picture = document.getElementById("picture");

    // Kiểm tra xem ký tự nhập vào có phải là số hay không
    if (input !== "J8crHcrZ") {
        // Nếu không phải J8crHcrZ, hiển thị thông báo và chuyển sang hình khác
        alert("Bạn đã nhập sai mã!");
        // Thay đổi nguồn hình ảnh
        picture.src = "../Images/2.jpg"; // Đường dẫn tới hình khi nhập sai ký tự
        return false; // Ngăn chặn việc gửi form nếu đang ở trong một form
    } else {
        // Nếu là số, chuyển sang hình khác
        picture.src = "Images/" + input + ".jpg"; // Thay đổi hình ảnh dựa trên số được nhập vào
    }
}

// Thêm sự kiện cho nút "Tôi Chấp Nhận"
document.getElementById("button").onclick = function kiemtra() {
    var input = document.getElementById("pic").value;

    // Kiểm tra nếu nhập sai mã
    if (input !== "J8crHcrZ") {
        alert("Bạn đã nhập sai mã!");
        return false; // Ngăn chặn hành động mặc định của nút submit
    }
};
