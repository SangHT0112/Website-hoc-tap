function DoiMa() {
    // Lấy đối tượng hình ảnh cần thay đổi
    var imgElement = document.getElementById("ChuoiMaHienThi");

    // Lấy đường dẫn hiện tại của hình ảnh
    var currentSrc = imgElement.src;

    // Lấy phần cuối của đường dẫn là số trong tên hình ảnh (ví dụ: Images/1.jpg -> 1)
    var currentNumber = currentSrc.substring(currentSrc.lastIndexOf('/') + 1, currentSrc.lastIndexOf('.'));

    // Tăng số lên 1, nếu đã là hình cuối cùng thì quay lại hình đầu tiên
    var nextNumber = parseInt(currentNumber) + 1;
    if (nextNumber > 10) { // Số cuối cùng là 2
        nextNumber = 1; // Quay lại số đầu tiên nếu đã là số cuối cùng
    }

    // Tạo đường dẫn mới cho hình ảnh
    var newSrc = "Images/" + nextNumber + ".jpg";

    // Gán đường dẫn mới cho hình ảnh
    imgElement.src = newSrc;
}