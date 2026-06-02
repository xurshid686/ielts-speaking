/* =====================================================================
   IELTS SPEAKING — QUESTION BANK
   ---------------------------------------------------------------------
   HOW TO ADD / REMOVE A DAY:
   Each day is one object in the SPEAKING_DATA array below.
   Just copy an existing { ... } block, change the numbers/text, and
   save. To remove a day, delete its whole { ... } block.

   SHAPE OF ONE DAY:
   {
     day: 1,
     topic: "Short topic name",
     part1: {
       title: "Part 1: Topic",
       questions: [
         {
           q:      "The question text",
           sample: "A model answer (band 8-9 style).",
           ideas:  ["idea 1", "idea 2"],          // optional
           grammar:"A grammar tip / useful structure",// optional
           vocab:  ["word — meaning", "phrase"]    // optional
         }
       ]
     },
     part2: {                                       // optional
       title: "Part 2: Describe ...",
       cue:    ["You should say...", "...", "..."],
       sample: "A model long-turn answer.",
       ideas:  ["..."],
       grammar:"...",
       vocab:  ["..."]
     }
   }

   NOTE ON PART 1 ANSWERS:
   Part 1 answers are written to sound natural and spoken, with a direct
   answer plus a reason or example (the "answer + extend" technique) —
   long enough to show range, but not a mini-speech.
   ===================================================================== */

