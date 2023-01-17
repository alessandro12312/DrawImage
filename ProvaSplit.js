function CanvasDinamico(raggio, Tipo) {
    if (Tipo =="Cappio") {
        canvas.width = (2 * raggio) + 70;
        canvas.height = raggio * 2 + 20;
    }
    else if (Tipo == "Semi") {
        canvas.width = (2 * raggio) + 20;
        canvas.height = raggio + 50;
    }
    else if (Tipo == "Doppio") {

        canvas.width = (2 * raggio) + 50;
        canvas.height = (raggio * 2) + 20;
    }

}


function CanvasRetto(altezza, lunghezza, Tipo) {
    if (Tipo = "Semi") {
        canvas.width = lunghezza;
        canvas.height = altezza;
    }
    if (Tipo = "Doppio") {
        canvas.width = lunghezza;
        canvas.height = (altezza * 2) + 40;
    }
}
const input =document.querySelector('input[type="file"]');

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
context.save();



input.addEventListener('change', function (e) {
    console.log(input.files);
    const reader = new FileReader();

    reader.onload = function () {
        const lines = reader.result.replace(/(\r)/gm, "").split('\n');
        console.log(lines);


        lines.forEach(linea => {


			var cella = linea.split(";")
			var nomeAgo = cella[0]
			var angolo = parseFloat(cella[1])
			var dimensione = parseFloat(cella[2])
			var Modello = cella[3]
			if (Modello == "Semi" || Modello == "Retto") {
				DisegnaSemi(nomeAgo, angolo, dimensione, Modello);
		
			}
			else if (Modello == "Cappio") {
		
				DiesegnoCappio(nomeAgo, angolo, dimensione, Modello);
		
			}
			else if (Modello == "Doppio") {
				DisegnaDoppi(nomeAgo, angolo, dimensione, Modello);
			}
		}
		);
	}
	reader.readAsText(input.files[0])
}, false)

function DiesegnoCappio(nomeAgo, angolo, dim, Tipo) {
    function ScaricaFile() {
        var dataUrl = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = nomeAgo+"C"+".png";
        link.href = dataUrl.replace("image/png", "image/octet-stream");
        console.log(link);
        link.click();
    }
		if (angolo != 0) {
			if (angolo == 135) {

				var dividendo = 3;
				var moltiplicatore = 8;

				var angStart = 25;
				var angFine = 155;

			} else if (angolo == 180) {
				dividendo = 1;
				moltiplicatore = 2;

				angStart = 0;
				angFine = angolo;
			} else if (angolo == 225) {
				dividendo = 5;
				moltiplicatore = 8;

				angStart = 330;
				angFine = 210;
			}
			else if (angolo == 90) {
				dividendo = 1;
				moltiplicatore = 4;

				angStart = 45;
				angFine = 135;
			}
			else if (angolo == 288) {
				dividendo = 4;
				moltiplicatore = 5;

				angStart = 315;
				angFine = 238;
        }
        var r = ((((moltiplicatore * dim) / dividendo) / 2 * Math.PI) * 12);
        CanvasDinamico(r, Tipo);
        var centerX = r;
        var centerY = canvas.height / 4;

        console.log(r);


        var radius = r; 
        var x = (Math.PI / 180) * angStart;
        var y = (Math.PI / 180) * angFine;
        var startingAngle = x;
        var endingAngle = y;
        var z = centerX + r * Math.cos(startingAngle);
        var m = centerY + r * Math.sin(startingAngle);  
        var counterclockwise = false;
        context.beginPath();
        context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();
        context.beginPath();
        context.ellipse(z+30,m, 20, 30, Math.PI / 2, 0, 2 * Math.PI);

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.setLineDash([10,5]);
        context.stroke();

    }
    ScaricaFile();
    document.getElementById('cancella').click();
}

