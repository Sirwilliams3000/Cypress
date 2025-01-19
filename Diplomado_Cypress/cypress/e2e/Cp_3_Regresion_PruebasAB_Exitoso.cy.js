//CP: 3
//Descripcion: Este caso de prueba corresponde a el primer de Regresion de acceso a la opcion Control de Preubas A/B exitoso
//Version: 1.0.0
//Fecha: 18/01/2025
//Autor: William Machuca

//Error Desc: El error en el front corresponde a un control de erores en logs de la herrmienta que no afecta la ejecucion ni el resultado.
//Queda como un spyke en foros para que este "error" no se visualice

describe('Prueba de A/B Testing', () => {
  it('Debe mostrar el título "A/B Test Control"', () => {
    // Visitar la página de A/B Testing
    cy.visit('https://the-internet.herokuapp.com/abtest')

    // Verificar que el título "A/B Test Control" esté presente
    cy.contains('h3', 'A/B Test Control').should('be.visible')
  })
})