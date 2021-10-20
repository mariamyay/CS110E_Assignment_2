const trbase=2, trheight=6, rectwidth=6, rectlength=1; 
if (trbase>0 && trheight>0 && rectwidth>0 && rectlength>0){
    let tr_area=(trbase*trheight)/2;
    let rect_area=rectwidth*rectlength;
    if (tr_area>rect_area){
        console.log("The triangle has a bigger area.");
    }
    else if (rect_area>tr_area){
        console.log("The rectangle has a bigger area.");
    
    }
    else {console.log("The areas are equal")}; 
}
else {
    console.log("Can't calculate the areas.");
}
