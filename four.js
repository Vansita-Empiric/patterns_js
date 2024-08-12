let i = 1,
  j = 1,
  k = 1,
  l = 1;

  let n= 6
  
  for (i = n+1; i > 1; i--) {
    for (j = n; j >= i; j--) {
      process.stdout.write("   ");
    }
    for (k = 1; k <= j; k++) {
      process.stdout.write(" * ");
    }
    for (l = 1; l < i; l++) {
      process.stdout.write(" * ");
    }
    //console.log();
    if(i>2){
      console.log();
    }
  }

for (i = 1; i <= n+1; i++) {
  for (j = n; j >= i; j--) {
    process.stdout.write("   ");
  }
  for (k = 1; k <= j; k++) {
    process.stdout.write(" * ");
  }
  for (l = 1; l < i; l++) {
    process.stdout.write(" * ");
  }
  console.log();
}

