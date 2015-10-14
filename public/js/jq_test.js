$(document).ready(function(){
	$("#intro").hide();
	
	/*$("p.p1").mouseover(function(){
		$("#show_this").fadeIn();
	});
	
	$("p.p1").mouseout(function(){
		$("#show_this").fadeOut();
	});*/
	
	$("p.p1").on({
		"mouseover": function(){
			$("#show_this").fadeIn();
		},
		"mouseout": function(){
			$("#show_this").fadeOut();
		}
	});
	
	$(".textbox").keyup(function(){
		a = Number($("#a").val());
		b = Number($("#b").val());
		
		sum = a+b;
		$("#sum").val(sum);
	});
	
	/*$("newContent").load("index.html", function(resp){
		alert("Content updated!");
	});*/
	
	$("button[name='get_students']").click(function(){
		$.get("http://localhost:5000/degree-programs/1",
			function(resp){
				console.log(resp);
			}
		);
	});
	
	/*$("button[name='get_students']").click(function(){
		$.get("http://localhost:5000/degree-programs",
			function(resp){
				console.log(resp);
			}
		);
	});*/
	
	$("button[name='get_students']").click(function(){
		$.post("http://localhost:5000/degree-programs",
			{
				code: "BSF",
				name: "BS Forestry"
			},
			function(resp){
				console.log(resp);
		});
	});
	
	$("#reverse_select").click(function(){	//goes here if the button is clicked
    	$(':checkbox').each(function() {	//checks each checkbox
		  if($(this).is(':checked')){		//checks if the checkbox is checked
			  $(this).prop('checked', false);
		  }
		  else{								//goes here if the checkbox is not checked
			 $(this).prop('checked', true);
		  }
      });
     	return false;
    });

});