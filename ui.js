var hangman = hangman || {};
hangman.ui = function(galgje){

    var $image = $('#image');
    var $word = $('#word');
    var $message = $('#message');

    var api = {
        init:function () {
            _.each(galgje.word(), function(letter, index) {
                $word.append($('<div class="letter" id="letter-'+index+'"/>'));
            });

            $(document).keypress(function(e) {
                var letter = String.fromCharCode(e.charCode);
                var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                $message.html('');
                if(!_.contains(alphabet, letter)) {
                    $message.html('Only alphabetic characters are allowed');
                }
                if(!galgje.done() && _.contains(alphabet, letter)) {
                    if(galgje.wordContains(letter)) {
                        _.each(galgje.indexesFor(letter), function(index) {
                            $word.find('#letter-' + index).html(letter);
                        });
                    } else {
                        var stage = galgje.stage();
                        var prev_stage = stage - 1;
                        $image.removeClass('stage-' + prev_stage);
                        $image.addClass('stage-' + stage);
                    }
                }
                if(galgje.won()) {
                    $message.html('Congratulations!')
                }
                if(galgje.lost()) {
                    $message.html('Haha Looser! <br/>Press F5 to restart.')
                }
            });
        }
    }
    return api;
}