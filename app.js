function mostrar() {
    const pronoun = ['the', 'our'];
    const adj = ['great', 'big'];
    const noun = ['jogger', 'racoon'];
    let resultado = [];

    pronoun.forEach(function (pronombre) {
        //console.log(pronombre);

        adj.forEach(function (adjetivo) {
            ///  console.log(adjetivo);

            noun.forEach(function (sustantivo) {
                //   console.log(sustantivo);
                // console.log('pro: ' + pronombre + 'sust: ' + sustantivo + 'adj: ' + adjetivo);
                //console.log(pronombre+ sustantivo+adjetivo+'.com');
                resultado.push(pronombre + adjetivo + sustantivo + '.com')
            });

        });
    });
    return resultado;
}
resultado = mostrar();
//console.log(mostrar()));
function render(dominio) {

    dominio.forEach(function (str) {
        document.querySelector("#widget_content").innerHTML += `<div class="widget">
            <p>${str}</p>
         
        </div>
    `;

    })


}
window.onload = function () {

    render(resultado);

    //document.getElementById("widget_content").innerHTML = resultado;

}