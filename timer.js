

function showMessage (){
console.log("welcome message from application ");

}
function display(){
    console.log("fetching data");
}

//showMessage();
setInterval(display, 1000)
setInterval(showMessage, 3000);
