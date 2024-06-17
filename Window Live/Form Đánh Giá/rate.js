let rating = 0;

function rate(stars) {
  rating = stars;
  document.getElementById('result').innerText = 'Bạn đã đánh giá ' + stars + ' sao.';
}





  function displayFeedback() {
    var criteria1 = document.getElementById('criteria1').value;
    var criteria2 = document.getElementById('criteria2').value;
    // Lấy giá trị của các tiêu chí đánh giá khác nếu cần
    
    var comment = document.getElementById('comment').value;
    
    // Hiển thị thông tin đánh giá trong modal
    document.getElementById('criteria1-info').innerText = 'Tiêu chí 1: ' + criteria1;
    document.getElementById('criteria2-info').innerText = 'Tiêu chí 2: ' + criteria2;
    // Thêm thông tin cho các tiêu chí khác nếu cần
    document.getElementById('comment-info').innerText = 'Nhận xét: ' + comment;
    
    var modal = document.getElementById('feedback-modal');
    modal.style.display = 'block';
  }
  
  function closeModal() {
    var modal = document.getElementById('feedback-modal');
    modal.style.display = 'none';
  }
  
  
  
