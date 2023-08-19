$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").on("click", function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoImagenNova = $("#endereco-imagen-nova").val();
    const novoItem = $(`<li style="display:none"></li>`);
    $(`<img src="${enderecoImagenNova}">`).appendTo(novoItem);
    $(`<div class="overlay-imagen">
    <a href="${enderecoImagenNova}" target="_blank">Ver Imagen</a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $("#endereco-imagen-nova").val("");
  });
});
