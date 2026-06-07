const password = document.getElementById("password");

password.addEventListener("input", analyzePassword);

function analyzePassword(){

    const password =
    document.getElementById("password").value;

    const strengthText =
    document.getElementById("strengthText");

    const caption =
    document.getElementById("caption");

    const progress =
    document.getElementById("progress");

    let score = 0;

    const length =
    password.length;

    const upper =
    (password.match(/[A-Z]/g)||[]).length;

    const lower =
    (password.match(/[a-z]/g)||[]).length;

    const numbers =
    (password.match(/[0-9]/g)||[]).length;

    const special =
    (password.match(/[^A-Za-z0-9]/g)||[]).length;

    if(length >= 8) score += 10;
    if(length >= 12) score += 15;
    if(length >= 16) score += 15;

    if(upper >= 2) score += 15;

    if(lower >= 4) score += 10;

    if(numbers >= 3) score += 15;

    if(special >= 3) score += 20;

    if(!/(.)\1{2,}/.test(password))
        score += 10;

    progress.style.width =
    score + "%";

    if(score <= 20){

        strengthText.innerHTML =
        "⚠️ WEAK";

        caption.innerHTML =
        "This password is getting leaked instantly.";

    }

    else if(score <= 40){

        strengthText.innerHTML =
        "🚨 AT RISK";

        caption.innerHTML =
        "Hackers are smiling right now.";

    }

    else if(score <= 60){

        strengthText.innerHTML =
        "❗️ MID";

        caption.innerHTML =
        "You're making it way too easy.";

    }

    else if(score <= 80){

        strengthText.innerHTML =
        "🛡️ DECENT";

        caption.innerHTML =
        "Not bad, but I still wouldn't trust it.";

    }

    else{

        strengthText.innerHTML =
        "🔗 STRONG";

        caption.innerHTML =
        "That's some main character security";

    }

}

function updateCheck(id,status,text){

    const element = document.getElementById(id);

    if(status){
        element.innerHTML = "✅ " + text;
    }
    else{
        element.innerHTML = "❌ " + text;
    }

}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*";

const charArray = chars.split("");

const fontSize = 14;

const columns = canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){
    drops[i]=1;
}

function draw(){

    ctx.fillStyle="rgba(15,23,42,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00f5ff";
    ctx.font=fontSize+"px monospace";

    for(let i=0;i<drops.length;i++){

        const text=
        charArray[Math.floor(Math.random()*charArray.length)];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
            drops[i]*fontSize > canvas.height
            &&
            Math.random() > 0.975
        ){
            drops[i]=0;
        }

        drops[i]++;
    }
}

setInterval(draw,33);

const messages = [
    "Let's See If You're Getting Hacked Tonight!",

];

let currentMessage = 0;
let currentChar = 0;

const typingText =
document.getElementById("typingText");

function typeEffect(){

    const text =
    messages[currentMessage];

    typingText.textContent =
    text.substring(0,currentChar);

    currentChar++;

    if(currentChar > text.length){

        setTimeout(()=>{

            currentChar = 0;

            currentMessage =
            (currentMessage+1)%messages.length;

        },1500);

    }
}

setInterval(typeEffect,100);