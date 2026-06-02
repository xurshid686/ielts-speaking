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
          sample: "I'm originally from Samarkand, which is one of the oldest cities in Central Asia. It's famous for its stunning Islamic architecture, especially the Registan Square. It's not a huge city, so it has a fairly relaxed, friendly atmosphere, and that's exactly what I love about it.",
          ideas: ["Where it is + how big it is", "What it's famous for", "The atmosphere / what you like about it"],
          grammar: "Use 'which' to add extra detail: '...Samarkand, which is one of the oldest cities...'",
          vocab: ["stunning — extremely beautiful", "relaxed atmosphere", "renowned for / famous for"]
        },
        {
          q: "What is your favorite part of your home?",
          sample: "Without a doubt, it's the living room. It gets a lot of natural light during the day, and it's where my whole family gathers in the evenings to chat and watch films, so it has a really warm, cosy feeling.",
          ideas: ["Name the room", "Why — light, comfort, memories", "What you do there"],
          grammar: "Reason linking: 'It's where my family gathers, so it feels cosy.'",
          vocab: ["cosy — warm and comfortable", "natural light", "gather — come together"]
        },
        {
          q: "Which room in your house do you like the most?",
          sample: "I'd have to say my bedroom, simply because it's my personal space. I've decorated it exactly the way I like, with lots of books and posters, so it's the one place where I can completely relax and unwind after a long day.",
          ideas: ["Personal space", "How it's decorated", "How it makes you feel"],
          grammar: "Adding emphasis: 'I'd have to say...' softens and emphasises your choice.",
          vocab: ["unwind — relax", "personal space", "decorate"]
        },
        {
          q: "Is there anything you want to change about your home?",
          sample: "If I could change one thing, I'd love to have a bigger kitchen. The one we have now is quite small, so it gets a bit crowded when several of us are cooking at the same time.",
          ideas: ["Pick one realistic thing", "Explain the problem", "How the change would help"],
          grammar: "Second conditional: 'If I could change one thing, I'd love to...'",
          vocab: ["crowded — too many people in a space", "spacious — having lots of room"]
        },
        {
          q: "What kind of home would you like in the future?",
          sample: "In the future, I'd ideally like to live in a spacious house with a garden, somewhere a bit quieter on the outskirts of the city. Having some green space around me would be perfect for relaxing at the weekends.",
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
          sample: "My full name is Xurshid Aliqulov. Xurshid is my first name and Aliqulov is my family name.",
          ideas: ["Just state it clearly", "You can add first/family name"],
          grammar: "Simple present for facts: 'My full name is...'",
          vocab: ["first name", "family name / surname"]
        },
        {
          q: "Who picked your name?",
          sample: "I was told that my grandfather chose my name. Apparently it means 'the sun' or 'sunlight', and he liked the idea that I would bring brightness to the family.",
          ideas: ["Who chose it", "What it means", "Why they chose it"],
          grammar: "Reported speech: 'I was told that...', 'Apparently...'",
          vocab: ["named after — given the same name as", "meaning", "apparently"]
        },
        {
          q: "Where are you from?",
          sample: "I'm from Uzbekistan, a country in Central Asia. More specifically, I grew up in Samarkand, which is in the eastern part of the country.",
          ideas: ["Country first", "Then the city/region"],
          grammar: "Zooming in: 'I'm from... More specifically, I grew up in...'",
          vocab: ["originally from", "grew up in"]
        },
        {
          q: "Do you work or study?",
          sample: "At the moment I'm a student. I'm preparing for the IELTS exam, and alongside that I'm studying at university, so most of my days are pretty busy.",
          ideas: ["Say which one", "Add a bit of detail", "How busy you are"],
          grammar: "Present continuous for current situation: 'I'm preparing for... I'm studying...'",
          vocab: ["alongside — at the same time as", "preparing for"]
        },
        {
          q: "Do you like your job/studies?",
          sample: "Yes, I genuinely enjoy my studies. It can be challenging at times, especially around exams, but I find it really rewarding because I can see myself improving every week.",
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
          sample: "I'm currently a university student, majoring in economics. On top of my degree, I'm also working hard on improving my English for the IELTS exam.",
          ideas: ["Subject or job title", "A bit of extra context"],
          grammar: "'major in' for your main subject: 'I'm majoring in economics.'",
          vocab: ["major in — study as your main subject", "degree"]
        },
        {
          q: "How long have you been doing it / studying it?",
          sample: "I've been studying economics for nearly two years now. Time has flown by, to be honest — it doesn't feel that long at all.",
          ideas: ["Give the length of time", "A quick comment on how it feels"],
          grammar: "Present perfect continuous: 'I've been studying... for two years.'",
          vocab: ["time has flown by — passed quickly"]
        },
        {
          q: "Why did you choose this job / field of study?",
          sample: "I chose economics because I've always been curious about how money and markets shape the world. I also felt it would open up a wide range of career options for me later on.",
          ideas: ["Personal interest", "Career prospects"],
          grammar: "Reason + result: 'I chose it because... I also felt it would...'",
          vocab: ["career prospects", "open up options", "curious about"]
        },
        {
          q: "What do you like about your job / studies?",
          sample: "What I enjoy most is that it's very practical — I can relate what I learn in lectures to real events in the news, which makes the whole subject come alive for me.",
          ideas: ["One specific thing you like", "Why it matters to you"],
          grammar: "'What I enjoy most is...' to highlight a point.",
          vocab: ["practical", "come alive", "relate to — connect with"]
        },
        {
          q: "Can you describe a typical day at work / school?",
          sample: "A typical day usually starts with morning lectures, then I head to the library to review my notes. In the afternoon I often study English, and I try to keep my evenings free to relax with family.",
          ideas: ["Morning routine", "Afternoon", "Evening"],
          grammar: "Sequencing words: 'starts with... then... after that... finally.'",
          vocab: ["head to — go to", "review notes", "keep free"]
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
          sample: "I live in Tashkent, the capital of Uzbekistan. My family and I have a place in a fairly central neighbourhood, so most things are within easy reach.",
          ideas: ["City + area", "Who you live with", "Convenience"],
          grammar: "'within easy reach' = close and convenient.",
          vocab: ["neighbourhood", "central", "within easy reach"]
        },
        {
          q: "Do you live in a house or an apartment?",
          sample: "We live in an apartment on the fifth floor. It's a comfortable size for our family, and I quite like being up high because we get a nice view over the city.",
          ideas: ["House or flat", "Size / floor", "One thing you like"],
          grammar: "'I quite like... because...' to give a reason.",
          vocab: ["apartment / flat", "spacious", "view over"]
        },
        {
          q: "What do you like about your home?",
          sample: "The thing I appreciate most is how light and airy it is. Big windows let in a lot of sunshine, which makes the whole place feel warm and welcoming.",
          ideas: ["A feature you love", "Why it matters"],
          grammar: "'The thing I appreciate most is...' for emphasis.",
          vocab: ["light and airy", "welcoming", "let in"]
        },
        {
          q: "Would you like to change anything about your home?",
          sample: "If I had the chance, I'd add a small balcony. It would be lovely to have somewhere to sit outside in the evenings and enjoy a cup of tea in the fresh air.",
          ideas: ["One change", "Why it would help"],
          grammar: "Second conditional: 'If I had the chance, I'd add...'",
          vocab: ["balcony", "fresh air"]
        },
        {
          q: "How is the transportation in your area?",
          sample: "Transport here is actually really convenient. There are buses and a metro line nearby, so I can get across the city without too much hassle, and it's quite affordable too.",
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
          sample: "In my free time I'm quite into reading and going for long walks. Both of them help me clear my head, especially after a busy week of studying.",
          ideas: ["One or two hobbies", "Why you do them"],
          grammar: "'I'm quite into...' = I really like (informal, natural).",
          vocab: ["clear my head — relax mentally", "be into — be keen on"]
        },
        {
          q: "How did you become interested in a hobby?",
          sample: "I first got into reading because of my mother — she always had a book in her hand when I was growing up, and her enthusiasm just rubbed off on me.",
          ideas: ["How it started", "Who/what influenced you"],
          grammar: "'rubbed off on me' = I picked up the habit from someone.",
          vocab: ["get into — start enjoying", "rub off on — influence"]
        },
        {
          q: "Is there any hobby you'd like to learn in the future?",
          sample: "I'd really love to learn how to play the guitar one day. I've always admired people who can pick up an instrument and just play, so it's definitely on my list.",
          ideas: ["A new hobby", "Why it appeals to you"],
          grammar: "'I'd love to learn...' for future wishes.",
          vocab: ["pick up an instrument", "on my list"]
        },
        {
          q: "Why is a hobby important to you?",
          sample: "For me, hobbies are important because they give me a sense of balance. Without something fun to switch off with, life would feel like nothing but work and study.",
          ideas: ["Balance / stress relief", "Personal growth"],
          grammar: "'Without ..., life would...' for hypothetical contrast.",
          vocab: ["sense of balance", "switch off — stop thinking about work"]
        },
        {
          q: "Do you prefer indoor or outdoor activities?",
          sample: "It really depends on my mood, but if I had to choose, I'd lean towards outdoor activities. Being out in the fresh air just makes me feel more energetic and alive.",
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
        { q: "What is your daily routine like?", sample: "My days are fairly structured. I usually start early, study in the morning when my mind is freshest, and keep the evenings for relaxing.", ideas: ["Morning / afternoon / evening", "How structured it is"], vocab: ["structured", "freshest"] },
        { q: "What time do you usually get up?", sample: "I'm an early riser, so I'm normally up by around six. I find I get a lot more done when I start the day early.", ideas: ["The time", "Why / how it helps"], vocab: ["early riser", "get done"] },
        { q: "What do you typically do in the evenings?", sample: "Evenings are my downtime. I usually have dinner with my family, then either read or watch something to unwind before bed.", ideas: ["Relaxing activities", "Family time"], vocab: ["downtime", "unwind"] },
        { q: "Is there anything you would like to change in your daily routine?", sample: "I'd love to fit in some regular exercise. At the moment my schedule is so packed that I keep putting it off.", ideas: ["One change", "Why it's hard now"], vocab: ["fit in", "put off — postpone"] },
        { q: "How do you usually spend your weekends?", sample: "Weekends are much more relaxed. I catch up on sleep, meet friends, and try to spend quality time with my family.", ideas: ["Rest", "Social time"], vocab: ["catch up on sleep", "quality time"] }
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
        { q: "What is your favorite type of food?", sample: "I'm a big fan of traditional Uzbek food, especially plov — it's a rich rice dish cooked with meat, carrots and spices, and it's an absolute classic here.", ideas: ["The cuisine/dish", "What's in it"], vocab: ["a big fan of", "rich — full of flavour"] },
        { q: "Do you enjoy cooking?", sample: "I do, although I'm still learning. I find cooking quite therapeutic — it's a nice way to switch off after studying all day.", ideas: ["Yes/No + skill level", "How it makes you feel"], vocab: ["therapeutic — relaxing", "switch off"] },
        { q: "What dish do you like to cook the most?", sample: "I'm probably best at making a simple pasta dish. It's quick, it's hard to get wrong, and everyone seems to enjoy it.", ideas: ["A dish", "Why that one"], vocab: ["hard to get wrong"] },
        { q: "Do you prefer eating out or cooking at home?", sample: "Most of the time I prefer eating at home — it's healthier and cheaper — but I do enjoy eating out now and then as a treat.", ideas: ["Pick one", "A reason for each"], vocab: ["as a treat", "now and then"] },
        { q: "Are there any traditional dishes in your culture?", sample: "Absolutely. Besides plov, we have dishes like shashlik and samsa, and they're a huge part of celebrations and family gatherings.", ideas: ["Name a few", "When they're eaten"], vocab: ["gatherings", "a huge part of"] }
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
        { q: "How many people are there in your family?", sample: "There are five of us in my immediate family — my parents, my two siblings and me. We're a fairly close-knit group.", ideas: ["The number", "Who they are"], vocab: ["immediate family", "close-knit — emotionally close"] },
        { q: "Do you have any siblings?", sample: "Yes, I have an older brother and a younger sister, so I'm right in the middle, which has its ups and downs.", ideas: ["Yes/No", "Order / relationship"], vocab: ["siblings", "ups and downs"] },
        { q: "Who is the oldest member of your family?", sample: "That would be my grandmother. She's in her late seventies, and she's still incredibly sharp and full of stories.", ideas: ["Who", "A detail about them"], vocab: ["sharp — mentally quick"] },
        { q: "Do you spend a lot of time with your family?", sample: "I try to, yes. Even though everyone's busy, we make a point of having dinner together most evenings.", ideas: ["How much", "When you meet"], vocab: ["make a point of — do deliberately"] },
        { q: "What do you like to do together?", sample: "We love sharing meals and chatting, and at the weekends we sometimes go for a drive or visit relatives together.", ideas: ["Shared activities"], vocab: ["go for a drive", "relatives"] }
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
        { q: "Do you enjoy traveling?", sample: "I absolutely love it. There's nothing quite like experiencing a new place, trying different food and meeting people from other cultures.", ideas: ["Yes/No", "What you love about it"], vocab: ["there's nothing quite like"] },
        { q: "What is the most interesting place you've visited?", sample: "Probably Bukhara — the history there is incredible, and walking through the old streets felt like stepping back in time.", ideas: ["A place", "Why interesting"], vocab: ["step back in time"] },
        { q: "Would you like to travel more in the future?", sample: "Definitely. I'd love to explore more of the world, especially countries in Europe and East Asia.", ideas: ["Yes/No", "Where"], vocab: ["explore"] },
        { q: "What type of places do you like to visit?", sample: "I'm drawn to historical cities more than beach resorts. I find old architecture and local culture far more fascinating.", ideas: ["Type of place", "Why"], vocab: ["drawn to — attracted to"] },
        { q: "Is there a destination you would like to visit soon?", sample: "Turkey is high on my list at the moment — Istanbul in particular looks like the perfect mix of history and modern life.", ideas: ["A destination", "Why soon"], vocab: ["high on my list"] }
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
        { q: "Do you have many friends?", sample: "I wouldn't say I have a huge number, but I have a small circle of really close friends, and honestly I prefer quality over quantity.", ideas: ["How many", "Quality vs quantity"], vocab: ["a close circle", "quality over quantity"] },
        { q: "How do you usually spend time with your friends?", sample: "We usually grab a coffee, go for walks, or sometimes just stay in and play games. Nothing fancy, but always good fun.", ideas: ["Activities"], vocab: ["grab a coffee", "stay in"] },
        { q: "What qualities do you value in a friend?", sample: "Above all, I value honesty and loyalty. I want friends I can trust completely and who'll stand by me when things get tough.", ideas: ["Key qualities", "Why"], vocab: ["loyalty", "stand by — support"] },
        { q: "Is it important to make new friends as an adult?", sample: "I think it really is. As we grow, our interests change, and making new friends keeps life fresh and broadens your perspective.", ideas: ["Yes/No", "Why"], vocab: ["broaden your perspective"] },
        { q: "What makes a good friend?", sample: "A good friend is someone who listens without judging and is there for you in both good times and bad.", ideas: ["Define it", "An example"], vocab: ["without judging", "through thick and thin"] }
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
        { q: "What do you usually do in the morning?", sample: "I like to start slowly — a glass of water, a bit of stretching, and then I dive into my most important study tasks while I'm fresh.", ideas: ["Routine", "Why that order"], vocab: ["dive into"] },
        { q: "How do you spend your evenings?", sample: "Evenings are for winding down. I'll have dinner with my family and usually read or watch something light before bed.", ideas: ["Activities"], vocab: ["wind down"] },
        { q: "Do you have a favorite time of day?", sample: "Early morning, without a doubt. It's quiet, peaceful, and I feel like I can think most clearly then.", ideas: ["Time + why"], vocab: ["peaceful"] },
        { q: "Is there a specific routine you follow before bedtime?", sample: "I always try to read for twenty minutes and avoid my phone — it helps me switch off and sleep much better.", ideas: ["A habit", "Why"], vocab: ["switch off"] },
        { q: "What do you like to do on weekends?", sample: "Weekends are flexible. I catch up on rest, meet friends, and tackle little jobs I didn't have time for during the week.", ideas: ["Mix of activities"], vocab: ["tackle — deal with"] }
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
        { q: "What do you like to do in your free time?", sample: "I usually read, go for walks or catch up with friends — simple things that help me recharge.", ideas: ["Hobbies"], vocab: ["recharge"] },
        { q: "How often do you have free time?", sample: "Not as often as I'd like, to be honest. Between studying and other commitments, my free time is mostly limited to weekends.", ideas: ["How much", "Why limited"], vocab: ["commitments"] },
        { q: "Do you prefer spending your free time alone or with others?", sample: "It depends on my mood — sometimes I need quiet time alone to recharge, but other times nothing beats good company.", ideas: ["Pick / depends", "Why"], vocab: ["nothing beats", "good company"] },
        { q: "Is there a specific place you like to go to when you have free time?", sample: "I love going to a nearby park. Being surrounded by greenery instantly puts me in a better mood.", ideas: ["A place", "Why"], vocab: ["greenery"] },
        { q: "What activities help you relax?", sample: "Reading and listening to calm music are my go-to ways to relax. They help me clear my mind completely.", ideas: ["Activities"], vocab: ["go-to", "clear my mind"] }
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
        { q: "Do you like shopping?", sample: "I have mixed feelings about it. I enjoy shopping for books or gadgets, but clothes shopping can drive me up the wall.", ideas: ["Yes/No/mixed", "What you like or not"], vocab: ["mixed feelings", "drive me up the wall — annoy me"] },
        { q: "Where do you usually go shopping?", sample: "For everyday things I head to a local market, but for bigger purchases I usually go to a shopping mall in the city centre.", ideas: ["Places", "What for"], vocab: ["everyday things", "purchases"] },
        { q: "What kinds of things do you like to buy?", sample: "I tend to spend my money on books and the occasional piece of tech — things I'll get a lot of use out of.", ideas: ["Items", "Why"], vocab: ["get use out of"] },
        { q: "Do you prefer shopping alone or with others?", sample: "Mostly alone, actually. I can take my time and make decisions without feeling rushed.", ideas: ["Pick one", "Why"], vocab: ["take my time", "feel rushed"] },
        { q: "Are there any items you don't enjoy shopping for?", sample: "Definitely clothes. I find it tiring trying on lots of things, so I usually just get in and out as fast as I can.", ideas: ["An item", "Why"], vocab: ["try on", "get in and out"] }
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
        { q: "Do you enjoy listening to music?", sample: "Absolutely — music is part of my daily life. I listen while studying, walking, almost everywhere.", ideas: ["Yes/No", "When"], vocab: ["part of daily life"] },
        { q: "What type of music do you like?", sample: "I have quite a broad taste, but I'm especially fond of calm, acoustic music when I need to focus.", ideas: ["Genres", "When"], vocab: ["broad taste", "acoustic"] },
        { q: "Do you like watching movies?", sample: "I do, though I'm a bit picky. I'd rather watch one great film than several average ones.", ideas: ["Yes/No", "Preference"], vocab: ["picky — selective"] },
        { q: "What genre of movies do you prefer?", sample: "I'm drawn to science fiction and thrillers — anything that keeps me guessing and makes me think.", ideas: ["Genre", "Why"], vocab: ["keep me guessing"] },
        { q: "Is there a specific artist or actor you admire?", sample: "I really admire Leonardo DiCaprio — he completely disappears into every role he plays.", ideas: ["Who", "Why"], vocab: ["disappear into a role"] }
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
        { q: "What is your favorite season? Why do you like it?", sample: "Autumn is my favourite by far. The weather is cool and comfortable, and the golden leaves make everything look beautiful.", ideas: ["Season", "Why"], vocab: ["golden leaves", "by far"] },
        { q: "What type of weather do you enjoy the most?", sample: "I love mild, sunny days — warm enough to be outside but not so hot that it's uncomfortable.", ideas: ["Weather", "Why"], vocab: ["mild"] },
        { q: "Are there any activities you prefer during specific seasons?", sample: "In summer I love swimming and being outdoors, whereas in winter I prefer cosy indoor activities like reading.", ideas: ["Seasonal activities"], vocab: ["whereas", "cosy"] },
        { q: "How does the weather affect your daily routine?", sample: "Quite a lot, actually. On sunny days I'm motivated to go out, but grey, rainy weather makes me want to stay in and relax.", ideas: ["Effect on mood/plans"], vocab: ["motivated", "stay in"] },
        { q: "Do you prefer hot or cold weather?", sample: "If I had to choose, I'd pick cool weather. You can always add a layer if you're cold, but there's only so much you can do in the heat.", ideas: ["Pick one", "Reason"], vocab: ["add a layer"] }
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
        { q: "What are your favorite hobbies in your free time?", sample: "Reading and walking are my two main ones — both relaxing and good for the mind.", ideas: ["Hobbies"], vocab: ["good for the mind"] },
        { q: "Have you recently started a new hobby or activity?", sample: "Yes, I've recently started journaling, and it's been a surprisingly nice way to reflect on my day.", ideas: ["New hobby", "How it's going"], vocab: ["journaling", "reflect on"] },
        { q: "How do you usually relax after a day of work or study?", sample: "I unwind with a good book or some calm music. It helps me leave the day's stress behind.", ideas: ["How you relax"], vocab: ["unwind"] },
        { q: "Do you prefer indoor or outdoor activities?", sample: "I lean towards outdoor activities — fresh air and a change of scenery always lift my spirits.", ideas: ["Pick one", "Why"], vocab: ["change of scenery", "lift my spirits"] },
        { q: "What's a leisure activity you've always wanted to try?", sample: "I've always wanted to try hiking in the mountains — being surrounded by nature really appeals to me.", ideas: ["Activity", "Why"], vocab: ["appeal to"] }
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
        { q: "What's your favorite type of cuisine?", sample: "I'm a big fan of Italian cuisine — fresh ingredients, simple recipes, and so much flavour.", ideas: ["Cuisine", "Why"], vocab: ["fresh ingredients"] },
        { q: "Do you enjoy cooking at home?", sample: "I do, especially at weekends when I actually have time to experiment rather than just rushing.", ideas: ["Yes/No", "When"], vocab: ["experiment"] },
        { q: "Is there a particular dish you would love to learn how to make?", sample: "I'd really like to master homemade lasagne — it looks complicated, but it's such a crowd-pleaser.", ideas: ["A dish", "Why"], vocab: ["master", "crowd-pleaser"] },
        { q: "Have you ever tried food from a foreign country?", sample: "Yes, I've tried quite a few — Turkish, Korean and Italian especially — and I love discovering new flavours.", ideas: ["Which", "How you found it"], vocab: ["flavours"] },
        { q: "What's the most unusual meal you have ever eaten?", sample: "Probably a very spicy Korean dish a friend introduced me to. It was unusual but surprisingly delicious.", ideas: ["The meal", "Your reaction"], vocab: ["surprisingly"] }
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
        { q: "Do you have a best friend, and how often do you see them?", sample: "Yes, I've had the same best friend since school. We don't see each other every day, but we catch up at least once a week.", ideas: ["Yes/No", "How often"], vocab: ["catch up"] },
        { q: "What qualities do you think are important in a friend?", sample: "Trust and a good sense of humour, mainly. I want someone I can rely on but also laugh with.", ideas: ["Qualities"], vocab: ["rely on"] },
        { q: "Have you made any new friends recently?", sample: "Yes, I've made a couple of new friends at university who share my interests, which is always nice.", ideas: ["Yes/No", "Where"], vocab: ["share interests"] },
        { q: "What activities do you enjoy doing with your friends?", sample: "We love grabbing food, going for walks and occasionally playing sports together.", ideas: ["Activities"], vocab: ["grab food"] },
        { q: "Can friends influence a person's decisions? How?", sample: "Definitely. Good friends can encourage you to make better choices, but the wrong crowd can push you the other way too.", ideas: ["Yes/No", "How"], vocab: ["the wrong crowd", "push the other way"] }
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
        { q: "What tech gadgets do you use daily?", sample: "My phone and laptop are essential — I use them for studying, communicating and entertainment all day long.", ideas: ["Gadgets", "What for"], vocab: ["essential"] },
        { q: "Do you think technology has made life easier?", sample: "Overall, yes. It saves us a huge amount of time, although it can also be a bit of a distraction if you're not careful.", ideas: ["Yes/No", "A downside"], vocab: ["distraction"] },
        { q: "What's one piece of technology you couldn't live without?", sample: "Honestly, my smartphone. It's basically my study tool, my map, my camera and my connection to everyone all in one.", ideas: ["The item", "Why"], vocab: ["all in one"] },
        { q: "Have you recently downloaded any interesting apps?", sample: "Yes, I recently downloaded a language-learning app, and it's made practising vocabulary genuinely fun.", ideas: ["An app", "Why"], vocab: ["language-learning"] },
        { q: "How do you keep up with technology news?", sample: "I mostly follow a few tech channels on YouTube and social media — it's a quick, easy way to stay updated.", ideas: ["Sources"], vocab: ["stay updated"] }
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
        { q: "What subject did you enjoy most at school?", sample: "I always enjoyed history the most — I loved hearing the stories behind how the world became what it is today.", ideas: ["Subject", "Why"], vocab: ["the stories behind"] },
        { q: "Are you learning something new at the moment?", sample: "Yes, apart from English I'm slowly teaching myself the basics of coding, which I find really engaging.", ideas: ["What", "How"], vocab: ["engaging"] },
        { q: "Do you prefer online courses or classroom learning?", sample: "Each has its perks, but I slightly prefer classroom learning because of the direct interaction with teachers and classmates.", ideas: ["Pick one", "Why"], vocab: ["perks — advantages", "interaction"] },
        { q: "How do you usually learn best — listening, watching, or doing?", sample: "Definitely by doing. I remember things far better when I actually practise them rather than just reading or listening.", ideas: ["Your style", "Why"], vocab: ["hands-on"] },
        { q: "What's something you've always wanted to study but haven't yet?", sample: "I've always wanted to study psychology — understanding why people behave the way they do really fascinates me.", ideas: ["Subject", "Why"], vocab: ["fascinate"] }
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
        { q: "Do you like reading books?", sample: "I love it. Reading is one of my favourite ways to relax and learn at the same time.", ideas: ["Yes/No", "Why"], vocab: ["at the same time"] },
        { q: "What kind of books do you prefer?", sample: "I mostly enjoy fiction and the occasional self-improvement book — a nice balance of escape and growth.", ideas: ["Genres", "Why"], vocab: ["self-improvement"] },
        { q: "How often do you visit a library?", sample: "Not as often as I used to, since I read a lot on my phone now, but I still pop in every few weeks.", ideas: ["How often", "Why"], vocab: ["pop in"] },
        { q: "Do you prefer reading physical books or e-books?", sample: "I genuinely prefer physical books — there's something satisfying about turning real pages — but e-books are far more convenient.", ideas: ["Pick one", "Trade-off"], vocab: ["satisfying", "convenient"] },
        { q: "Has your taste in books changed since you were younger?", sample: "Definitely. As a child I only read adventure stories, but now I'm drawn to deeper, more thought-provoking books.", ideas: ["Then vs now"], vocab: ["thought-provoking"] }
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
        { q: "Do you enjoy cooking?", sample: "I do, though I'm still a beginner. I find it relaxing and a little creative.", ideas: ["Yes/No", "Skill"], vocab: ["creative"] },
        { q: "How often do you cook at home?", sample: "A few times a week, usually on days when I have a bit more free time.", ideas: ["Frequency"], vocab: ["free time"] },
        { q: "Who usually prepares meals in your family?", sample: "Mostly my mother, who's an amazing cook, but the rest of us pitch in when we can.", ideas: ["Who", "Your role"], vocab: ["pitch in — help out"] },
        { q: "What kind of food do you like to cook?", sample: "Simple, quick dishes mainly — pasta, omelettes, that kind of thing.", ideas: ["Type"], vocab: ["quick dishes"] },
        { q: "Do you think everyone should learn how to cook?", sample: "Absolutely. It's a basic life skill that keeps you healthier and saves money too.", ideas: ["Yes/No", "Why"], vocab: ["life skill"] }
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
        { q: "Do you like traveling?", sample: "I love it. Discovering new places and cultures is one of the most exciting things in life for me.", ideas: ["Yes/No", "Why"], vocab: ["discover"] },
        { q: "How often do you travel?", sample: "Not as often as I'd like, mostly during holidays, but I make the most of every chance I get.", ideas: ["Frequency"], vocab: ["make the most of"] },
        { q: "What is your favorite mode of transportation?", sample: "I really enjoy travelling by train — it's comfortable, and you get to watch the scenery roll by.", ideas: ["Mode", "Why"], vocab: ["scenery roll by"] },
        { q: "Do you prefer traveling alone or with others?", sample: "Mostly with others. Sharing the experience with friends or family makes the memories even better.", ideas: ["Pick", "Why"], vocab: ["share the experience"] },
        { q: "What is the most memorable trip you've taken?", sample: "Definitely my trip to Bukhara — the history and atmosphere there left a lasting impression on me.", ideas: ["The trip", "Why memorable"], vocab: ["lasting impression"] }
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
        { q: "Do you enjoy listening to music?", sample: "Definitely — music is the soundtrack to my whole day, from studying to relaxing.", ideas: ["Yes/No", "When"], vocab: ["soundtrack"] },
        { q: "What kind of music do you like?", sample: "I enjoy a wide range, but soft pop and acoustic tracks are my favourites for everyday listening.", ideas: ["Genres"], vocab: ["wide range"] },
        { q: "Do you prefer listening to music alone or with others?", sample: "Usually alone, with my headphones in — it lets me really get lost in the songs.", ideas: ["Pick", "Why"], vocab: ["get lost in"] },
        { q: "Do you play any musical instruments?", sample: "Not yet, unfortunately, but learning the guitar is high on my wish-list.", ideas: ["Yes/No", "Wish"], vocab: ["wish-list"] },
        { q: "Has your taste in music changed over time?", sample: "Yes, quite a bit. I used to only like loud, energetic songs, but now I appreciate calmer music too.", ideas: ["Then vs now"], vocab: ["appreciate"] }
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
        { q: "Do you like to watch movies?", sample: "Yes, watching films is one of my favourite ways to relax and escape for a couple of hours.", ideas: ["Yes/No", "Why"], vocab: ["escape"] },
        { q: "How often do you go to the cinema?", sample: "Not very often these days — maybe a few times a year — since I usually watch films at home now.", ideas: ["Frequency"], vocab: ["these days"] },
        { q: "What kind of movies do you enjoy the most?", sample: "I'm a sucker for science fiction and thrillers — anything with a clever, surprising plot.", ideas: ["Genre", "Why"], vocab: ["a sucker for — really like"] },
        { q: "Do you prefer watching movies at home or at the cinema?", sample: "The cinema is special for big films, but for everyday viewing I prefer the comfort of home.", ideas: ["Pick", "Why"], vocab: ["the comfort of home"] },
        { q: "Have you ever been to a film festival?", sample: "Not yet, but I'd really love to — it sounds like a great way to discover unusual films.", ideas: ["Yes/No", "Wish"], vocab: ["discover"] }
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
        { q: "What is your favorite holiday?", sample: "My favourite is Navruz, our spring new-year festival. It's colourful, joyful and all about new beginnings.", ideas: ["Holiday", "Why"], vocab: ["new beginnings"] },
        { q: "How do you usually celebrate special occasions?", sample: "Usually with a big family gathering, lots of traditional food and plenty of laughter.", ideas: ["How"], vocab: ["gathering"] },
        { q: "Is there a holiday that is particularly important in your country?", sample: "Navruz is hugely important here — it marks the arrival of spring and brings whole communities together.", ideas: ["Holiday", "Significance"], vocab: ["bring together"] },
        { q: "Do you think traditions around holidays are changing?", sample: "To some extent, yes. Technology has changed how we celebrate, but the core values stay the same.", ideas: ["Yes/No", "How"], vocab: ["core values"] },
        { q: "What kind of celebrations do you enjoy the most?", sample: "I love big, lively celebrations where the whole family comes together — those are the most memorable for me.", ideas: ["Type", "Why"], vocab: ["lively"] }
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
        { q: "What is your favorite technology?", sample: "Probably the smartphone — it combines so many useful tools into a single device.", ideas: ["Tech", "Why"], vocab: ["combine"] },
        { q: "Do you use a phone or a computer more?", sample: "I use my phone more for quick everyday tasks, but I switch to my laptop for serious studying.", ideas: ["Which", "When"], vocab: ["switch to"] },
        { q: "How does technology help you every day?", sample: "It helps me learn, communicate and stay organised — I'd struggle to manage my day without it.", ideas: ["Benefits"], vocab: ["stay organised"] },
        { q: "Do you like learning about new technology?", sample: "Yes, I find it exciting to see how quickly things are advancing and what's coming next.", ideas: ["Yes/No", "Why"], vocab: ["advancing"] },
        { q: "What is one piece of technology you want to try?", sample: "I'd love to try a VR headset — fully immersive virtual reality sounds fascinating.", ideas: ["The tech", "Why"], vocab: ["immersive"] }
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
        { q: "Do you like spending time in nature?", sample: "I love it. Being in nature instantly clears my mind and lowers my stress levels.", ideas: ["Yes/No", "Why"], vocab: ["clear my mind"] },
        { q: "What is your favorite outdoor place?", sample: "Definitely the mountains — the views are stunning and the air feels so fresh and clean.", ideas: ["Place", "Why"], vocab: ["stunning views"] },
        { q: "How can people protect the environment?", sample: "Small steps add up — recycling, cutting down on plastic, and using public transport all make a difference.", ideas: ["Actions"], vocab: ["cut down on", "make a difference"] },
        { q: "Do you think it's important to plant trees?", sample: "Absolutely. Trees clean our air, provide shade and support wildlife — they're essential for the planet.", ideas: ["Yes/No", "Why"], vocab: ["essential"] },
        { q: "What do you do to keep the environment clean?", sample: "I always dispose of rubbish properly, try to recycle, and avoid single-use plastics whenever I can.", ideas: ["Your habits"], vocab: ["dispose of", "single-use plastics"] }
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
        { q: "Do you try to stay healthy?", sample: "I do my best. I try to eat reasonably well, stay active and get enough sleep, though there's always room for improvement.", ideas: ["Yes/No", "How"], vocab: ["room for improvement"] },
        { q: "What do you do to keep fit?", sample: "I go for regular walks and do some simple home workouts a few times a week.", ideas: ["Activities"], vocab: ["home workouts"] },
        { q: "Do you think eating healthy food is important?", sample: "Absolutely — what you eat affects your energy, mood and long-term health, so it really matters.", ideas: ["Yes/No", "Why"], vocab: ["long-term health"] },
        { q: "How often do you exercise?", sample: "Around three or four times a week, usually light exercise that fits easily into my routine.", ideas: ["Frequency"], vocab: ["fit into my routine"] },
        { q: "What advice would you give someone to stay healthy?", sample: "I'd say start small — drink more water, move a little every day, and don't aim for perfection straight away.", ideas: ["Advice"], vocab: ["start small", "aim for perfection"] }
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
        { q: "Do you enjoy learning new things?", sample: "I genuinely do. There's a real sense of satisfaction in understanding something you didn't know before.", ideas: ["Yes/No", "Why"], vocab: ["sense of satisfaction"] },
        { q: "What is your favorite subject?", sample: "I've always loved history because it helps me understand how today's world came to be.", ideas: ["Subject", "Why"], vocab: ["came to be"] },
        { q: "Do you think school is important? Why?", sample: "Definitely. Beyond facts, school teaches discipline, social skills and how to think — all vital for life.", ideas: ["Yes/No", "Why"], vocab: ["discipline", "vital"] },
        { q: "How do you like to study: alone or in a group?", sample: "It depends on the task. I prefer studying alone for focus, but group study is great for discussing tricky ideas.", ideas: ["Pick / depends", "Why"], vocab: ["tricky ideas"] },
        { q: "What would you like to learn in the future?", sample: "I'd love to learn a third language one day — maybe Spanish — just for the joy of it.", ideas: ["What", "Why"], vocab: ["for the joy of it"] }
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
        { q: "Do you like traveling?", sample: "I really do — exploring new places is one of the most enriching things in life for me.", ideas: ["Yes/No", "Why"], vocab: ["enriching"] },
        { q: "What kind of places do you like to visit?", sample: "I'm especially drawn to historical cities, though I also love peaceful natural spots.", ideas: ["Type", "Why"], vocab: ["drawn to"] },
        { q: "How often do you travel?", sample: "Mainly during holidays, so a few times a year, but I cherish every trip.", ideas: ["Frequency"], vocab: ["cherish"] },
        { q: "Do you prefer to travel alone or with others?", sample: "With others, usually. Shared experiences just feel more meaningful to me.", ideas: ["Pick", "Why"], vocab: ["meaningful"] },
        { q: "What is your favorite means of transport when you travel?", sample: "I love trains — comfortable, scenic, and a relaxing way to travel.", ideas: ["Mode", "Why"], vocab: ["scenic"] }
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
        { q: "Do you like going on holidays?", sample: "I absolutely love holidays — they're the perfect chance to relax and recharge away from routine.", ideas: ["Yes/No", "Why"], vocab: ["recharge"] },
        { q: "How often do you go on vacation?", sample: "Usually once or twice a year, mostly during the long holidays.", ideas: ["Frequency"], vocab: ["long holidays"] },
        { q: "What do you usually do during your holidays?", sample: "I like a mix of resting at home and exploring somewhere new — a balance of relaxation and adventure.", ideas: ["Activities"], vocab: ["a balance of"] },
        { q: "Do you prefer to spend holidays in your country or abroad?", sample: "I enjoy both, but travelling abroad excites me more because of the new cultures and experiences.", ideas: ["Pick", "Why"], vocab: ["new cultures"] },
        { q: "What was your best holiday experience?", sample: "Definitely a trip to the mountains with friends — the scenery and the company made it unforgettable.", ideas: ["The trip", "Why"], vocab: ["unforgettable"] }
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
        { q: "What kind of weather do you like the most?", sample: "I love mild, sunny weather — warm enough to enjoy being outside but not too hot to handle.", ideas: ["Weather", "Why"], vocab: ["too hot to handle"] },
        { q: "Does the weather affect your mood?", sample: "Quite a lot, actually. Bright, sunny days lift my mood, while grey skies tend to make me feel a bit sluggish.", ideas: ["Yes/No", "How"], vocab: ["sluggish"] },
        { q: "What is the weather usually like in your country?", sample: "We have hot, dry summers and fairly cold winters, so there's a real contrast between the seasons.", ideas: ["Description"], vocab: ["contrast"] },
        { q: "Have you ever experienced extreme weather conditions?", sample: "Yes, we sometimes get extremely hot summer days, which can make even simple tasks exhausting.", ideas: ["Yes/No", "Example"], vocab: ["exhausting"] },
        { q: "Do you prefer hot weather or cold weather?", sample: "I'd choose cool weather over heat — it's easier to warm up than to cool down, in my opinion.", ideas: ["Pick", "Why"], vocab: ["warm up", "cool down"] }
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
        { q: "Do you like staying in hotels?", sample: "I do — there's something nice about being looked after and not having to worry about chores for a few days.", ideas: ["Yes/No", "Why"], vocab: ["looked after", "chores"] },
        { q: "What kind of hotels do you prefer?", sample: "I prefer comfortable, mid-range hotels that are clean and well-located rather than overly luxurious ones.", ideas: ["Type", "Why"], vocab: ["well-located", "mid-range"] },
        { q: "Have you ever stayed in a luxury hotel?", sample: "Once, for a special occasion, and it was a real treat — the service and comfort were on another level.", ideas: ["Yes/No", "Experience"], vocab: ["a real treat", "on another level"] },
        { q: "What do you usually look for when choosing a hotel?", sample: "Cleanliness and location are my top priorities, followed by good reviews and a fair price.", ideas: ["Priorities"], vocab: ["top priorities"] },
        { q: "Do you prefer hotels or homestays when you travel?", sample: "It depends — hotels for comfort, but homestays when I want a more authentic, local experience.", ideas: ["Pick / depends", "Why"], vocab: ["authentic"] }
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
        { q: "Do you often travel by plane?", sample: "Not too often, mostly for longer trips abroad, but I always find flying quite exciting.", ideas: ["Frequency", "Feeling"], vocab: ["abroad"] },
        { q: "What do you like or dislike about flying?", sample: "I love how fast it is and the view from above, but I'm not a fan of the long waits at the airport.", ideas: ["Like", "Dislike"], vocab: ["not a fan of"] },
        { q: "What was the longest flight you have ever taken?", sample: "The longest was several hours to another country — it felt endless, but the excitement kept me going.", ideas: ["The flight", "How it felt"], vocab: ["felt endless"] },
        { q: "How do you usually spend your time during flights?", sample: "I usually read, watch a film or simply sleep to make the time pass more quickly.", ideas: ["Activities"], vocab: ["pass the time"] },
        { q: "Have you ever had any problems while travelling by air?", sample: "Once my flight was delayed for hours, which was frustrating, but I just made the best of it.", ideas: ["Yes/No", "What happened"], vocab: ["delayed", "make the best of it"] }
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
