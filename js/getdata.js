

//obsługa przycisku

$('button').click(function(){
    //pobranie danych
    $.ajax({
        url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        dataType: 'json'
        
    }).done(function(data){
        $('body').append('<div id="dane-programisty">');
        let divContainer = $('#dane-programisty');
        divContainer.text('Imię: '+data.imie+', Nazwisko: '+ data.nazwisko+ ', Zawód: ' +data.zawod+ ', Firma: ' +data.firma ); 
    });
});


