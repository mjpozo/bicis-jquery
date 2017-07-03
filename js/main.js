
function validateForm(){
	$(document).ready(function(){
		//acá empezamos a validar
		//nombre
		function name(){
			var idNombre = $("#name").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(idNombre)){
				$(".name-container").append('<span>Nombre inválido. Ingrese nuevamente.');
			}
		}
		name();

		//apellido
		function lastName(){
			var idApellido = $("#lastname").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(idApellido)){
				$(".lastname-container").append('<span>Apellido inválido. Ingrese nuevamente.');
			}
		}
		lastName();

		//email
		function email(){
			var idCorreo = $("#input-email").val();
			if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo)){
				$(".email-container").append('<span>Correo inválido. Ingrese nuevamente.');
			}
		}
		email();

	});
}