let n = 1

for (let i = 1; i <= 3; i++) {
    for (let j = 3; j >= i; j--) {
      process.stdout.write(" ");
    }
    for (let k = 1; k < i; k++) {
      process.stdout.write(n.toString()+ " ");
      n++;      
    }
    for (let l = 1; l <= i; l++) {
        process.stdout.write(n.toString()+ " ");
        n++
      }
    
    console.log("\n");
  }

  for (let i = 4; i >= 1; i--) {
    for (let j = 3; j >= i; j--) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write(n.toString()+ " ");
      n++
    }
    for (let l = 1; l < i; l++) {
      process.stdout.write(n.toString()+ " ");
      n++
    }
  
    console.log("\n");
  }