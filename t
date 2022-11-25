//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;
var position=[];
var position_name=[];
var position_left=[];

$(document).ready(function(){
	
	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function(){
		
		//add 1 every click
		clicks ++;
		
		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		
		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
    var function_call=false;
		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				  
				if (c === n) { 
					clearInterval(interval);
				}	
					 
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				//console.log(aoY);
        //console.log('this',position);
        
				
				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin'); 
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				} 
     
        if(c == n) {
           if(function_call == false) {
             console.log('done');
                      console.log('ans',t.data('name'));
             function_call=true;
             getCounterData(aoY);
                         
           }
          
        }
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	});
	function setPosition() {
    position=[];
    position_name=[];
    position_left=[];
    console.log('reset');
	$('.sec').each(function(){                 
    var pos = $(this).offset().top;
    var left_pos = $(this).offset().left;
    position_left.push(left_pos);
    position.push(pos);
   position_name.push($(this).data('name'));
    $(this).attr('data-position',pos);
}); 
}
  setPosition();

//console.log(position); 
  
  
  function getCounterData(num) {
    setPosition(); 
    //console.log("position",position_left,position_name);
    current = position[0];
    current_name = position_name[0];
      console.log(current_name);
    var $i=0;
       position = sortWithIndeces(position);
console.log('wqewew',position,position[1],position.sortIndices[1]);       current_name=position_name[position.sortIndices[1]];
               //console.log('kk',current_name);          
    alert(current_name); 
      setPosition();  
  }
	
});//DOCUMENT READY 


function sortWithIndeces(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}
	

