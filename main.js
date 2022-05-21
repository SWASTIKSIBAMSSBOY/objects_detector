start = "";
img = "";
objectDetector = "";
objects = "";

function preload(){
}
function setup()
{
	canvas = createCanvas(380, 380);
	canvas.center();
	video = createCapture(VIDEO);
	video.hide();
	objectDetector = ml5.objectDetector('cocossd', modelLoaded);
	document.getElementById("start").innerHTML = "Status : DETECTING OBJECTS";
}
function modelLoaded()
{
	console.log(
		"%cMADE BY - SWASTIK SIBAM NAYAK",
		"color: white; background:linear-gradient(#E66465, #9198E5); padding: 1.2em; border-radius: 6px;"
	 );
	 start = true;
}
function gotResult(error, results)
{
	if (error)
	{
		console.log(error);
	}

	console.log(results);
	objects = results;
}
	function draw() {
		image(video, 0, 0, 380, 380);
		if(start != "")
		{ 
		  r =  random(255);
		  g =  random(255);
		  b =  random(255);      
		  objectDetector.detect(video, gotResult);
		  for (i = 0; i < objects.length; i++) {
  			document.getElementById("start").innerHTML = "Status : Object Detected";
 			document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
   
			fill(r,g,b);
			percent = floor(objects[i].confidence * 100);
			text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
			textSize(20);
			textFont("Permanent Marker");
			strokeWeight(3);
			noFill();
			stroke(r,g,b);
			rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
		  }
	}
}
