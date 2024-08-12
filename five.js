let i = 1,
  j = 1,
  k = 1,
  l = 1;
let n = 3;

for (i = 1; i <= n; i++) {
  for (j = n; j >= i; j--) {
    process.stdout.write("   ");
  }
  for (k = 1; k <= j; k++) {
    process.stdout.write(" * ");
  }
  for (l = 1; l <= i; l++) {
    process.stdout.write(" * ");
  }
  console.log("\n");
}

for (i = n+1; i >= 1; i--) {
  for (j = n; j >= i; j--) {
    process.stdout.write("   ");
  }
  for (j = 1; j <= i; j++) {
    process.stdout.write(" * ");
  }
  for (l = 1; l < i; l++) {
    process.stdout.write(" * ");
  }

  console.log("\n");
}
