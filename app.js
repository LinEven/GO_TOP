//獲取按鈕
var mybutton = document.getElementById("myBtn");

//載入方法
window.onscroll = function () { scrollFunction() };

// 當用戶從文檔頂部向下滾動 20px 時，顯示按鈕
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// 當用戶單擊按鈕時，滾動到文檔頂部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}