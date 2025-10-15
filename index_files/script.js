let semesterListElements = document.querySelectorAll(".semester-terms-list");
let bachelorTableAllRowsCells = document.querySelectorAll(".bachelor-terms-list tbody tr");

let numOfRows = bachelorTableAllRowsCells.length;

for(let i=0;i<numOfRows;){
    let desiredRow = bachelorTableAllRowsCells[i];
    
        
    // let row = bachelorTableAllRowsCell[0];
    // row.className - "course-attributes/spanning-row"
    // row.children - [td, td, td, td, td] -> row.children[0], row.children[1]
    // row.children[0] - firstChild 
    // firstChild.rowSpan == 2 -> skip 1 rows directly - for index 0 => 1 - spanning-row, 2nd in appearance would be needed to skip as well.
    // firstChild.style.backgroundColor = "rgb(237 238 242);"
    
    let firstChild = desiredRow.children[0]; // only interested in Course Code 
    let secondChild = desiredRow.children[1]; // and Course Name
    // let thirdChild = desiredRow.children[2];
    // let fourthChild = desiredRow.children[3];
    // let fifthChild = desiredRow.children[4];
    
    // Setting 5 td style to desired color
    if(desiredRow.className!=="spanning-row"){
        firstChild.style.backgroundColor = "rgb(237 238 242)";
        secondChild.style.backgroundColor = "rgb(237 238 242)";
    }
    // thirdChild.style.backgroundColor = "rgb(237 238 242)";
    // fourthChild.style.backgroundColor = "rgb(237 238 242)";
    // fifthChild.style.backgroundColor = "rgb(237 238 242)";


    // console.log(desiredRow.children[0])
    // console.log(firstChild);
    // break;

    
    if(firstChild.rowSpan===2){
        i+=3 // Skip next row (which is already hidden - spanning-row). 
            // Next row in appearance would need to be skipped as well 
            // (BUT IF ITS AGAIN ROW with rowSpan=2, we will land on spanning-row)
    } else if (desiredRow.className==="spanning-row"){ 
        i+=1 // But as this spanning-row is part of tr with row-span=2, 
                // we can ignore this as well so we can move to next row. 

                // BUG (handled in above if-condition): After i+=1 statement, the execution flow
                // will continue and eventually it will hit statements which set the backgroundColor
                // This BUG turns first 2 cells (Type, Credits) of few spanning rows to above color. 

    } else {
        i+=2   // In case of row with no rowspan - we can only skip next one 
                // What if next one is cells with rowspan=2?
                // Then we will land of spanning row. Condition already catched and we move to next row.
    }
}






// /* smartphones, iPhone, portrait 480x320 phones */
if (window.matchMedia('screen and (max-width: 320px)').matches) {
    
}

// /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
if (window.matchMedia('screen and (max-width: 481px)').matches) {
    
}

// /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
if (window.matchMedia('screen and (max-width: 641px)').matches) {
    
}

// /* tablet, landscape iPad, lo-res laptops ands desktops */
if (window.matchMedia('screen and (max-width: 961px)').matches) {
    
}

// /* big landscape tablets, laptops, and desktops */ 
if (window.matchMedia('screen and (max-width: 1025px)').matches) {
    
}

// hi-res laptops and desktops 
if (window.matchMedia('screen and (max-width: 1281px)').matches) {
    
}


// For education section in mobile screens
// Remove bullets
// Remove margin
// using .masters-term-list remove all the margiin
// Same for bachelor


// EXTREMELY IMPORTANT - SAVE!!!
// head, body {header, nav, main, section, footer}