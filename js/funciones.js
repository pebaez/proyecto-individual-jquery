//swal("Oops!", "Bienvenidos al Sitio Web de Agricotech ! \n" + " La fecha actual es " + Date(), "success");

function generarNuevoColor()
{
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
//	document.getElementById("hexadecimal").innerHTML = color;
//	document.getElementById("text").innerHTML = "Copiar Color";

	

//alert(document.body.style.background);


}


function isNumber(evt)
	{
		evt = (evt) ? evt : window.event;
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if ( (charCode > 31 && charCode < 48) || charCode > 57) {
			return false;
		}
		return true;
	}


	function validateEmail(sEmail) {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (filter.test(sEmail)) {
			return true;
		}
		else {
			return false;
		}
	}

function ValidaFormulario()
	{

		var error="";
	

		if ($('#nombre').val()=="") { error = error + " Debe Ingresar el nombre \n" };

			
		if ($('#telefono').val()=="") { error = error + " Debe Ingresar el telefono \n" };	

	

		var sEmail = $('#email').val();

		
			if (validateEmail(sEmail)==false) { error = error + "El email es incorrecto \n" };
		

		if ($('#comentario').val()=="") { error = error + " Debe Ingresar el comentario \n" };

		if (error!="")
		{
			
			swal("Oops!", error, "error");
		
			return false;
		}
		else
		{
			return true;
		}


	}


// setInterval(() => {
    
//     generarNuevoColor();

// }, 2000);

  