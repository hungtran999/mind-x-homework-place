// Câu 1
// const a = Number(prompt("Nhập số bất kỳ:"));
// let b = 1
// if (a <= 0) {
//     console.log("invalid input");
// } else {
//     for (let i = 1 ;i <= a; i++ ){
//        b = b*i; 
//     }
//     console.log(b);
// }

// Câu 2
// let Name = prompt("Tên của bạn là:");
// const Age = Number(prompt("Tuổi của bạn:"));

// if (Age < 18) {
//     console.log(Name + " " + "chưa đủ tuổi vào trang web này");
// } else {
//     let Poser = prompt(Name + " " + "có muốn vào trang web này không?(yes/no)");
//     if (Poser === 'yes') {
//         console.log(Name +" "+ "đã vào trang web thành công");
//     } else {
//         console.log(Name + " " + "thoát khỏ trang web");
//     }
// }

// Câu 3
// let user = prompt("username");
// let pass = prompt("password");

// let user1 = 'hungtran';
// let pass1 = 'hung2608';

// if (user === user1 & pass === pass1) {
//     console.log("đăng nhập thành công!");
// } else {
//   if (user != user1 & pass === pass1) {
//       console.log("tên đăng nhập sai!");
//   } else if (user === user1 & pass != pass1) {
//     console.log("sai mật khẩu!");
//   }  else {
//       console.log("tài khoản không hợp lệ!");
//   }
// };

// Câu 4
// let name = prompt("Tên của bạn là:");
// let a = Number(prompt("Tháng sinh của bạn là:"));

// switch (a) {
//     case 1:
//     case 2:
//     case 3:
//         console.log(name + " " + "sinh vào mùa xuân");
        
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log(name + " " + "sinh vào mùa hè");
                
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log(name + " " + "sinh vào mùa thu");
                        
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log(name + " " + "sinh vào mùa đông");
                                
//         break;
//     default:
//         console.log("không hợp lệ");
//         break;
// }

// Câu 5
// while (true) {
//     let a = Number(prompt("Nhập giá trị của a"));
//     let b = Number(prompt("Nhập giá trị của b"));
//     let c = Number(prompt("Nhập giá trị của c"));

//     let d = b*b - 4*a*c;
//     if (d < 0) {
//         console.log("phương trình vô nghiệm");
//     } else if ( d === 0) {
//         let x = -b/2*a;
//         console.log("phương trình có nghiệm kép là " + x);
//     } else {
//         let x1 = (-b + Math.sqrt(d)) / (2*a);
//         let x2 = (-b - Math.sqrt(d)) / (2*a);
//         console.log(x1);
//         console.log(x2);
//         }
//     let cc = prompt("bạn có muốn tiếp tục chương trình không?(yes or no)");
//     if (cc === 'no') {
//         break;
//     }
//  }
  
// Câu 6 
// while (true) {
//     let randomString = prompt("nhập dãy bất kỳ:");
//     let a = '';
    
//     let i = randomString.length - 1;
    
//     while (i >= 0) {
//         a += randomString[i];
//         i--;
        
//     }
//     console.log(a);
//     let gg = prompt("bạn có muốn tiếp tuc chương trình không?(yes or no)");
//     if (gg ==='no') {
//         break;
//     }
// }