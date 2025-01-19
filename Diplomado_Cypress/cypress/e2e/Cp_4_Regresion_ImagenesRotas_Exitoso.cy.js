//CP: 4
//Descripcion: Este caso de prueba corresponde a el segundo de Regresion de acceso a la opcion Imagenes Rotas exitoso
//Version: 1.0.0
//Fecha: 18/01/2025
//Autor: William Machuca

//Error Desc: El error en el front corresponde a un control de erores en logs de la herrmienta que no afecta la ejecucion ni el resultado.
//Queda como un spyke en foros para que este "error" no se visualice

describe('Prueba de imágenes rotas', () => {
  it('Debe mostrar el título "Broken Images"', () => {
    // Visitar la página de imágenes rotas
    cy.visit('https://the-internet.herokuapp.com/broken_images')

    // Verificar que el título "Broken Images" esté presente
    cy.contains('h3', 'Broken Images').should('be.visible')
  })
})