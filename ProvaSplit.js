function CanvasDinamico(raggio) {
    canvas.width = (2 * raggio) + 100;
    canvas.height = raggio * 2 + 50;
}

function CanvasRetto(altezza, lunghezza) {
    canvas.width = lunghezza;
    canvas.height = altezza;
}

const input =
    document.querySelector('input[type="file"]')

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
context.save()



input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()

    reader.onload = function () {
        const lines = reader.result.replace("\r", '').split('\n')
        console.log(lines)


        lines.forEach(linea => {

            var cella = linea.split(",")
            var nomeAgo = cella[0]
            var angolo = parseFloat(cella[1])
            var dimensione = parseFloat(cella[2])
            var tipo = cella[3]
            console.log(nomeAgo, angolo, dimensione)
            DisegnaAgo(nomeAgo, angolo, dimensione)
        }
        );
    }
    reader.readAsText(input.files[0])
}, false)

function DisegnaAgo(nomeAgo, angolo, dim) {
    if (angolo != 0) {
        if (angolo == 135) {

            var dividendo = 3
            var moltiplicatore = 8

            var angStart = 0
            var angFine = angolo
        } else if (angolo == 180) {
            dividendo = 1
            moltiplicatore = 2

            angStart = 0
            angFine = angolo
        } else if (angolo == 225) {
            dividendo = 5
            moltiplicatore = 8

            angStart = 0
            angFine = angolo
        }
        var r = ((((moltiplicatore * dim) / dividendo) / 2 * Math.PI) * 8);
        CanvasDinamico(r);
        var centerX = r;
        var centerY = canvas.height / 4;

        console.log(r);


        var radius = r;
        var x = (Math.PI / 180) * angStart
        var y = (Math.PI / 180) * angFine
        var startingAngle = x;
        var endingAngle = y;
        var counterclockwise = false;
        context.beginPath()
        context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke()
        context.beginPath()
        context.ellipse(2 * r + 30, centerY, 20, 30, Math.PI / 2, 0, 2 * Math.PI);

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();
    }
    else {
        var spessore = 2;
        var altezzaAgo = spessore + 10;
        var Lunghezza = dim * 80;
        CanvasRetto(altezzaAgo, Lunghezza);

        context.moveTo(0, altezzaAgo / 2);
        context.lineTo(Lunghezza, altezzaAgo / 2);
        context.stroke();
    };
    function ScaricaFile() {
        var dataUrl = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = nomeAgo + ".png";
        link.href = dataUrl.replace("image/png", "image/octet-stream");
        console.log(link);
        link.click();
    }
    ScaricaFile()
    document.getElementById('cancella').click();

}

function clean() {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
    context.beginPath();

}