const SPEAKING_DATA = [
  /* ---------------------------------------------------------------- DAY 1 */
  {
    day: 1,
    topic: "Home & Hometown",
    part1: {
      title: "Part 1: Home and Hometown",
      questions: [
        {
          q: "Can you describe your hometown?",
          sample: "Sure. I'm originally from Samarkand, which is one of the oldest cities in Central Asia. It's especially famous for its stunning Islamic architecture, like the Registan Square, so we get a lot of tourists. It's not a huge city, so it has a fairly relaxed, friendly atmosphere, and honestly that's the thing I love most about it.",
          ideas: ["Where it is + how big it is", "What it's famous for", "The atmosphere / what you like about it"],
          grammar: "Use 'which' to add extra detail: '...Samarkand, which is one of the oldest cities...'",
          vocab: ["stunning — extremely beautiful", "relaxed atmosphere", "renowned for / famous for"]
        },
        {
          q: "What is your favorite part of your home?",
          sample: "Without a doubt, it's the living room. It gets a lot of natural light during the day, which makes it feel really warm and welcoming. On top of that, it's where my whole family gathers in the evenings to chat and watch films, so it's full of nice memories for me.",
          ideas: ["Name the room", "Why — light, comfort, memories", "What you do there"],
          grammar: "Reason linking: 'It's where my family gathers, so it feels cosy.'",
          vocab: ["cosy — warm and comfortable", "natural light", "gather — come together"]
        },
        {
          q: "Which room in your house do you like the most?",
          sample: "I'd have to say my bedroom, mainly because it's my own personal space. I've decorated it exactly the way I like, with lots of books and a few posters, so it really feels like me. It's the one place where I can completely switch off and relax after a long day.",
          ideas: ["Personal space", "How it's decorated", "How it makes you feel"],
          grammar: "Adding emphasis: 'I'd have to say...' softens and emphasises your choice.",
          vocab: ["unwind — relax", "personal space", "switch off"]
        },
        {
          q: "Is there anything you want to change about your home?",
          sample: "If I could change one thing, I'd love to have a bigger kitchen. The one we have now is quite small, so it gets a bit crowded whenever a few of us are cooking at the same time. A more spacious kitchen would honestly make family dinners a lot more enjoyable.",
          ideas: ["Pick one realistic thing", "Explain the problem", "How the change would help"],
          grammar: "Second conditional: 'If I could change one thing, I'd love to...'",
          vocab: ["crowded — too many people in a space", "spacious — having lots of room"]
        },
        {
          q: "What kind of home would you like in the future?",
          sample: "In the future, I'd ideally like to live in a spacious house with a garden, somewhere a bit quieter on the outskirts of the city. I think having some green space around me would be perfect for relaxing at the weekends. That said, I wouldn't want to be too far from the centre, so somewhere with a good balance would be ideal.",
          ideas: ["Type of home (house/flat)", "Location (city/quiet/suburbs)", "One special feature"],
          grammar: "Future wishes with 'would like to' + 'ideally': 'I'd ideally like to live in...'",
          vocab: ["spacious", "on the outskirts — at the edge of a city", "green space"]
        }
      ]
    }
  },

  /* ---------------------------------------------------------------- DAY 2 */
  {
    day: 2,
    topic: "Describe a Person You Like",
    part2: {
      title: "Part 2: Describe a Person You Like",
      cue: ["Who the person is", "Why you like them", "What they do that you find nice"],
      sample: "I'd like to talk about my older sister, Nigora, who is probably the person I admire the most. She's about ten years older than me, and she works as a nurse at a local hospital.\n\nThe main reason I like her so much is her kindness — she's incredibly patient and always puts other people first. Ever since I was little, she's been the one I go to whenever I have a problem, and she never makes me feel silly for asking.\n\nWhat I find especially nice is the little things she does. For example, she remembers everyone's birthday and always makes time to call, even when she's exhausted after a long shift. I think that thoughtfulness is quite rare, and it's something I really try to copy in my own life.",
      ideas: ["Who they are + your relationship", "A key quality (kind, funny, hard-working)", "A specific example of something nice they do"],
      grammar: "Use 'Ever since...' for long actions: 'Ever since I was little, she's been the one I go to.'",
      vocab: ["admire — respect deeply", "thoughtful — caring about others", "put others first", "go to (someone) — ask for help"]
    }
  },

  /* ---------------------------------------------------------------- DAY 3 */
  {
    day: 3,
    topic: "Personal Information",
    part1: {
      title: "Part 1: Personal Information",
      questions: [
        {
          q: "What is your full name?",
          sample: "My full name is Xurshid Aliqulov. Xurshid is my first name and Aliqulov is my family name. Most of my friends just call me Xurshid, though.",
          ideas: ["Just state it clearly", "You can add first/family name"],
          grammar: "Simple present for facts: 'My full name is...'",
          vocab: ["first name", "family name / surname"]
        },
        {
          q: "Who picked your name?",
          sample: "I was told that my grandfather chose my name, actually. Apparently it means 'the sun' or 'sunlight', and he liked the idea that I would bring a bit of brightness to the family. I think it's quite a meaningful name, so I'm happy with his choice.",
          ideas: ["Who chose it", "What it means", "Why they chose it"],
          grammar: "Reported speech: 'I was told that...', 'Apparently...'",
          vocab: ["named after — given the same name as", "meaning", "apparently"]
        },
        {
          q: "Where are you from?",
          sample: "I'm from Uzbekistan, which is a country in Central Asia. More specifically, I grew up in Samarkand, in the eastern part of the country, although I'm currently living in the capital for my studies.",
          ideas: ["Country first", "Then the city/region"],
          grammar: "Zooming in: 'I'm from... More specifically, I grew up in...'",
          vocab: ["originally from", "grew up in"]
        },
        {
          q: "Do you work or study?",
          sample: "At the moment I'm a student. I'm mainly preparing for the IELTS exam, and alongside that I'm studying at university, so most of my days are pretty busy, to be honest.",
          ideas: ["Say which one", "Add a bit of detail", "How busy you are"],
          grammar: "Present continuous for current situation: 'I'm preparing for... I'm studying...'",
          vocab: ["alongside — at the same time as", "preparing for"]
        },
        {
          q: "Do you like your job/studies?",
          sample: "Yes, I genuinely enjoy my studies. It can be quite challenging at times, especially around exam season, but I find it really rewarding because I can actually see myself improving from week to week. That sense of progress keeps me motivated.",
          ideas: ["Yes/No + why", "One challenge", "One thing you enjoy"],
          grammar: "Contrast with 'although/but': 'It can be challenging, but I find it rewarding.'",
          vocab: ["rewarding — giving satisfaction", "challenging — difficult in a good way"]
        }
      ]
    }
  },

  /* ---------------------------------------------------------------- DAY 4 */
  {
    day: 4,
    topic: "A Fun Childhood Memory",
    part2: {
      title: "Part 2: Describe a Fun Memory from Childhood",
      cue: ["When and where it happened", "What made it fun", "Why you remember it"],
      sample: "One childhood memory that always makes me smile happened when I was around eight years old, during a summer holiday at my grandparents' house in the countryside.\n\nOne afternoon, my cousins and I decided to build a little dam in the small stream behind the house. We spent hours carrying stones and mud, completely covered in dirt, and we were absolutely thrilled when the water finally started to pool up behind it.\n\nWhat made it so fun was the sense of teamwork and freedom — there were no adults telling us what to do, and we were just using our imagination. I remember it so clearly because it was one of those rare, carefree days where I lost all track of time. Even now, whenever I smell wet earth after rain, that whole afternoon comes flooding back.",
      ideas: ["Set the scene (age, place, season)", "The activity itself", "The feeling + why it stuck with you"],
      grammar: "Past continuous + past simple: 'We were carrying stones when the water started to pool.'",
      vocab: ["thrilled — very excited", "carefree — without worries", "lose track of time", "comes flooding back — suddenly remembered"]
    }
  },

  /* ---------------------------------------------------------------- DAY 5 */
  {
    day: 5,
    topic: "Work or Studies",
    part1: {
      title: "Part 1: Work or Studies",
      questions: [
        {
          q: "What is your job / what do you study?",
          sample: "I'm currently a university student, and I'm majoring in economics. On top of my degree, I'm also working really hard on improving my English for the IELTS exam, so I've got quite a lot on my plate at the moment.",
          ideas: ["Subject or job title", "A bit of extra context"],
          grammar: "'major in' for your main subject: 'I'm majoring in economics.'",
          vocab: ["major in — study as your main subject", "degree", "a lot on my plate — very busy"]
        },
        {
          q: "How long have you been doing it / studying it?",
          sample: "I've been studying economics for nearly two years now. Honestly, time has flown by — it really doesn't feel that long at all. I think that's a good sign, because it means I'm genuinely enjoying it.",
          ideas: ["Give the length of time", "A quick comment on how it feels"],
          grammar: "Present perfect continuous: 'I've been studying... for two years.'",
          vocab: ["time has flown by — passed quickly"]
        },
        {
          q: "Why did you choose this job / field of study?",
          sample: "I chose economics mainly because I've always been curious about how money and markets shape the world around us. I also felt it was a fairly practical choice, since it would open up a wide range of career options for me later on.",
          ideas: ["Personal interest", "Career prospects"],
          grammar: "Reason + result: 'I chose it because... I also felt it would...'",
          vocab: ["career prospects", "open up options", "curious about"]
        },
        {
          q: "What do you like about your job / studies?",
          sample: "What I enjoy most is that it's very practical. I can relate what I learn in lectures to real events in the news, which makes the whole subject come alive for me. It never feels like I'm just memorising theory for the sake of it.",
          ideas: ["One specific thing you like", "Why it matters to you"],
          grammar: "'What I enjoy most is...' to highlight a point.",
          vocab: ["practical", "come alive", "relate to — connect with"]
        },
        {
          q: "Can you describe a typical day at work / school?",
          sample: "Sure. A typical day usually starts with morning lectures, then I head to the library to go over my notes while everything's still fresh. In the afternoon I often switch to studying English, and I try to keep my evenings free so I can relax with my family.",
          ideas: ["Morning routine", "Afternoon", "Evening"],
          grammar: "Sequencing words: 'starts with... then... after that... finally.'",
          vocab: ["head to — go to", "go over — review", "keep free"]
        }
      ]
    }
  },

  /* ---------------------------------------------------------------- DAY 6 */
  {
    day: 6,
    topic: "A Place You'd Love to See",
    part2: {
      title: "Part 2: Describe a Place You'd Love to See",
      cue: ["Where it is", "Why you'd like to go there", "What you imagine it's like"],
      sample: "A place I've always dreamed of visiting is Japan, and Kyoto in particular.\n\nIt's a city in the central part of Japan, and it used to be the old capital, so it's absolutely packed with history. The main reason I'd love to go is that it seems to combine two very different worlds — ancient temples and traditional gardens on one side, and a modern, high-tech culture on the other.\n\nI imagine it would be incredibly peaceful walking through the temple districts in the early morning, especially during cherry-blossom season when everything turns pink. I'd also love to try authentic Japanese food and experience how respectful and organised the culture is said to be. Honestly, it's right at the top of my travel wish-list.",
      ideas: ["Location + a key fact", "Why it attracts you", "What you picture / hope to do there"],
      grammar: "'used to' for the past: 'It used to be the old capital.'",
      vocab: ["packed with history", "wish-list", "authentic — genuine, traditional", "cherry-blossom season"]
    }
  },

  /* ---------------------------------------------------------------- DAY 7 */
  {
    day: 7,
    topic: "Accommodation",
    part1: {
      title: "Part 1: Accommodation",
      questions: [
        {
          q: "Where do you live?",
          sample: "I live in Tashkent, the capital of Uzbekistan. My family and I have a place in a fairly central neighbourhood, so most things — shops, the metro, parks — are within easy reach. It's quite a convenient spot, really.",
          ideas: ["City + area", "Who you live with", "Convenience"],
          grammar: "'within easy reach' = close and convenient.",
          vocab: ["neighbourhood", "central", "within easy reach"]
        },
        {
          q: "Do you live in a house or an apartment?",
          sample: "We live in an apartment on the fifth floor. It's a comfortable size for our family, and I quite like being up high because we get a really nice view over the city. The only small downside is that the lift breaks down now and then.",
          ideas: ["House or flat", "Size / floor", "One thing you like"],
          grammar: "'I quite like... because...' to give a reason.",
          vocab: ["apartment / flat", "spacious", "view over"]
        },
        {
          q: "What do you like about your home?",
          sample: "The thing I appreciate most is how light and airy it is. We've got big windows that let in a lot of sunshine, which makes the whole place feel warm and welcoming. After a long day, coming home to that always lifts my mood.",
          ideas: ["A feature you love", "Why it matters"],
          grammar: "'The thing I appreciate most is...' for emphasis.",
          vocab: ["light and airy", "welcoming", "let in"]
        },
        {
          q: "Would you like to change anything about your home?",
          sample: "If I had the chance, I'd probably add a small balcony. It would be lovely to have somewhere to sit outside in the evenings and enjoy a cup of tea in the fresh air. Other than that, though, I'm pretty happy with our place as it is.",
          ideas: ["One change", "Why it would help"],
          grammar: "Second conditional: 'If I had the chance, I'd add...'",
          vocab: ["balcony", "fresh air"]
        },
        {
          q: "How is the transportation in your area?",
          sample: "Transport here is actually really convenient. There are buses and a metro line nearby, so I can get across the city without too much hassle. It's quite affordable too, which is a big plus for a student like me.",
          ideas: ["Types available", "How convenient", "Cost"],
          grammar: "'without too much hassle' = easily, with no trouble.",
          vocab: ["convenient", "affordable", "hassle — difficulty / trouble"]
        }
      ]
    }
  },

  /* ---------------------------------------------------------------- DAY 8 */
  {
    day: 8,
    topic: "A Movie or Show You Enjoy",
    part2: {
      title: "Part 2: Talk About a Movie or Show You Enjoy",
      cue: ["The name of it", "What happens in it", "Why you enjoy watching it"],
      sample: "One show I really enjoy is a series called 'The Mandalorian', which is part of the Star Wars universe.\n\nThe story follows a lone bounty hunter who is hired to track down a mysterious child, but instead of handing the child over, he decides to protect him. From that point on, the two of them travel across the galaxy, getting into all sorts of dangerous situations.\n\nThe main reason I love it is the relationship between the two characters — it's surprisingly touching for an action show. The visuals are also stunning, and each episode feels like a mini-movie. I tend to watch it to relax in the evenings, and it's one of those shows I can easily get lost in for hours.",
      ideas: ["Title + genre", "Brief plot (don't spoil!)", "Why you connect with it"],
      grammar: "Present simple to describe a plot: 'The story follows a hunter who is hired to...'",
      vocab: ["touching — emotionally moving", "stunning visuals", "get lost in — become absorbed"]
    }
  },

  /* ---------------------------------------------------------------- DAY 9 */
  {
    day: 9,
    topic: "Hobbies and Interests",
    part1: {
      title: "Part 1: Hobbies and Interests",
      questions: [
        {
          q: "What do you like to do in your free time?",
          sample: "In my free time I'm quite into reading and going for long walks. Both of them help me clear my head, especially after a busy week of studying. If I've got a bit more time, I'll also catch up with friends over a coffee.",
          ideas: ["One or two hobbies", "Why you do them"],
          grammar: "'I'm quite into...' = I really like (informal, natural).",
          vocab: ["clear my head — relax mentally", "be into — be keen on"]
        },
        {
          q: "How did you become interested in a hobby?",
          sample: "I first got into reading because of my mother, actually. She always had a book in her hand when I was growing up, and I think her enthusiasm just rubbed off on me over time. By my teens, I was reading on my own almost every day.",
          ideas: ["How it started", "Who/what influenced you"],
          grammar: "'rubbed off on me' = I picked up the habit from someone.",
          vocab: ["get into — start enjoying", "rub off on — influence"]
        },
        {
          q: "Is there any hobby you'd like to learn in the future?",
          sample: "I'd really love to learn how to play the guitar one day. I've always admired people who can just pick up an instrument and play a tune, so it's definitely on my list. I think it would be a great way to relax and express myself.",
          ideas: ["A new hobby", "Why it appeals to you"],
          grammar: "'I'd love to learn...' for future wishes.",
          vocab: ["pick up an instrument", "on my list"]
        },
        {
          q: "Why is a hobby important to you?",
          sample: "For me, hobbies are important because they give me a sense of balance. Without something fun to switch off with, life would feel like nothing but work and study, which would burn me out pretty quickly. So I see my hobbies as a kind of mental reset.",
          ideas: ["Balance / stress relief", "Personal growth"],
          grammar: "'Without ..., life would...' for hypothetical contrast.",
          vocab: ["sense of balance", "switch off — stop thinking about work", "burn out"]
        },
        {
          q: "Do you prefer indoor or outdoor activities?",
          sample: "It really depends on my mood, but if I had to choose, I'd lean towards outdoor activities. Being out in the fresh air just makes me feel more energetic and alive. That said, on a cold or rainy day, I'm more than happy to stay in with a good book.",
          ideas: ["Pick one (or 'it depends')", "Reason"],
          grammar: "'I'd lean towards...' = I slightly prefer.",
          vocab: ["lean towards", "energetic"]
        }
      ]
    }
  },

  /* ---------------------------------------------------------------- DAY 10 */
  {
    day: 10,
    topic: "A Hobby You Have",
    part2: {
      title: "Part 2: Discuss a Hobby You Have",
      cue: ["What the hobby is", "How you got into it", "Why you like it"],
      sample: "A hobby I'm genuinely passionate about is reading, particularly fiction and history books.\n\nI got into it as a child thanks to my mother, who used to read me bedtime stories every single night. Over time, those stories sparked my imagination, and by my teens I was reading a couple of books a month entirely on my own.\n\nThe reason I love it so much is that reading lets me escape into completely different worlds without ever leaving my room. It's relaxing, but at the same time I'm constantly learning new ideas and vocabulary. In fact, I think reading is one of the main reasons my English has improved, so it's a hobby that's both enjoyable and genuinely useful.",
      ideas: ["Name the hobby clearly", "The origin story", "The benefits / why you love it"],
      grammar: "'used to' for past habits: 'My mother used to read me stories.'",
      vocab: ["passionate about", "spark my imagination", "escape into"]
    }
  },

  /* ---------------------------------------------------------------- DAY 11 */
  {
    day: 11,
    topic: "Daily Routine & A Book",
    part1: {
      title: "Part 1: Daily Routine",
      questions: [
        { q: "What is your daily routine like?", sample: "My days are fairly structured, to be honest. I usually start early and study in the morning when my mind is at its freshest, then I deal with smaller tasks in the afternoon. I like keeping the evenings free so I can actually relax and recharge.", ideas: ["Morning / afternoon / evening", "How structured it is"], grammar: "'when my mind is at its freshest' — superlative for emphasis.", vocab: ["structured", "freshest", "recharge"] },
        { q: "What time do you usually get up?", sample: "I'm naturally an early riser, so I'm normally up by around six. I find I get a lot more done when I start the day early, and it gives me some quiet time before everything gets busy. On weekends, though, I do allow myself a bit of a lie-in.", ideas: ["The time", "Why / how it helps"], grammar: "Contrast with 'though': 'On weekends, though, I have a lie-in.'", vocab: ["early riser", "get done", "have a lie-in — sleep late"] },
        { q: "What do you typically do in the evenings?", sample: "Evenings are my downtime, really. I usually have dinner with my family first, and then I'll either read or watch something light to unwind before bed. I try to stay off my phone late at night because it tends to keep me awake.", ideas: ["Relaxing activities", "Family time"], grammar: "'either ... or ...' for options.", vocab: ["downtime", "unwind", "stay off"] },
        { q: "Is there anything you would like to change in your daily routine?", sample: "Yes, I'd really love to fit in some regular exercise. At the moment my schedule is so packed that I keep putting it off, which I know isn't great. Ideally, I'd like to make it a proper daily habit rather than something I do now and then.", ideas: ["One change", "Why it's hard now"], grammar: "'keep + -ing' for repeated actions: 'I keep putting it off.'", vocab: ["fit in", "put off — postpone", "packed schedule"] },
        { q: "How do you usually spend your weekends?", sample: "My weekends are much more relaxed than my weekdays. I usually catch up on sleep, meet up with friends, and try to spend some quality time with my family. If the weather's nice, we'll often go out somewhere together, which is always a good way to unwind.", ideas: ["Rest", "Social time"], grammar: "'If the weather's nice, we'll...' — first conditional.", vocab: ["catch up on sleep", "quality time", "meet up with"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Book You've Read",
      cue: ["Name of the book", "What it's about", "Why you liked it or not", "Your favourite character"],
      sample: "I'd like to talk about a book called 'The Alchemist' by Paulo Coelho, which I read a couple of years ago.\n\nIt tells the story of a young shepherd named Santiago who travels from Spain all the way to Egypt in search of treasure. Along the way, he meets all kinds of people and slowly learns that the real treasure is the wisdom he gains on the journey itself.\n\nI loved it because the message is so uplifting — it basically encourages you to follow your dreams and not give up. My favourite character is definitely Santiago, because he's brave enough to leave everything familiar behind and chase something uncertain. It's a short, simple book, but it really stayed with me.",
      ideas: ["Title + author", "Plot in 2-3 sentences", "Why it affected you", "A character + reason"],
      vocab: ["uplifting — making you feel hopeful", "stayed with me", "in search of"]
    }
  },

  /* ---------------------------------------------------------------- DAY 12 */
  {
    day: 12,
    topic: "Food & A Recent Trip",
    part1: {
      title: "Part 1: Food and Cooking",
      questions: [
        { q: "What is your favorite type of food?", sample: "I'm a big fan of traditional Uzbek food, especially plov. It's a rich rice dish cooked with meat, carrots and spices, and it's an absolute classic here. We usually have it at family gatherings, so for me it's not just tasty — it's tied to a lot of good memories.", ideas: ["The cuisine/dish", "What's in it", "When you eat it"], grammar: "'not just ... — it's also ...' to extend an idea.", vocab: ["a big fan of", "rich — full of flavour", "tied to memories"] },
        { q: "Do you enjoy cooking?", sample: "I do, although I'd say I'm still learning. I actually find cooking quite therapeutic — it's a nice way to switch off after a long day of studying. I'm not the most skilled cook, but I enjoy experimenting with simple recipes.", ideas: ["Yes/No + skill level", "How it makes you feel"], grammar: "Concession with 'although': 'I do, although I'm still learning.'", vocab: ["therapeutic — relaxing", "switch off", "experiment with"] },
        { q: "What dish do you like to cook the most?", sample: "I'm probably best at making a simple pasta dish. It's quick, it's pretty hard to get wrong, and everyone in my family seems to enjoy it. When I'm short on time but still want something homemade, that's my go-to option.", ideas: ["A dish", "Why that one"], grammar: "'hard to get wrong' — adjective + infinitive.", vocab: ["hard to get wrong", "go-to option"] },
        { q: "Do you prefer eating out or cooking at home?", sample: "Most of the time I prefer eating at home — it's both healthier and cheaper, which matters on a student budget. That said, I do enjoy eating out every now and then as a bit of a treat, especially to celebrate something with friends.", ideas: ["Pick one", "A reason for each"], grammar: "'both ... and ...' to combine reasons.", vocab: ["as a treat", "now and then", "on a budget"] },
        { q: "Are there any traditional dishes in your culture?", sample: "Absolutely, we have quite a few. Besides plov, there are dishes like shashlik and samsa, and they're a huge part of our celebrations and family gatherings. I think food plays a really central role in our culture — no special occasion feels complete without it.", ideas: ["Name a few", "When they're eaten"], grammar: "'play a central role in' — useful collocation.", vocab: ["gatherings", "a huge part of", "play a role in"] }
      ]
    },
    part2: {
      title: "Part 2: Talk About a Recent Trip",
      cue: ["Where you went", "Activities you did", "Your favourite part", "A souvenir you got"],
      sample: "Recently I took a short trip to Bukhara, a historic city not too far from where I live.\n\nWe spent two days wandering around the old town, exploring the ancient madrasas and bustling bazaars. We also took a guided tour, which really brought the history to life, and in the evenings we just relaxed in little tea houses.\n\nMy favourite part was climbing up an old minaret at sunset — the view over the whole city was breathtaking. I also picked up a small hand-painted ceramic plate as a souvenir, and now it sits on my shelf as a lovely reminder of the trip.",
      ideas: ["Destination", "What you did", "The highlight", "The souvenir"],
      vocab: ["bustling — busy and lively", "breathtaking", "bring to life"]
    }
  },

  /* ---------------------------------------------------------------- DAY 13 */
  {
    day: 13,
    topic: "Family",
    part1: {
      title: "Part 1: Family",
      questions: [
        { q: "How many people are there in your family?", sample: "There are five of us in my immediate family — my parents, my two siblings and me. We're a fairly close-knit group, and even though everyone's busy, we make a real effort to stay connected.", ideas: ["The number", "Who they are", "How close you are"], grammar: "'even though' for concession.", vocab: ["immediate family", "close-knit — emotionally close", "make an effort"] },
        { q: "Do you have any siblings?", sample: "Yes, I have an older brother and a younger sister, so I'm right in the middle, which definitely has its ups and downs. My brother's someone I look up to, and my sister keeps everyone entertained, so it's never boring at home.", ideas: ["Yes/No", "Order / relationship"], grammar: "Relative clause: '..., which has its ups and downs.'", vocab: ["siblings", "ups and downs", "look up to — admire"] },
        { q: "Who is the oldest member of your family?", sample: "That would be my grandmother. She's in her late seventies now, but she's still incredibly sharp and absolutely full of stories. I love listening to her talk about what life was like when she was young.", ideas: ["Who", "A detail about them"], grammar: "'in her late seventies' for approximate age.", vocab: ["sharp — mentally quick", "full of stories"] },
        { q: "Do you spend a lot of time with your family?", sample: "I try to, yes. Even though everyone has their own commitments, we make a point of having dinner together most evenings. It's usually the time when we catch up on each other's day, and I really value that.", ideas: ["How much", "When you meet"], grammar: "'make a point of + -ing' = do deliberately.", vocab: ["make a point of", "commitments", "catch up"] },
        { q: "What do you like to do together?", sample: "We love sharing meals and just chatting around the table, honestly. At the weekends we sometimes go for a drive or visit relatives together. Nothing fancy, but those simple moments are what bring us closer.", ideas: ["Shared activities", "Why they matter"], grammar: "'Nothing fancy, but ...' — natural spoken contrast.", vocab: ["go for a drive", "relatives", "bring us closer"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Family Member",
      cue: ["Who they are", "Something you like about them", "A fun fact about them", "A fun activity you did together"],
      sample: "I'd like to describe my younger sister, who is twelve years old and full of energy.\n\nThe thing I like most about her is how funny she is — she has this way of making everyone laugh, even on a bad day. A fun fact about her is that she can name almost every country's capital city; she memorised them just for fun.\n\nOne activity I really enjoyed doing with her was building a huge jigsaw puzzle together over a long weekend. It took us hours, and we got quite competitive about it, but finishing it together felt like a real achievement. She's not just my sister — she's honestly one of my best friends.",
      ideas: ["Relationship", "A quality", "A surprising fact", "A shared memory"],
      vocab: ["full of energy", "competitive", "a real achievement"]
    }
  },

  /* ---------------------------------------------------------------- DAY 14 */
  {
    day: 14,
    topic: "Travel & A Game/Sport",
    part1: {
      title: "Part 1: Travel",
      questions: [
        { q: "Do you enjoy traveling?", sample: "I absolutely love it. There's nothing quite like experiencing a new place — trying different food, hearing a new language, and meeting people from other cultures. I always come back feeling refreshed and with a broader view of the world.", ideas: ["Yes/No", "What you love about it"], grammar: "'There's nothing quite like + -ing' for emphasis.", vocab: ["there's nothing quite like", "broaden your view"] },
        { q: "What is the most interesting place you've visited?", sample: "Probably Bukhara, to be honest. The history there is incredible, and walking through the old streets genuinely felt like stepping back in time. Every corner seemed to have a story behind it, which I found fascinating.", ideas: ["A place", "Why interesting"], grammar: "'felt like + -ing' for impressions.", vocab: ["step back in time", "a story behind it"] },
        { q: "Would you like to travel more in the future?", sample: "Definitely. I'd love to explore much more of the world, especially countries in Europe and East Asia. I think travelling is one of the best ways to learn, so it's a big goal of mine once I finish my studies.", ideas: ["Yes/No", "Where", "Why"], grammar: "'once I finish my studies' — time clause.", vocab: ["explore", "a big goal of mine"] },
        { q: "What type of places do you like to visit?", sample: "I'm definitely more drawn to historical cities than beach resorts. I find old architecture and local culture far more fascinating than just lying on a beach. Don't get me wrong, I enjoy relaxing too, but I prefer trips where I actually learn something.", ideas: ["Type of place", "Why"], grammar: "'Don't get me wrong, but ...' — natural balancing phrase.", vocab: ["drawn to — attracted to", "don't get me wrong"] },
        { q: "Is there a destination you would like to visit soon?", sample: "Turkey is high on my list at the moment, especially Istanbul. From what I've seen, it looks like the perfect mix of history and modern life, plus the food looks amazing. I'm hoping to make it there within the next year or two.", ideas: ["A destination", "Why soon"], grammar: "'From what I've seen, ...' to report impressions.", vocab: ["high on my list", "a mix of"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Game or Sport You Enjoy",
      cue: ["The name of the game/sport", "Why it's fun", "How to play it", "Your highest score or a winning moment"],
      sample: "A sport I really enjoy is table tennis, which I've played casually for years.\n\nWhat makes it so fun is how fast and intense it is — a single rally can have your heart racing, and no two games are ever the same. The rules are simple: you hit a light ball back and forth across a table with small paddles, and the first player to eleven points usually wins the set.\n\nMy proudest moment was beating my older brother in a close match last summer. He'd never lost to me before, so when I finally won on the very last point, it felt amazing. We still argue about it to this day, which just makes the memory even better.",
      ideas: ["Name the sport", "Why it's enjoyable", "Basic rules", "A winning memory"],
      vocab: ["rally — exchange of shots", "heart racing", "paddle"]
    }
  },

  /* ---------------------------------------------------------------- DAY 15 */
  {
    day: 15,
    topic: "Friends & A Famous Person",
    part1: {
      title: "Part 1: Friends",
      questions: [
        { q: "Do you have many friends?", sample: "I wouldn't say I have a huge number, but I have a small circle of really close friends. Honestly, I prefer quality over quantity — I'd much rather have a few people I can truly count on than dozens of casual acquaintances.", ideas: ["How many", "Quality vs quantity"], grammar: "'I'd much rather ... than ...' to express preference.", vocab: ["a close circle", "quality over quantity", "count on"] },
        { q: "How do you usually spend time with your friends?", sample: "We usually grab a coffee, go for walks, or sometimes just stay in and play games. Nothing fancy, but it's always good fun. The main thing for me is the conversation — we can talk for hours without ever running out of things to say.", ideas: ["Activities", "What matters most"], grammar: "'without + -ing': 'without running out of things to say.'", vocab: ["grab a coffee", "stay in", "run out of"] },
        { q: "What qualities do you value in a friend?", sample: "Above all, I value honesty and loyalty. I want friends I can trust completely and who'll stand by me when things get tough, not just when everything's going well. A good sense of humour is a big bonus too.", ideas: ["Key qualities", "Why"], grammar: "'not just ... but ...' to add depth.", vocab: ["loyalty", "stand by — support", "a big bonus"] },
        { q: "Is it important to make new friends as an adult?", sample: "I think it really is. As we grow, our interests and circumstances change, and making new friends keeps life fresh and broadens your perspective. It can be harder than it was at school, but in my opinion it's well worth the effort.", ideas: ["Yes/No", "Why", "A challenge"], grammar: "'well worth the effort' — useful phrase.", vocab: ["broaden your perspective", "well worth it"] },
        { q: "What makes a good friend?", sample: "For me, a good friend is someone who listens without judging and is there for you in both good times and bad. They're honest with you even when it's hard to hear, because they genuinely have your best interests at heart.", ideas: ["Define it", "An example"], grammar: "'there for you in good times and bad' — common collocation.", vocab: ["without judging", "have your best interests at heart"] }
      ]
    },
    part2: {
      title: "Part 2: Talk About a Famous Person You'd Like to Meet",
      cue: ["Their name", "Why you admire them", "A question you'd ask them", "A movie or book they made that you love"],
      sample: "If I could meet anyone famous, I'd choose Elon Musk.\n\nI admire him mainly because of his ambition — he's not afraid to take on enormous, almost impossible challenges, from electric cars to space travel. Whether or not you agree with everything he does, you can't deny he thinks big.\n\nThe question I'd love to ask him is how he stays motivated when so many of his projects seem likely to fail. I'd also love to hear his honest advice for young people who want to start something of their own. I haven't read a book by him, but I've watched countless interviews, and they always leave me feeling inspired to aim higher.",
      ideas: ["Who", "Why you admire them", "A question", "Their work you like"],
      vocab: ["ambition", "take on — accept a challenge", "think big"]
    }
  },

  /* ---------------------------------------------------------------- DAY 16 */
  {
    day: 16,
    topic: "Daily Activities & A Restaurant",
    part1: {
      title: "Part 1: Daily Activities",
      questions: [
        { q: "What do you usually do in the morning?", sample: "I like to ease into my morning rather than rush. I'll have a glass of water, do a bit of stretching, and then dive into my most important study tasks while my mind is still fresh. Starting calmly really sets the tone for the rest of my day.", ideas: ["Routine", "Why that order"], grammar: "'rather than + -ing' for contrast.", vocab: ["ease into", "dive into", "set the tone"] },
        { q: "How do you spend your evenings?", sample: "My evenings are mostly about winding down. I'll have dinner with my family, and after that I usually read or watch something light before bed. I deliberately avoid heavy work late at night because it stops me sleeping properly.", ideas: ["Activities", "Why"], grammar: "'deliberately' as a natural adverb.", vocab: ["wind down", "deliberately"] },
        { q: "Do you have a favorite time of day?", sample: "Early morning, without a doubt. It's quiet and peaceful, and I feel like I can think most clearly before the world wakes up. I get a real sense of calm from having that time entirely to myself.", ideas: ["Time + why"], grammar: "Superlative: 'I can think most clearly.'", vocab: ["peaceful", "a sense of calm"] },
        { q: "Is there a specific routine you follow before bedtime?", sample: "Yes, I always try to read for about twenty minutes and stay off my phone. I've found that little habit really helps me switch off and fall asleep much faster. Screens late at night just leave my mind too active.", ideas: ["A habit", "Why"], grammar: "'I've found that ...' to share experience.", vocab: ["switch off", "fall asleep"] },
        { q: "What do you like to do on weekends?", sample: "Weekends are pretty flexible for me. I catch up on rest, meet up with friends, and tackle the little jobs I never had time for during the week. It's a nice balance of relaxing and getting things done.", ideas: ["Mix of activities"], grammar: "'a balance of X and Y' — useful structure.", vocab: ["tackle — deal with", "catch up on rest"] }
      ]
    },
    part2: {
      title: "Part 2: Discuss a Restaurant You Like",
      cue: ["Restaurant's name", "The type of food they have", "Your favourite dish there", "A friend you went there with"],
      sample: "There's a little family-run restaurant near my home that I'm very fond of.\n\nIt mainly serves traditional Uzbek dishes, and the food always tastes home-made rather than mass-produced. My absolute favourite is their lamb plov — it's perfectly seasoned, and the portions are generous.\n\nI usually go there with my best friend, who introduced me to the place in the first place. We've made it a bit of a tradition to eat there after exams as a reward. It's nothing fancy, but the warm atmosphere and friendly owners keep me coming back again and again.",
      ideas: ["The name/type", "The cuisine", "Your go-to dish", "Who you go with"],
      vocab: ["family-run", "well-seasoned", "generous portions"]
    }
  },

  /* ---------------------------------------------------------------- DAY 17 */
  {
    day: 17,
    topic: "Free Time & Helping Someone",
    part1: {
      title: "Part 1: Free Time",
      questions: [
        { q: "What do you like to do in your free time?", sample: "In my free time I usually read, go for walks or catch up with friends — simple things that help me recharge. After a busy week, I really value just slowing down and doing something I enjoy rather than feeling productive all the time.", ideas: ["Hobbies", "Why"], grammar: "'rather than + -ing' for contrast.", vocab: ["recharge", "slow down"] },
        { q: "How often do you have free time?", sample: "Not as often as I'd like, to be honest. Between studying and other commitments, my free time is mostly limited to the weekends. That's exactly why I try to make the most of it whenever I get the chance.", ideas: ["How much", "Why limited"], grammar: "'Not as ... as I'd like' — natural comparison.", vocab: ["commitments", "make the most of"] },
        { q: "Do you prefer spending your free time alone or with others?", sample: "It honestly depends on my mood. Sometimes I need quiet time alone to recharge and clear my head, but other times nothing beats good company and a few laughs with friends. I think a healthy mix of both is what works best for me.", ideas: ["Pick / depends", "Why"], grammar: "'nothing beats + noun' for emphasis.", vocab: ["nothing beats", "good company", "a healthy mix"] },
        { q: "Is there a specific place you like to go to when you have free time?", sample: "I really love going to a nearby park. Being surrounded by greenery instantly puts me in a better mood, and it's a nice escape from the noise of the city. I'll often take a book and just spend an hour or two there.", ideas: ["A place", "Why"], grammar: "'Being surrounded by ...' — gerund as subject.", vocab: ["greenery", "an escape from"] },
        { q: "What activities help you relax?", sample: "Reading and listening to calm music are my go-to ways to relax. They help me completely clear my mind and forget about any stress. Even just twenty minutes of either one can totally reset my mood.", ideas: ["Activities", "Effect"], grammar: "'Even just ... can ...' to show impact.", vocab: ["go-to", "clear my mind", "reset my mood"] }
      ]
    },
    part2: {
      title: "Part 2: Talk About a Time You Helped Someone",
      cue: ["Who you helped", "What you did to help", "How you felt afterwards", "If you'd do it again"],
      sample: "I'd like to talk about a time I helped a classmate who was really struggling with English before an important exam.\n\nShe was falling behind and feeling quite anxious, so I offered to study with her a few evenings a week. We went through grammar together, practised speaking, and I shared the tricks that had worked for me.\n\nWhen she finally passed with a good score, I honestly felt almost as happy as she did. Seeing that my help had genuinely made a difference was incredibly rewarding. Without a second thought, I'd absolutely do it again — helping others actually deepens your own understanding too.",
      ideas: ["Who + their problem", "What you did", "How you felt", "Would you repeat it"],
      vocab: ["fall behind", "make a difference", "without a second thought"]
    }
  },

  /* ---------------------------------------------------------------- DAY 18 */
  {
    day: 18,
    topic: "Shopping & An Important Day",
    part1: {
      title: "Part 1: Shopping",
      questions: [
        { q: "Do you like shopping?", sample: "I'd say I have mixed feelings about it. I really enjoy shopping for things like books or gadgets, but clothes shopping can honestly drive me up the wall. It just depends entirely on what I'm actually shopping for.", ideas: ["Yes/No/mixed", "What you like or not"], grammar: "'It depends entirely on ...' — natural hedging.", vocab: ["mixed feelings", "drive me up the wall — annoy me"] },
        { q: "Where do you usually go shopping?", sample: "For everyday things like groceries, I tend to head to a local market because it's quick and fresh. But for bigger purchases, I usually go to a shopping mall in the city centre where there's more choice. It really depends on what I need.", ideas: ["Places", "What for"], grammar: "'tend to + verb' for habits.", vocab: ["everyday things", "purchases", "more choice"] },
        { q: "What kinds of things do you like to buy?", sample: "I tend to spend my money on books and the occasional piece of tech — basically things I'll get a lot of use out of. I'm not really an impulse buyer; I prefer to invest in things that are genuinely worth it.", ideas: ["Items", "Why"], grammar: "'get use out of' — useful collocation.", vocab: ["get use out of", "impulse buyer", "worth it"] },
        { q: "Do you prefer shopping alone or with others?", sample: "Mostly alone, actually. When I'm on my own, I can take my time and make decisions without feeling rushed or pressured. That said, for something important like clothes, a second opinion from a friend can be really helpful.", ideas: ["Pick one", "Why"], grammar: "Concession with 'That said, ...'.", vocab: ["take my time", "feel rushed", "a second opinion"] },
        { q: "Are there any items you don't enjoy shopping for?", sample: "Definitely clothes. I find it quite tiring trying on lots of different things, so I usually just try to get in and out as fast as I possibly can. I'd much rather order online and avoid the whole hassle, to be honest.", ideas: ["An item", "Why"], grammar: "'I'd much rather ... than ...' for preference.", vocab: ["try on", "get in and out", "hassle"] }
      ]
    },
    part2: {
      title: "Part 2: Describe an Important Day in Your Life",
      cue: ["The date or event", "What made it special", "A person who was there", "A gift or surprise you received"],
      sample: "One of the most important days of my life was the day I received my university acceptance letter.\n\nWhat made it so special was the months of hard work that led up to it. I'd studied late into the night for ages, so seeing the word 'Congratulations' on that letter was an overwhelming feeling of relief and pride.\n\nMy mother was right beside me when I opened it, and her reaction — bursting into happy tears — made the moment even more memorable. To celebrate, my family surprised me with a small party and a new laptop for my studies. It's a day I'll never forget, because it marked the start of a completely new chapter in my life.",
      ideas: ["The event", "Why it mattered", "Who was there", "A gift/surprise"],
      vocab: ["overwhelming", "burst into tears", "a new chapter"]
    }
  },

  /* ---------------------------------------------------------------- DAY 19 */
  {
    day: 19,
    topic: "Music/Movies & Study/Work Place",
    part1: {
      title: "Part 1: Music and Movies",
      questions: [
        { q: "Do you enjoy listening to music?", sample: "Absolutely — music is a huge part of my daily life. I listen while I'm studying, walking, even cooking, so it's pretty much always on in the background. Different types of music suit my different moods throughout the day.", ideas: ["Yes/No", "When"], grammar: "'pretty much always' — natural intensifier.", vocab: ["part of daily life", "in the background"] },
        { q: "What type of music do you like?", sample: "I've got quite a broad taste, actually, but I'm especially fond of calm, acoustic music when I need to focus. When I want to feel more energetic, though, I'll switch to something a bit more upbeat. It really depends on what I'm doing.", ideas: ["Genres", "When"], grammar: "Contrast with 'though' mid-sentence.", vocab: ["broad taste", "acoustic", "upbeat"] },
        { q: "Do you like watching movies?", sample: "I do, though I have to admit I'm a bit picky. I'd much rather watch one really great film than sit through several average ones. When I find a film I love, I can easily get completely absorbed in it.", ideas: ["Yes/No", "Preference"], grammar: "'I'd much rather ... than ...'.", vocab: ["picky — selective", "get absorbed in"] },
        { q: "What genre of movies do you prefer?", sample: "I'm really drawn to science fiction and thrillers — basically anything that keeps me guessing and makes me think. I love a clever plot twist that I didn't see coming. Comedies are great for relaxing too, but those two genres are my favourites.", ideas: ["Genre", "Why"], grammar: "'anything that ...' — relative clause.", vocab: ["keep me guessing", "plot twist"] },
        { q: "Is there a specific artist or actor you admire?", sample: "I really admire Leonardo DiCaprio. What impresses me most is how he completely disappears into every role he plays — you forget you're even watching an actor. On top of that, I respect how much he does for environmental causes.", ideas: ["Who", "Why"], grammar: "'What impresses me most is ...' for emphasis.", vocab: ["disappear into a role", "environmental causes"] }
      ]
    },
    part2: {
      title: "Part 2: Talk About Where You Study or Work",
      cue: ["The place's name", "What it looks like", "A class or project you like", "A friend or colleague there"],
      sample: "I'd like to talk about my university, which is in the heart of Tashkent.\n\nThe campus is fairly modern, with bright lecture halls, a big library, and plenty of green spaces where students sit and chat between classes. It has a lively but focused atmosphere.\n\nThe class I enjoy most is a project-based economics course where we analyse real companies — it feels practical rather than just theory. I've also made a great friend there, a classmate who shares my study habits, and we often revise together. Overall, it's a place where I feel I'm genuinely growing, both academically and personally.",
      ideas: ["Name/type", "Appearance", "A favourite class/project", "A person there"],
      vocab: ["campus", "lively atmosphere", "project-based"]
    }
  },

  /* ---------------------------------------------------------------- DAY 20 */
  {
    day: 20,
    topic: "Seasons/Weather & A Skill to Learn",
    part1: {
      title: "Part 1: Seasons and Weather",
      questions: [
        { q: "What is your favorite season? Why do you like it?", sample: "Autumn is my favourite by far. The weather is cool and comfortable, which is perfect for going outside, and the golden leaves make everything look beautiful. There's also a really cosy feeling in the air that I just love.", ideas: ["Season", "Why"], grammar: "'by far' to strengthen a superlative.", vocab: ["golden leaves", "by far", "cosy feeling"] },
        { q: "What type of weather do you enjoy the most?", sample: "I really love mild, sunny days — warm enough to be outside comfortably but not so hot that it's unbearable. On days like that, I feel far more energetic and motivated to actually get out and do things.", ideas: ["Weather", "Why"], grammar: "'warm enough to ... but not so hot that ...'.", vocab: ["mild", "unbearable", "motivated"] },
        { q: "Are there any activities you prefer during specific seasons?", sample: "Definitely. In summer I love swimming and spending time outdoors, whereas in winter I prefer cosy indoor activities like reading or watching films. I think each season has its own charm and its own set of activities.", ideas: ["Seasonal activities"], grammar: "'whereas' for contrast.", vocab: ["whereas", "cosy", "its own charm"] },
        { q: "How does the weather affect your daily routine?", sample: "Quite a lot, actually. On bright, sunny days I'm much more motivated to go out and be active, but grey, rainy weather tends to make me want to stay in and just relax. My energy levels are honestly pretty tied to the weather.", ideas: ["Effect on mood/plans"], grammar: "'tends to make me want to ...' — natural pattern.", vocab: ["motivated", "stay in", "tied to"] },
        { q: "Do you prefer hot or cold weather?", sample: "If I had to choose, I'd pick cool weather over hot. The way I see it, you can always add another layer if you're cold, but there's only so much you can do when it's boiling. So cooler weather feels far more manageable to me.", ideas: ["Pick one", "Reason"], grammar: "'there's only so much you can do' — idiomatic.", vocab: ["add a layer", "boiling — very hot", "manageable"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Skill You Want to Learn",
      cue: ["The skill's name", "Why you're interested", "Your first step to learn it", "How it'll be useful to you"],
      sample: "A skill I'm really keen to learn is coding, specifically web development.\n\nI'm interested in it because technology runs almost everything these days, and being able to build my own website or app sounds incredibly empowering. It's also a very practical, future-proof skill.\n\nMy first step would be to take a beginner online course and practise a little every day, since I believe consistency matters more than talent. In the long run, coding could open up brilliant career opportunities for me, and it would let me turn my own ideas into real, working products. That's exactly why it's at the top of my list.",
      ideas: ["The skill", "Why you want it", "How you'd start", "Future benefit"],
      vocab: ["empowering", "future-proof", "consistency"]
    }
  },

  /* ---------------------------------------------------------------- DAY 21 */
  {
    day: 21,
    topic: "Hobbies/Leisure & A Journey",
    part1: {
      title: "Part 1: Hobbies and Leisure",
      questions: [
        { q: "What are your favorite hobbies in your free time?", sample: "Reading and walking are my two main ones, and I'd say they're both relaxing and good for the mind. Reading lets me escape into different worlds, while walking helps me clear my head, so together they keep me pretty balanced.", ideas: ["Hobbies", "Why each"], grammar: "'while' to contrast two ideas.", vocab: ["good for the mind", "escape into", "clear my head"] },
        { q: "Have you recently started a new hobby or activity?", sample: "Yes, I've recently started journaling, and it's been a surprisingly nice way to reflect on my day. I just write down a few thoughts each evening, and somehow it really helps me clear my mind before bed. I didn't expect to enjoy it as much as I do.", ideas: ["New hobby", "How it's going"], grammar: "'as much as I do' for emphasis.", vocab: ["journaling", "reflect on"] },
        { q: "How do you usually relax after a day of work or study?", sample: "I usually unwind with a good book or some calm music. It helps me leave the day's stress behind and properly switch off. If I've had a particularly tough day, a short walk usually does the trick too.", ideas: ["How you relax"], grammar: "'does the trick' — idiomatic.", vocab: ["unwind", "switch off", "do the trick"] },
        { q: "Do you prefer indoor or outdoor activities?", sample: "I lean towards outdoor activities, mainly because the fresh air and a change of scenery always lift my spirits. Being cooped up indoors all day can make me feel a bit sluggish, so I try to get outside whenever the weather allows.", ideas: ["Pick one", "Why"], grammar: "'whenever the weather allows' — time clause.", vocab: ["change of scenery", "lift my spirits", "cooped up"] },
        { q: "What's a leisure activity you've always wanted to try?", sample: "I've always wanted to try hiking in the mountains. Being completely surrounded by nature really appeals to me, and I imagine reaching the top after a long climb would feel incredibly rewarding. It's something I'm hoping to do this summer.", ideas: ["Activity", "Why"], grammar: "'I imagine ... would feel ...' — speculation.", vocab: ["appeal to", "rewarding"] }
      ]
    },
    part2: {
      title: "Part 2: Discuss a Journey You'd Like to Take",
      cue: ["Destination", "Why you want to go", "Something you'd do there", "A friend you'd take along"],
      sample: "A journey I'd love to take one day is a trip along the coast of Italy.\n\nI've always wanted to go because the combination of history, food and stunning coastline seems almost perfect. I'm fascinated by Italian culture, and I imagine the scenery would be unforgettable.\n\nWhile I'm there, the main thing I'd do is travel slowly from town to town, tasting local food and exploring old streets rather than rushing around. I'd take my best friend with me, because we have a similar sense of adventure and never run out of things to talk about. Honestly, just thinking about it makes me want to start saving up right now.",
      ideas: ["Where", "Why", "What you'd do", "Who with"],
      vocab: ["coastline", "sense of adventure", "save up"]
    }
  },

  /* ---------------------------------------------------------------- DAY 22 */
  {
    day: 22,
    topic: "Food/Cuisine & An Advert",
    part1: {
      title: "Part 1: Food and Cuisine",
      questions: [
        { q: "What's your favorite type of cuisine?", sample: "I'm a big fan of Italian cuisine, honestly. I love how it relies on fresh ingredients and fairly simple recipes, yet the dishes are still packed with flavour. Pizza and pasta are obvious favourites, but there's so much more to it than that.", ideas: ["Cuisine", "Why"], grammar: "'yet' for contrast within a sentence.", vocab: ["fresh ingredients", "packed with flavour"] },
        { q: "Do you enjoy cooking at home?", sample: "I do, especially at the weekends when I actually have time to experiment rather than just throwing something together quickly. During the week it's more about convenience, but on a relaxed Sunday, cooking becomes something I genuinely enjoy.", ideas: ["Yes/No", "When"], grammar: "'rather than + -ing' for contrast.", vocab: ["experiment", "throw something together", "convenience"] },
        { q: "Is there a particular dish you would love to learn how to make?", sample: "I'd really like to master a proper homemade lasagne. It looks fairly complicated with all the layers, but it's such a crowd-pleaser that I think it would be well worth the effort. It's definitely on my cooking bucket list.", ideas: ["A dish", "Why"], grammar: "'well worth the effort' — useful phrase.", vocab: ["master", "crowd-pleaser", "bucket list"] },
        { q: "Have you ever tried food from a foreign country?", sample: "Yes, I've tried quite a few — Turkish, Korean and Italian especially. I really love discovering new flavours and stepping outside my comfort zone, even if the dish turns out to be completely different from what I expected.", ideas: ["Which", "How you found it"], grammar: "'even if' for concession.", vocab: ["flavours", "comfort zone"] },
        { q: "What's the most unusual meal you have ever eaten?", sample: "Probably a very spicy Korean dish that a friend introduced me to. It was definitely unusual for my taste buds, but it turned out to be surprisingly delicious. I'm really glad I gave it a try instead of sticking to what I knew.", ideas: ["The meal", "Your reaction"], grammar: "'instead of + -ing' for contrast.", vocab: ["taste buds", "give it a try", "stick to"] }
      ]
    },
    part2: {
      title: "Part 2: Talk About an Ad You Remember",
      cue: ["What the ad was for", "Where you saw it", "One thing you remember about it", "If you liked it"],
      sample: "An advertisement that has really stuck in my memory was a commercial for a sportswear brand.\n\nI first saw it on social media, and it kept popping up everywhere for weeks. The thing I remember most is that it didn't really focus on the products at all — instead, it told an emotional story about an ordinary person who kept training despite failing again and again.\n\nWhat I loved about it was the message: never give up, no matter how many times you fall. It was genuinely inspiring rather than just trying to sell shoes. I think that's exactly why it worked so well — it made me feel something, and that's why I still remember it today.",
      ideas: ["The product", "Where you saw it", "A memorable detail", "Your opinion"],
      vocab: ["commercial", "pop up", "inspiring"]
    }
  },

  /* ---------------------------------------------------------------- DAY 23 */
  {
    day: 23,
    topic: "Friends & A Change in Life",
    part1: {
      title: "Part 1: Friends",
      questions: [
        { q: "Do you have a best friend, and how often do you see them?", sample: "Yes, I've had the same best friend since school, which I feel really lucky about. We don't manage to see each other every day because we're both busy, but we catch up at least once a week. And even when we don't meet, we're constantly texting.", ideas: ["Yes/No", "How often"], grammar: "'which I feel lucky about' — relative clause.", vocab: ["catch up", "constantly"] },
        { q: "What qualities do you think are important in a friend?", sample: "For me, trust and a good sense of humour are the most important. I want someone I can rely on completely, but who I can also laugh with and not take life too seriously. A friend who has both of those is pretty rare.", ideas: ["Qualities", "Why"], grammar: "'someone I can rely on' — contact clause.", vocab: ["rely on", "a sense of humour"] },
        { q: "Have you made any new friends recently?", sample: "Yes, I've made a couple of new friends at university who happen to share my interests, which is always nice. It can be a bit harder to make friends as you get older, so I really appreciate it when you naturally click with someone.", ideas: ["Yes/No", "Where"], grammar: "'click with someone' — idiomatic.", vocab: ["share interests", "click with"] },
        { q: "What activities do you enjoy doing with your friends?", sample: "We love grabbing food together, going for walks, and occasionally playing sports. To be honest, though, the activity itself doesn't matter that much — the best part is simply spending time together and having a good laugh.", ideas: ["Activities", "What matters"], grammar: "'the activity doesn't matter that much' — natural hedging.", vocab: ["grab food", "have a good laugh"] },
        { q: "Can friends influence a person's decisions? How?", sample: "Definitely, friends can have a huge influence. Good friends can encourage you to make better choices and push you to improve, whereas the wrong crowd can easily lead you down the wrong path. So I think choosing your friends carefully really matters.", ideas: ["Yes/No", "How"], grammar: "'whereas' for contrast.", vocab: ["the wrong crowd", "lead down the wrong path"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Change in Your Life",
      cue: ["The change that happened", "When it occurred", "How you felt about it", "Something new you started doing"],
      sample: "A significant change in my life was when I decided to take my English seriously, about a year ago.\n\nUp until then, I'd been quite lazy about studying, but I realised that good English could open doors to study and work abroad. So I made a firm decision to change my habits.\n\nAt first I felt nervous and even a little overwhelmed, but that quickly turned into excitement as I started seeing progress. One new thing I began doing was speaking English out loud every single day, even just to myself. Looking back, that decision completely changed my routine and my confidence, and I'm so glad I made it when I did.",
      ideas: ["The change", "When", "Your feelings", "A new habit"],
      vocab: ["open doors", "overwhelmed", "out loud"]
    }
  },

  /* ---------------------------------------------------------------- DAY 24 */
  {
    day: 24,
    topic: "Technology & A Shopping Place",
    part1: {
      title: "Part 1: Technology",
      questions: [
        { q: "What tech gadgets do you use daily?", sample: "My phone and my laptop are absolutely essential to me. I use them for studying, communicating with people, and entertainment, pretty much all day long. Honestly, I'd find it really hard to get through a normal day without them.", ideas: ["Gadgets", "What for"], grammar: "'I'd find it hard to ...' — second conditional flavour.", vocab: ["essential", "get through the day"] },
        { q: "Do you think technology has made life easier?", sample: "Overall, I'd say yes, definitely. It saves us a huge amount of time and makes information instantly available, which is incredible. That said, it can also be a bit of a distraction if you're not careful, so it's really about using it wisely.", ideas: ["Yes/No", "A downside"], grammar: "Concession with 'That said, ...'.", vocab: ["distraction", "use it wisely"] },
        { q: "What's one piece of technology you couldn't live without?", sample: "Honestly, it would have to be my smartphone. It's basically my study tool, my map, my camera, and my connection to everyone, all rolled into one device. The sheer number of things it can do still amazes me sometimes.", ideas: ["The item", "Why"], grammar: "'all rolled into one' — idiomatic.", vocab: ["all in one", "the sheer number of"] },
        { q: "Have you recently downloaded any interesting apps?", sample: "Yes, I recently downloaded a language-learning app, and it's actually made practising vocabulary genuinely fun. It turns learning into a kind of game with little daily goals, so it keeps me coming back. I've been surprisingly consistent with it.", ideas: ["An app", "Why"], grammar: "'keeps me coming back' — pattern.", vocab: ["language-learning", "daily goals"] },
        { q: "How do you keep up with technology news?", sample: "I mostly follow a few tech channels on YouTube and some accounts on social media. It's a quick, easy way to stay updated without having to read long articles. I find short videos suit my busy schedule much better.", ideas: ["Sources", "Why"], grammar: "'without having to ...' — useful structure.", vocab: ["stay updated", "suit my schedule"] }
      ]
    },
    part2: {
      title: "Part 2: Discuss a Place You Like to Shop",
      cue: ["The place's name", "Types of things they sell", "A recent purchase", "If it's close to your home"],
      sample: "A place I really enjoy shopping at is a large bookstore in the city centre.\n\nAs the name suggests, it mainly sells books, but it also has a lovely section for stationery, gifts and even a small café. The atmosphere is calm and inviting, so I could easily spend hours just browsing.\n\nMy most recent purchase there was a novel I'd been wanting to read for ages, along with a new notebook for my studies. It's about a thirty-minute ride from my home, so it's not exactly around the corner, but it's well worth the trip. Whenever I need to relax, that bookstore is one of my favourite places to go.",
      ideas: ["The shop", "What it sells", "A recent buy", "Distance from home"],
      vocab: ["browse", "inviting", "well worth it"]
    }
  },

  /* ---------------------------------------------------------------- DAY 25 */
  {
    day: 25,
    topic: "Learning/Education & A Recent Meal",
    part1: {
      title: "Part 1: Learning and Education",
      questions: [
        { q: "What subject did you enjoy most at school?", sample: "I always enjoyed history the most. I loved hearing the stories behind how the world became what it is today, and our teacher had a real gift for making it exciting rather than just a list of dates. It never felt like a chore to me.", ideas: ["Subject", "Why"], grammar: "'had a gift for + -ing'.", vocab: ["the stories behind", "a chore"] },
        { q: "Are you learning something new at the moment?", sample: "Yes, apart from English I'm slowly teaching myself the basics of coding, which I find really engaging. It's quite challenging, but there's a great feeling of satisfaction whenever I finally get something to work. I try to practise a little each day.", ideas: ["What", "How"], grammar: "'apart from ...' to add information.", vocab: ["engaging", "a feeling of satisfaction"] },
        { q: "Do you prefer online courses or classroom learning?", sample: "Each has its own perks, but I slightly prefer classroom learning because of the direct interaction with teachers and classmates. You can ask questions instantly and bounce ideas off others. Online courses are more flexible, though, which is a big advantage too.", ideas: ["Pick one", "Why"], grammar: "Concession with 'though'.", vocab: ["perks — advantages", "interaction", "bounce ideas off"] },
        { q: "How do you usually learn best — listening, watching, or doing?", sample: "Definitely by doing, hands down. I remember things far better when I actually practise them rather than just reading or listening passively. For me, making mistakes and then correcting them is where the real learning happens.", ideas: ["Your style", "Why"], grammar: "'rather than + -ing'.", vocab: ["hands-on", "passively", "hands down"] },
        { q: "What's something you've always wanted to study but haven't yet?", sample: "I've always wanted to study psychology. Understanding why people behave the way they do really fascinates me, and I think it would be useful in almost every area of life. I just haven't found the time for it yet, but maybe one day.", ideas: ["Subject", "Why"], grammar: "'the way they do' — natural phrase.", vocab: ["fascinate", "behave"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Recent Meal You Had",
      cue: ["Where you ate", "A dish you tried", "How it tasted", "If you ate alone or with someone"],
      sample: "Recently I had a really memorable meal at a cosy restaurant in town.\n\nI decided to try something new — a grilled lamb dish served with rice and fresh vegetables. The lamb was beautifully tender, the spices were rich without being overpowering, and the whole thing was bursting with flavour.\n\nWhat made it even better was the company. I was there with a couple of close friends to celebrate the end of our exams, so the mood was relaxed and full of laughter. By the end of the evening, I was completely full and content. It reminded me that a great meal isn't just about the food — it's about who you share it with.",
      ideas: ["Where", "The dish", "The taste", "Who with"],
      vocab: ["tender", "overpowering", "bursting with flavour"]
    }
  },

  /* ---------------------------------------------------------------- DAY 26 */
  {
    day: 26,
    topic: "Reading & A Book You Read",
    part1: {
      title: "Part 1: Reading",
      questions: [
        { q: "Do you like reading books?", sample: "I absolutely love it. For me, reading is one of the best ways to relax and learn at the same time. I can lose myself in a good story for hours and completely forget about everything else, which is a feeling I really treasure.", ideas: ["Yes/No", "Why"], grammar: "'at the same time' to combine ideas.", vocab: ["lose myself in", "treasure"] },
        { q: "What kind of books do you prefer?", sample: "I mostly enjoy fiction and the occasional self-improvement book. I think it's a nice balance — fiction lets me escape, while self-improvement books actually teach me something useful. So depending on my mood, I'll switch between the two.", ideas: ["Genres", "Why"], grammar: "'while' to contrast.", vocab: ["self-improvement", "escape"] },
        { q: "How often do you visit a library?", sample: "Not as often as I used to, to be honest, mainly because I read a lot on my phone now. That said, I still like to pop in every few weeks — there's just something about the quiet atmosphere of a library that I really enjoy.", ideas: ["How often", "Why"], grammar: "'Not as often as I used to' — comparison with past.", vocab: ["pop in", "atmosphere"] },
        { q: "Do you prefer reading physical books or e-books?", sample: "I genuinely prefer physical books — there's something really satisfying about turning real pages and seeing your progress. Having said that, e-books are far more convenient when I'm travelling, since I can carry hundreds of them on one device.", ideas: ["Pick one", "Trade-off"], grammar: "'Having said that, ...' for concession.", vocab: ["satisfying", "convenient"] },
        { q: "Has your taste in books changed since you were younger?", sample: "Definitely, it's changed a lot. As a child I only really read adventure stories, but now I find myself drawn to deeper, more thought-provoking books. I think my taste has naturally matured along with me, which I find quite interesting.", ideas: ["Then vs now"], grammar: "'find myself drawn to' — reflexive pattern.", vocab: ["thought-provoking", "mature"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Book You Recently Read",
      cue: ["What the book is about", "How you heard about it", "Why you decided to read it", "What you liked or disliked"],
      sample: "Recently I read a book called 'Atomic Habits' by James Clear.\n\nIt's all about how tiny, everyday habits can add up to huge changes over time. I first heard about it from a friend who wouldn't stop recommending it, and after seeing it mentioned online again and again, I finally gave in and bought it.\n\nI decided to read it because I wanted to build better study routines, and it absolutely delivered. What I liked most was how practical it was — every chapter gave clear, simple steps I could actually use. If I had to mention a downside, some ideas were repeated a little too often. Still, it genuinely changed the way I think about daily habits.",
      ideas: ["The topic", "How you discovered it", "Why you read it", "Likes/dislikes"],
      vocab: ["add up", "give in", "deliver — meet expectations"]
    }
  },

  /* ---------------------------------------------------------------- DAY 27 */
  {
    day: 27,
    topic: "Cooking & A Dish You Prepare",
    part1: {
      title: "Part 1: Cooking",
      questions: [
        { q: "Do you enjoy cooking?", sample: "I do, though I'd honestly call myself a bit of a beginner still. I find it quite relaxing and even a little creative, especially when I get to try out a new recipe. There's something rewarding about making a meal from scratch.", ideas: ["Yes/No", "Skill"], grammar: "'There's something rewarding about + -ing'.", vocab: ["creative", "from scratch"] },
        { q: "How often do you cook at home?", sample: "I'd say a few times a week, usually on the days when I have a bit more free time. During busy weeks I tend to keep it simple, but on weekends I'll happily spend longer on something more involved. It really varies.", ideas: ["Frequency", "When"], grammar: "'tend to' for tendencies.", vocab: ["free time", "more involved"] },
        { q: "Who usually prepares meals in your family?", sample: "It's mostly my mother, who's honestly an amazing cook. The rest of us pitch in when we can, though, especially with the chopping and the washing up. I think cooking together as a family is actually a really nice bonding time.", ideas: ["Who", "Your role"], grammar: "'pitch in' — phrasal verb.", vocab: ["pitch in — help out", "bonding time"] },
        { q: "What kind of food do you like to cook?", sample: "Mostly simple, quick dishes like pasta, omelettes, and that sort of thing. I prefer recipes that don't take too long but still taste good. As my confidence grows, though, I'm slowly starting to attempt more complicated meals.", ideas: ["Type", "Why"], grammar: "'that sort of thing' — natural vagueness.", vocab: ["quick dishes", "attempt"] },
        { q: "Do you think everyone should learn how to cook?", sample: "Absolutely, I think it's a really important life skill. Knowing how to cook keeps you healthier, saves you a lot of money, and makes you far more independent. Plus, it's a great way to take care of the people you love.", ideas: ["Yes/No", "Why"], grammar: "'Plus, ...' as an informal additive.", vocab: ["life skill", "independent"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Dish You Enjoy Preparing",
      cue: ["What ingredients are needed", "How you learned to make it", "How often you cook it", "Why you enjoy making it"],
      sample: "A dish I really enjoy preparing is a simple homemade pasta with tomato sauce.\n\nThe ingredients are pretty basic — pasta, fresh tomatoes, garlic, onions, olive oil and a few herbs — which is part of why I love it. I learned to make it by watching my mother and a couple of online videos, then adjusting it to my own taste over time.\n\nI tend to cook it about once a week because it's quick, affordable and almost impossible to get wrong. The main reason I enjoy making it is that it's a little ritual that helps me relax, and there's something really satisfying about creating a tasty meal from such simple ingredients.",
      ideas: ["Ingredients", "How you learned", "How often", "Why you enjoy it"],
      vocab: ["adjust to taste", "ritual", "from scratch"]
    }
  },

  /* ---------------------------------------------------------------- DAY 28 */
  {
    day: 28,
    topic: "Traveling & A Place to Visit",
    part1: {
      title: "Part 1: Traveling",
      questions: [
        { q: "Do you like traveling?", sample: "I absolutely love it. For me, discovering new places and experiencing different cultures is one of the most exciting and enriching things in life. I always come home with fresh ideas and wonderful memories, which makes every trip worth it.", ideas: ["Yes/No", "Why"], grammar: "'one of the most ... things in life' — superlative.", vocab: ["discover", "enriching"] },
        { q: "How often do you travel?", sample: "Not as often as I'd like, unfortunately — mostly during the holidays. Because my opportunities are limited, though, I really make the most of every single chance I get to go somewhere new. Quality over quantity, I suppose.", ideas: ["Frequency", "Attitude"], grammar: "'make the most of' — collocation.", vocab: ["make the most of", "quality over quantity"] },
        { q: "What is your favorite mode of transportation?", sample: "I really enjoy travelling by train. It's comfortable, you don't have to worry about traffic, and you get to watch the scenery roll by, which I find really relaxing. Compared to flying, it feels far more pleasant and stress-free to me.", ideas: ["Mode", "Why"], grammar: "'Compared to ...' for comparison.", vocab: ["scenery roll by", "stress-free"] },
        { q: "Do you prefer traveling alone or with others?", sample: "Mostly with others, I'd say. Sharing the experience with friends or family just makes the memories so much better, and there's always someone to laugh with when things go wrong. Travelling alone has its appeal too, but I prefer company.", ideas: ["Pick", "Why"], grammar: "'has its appeal' — useful phrase.", vocab: ["share the experience", "has its appeal"] },
        { q: "What is the most memorable trip you've taken?", sample: "Definitely my trip to Bukhara. The history and the atmosphere there left a really lasting impression on me, and I still think about it often. Walking through those ancient streets felt almost magical — it's a trip I'll never forget.", ideas: ["The trip", "Why memorable"], grammar: "'left a lasting impression on me'.", vocab: ["lasting impression", "atmosphere"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Place You Would Like to Visit in the Future",
      cue: ["Where it is", "Why you want to go there", "Who you would go with", "What you would do there"],
      sample: "A place I'd love to visit in the future is Switzerland.\n\nIt's a small country in the heart of Europe, famous for its breathtaking mountains, clean cities and beautiful lakes. The main reason I want to go is the scenery — I've seen so many photos of the Alps, and they look almost unreal.\n\nI'd love to go with my family, since I think they'd appreciate the peaceful nature just as much as I would. While we were there, I'd want to take a scenic train ride through the mountains, try local chocolate and just enjoy the fresh, crisp air. It's the kind of trip I'd remember for the rest of my life.",
      ideas: ["Location", "Why", "Who with", "Activities"],
      vocab: ["breathtaking", "scenic", "crisp air"]
    }
  },

  /* ---------------------------------------------------------------- DAY 29 */
  {
    day: 29,
    topic: "Music & A Concert",
    part1: {
      title: "Part 1: Music",
      questions: [
        { q: "Do you enjoy listening to music?", sample: "Definitely — I'd say music is the soundtrack to my whole day. I listen while studying, walking, and just about everywhere in between. It has this amazing power to instantly lift my mood or help me focus, depending on what I choose.", ideas: ["Yes/No", "When"], grammar: "'just about everywhere' — natural intensifier.", vocab: ["soundtrack", "lift my mood"] },
        { q: "What kind of music do you like?", sample: "I enjoy quite a wide range, to be honest, but soft pop and acoustic tracks are my favourites for everyday listening. When I need to feel more energetic, though, I'll put on something more upbeat. It really depends on what I'm in the mood for.", ideas: ["Genres", "When"], grammar: "'in the mood for' — collocation.", vocab: ["wide range", "acoustic", "upbeat"] },
        { q: "Do you prefer listening to music alone or with others?", sample: "Usually alone, with my headphones in. That way I can really get lost in the songs and properly appreciate the lyrics without any distractions. Listening with friends is fun for parties, but for everyday listening, I prefer my own little world.", ideas: ["Pick", "Why"], grammar: "'That way, ...' to show result.", vocab: ["get lost in", "appreciate the lyrics"] },
        { q: "Do you play any musical instruments?", sample: "Not yet, unfortunately, although learning the guitar is very high on my wish-list. I've always admired people who can just pick up an instrument and play, so it's definitely something I want to make time for in the future.", ideas: ["Yes/No", "Wish"], grammar: "'make time for' — collocation.", vocab: ["wish-list", "pick up an instrument"] },
        { q: "Has your taste in music changed over time?", sample: "Yes, quite a bit, actually. When I was younger I only liked loud, energetic songs, but now I find I appreciate calmer, more meaningful music too. I think my taste has gradually broadened as I've grown up, which I'm happy about.", ideas: ["Then vs now"], grammar: "'find I appreciate' — reporting a realisation.", vocab: ["appreciate", "broaden"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Concert or Music Event You Attended",
      cue: ["Where it took place", "What kind of music was played", "Who you went with", "How you felt about the experience"],
      sample: "I'd like to talk about a live music event I attended in an open-air venue in my city.\n\nIt took place on a warm summer evening, and the atmosphere was electric even before the show began. The performers played a mix of modern pop and traditional songs, which made it appealing to a really wide audience.\n\nI went with a group of close friends, which made the whole thing even more enjoyable — we sang along to almost every song. Honestly, I felt completely caught up in the moment; there's something magical about hearing music live with thousands of other people. Even now, whenever I hear one of those songs, it instantly takes me back to that wonderful night.",
      ideas: ["The venue", "The music", "Who with", "Your feelings"],
      vocab: ["electric atmosphere", "sing along", "caught up in the moment"]
    }
  },

  /* ---------------------------------------------------------------- DAY 30 */
  {
    day: 30,
    topic: "Movies & A Memorable Film",
    part1: {
      title: "Part 1: Movies",
      questions: [
        { q: "Do you like to watch movies?", sample: "Yes, I really do. Watching films is one of my favourite ways to relax and escape into another world for a couple of hours. After a stressful week, there's nothing better than getting comfortable and losing myself in a good story.", ideas: ["Yes/No", "Why"], grammar: "'there's nothing better than + -ing'.", vocab: ["escape", "lose myself in"] },
        { q: "How often do you go to the cinema?", sample: "Not very often these days, maybe just a few times a year, since I tend to watch most films at home now. I usually save the cinema for big blockbusters that are really worth seeing on the huge screen.", ideas: ["Frequency", "When"], grammar: "'save X for Y' — useful pattern.", vocab: ["these days", "blockbuster"] },
        { q: "What kind of movies do you enjoy the most?", sample: "I'm a real sucker for science fiction and thrillers — basically anything with a clever, surprising plot. I love films that keep me on the edge of my seat and make me think. A good plot twist that I never saw coming is the best.", ideas: ["Genre", "Why"], grammar: "'on the edge of my seat' — idiom.", vocab: ["a sucker for — really like", "plot twist"] },
        { q: "Do you prefer watching movies at home or at the cinema?", sample: "The cinema is definitely special for big, dramatic films because of the sound and the screen. For everyday viewing, though, I prefer the comfort of home, where I can pause whenever I want and relax on my own sofa. So it really depends on the film.", ideas: ["Pick", "Why"], grammar: "Concession with 'though'.", vocab: ["the comfort of home", "pause"] },
        { q: "Have you ever been to a film festival?", sample: "Not yet, unfortunately, but it's something I'd really love to do. It sounds like a fantastic way to discover unusual, independent films that you'd never normally come across. I'm definitely hoping to attend one at some point.", ideas: ["Yes/No", "Wish"], grammar: "'never normally come across' — natural phrasing.", vocab: ["discover", "come across"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Movie That Left a Strong Impression on You",
      cue: ["What the movie was about", "Who you watched it with", "Why it made a strong impression", "How it influenced you"],
      sample: "A film that left a really strong impression on me was 'The Pursuit of Happyness', starring Will Smith.\n\nIt's based on a true story about a struggling father who fights through homelessness and hardship to build a better life for himself and his young son. I watched it with my family one quiet evening, not expecting it to move me as much as it did.\n\nThe reason it made such an impression is its powerful message about perseverance — no matter how bad things get, you keep going. It genuinely influenced me, because whenever I feel like giving up on my own goals, I think back to that film and find the motivation to push on. Few movies have stayed with me the way that one has.",
      ideas: ["The plot", "Who with", "Why it struck you", "Its effect on you"],
      vocab: ["perseverance", "push on", "stay with me"]
    }
  },

  /* ---------------------------------------------------------------- DAY 31 */
  {
    day: 31,
    topic: "Holidays & A Technology You Like",
    part1: {
      title: "Part 1: Holidays and Celebrations",
      questions: [
        { q: "What is your favorite holiday?", sample: "My favourite is Navruz, which is our spring new-year festival. I love it because it's so colourful and joyful, and it's all about fresh starts and new beginnings. The whole atmosphere just feels full of hope and positivity, which I really enjoy.", ideas: ["Holiday", "Why"], grammar: "'which is ...' to add a definition.", vocab: ["new beginnings", "atmosphere"] },
        { q: "How do you usually celebrate special occasions?", sample: "Usually with a big family gathering, lots of traditional food, and plenty of laughter. For us, the most important part is simply being together with everyone we love. We tend to keep things warm and relaxed rather than overly formal.", ideas: ["How", "What matters"], grammar: "'rather than + adjective'.", vocab: ["gathering", "warm and relaxed"] },
        { q: "Is there a holiday that is particularly important in your country?", sample: "Navruz is hugely important here. It marks the arrival of spring and really brings whole communities together — neighbours cook together, share meals, and celebrate as one. I think that strong sense of togetherness is what makes it so special.", ideas: ["Holiday", "Significance"], grammar: "'bring together' — phrasal verb.", vocab: ["bring together", "a sense of togetherness"] },
        { q: "Do you think traditions around holidays are changing?", sample: "To some extent, yes. Technology has definitely changed how we celebrate — for instance, people now send greetings online instead of in person. Even so, I'd say the core values, like family and generosity, have stayed very much the same.", ideas: ["Yes/No", "How"], grammar: "'Even so, ...' for concession.", vocab: ["core values", "generosity"] },
        { q: "What kind of celebrations do you enjoy the most?", sample: "I really love big, lively celebrations where the whole family comes together. There's so much energy, food and laughter that they always end up being the most memorable for me. The bigger and warmer the gathering, the happier I am.", ideas: ["Type", "Why"], grammar: "'The bigger ..., the happier ...' — comparative pattern.", vocab: ["lively", "memorable"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Piece of Technology You Like",
      cue: ["What the technology is", "How you use it", "Why it is important to you"],
      sample: "A piece of technology I genuinely couldn't do without is my smartphone.\n\nI use it for almost everything — studying with language apps, staying in touch with family, taking photos, navigating around the city, and even relaxing with music and videos. It's like having a tiny, powerful computer in my pocket at all times.\n\nIt's important to me mainly because it keeps me connected and organised. My notes, my schedule and my study materials are all in one place, so I never feel lost. Of course, I try not to overuse it, but used wisely, it makes my daily life so much easier and more productive. Honestly, it's hard to imagine modern life without it.",
      ideas: ["The device", "How you use it", "Why it matters"],
      vocab: ["stay in touch", "navigate", "used wisely"]
    }
  },

  /* ---------------------------------------------------------------- DAY 32 */
  {
    day: 32,
    topic: "Technology & A Place You Enjoy Visiting",
    part1: {
      title: "Part 1: Technology",
      questions: [
        { q: "What is your favorite technology?", sample: "It's probably the smartphone, honestly. What I love about it is how it combines so many useful tools — a phone, a camera, a map, a computer — into one small device. The fact that it can do almost anything still genuinely impresses me.", ideas: ["Tech", "Why"], grammar: "'What I love about it is how ...'.", vocab: ["combine", "genuinely"] },
        { q: "Do you use a phone or a computer more?", sample: "I use my phone more for quick, everyday tasks like messaging and checking things on the go. When it comes to serious studying or writing, though, I always switch to my laptop because it's far more comfortable for longer work.", ideas: ["Which", "When"], grammar: "'When it comes to ...' to introduce a topic.", vocab: ["on the go", "switch to"] },
        { q: "How does technology help you every day?", sample: "It helps me in so many ways — learning, communicating, and staying organised, to name just a few. Honestly, I'd really struggle to manage my studies and daily schedule without it. It's become an essential part of how I get things done.", ideas: ["Benefits"], grammar: "'to name just a few' — useful phrase.", vocab: ["stay organised", "get things done"] },
        { q: "Do you like learning about new technology?", sample: "Yes, I find it genuinely exciting. It's fascinating to see how quickly things are advancing and to imagine what might be possible in the future. I'm always curious to find out what the next big innovation is going to be.", ideas: ["Yes/No", "Why"], grammar: "'It's fascinating to see ...'.", vocab: ["advancing", "innovation"] },
        { q: "What is one piece of technology you want to try?", sample: "I'd really love to try a VR headset properly. The idea of fully immersive virtual reality — where you feel like you're actually somewhere else — sounds absolutely fascinating to me. I think it could completely change the way we learn and play.", ideas: ["The tech", "Why"], grammar: "'the way we learn and play' — natural phrasing.", vocab: ["immersive", "virtual reality"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Place You Enjoy Visiting",
      cue: ["Where is it", "What you do there", "Why you like it"],
      sample: "A place I always enjoy visiting is a large park not far from my home.\n\nIt's a wide, green space with walking paths, tall trees and a small lake in the middle. Whenever I go, I usually take a slow walk, sit on a bench with a book, or simply watch people and enjoy the fresh air.\n\nThe reason I like it so much is that it's a perfect escape from the noise and stress of the city. After a busy week of studying, half an hour there completely resets my mood. It costs nothing, it's good for my health, and it always leaves me feeling calmer and more focused. That's exactly why I keep going back.",
      ideas: ["Location/description", "What you do", "Why you love it"],
      vocab: ["green space", "escape", "reset my mood"]
    }
  },

  /* ---------------------------------------------------------------- DAY 33 */
  {
    day: 33,
    topic: "Environment & A Trip You Enjoyed",
    part1: {
      title: "Part 1: Environment",
      questions: [
        { q: "Do you like spending time in nature?", sample: "I love it, honestly. Being out in nature instantly clears my mind and lowers my stress levels in a way that nothing else really does. After spending a lot of time indoors, getting outside always leaves me feeling refreshed and recharged.", ideas: ["Yes/No", "Why"], grammar: "'in a way that nothing else does' — emphasis.", vocab: ["clear my mind", "refreshed"] },
        { q: "What is your favorite outdoor place?", sample: "Definitely the mountains. The views up there are absolutely stunning, and the air feels so fresh and clean compared to the city. There's a real sense of peace you get from being surrounded by nature like that, which I find hard to beat.", ideas: ["Place", "Why"], grammar: "'compared to ...' for comparison.", vocab: ["stunning views", "a sense of peace"] },
        { q: "How can people protect the environment?", sample: "I think small steps really do add up. Things like recycling, cutting down on single-use plastic, and using public transport instead of driving can all make a genuine difference. If everyone did just a little, the overall impact would be huge.", ideas: ["Actions"], grammar: "'If everyone did ..., the impact would ...' — conditional.", vocab: ["cut down on", "make a difference"] },
        { q: "Do you think it's important to plant trees?", sample: "Absolutely, I'd say it's essential. Trees clean our air, provide shade, and support all kinds of wildlife, so they're genuinely vital for the planet. With so much pollution around these days, planting more trees feels more important than ever.", ideas: ["Yes/No", "Why"], grammar: "'more ... than ever' — comparative.", vocab: ["essential", "vital", "pollution"] },
        { q: "What do you do to keep the environment clean?", sample: "On a personal level, I always make sure to dispose of my rubbish properly and I try to recycle whenever I can. I've also been making an effort to avoid single-use plastics. They're small habits, but I believe they all count.", ideas: ["Your habits"], grammar: "'make an effort to ...'.", vocab: ["dispose of", "single-use plastics", "they all count"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Trip You Enjoyed",
      cue: ["Where did you go", "Who did you go with", "Why did you enjoy it"],
      sample: "A trip I really enjoyed was a weekend visit to the mountains last summer.\n\nI went with a small group of close friends, and we'd been planning it for weeks. We hiked during the day, cooked simple meals together in the evening, and spent the nights chatting under an incredible sky full of stars.\n\nThe reason I enjoyed it so much was the perfect combination of beautiful nature and great company. Being completely cut off from the city — no traffic, no noise — was exactly what I needed. By the time we came back, I felt refreshed and recharged. It's the kind of trip that reminds you how important it is to switch off every now and then.",
      ideas: ["Where", "Who with", "Why you enjoyed it"],
      vocab: ["cut off from", "refreshed", "switch off"]
    }
  },

  /* ---------------------------------------------------------------- DAY 34 */
  {
    day: 34,
    topic: "Health & A Sport/Activity",
    part1: {
      title: "Part 1: Health",
      questions: [
        { q: "Do you try to stay healthy?", sample: "I do my best, yes. I try to eat reasonably well, stay fairly active, and get enough sleep, although I'll admit there's always room for improvement. I think being consistent is more realistic than aiming for perfection all the time.", ideas: ["Yes/No", "How"], grammar: "'there's always room for improvement'.", vocab: ["room for improvement", "consistent"] },
        { q: "What do you do to keep fit?", sample: "Nothing too intense, honestly. I go for regular walks and do some simple home workouts a few times a week. I've found that sticking to easy, manageable exercise is much more sustainable for me than pushing myself too hard and giving up.", ideas: ["Activities"], grammar: "'much more ... than + -ing' — comparison.", vocab: ["home workouts", "sustainable"] },
        { q: "Do you think eating healthy food is important?", sample: "Absolutely, I think it's hugely important. What you eat directly affects your energy, your mood, and your long-term health, so it really does matter. I try to eat well most of the time, while still allowing myself the occasional treat.", ideas: ["Yes/No", "Why"], grammar: "'while still + -ing' for balance.", vocab: ["long-term health", "the occasional treat"] },
        { q: "How often do you exercise?", sample: "I'd say around three or four times a week, usually light exercise that fits easily into my daily routine. I find that little and often works far better for me than one exhausting session that leaves me dreading the next one.", ideas: ["Frequency"], grammar: "'little and often' — fixed phrase.", vocab: ["fit into my routine", "dread"] },
        { q: "What advice would you give someone to stay healthy?", sample: "I'd say start small and build up gradually. Simple things like drinking more water and moving a little every day make a real difference over time. The key is not to aim for perfection straight away, because that usually leads to giving up.", ideas: ["Advice"], grammar: "'The key is not to ...' — advice structure.", vocab: ["start small", "build up", "aim for perfection"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Sport or Activity You Enjoy",
      cue: ["What is the activity", "How often you do it", "Why you enjoy it"],
      sample: "An activity I really enjoy is walking, particularly long walks outdoors.\n\nI try to do it almost every day, usually in the early evening once I've finished studying. Sometimes I go alone to clear my head, and other times I bring a friend along for a chat.\n\nThe reason I enjoy it so much is that it's simple yet incredibly beneficial. It keeps me physically active without feeling like a hard workout, and it does wonders for my mental health too. After a long, stressful day, a good walk completely resets my mood. It's free, it's easy, and honestly it's become one of the healthiest habits in my life.",
      ideas: ["The activity", "How often", "Why you enjoy it"],
      vocab: ["clear my head", "do wonders for", "reset my mood"]
    }
  },

  /* ---------------------------------------------------------------- DAY 35 */
  {
    day: 35,
    topic: "Education & A Teacher",
    part1: {
      title: "Part 1: Education",
      questions: [
        { q: "Do you enjoy learning new things?", sample: "I genuinely do. There's a real sense of satisfaction in finally understanding something you didn't know before. I'm quite a curious person by nature, so I'm always keen to pick up new skills and ideas whenever I can.", ideas: ["Yes/No", "Why"], grammar: "'by nature' — natural phrase.", vocab: ["a sense of satisfaction", "pick up"] },
        { q: "What is your favorite subject?", sample: "I've always loved history the most. I find it fascinating because it helps me understand how today's world came to be, and there are so many incredible stories behind it. It feels more like listening to stories than studying, which I love.", ideas: ["Subject", "Why"], grammar: "'came to be' — natural phrase.", vocab: ["fascinating", "came to be"] },
        { q: "Do you think school is important? Why?", sample: "Definitely, and not just for the academic side. Beyond facts and figures, school teaches you discipline, social skills, and how to think for yourself — all of which are absolutely vital for life. I think those lessons matter just as much as the subjects.", ideas: ["Yes/No", "Why"], grammar: "'not just ... but ...' to extend.", vocab: ["discipline", "vital", "think for yourself"] },
        { q: "How do you like to study: alone or in a group?", sample: "It really depends on the task, to be honest. I prefer studying alone when I need to concentrate properly, but group study is great for discussing tricky ideas and hearing other points of view. So I try to combine both.", ideas: ["Pick / depends", "Why"], grammar: "'It depends on ...' — hedging.", vocab: ["tricky ideas", "points of view"] },
        { q: "What would you like to learn in the future?", sample: "I'd love to learn a third language one day — maybe Spanish — just for the sheer joy of it. I think being able to communicate with even more people would be incredibly rewarding, and learning languages is something I genuinely enjoy.", ideas: ["What", "Why"], grammar: "'for the sheer joy of it' — emphasis.", vocab: ["for the joy of it", "rewarding"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Teacher Who Inspired You",
      cue: ["Who is the teacher", "What did they teach you", "Why you remember them"],
      sample: "I'd like to talk about my English teacher from secondary school, who inspired me more than anyone else.\n\nShe taught English, but really she taught us so much more than grammar and vocabulary. She had this gift of making every lesson feel exciting, and she truly believed that every single student was capable of succeeding.\n\nThe reason I remember her so vividly is that she never gave up on me, even when I doubted myself. She pushed me to speak up, praised my progress and made me fall in love with the language. Honestly, a big part of the reason I'm working so hard on my English today is because of her. A great teacher can change the whole direction of your life, and she certainly changed mine.",
      ideas: ["Who", "What they taught", "Why they're memorable"],
      vocab: ["have a gift for", "never give up on", "speak up"]
    }
  },

  /* ---------------------------------------------------------------- DAY 36 */
  {
    day: 36,
    topic: "Traveling & A Happy Time",
    part1: {
      title: "Part 1: Traveling",
      questions: [
        { q: "Do you like traveling?", sample: "I really do — I'd say exploring new places is one of the most enriching things in life for me. Every trip teaches me something new, whether it's about a different culture or even about myself. I always come back feeling inspired.", ideas: ["Yes/No", "Why"], grammar: "'whether it's ... or ...' for options.", vocab: ["enriching", "inspired"] },
        { q: "What kind of places do you like to visit?", sample: "I'm especially drawn to historical cities, because I love learning about the past and seeing old architecture up close. That said, I also enjoy peaceful natural spots when I want to relax and escape the noise of everyday life.", ideas: ["Type", "Why"], grammar: "Concession with 'That said, ...'.", vocab: ["drawn to", "up close"] },
        { q: "How often do you travel?", sample: "Mainly during the holidays, so just a few times a year, unfortunately. Because the chances are fairly rare, though, I genuinely cherish every single trip and try to soak up as much of the experience as I possibly can.", ideas: ["Frequency", "Attitude"], grammar: "'soak up' — phrasal verb.", vocab: ["cherish", "soak up"] },
        { q: "Do you prefer to travel alone or with others?", sample: "With others, usually. For me, shared experiences just feel far more meaningful and fun — having someone to laugh with and remember it all afterwards makes a big difference. Travelling solo can be freeing, but I prefer good company.", ideas: ["Pick", "Why"], grammar: "'makes a big difference' — collocation.", vocab: ["meaningful", "freeing"] },
        { q: "What is your favorite means of transport when you travel?", sample: "I really love travelling by train. It's comfortable and relaxing, and you get to enjoy the scenery the whole way, which you simply can't do on a plane. There's something quite peaceful about watching the world go by from a train window.", ideas: ["Mode", "Why"], grammar: "'which you simply can't do ...' — relative clause.", vocab: ["scenic", "the world go by"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Time When You Felt Happy",
      cue: ["When it happened", "Where you were", "What you did", "Why you felt happy"],
      sample: "One time I felt truly happy was the day I got my IELTS results, just a few months ago.\n\nI was at home with my family when the email arrived. My hands were actually shaking as I opened it, and when I saw I'd reached the score I needed, the whole room erupted with joy.\n\nWe spent the rest of the day celebrating — my mother cooked my favourite meal, and we just laughed and talked for hours. The reason I felt so incredibly happy wasn't only the score itself; it was knowing that months of hard work and sacrifice had finally paid off. It's a feeling of pure relief and pride that I'll never forget.",
      ideas: ["When", "Where", "What you did", "Why happy"],
      vocab: ["erupt with joy", "pay off", "relief and pride"]
    }
  },

  /* ---------------------------------------------------------------- DAY 37 */
  {
    day: 37,
    topic: "Holidays & A Memorable Journey",
    part1: {
      title: "Part 1: Holidays",
      questions: [
        { q: "Do you like going on holidays?", sample: "I absolutely love holidays. For me, they're the perfect chance to relax, recharge, and step away from my usual routine for a while. After a long stretch of studying, a good holiday is exactly what I need to come back feeling fresh.", ideas: ["Yes/No", "Why"], grammar: "'step away from ...' — phrasal verb.", vocab: ["recharge", "a long stretch of"] },
        { q: "How often do you go on vacation?", sample: "Usually once or twice a year, mostly during the longer holidays when I actually have free time. It's not as often as I'd like, but I always try to make those trips really count and plan them well in advance.", ideas: ["Frequency"], grammar: "'make ... count' — useful phrase.", vocab: ["long holidays", "in advance"] },
        { q: "What do you usually do during your holidays?", sample: "I like a good mix of resting at home and exploring somewhere new — basically a balance of relaxation and adventure. Some days I'll just recharge completely, while on others I'll be out and about seeing the sights. Variety is what I enjoy most.", ideas: ["Activities"], grammar: "'a balance of X and Y'.", vocab: ["out and about", "see the sights"] },
        { q: "Do you prefer to spend holidays in your country or abroad?", sample: "I genuinely enjoy both, but if I'm honest, travelling abroad excites me a bit more. There's just something thrilling about experiencing completely new cultures, languages, and food. Still, there are so many beautiful places in my own country worth seeing too.", ideas: ["Pick", "Why"], grammar: "'if I'm honest, ...' — natural hedge.", vocab: ["new cultures", "thrilling"] },
        { q: "What was your best holiday experience?", sample: "Definitely a trip to the mountains with my friends. The breathtaking scenery combined with the great company made it absolutely unforgettable. We laughed the whole time, and even now we still talk about it, which says a lot about how special it was.", ideas: ["The trip", "Why"], grammar: "'which says a lot about ...' — adding emphasis.", vocab: ["unforgettable", "says a lot about"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Memorable Journey You Had",
      cue: ["Where you went", "How you travelled", "What happened during the journey", "Why it was memorable"],
      sample: "A journey that really stands out in my memory was a long road trip I took with my family to another region of the country.\n\nWe travelled by car, and the drive itself took most of the day. Along the way, we stopped at little roadside spots, took countless photos, and sang along to music to pass the time. At one point, we even got slightly lost, but that turned into one of the funniest parts of the whole trip.\n\nWhat made it so memorable wasn't really the destination — it was everything that happened on the way. The laughter, the unexpected detours and the quality time with my family turned an ordinary journey into something I'll always treasure. It reminded me that sometimes the journey matters more than the destination.",
      ideas: ["Where", "How you travelled", "What happened", "Why memorable"],
      vocab: ["stand out", "pass the time", "detour"]
    }
  },

  /* ---------------------------------------------------------------- DAY 38 */
  {
    day: 38,
    topic: "Weather & A Place to Visit",
    part1: {
      title: "Part 1: Weather",
      questions: [
        { q: "What kind of weather do you like the most?", sample: "I love mild, sunny weather more than anything. It's warm enough to enjoy being outside, but not so hot that it becomes uncomfortable. On days like that, I feel far more cheerful and motivated to actually get out and do something.", ideas: ["Weather", "Why"], grammar: "'warm enough to ... but not so hot that ...'.", vocab: ["mild", "cheerful", "motivated"] },
        { q: "Does the weather affect your mood?", sample: "Quite a lot, actually, more than I'd like to admit. Bright, sunny days really lift my mood and give me energy, whereas long stretches of grey skies tend to make me feel a bit low and sluggish. The sun definitely makes a difference for me.", ideas: ["Yes/No", "How"], grammar: "'more than I'd like to admit' — natural aside.", vocab: ["lift my mood", "sluggish"] },
        { q: "What is the weather usually like in your country?", sample: "We tend to have hot, dry summers and fairly cold winters, so there's quite a sharp contrast between the seasons. Spring and autumn are probably the most pleasant, with that comfortable in-between weather that I personally enjoy the most.", ideas: ["Description"], grammar: "'so there's quite a contrast' — result.", vocab: ["contrast", "in-between"] },
        { q: "Have you ever experienced extreme weather conditions?", sample: "Yes, we sometimes get extremely hot summer days where the temperature really soars. On days like that, even simple tasks can feel exhausting, and you just want to stay indoors with the air conditioning on. It can be pretty draining.", ideas: ["Yes/No", "Example"], grammar: "'where the temperature soars' — relative clause.", vocab: ["soar", "exhausting", "draining"] },
        { q: "Do you prefer hot weather or cold weather?", sample: "I'd choose cool weather over heat any day, to be honest. The way I see it, you can always warm yourself up with extra layers when it's cold, but there's only so much you can do to escape the heat. So cooler weather feels far more bearable.", ideas: ["Pick", "Why"], grammar: "'there's only so much you can do' — idiom.", vocab: ["warm up", "layers", "bearable"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Place You Would Like to Visit in the Future",
      cue: ["Where it is", "Why you want to visit it", "What you know about the place", "What you would like to do there"],
      sample: "A place I'd really love to visit in the future is Japan.\n\nIt's an island country in East Asia, and I want to go mainly because of its fascinating mix of ancient tradition and cutting-edge technology. From what I know, it's famous for its politeness, incredible food, beautiful temples and the stunning cherry blossoms in spring.\n\nIf I ever got the chance, I'd love to explore both the busy streets of Tokyo and the calmer, more traditional city of Kyoto. I'd want to try authentic sushi, ride the famous bullet train and experience the culture first-hand. It's been my dream destination for years, and I'm determined to get there one day.",
      ideas: ["Location", "Why", "What you know", "What you'd do"],
      vocab: ["cutting-edge", "first-hand", "dream destination"]
    }
  },

  /* ---------------------------------------------------------------- DAY 39 */
  {
    day: 39,
    topic: "Hotels & A City You Enjoyed",
    part1: {
      title: "Part 1: Hotels",
      questions: [
        { q: "Do you like staying in hotels?", sample: "I do, actually. There's something really nice about being looked after for a few days and not having to worry about cooking or chores. It makes a holiday feel like a proper break, where you can just relax and be a guest.", ideas: ["Yes/No", "Why"], grammar: "'not having to ...' — gerund pattern.", vocab: ["looked after", "chores", "a proper break"] },
        { q: "What kind of hotels do you prefer?", sample: "I tend to prefer comfortable, mid-range hotels that are clean and well-located rather than overly luxurious ones. For me, a good location and a comfy bed matter far more than fancy extras I probably wouldn't even use anyway.", ideas: ["Type", "Why"], grammar: "'rather than ...' for contrast.", vocab: ["well-located", "mid-range", "fancy extras"] },
        { q: "Have you ever stayed in a luxury hotel?", sample: "Yes, once, for a special family occasion, and honestly it was a real treat. The service and the comfort were on a completely different level to what I was used to. It was lovely to experience, even if it's not something I could afford often.", ideas: ["Yes/No", "Experience"], grammar: "'on a different level to ...' — comparison.", vocab: ["a real treat", "on another level"] },
        { q: "What do you usually look for when choosing a hotel?", sample: "Cleanliness and location are definitely my top priorities. After that, I'll look at the reviews and the price to make sure I'm getting good value. As long as it's clean, comfortable and conveniently located, I'm generally happy.", ideas: ["Priorities"], grammar: "'As long as ...' — condition.", vocab: ["top priorities", "good value"] },
        { q: "Do you prefer hotels or homestays when you travel?", sample: "It really depends on the kind of trip, honestly. I'll go for a hotel when I want comfort and convenience, but I prefer a homestay when I want a more authentic, local experience. Each one suits a different sort of holiday for me.", ideas: ["Pick / depends", "Why"], grammar: "'It depends on ...' — hedging.", vocab: ["authentic", "convenience"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a City You Enjoyed Visiting",
      cue: ["What the city is", "When you visited it", "What you did there", "Why you enjoyed your visit"],
      sample: "A city I thoroughly enjoyed visiting is Bukhara, one of the oldest cities in my country.\n\nI went there a couple of years ago during a short holiday with my family. We spent our days wandering through the ancient old town, exploring centuries-old mosques and madrasas, and browsing the lively, colourful bazaars.\n\nWhat I enjoyed most was the incredible sense of history — walking those streets genuinely felt like travelling back in time. The architecture was breathtaking, the local people were warm and welcoming, and every corner seemed to have a story behind it. It left such a deep impression on me that I'm already planning to go back. Bukhara is, without doubt, one of the most beautiful places I've ever seen.",
      ideas: ["The city", "When", "What you did", "Why you enjoyed it"],
      vocab: ["centuries-old", "travel back in time", "leave an impression"]
    }
  },

  /* ---------------------------------------------------------------- DAY 40 */
  {
    day: 40,
    topic: "Air Travel & A Long Journey",
    part1: {
      title: "Part 1: Air Travel",
      questions: [
        { q: "Do you often travel by plane?", sample: "Not too often, to be honest — mainly just for longer trips abroad. But whenever I do fly, I always find it quite exciting. There's a real thrill in taking off and knowing you'll be in a completely different place in just a few hours.", ideas: ["Frequency", "Feeling"], grammar: "'whenever I do fly' — emphatic 'do'.", vocab: ["abroad", "take off", "a thrill"] },
        { q: "What do you like or dislike about flying?", sample: "What I love most is how fast it is, plus the amazing view of the clouds from above. What I'm not such a fan of, though, is all the waiting around at the airport — the check-in and security queues can be really tedious.", ideas: ["Like", "Dislike"], grammar: "'What I love is ... / What I'm not a fan of is ...'.", vocab: ["not a fan of", "tedious", "queues"] },
        { q: "What was the longest flight you have ever taken?", sample: "The longest was several hours to another country, and honestly it felt almost endless at times. Even so, the excitement of reaching my destination kept me going, and I passed the time by watching films and getting some sleep.", ideas: ["The flight", "How it felt"], grammar: "'Even so, ...' for concession.", vocab: ["felt endless", "pass the time"] },
        { q: "How do you usually spend your time during flights?", sample: "I usually try to keep myself busy so the time goes faster. I'll read a book, watch a film, or listen to some music, and if I'm tired, I'll just try to sleep through it. Anything to make a long flight feel shorter, really.", ideas: ["Activities"], grammar: "'so the time goes faster' — purpose clause.", vocab: ["keep myself busy", "sleep through it"] },
        { q: "Have you ever had any problems while travelling by air?", sample: "Yes, once my flight was delayed for several hours, which was honestly really frustrating. I just had to be patient and make the best of it by reading and grabbing a bite to eat. In the end it worked out fine, but it certainly tested my patience.", ideas: ["Yes/No", "What happened"], grammar: "'make the best of it' — idiom.", vocab: ["delayed", "make the best of it", "test my patience"] }
      ]
    },
    part2: {
      title: "Part 2: Describe a Long Journey You Took",
      cue: ["Where you went", "How you travelled", "What happened during the journey", "How you felt about it"],
      sample: "I'd like to describe a long journey I took to visit relatives in a distant part of the country.\n\nThe whole trip took almost an entire day, and I travelled by a combination of train and car. The train ride was the longest part, and to pass the time I read a book, listened to music and chatted with other passengers, some of whom were really friendly.\n\nAt one point the train was delayed, which was a bit frustrating, but I just stayed patient and enjoyed the changing scenery outside the window. By the time I finally arrived, I was exhausted but genuinely happy. Despite the tiredness, there was something rewarding about completing such a long journey, and being warmly welcomed at the end made every hour of it worthwhile.",
      ideas: ["Where", "How you travelled", "What happened", "How you felt"],
      vocab: ["pass the time", "changing scenery", "worthwhile"]
    }
  }
];

/* Expose the data to the app (works when opened directly or via a server). */
if (typeof window !== "undefined") {
  window.SPEAKING_DATA = SPEAKING_DATA;
}
