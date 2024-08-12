let s1 = "Hello_World";

let one = "";

// if(s1){
//     for(let i=0; i<s1.length; i++){

//   	if(i==2){
// 	    one += s1.charAt(i).toUpperCase();
//         } else {
//     	    one += s1.charAt(i).toLowerCase();
//     }
//   }
// }
// console.log(one);

// let result = s1.replace("_", "*");
// console.log(result);

// let result2 = s1.replace("Hello_World", "How Are You");
// console.log(result2);

let charCodeArr = [];

for (let i = 0; i < s1.length; i++) {
  let code = s1.charCodeAt(i);
  charCodeArr.push(code);
}

for (let i = 0; i < s1.length; i++) {
  if (charCodeArr[i] >= 97 && charCodeArr[i] <= 122) {
    one += s1.charAt(i).toUpperCase();
  } else if (charCodeArr[i] >= 65 && charCodeArr[i] <= 90) {
    one += s1.charAt(i).toLowerCase();
  } else {
    one += s1.charAt(i);
  }
}
console.log(one);
