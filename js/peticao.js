$(document).ready(function(){
  //variáveis globais
  var doc = {
    processo: "PROCESSO",
    parte:"PARTE AUTORA",
    nome:"NOME",
    pedidos:""
  };


  //inclui pedido de alvará
  $("#alvara").on("click", function(){
    doc.pedidos += "<br>SEJA EXPEDIDO ALVARÁ JUDICIAL, referente ao valor depositado no evento ______ . "
    $("#pedido").html(doc.pedidos);
  });

  //inclui pedido de desarquivamento
  $("#desarquivamento").on("click", function(){
    doc.pedidos += "<br>O DESARQUIVAMENTO DOS AUTOS. "
    $("#pedido").html(doc.pedidos);
  });

  //inclui pedido de desistência
  $("#desistencia").on("click", function(){
    doc.pedidos += "<br>A DESISTÊNCIA DO PROCESSO, com o consequente arquivamento do mesmo. "
    $("#pedido").html(doc.pedidos);
  });

  //inclui pedido de isenção de custas
  $("#isencao").on("click", function(){
    doc.pedidos += "<br>A ISENÇÃO DAS CUSTAS PROCESSUAIS, conforme documentação anexa. "
    $("#pedido").html(doc.pedidos);
  });

  //inclui pedido de liminar
  $("#liminar").on("click", function(){
    doc.pedidos += "<br>A CONCESSÃO DE MEDIDA LIMINAR, conforme documentação anexa. "
    $("#pedido").html(doc.pedidos);
  });

  //inclui pedido de prioridade processual
  $("#prioridade").on("click", function(){
    doc.pedidos += "<br>PRIORIDADE NA TRAMITAÇÃO, conforme documentação comprobatoria em anexo."
    $("#pedido").html(doc.pedidos);
  });

  //inclui pedido de prosseguimento do feito
  $("#prosseguimento").on("click", function(){
    doc.pedidos += "<br>O PROSSEGUIMENTO DO FEITO.<br>____________________________________________________________________________________________________________<br>____________________________________________________________________________________________________________ "
    $("#pedido").html(doc.pedidos);
  });





  //monta_texto
  function monta_texto(){
    var texto = doc.nome + ", " + doc.parte + " do processo em epígrafe, vem por meio desta, requerer, respeitosamente: "
    $("#teor").text(texto);
    assina();
  }

  //assinatura
  function assina(){
    $("#assinatura").html("<em>"+ doc.nome +" <br>" + doc.parte +"</em>")
  }

  //muda nome
  $("#inp_nome").change(function(){
    doc.nome = $(this).val();
    monta_texto();
  });

  //muda processo
  $("#inp_proc").change(function(){
    doc.processo = $(this).val();
    doc.processo = "Processo: " + doc.processo;
    $("#processo").text(doc.processo);
  });

  //Muda parte
  //autora
  $("#autora").on("click", function(){
    doc.parte = "PARTE AUTORA"
    monta_texto();
  });

  //ré
  $("#re").on("click", function(){
    doc.parte = "PARTE RÉ"
    monta_texto();
  });


  //funcoes auxiliares

  //imprime documento
  $("#bt_imprimir").on("click", function(){window.print()});

  //aciona dropdow
  $(".dropdown-toggle").dropdown();

  monta_texto();
});
