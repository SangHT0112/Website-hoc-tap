function displayfeedback() {
    var email = document.getElementsByName('em')[0].value.trim();
    var password = document.getElementsByName('pasword')[0].value.trim();
    var btnSubmit = document.getElementById("button");
    var emailthaythe = document.getElementsByName('emthaythe')[0].value.trim();

    // btnSubmit.onclick = ()=>{

    //   if(){
        
    //   }
    // }
    // Hiển thị thông tin đánh giá trong modal
    document.getElementById('email-info').innerText = 'Window Live ID: ' + email;
    document.getElementById('matkhau-info').innerText = 'Mật khẩu: ' + password;
    // Thêm thông tin cho các tiêu chí khác nếu cần
    document.getElementById('emailthaythe-info').innerText = 'Email thay thế: ' + emailthaythe;
    
    var modal = document.getElementById('feedback-modal');
    modal.style.display = 'block';
}
    
  
  
  function closeModal() {
    var modal = document.getElementById('feedback-modal');
    modal.style.display = 'none';
  }