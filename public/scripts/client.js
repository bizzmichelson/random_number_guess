console.log('client-side source');

function readyNow () {
    console.log('hey');
    $.ajax({
        method: 'GET',
        url: '/',
        success: function(res){
            console.log('page load');
        }
    })
}

$(document).ready(readyNow);