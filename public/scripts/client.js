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
}

$(document).ready(readyNow);