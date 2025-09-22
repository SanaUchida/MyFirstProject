alert("サイトへようこそ！")

function showContent(id, element) {
    document.querySelectorAll('.content-section').forEach(el => {
      el.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('#sidebar a').forEach(el => {
      el.classList.remove('active');
    });
    element.classList.add('active');
}