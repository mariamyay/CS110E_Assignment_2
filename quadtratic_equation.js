const a=0, b=6, c=9;
if (a===0) {
    console.log("x="+(-c/b));
}
else {
    let D=b**2 - 4*a*c;
    if (D<0){
        console.log("Unsolvable");
    }
    else if (D===0){
        console.log("x="+(-b/(2*a)));
    }
    else {
        let x1 = (-b + Math.sqrt(D))/(2*a);
        let x2 = (-b - Math.sqrt(D))/(2*a);
        console.log("x1="+x1, "x2="+x2)}
}