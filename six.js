let i = 1,
  j = 1,
  n = 5

for(i=1; i<=n; i++) {
    let str=''
    for(j = 1; j<=2*n-1; j++) {
        if(i+j == n+1 || i+n == j+1){
            str += '* '
        } else {
            str+= '  '
        }

    }
    console.log(str);
}
for(i=n; i>=1; i--) {
    let str=''
    for(j = 1; j<=2*n-1; j++) {
        if(i+j == n+1 || i+n == j+1){
            str += '* '
        } else {
            str+= '  '
        }

    }
    console.log(str);
}