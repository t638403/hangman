hangman
=======

A simple javascript implementation of hangman and a UI for playing in the browser.

dependencies
============

Both the engine and the UI depend on underscore.js 1.7.0. The UI also depends on jQuery 1.11.0

usage
=====

Add dependencies to HTML file and add following divs to body of HTML doc.
```html
<div id="image" class="stage-0"></div>
<div id="word"></div>
<div id="message"></div>

```


Create engine and set a word to guess. Create UI and submit engine to it.

```javascript
$(document).ready(function(){
            var words = ['Lorem','ipsum','dolor','sit','amet,','consectetur','adipiscing','elit'];

            var engine = hangman.engine();
            engine.word(words[_.random(0,words.length)]);

            var ui = hangman.ui(engine);
            ui.init();
        });
```
