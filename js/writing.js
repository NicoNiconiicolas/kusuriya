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
let ckanji = ""; // custom kanji list from url

(function() {
    
    var sketch = document.getElementById('sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    canvas.height = parseInt(sketch_style.getPropertyValue('height'));
    
    
    // Creating a tmp canvas
    var tmp_canvas = document.createElement('canvas');
    var tmp_ctx = tmp_canvas.getContext('2d');
    tmp_canvas.id = 'tmp_canvas';
    tmp_canvas.width = canvas.width;
    tmp_canvas.height = canvas.height;
    
    sketch.appendChild(tmp_canvas);

    var mouse = {x: 0, y: 0};
    var last_mouse = {x: 0, y: 0};
    
    // Pencil Points
    var ppts = [];
    
    /* Mouse Capturing Work */
    tmp_canvas.addEventListener('pointermove', function(e) {
        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
    }, false);
    
    
    /* Drawing on Paint App */
    tmp_ctx.lineWidth = 6;
    tmp_ctx.lineJoin = 'round';
    tmp_ctx.lineCap = 'round';
    tmp_ctx.strokeStyle = 'black';
    tmp_ctx.fillStyle = 'black';
    
    tmp_canvas.addEventListener('pointerdown', function(e) {
        tmp_canvas.addEventListener('pointermove', onPaint, false);
        
        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
        
        ppts.push({x: mouse.x, y: mouse.y});
        
        onPaint();
    }, false);
    
    tmp_canvas.addEventListener('pointerup', function() {
        tmp_canvas.removeEventListener('pointermove', onPaint, false);
        
        // Writing down to real canvas now
        ctx.drawImage(tmp_canvas, 0, 0);
        // Clearing tmp canvas
        tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
        
        // Emptying up Pencil Points
        ppts = [];
    }, false);
    
    var onPaint = function() {
        
        // Saving all the points in an array
        ppts.push({x: mouse.x, y: mouse.y});
        
        if (ppts.length < 3) {
            var b = ppts[0];
            tmp_ctx.beginPath();
            //ctx.moveTo(b.x, b.y);
            //ctx.lineTo(b.x+50, b.y+50);
            tmp_ctx.arc(b.x, b.y, tmp_ctx.lineWidth / 2, 0, Math.PI * 2, !0);
            tmp_ctx.fill();
            tmp_ctx.closePath();
            
            return;
        }
        
        // Tmp canvas is always cleared up before drawing.
        tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
        
        tmp_ctx.beginPath();
        tmp_ctx.moveTo(ppts[0].x, ppts[0].y);
        
        for (var i = 1; i < ppts.length - 2; i++) {
            var c = (ppts[i].x + ppts[i + 1].x) / 2;
            var d = (ppts[i].y + ppts[i + 1].y) / 2;
            
            tmp_ctx.quadraticCurveTo(ppts[i].x, ppts[i].y, c, d);
        }
        
        // For the last 2 points
        tmp_ctx.quadraticCurveTo(
            ppts[i].x,
            ppts[i].y,
            ppts[i + 1].x,
            ppts[i + 1].y
        );
        tmp_ctx.stroke();
        
    };
    
}());

// Function to clear the canvas
function clearCanvas() {
    var tmp_ctx = tmp_canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
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

function nextCustom(){
    if (kanHidden == "true" || kanHidden == "") {
        showButton.style.display = "inline";
        kanjiGif.style.display = "none";
    } else {
        showButton.style.display = "none";
        kanjiGif.style.display = "block";
    }
    currentKanji++;
    if(currentKanji >= ckanji.length) {
        alert('End of custom deck');
        window.location = "./japanese.html";
    }else{
        clearCanvas();
        var meaning = getinfo(ckanji[currentKanji], 0);
        var reading = getinfo(ckanji[currentKanji], 1);
        kanjiGif.src = "../gif/kanji/" + ckanji[currentKanji] + ".gif";
        if (reading != undefined) {
            kanjiReading.innerHTML = '「'+reading+'」';
        } else {
            kanjiReading.innerHTML = '';
        }
        kanjiMeaning.innerHTML = meaning;
    }
}

function getinfo(kanji, type){
    var graden = 1;
    var grade = "kanjiData.grade"+graden;
    for(x=0; x < eval(grade).length; x++){
        if(ckanji[currentKanji] == eval(grade)[x].character){

            if(type == 0){
                return eval(grade)[x].meaning;
            }else{
                return eval(grade)[x].reading;
            }

        }else{
            if(eval(grade).length-1 == x){
                x = 0;
                graden++;
                grade = "kanjiData.grade"+graden;
                if(graden == 11){
                    return "not found";
                }
            }
        }
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
    if(grade != "custom"){
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
    }else{
        //ckanji --> custom kanji
        ckanji = decodeURI($_GET("custom"));
        submitButton.setAttribute("onClick", "nextCustom()");
        submitButton.click();
    }