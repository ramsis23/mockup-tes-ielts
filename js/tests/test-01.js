/* Konten tes (orisinal, dibuat khusus untuk latihan ini).
   Format audio: ['N', teks] = narator, ['A'|'B', teks] = pembicara, ['P', detik] = jeda. */
(() => {
const T = {
  /* ===================================================== LISTENING */
  listening: {
    parts: [
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'gap', from: 1, to: 10,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>RIVERSIDE LEISURE CENTRE<br><span>Membership Enquiry Form</span></h4>
                <table class="form-table">
                  <tr><td>Name:</td><td>Sarah [[1]]</td></tr>
                  <tr><td>Address:</td><td>42 [[2]] Road, Westbury</td></tr>
                  <tr><td>Postcode:</td><td>[[3]]</td></tr>
                  <tr><td>Phone number:</td><td>07794 [[4]]</td></tr>
                  <tr><td>Type of membership:</td><td>[[5]]</td></tr>
                  <tr><td>Main activity:</td><td>[[6]]</td></tr>
                  <tr><td>Preferred class day:</td><td>[[7]] evenings</td></tr>
                  <tr><td>Monthly cost (first year):</td><td>£ [[8]]</td></tr>
                  <tr><td>Bring on first visit:</td><td>a [[9]]</td></tr>
                  <tr><td>Heard about centre from:</td><td>an advertisement in the [[10]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['kimbell'], 2: ['hartley'], 3: ['bn7 4qt'], 4: ['518306'], 5: ['family'],
              6: ['swimming', 'swim'], 7: ['thursday'], 8: ['47', 'forty-seven', 'forty seven'],
              9: ['photo', 'photograph'], 10: ['newspaper', 'local newspaper']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a woman telephoning a leisure centre to ask about membership. First, you have some time to look at questions 1 to 5.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 1 to 5.'],
          ['A', 'Good morning, Riverside Leisure Centre, Mark speaking. How can I help you?'],
          ['B', "Hello. I'm interested in joining the centre, and I wondered if you could tell me a bit about membership."],
          ['A', 'Of course. I can take some details and set up an enquiry for you now. Could I have your name, please?'],
          ['B', "Yes, it's Sarah Kimbell."],
          ['A', 'Could you spell your surname for me?'],
          ['B', 'Sure. K, I, M, B, E, double L.'],
          ['A', 'Thank you. And your address?'],
          ['B', "It's 42 Hartley Road. That's H, A, R, T, L, E, Y."],
          ['A', 'Is that in Westbury?'],
          ['B', "Yes, that's right. The postcode is B, N, 7, 4, Q, T."],
          ['A', 'B, N, 7, 4, Q, T. Lovely. And a contact phone number?'],
          ['B', "My mobile is best. It's oh seven seven nine four, five one eight, three oh six."],
          ['A', 'Let me read that back. Oh seven seven nine four, five one eight, three oh six.'],
          ['B', "That's it."],
          ['A', 'Now, what kind of membership were you thinking of? We have individual, couple and family memberships.'],
          ['B', 'Well, at first I thought just individual, but my husband and two children would like to come too, so I think family would be best.'],
          ['A', 'Good choice. That covers up to two adults and three children.'],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 6 to 10.'],
          ['A', 'And which activities are you most interested in? We have a gym, tennis courts and a pool.'],
          ['B', "I used to play tennis quite a lot, but these days what I really want is swimming. I'd like to use the pool most of all."],
          ['A', 'We have adult swimming classes, too. They run on Tuesday and Thursday evenings.'],
          ['B', 'Tuesdays are difficult for me because I work late, so Thursday would suit me much better.'],
          ['A', "I'll make a note of that. Now, the family membership is normally fifty-two pounds a month, but at the moment there's a discount for new members, so it would be forty-seven pounds a month for the first year."],
          ['B', 'That sounds reasonable.'],
          ['A', "When you come in for your first visit, you'll need to bring a photo so we can make your membership card. You don't need any proof of address, as we can check that online."],
          ['B', "Fine. I'll remember that."],
          ['A', 'And finally, can I ask how you heard about us? Was it from our website, or perhaps from a friend?'],
          ['B', 'Actually, neither. I saw an advertisement in the local newspaper last week.'],
          ['A', "That's great, thank you. I'll email you a confirmation this afternoon."],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'mc', from: 11, to: 15,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 11, text: 'What is special about most of the buildings in the village?', options: [
                { k: 'A', t: 'They were built by volunteers.' },
                { k: 'B', t: 'They were moved from other places.' },
                { k: 'C', t: 'People still live in them.' }], answer: 'B' },
              { n: 12, text: 'Why is today’s tour shorter than planned?', options: [
                { k: 'A', t: 'because of the weather' },
                { k: 'B', t: 'because of construction work' },
                { k: 'C', t: 'because the group is large' }], answer: 'B' },
              { n: 13, text: 'Visitors are asked not to', options: [
                { k: 'A', t: 'use flash photography indoors.' },
                { k: 'B', t: 'touch items in the workshop.' },
                { k: 'C', t: 'take photographs outside.' }], answer: 'A' },
              { n: 14, text: 'The guide recommends that people with their own food should eat', options: [
                { k: 'A', t: 'in the café.' },
                { k: 'B', t: 'in the orchard.' },
                { k: 'C', t: 'beside the pond.' }], answer: 'B' },
              { n: 15, text: 'The ticket allows visitors to', options: [
                { k: 'A', t: 'enter a nearby museum.' },
                { k: 'B', t: 'get a discount in the shop.' },
                { k: 'C', t: 'return free of charge within a year.' }], answer: 'C' }
            ]
          },
          {
            type: 'match', from: 16, to: 20,
            instr: 'What can visitors do at each of the following places?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 16–20.',
            boxTitle: 'Activities',
            options: [
              { k: 'A', t: 'watch a demonstration' },
              { k: 'B', t: 'buy fresh bread' },
              { k: 'C', t: 'try on old clothes' },
              { k: 'D', t: 'see original documents' },
              { k: 'E', t: 'hear a recorded story' },
              { k: 'F', t: 'take part in a game' },
              { k: 'G', t: 'feed the animals' }
            ],
            questions: [
              { n: 16, text: 'the bakery', answer: 'E' },
              { n: 17, text: 'the schoolhouse', answer: 'F' },
              { n: 18, text: 'the blacksmith’s', answer: 'A' },
              { n: 19, text: 'the chapel', answer: 'D' },
              { n: 20, text: 'the farmhouse', answer: 'C' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a guide talking to a group of visitors at a heritage village. First, you have some time to look at questions 11 to 15.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 11 to 15.'],
          ['A', "Good morning, everyone, and welcome to Ashcombe Heritage Village. My name is Helen and I'll be your guide this morning."],
          ['A', 'The village first opened to the public in 1974, although many of the buildings are much older. Very few of them actually started life here. Most were taken down piece by piece from towns across the region and rebuilt on this site.'],
          ['A', "The tour today will last around ninety minutes. We'd normally take two hours, but because of the building work near the river, we've had to shorten the route a little."],
          ['A', "Now, a few practical points. You're welcome to take photographs anywhere outdoors, but inside the buildings please don't use flash, as bright light can damage the old fabrics and paintings. In the workshop, though, feel free to pick things up and touch them. That's part of the experience."],
          ['A', "The café by the main gate serves hot meals until two o'clock. If you've brought your own lunch, the best place is the orchard picnic area, which has tables and shelter. Please don't eat by the pond, as the ducks become rather too friendly."],
          ['A', "Finally, keep your ticket safe. It allows you to come back free of charge on any day within the next twelve months. Unfortunately, it doesn't give you a discount in the gift shop."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 16 to 20.'],
          ['A', "Let's look at the places we'll visit. Our first stop is the bakery. Sadly the old oven no longer works, so we can't sell bread there any more, but there's a recorded story about the life of the baker's family, which plays every few minutes."],
          ['A', 'Next is the schoolhouse. Children especially love this one, because they can sit at the old desks and play a traditional counting game with our teacher.'],
          ['A', "After that we'll pass the blacksmith's. Our blacksmith shows visitors how horseshoes were made, and he'll be doing that at eleven o'clock today."],
          ['A', 'The chapel is very quiet and peaceful. In the side room you can look at the original parish records, some over three hundred years old, kept in glass cases.'],
          ['A', "Finally, the farmhouse. The kitchen has a wardrobe of costumes from the eighteen hundreds, and you're welcome to dress up and take photos. The farm animals are in the field behind, but visitors can't feed them this month, as the lambs are still very young."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'mc', from: 21, to: 24,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 21, text: 'Why did the students choose community gardens as their topic?', options: [
                { k: 'A', t: 'Their tutor recommended it.' },
                { k: 'B', t: 'One of them has personal experience of it.' },
                { k: 'C', t: 'A lot of research is available on it.' }], answer: 'B' },
              { n: 22, text: 'What was the main problem with their survey?', options: [
                { k: 'A', t: 'Too few people responded.' },
                { k: 'B', t: 'Some questions were unclear.' },
                { k: 'C', t: 'It took too long to complete.' }], answer: 'A' },
              { n: 23, text: 'They agree that the main benefit of community gardens is', options: [
                { k: 'A', t: 'access to fresh food.' },
                { k: 'B', t: 'reducing loneliness.' },
                { k: 'C', t: 'improving the environment.' }], answer: 'B' },
              { n: 24, text: 'What will Tom do next?', options: [
                { k: 'A', t: 'contact the city council' },
                { k: 'B', t: 'redesign the survey' },
                { k: 'C', t: 'write the introduction' }], answer: 'A' }
            ]
          },
          {
            type: 'multi', from: 25, to: 26, ns: [25, 26],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> things will the students include in their presentation?',
            options: [
              { k: 'A', t: 'video interviews' },
              { k: 'B', t: 'photographs' },
              { k: 'C', t: 'a map' },
              { k: 'D', t: 'a table of statistics' },
              { k: 'E', t: 'samples of vegetables' }
            ],
            answers: ['B', 'C']
          },
          {
            type: 'match', from: 27, to: 30,
            instr: 'What is Leah’s opinion of each of the following sources?<br>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–E</b>, next to Questions 27–30.',
            boxTitle: 'Opinions',
            options: [
              { k: 'A', t: 'too out of date' },
              { k: 'B', t: 'too technical' },
              { k: 'C', t: 'very useful' },
              { k: 'D', t: 'not relevant enough' },
              { k: 'E', t: 'hard to obtain' }
            ],
            questions: [
              { n: 27, text: 'the government report', answer: 'B' },
              { n: 28, text: 'the newspaper article', answer: 'D' },
              { n: 29, text: 'the university study', answer: 'C' },
              { n: 30, text: 'the gardening website', answer: 'A' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two students, Tom and Leah, discussing their research project on community gardens. First, you have some time to look at questions 21 to 26.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 21 to 26.'],
          ['B', 'Hi Tom. Shall we go through where we are with the project?'],
          ['A', 'Sure. I was just thinking about why we chose community gardens in the first place. Doctor Morris did give us a list of topics, but this wasn’t on it.'],
          ['B', "No, I suggested it because I've been volunteering at the garden on Mill Lane for two years, and I've seen how much it changes people's lives. There isn't actually that much research on it, which made things harder."],
          ['A', 'True. Now, the survey. I was worried that some of the questions might confuse people.'],
          ['B', 'But the people who answered said they were really clear. The real issue was that we sent out two hundred copies and only got twenty-three back.'],
          ['A', "Yes, that's not enough for strong conclusions. At least it only took five minutes to fill in."],
          ['B', 'Moving on to the benefits. I know you thought the main one was the fresh food.'],
          ['A', "I did at first, but after reading the interviews again, I think you're right. What people value most is the company. Many of them live alone, and the garden stops them feeling isolated."],
          ['B', "Exactly. The environmental side matters, but it's not what people talked about most."],
          ['A', 'So what next? I could start writing the introduction.'],
          ['B', "I've already drafted that, actually. What we really need is information on how many gardens there are in the city."],
          ['A', "Then I'll get in touch with the city council. They keep a register. I'll email them this afternoon."],
          ['B', 'Great. Now, the presentation. I think we should use some of the photographs I took at the garden. They show the atmosphere really well.'],
          ['A', 'Agreed. What about the video interviews?'],
          ['B', "The sound quality wasn't good enough, unfortunately. We'd better leave those out."],
          ['A', 'Fine. And a table of statistics would look odd, because our numbers are so small. But a map showing where the gardens are would really help the audience.'],
          ['B', "Yes, let's do that. I'd thought about bringing in some vegetables from the garden, but it's not really practical."],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
          ['P', 20],
          ['N', 'Now listen and answer questions 27 to 30.'],
          ['A', "Let's talk about our sources. What did you think of the government report?"],
          ['B', "There's lots of good data, but honestly it's full of planning terminology. It's too technical for our purposes."],
          ['A', 'And the newspaper article?'],
          ['B', "It was interesting, but it was really about parks in general rather than gardens. It doesn't fit our topic closely enough."],
          ['A', 'The university study from Leeds was the best, I think.'],
          ['B', "Definitely. It's recent, and it asked almost exactly the same questions we did. We should refer to it a lot."],
          ['A', 'And the gardening website?'],
          ['B', 'It was easy enough to find, but all the information was from the nineteen nineties. Things have changed a lot since then.'],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'm' },
        groups: [
          {
            type: 'gap', from: 31, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Bioluminescence</h4>
                <p><b>Definition</b></p>
                <ul>
                  <li>light produced by a [[31]] reaction inside a living organism</li>
                  <li>in the deep sea, about 75% of animals produce light</li>
                  <li>most common colour: [[32]], as it travels furthest through water</li>
                </ul>
                <p><b>Main uses</b></p>
                <ul>
                  <li>Defence: some squid release glowing [[33]] to distract predators</li>
                  <li>Hunting: the anglerfish’s glowing tip acts as [[34]]</li>
                  <li>Communication: fireflies use flashes mainly to find a [[35]]</li>
                </ul>
                <p><b>On land</b></p>
                <ul>
                  <li>certain [[36]] on rotting wood give off a green glow</li>
                </ul>
                <p><b>Human applications</b></p>
                <ul>
                  <li>a protein from a [[37]] is used to observe how diseases spread</li>
                  <li>glowing bacteria could detect [[38]] in water supplies</li>
                  <li>glowing trees might one day replace [[39]]</li>
                  <li>problem: the light is currently too [[40]]</li>
                </ul>
              </div>`,
            answers: {
              31: ['chemical'], 32: ['blue'], 33: ['ink'], 34: ['bait'], 35: ['partner', 'mate'],
              36: ['fungi', 'fungus', 'mushrooms'], 37: ['jellyfish'], 38: ['pollution', 'pollutants'],
              39: ['streetlights', 'street lights', 'streetlamps'], 40: ['weak']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture about bioluminescence. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good afternoon. Today's lecture is about bioluminescence, the ability of living things to produce light. Unlike the light from a bulb, which comes from heat, bioluminescence is the result of a chemical reaction that takes place inside the organism itself. Two substances combine with oxygen, and energy is released as light."],
          ['A', "Bioluminescence is far more common in the sea than on land. In the deep ocean, where sunlight never reaches, around three quarters of animals can produce some kind of light. You might expect many colours, and some red and green examples do exist, but by far the most common colour is blue. That's because blue light travels the furthest through sea water."],
          ['A', "So why do animals produce light? Let's look at three main uses. The first is defence. When threatened, some species of squid release a cloud of glowing ink rather than the usual dark ink. The predator is distracted by the light while the squid escapes into the darkness."],
          ['A', "The second use is hunting. The best-known example is the anglerfish. It has a long spine on its head with a glowing tip. Small fish are attracted to the light, thinking it's food, so it acts as bait. When they get close enough, the anglerfish simply opens its mouth."],
          ['A', 'The third use is communication. Here we can take an example from land, the firefly. Each species has its own pattern of flashes, and they use these signals mainly to find a partner.'],
          ['A', "Fireflies aren't the only example on land. Several kinds of fungi growing on rotting wood in forests give off a faint green glow, which may attract insects that help spread their spores."],
          ['A', 'Now let’s turn to how humans are using this. One of the most important discoveries in modern biology came from a glowing protein first found in a jellyfish. Scientists attach this protein to cells, so they can actually watch how diseases such as cancer spread through the body.'],
          ['A', 'There are environmental uses too. Researchers are developing bacteria that glow when they come into contact with certain chemicals, which could be a cheap way of detecting pollution in water supplies.'],
          ['A', "Perhaps the most ambitious idea is to create glowing trees that could one day replace streetlights in our cities, reducing electricity use. However, there's a major problem. At present, the light these plants produce is far too weak to be practical."],
          ['N', 'That is the end of Part 4. You now have 30 seconds to check your answers.'],
          ['P', 30],
          ['N', 'That is the end of the Listening test.']
        ]
      }
    ]
  },

  /* ===================================================== READING */
  reading: {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'The Humble Pencil',
          html: `
<p>The pencil is so common today that it is easy to forget it was once a remarkable invention. Its story begins in the 1560s in Borrowdale, in the north of England, where a large deposit of pure graphite was discovered. Local people at first used the soft, dark substance to mark their sheep. Because it left a mark like lead, it was mistakenly believed to be a form of that metal, and it became known as ‘plumbago’, from the Latin word for lead. This is why the writing core of a pencil is still called ‘lead’ today, even though pencils have never contained any.</p>
<p>Graphite from Borrowdale was so valuable that the mines were guarded, and the English government controlled how much could be removed each year. The material was also used to line the moulds in which cannonballs were made, which gave it military importance. Smuggling became common, and in 1752 Parliament passed a law making the theft of graphite a serious crime.</p>
<p>The earliest pencils were simply sticks of graphite wrapped in string or sheepskin. Later, Italian craftsmen began placing graphite inside hollowed-out wooden sticks, and by the seventeenth century, carpenters in England were producing pencils encased in wood. However, because pure graphite was only found in England, other countries struggled to make good pencils of their own.</p>
<p>The solution came from France. In 1795, during a war that cut France off from English supplies, an engineer named Nicolas-Jacques Conté was asked to find an alternative. He discovered that powdered graphite of poor quality could be mixed with clay, pressed into thin rods and then heated in a kiln. By changing the proportion of clay, he could control how hard or soft the pencil was: more clay produced a harder, lighter line. Conté’s method is essentially the one still used today.</p>
<p>In the nineteenth century, the pencil industry grew rapidly, especially in Germany and the United States. The American writer Henry David Thoreau worked in his family’s pencil business and improved its production techniques. In 1858, an American named Hymen Lipman received a patent for attaching an eraser to the end of a pencil, although the patent was later cancelled because the court ruled that he had merely combined two existing objects.</p>
<p>The familiar yellow colour also has an interesting origin. In the 1890s, a manufacturer began painting its pencils yellow to suggest that its graphite came from China, a country associated at the time with luxury and quality. The idea proved so successful that other companies copied it, and yellow remains the most popular pencil colour in North America.</p>
<p>Today, around fourteen billion pencils are made worldwide every year. Despite the arrival of digital devices, they remain popular with artists, students and engineers, who value their simplicity, low cost and the fact that their marks can be erased.</p>`
        },
        groups: [
          {
            type: 'tf', variant: 'tf', from: 1, to: 7,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 1, text: 'Graphite was first used in Borrowdale to mark farm animals.', answer: 'TRUE' },
              { n: 2, text: 'Pencil cores contained small amounts of lead until the twentieth century.', answer: 'FALSE' },
              { n: 3, text: 'The Borrowdale mines employed more workers than any other mine in England.', answer: 'NOT GIVEN' },
              { n: 4, text: 'Graphite was used in the production of weapons.', answer: 'TRUE' },
              { n: 5, text: 'English carpenters made wood-encased pencils before Italian craftsmen did.', answer: 'FALSE' },
              { n: 6, text: 'Conté added more clay to make his pencils softer.', answer: 'FALSE' },
              { n: 7, text: 'Conté received a large payment from the French government for his invention.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'gap', from: 8, to: 13,
            instr: 'Complete the notes below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>The development of the pencil</h4>
                <ul>
                  <li>1752: a law made stealing graphite a serious [[8]]</li>
                  <li>first pencils: graphite wrapped in string or [[9]]</li>
                  <li>Conté’s method: graphite powder and clay heated in a [[10]]</li>
                  <li>Thoreau: improved [[11]] techniques in the family business</li>
                  <li>Lipman’s patent: cancelled because he had only combined two existing [[12]]</li>
                  <li>yellow paint: suggested the graphite came from [[13]]</li>
                </ul>
              </div>`,
            answers: { 8: ['crime'], 9: ['sheepskin'], 10: ['kiln'], 11: ['production'], 12: ['objects'], 13: ['china'] }
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Cities that Cook: the Urban Heat Island',
          html: `
<p><b class="para">A</b> On a summer afternoon, the centre of a large city can be as much as 7°C hotter than the surrounding countryside. This phenomenon, known as the urban heat island effect, was first recorded in the early nineteenth century by Luke Howard, an amateur scientist who compared temperatures in London with those in nearby villages. Today, with more than half of the world’s population living in cities, it has become a serious concern for planners and health authorities.</p>
<p><b class="para">B</b> The causes are well understood. Dark surfaces such as asphalt roads and roofs absorb large amounts of solar energy during the day and release it slowly as heat after sunset. Tall buildings trap this warmth and block the winds that might otherwise carry it away. In addition, cities contain few plants, which cool the air naturally by releasing water vapour through their leaves. Finally, cars, air-conditioning units and factories all produce waste heat of their own.</p>
<p><b class="para">C</b> The consequences can be severe. During the European heatwave of 2003, death rates were highest in densely built urban areas, where temperatures stayed high even at night, giving people’s bodies no chance to recover. Higher temperatures also increase demand for air conditioning, which places strain on electricity networks and, ironically, adds even more heat to the streets. Ground-level ozone, a harmful pollutant, also forms more quickly in hot conditions.</p>
<p><b class="para">D</b> Not all of the effects are negative, however. In colder climates, the extra warmth can reduce heating costs in winter and shorten the period during which roads are covered by ice. Some researchers have noted that the growing season for city gardens is several weeks longer than in rural areas. Nevertheless, most experts agree that, as global temperatures rise, the disadvantages will increasingly outweigh these benefits.</p>
<p><b class="para">E</b> Cities around the world are now experimenting with solutions. In Los Angeles, some streets have been coated with a light grey material that reflects sunlight, reducing surface temperatures by several degrees. Singapore requires new developments to replace any green space lost during construction with gardens on roofs or walls. Paris has opened ‘cool islands’ – parks and public buildings that stay open late on hot nights. Perhaps the simplest approach, though, is planting trees: a single mature tree can have a cooling effect comparable to several air-conditioning units.</p>
<p><b class="para">F</b> Yet such measures face obstacles. Reflective coatings can create uncomfortable glare for pedestrians, and green roofs are expensive to install and maintain. Trees take decades to reach full size and need space underground for their roots, which competes with pipes and cables. Experts argue that, rather than relying on any single technology, cities need to consider heat at every stage of planning, from the width of streets to the colour of building materials.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 19,
            instr: 'Reading Passage 2 has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Some unexpected advantages' },
              { k: 'ii', t: 'The cost of air conditioning in developing countries' },
              { k: 'iii', t: 'Why urban areas become warmer' },
              { k: 'iv', t: 'Predictions for future temperatures' },
              { k: 'v', t: 'The difficulties of putting ideas into practice' },
              { k: 'vi', t: 'A historical discovery with modern relevance' },
              { k: 'vii', t: 'How rural areas are affected' },
              { k: 'viii', t: 'The risks to human health and infrastructure' },
              { k: 'ix', t: 'A range of practical responses' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'vi' },
              { n: 15, text: 'Paragraph B', answer: 'iii' },
              { n: 16, text: 'Paragraph C', answer: 'viii' },
              { n: 17, text: 'Paragraph D', answer: 'i' },
              { n: 18, text: 'Paragraph E', answer: 'ix' },
              { n: 19, text: 'Paragraph F', answer: 'v' }
            ]
          },
          {
            type: 'mc', from: 20, to: 23,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 20, text: 'What does the writer say about Luke Howard?', options: [
                { k: 'A', t: 'He was a professional weather scientist.' },
                { k: 'B', t: 'He compared city and village temperatures.' },
                { k: 'C', t: 'He lived in the countryside outside London.' },
                { k: 'D', t: 'He explained the causes of the effect.' }], answer: 'B' },
              { n: 21, text: 'According to paragraph B, plants help to cool cities by', options: [
                { k: 'A', t: 'providing shade for buildings.' },
                { k: 'B', t: 'blocking hot winds.' },
                { k: 'C', t: 'releasing water vapour.' },
                { k: 'D', t: 'absorbing heat at night.' }], answer: 'C' },
              { n: 22, text: 'Why were cities particularly dangerous during the 2003 heatwave?', options: [
                { k: 'A', t: 'Air-conditioning systems stopped working.' },
                { k: 'B', t: 'Temperatures remained high at night.' },
                { k: 'C', t: 'Pollution levels were not measured.' },
                { k: 'D', t: 'Hospitals were too far away.' }], answer: 'B' },
              { n: 23, text: 'What does Singapore require of new developments?', options: [
                { k: 'A', t: 'They must not have dark roofs.' },
                { k: 'B', t: 'They must replace any green space they remove.' },
                { k: 'C', t: 'They must stay open on hot nights.' },
                { k: 'D', t: 'They must plant trees along every street.' }], answer: 'B' }
            ]
          },
          {
            type: 'gap', from: 24, to: 26,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <p class="sent">In Los Angeles, a light grey street coating reflects [[24]].</p>
              <p class="sent">Reflective coatings may produce [[25]] that is unpleasant for people walking.</p>
              <p class="sent">Experts believe heat should be considered at every stage of [[26]].</p>`,
            answers: { 24: ['sunlight'], 25: ['glare', 'uncomfortable glare'], 26: ['planning'] }
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'The Paradox of Choice',
          html: `
<p>For most of the twentieth century, economists assumed that more choice was always better. If consumers could pick from a wider range of products, the reasoning went, each person would be more likely to find exactly what they wanted, and overall satisfaction would increase. It is an attractive idea, and in many situations it is correct. Yet over the past three decades, psychologists have gathered evidence suggesting that, beyond a certain point, additional options can leave people less satisfied, not more.</p>
<p>The most famous demonstration took place in a California supermarket in 2000. Two researchers set up a tasting table offering either six or twenty-four varieties of jam. The larger display attracted more attention: 60 per cent of passing shoppers stopped, compared with 40 per cent at the smaller one. However, when it came to buying, the pattern reversed dramatically. Only 3 per cent of those who had seen the large selection actually purchased a jar, whereas almost 30 per cent of those who had seen six varieties did so.</p>
<p>The psychologist Barry Schwartz, who popularised the term ‘the paradox of choice’, offers several explanations. First, comparing many options requires mental effort, and when the effort becomes too great, people may simply avoid deciding at all. Second, the more alternatives there are, the easier it is to imagine that one of the rejected options would have been better. This feeling of regret reduces enjoyment of whatever was chosen. Third, a wide range of options raises expectations: if there are fifty types of running shoe, surely one of them must be perfect, and anything less feels like a failure.</p>
<p>Schwartz also distinguishes between two types of decision-maker. ‘Maximisers’ feel they must examine every possibility in order to make the best choice. ‘Satisficers’, by contrast, have a set of criteria and choose the first option that meets them. Studies suggest that although maximisers often end up with objectively better outcomes – for example, higher-paid jobs – they tend to feel less happy with their decisions and are more prone to anxiety.</p>
<p>It would be a mistake, however, to conclude that choice is simply harmful. Later attempts to repeat the jam experiment have produced mixed results, and a 2010 analysis of fifty studies found that, on average, the effect of having many options was close to zero. What seems to matter is context. Too much choice is most damaging when people lack clear preferences, when the options are difficult to compare, or when they are under time pressure. An experienced wine collector, for instance, may welcome a long wine list that would leave a casual drinker confused.</p>
<p>These findings have practical implications. Some companies have reduced their product ranges and seen sales rise as a result. Governments designing pension schemes have found that offering a sensible default option, which people can change if they wish, leads to better outcomes than presenting a long list of funds. For individuals, the advice is perhaps surprisingly simple: decide in advance what really matters, accept ‘good enough’ where the stakes are low, and resist the temptation to keep looking once a satisfactory option has been found.</p>
<p>In my view, the paradox of choice tells us less about choice itself than about how we manage it. Freedom to choose remains valuable; the challenge is to build environments in which that freedom does not become a burden.</p>`
        },
        groups: [
          {
            type: 'mc', from: 27, to: 31,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 27, text: 'In the first paragraph, the writer says that the economists’ assumption was', options: [
                { k: 'A', t: 'never supported by evidence.' },
                { k: 'B', t: 'correct in many situations.' },
                { k: 'C', t: 'based on psychological research.' },
                { k: 'D', t: 'rejected by most consumers.' }], answer: 'B' },
              { n: 28, text: 'In the jam experiment, the larger display', options: [
                { k: 'A', t: 'led to more sales.' },
                { k: 'B', t: 'attracted a higher proportion of shoppers.' },
                { k: 'C', t: 'was designed by Barry Schwartz.' },
                { k: 'D', t: 'offered cheaper products.' }], answer: 'B' },
              { n: 29, text: 'According to Schwartz, people feel regret because they', options: [
                { k: 'A', t: 'spend more money than they intended.' },
                { k: 'B', t: 'imagine that a rejected option might have been better.' },
                { k: 'C', t: 'do not have enough time to decide.' },
                { k: 'D', t: 'are influenced by the opinions of others.' }], answer: 'B' },
              { n: 30, text: 'Compared with satisficers, maximisers tend to', options: [
                { k: 'A', t: 'make decisions more quickly.' },
                { k: 'B', t: 'achieve worse results.' },
                { k: 'C', t: 'feel less satisfied with their choices.' },
                { k: 'D', t: 'avoid difficult decisions.' }], answer: 'C' },
              { n: 31, text: 'The 2010 analysis found that', options: [
                { k: 'A', t: 'choice is harmful in most situations.' },
                { k: 'B', t: 'the original jam experiment was flawed.' },
                { k: 'C', t: 'on average, many options had very little effect.' },
                { k: 'D', t: 'experts prefer a smaller range of options.' }], answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 32, to: 36,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 32, text: 'The idea that more choice leads to greater satisfaction is an appealing one.', answer: 'YES' },
              { n: 33, text: 'The jam experiment was the first study ever carried out on consumer choice.', answer: 'NOT GIVEN' },
              { n: 34, text: 'Satisficers generally obtain higher-paid jobs than maximisers.', answer: 'NO' },
              { n: 35, text: 'Having many options is especially problematic when people are short of time.', answer: 'YES' },
              { n: 36, text: 'Governments should remove choice from pension schemes completely.', answer: 'NO' }
            ]
          },
          {
            type: 'match', from: 37, to: 40,
            instr: 'Complete each sentence with the correct ending, <b>A–F</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'can lead to better outcomes than a long list.' },
              { k: 'B', t: 'is always the most expensive option.' },
              { k: 'C', t: 'may cause people to avoid making a decision.' },
              { k: 'D', t: 'may appreciate a wide selection.' },
              { k: 'E', t: 'has been banned in some countries.' },
              { k: 'F', t: 'may raise people’s expectations.' }
            ],
            questions: [
              { n: 37, text: 'The effort of comparing a large number of options', answer: 'C' },
              { n: 38, text: 'A very wide range of products', answer: 'F' },
              { n: 39, text: 'An experienced wine collector', answer: 'D' },
              { n: 40, text: 'A sensible default option', answer: 'A' }
            ]
          }
        ]
      }
    ]
  },

  /* ===================================================== WRITING */
  writing: {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p><b>The chart below shows the percentage of households in one country that used four main sources of energy for heating in 1990, 2005 and 2020.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'bar',
          title: 'Main source of household heating (% of households)',
          categories: ['1990', '2005', '2020'],
          unit: '%',
          series: [
            { name: 'Gas', values: [45, 52, 41] },
            { name: 'Electricity', values: [20, 27, 33] },
            { name: 'Oil', values: [30, 15, 6] },
            { name: 'Renewables', values: [5, 6, 20] }
          ],
          max: 60
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>Some people believe that university students should be required to study subjects outside their main field, such as arts courses for science students. Others think students should focus only on their chosen subject.</b></p>
<p><b>Discuss both these views and give your own opinion.</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  }
};
IELTS.add('listening', 1, T.listening);
IELTS.add('reading-academic', 1, T.reading);
IELTS.add('writing-academic', 1, T.writing);
})();

