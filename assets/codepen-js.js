hljs.initHighlightingOnLoad();

$(function () { 
  $('.menu a').click(function () {
    //ativar ou desativar as blocos de conteúdo
    $('.blocos').hide();
    $('#bloco' + $(this).attr('target')).show();
    
    // manter itens do menu ativos ou não
    if (!$(this).hasClass('ativo')) {
      $('.ativo').not($(this)).removeClass('ativo');
      if (!$(this).hasClass("titulo")) {
        $(this).toggleClass('ativo');
      }
    }
  });
});