// Định nghĩa một hàm JavaScript mới có tên là searchFunction(). Hàm này sẽ được gọi khi có sự kiện kích hoạt.
function searchFunction() {
    /* Lấy phần tử HTML có id là 'searchBar' và gán vào biến input. 
    Đây là ô nhập liệu mà người dùng sẽ sử dụng để tìm kiếm*/
    let input = document.getElementById('searchBar');
    /*Dòng này lấy đối tượng HTML mà có id là "searchBar" và lưu nó vào biến input. 
    Đây là ô nhập liệu trong thanh tìm kiếm.*/ 
    let filter = input.value.toUpperCase();
    let ul = document.querySelector('.general-menu ul');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().includes(filter)) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
document.getElementById('searchBar').addEventListener('keyup', searchFunction);
