const input =
    document.querySelector('input[type="file"]')

input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()

    reader.onload = function () {
        const lines = reader.result.replace("\r",'').split('\n')
        console.log(lines)


        lines.forEach(linea => {

            var cella = linea.split(",")
            var nomeAgo = cella[0]
            var angolo = parseFloat(cella[1])
            var dimensione = parseFloat(cella[2])
            var tipo = cella[3]
            DisegnaAgo(nomeAgo, angolo, dimensione)
            console.log(nomeAgo,angolo,dimensione)
        }
        );
    }
    reader.readAsText(input.files[0])
}, false)

function DisegnaAgo(nomeAgo, angolo, dim) {

    if(angolo=180){

        var dividendo = 1
        var moltiplicatore = 2

        var angStart = 0
        var angFine = angolo
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
    console.log(dim)


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
    function ScaricaFile(){
        var dataUrl = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = nomeAgo+".png";
        link.href = dataUrl.replace("image/png", "image/octet-stream");
        console.log(link);
        link.click();
    }

    ScaricaFile()
    context.clearRect(0, 0, canvas.width, canvas.height); 

}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }