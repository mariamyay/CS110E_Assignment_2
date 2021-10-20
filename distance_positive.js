const x1=4, y1=6, x2=4, y2=7;
if (x1>=0 && y1>=0 && x2>=0 && y2>=0){
    let distance=Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    console.log(distance);
}
else {console.log("Not all the coordinates are in the first quarter")}