# First commit:
Uploading files.

# Second commit:
Starting of the same way as the escape earth assignment, and got the first challenge.

# Third commit:
Tried getting a hint from the website but I got a SyntaxError instead: 'Unexpected token '<', "<!DOCTYPE "... is not valid JSON'

# Fourth commit: I searched up old alchemy signs on google and found some matching symbols on wikipedia "https://en.wikipedia.org/wiki/Alchemical_symbol".
I tried answering "Gold, Quicksilver, Silver, Iron, Gold" However I got incorrect answer. I got it working by removing the spaces between words...
And received the next challenge:

# Fifth commit:
After analyzing the poem I saw that the capital letters spell out "SILVER", so I made a regex to sort out all the capital letters and then used .join('') to combine the letters into the hidden code "SILVER". I also made the answer from the first task into a comment since I only need to answer the challenges once. Then I got the next challenge:

# Sixth commit:
First off I started with searching up the book from the challenge “Chirurgische Bücher und Schrifften” on google, where I looked at the front page and found the correlation between the numbers and letters, "https://www.digitale-sammlungen.de/en/view/bsb10321483?page=6,7". The numbers are based on when the letters appear in the book. For example the first word is "EFFIGIES" meaning E = 1, F = 2, I = 4. When assembling the text we get "TO  OPTAIN  ACCESS  TO  THE  NEXT  VAULT,  INPUT  THE  FORMULA  FOR  THE  THE  FOURTH  ELEMENT;  COMBINE  MERCURY,  COPPER  AND  SULFUR  OVER  HEAT,  ADD  SALT  AND  WATER,  INFUSE  GOLD  THROUGH  AIR" Looking at the text the four elements should refer to Earth, Water, Air, Fire. First I checked to see if the answer is simply the Fire symbol but I got incorrect answer. After that I tried submitting the symbols for mercury, copper, sulfur, salt, water, gold, air. Which was incorrect, I also tried out putting in the fire symbol for heat after sulfur which also turned out to be the right solution. For the symbols I'm still using the same wikipedia page as earlier "https://en.wikipedia.org/wiki/Alchemical_symbol". After submitting I received the next challenge:

# Seventh commit:
First I just want to mention "elixirs, said to restore itality" a funny spelling mistake unless the elixir actually make you more Italian haha. After a lot of thinking I've tried to sort out all of the capital letters, a solution I've done in an earlier challenge, and got the result: "HOPSUMDTLKWIBCNYERGJQXVZFA". However I struggled to find the connection with the capital letters and the encoded words in the next part, perhaps with more time I could've solve it? (reminder that challenge 1 & 2 answers have been changed to text because the challenges only need to be completed once.)

# Challenge 1
"Start game: {
  message: 'Finaly some suport!',
  challenge: 'Friend, we are close, I can taste success on the wind, we finally located Paracelsus lab, we will become rich beyond belief, we will rule. All that is needed is cracking the access code, I have been looking at this for days and beyond the inkling that it is an alchemical formula I have no idea. Can you give it a shoot and get us one step closer to the future that we deserve? This is the code “☉☿☽♂☉”, but what it encodes into is a mysteri. Pleace crack it.'
}"

# Challenge 2
  nextChallenge: 'Your work was examplary, unfortunatlyt it turnes out we where not as close as first belived. The code only gave us access to a note with a poem, the evil bastard had dusted it with Berulium powder so several of our alcylots are nolonger among us. We must be more carefull in the future. Anyways the poem read “Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.”, can you make anything of it?'

# Challenge 3

  nextChallenge: 'Damn it! The poem was just another step. I refuse to believe Paracelsus would leave us with nothing. There’s something in these words, some ancient wisdom we are failing to grasp. When we pored silver in to the next lock, we found another note, it is referencing an old alchemical codex hidden deep in the Bibliotheca Philosophica Hermetica. The archive is online now, but because most of our aclolyotes are down for the count we need your help. We know the book in question is “Chirurgische Bücher und Schrifften” it is reported to be written in 1618, but we belive it is older considering that our latest note from the past is older. This is a transcript of the note.\n' +
    '\n' +
    '\n' +
    '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 '

