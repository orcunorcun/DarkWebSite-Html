
	var ppp = 0;
		var hhh = 7;
		var wid = 0;

     var myAarray = new Array;   
           		
var globCount=0.1;

function rend()
{ 
var counter = 0;
var ce=0;
var jj=0;


var increase = Math.PI /90+wid;
var topWave = document.getElementById("topWave")
topWave.width = window.innerWidth;
topWave.height = (window.innerHeight/100)*3;
var withi = window.innerWidth/5
	for ( i = 0; i <=withi; i ++ ) 
	{
		x = i;
		y = Math.sin(counter+globCount);
		counter += increase;
		var pp =20+y*hhh;
		if(myAarray[i]==undefined || myAarray[i]=='' )
		{
			myAarray[i]=topWave.getContext('2d');
		}
		
						
		myAarray[i].beginPath();
		myAarray[i].lineWidth="10";
		myAarray[i].strokeStyle="#1a1a1a"; 
		myAarray[i].moveTo(0+jj,0);
		myAarray[i].lineTo(jj,pp);
		myAarray[i].stroke(); // Draw it
		jj+=5;
	}
	globCount+=0.1+ppp;

}
setInterval('rend()',50);
