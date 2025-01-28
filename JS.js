alert("Hello World");// Thông báo bằng prompt/popup
document.body.innerHTML = "Hello World";// Thông báo bằng trang HTML
// Muốn dùng toán cộng là dùng "()"
document.body.innerHTML='T-shirt: $10.<br> socks: $8.<br> dinner plates: $20.<br> Total: '+ (10+8+20)
// Có thể thêm các thẻ của html vào với các dòng code
document.body.innerHTML='<h1>Hello World</h1><br><p>This is a paragraph</p>'

document.body.innerHTML = ''; // Xóa toàn bộ body trong html

// Thêm vào body
document.body.innerHTML += '<h1>Hello World</h1><br><p>This is a paragraph</p>'

// Thêm vào body
var div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1><br><p>This is a paragraph</p>'
document.body.appendChild(div);

