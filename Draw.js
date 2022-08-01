var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");

        var centerX = canvas.width / 2; 
        var centerY = canvas.height / 4; 

        var r=((((2*2,6))/2*Math.PI)*3.77);

        console.log(r);

        r=r+((r*20)/100);
        var radius =r; 
        var x = (Math.PI/180)*0
        var y =(Math.PI/180)*180
        var startingAngle = x;
        var endingAngle = y;
        var counterclockwise = false;

        context.arc(centerX,centerY,radius,startingAngle,endingAngle,counterclockwise);

        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.stroke();

        download_img = function(el) {
        var imageURI = canvas.toDataURL("image/png");
        el.href = imageURI;
        }