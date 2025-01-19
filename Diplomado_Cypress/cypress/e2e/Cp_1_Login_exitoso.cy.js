//CP: 1
//Descripcion: Este caso de prueba corresponde a login exitoso
//Version: 1.0.3
//Fecha: 17/01/2025
//Autor: William Machuca

//Error Desc: El error en el front corresponde a un control de erores en logs de la herrmienta que no afecta la ejecucion ni el resultado.
//Queda como un spyke en foros para que este "error" no se visualice

describe('Prueba de Logueo Exitosa', () => {
  it('Debe ingresar a la página correctamente y validar el mensaje', () => {
    // Visitar la página con credenciales para autenticación básica
    const username = 'admin'; // Reemplaza con tu usuario
    const password = 'admin'; // Reemplaza con tu contraseña
    const url = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
    
    cy.visit(url);

    // Validar que el mensaje de éxito sea visible
    cy.get('h3').should('be.visible').and('contain.text', 'Basic Auth');
    cy.get('p').should('be.visible').and('contain.text', 'Congratulations! You must have the proper credentials.');

    // Mensaje de éxito en consola
    cy.log('Congratulations! You must have the proper credentials.');

	cy.intercept('**/event*').as('optimizelyEvent');
	cy.wait('@optimizelyEvent').then((interception) => {
		if (interception && interception.response) {
			expect(interception.response.statusCode).to.equal(5000);
			} else {
			cy.log('No se interceptó ninguna respuesta o la respuesta es nula.');
			}
		});	
  });
});