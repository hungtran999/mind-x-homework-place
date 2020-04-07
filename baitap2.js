// Bài 1
// let N = Number(prompt("Nhập số N bất kì:"));

// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0 ;i <= N; i++ ) {
//         if (i % 2 == 0) {
//             sum1 += i;
//         } else {
//             sum2 += i;
//         }
// }
// console.log("tổng các số chẵn là trong từ 1 đến " + N + " là " + sum1);
// console.log("tổng các số lẻ là trong từ 1 đến " + N + " là " + sum2);

// Bài 2
// let N = Number(prompt("Nhập số N > 1 bất kì:"));

// let souoc = 0;
// for (let i = 2; i <= N;i ++ ) {
//     if (N % i == 0) {
//         souoc ++;
//     }
// }
// if (souoc == 1) {
//     console.log("true")
// } else {
//     console.log("false")
// };

// Bài 3
// let a = Number(prompt("Nhập số N > 1 bất kỳ: "));
// let string = "";
// for (let i = 2; i <= a; i++){
//     let souoc = 0;
//     for(let j = 1; j <=i; j++){
//         if( i % j == 0){
//             souoc ++;
//         }  
//     }
//     if (souoc == 2){
//         string = string + " " + i;
        
//     }
// }
// console.log(string);

// Bài 4
// let N = Number(prompt("Nhập số N >= 0 bất kì:"));

// let x = 0;
// let y = 1;
// let z;
// for (i = 2;i <= N;i++){
//     z = x + y;
//     x = y;
//     y = z;
// }
// console.log("phần tử thứ " + N + " của dãy là " + z);

// Bài 5
// let sum = 0;
// while (true){
//     let a = Number(prompt("Nhập 1 số bất kỳ:"));
//     if (a >= 0) {
//         sum = sum + a;
//     } else {
//         console.log("Tổng các số vừa nhập là : " + sum);
//         break;
//     }
// }

// Bài 6
// const randomString = prompt("nhập dãy bất kỳ:");  
// let a = randomString.length - 1;

// for (let i = 1;i <= a/2;i++){
//     if (randomString[i] === randomString[a - 1]){
//         alert('true');
//         break;
//     } else{
//         alert('false');
//     }
// }

// Bài 7
// let m = Number(prompt("Số hàng của hình:"));
// let n = Number(prompt("Số cột của hình:"));
// let string = "";
// for (let i = 1;i <= m;i++){

//     for(let j = 1;j <= n;j++){
//         string =string + "* ";
//     }
//     string =string + "\n";
    
// }
// console.log(string);

//  Bài 8 và Bài 9 giống nhau ạ
//  let a1 = Number(prompt("nhập giá trị a1: "));
// let b1 = Number(prompt("nhập giá trị b1: "));
// let c1 = Number(prompt("nhập giá trị c1: "));
// let a2 = Number(prompt("nhập giá trị a2: "));
// let b2 = Number(prompt("nhập giá trị b2: "));
// let c2 = Number(prompt("nhập giá trị c2: "));

// if (a1*a1 +b1*b1 != 0 & a2*a2 +b2*b2 != 0 & a1/a2 != b1/b2 != c1/c2 & a2 !=0 || b2 != 0) {
//     let y = ((c2 -a2*c1/2)/(b2-a2*b1/2));
//     let x = (c1 - b1*y)/a1;
    
//     console.log("x = "+x);
//     console.log("y = "+y);
// } else if (a1/a2 == b1/b2 != c1/c2 & a2 !=0 ||b2 !=0 || c2 !=0) {
//     console.log("phương trình vô nghiệm");
// }else {
//     console.log("phương trình có vô số nghiệm");
// }
