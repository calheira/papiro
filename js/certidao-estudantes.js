$(document).ready(function(){
  //variáveis globais
  var doc = {
    conciliador:"CONCILIADOR",
    nome:"NOME E DOCUMENTO ",
    intervalo:"HORA INICIAL - HORA FINAL",
    quantidade: "NUMERO_AUDIÊNCIAS"
  };

  //monta_texto
  function monta_texto(){
    var texto = "Certifico para os devidos fins, que o(a)(s) estudante(s), " + doc.nome + " compareceu(ram) a este Juizado, no horário compreendido entre " + doc.intervalo +  " horas do dia de hoje, para acompanhar as Audiências deste Juizado, totalizando " + doc.quantidade +"  Audiências de Conciliação  (Cível) na condição de OUVINTE. O referido é verdade e dou fé."
    $("#teor").text(texto);
    assina();
  }

  //assinatura
  function assina(){
    $("#assinatura").html("<em>"+ doc.conciliador +" <br>Conciliador(a)</em>")
  }

  //muda parte
  $("#inp_nome").change(function(){
    doc.nome = $(this).val();
    monta_texto();
  });

  //muda cpf
  $("#inp_intervalo").change(function(){
    doc.intervalo = $(this).val();
    monta_texto();
  });

  //muda hora
  $("#inp_quantidade").change(function(){
    doc.quantidade = $(this).val();
    monta_texto();
  });

  //conciliadores

  //aiesca
  $("#aiesca").on("click", function(){
    doc.conciliador = "AIESCA DE CARVALHO MENDES"
    monta_texto();
  });

  //erica
  $("#erica").on("click", function(){
    doc.conciliador = "ERICA ALMEIDA LEAL"
    monta_texto();
  });

  //murilo
  $("#murilo").on("click", function(){
    doc.conciliador = "MURILO HAMATI GONCALVES"
    monta_texto();
  });

  //funcoes auxiliares

  //imprime documento
  $("#bt_imprimir").on("click", function(){window.print()});

  //aciona dropdow
  $(".dropdown-toggle").dropdown();

  monta_texto();
});
