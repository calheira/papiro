$(document).ready(function(){
  //dados do juizado
  var juizado = {
    vara: "3ª Vara do Sistema dos Juizados Especiais da Comarca de Itabuna",
    endereco: "Rua A, S/N, Fórum - Módulo 2 - 2º Andar - Bairro Nossa Senhora das Graças - CEP: 45.601-572 - Itabuna - BA",
    telefone: "(73) 3214-0966"
  };

  //monta_texto
  function dados_juizado(){
    var texto = juizado.vara + "<br>" + juizado.endereco + "<br>Telefone:" + juizado.telefone
    $("#unidadejudicial").html(texto);
  }

  dados_juizado();
});
