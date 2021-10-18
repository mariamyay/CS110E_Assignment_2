const trbase=2, trheight=6, rectwidth=6, rectlength=1; 
let tr_area=(trbase*trheight)/2;
let rect_area=rectwidth*rectlength;
if (tr_area>rect_area){
    console.log("The triangle has a bigger area.")
}
else if (rect_area>tr_area){
    console.log("The rectangle has a bigger area.")

}
else (console.log("The areas are equal"));
