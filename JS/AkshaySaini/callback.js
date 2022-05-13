function abc(){
let count = 0;
document.getElementById('click').addEventListener("click", function xyz() {
    console.log("Button Clicked", count++);
});
}
abc();

window.setTimeout(() => {
    console.log("Namaste Javascript.");
}, 4000);