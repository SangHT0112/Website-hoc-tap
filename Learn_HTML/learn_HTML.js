/* Đây là một sự kiện được gọi khi trang web đã tải hoàn toàn, 
cho phép tất cả các phần tử HTML được truy cập và sử dụng. 
Khi sự kiện này được kích hoạt, hàm nằm trong nó sẽ được thực thi.*/
document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById('targett'); //Dòng này tìm phần tử trong trang HTML có id là 'target' và lưu trữ nó vào biến targetElement.
    var targetText = targetElement.innerHTML; //Dòng này lấy nội dung HTML của phần tử có id 'target' và lưu trữ nó vào biến targetText.
    var newText = targetText.replace(/&lt;|&gt;/g, '<span class="blue">$&</span>');
    targetElement.innerHTML = newText;
});

document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById('target-two');
    var targetText = targetElement.innerHTML;
    var newText = targetText.replace(/&lt;|&gt;/g, '<span class="blue">$&</span>');
    targetElement.innerHTML = newText;
});

document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById('target-three');
    var targetText = targetElement.innerHTML;
    var newText = targetText.replace(/&lt;|&gt;/g, '<span class="blue">$&</span>');
    targetElement.innerHTML = newText;
});

document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById('target-four');
    var targetText = targetElement.innerHTML;
    var newText = targetText.replace(/&lt;|&gt;/g, '<span class="blue">$&</span>');
    targetElement.innerHTML = newText;
});

document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById('target-five');
    var targetText = targetElement.innerHTML;
    var newText = targetText.replace(/&lt;|&gt;/g, '<span class="blue">$&</span>');
    targetElement.innerHTML = newText;
});

document.addEventListener("DOMContentLoaded", function() {
    var targetElement = document.getElementById('target-six');
    var targetText = targetElement.innerHTML;
    var newText = targetText.replace(/&lt;|&gt;/g, '<span class="blue">$&</span>');
    targetElement.innerHTML = newText;
});

