//CP: 2
//Descripcion: Este caso de prueba corresponde a la adicion de un elemento 
//Version: 1.0.0
//Fecha: 17/01/2025
//Autor: William Machuca

//Error Desc: El error en el front corresponde a un control de erores en logs de la herrmienta que no afecta la ejecucion ni el resultado.
//Queda como un spyke en foros para que este "error" no se visualice

describe('Prueba de agregar y quitar elementos', () => {
  it('Debe agregar un elemento y mostrar el botón de borrar', () => {
    // Visitar la página
    cy.visit('https://the-internet.herokuapp.com/');

    // Hacer clic en el enlace "Add/Remove Elements"
    cy.contains('Add/Remove Elements').click();

    // Hacer clic en el botón "Add Element"
    cy.contains('Add Element').click();

    // Verificar que el botón "Delete" esté presente
    cy.contains('Delete').should('be.visible');
  });
});