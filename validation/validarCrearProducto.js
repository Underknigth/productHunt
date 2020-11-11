export default function createProductValidation(values) {
	
	let errores = {};

	if(!values.nombre) {
		errores.nombre ="El nombre es obligatorio"
	}

	if(!values.Empresa) {
		errores.Empresa ="El nombre de la empresa es necesario"
	}

	if(!values.Url) {
		errores.Url = "la Url es obligatoria"
	} else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.Url)) {
		errores.Url = "URL mal formateada o no válida"
	}

	if(!values.Descripcion) {
		errores.Descripcion = "Agrega una descripcion para tu producto"
	}
	return errores;
}