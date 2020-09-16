// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

// creo quadrati con for
$(document).ready(function(){
  for (var i = 0; i < 36; i++) {
          $('.container').append('<div class="square"></div>');
      }
});

// funzione click
$(".square").click(function() {
        $(this).addClass("selected");

        }
   // copiato e incollato chimata ajax
   // $.ajax(
   // {
   // url: "http://www.boolean.careers/api/random/boolean",
   // method: "GET",
   // success: function (data, stato) {
   // $("#risultati").html(data);
   // },
   // error: function (richiesta, stato, errori) {
   // alert("E' avvenuto un errore. " + errore);
   // }
   // }
   // );
