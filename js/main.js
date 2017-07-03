
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
		
	});
}