# Challenge 4
  nextChallenge: 'through Hidden experiments, the Observing Philosophers \n' +
    'carefully recorded their findings in secret tomes. \n' +
    'rarely did alchemists Seek answers in mundane texts, \n' +
    'for the Universal substance eluded ordinary understanding.\n' +
    '\n' +
    'beyond the limits of ordinary Methods, the most Dedicated scholars \n' +
    'turned to alchemical science, where hidden truths awaited discovery. \n' +
    'Truly, the masters of old knew that one must strive tirelessly, \n' +
    'purifying Lead into something greater, refining both mind and matter. \n' +
    'until mastery was achieved, Knowledge alone was insufficient, \n' +
    'and only those who understood the deeper mysteries Would glimpse Immortality.\n' +
    '\n' +
    'secrets, carefully veiled Behind Cryptic inscriptions, \n' +
    'teach those with patience to decode their deeper meaning. \n' +
    'hermetic ideals demand perseverance, a willingness to question, \n' +
    'and an acceptance that the path to wisdom is rarely direct. \n' +
    'long nights spent in study and contemplation lead to illumination, \n' +
    'and oaths taken by true seekers bind them to their Noble quest. \n' +
    'Yet the philosopher’s stone remains Elusive, \n' +
    'and only through great sacrifice is the truth Revealed.\n' +
    '\n' +
    'elixirs, said to restore itality and even grant eternal youth, \n' +
    'were concocted by those who dared to challenge nature’s limits. \n' +
    'distillations, performed under the guidance of celestial alignments, \n' +
    'promised insight beyond mortal comprehension. \n' +
    'Gold, though treasured by the common man, held greater meaning \n' +
    'to those who understood the principle of transmutation. \n' +
    'Joining knowledge of the material and the divine, \n' +
    'true alchemists saw wealth not in metal, but in enlightenment.\n' +
    '\n' +
    'notable are those who pursued the Quintessence, \n' +
    'a substance believed to bind together the four classical elements. \n' +
    'wielders of this hidden force were said to shape reality itself, \n' +
    'while Xenon and other elusive Vapors symbolized the mysteries of the aether. \n' +
    'yields of failed experiments were many, \n' +
    'but each failure brought the dedicated scholar closer to true wisdom. \n' +
    'Zeal alone was not enough—patience, discipline, and intellect \n' +
    'were the true keys to unlocking the universe’s greatest secret.\n' +
    '\n' +
    'through the Forgotten knowledge of Ancient scholars, \n' +
    'keepers of wisdom have safeguarded the elusive \n' +
    'keys to transformation. only those who \n' +
    'fully commit to the pursuit of enlightenment \n' +
    'can grasp the final mysteries.\n' +
    '\n' +
    'DNIS PNYYUR DNIS DNIS GLIXUR \n' +
    'UHRJT BURPQRF PNYYUR MLRU HLR \n' +
    'MLRU UHRJT IUHS UHRJT GLIXUR\n' +
    'LRNC DNIS GLIXUR VHJUR DNIS\n' +
    'PNYYUR MLRU DNIS LRNC IUHS\n' +
    'UHRJT PNYYUR PNYYUR JLC BURPQRF\n' +
    '\n' +
    "Now that your quest vaines, combine the horizontal and vertical indicies and know Paracelsus 'Aqua Vitae', the cemical element that opens gates.\n" +
    '\n' +
    '☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿\n' +
    '🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃\n' +
    '🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉\n' +
    '🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂\n' +
    '☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉\n' +
    '☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽\n' +
    '☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃\n' +
    '☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄\n' +
    '🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃\n' +
    '☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁\n' +
    '🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄\n' +
    '🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿\n' +
    '🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃\n' +
    '♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀\n' +
    '🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃\n' +
    '♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀\n' +
    '🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿\n' +
    '♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉\n' +
    '🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉\n' +
    '♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄\n' +
    '🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄\n' +
    '☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿\n' +
    '🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃\n' +
    '♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿\n' +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n' +
    '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉\n' +
    '🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂\n' +
    '🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉\n' +
    '☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀\n' +
    '☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂'