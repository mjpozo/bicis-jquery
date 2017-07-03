
function validateForm(){
	$(document).ready(function(){
		//acá empezamos a validar
		//nombre
		(function name(){
			var idNombre = $("#name").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(idNombre)){
				$(".name-container").append('<span>Nombre inválido. Ingrese nuevamente.');
			}
		})();

		//apellido
		(function lastName(){
			var idApellido = $("#lastname").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(idApellido)){
				$(".lastname-container").append('<span>Apellido inválido. Ingrese nuevamente.');
			}
		})();

		//email
		(function email(){
			var idCorreo = $("#input-email").val();
			if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo)){
				$(".email-container").append('<span>Correo inválido. Ingrese nuevamente.');
			}
		})();

		//contraseña
		(function contrasena(){
			var idContrasena = $("#input-password").val();
			if (idContrasena=="123456" || idContrasena=="098765" || idContrasena=="password" || !(/^(?=.*\d).{6,}$/).test(idContrasena)){
				$(".form-group").first().append('<span>Contraseña inválida. Ingrese nuevamente.');
			}
		})();

		//select
		//POR ALGUNA RAZÓN ACÁ ME GUARDA EL SPAN EN EL DIV CONTENEDOR DE TWITTER
		(function selection(){
			var eleccion = $("select");
			jQuery.each(eleccion,function(i,val){
				if (val.value == 0){
					$(".form-group").next().append('<span>Debe escoger una de las opciones.<span>');
				}
			});
		})();

	});
}