/* ===================================================== GENERAL TRAINING */
(() => {
const TFI = 'Do the following statements agree with the information given in the text?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this';

const readingGeneral = {
  parts: [
    /* ---------- Section 1 */
    {
      title: 'Part 1',
      instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
      range: [1, 14],
      passage: {
        title: 'Section 1',
        html: `
<h3>Westbrook Community College – Evening Courses, Autumn Term</h3>
<p><b class="para">A</b> <b>Conversational Spanish for Beginners</b><br>Tuesdays, 7.00–9.00 pm, 10 weeks, £120. No previous knowledge of the language is needed. The course book is included in the fee. In the final week there is an optional informal assessment, for which there is no charge, and learners who wish to continue can then join the Improvers class in the spring.</p>
<p><b class="para">B</b> <b>Digital Photography</b><br>Wednesdays, 6.30–8.30 pm, 8 weeks, £145. Learn to control light, focus and composition. Students must bring their own digital camera with manual settings; please note that a smartphone is not suitable for this course. The fee covers two Saturday field trips to local beauty spots, and students’ best photographs will be displayed at an end-of-course exhibition in the college library.</p>
<p><b class="para">C</b> <b>Small Business Bookkeeping</b><br>Mondays, 6.00–8.00 pm, 12 weeks, £180. Ideal for anyone thinking of setting up their own business. Successful students receive a nationally recognised certificate. Please be aware that the examination fee of £35 is not included in the course price and is payable directly to the examining body.</p>
<p><b class="para">D</b> <b>Furniture Restoration</b><br>Thursdays, 7.00–9.30 pm, 10 weeks, £160. Bring an old chair, stool or small table back to life. Materials such as wax, varnish and fabric are charged separately at cost. To ensure that everyone gets individual attention in the workshop, this class is restricted to eight students. Please bring your chosen item by week three.</p>
<p><b class="para">E</b> <b>Creative Writing</b><br>Mondays, 8.00–9.30 pm, 6 weeks, £75. This course takes place entirely online through video sessions, so you can take part from the comfort of your own home. Each week, members share their work and receive friendly feedback. At the end of the course, a selection of stories and poems by the group will be published in a printed collection.</p>
<p><b>How to enrol:</b> Enrol online or at the main reception by 15 September. Students aged over 60 receive a 20% discount on all course fees (but not on materials). If a course is cancelled because of low numbers, you will receive a full refund.</p>

<h3>Cityline Bus Pass – Information for Passengers</h3>
<p><b>Which pass?</b> A weekly pass costs £18, a monthly pass £62 and an annual pass £590. Full-time students with a valid student ID card receive 30% off the monthly pass. Unfortunately, this discount cannot be offered to part-time students.</p>
<p><b>Applying</b> You can apply online or in person at the Travel Centre on Market Street. For monthly and annual passes you will need to provide a passport-style photograph, which must have been taken within the last month.</p>
<p><b>Your smartcard</b> All passes are loaded onto a Cityline smartcard. The card itself costs £3, a one-off charge which is not refundable. The card can be topped up online, at the Travel Centre or at any ticket machine at major bus stops.</p>
<p><b>Lost or stolen cards</b> If your card is lost or stolen, please report it within 48 hours. A replacement card will be issued for £10, and any remaining value on your pass will be transferred to it.</p>
<p><b>Where can I use my pass?</b> Passes are valid on all Cityline routes, including night buses, at no extra cost. They are not valid on the Airport Express service, for which pass holders must pay a supplement of £4 per journey. Children under five travel free when accompanied by a pass holder.</p>`
      },
      groups: [
        {
          type: 'match', from: 1, to: 7,
          instr: 'Look at the five evening courses, <b>A–E</b>, at Westbrook Community College.<br>For which course are the following statements true?<br><b>NB</b> You may use any letter more than once.',
          boxTitle: 'Courses',
          options: [
            { k: 'A', t: 'Conversational Spanish for Beginners' },
            { k: 'B', t: 'Digital Photography' },
            { k: 'C', t: 'Small Business Bookkeeping' },
            { k: 'D', t: 'Furniture Restoration' },
            { k: 'E', t: 'Creative Writing' }
          ],
          questions: [
            { n: 1, text: 'The number of people in the class is limited.', answer: 'D' },
            { n: 2, text: 'Students can attend without leaving home.', answer: 'E' },
            { n: 3, text: 'Students must pay an extra amount to take a test.', answer: 'C' },
            { n: 4, text: 'The course includes trips outside the college.', answer: 'B' },
            { n: 5, text: 'The price includes the cost of learning materials.', answer: 'A' },
            { n: 6, text: 'Some of the students’ work will appear in print.', answer: 'E' },
            { n: 7, text: 'A certain type of equipment is not acceptable for the course.', answer: 'B' }
          ]
        },
        {
          type: 'tf', variant: 'tf', from: 8, to: 11,
          instr: TFI,
          questions: [
            { n: 8, text: 'An annual pass is cheaper than buying twelve monthly passes.', answer: 'TRUE' },
            { n: 9, text: 'Part-time students are entitled to a discount on the monthly pass.', answer: 'FALSE' },
            { n: 10, text: 'The Travel Centre on Market Street is open on Sundays.', answer: 'NOT GIVEN' },
            { n: 11, text: 'Pass holders can use night buses without paying extra.', answer: 'TRUE' }
          ]
        },
        {
          type: 'gap', from: 12, to: 14,
          instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> from the text for each answer.',
          template: `
            <p class="sent">The photograph needed for a monthly or annual pass must be no older than one [[12]].</p>
            <p class="sent">Passengers should report a lost card within [[13]].</p>
            <p class="sent">On the Airport Express, pass holders must pay a £4 [[14]] for each journey.</p>`,
          answers: { 12: ['month'], 13: ['48 hours', 'forty-eight hours'], 14: ['supplement'] }
        }
      ]
    },

    /* ---------- Section 2 */
    {
      title: 'Part 2',
      instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
      range: [15, 27],
      passage: {
        title: 'Section 2',
        html: `
<h3>Harland Logistics – Your First Week: A Guide for New Employees</h3>
<p><b class="para">A</b> <b>Your first morning</b> Please report to the main reception at 8.45 am and ask for the HR coordinator, who will take you through the necessary paperwork. Remember to bring photo ID and your bank details, as these are needed for payroll purposes. Without them, we may not be able to pay you at the end of your first month.</p>
<p><b class="para">B</b> <b>Security</b> You will be issued with a security pass on your first morning. For safety reasons, this must be worn visibly at all times while you are on site, including in the car park. If you lose your pass, inform the facilities team immediately so that it can be deactivated.</p>
<p><b class="para">C</b> <b>IT access</b> Your login details will be sent to your personal email the evening before you start. You must change your password within 24 hours of first logging in. All new staff are also required to complete an online training module on data protection during their first week; you will not be given access to customer records until you have done so.</p>
<p><b class="para">D</b> <b>Your buddy</b> Every new employee is paired with a buddy: an experienced colleague from your own team who is not your line manager. Your buddy can answer everyday questions, from how to book a meeting room to where to find the stationery cupboard, and will meet you regularly during your first three months.</p>
<p><b class="para">E</b> <b>Probation</b> All new staff complete a six-month probation period. You will have review meetings with your line manager at the end of your first, third and sixth months, at which you can discuss your progress and any additional training you may need.</p>
<p><b class="para">F</b> <b>Getting to work</b> Parking on site is limited, and priority for parking spaces is given to employees who car-share. Secure cycle storage and showers are available on the ground floor of Building 2.</p>

<h3>Harland Wellbeing Programme – Spring Launch</h3>
<p>We are pleased to announce a range of new initiatives to support the health and wellbeing of all our staff.</p>
<p><b>Counselling</b> A free and completely confidential counselling service is now available through an independent external provider. Staff can have up to six sessions per year. To arrange a session, simply call the helpline number on the intranet. Neither HR nor your manager will be told that you have used the service.</p>
<p><b>Lunchtime yoga</b> Thirty-minute yoga sessions will run every Tuesday and Thursday in Room 4. Places are limited to fifteen per session, so you must sign up in advance on the intranet. Mats are provided.</p>
<p><b>Fresh fruit</b> Bowls of fresh fruit will be delivered to every floor on Mondays and Wednesdays, free of charge.</p>
<p><b>Gym membership</b> The company will pay half the cost of membership at any Fitzone gym. This offer is open to all staff who have successfully completed their probation period.</p>
<p><b>Mental health first aiders</b> Twelve members of staff have been trained as mental health first aiders, and their names can be found on the noticeboards on each floor. A further training course will take place in May. If you would like to volunteer, please apply to HR by 30 April.</p>
<p><b>Step challenge</b> Throughout June, teams of five will compete to walk the greatest number of steps. Teams are made up of colleagues from the same department and will be arranged by HR, so there is no need to register. The team with the highest total will choose a charity, which will receive a donation of £500 from the company.</p>`
      },
      groups: [
        {
          type: 'gap', from: 15, to: 20,
          instr: 'Complete the notes below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.',
          template: `
            <div class="notes-box">
              <h4>Notes for new employees</h4>
              <ul>
                <li>first morning: bring photo ID and [[15]] (needed for payroll)</li>
                <li>security pass: must be worn [[16]] everywhere on site</li>
                <li>login details: sent to your [[17]] before your first day</li>
                <li>first week: complete online module on [[18]]</li>
                <li>buddy: someone from your team who is not your [[19]]</li>
                <li>parking: priority for staff who [[20]]</li>
              </ul>
            </div>`,
          answers: { 15: ['bank details'], 16: ['visibly'], 17: ['personal email'], 18: ['data protection'], 19: ['line manager'], 20: ['car-share', 'car share'] }
        },
        {
          type: 'tf', variant: 'tf', from: 21, to: 24,
          instr: TFI.replace('the text', 'the Harland Wellbeing Programme notice'),
          questions: [
            { n: 21, text: 'Managers are informed when a member of their team uses the counselling service.', answer: 'FALSE' },
            { n: 22, text: 'The counselling is provided by people who do not work for Harland Logistics.', answer: 'TRUE' },
            { n: 23, text: 'The yoga sessions are led by a qualified instructor.', answer: 'NOT GIVEN' },
            { n: 24, text: 'Staff who are still on probation can receive help with gym membership.', answer: 'FALSE' }
          ]
        },
        {
          type: 'multi', from: 25, to: 26, ns: [25, 26],
          instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
          text: 'Which <b>TWO</b> activities require staff to put their names down in advance?',
          options: [
            { k: 'A', t: 'lunchtime yoga' },
            { k: 'B', t: 'counselling' },
            { k: 'C', t: 'the step challenge' },
            { k: 'D', t: 'mental health first aid training' },
            { k: 'E', t: 'the fresh fruit scheme' }
          ],
          answers: ['A', 'D']
        },
        {
          type: 'mc', from: 27, to: 27,
          instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
          questions: [
            { n: 27, text: 'What will happen as a result of the step challenge?', options: [
              { k: 'A', t: 'Each member of the winning team will receive £500.' },
              { k: 'B', t: 'The winning department will receive extra funding.' },
              { k: 'C', t: 'A charity selected by the winning team will receive money.' },
              { k: 'D', t: 'HR will choose a charity to support.' }], answer: 'C' }
          ]
        }
      ]
    },

    /* ---------- Section 3 */
    {
      title: 'Part 3',
      instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
      range: [28, 40],
      passage: {
        title: 'Two Wheels and Two Centuries: The Story of the Bicycle',
        html: `
<p><b class="para">A</b> In the summer of 1817, a German civil servant named Karl von Drais took a wooden machine out onto the roads near Mannheim and covered about fourteen kilometres in under an hour. His ‘running machine’ had two wheels in line, a padded seat and a simple steering bar, but no pedals: the rider sat astride the frame and pushed against the ground with his feet. Some historians believe Drais was searching for an alternative to the horse. The previous year, a volcanic eruption on the other side of the world had caused crops to fail across Europe, and many horses had died or been slaughtered because there was nothing to feed them. Whether or not this was his motivation, the machine attracted brief excitement in Germany, France and Britain, where fashionable young men rode ‘hobby horses’ through city parks. The craze faded within a few years, partly because riders were accused of endangering pedestrians, and several cities banned the machines from their pavements.</p>
<p><b class="para">B</b> For the next four decades, the idea was largely forgotten. Then, in the 1860s, cranks and pedals were attached directly to the front wheel of a two-wheeled machine in Paris. Exactly who did this first remains a matter of argument. The blacksmith Pierre Michaux and his son Ernest are often given the credit, but a mechanic called Pierre Lallement, who later moved to the United States, took out an American patent for a similar design in 1866, and other claims have been made since. What is certain is that the ‘velocipede’, as it was called, became highly fashionable. With its heavy iron frame and wooden wheels with iron rims, it gave such an uncomfortable ride on cobbled streets that the English nicknamed it the ‘boneshaker’.</p>
<p><b class="para">C</b> Manufacturers soon realised that, because the pedals turned the front wheel directly, a larger wheel would carry the rider further with each turn of the pedals. By the 1870s this had led to the high-wheeler, later known in Britain as the penny-farthing, after the contrast between the largest and smallest coins of the day. Front wheels grew to as much as one and a half metres in diameter, and the machines were capable of impressive speeds. They were also lighter than the boneshaker, thanks to solid rubber tyres and wire-spoked wheels. Yet the rider sat high above the ground, almost directly over the centre of the front wheel, and any obstacle, such as a stone or a hole in the road, could throw him forwards over the handlebars – an accident so common that it acquired its own name: ‘taking a header’. Riding a high-wheeler therefore remained a pursuit for athletic young men with money to spare, and it was they who formed the first cycling clubs.</p>
<p><b class="para">D</b> The machine that would replace it appeared in 1885. Its designer, John Kemp Starley of Coventry, called it the Rover. It had two wheels of similar size, and the rider sat between them, much lower and more safely than before. Instead of turning the front wheel, the pedals drove the rear wheel by means of a chain, and the gearing of the chain allowed a modest wheel to travel as far as a giant one. Three years later, John Boyd Dunlop, a Scottish vet living in Belfast, developed an air-filled tyre to give his young son a smoother ride on his tricycle. When fitted to bicycles, these pneumatic tyres not only made riding far more comfortable but also proved faster than solid ones. Within a few years, the combination of chain drive, equal wheels and air-filled tyres had become the standard form of the bicycle, and it has changed remarkably little since.</p>
<p><b class="para">E</b> The 1890s saw a bicycle boom in Europe and North America. Mass production brought prices down, and a second-hand bicycle was soon within reach of clerks and factory workers, for whom it offered a cheap way to travel to work or to escape the city at weekends. Its effect on women was particularly striking. For the first time, many middle-class women could travel independently without a companion to accompany them, and the long, heavy skirts of the period were soon replaced by shorter skirts or by loose trousers called bloomers. Critics complained that cycling was unladylike or even harmful to health, but these warnings did little to slow its popularity. Cyclists’ organisations also became a political force, campaigning for better roads – roads which, ironically, would soon be taken over by the motor car.</p>
<p><b class="para">F</b> During the twentieth century, the car steadily pushed the bicycle aside in much of Europe and especially in North America. As towns were redesigned around motor traffic, cycling came to be seen as either a pastime for children or a sport, rather than a serious means of transport. There were important exceptions. In China, the bicycle became the main form of personal transport for hundreds of millions of people. In the Netherlands, flat land played a part, but so did deliberate choices: in the 1970s, public protests over the number of children killed in road accidents persuaded governments to invest heavily in separate cycle paths.</p>
<p><b class="para">G</b> Today the bicycle is enjoying a revival. Concern about pollution, traffic congestion and lack of exercise has encouraged cities from Paris to Bogotá to build networks of protected lanes, while bike-sharing schemes allow people to pick up a bicycle in one place and leave it in another. Electric bicycles, which assist the rider with a small battery-powered motor, have made cycling practical for longer journeys and for older riders. Two hundred years after Drais set off near Mannheim, his simple idea of balancing on two wheels shows no sign of disappearing.</p>`
      },
      groups: [
        {
          type: 'match', from: 28, to: 34,
          instr: 'The text has seven paragraphs, <b>A–G</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
          boxTitle: 'List of Headings',
          options: [
            { k: 'i', t: 'An invention that may have been prompted by a natural disaster' },
            { k: 'ii', t: 'Disagreement over who deserves the credit' },
            { k: 'iii', t: 'Greater speed, but greater danger' },
            { k: 'iv', t: 'A design that has lasted to the present day' },
            { k: 'v', t: 'Independence for new groups of riders' },
            { k: 'vi', t: 'Losing ground to motor transport, with some exceptions' },
            { k: 'vii', t: 'New technology and city planning bring cyclists back' },
            { k: 'viii', t: 'Laws that restricted where cycles could be ridden' },
            { k: 'ix', t: 'The spread of bicycle manufacturing to Asia' },
            { k: 'x', t: 'Medical evidence about the effects of cycling' }
          ],
          questions: [
            { n: 28, text: 'Paragraph A', answer: 'i' },
            { n: 29, text: 'Paragraph B', answer: 'ii' },
            { n: 30, text: 'Paragraph C', answer: 'iii' },
            { n: 31, text: 'Paragraph D', answer: 'iv' },
            { n: 32, text: 'Paragraph E', answer: 'v' },
            { n: 33, text: 'Paragraph F', answer: 'vi' },
            { n: 34, text: 'Paragraph G', answer: 'vii' }
          ]
        },
        {
          type: 'mc', from: 35, to: 37,
          instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
          questions: [
            { n: 35, text: 'Why did the high-wheeler have such a large front wheel?', options: [
              { k: 'A', t: 'It made the machine more stable on rough roads.' },
              { k: 'B', t: 'It allowed the rider to travel further with each turn of the pedals.' },
              { k: 'C', t: 'It reduced the weight of the frame.' },
              { k: 'D', t: 'It made the rider more visible to other road users.' }], answer: 'B' },
            { n: 36, text: 'What does the writer say about Dunlop’s tyre?', options: [
              { k: 'A', t: 'It was designed specifically for racing bicycles.' },
              { k: 'B', t: 'It was originally intended for a child’s vehicle.' },
              { k: 'C', t: 'It was more comfortable but slower than a solid tyre.' },
              { k: 'D', t: 'It was first used on Starley’s Rover in 1885.' }], answer: 'B' },
            { n: 37, text: 'What point does the writer make about cycling in the Netherlands?', options: [
              { k: 'A', t: 'Its survival there was due only to the flat landscape.' },
              { k: 'B', t: 'It declined sharply during the 1970s.' },
              { k: 'C', t: 'Public pressure contributed to investment in cycle paths.' },
              { k: 'D', t: 'The government followed the example of China.' }], answer: 'C' }
          ]
        },
        {
          type: 'gap', from: 38, to: 40,
          instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
          template: `
            <div class="notes-box">
              <h4>The bicycle boom of the 1890s</h4>
              <p>Lower prices meant that even clerks and [[38]] workers could buy a used bicycle. Women gained new independence, and many began wearing shorter skirts or loose trousers known as [[39]]. Groups representing cyclists campaigned for improvements to [[40]], which were later dominated by cars.</p>
            </div>`,
          answers: { 38: ['factory'], 39: ['bloomers'], 40: ['roads'] }
        }
      ]
    }
  ]
};

const writingGeneral = {
  parts: [
    {
      title: 'Part 1',
      instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
      minWords: 150,
      prompt: `
<p>You are applying for a place on a course or for a job, and you need a reference from someone who knows you well. You would like to ask a teacher who taught you several years ago.</p>
<p>Write a letter to your former teacher. In your letter</p>
<ul>
<li>remind the teacher who you are and how they know you</li>
<li>explain what you are applying for and why</li>
<li>say what information you would like the teacher to include in the reference</li>
</ul>
<p>Write at least 150 words.</p>
<p>You do <b>NOT</b> need to write any addresses.</p>
<p>Begin your letter as follows:</p>
<p><b>Dear ......,</b></p>`
    },
    {
      title: 'Part 2',
      instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
      minWords: 250,
      prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>In many countries, an increasing number of employees now work from home for some or all of the week.</b></p>
<p><b>Do the advantages of this development outweigh the disadvantages?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
    }
  ]
};

IELTS.add('reading-general', 1, readingGeneral);
IELTS.add('writing-general', 1, writingGeneral);
})();
