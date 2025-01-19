import static org.junit.Assert.assertEquals;
import org.junit.*;

import org.junit.Test;

public class SumaTest {

    @Test
    public void sumarDosNumeros() {
        // Arrange
        int a = 5;
        int b = 3;
        int resultadoEsperado = 8;

        // Act
        int resultadoObtenido = sumar(a, b);

        // Assert
        assertEquals(resultadoEsperado, resultadoObtenido);
    }

    private int sumar(int a, int b) {
        return a + b;
    }
}