

function onClickEvent(){
 let myCount = 1;
 alert("You Completed " + myCount + " Exercise");
 myCount = nestedCall(myCount);
 alert("You Completed " + myCount + " Exercise");
 }
 
 function nestedCall(count){
  console.log("reached NestedCall");
  return count + 4
 }