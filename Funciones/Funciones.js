export function mostrarArea() {
  const base = parseFloat(document.getElementById('base').value);
  const altura = parseFloat(document.getElementById('altura').value);
  calcularAreaTriangulo(base, altura)
    .then(area => {
      document.getElementById('resultado').textContent = `El área del triángulo es: ${area}`;
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
    });
  }

 export async function calcularAreaTriangulo(base, altura) {
    return new Promise((resolve, reject) => {
      if (base > 0 && altura > 0) {
        const area = (base * altura) / 2;
        resolve(area);
      } else {
        reject('La base y la altura deben ser mayores que cero.');
      }
    });
}

export async function sumarAsync(num1, num2) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 1000); // Simula una operación asíncrona con un retraso
  });
}

function sumarNumeros() {
  const num1 = parseFloat(document.getElementById('numero1').value);
  const num2 = parseFloat(document.getElementById('numero2').value);
  sumarAsync(num1, num2).then(sum => {
    document.getElementById('resultado').textContent = `Resultado: ${sum}`;
  });
}
