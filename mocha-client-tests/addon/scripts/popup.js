    setInterval(function() {
        var $game = document.querySelector('#game');
        if($game.innerText !== 'ping'){
            $game.innerText = 'ping';
        } else{
            chrome.runtime.sendMessage({action: 'ping'},function(response) {
                $game.innerText = response;
            });
        }
    }, 1000);
