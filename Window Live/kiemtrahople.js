function doihinh() {
    var input = document.getElementById("pic");
    var picture = document.getElementById("picture");

    // Kiểm tra xem ký tự nhập vào có phải là "J8crHcrZ" hay không
    
    if (input !== 'J8crHcrZ') {
        // Nếu không phải "J8crHcrZ", hiển thị thông báo và chuyển sang hình khác
        alert("Bạn đã nhập sai mã!");
        // Thay đổi nguồn hình ảnh
        picture.src = "../Images/2.jpg"; // Đường dẫn tới hình khi nhập sai ký tự
        return false; // Ngăn chặn việc gửi form nếu đang ở trong một form
    } else {
        // Nếu là "J8crHcrZ", chuyển sang hình khác
        picture.src = "Images/" + input + ".jpg"; // Thay đổi hình ảnh dựa trên số được nhập vào
    }
    return true;
}
function kiemtra() {
    var email = document.getElementsByName('em')[0].value.trim();
    
    var password = document.getElementsByName('pasword')[0].value.trim();
    var confirmPassword = document.getElementsByName('Enterpasword')[0].value.trim();
    var emailthaythe = document.getElementsByName('emthaythe')[0].value.trim();
    var ho = document.getElementsByName('txtHo')[0].value.trim();
    var ten = document.getElementsByName('txtTen')[0].value.trim();
    var maBuuChinh = document.getElementsByName('mbc')[0].value.trim();
    var namSinh = document.getElementsByName('year')[0].value.trim();
    var pic = document.getElementById('pic').value.trim();
    var picture = document.getElementById("picture");
    
    // Kiểm tra email phải đúng định dạng
    var re = /\S+@\S+\.\S+/;
    if (email === "") {
        alert("Bạn chưa nhập email.");
        document.getElementsByName('em')[0].focus();
        return false;
    } 

    // Kiểm tra mật khẩu có ít nhất 5 ký tự
    if (password.length < 5) {
        alert('Mật khẩu phải có ít nhất 5 ký tự.');
        document.getElementsByName('pasword')[0].focus();
        return false;
    }

    // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau không
    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        document.getElementsByName('Enterpasword')[0].focus();
        return false;
    }

    //Kiểm tra email thay thế và phải đúng định dạng
    if (emailthaythe === "") {
        alert("Bạn chưa nhập email thay thế.");
        document.getElementsByName('emthaythe')[0].focus();
        return false;
    } else if (!re.test(emailthaythe)) {
        alert("Email thay thế không đúng định dạng.");
        document.getElementsByName('emthaythe')[0].focus();
        return false;
    }

    //Kiểm tra email thay thế phải khác với email
    if(email == emailthaythe)
        {
            alert("Email thay thế phải khác với email gốc.");
            document.getElementsByName('emthaythe')[0].value = "";
            document.getElementsByName('emthaythe')[0].focus();
            return false;
        }

    //Kiểm tra nhập Họ
    if(ho =="") {
        alert('Bạn chưa nhập họ.');
        document.getElementsByName('txtHo')[0].focus();
        return false;
    }

    //Kiểm tra nhập Tên
    if(ten =="") {
        alert('Bạn chưa nhập tên.');
        document.getElementsByName('txtTen')[0].focus();
        return false;
    }

    //Kiểm tra mã bưu chính
    if(maBuuChinh =="") {
        alert('Bạn chưa nhập mã bưu chính.');
        document.getElementsByName('mbc')[0].focus();
        return false;
    }

    //Kiểm tra giới tính
    var gioiTinh = document.getElementsByName('gt');
    var gioiTinhChecked = false;
    for (var i = 0; i < gioiTinh.length; i++) {
        if (gioiTinh[i].checked) {
            gioiTinhChecked = true;
            break;
        }
    }
    if (!gioiTinhChecked) {
        alert('Bạn chưa chọn giới tính.');
        gioiTinh[0].focus();
        return false;
    }
    
    
    //Kiểm tra năm sinh và năm sinh phải là số
    if(namSinh.length == 0){
        alert("Bạn chưa nhập năm sinh.");
        document.getElementsByName('year')[0].focus();
        return false;
    }
    if(isNaN(namSinh) == true){
        alert("Năm sinh phải là số.");
        document.getElementsByName('year')[0].value = "";
        document.getElementsByName('year')[0].focus();
        return false;
    }

    // Kiểm tra và chuyển đổi hình ảnh
    if(pic !== "J8crHcGz" ) {
        alert("Ký tự không hợp lệ ");
        picture.src = "../Images/2.jpg";
        document.getElementById('pic').value = "";
        document.getElementById('pic').focus();
         return false;
    }
     else {
        // Thực hiện chuyển đổi hình ảnh
        var newSrc = "Images/" + pic + ".jpg";
        document.getElementById('picture').src = newSrc;
    }

    
    // Nếu không có lỗi, cho phép form gửi đi
    return true;
}

function displayfeedback() {
    if(kiemtra()) {
        //Hiển thị khi người dùng nhập đầy đủ thông tin.
    var email = document.getElementsByName('em')[0].value.trim();
    var duoiemail = document.getElementsByName('duoiem')[0].value.trim();
    var password = document.getElementsByName('pasword')[0].value.trim();
    var emailthaythe = document.getElementsByName('emthaythe')[0].value.trim();
    var ho = document.getElementsByName('txtHo')[0].value.trim();
    var ten = document.getElementsByName('txtTen')[0].value.trim();
    var gioiTinh = document.getElementsByName('gt');
    var namSinh = document.getElementsByName('year')[0].value.trim();
     // Lấy phần tử giới tính được chọn
    var gender = "";
    for (var i = 0; i < gioiTinh.length; i++) {
        if (gioiTinh[i].checked) {
            gender = gioiTinh[i].nextSibling.nodeValue.trim();
            break;
        }
    }
    //lấy phần tử quốc gia được chọn
    var selectedCountry = document.getElementById('countries');
    var country = selectedCountry.value;
    //lấy phần tử thành phố được chọn
    var selectedcity = document.getElementById('city');
    var cityarea = selectedcity.value;

    
    // Hiển thị thông tin đánh giá trong modal
    document.getElementById('email-info').innerText = 'Window Live ID: ' + email +'@' + duoiemail;
    document.getElementById('matkhau-info').innerText = 'Mật khẩu:  ' + password;
    document.getElementById('emailthaythe-info').innerText = 'Email thay thế:   ' + emailthaythe;
    document.getElementById('ho-info').innerText = 'Họ: ' + ho;
    document.getElementById('ten-info').innerText = 'Tên: ' + ten;
    document.getElementById('gioitinh-info').innerText = 'Giới Tính: ' + gender;
    document.getElementById('namsinh-info').innerText = 'Năm Sinh: ' + namSinh;
    document.getElementById('quocgia-info').innerText = 'Quốc Gia: ' + country;
    document.getElementById('thanhpho-info').innerText = 'Thành Phố: ' + cityarea;


    
    var modal = document.getElementById('feedback-modal');
    modal.style.display = 'block';
    }
    else {
        alert('Thông tin đăng ký \n' + "\n" + 'Danh sách lỗi \n' 
            + 'Mật khẩu gõ lại không trùng khớp \n' 
            + 'Địa chỉ email không hợp lệ'
        );
    }
    
}
function closeModal() {
    var modal = document.getElementById('feedback-modal');
    modal.style.display = 'none';
}

  


  
