function collectInput() {
    // Get the input value
    let userInput = document.getElementById("userInput").value;
    
    // Display it in a paragraph
    document.getElementById("output").innerText = "You entered: " + userInput;
}