var audio = new Audio('assets/sentmessage.mp3');
var contactString = `<div class='social'> 
<a href='mailto:ixakblt@gmail.com'>
   <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div>
</a> <a target='_blank' href='https://github.com/ixakblt'>
   <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div>
</a><a target='_blank' href='https://instagram.com/ixakblt'>
   <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div>
</a> <a href='https://www.linkedin.com/in/ixakblt/' target='_blank' rel='noopener noreferrer'>
   <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div>
</a> </div>`
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>ibrahim AKBULUT.pdf</label></div><a href='assets/ibrahimAKBULUT.pdf' download='ibrahimAkbulut.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

var btc = "<img src='images/btc.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>BTC</label></div><a href='images/btc.png' download='btc.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var eth = "<img src='images/eth.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>ETH</label></div><a href='images/eth.png' download='eth.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var trx = "<img src='images/trx.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>TRX</label></div><a href='images/trx.png' download='trx.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var sol = "<img src='images/sol.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>SOL</label></div><a href='images/sol.png' download='sol.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var ltc = "<img src='images/ltc.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>LTC</label></div><a href='images/ltc.png' download='ltc.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var xrp = "<img src='images/xrp.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>XRP</label></div><a href='images/xrp.png' download='xrp.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var ton = "<img src='images/ton.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>TON</label></div><a href='images/ton.png' download='ton.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var doge = "<img src='images/doge.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>DOGE</label></div><a href='images/doge.png' download='doge.png'><img class='download' src='images/downloadIcon.svg'></a></div>";
var rvn = "<img src='images/rvn.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/qr.png'><label>RVN</label></div><a href='images/rvn.png' download='rvn.png'><img class='download' src='images/downloadIcon.svg'></a></div>";

// var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1000);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>ibrahim AKBULUT</a>.<br><br>I am Frontend & Backend Devoloper and Video Editor<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'crypto'</span> - to my crypto addresses <br><span class='bold'>'clear'</span> - to clear conversation");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'><br>I can write code in the following languages<br><span class='bold'>Golang<br>JavaScript<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks <span class='bold'><br>VueJs<br>Flutter<br>ExpressJs<br>Golang Fiber</span><br><br>I am working with <span class='bold'>Lenovo v14 G2 </span><br><br>my Other Skills<br><span class='bold'>Davinci Resolve</span><br><span class='bold'>Blender</span><br><span class='bold'>SQL</span><br> <span class='bold'>Docker</span><br><span class='bold'>Linux</span><br></span>");
            break;

        case "education":
            sendTextMessage("I graduated from Mersin University Computer Programming.");
            break;

        // case "address":
        //     sendTextMessage(addressString);
        //     break;
        case "clear":
            clearChat();
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "crypto":
            sendTextMessage("<span class='sk'>Send Keyword for my Crypto addresses.<br><br><span class='bold'>'BTC'</span> - to get my BTC address<br><span class='bold'>'ETH'</span> - to get my ETH address<br><span class='bold'>'LTC'</span> - to get my LTC address<br><span class='bold'>'TRX'</span> - to get my TRX address<br><span class='bold'>'XRP'</span> - to get my XRP address<br><span class='bold'>'TON'</span> - to get my TON address<br><span class='bold'>'SOL'</span> - to get my SOL address<br><span class='bold'>'RVN'</span> - to get my RVN address<br><span class='bold'>'DOGE'</span> - to get my DOGE address<br>");
            break;
        case "btc":
            sendTextMessage(btc);
            break;
        case "eth":
            sendTextMessage(eth);
            break;
            
        case "xrp":
            sendTextMessage(xrp);
            break;
        case "ltc":
            sendTextMessage(ltc);
            break;

        case "trx":
            sendTextMessage(trx);
            break;

        case "sol":
            sendTextMessage(sol);
            break;
        case "ton":
            sendTextMessage(ton);
            break;
        case "doge":
            sendTextMessage(doge);
        break;
        case "rvn":
            sendTextMessage(rvn);
        break;
        // case "projects":
        //     sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Vinayak-09'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
        //     break;
        // case "new":
        //     sendTextMessage(addressString);
        //     break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
