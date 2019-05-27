let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt, img;

function setup() {
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(400, 400);
    background('white');
    txt = createElement("h5", "Sig noget ")
        .position(40, 200)
        .style("color:black;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(20, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString.split(' ').pop();
        resultP.html(sentence);
        if(sentence.includes("Sara")){
            switchImage('assets/Sara.jpg');
            }
        if(sentence.includes("søster")){
            switchImage('images/søster.jpg');
            }    
        if(sentence.includes("fodbold")){
            switchImage('assets/fodbold.jpg');
            }
        
        if(sentence.includes("basket")){
        switchImage('assets/basket.jpg');
        }

        if(sentence.includes("brun")){
            switchImage('images/brunhåret.png');
            }
            
            if(sentence.includes("blond")){
            switchImage('images/blondt.png');
            }
        
            
            
        
    }   
}


function switchImage(url){
    if(img == undefined){
        img = createImg(url)
        .position(width/2, height/2)
        .style("width:500px;height:500px");
    }else{
        img.attribute('src', url)
    }
}