console.log('client-side source');

function readyNow () {
    console.log('hey');

    $("#startGame").on('click', gameStart)


    $.ajax({
        method: 'GET',
        url: '/',
        success: function(res){
            console.log('page load');
        }
    })

    function gameStart(){
        ourData = {
            gameMode: $(':selected').val(),
            firstPlayer: $('#Player1').val(),
            secondPlayer: $('#Player2').val(),
            thirdPlayer: $('#Player3').val(),
            fourthPlayer: $('#Player4').val()
        }

        $.ajax({
            method: 'POST',
            url: '/setup',
            data: ourData,
            success: function(res){
                console.log('New game data sent');
            }
        })
    }
}

$(document).ready(readyNow);