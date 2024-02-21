// // // // //câu lệnh if else
// // // // 1.1 and 1.2
// // // // var a = 10;
// // // // var b = 20;
// // // // if (a < b) {
// // // //   console.log("a<b");
// // // // }
// // // // 1.3
// // // // var diemThi = 7;

// // // // if (diemThi >= 9) {
// // // //   console.log("xuất sắc");
// // // // } else if (diemThi < 9 && diemThi >= 8) {
// // // //   console.log("giỏi");
// // // // } else {
// // // //   console.log("trung binh");
// // // // }
// // // //1.4 toan tu 3 ngoi'
// // // // var age = 18;
// // // // var check = "";
// // // // if (age >= 18) {
// // // //   check = "da du 18";
// // // // } else {
// // // //   check = "chua du 18";
// // // // }
// // // // var check = age >= 18 ? console.log("du 18") : console.log("chua du"); //toan tu 3 ngoi

// // // //2 SWItch case dùng để rẽ nhánh chuongw trình ,mỗi nhánh có 1 diều kiện vaf sử dụng toán tử so sánh bằng
// // // var number = 1;
// // // switch (number) {
// // //   case 0:
// // //     console.log("day la so 0");
// // //     break;
// // //   case 1:
// // //     console.log("day la so 1");
// // //     break;
// // //   case 2:
// // //     console.log("day la so 12");
// // //     break;
// // //   default:
// // //   case 3:
// // //     console.log("day la so 12");

// // //     break;
// // // }
// // // //bỏ break lệnh sẽ tiếp tục chạy
// // //Vòng lặp for lặp lại và thực thi dòng mã đó
// // // for (i = 0; i <= 10; i++) {
// // //   console.log(i);
// // // }
// // // for (i = 9; i >= 0; i--) {
// // //   console.log(i);
// // // }
// // // for (var i = 1; i <= 10; i++) {
// // //   for (var j = 1; j <= 10; j++) {
// // //     console.log(`hàng ${i} cột ${j}`);
// // //   }
// // // }
// // // vòng lặp for in// dùng để lấy ra key của 1 object có thể áp dụng cho array và string
// // // ví dụ
// // // var car = {
// // //   name: "luu duc tho",
// // //   class: "dhti14a6hn",
// // //   phoneNumber: "0231413413",
// // // };

// // // for (test in car) {
// // //   //   console.log(car.name);
// // //   console.log(`${test} - ${car[test]}`);
// // // }
// // //vòng lặp for of lấy ra phần tử của 1 array hoaccwj string

// // // var car = ["oto", "xe máy ", "xe đạp"];
// // // console.log(car.length);
// // // for (test of car) {
// // //   console.log(test);
// // // }

// // //Vòng lặp while //luôn kiểm tra điều kiện trƯỚC rồi chạy vòng lặp
// // var i = 1;
// // while (i <= 10) {
// //   console.log(i);
// //   i++;
// // }
// // var car = ["oto", "xe máy ", "xe đạp"];
// // var i = 0;
// // while (i < car.length) {
// //   console.log(car[i]);
// //   i++;
// // }
// // break dừng vòng lặp dù điều kiện có đuibngs
// // for (var i = 0; i < 10; i++) {
// //   console.log(i);
// //   if (i == 7) {
// //     console.log("vong lap dung");
// //     break;
// //   }
// // }
// //continue có tác dụng bỏ qua một bướ lặp nào đó nghĩa là lúc gặp lệnh continue tất cả đoạn code bên dưới sẽ ko được thực hiện mà nó sẽ nhảy qua vòng lặp mới
// // for (var i = 0; i < 10; i++) {
// //   if (i == 5) {
// //     continue;
// //   }
// //   console.log(i);
// // }
// //9 cach khia bao bien
// var :khai báo biến toàn cục
// var a = 10;
// if (a == 10) {
//   var b = 20;
//   console.log(b);
// }
// console.log(b);
//let :khai baos trong 1 khối phạm vi trong khối khai báo

// var a = 10;
// if (a == 10) {
//   let b = 20; //phạm vi trong khối khai báo if
//   console.log(b);
// }
// console.log(b);  // ngoài phạm vi sẽ undèine
// khai báo biến ko cần dùng từ khóa
// a = 10;
// console.log(a);
