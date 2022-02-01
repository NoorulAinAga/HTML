/*pattern 
54321
5432
543
54
5*/
var n=5;  // for number of lines
var str=""; // take a empty string
for(i=1;i<=n;i++){ //for  printing  numbers of line
    for(j=5;j>=i;j--){ // for printing the numbers
        str +=j;
    }
    str +="\n";
}
console.log(str);




/*
pattern 
1
21
321
4321
54321
*/
var n=5;  // for number of lines
var str=""; // take a empty string
for(i=1;i<=n;i++){ //for  printing  numbers of line
    for(j=i;j>=1;j--){ // for printing the numbers
        str +=j;
    }
    str +="\n";
}
console.log(str);
