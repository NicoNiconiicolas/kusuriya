// Get references to HTML elements
const canvas = document.getElementById('drawing-canvas'); // Get the canvas element
const ctx = canvas.getContext('2d'); // Get the 2D rendering context
const clearButton = document.getElementById('clear-button'); // Get the clear button
const submitButton = document.getElementById('submit-button'); // Get the submit button
const kanjiGif = document.getElementById('kanji-gif'); // Get the kanji GIF element
const kanjiMeaning = document.getElementById('kanji-meaning'); // Get the kanji meaning element
const kanjiReading = document.getElementById('kanji-reading'); // Get the kanji reading element
const showButton = document.getElementById('show-button'); // Get the show button

// Initialize variables
let kanHidden = getCookie("kanHidden"); // Get the value of the "kanHidden" cookie
let currentKanji = -1; // Index of the current kanji
let gradeLength = ""; // Length of the grade kanji list

// Set the canvas line width
ctx.lineWidth = 6;

// Add event listeners
canvas.addEventListener('mousedown', startDrawing); // When mouse is pressed down on the canvas, start drawing
canvas.addEventListener('mousemove', draw); // When mouse is moved on the canvas, draw
canvas.addEventListener('mouseup', stopDrawing); // When mouse is released, stop drawing
clearButton.addEventListener('click', clearCanvas); // When clear button is clicked, clear the canvas
submitButton.addEventListener('click', submitCanvas); // When submit button is clicked, submit the canvas

//write on canvas from the center of the cursor instead of top-left
var cx = canvas.width * 0.01;
var cy = canvas.height * 0.01;
ctx.translate(cx, cy);

// Initialize drawing state
let drawing = false;

// Function to start drawing
function startDrawing(event) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Function to draw
function draw(event) {
    if (!drawing) return;
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
}

// Function to stop drawing
function stopDrawing() {
    drawing = false;
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to submit the canvas
function submitCanvas() {
    const dataURL = canvas.toDataURL();
    // Here, the dataURL is passed to a deep learning evaluation algorithm and the results are processed
}

// Function to load the next kanji
function nextKanji(g) {
    // g defines kanji from which grade will be loaded
    if (kanHidden == "true" || kanHidden == "") {
        showButton.style.display = "inline";
        kanjiGif.style.display = "none";
    } else {
        showButton.style.display = "none";
        kanjiGif.style.display = "block";
    }
    currentKanji++;
    setCookie('resume_' + $_GET("grade"), currentKanji, 365);

    if (currentKanji >= eval(gradeLength)) {
        alert('End of Grade ' + g);
        delCookie('resume_' + $_GET("grade"));
        window.location = "./japanese.html";
    } else {
        clearCanvas();
        var source = "kanjiData.grade" + g + "[currentKanji].character";
        kanjiGif.src = "../gif/kanji/" + eval(source) + ".gif";
        var meaning = "kanjiData.grade" + g + "[currentKanji].meaning";
        var reading = "kanjiData.grade" + g + "[currentKanji].reading";
        if (eval(reading) != undefined) {
            kanjiReading.innerHTML = '「' + eval(reading) + '」';
        } else {
            kanjiReading.innerHTML = '';
        }
        kanjiMeaning.innerHTML = eval(meaning);
    }
}

// Function to show the kanji GIF
function showKanji() {
    kanjiGif.style.display = "block";
    showButton.style.display = "none";
}

// Function to obtain a GET parameter from URL
function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // Regular expression to match GET parameters
        function(m, key, value) { // Callback function to process matches
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}
    // Recover grade variable from URL
    let grade = $_GET("grade");
    // Modify the submit button so it loads the next kanji of the right grade
    submitButton.setAttribute("onClick", "nextKanji(" + grade + ")");
    // Get the total number of kanji for the corresponding grade (to know when it reaches the end)
    gradeLength = "kanjiData.grade" + grade + ".length";
    // If the GET variable "resume" exists, load the right kanji
    if ($_GET("resume")) {
        currentKanji = $_GET("resume") - 1;
    }
    // Initialize the first kanji by automatically clicking the submit button
    submitButton.click();