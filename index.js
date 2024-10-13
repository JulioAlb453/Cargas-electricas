document.getElementById('cargas-form').addEventListener('submit', function(event){
    event.preventDefault();

    const k= 9e9
    const q1 = parseFloat(document.getElementById('q1').value * parseFloat(document.getElementById('q1-unidad').value))
    const q2 = parseFloat(document.getElementById('q2').value * parseFloat(document.getElementById('q2-unidad').value))
    const q3 = parseFloat(document.getElementById('q3').value * parseFloat(document.getElementById('q3-unidad').value))

    const r12 = parseFloat(document.getElementById('r12').value * parseFloat(document.getElementById('r12-unidad').value))
    const r13 = parseFloat(document.getElementById('r13').value * parseFloat(document.getElementById('r13-unidad').value))
    const r23 = parseFloat(document.getElementById('r23').value * parseFloat(document.getElementById('r23-unidad').value))

    const F12 = (k * Math.abs(q1*q2))/(r12*r12)
    const F13 = (k * Math.abs(q1*q3))/(r13*r13)
    const F23 = (k * Math.abs(q2*q3))/(r23*r23)

    const resultDiv= document.getElementById('result')

    resultDiv.innerHTML=
    ` <h2>Resultados del Cálculo</h2>
        <p><strong>Fuerza entre q1 y q2:</strong> ${F12.toFixed(2)} N</p>
        <p><strong>Fuerza entre q1 y q3:</strong> ${F13.toFixed(2)} N</p>
        <p><strong>Fuerza entre q2 y q3:</strong> ${F23.toFixed(2)} N</p>
        <h3>Pasos del Cálculo</h3>
        <p>1. Usamos la fórmula de la ley de Coulomb: <strong>F = k * |q1 * q2| / r²</strong></p>
        <p>2. Donde k = 9 * 10⁹ N·m²/C² (constante de Coulomb).</p>
        <p>3. Para q1 = ${q1} C, q2 = ${q2} C y r12 = ${r12} m:</p>
        <p>&emsp;F12 = (9 * 10⁹ * |${q1} * ${q2}|) / (${r12}²)</p>
        <p>&emsp;F12 = ${F12.toFixed(2)} N</p>
        <p>4. Para q1 = ${q1} C, q3 = ${q3} C y r13 = ${r13} m:</p>
        <p>&emsp;F13 = (9 * 10⁹ * |${q1} * ${q3}|) / (${r13}²)</p>
        <p>&emsp;F13 = ${F13.toFixed(2)} N</p>
        <p>5. Para q2 = ${q2} C, q3 = ${q3} C y r23 = ${r23} m:</p>
        <p>&emsp;F23 = (9 * 10⁹ * |${q2} * ${q3}|) / (${r23}²)</p>
        <p>&emsp;F23 = ${F23.toFixed(2)} N</p>`;
})