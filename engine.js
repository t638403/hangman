var hangman = hangman || {};
hangman.engine = function() {

    var word;
    var max_stage = 8;
    var curr_stage = 0;
    var wrong_letters = [];
    var right_letters = [];

    var api = {
        wordContains:function(letter) {
            if(!_.isArray(word)) {throw 'Please set a word first';}
            if(_.contains(word, letter) && !api.userHasUsed(letter)) {
                right_letters.push(letter);
                return true;
            } else {
                curr_stage++;
                if(!api.userHasUsed(letter)) {
                    wrong_letters.push(letter);
                }
                return false;
            }
        },
        indexesFor:function (letter) {
            var indexes = []
            _.each(word, function(l, index) {
                if(letter == l) {
                    indexes.push(index)
                }
            });
            return indexes;
        },
        userHasUsed:function(letter) {return _.contains(wrong_letters.concat(right_letters), letter);},
        word:function(w) {
            if(_.isString(w)) {
                word = w.split('');
            }
            if(!_.isArray(word)) {throw 'Please set a word first';}
            return word.join('');
        },
        stage:function(){return curr_stage;},
        lost:function() {return (curr_stage >= max_stage);},
        won:function() {
            var won = true;
            _.each(word, function(letter, i) {
                if(!_.contains(right_letters, letter)) {
                    won = false;
                }
            });
            return won;
        },
        done:function() {return (api.lost() || api.won());}
    };
    return api;
};