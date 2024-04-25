

function onClickEvent(){
 let myCount = 1;
 alert("You Completed " + myCount + " Exercise");
 myCount = nestedCall(myCount);
 alert("You Completed " + myCount + " Exercise");

 function onClickEvent() {
      let myCount = 6;
      alert("You Completed " + myCount + " Exercise");
      myCount = nestedCall(myCount);
      alert("You Completed " + myCount + " Exercise");

  // Open a new page
      window.open('https://www.google.com', '_blank');
 }
 
 function nestedCall(count){
  console.log("reached NestedCall");
  return count + 4
 }