function DisegnaSemi(nomeAgo, angolo, dim, Tipo) {
    function ScaricaFile() {
        var dataUrl = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = nomeAgo + ".png";
        link.href = dataUrl.replace("image/png", "image/octet-stream");
        console.log(link);
        link.click();
    }
if (angolo != 0) {
    if (angolo == 135) {

        var dividendo = 3;
        var moltiplicatore = 8;

        var angStart = 25;
        var angFine = 155;

    } else if (angolo == 180) {
        dividendo = 1;
        moltiplicatore = 2;

        angStart = 0;
        angFine = angolo;
    } else if (angolo == 225) {
        dividendo = 5;
        moltiplicatore = 8;

        angStart = 330;
        angFine = 210;
    }
    else if (angolo == 90) {
        dividendo = 1;
        moltiplicatore = 4;

        angStart = 45;
        angFine = 135;
    }
    else if (angolo == 288) {
        dividendo = 4;
        moltiplicatore = 5;

        angStart = 315;
        angFine = 238;
        }
        var r = ((((moltiplicatore * dim) / dividendo) / 2 * Math.PI) * 12);
        CanvasDinamico(r, Tipo);
        var centerX = r;
        var centerY = canvas.height / 4;

        console.log(r);


        var radius = r;
        var x = (Math.PI / 180) * angStart;
        var y = (Math.PI / 180) * angFine;
        var startingAngle = x;
        var endingAngle = y;
        var counterclockwise = false;
        context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);


        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();
    }
    else {
        var spessore = 2;
        var altezzaAgo = spessore + 10;
        var Lunghezza = dim * 80;
        CanvasRetto(altezzaAgo, Lunghezza, Tipo);

        context.moveTo(0, altezzaAgo / 2);
        context.lineTo(Lunghezza, altezzaAgo / 2);
        context.stroke();
    };
    ScaricaFile()
    document.getElementById('cancella').click();

}
function DisegnaDoppi(nomeAgo, angolo, dim, Tipo) {
    function ScaricaFile() {
        var dataUrl = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = nomeAgo + ".png";
        link.href = dataUrl.replace("image/png", "image/octet-stream");
        console.log(link);
        link.click();
    }
if (angolo != 0) {
    if (angolo == 135) {

        var dividendo = 3;
        var moltiplicatore = 8;

        var angStart = 25;
        var angFine = 155;

    } else if (angolo == 180) {
        dividendo = 1;
        moltiplicatore = 2;

        angStart = 0;
        angFine = angolo;
    } else if (angolo == 225) {
        dividendo = 5;
        moltiplicatore = 8;

        angStart = 330;
        angFine = 210;
    }
    else if (angolo == 90) {
        dividendo = 1;
        moltiplicatore = 4;

        angStart = 45;
        angFine = 135;
    }
    else if (angolo == 288) {
        dividendo = 4;
        moltiplicatore = 5;

        angStart = 315;
        angFine = 238;
}
        var r = ((((moltiplicatore * dim) / dividendo) / 2 * Math.PI) * 12);
        CanvasDinamico(r, Tipo);
        var centerX = r;
        var centerY = canvas.height / 4;

        console.log(r);


        var radius = r;
        var x = (Math.PI / 180) * angStart;
        var y = (Math.PI / 180) * angFine;
        var startingAngle = x;
        var endingAngle = y;
        var counterclockwise = false;
        context.beginPath()
        context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise);

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();
        context.beginPath();
        context.arc(centerX, centerY + 50, radius, startingAngle, endingAngle, counterclockwise);

        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();

    }
    else {
        var spessore = 2;
        var altezzaAgo = spessore + 10;
        var Lunghezza = dim * 80;
        CanvasRetto(altezzaAgo, Lunghezza, Tipo);

        context.beginPath();
        context.moveTo(0, altezzaAgo / 2);
        context.lineTo(Lunghezza, altezzaAgo / 2);
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();

        context.beginPath();
        context.moveTo(0, (altezzaAgo / 2) + 20);
        context.lineTo(Lunghezza, (altezzaAgo / 2) + 20);
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();
    };
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