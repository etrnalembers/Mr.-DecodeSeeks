## ATTRIBUTIONS
cash-bowen came up with this idea first; refer to his licensing and project. Be clear that this is a fork and I will likely not stay in total sync with his variant of the script.

## WHAT IS THIS SUPPOSED TO DO?
Assessments are pretty easy to decipher when you incorporate some Node and Bookmarklet NPM libraries into an HTML block of messy JavaScript code. That's exactly what this does! It retrieves a cookie, but it usually poses the false answers at random in NIDA's secure window, so I improvised like a jackass. 

1. You'll need to open the lesson first. When you have the lesson open to its first page, shortcut either ctrl+shift+I or cmd+shift+I to open DevTools. Since they like to trick us, you'll copy all of the code from soloDecoder.js (thanks cash) and paste it into the DevTools console.
2. When you press enter, a non-isolated tab should open in your initial browser with a real content link. That's because we pulled that shit out of the ether (the source code) and found the real cookie.
3. Navigate to whatever quiz you're taking and begin. No, this doesn't complete experiments, because Arduino hardcoding is the worst.
4. From the install.html script you can drag up to your bookmarks bar, the bookmarklet will work as intended. Just execute the code wrapped in 'Open Your Mind' while that window is open, and your answers should appear like a singular string. Remember them, but you can execute it as many times as you'd like.
5. When you score that easy 100%, exit the test in your browser first. Afterwards, close the original window that popped up when you clicked on the lesson link. That should close the DevTools instance and treat the saving protocol like you never left the child window. Congratulations! Your moral esteem shrinks and your ego grows.

## FUTURE IMPLEMENTATIONS
v1.1 - Mr. DecodeSeeks will interact with the debugger tool automatically. Unlike cash, I plan on packing this bookmarklet extensively with lovely subfunctions instead of isolating Python (unless he actually automates it the same way)!
v1.2 - Mr. DecodeSeeks will be given new fashion and some UI tricks.
v1.3 - Mr. DecodeSeeks will be capable of pulling answer source information to be presented like a formal answer key; as some of us enjoy reflecting on how we did rather than just brute-forcing exams.
