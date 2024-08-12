let i = 1,
  j = 1,            
  k = 1,
  l = 1;

  for(i=1; i<=5; i++) {
    for(j = 1; j<=i; j++) {
        process.stdout.write(" * ")
    }
    console.log("\n");
}