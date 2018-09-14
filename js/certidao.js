$(document).ready(function(){
  //variáveis globais
  var doc = {
    conciliador:"CONCILIADOR",
    parte:"PARTE",
    processo:"PROCESSO",
    cpf:"CPF",
    hora:"HORA"
  };

  //monta_texto
  function monta_texto(){
    var texto = "Certifico para os devidos fins que o(a) Sr(a). " + doc.parte + "(CPF " + doc.cpf + ") compareceu neste Juizado, a fim de participar de audiência de Conciliação do processo em epígrafe, anteriormente designada para esta data, às " + doc.hora + " horas. O referido é verdade e dou fé."
    $("#teor").text(texto);
    assina();
  }

  //assinatura
  function assina(){
    $("#assinatura").html("<em>"+ doc.conciliador +" <br>Conciliador(a)</em>")
  }

  //muda parte
  $("#inp_parte").change(function(){
    doc.parte = $(this).val();
    monta_texto();
  });

  //muda cpf
  $("#inp_cpf").change(function(){
    doc.cpf = $(this).val();
    monta_texto();
  });

  //muda hora
  $("#inp_hora").change(function(){
    doc.hora = $(this).val();
    monta_texto();
  });

  //muda processo
  $("#inp_proc").change(function(){
    doc.processo = $(this).val();
    doc.processo = "Processo: " + doc.processo;
    $("#processo").text(doc.processo);
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
