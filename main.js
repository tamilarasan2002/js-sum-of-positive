 
var a=parseInt(prompt("how many value"));
var b=[a],c=0; 
for(i=0;i<a;i++){
    b[i]=parseInt(prompt("Enter the value"));
}
    document.write(b+"<br>")

for(j=0;j<a; j++){
    if(b[j]>0){
       c=c+b[j]
    }
}
document.write("Sum of positive values= "+c)