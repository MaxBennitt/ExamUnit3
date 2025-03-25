First commit: Uploading files.

Second commit: Starting of the same way as the escape earth assignment, and got the first challenge.
"Start game: {
  message: 'Finaly some suport!',
  challenge: 'Friend, we are close, I can taste success on the wind, we finally located Paracelsus lab, we will become rich beyond belief, we will rule. All that is needed is cracking the access code, I have been looking at this for days and beyond the inkling that it is an alchemical formula I have no idea. Can you give it a shoot and get us one step closer to the future that we deserve? This is the code “☉☿☽♂☉”, but what it encodes into is a mysteri. Pleace crack it.'
}"

Third commit: Tried getting a hint from the website but I got a SyntaxError instead: 'Unexpected token '<', "<!DOCTYPE "... is not valid JSON'

Fourth commit: I searched up old alchemy signs on google and found some matching symbols on wikipedia https://en.wikipedia.org/wiki/Alchemical_symbol
I tried answering "Gold, Quicksilver, Silver, Iron, Gold" However I got incorrect answer. I got it working by removing the spaces between words...
And received the next challenge:
  nextChallenge: 'Your work was examplary, unfortunatlyt it turnes out we where not as close as first belived. The code only gave us access to a note with a poem, the evil bastard had dusted it with Berulium powder so several of our alcylots are nolonger among us. We must be more carefull in the future. Anyways the poem read “Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.”, can you make anything of it?'

Fifth commit: After analyzing the poem I saw that the capital letters spell out "SILVER", so I made a regex to sort out all the capital letters and then used .join('') to combine the letters into the hidden code "SILVER". I also made the answer from the first task into a comment since I only need to answer the challenges once. Then I got the next challenge:
  nextChallenge: 'Damn it! The poem was just another step. I refuse to believe Paracelsus would leave us with nothing. There’s something in these words, some ancient wisdom we are failing to grasp. When we pored silver in to the next lock, we found another note, it is referencing an old alchemical codex hidden deep in the Bibliotheca Philosophica Hermetica. The archive is online now, but because most of our aclolyotes are down for the count we need your help. We know the book in question is “Chirurgische Bücher und Schrifften” it is reported to be written in 1618, but we belive it is older considering that our latest note from the past is older. This is a transcript of the note.\n' +
    '\n' +
    '\n' +
    '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 '