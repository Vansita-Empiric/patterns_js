let i = 1,
  j = 1,
  k = 1,
  l = 1;

  for(i=1; i<=3; i++) {
    for(j = 3; j>=i; j--) {
        process.stdout.write("   ")
    }
    for(k =1; k<= j ; k++) {
        process.stdout.write(" * ")
    }
    for(l =1; l<= i ; l++) {
        process.stdout.write(" * ")
    }
    console.log("\n");
}