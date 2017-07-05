
function validateForm(){
	$(document).ready(function(){
		//acá empezamos a validar
		//nombre
		(function name(){
			var idNombre = $("#name").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(idNombre)){
				$(".name-container").append('<span>Nombre inválido. Ingrese nuevamente.</span>');
			}
		})();

		//apellido
		(function lastName(){
			var idApellido = $("#lastname").val();
			if (!(/^[A-Z][a-z]{3,19}$/).test(idApellido)){
				$(".lastname-container").append('<span>Apellido inválido. Ingrese nuevamente.</span>');
			}
		})();

		//email
		(function email(){
			var idCorreo = $("#input-email").val();
			if (!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo)){
				$(".email-container").append('<span>Correo inválido. Ingrese nuevamente.</span>');
			}
		})();

		//contraseña
		(function contrasena(){
			var idContrasena = $("#input-password").val();
			if (idContrasena=="123456" || idContrasena=="098765" || idContrasena=="password" || !(/^(?=.*\d).{6,}$/).test(idContrasena)){
				$(".form-group").first().append('<span>Contraseña inválida. Ingrese nuevamente.</span>');
			}
		})();

		//select
		//POR ALGUNA RAZÓN ACÁ ME GUARDA EL SPAN VACIO EXTRA EN EL SELECT Y OTRO CON CONTENIDO EN EL DIV CONTENEDOR DE TWITTER (yo creo que next() es el que está interfiriendo)
		//los tres métodos hacen lo mismo
		(function selection(){
			//probamos con esto
			/*var eleccion = $("select");
			var large = eleccion.length;
			for (i=0 ; i<large ; i++){
				if (eleccion[i]==0){
					$(".form-group").next().append('<span>Debe escoger una de las opciones.</span>');
				}
			}*/
		//no funciona



			/*$.each(eleccion,function(index,element){
				if (element.value == 0){
					$(".form-group").next().append('<span>Debe escoger una de las opciones.<span>');
				}
			})*/

			//aca se cambio el seleccionador original por el select y un after, y eso quito el span del contenedor de twitter, pero sigue imprimiendo un span vacio despues del select
			$("select").each(function(index,element){
				if (element.value == 0){
					$("select").after('<span>Debe escoger una de las opciones.<span>');
				}
			});
			/*jQuery.each(eleccion,function(index,element){
				if (element.value == 0){
					$(".form-group").next().append('<span>Debe escoger una de las opciones.<span>');
				}
			});*/
		})();

	});
}



