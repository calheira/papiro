$(document).ready(function(){
  //variáveis globais
  var doc = {
    preposto:"PREPOSTO",
    rg: "RG",
    adv:"ADVOGADO",
    processo:"PROCESSO",
    oab:"OAB",
    hora:"HORA"
  };

  //monta_texto
  function monta_texto(){
    var texto = "Certifico para os devidos fins que o(a) Sr(a). " + doc.preposto + " (RG " + doc.rg + "), preposto da empresa ré, acompanhado(a) do(a) Bel(a). " + doc.adv + " (OAB " + doc.oab + "),  compareceu(ram) neste Juizado, a fim de participar de audiência de Conciliação do processo em epígrafe, anteriormente designada para esta data, às " + doc.hora + " horas. No entanto, a referida audiência foi cancelada. O referido é verdade e dou fé."
    $("#teor").text(texto);
    assina();
  }

  //assinatura
  function assina(){
    $("#assinatura").html("<em>"+ "Alexandre Sousa Rodrigues" +" <br>Secretário</em>")
  }

  //muda preposto
  $("#inp_preposto").change(function(){
    doc.preposto = $(this).val();
    monta_texto();
  });

  //muda rg
  $("#inp_rg").change(function(){
    doc.rg = $(this).val();
    monta_texto();
  });

  //muda advogado
  $("#inp_adv").change(function(){
    doc.adv = $(this).val();
    monta_texto();
  });

  //muda oab
  $("#inp_oab").change(function(){
    doc.oab = $(this).val();
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

  //funcoes auxiliares

  //imprime documento
  $("#bt_imprimir").on("click", function(){window.print()});

  //aciona dropdow
  $(".dropdown-toggle").dropdown();

  monta_texto();
});
