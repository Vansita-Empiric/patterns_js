let i = 1,
  j = 1,
  k = 1,
  n = 5;

// for (i = 1; i <= n; i++) {
//   let str = "";
//   for (j = 1; j <= 10; j++) {
//     if (j == 1 || j + 1 == 10) {
//       str += "* ";
//     } else {
//       str += "  ";
//     }
//   }
//   console.log(str);
// }

for (i = 1; i <= n; i++) {
  if (i == 1 || i == n) {
    for (k = 0; k <n; k++) {
      process.stdout.write("* ");
    }
    console.log();
    if(i == n) break;
  }
  // if (i == n) {
  //   for (k = 0; k < n; k++) {
  //     process.stdout.write("* ");
  //   }
  //   console.log();
  //   break;
  // }
  let str = "";
  for (j = 1; j < n; ++j) {
    if (j == 1 || j + 1 == n) {
      // str += "* ";
      process.stdout.write("* ");
    } else {
      // str += "   ";
      process.stdout.write("   ");
    }
  }
  console.log();
}
