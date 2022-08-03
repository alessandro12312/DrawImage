const input =
    document.querySelector('input[type="file"]')

input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()

    reader.onload = function () {
        const lines = reader.result.replace("\r", "").split('\n')
        console.log(lines)


        lines.forEach(linea => {

            var cella = linea.split(",")
            var nomeAgo = cella[0]
            var angolo = cella[1]
            var dimensione = cella[2]
            DisegnaAgo(nomeAgo, angolo, dimensione)
        }
        );
    }
    reader.readAsText(input.files[0])
}, false)

function DisegnaAgo(nomeAgo, angolo, dim) {
    var dividendo
    var moltiplicatore

    var angStart
    var angFine


    if (angolo = 180) {
        dividendo = 1
        moltiplicatore = 2

        angStart = 0
        angFine = angolo

    }
    else if (angolo = 135) {
        dividendo = 3
        moltiplicatore = 8

        angStart = 0
        angFine = angolo
    }
    else if (angolo = 225) {
        dividendo = 5
        moltiplicatore = 8

        angStart = 0
        angFine = angolo
    }




    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 4;

    var r = ((((moltiplicatore * dim) / dividendo) / 2 * Math.PI) * 3.77);

    console.log(r);

    r = r + ((r * 20) / 100);
    var radius = r;
    var x = (Math.PI / 180) * angStart
    var y = (Math.PI / 180) * angFine
    var startingAngle = x;
    var endingAngle = y;
    var counterclockwise = false;

    context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);

    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();  
    context.clearRect(0, 0, canvas.width, canvas.height);
}
var mssql=Request('mssql')
var config = {
    "user": "TEST", //default is sa
    "password": "tiger",
    "server": "192.168.172.18", // for local machine
    "options": {
        "encrypt": true
    }
  }

connect(config, err => { 
if(err){
    throw err ;
}
console.log("Connection Successful !");
})