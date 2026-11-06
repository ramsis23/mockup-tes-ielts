/* Konten tes 10 (orisinal, dibuat khusus untuk latihan ini).
   Format audio: ['N', teks] = narator, ['A'|'B'|'C', teks] = pembicara, ['P', detik] = jeda. */
(() => {
const T = {
  /* ===================================================== LISTENING */
  listening: {
    parts: [
      /* ---------------- Part 1 */
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'gap', from: 1, to: 7,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Second-hand bicycle for sale</h4>
                <ul>
                  <li>Seller: Greg [[1]]</li>
                  <li>Type of bike: a [[2]] (not a mountain bike as in the advert)</li>
                  <li>Colour of frame: dark [[3]]</li>
                  <li>Age: [[4]] years old</li>
                  <li>Price: £[[5]] if collected this week</li>
                  <li>Condition: chain and gears serviced in spring; new [[6]] fitted last month</li>
                  <li>Address: 17 [[7]] Street (behind the swimming pool)</li>
                </ul>
              </div>`,
            answers: {
              1: ['thornbury'], 2: ['hybrid', 'hybrid bike'], 3: ['green'], 4: ['3', 'three'],
              5: ['180', 'one hundred and eighty', 'a hundred and eighty'], 6: ['tyres', 'tires'], 7: ['quarry']
            }
          },
          {
            type: 'mc', from: 8, to: 10,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 8, text: 'Why is Greg selling the bicycle?', options: [
                { k: 'A', t: 'He is moving to another area.' },
                { k: 'B', t: 'He has bought an electric bike.' },
                { k: 'C', t: 'He finds it uncomfortable on hills.' }], answer: 'B' },
              { n: 9, text: 'What will be included with the bicycle?', options: [
                { k: 'A', t: 'a lock' },
                { k: 'B', t: 'a set of lights' },
                { k: 'C', t: 'a pump' }], answer: 'A' },
              { n: 10, text: 'When will the woman go to see the bicycle?', options: [
                { k: 'A', t: 'Saturday morning' },
                { k: 'B', t: 'Saturday afternoon' },
                { k: 'C', t: 'Sunday morning' }], answer: 'C' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a woman telephoning a man who is selling a second-hand bicycle. First, you have some time to look at questions 1 to 7.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 1 to 7.'],
          ['B', 'Hello?'],
          ['A', "Oh, hi. I'm calling about the bicycle you advertised on the community website. Is it still available?"],
          ['B', "Yes, it is. Nobody's come to look at it yet, actually."],
          ['A', "Great. Sorry, the advert only gave your first name, Greg. Could I take your surname, just so I've got it written down?"],
          ['B', "Of course. It's Thornbury."],
          ['A', 'Could you spell that for me?'],
          ['B', 'Sure. T, H, O, R, N, B, U, R, Y.'],
          ['A', 'Thanks. Now, the advert says it is a mountain bike. Is that right?'],
          ['B', "Ah, no, that was my mistake. I typed the advert in a hurry. It's actually a hybrid. So it's fine on the odd gravel path, but it's really designed for roads. Commuting, that kind of thing."],
          ['A', "That's exactly what I need. I'm going to be cycling to work."],
          ['B', "Then it'll suit you very well."],
          ['A', 'And what colour is it? The photo was a bit dark.'],
          ['B', "When I bought it the frame was silver, but I had it resprayed last year because it was getting scratched. It's green now. A dark green, with black handlebars."],
          ['A', 'Lovely. And how old is it?'],
          ['B', "Let me think. I'd say about four years. No, wait, I bought it the summer we moved into this house, so it's three years old."],
          ['A', "OK. And you're asking two hundred pounds?"],
          ['B', "That's what I put in the advert, but to be honest, I'd accept a hundred and eighty if you're able to collect it this week. I'd like the space in the garage."],
          ['A', "That sounds fair. What's the condition like?"],
          ['B', "Very good. The chain and the gears were serviced in the spring, and I had new tyres fitted just last month, so you won't need to think about those for a long time. The brakes are the original ones, but they work perfectly well."],
          ['A', 'Good. And where would I come to see it?'],
          ['B', "I'm at 17 Quarry Street. That's Q, U, A, double R, Y. It's the road just behind the swimming pool."],
          ['A', 'Oh yes, I know where that is.'],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 8 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 8 to 10.'],
          ['A', "Can I ask why you're selling it?"],
          ['B', "Well, people tend to assume I'm moving, because our house is up for sale too, but actually we're only moving a couple of streets away. The real reason is that I've bought an electric bike. There's a long hill on my way to work, and I got tired of arriving at the office exhausted."],
          ['A', 'I can understand that. Does anything come with the bike?'],
          ['B', "I'm afraid I took the lights off, because they fit the new bike. There used to be a pump as well, but it broke and I threw it away. I'll include the lock, though. It's a heavy one, very secure. It cost me about forty pounds."],
          ['A', "That's helpful, thanks. So when would be a good time to come and look at it?"],
          ['B', "Saturday morning I'm working, and in the afternoon I've got my son's football match. Would Saturday evening work?"],
          ['A', "Not really, I'm out on Saturday evening. What about Sunday?"],
          ['B', "Sunday's fine. Morning or afternoon?"],
          ['A', 'Sunday morning would be perfect. Around ten o’clock?'],
          ['B', "Ten's good. Bring a helmet if you'd like to take it for a test ride."],
          ['A', 'I will. Thanks, Greg. See you then.'],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 2 */
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'mc', from: 11, to: 13,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 11, text: 'During the exam period, the main library', options: [
                { k: 'A', t: 'is open twenty-four hours a day.' },
                { k: 'B', t: 'closes at midnight.' },
                { k: 'C', t: 'closes at ten p.m.' }], answer: 'A' },
              { n: 12, text: 'How many items can undergraduate students borrow at one time?', options: [
                { k: 'A', t: '8' },
                { k: 'B', t: '12' },
                { k: 'C', t: '20' }], answer: 'B' },
              { n: 13, text: 'What happens if a standard loan is more than a week overdue?', options: [
                { k: 'A', t: 'A daily fine is charged.' },
                { k: 'B', t: 'The student cannot borrow anything else.' },
                { k: 'C', t: 'The student’s tutor is informed.' }], answer: 'B' }
            ]
          },
          {
            type: 'match', from: 14, to: 18,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 14–18.`,
            figure: `<svg viewBox="0 0 660 440" role="img" aria-label="Plan of the ground floor of the Hadley Library with locations A to H">
              <text class="fig-title" x="300" y="28" text-anchor="middle">Hadley Library – Ground Floor</text>
              <line class="thin" x1="180" y1="50" x2="180" y2="370"/><line class="thin" x1="300" y1="50" x2="300" y2="370"/><line class="thin" x1="420" y1="50" x2="420" y2="370"/>
              <line class="thin" x1="60" y1="150" x2="180" y2="150"/><line class="thin" x1="300" y1="150" x2="540" y2="150"/>
              <line class="thin" x1="60" y1="270" x2="180" y2="270"/><line class="thin" x1="300" y1="270" x2="540" y2="270"/>
              <path class="line" d="M210 370 H60 V50 H540 V370 H270"/>
              <path class="thin" d="M315 62 V122 M327 62 V122 M339 62 V122 M351 62 V122 M363 62 V122 M375 62 V122 M387 62 V122 M399 62 V122 M411 62 V122"/>
              <text class="halo" x="360" y="140" text-anchor="middle">Stairs</text>
              <rect class="area" x="205" y="196" width="70" height="24"/>
              <text x="240" y="240" text-anchor="middle">Help desk</text>
              <text x="360" y="312" text-anchor="middle">Café</text>
              <circle class="thin" cx="330" cy="342" r="8"/><circle class="thin" cx="390" cy="342" r="8"/>
              <g class="lbl" text-anchor="middle">
                <rect class="box" x="108" y="88" width="24" height="24"/><text class="lbl" x="120" y="105">A</text>
                <rect class="box" x="228" y="88" width="24" height="24"/><text class="lbl" x="240" y="105">B</text>
                <rect class="box" x="468" y="88" width="24" height="24"/><text class="lbl" x="480" y="105">C</text>
                <rect class="box" x="108" y="198" width="24" height="24"/><text class="lbl" x="120" y="215">D</text>
                <rect class="box" x="348" y="198" width="24" height="24"/><text class="lbl" x="360" y="215">E</text>
                <rect class="box" x="468" y="198" width="24" height="24"/><text class="lbl" x="480" y="215">F</text>
                <rect class="box" x="108" y="308" width="24" height="24"/><text class="lbl" x="120" y="325">G</text>
                <rect class="box" x="468" y="308" width="24" height="24"/><text class="lbl" x="480" y="325">H</text>
              </g>
              <text class="halo" x="300" y="43" text-anchor="middle">back of the building</text>
              <path class="solid" d="M240 380 l-9 16 h18 z"/>
              <text x="240" y="418" text-anchor="middle">Main entrance (you are here)</text>
              <g class="compass" transform="translate(615 70)"><line class="thin" x1="0" y1="-18" x2="0" y2="18"/><line class="thin" x1="-18" y1="0" x2="18" y2="0"/><path class="solid" d="M0 -22 l-5 10 h10 z"/><path class="solid" d="M0 22 l-5 -10 h10 z"/><path class="solid" d="M22 0 l-10 -5 v10 z"/><path class="solid" d="M-22 0 l10 -5 v10 z"/><text x="0" y="-27" text-anchor="middle">N</text><text x="0" y="37" text-anchor="middle">S</text><text x="33" y="4" text-anchor="middle">E</text><text x="-33" y="4" text-anchor="middle">W</text></g>
            </svg>`,
            boxTitle: 'Plan locations',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 14, text: 'printing room', answer: 'G' },
              { n: 15, text: 'silent study area', answer: 'C' },
              { n: 16, text: 'group study rooms', answer: 'F' },
              { n: 17, text: 'lockers', answer: 'B' },
              { n: 18, text: 'short loan collection', answer: 'H' }
            ]
          },
          {
            type: 'multi', from: 19, to: 20, ns: [19, 20],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> things does the speaker advise new students to do this week?',
            options: [
              { k: 'A', t: 'activate their library card online' },
              { k: 'B', t: 'attend a workshop on referencing' },
              { k: 'C', t: 'download the library app' },
              { k: 'D', t: 'buy printing credit' },
              { k: 'E', t: 'book a visit to the archives' }
            ],
            answers: ['A', 'C']
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a librarian giving an orientation talk to new students at a university library. First, you have some time to look at questions 11 to 13.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 11 to 13.'],
          ['A', "Good afternoon, everyone, and welcome to the Hadley Library. I'm Ruth, one of the student services librarians, and in the next fifteen minutes or so I'll give you the basic information you need to get started here."],
          ['A', "Let's begin with opening hours, because that's what people ask about most. During term time, the library opens at eight in the morning and closes at ten at night from Monday to Friday. At weekends it stays open later, until midnight, because a lot of you prefer to study then. And during the exam period, which runs from late April until the middle of June, we don't close at all. The main building is open around the clock, twenty-four hours a day, although the help desk is only staffed during the day."],
          ['A', "Next, borrowing. Your student card is also your library card. If you're an undergraduate, you can have up to twelve items out at any one time. Postgraduate students can borrow twenty, and those of you on short courses or the foundation year are limited to eight."],
          ['A', "Now, something that's changed recently. Many of you will have heard that libraries charge fines for late books. We used to, but we stopped doing that for standard loans two years ago. Instead, if something is more than a week overdue, your borrowing rights are suspended. That means you can't take out anything else until the item comes back. We don't contact your department or your tutor, so it's entirely between you and us. But please do return things on time, because other people are often waiting for them."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 14 to 18.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 14 to 18.'],
          ['A', "Let me now explain the layout of the ground floor. You should have a plan in your welcome pack. Imagine you're standing just inside the main entrance, looking towards the back of the building. The help desk is straight ahead of you, and the café is on your right, next to the entrance."],
          ['A', "On your immediate left as you come in, in the corner of the building, is the printing room. There are twenty printers in there, and also scanners and a photocopier."],
          ['A', "If you want to work in complete silence, go to the far right-hand corner at the back. The silent study area is the room just to the right of the main staircase. No phones, no conversations, and no food in there, please."],
          ['A', "For group work, we have six bookable group study rooms. They're on the right-hand side of the building, in the middle. Don't confuse them with the room between the help desk and the group rooms. That's the staff office, and it's not open to students."],
          ['A', "You'll need somewhere to leave your coats and bags, as large bags aren't allowed in the silent area. The lockers are behind the help desk, against the back wall, immediately to the left of the stairs. They work with your student card, so you don't need a key."],
          ['A', "Finally, the short loan collection. These are the books that are in very high demand, and you can only borrow them for four hours at a time. They used to be upstairs, but they've now been moved to the corner room on the right of the entrance, on the other side of the café, so you can pick them up quickly on your way in."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 19 and 20.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 19 and 20.'],
          ['A', "Before I finish, there are a few things I'd strongly recommend you do in your first week. First, although your card works as soon as you enrol, you won't be able to log in to our electronic journals until you've activated your library account online, so please do that this week. It takes about two minutes."],
          ['A', "We also run workshops on referencing, but there's no need to attend those yet. They're much more useful once you've been given your first assignment, so wait until later in the term."],
          ['A', "What I would suggest is that you download the library app straight away. It lets you renew books, reserve rooms and check how busy each floor is."],
          ['A', "As for printing, every student gets five pounds of free credit at the start of the year, so you won't need to buy any for a while. And the special archives are open to undergraduates from the second term only. Right, are there any questions?"],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 3 */
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'mc', from: 21, to: 23,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 21, text: 'What did the tutor criticise in the first draft of the business plan?', options: [
                { k: 'A', t: 'The market research was too limited.' },
                { k: 'B', t: 'The cost estimates were unrealistic.' },
                { k: 'C', t: 'The document was too long.' }], answer: 'A' },
              { n: 22, text: 'Which location do the students now prefer for the café?', options: [
                { k: 'A', t: 'near the railway station' },
                { k: 'B', t: 'on the university campus' },
                { k: 'C', t: 'in a business park' }], answer: 'C' },
              { n: 23, text: 'Who do they think their main customers will be?', options: [
                { k: 'A', t: 'students' },
                { k: 'B', t: 'office workers' },
                { k: 'C', t: 'families' }], answer: 'B' }
            ]
          },
          {
            type: 'match', from: 24, to: 28,
            instr: 'What do the students decide about each of the following ideas?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–C</b>, next to Questions 24–28.',
            boxTitle: 'Decisions',
            options: [
              { k: 'A', t: 'include it in the plan' },
              { k: 'B', t: 'reject it' },
              { k: 'C', t: 'find out more before deciding' }
            ],
            questions: [
              { n: 24, text: 'outdoor seating', answer: 'C' },
              { n: 25, text: 'a loyalty card scheme', answer: 'A' },
              { n: 26, text: 'evening events', answer: 'B' },
              { n: 27, text: 'a delivery service', answer: 'B' },
              { n: 28, text: 'a menu using local produce', answer: 'A' }
            ]
          },
          {
            type: 'multi', from: 29, to: 30, ns: [29, 30],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> tasks will Hannah do before the next meeting?',
            options: [
              { k: 'A', t: 'design a logo' },
              { k: 'B', t: 'contact a coffee supplier' },
              { k: 'C', t: 'revise the budget' },
              { k: 'D', t: 'write the executive summary' },
              { k: 'E', t: 'survey local workers' }
            ],
            answers: ['C', 'E']
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two business students, Leo and Hannah, discussing a business plan for a café that they are writing for a course assignment. First, you have some time to look at questions 21 to 23.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 23.'],
          ['A', 'So, Hannah, did you read the feedback from Dr Morris on our first draft?'],
          ['B', 'I did. I was worried she’d say it was far too long, but she didn’t mention the length at all.'],
          ['A', "No. And I thought she'd pick holes in the figures, but she said our cost estimates were actually quite sensible."],
          ['B', "Right. Her main point was about the research. She said we'd only asked about twenty people, and all of them were our friends, so it didn't really tell us anything about the market."],
          ['A', "Fair enough. We'll need to do a proper survey this time. Now, the location. Originally we said near the railway station, but rents there are enormous."],
          ['B', "And the campus is out because the university has its own catering contract. I've been thinking about the Westfield business park, though. There are about three thousand people working there and only one sandwich shop."],
          ['A', "I like that. It's cheaper than the station too. Let's go with the business park."],
          ['B', "Which changes who we're aiming at. We'd assumed students, but if we're out at Westfield, it's going to be people working in the offices, mainly."],
          ['A', "Yes. There might be a few families at weekends, but the offices are closed then, so I doubt it. Office workers have to be the main market."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 24 to 28.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 24 to 28.'],
          ['B', "OK, let's go through the list of ideas we had. Outdoor seating first."],
          ['A', "It would be lovely in summer, but I'm not sure whether the landlord would allow tables on the pavement. There may be rules about it on a business park."],
          ['B', "Good point. We can't put it in until we know. Let's check with the management company and decide then."],
          ['A', 'Agreed. What about the loyalty card? Buy nine coffees, get the tenth free.'],
          ['B', "I think that's essential if most customers come every working day. It's cheap to run, too. Definitely put it in."],
          ['A', "Fine. Then there's the idea of evening events. Quiz nights, live music."],
          ['B', "I loved that idea when we were thinking about the station. But at the business park, everyone goes home at half past five. There'd be no one there."],
          ['A', "True. Let's drop it. And the delivery service, taking lunch orders to the offices?"],
          ['B', "I was keen on that at first, but when I worked out the cost of a driver and insurance, it just doesn't add up for a small café."],
          ['A', "And the park is so compact that people can walk over in three minutes anyway. So no delivery, then."],
          ['B', "No. Last one: the menu using local produce. Bread from the bakery in town, vegetables from the farm shop."],
          ['A', "I'm all for that. It gives us something that makes us different from the chain coffee shops, and the farm said they'd give us a good price. It should definitely go in."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 29 and 30.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 29 and 30.'],
          ['A', 'Right, so what needs doing before we see Dr Morris next Thursday?'],
          ['B', "Well, now we're paying a lower rent, the numbers have all changed, so I'll redo the budget. I'm quicker with spreadsheets than you."],
          ['A', "Thanks. I could get in touch with the coffee supplier for prices."],
          ['B', "Good. And the survey, since that was the main criticism. I've got a contact at one of the companies on the park, so I'll go round and survey the people who work there."],
          ['A', "Great. What about the logo? My cousin's a designer. I'll ask her to have a go at that. And the executive summary we should leave until last, when everything else is finished."],
          ['B', 'Makes sense. OK, see you Thursday.'],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 4 */
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
                <h4>Monitoring volcanoes</h4>
                <p><b>Seismic activity</b></p>
                <ul>
                  <li>Rising magma causes clusters of small earthquakes, known as [[31]]</li>
                  <li>Seismometers are placed in a [[32]] around the volcano</li>
                </ul>
                <p><b>Ground deformation</b></p>
                <ul>
                  <li>GPS stations measure how far the ground rises</li>
                  <li>Tiltmeters record very small changes in the [[33]] of the ground</li>
                  <li>Satellite radar can produce maps even through [[34]]</li>
                </ul>
                <p><b>Gas emissions</b></p>
                <ul>
                  <li>Samples are now often collected by [[35]] flown into the plume</li>
                  <li>The ratio of carbon dioxide to sulphur dioxide indicates the [[36]] of the magma</li>
                </ul>
                <p><b>Heat</b></p>
                <ul>
                  <li>Thermal cameras detect hot spots</li>
                  <li>Changes in the [[37]] of crater lakes may be a warning sign</li>
                </ul>
                <p><b>Challenges</b></p>
                <ul>
                  <li>Instruments are often damaged by [[38]]</li>
                  <li>Many active volcanoes have no monitoring because of a lack of [[39]]</li>
                  <li>Scientists must communicate clearly with local [[40]]</li>
                </ul>
              </div>`,
            answers: {
              31: ['swarms'], 32: ['ring'], 33: ['slope'], 34: ['cloud', 'clouds'], 35: ['drones'],
              36: ['depth'], 37: ['colour', 'color'], 38: ['ash'], 39: ['funding'], 40: ['communities']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecturer giving a talk about how scientists monitor volcanoes. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. Today I want to look at how volcanologists try to work out when a volcano might erupt. We can't yet predict eruptions with the precision of a weather forecast, but over the last few decades monitoring has improved enormously, and it has saved many thousands of lives. I'll organise this around four kinds of signal: seismic activity, ground deformation, gas and heat."],
          ['A', "Let's start with earthquakes. As magma forces its way upwards through the crust, it breaks rock and creates small earthquakes. A single tremor tells us very little, but what volcanologists look for is a sudden increase in clusters of small earthquakes, which are known as swarms. To locate these accurately, seismometers are not simply put in one place. They're arranged in a ring around the volcano, so that the arrival times at different instruments can be compared and the source pinpointed."],
          ['A', "The second signal is deformation. When magma accumulates beneath a volcano, the ground above it swells, rather like a balloon being inflated. GPS stations can measure how far the ground rises, sometimes by just a few millimetres. Alongside these, we use tiltmeters. These are extremely sensitive instruments that record tiny changes in the slope of the ground, which can show which side of the volcano is bulging. In recent years, satellites have added a great deal. Using radar, rather than ordinary photography, they can produce detailed maps of ground movement even through cloud, which is a huge advantage on tropical volcanoes that are covered for much of the year."],
          ['A', "Third, gas. Magma contains dissolved gases, mainly water vapour, carbon dioxide and sulphur dioxide, and these are released as it rises. Traditionally, scientists climbed into craters to collect samples by hand, which was obviously dangerous. Today, samples are often collected by drones flown directly into the gas plume. What matters is not just the amount of gas but the proportions. Carbon dioxide escapes from magma earlier than sulphur dioxide, so the ratio between the two gives an indication of the depth of the magma. A falling ratio may mean the magma is getting closer to the surface."],
          ['A', "The fourth signal is heat. Thermal cameras, on the ground and on satellites, can detect new hot spots. And on volcanoes that have crater lakes, observers watch for changes in the temperature and the colour of the water. A lake turning from blue to grey or yellow can suggest that hot fluids are entering it from below."],
          ['A', "Now, the challenges. Monitoring equipment has to survive in a hostile environment. Acid rain corrodes the instruments, but the biggest problem is ash, which can bury or destroy a station in minutes, often exactly when the data are most needed. A second issue is that of the roughly fifteen hundred potentially active volcanoes on land, fewer than half are monitored at all. This is rarely because of technical difficulty. Most often it is simply a lack of funding, since many volcanoes are in countries with limited resources."],
          ['A', "And finally, monitoring is only useful if people act on it. Some of the worst disasters have happened not because the signs were missed, but because warnings were not understood or trusted. So scientists today put a lot of effort into communicating clearly with local communities, explaining the levels of risk long before any crisis begins. In the next lecture, we'll look at a case study of one evacuation that worked well."],
          ['N', 'That is the end of Part 4. You now have 30 seconds to check your answers.'],
          ['P', 30],
          ['N', 'That is the end of the Listening test.']
        ]
      }
    ]
  },

  /* ===================================================== READING ACADEMIC */
  readingAcademic: {
    parts: [
      /* ---------------- Passage 1 */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'The Long Flight of the Monarch',
          html: `
<p>Each autumn, millions of monarch butterflies in eastern North America begin a journey that can exceed 4,000 kilometres, travelling from southern Canada and the northern United States to a small area of mountain forest in central Mexico. For an insect that weighs less than a gram, the achievement is remarkable. What puzzles scientists most, however, is that not one of the individuals making the trip has ever made it before. The butterflies that fly south in autumn are the great-grandchildren of those that left Mexico the previous spring.</p>
<p>The monarch’s year is divided among several generations. Butterflies that emerge in late spring and summer live for only two to six weeks. During this short life they mate, lay eggs on milkweed, the only plant their caterpillars can eat, and then die. The final generation of the year is different. Triggered by shortening days and cooler temperatures, these butterflies enter a state called diapause, in which reproductive development is put on hold. Instead of breeding, they feed on nectar, build up reserves of fat and head south. Freed from the costs of reproduction, they may live for as long as eight months.</p>
<p>For decades, researchers debated how monarchs find their way. Experiments using flight simulators, in which a tethered butterfly flies inside a drum while its heading is recorded, have shown that the insects use the position of the sun as a compass. Because the sun moves across the sky during the day, a compass of this kind would be useless without some means of keeping time. Surprisingly, the monarch’s timekeeping mechanism is located not only in its brain but also in its antennae. When researchers covered the antennae with black paint, blocking light, the butterflies lost their sense of direction, whereas those whose antennae were coated with clear paint flew normally. On overcast days, there is evidence that monarchs rely on a magnetic sense. Interestingly, this appears to respond to the angle at which the Earth’s magnetic field lines meet the ground, rather than to whether the field points north or south.</p>
<p>The destination is equally striking. Almost the entire eastern population gathers in fir forests at altitudes of around 3,000 metres in a handful of mountain ranges west of Mexico City. Here the butterflies cluster so densely that branches sometimes bend under their weight. The forest provides a carefully balanced microclimate: cool enough to slow the butterflies’ metabolism and conserve their fat, yet sheltered enough to protect them from freezing. The canopy of the fir trees acts rather like a blanket. Where trees are removed, temperatures on clear nights fall further, and a single winter storm can kill a large proportion of a colony.</p>
<p>Because the butterflies are so concentrated, scientists estimate the size of the population by measuring the area of forest they occupy rather than by counting individuals. Records that began in the 1990s show an overall decline. The occupied area reached its lowest point in the winter of 2013–2014, at less than one hectare, compared with a peak of more than eighteen hectares in the mid-1990s. Numbers vary considerably from year to year, partly because of weather conditions during the breeding season further north.</p>
<p>Several causes of the decline have been proposed. Logging in Mexico was once regarded as the principal threat, and the creation of a protected biosphere reserve has reduced illegal tree cutting considerably. Attention has since shifted north, to the loss of milkweed across agricultural land in the American Midwest, where the widespread use of herbicides has removed the plant from the edges of fields. Some researchers, however, argue that the problem lies in the migration itself. Fewer butterflies, they suggest, are surviving the journey south, possibly because of a shortage of flowering plants that provide nectar along the route.</p>
<p>Conservation efforts include planting milkweed in gardens, school grounds and along highways. Yet even this well-meant response has complications. A tropical species of milkweed, popular with gardeners because it is easy to grow, does not die back in winter in the warmer southern states. Monarchs that encounter it may continue to breed rather than migrate, and the plant can harbour a parasite that weakens the butterflies. Experts therefore recommend planting native species instead. Members of the public also contribute in other ways. Volunteers attach small numbered tags to butterflies’ wings, and tags later recovered in Mexico have helped scientists map the routes that the insects follow.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>The life cycle and navigation of the monarch</h4>
                <p>Monarchs born in late spring and summer live for a few weeks, during which they lay their eggs on [[1]]. The last generation of the year, however, enters a condition known as [[2]]. These butterflies do not reproduce but accumulate [[3]] before flying south. To navigate, monarchs use the sun as a compass, and the mechanism that allows them to keep time is found partly in their [[4]]. When the sky is overcast, they may use a [[5]] sense instead. In Mexico, the [[6]] of the fir forests protects the butterflies from freezing temperatures.</p>
              </div>`,
            answers: {
              1: ['milkweed'], 2: ['diapause'], 3: ['fat'], 4: ['antennae'], 5: ['magnetic'], 6: ['canopy']
            }
          },
          {
            type: 'tf', variant: 'tf', from: 7, to: 13,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Write <b>TRUE</b> if the statement agrees with the information, <b>FALSE</b> if the statement contradicts the information, <b>NOT GIVEN</b> if there is no information on this.',
            questions: [
              { n: 7, text: 'None of the monarchs that arrive in Mexico in autumn has made the journey before.', answer: 'TRUE' },
              { n: 8, text: 'Butterflies of the final generation breed before they begin their journey south.', answer: 'FALSE' },
              { n: 9, text: 'The monarch’s magnetic sense depends on whether the Earth’s field points north or south.', answer: 'FALSE' },
              { n: 10, text: 'At the overwintering sites, monarchs feed regularly on forest flowers.', answer: 'NOT GIVEN' },
              { n: 11, text: 'Scientists estimate the population by counting a sample of individual butterflies.', answer: 'FALSE' },
              { n: 12, text: 'The biosphere reserve was established at the request of local communities.', answer: 'NOT GIVEN' },
              { n: 13, text: 'Tropical milkweed may cause some monarchs to stop migrating.', answer: 'TRUE' }
            ]
          }
        ]
      },

      /* ---------------- Passage 2 */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Cities that Count',
          html: `
<p><b class="para">A</b> The phrase ‘smart city’ has been used so widely that it is in danger of meaning almost nothing. For technology companies, it describes a market for sensors, software and data platforms. For city governments, it may stand for efficiency, for environmental credentials or simply for modernity. At its core, however, the idea is straightforward. Urban services, its supporters argue, can be improved if decisions are based on continuous streams of data about how a city is actually being used, rather than on occasional surveys and the instincts of officials.</p>
<p><b class="para">B</b> Some of the earliest applications of this idea were modest but effective. Adaptive traffic lights, which adjust their timing in response to real-time traffic volumes detected by sensors in the road, have cut average journey times in a number of cities by around ten per cent. Litter bins that send a signal when they are nearly full allow waste collection lorries to follow shorter routes, saving fuel and staff hours. In water networks, acoustic sensors fitted to pipes listen for the distinctive sound of escaping water, allowing engineers to locate leaks before they become visible on the surface. None of these innovations attracted much public attention, but together they represent the kind of quiet gains that most residents would welcome.</p>
<p><b class="para">C</b> More ambitious projects have had a more mixed record. Several entirely new districts, planned from the ground up as showcases of urban technology, were equipped with sophisticated control centres before a single resident had arrived. In some cases, the residents never came in the expected numbers, leaving expensive systems monitoring largely empty streets. Elsewhere, cities that bought complete packages from a single company found that the technology used proprietary formats, so that adding equipment from another supplier, or even extracting their own data, was difficult and costly. Critics described this as ‘vendor lock-in’, and it has made many local authorities more cautious about large contracts. Many now prefer to begin with small pilot schemes in a single neighbourhood, which can be expanded, modified or quietly abandoned depending on the results.</p>
<p><b class="para">D</b> The issue that has generated most public debate, however, is privacy. Data collected for one purpose can easily be used for another. Cameras installed to count vehicles can, with different software, recognise number plates or even faces. In one widely reported case, a proposed waterfront development was abandoned after residents objected to the quantity of information that would be gathered about their movements. Defenders of such projects often point out that data are ‘anonymised’ before use, but this protection may be weaker than it sounds. Researchers analysing mobile phone records have shown that just four location points, recorded at different times of day, are enough to identify the great majority of individuals in a supposedly anonymous dataset.</p>
<p><b class="para">E</b> In response, some cities have begun to treat information gathered in public spaces as a public resource rather than the property of whichever company collected it. Contracts may now require suppliers to hand over data in open formats and to delete personal details within a fixed period. Much of the remaining information is published through online portals, where citizens, researchers and start-up companies can use it to develop new applications, from apps that show the quietest walking routes to tools that predict where parking spaces will become free. A few cities have experimented with ‘data trusts’, independent bodies that decide on residents’ behalf who may use the information and for what purpose.</p>
<p><b class="para">F</b> A final concern is that the benefits of data-driven management may not be shared equally. Services that are delivered mainly through smartphones can exclude older or poorer residents who are less likely to own one. Less obviously, data reflect the behaviour of the people who produce them. When one city introduced an app that allowed drivers to report potholes automatically, the reports came disproportionately from wealthier neighbourhoods, where more residents had the app installed, and repair crews were directed accordingly. The city later corrected this by fitting sensors to its own refuse lorries, which visit every street. The episode illustrates a broader point: a city is only as smart as the questions it asks of its data, and the true test of any project is whether it serves all of its citizens rather than the most visible ones.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 19,
            instr: 'Reading Passage 2 has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.<br>Write the correct number, <b>i–ix</b>, next to Questions 14–19.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'A vague label with a simple underlying idea' },
              { k: 'ii', t: 'Unglamorous improvements to everyday services' },
              { k: 'iii', t: 'The high cost of installing sensors' },
              { k: 'iv', t: 'Large-scale schemes that did not go to plan' },
              { k: 'v', t: 'Concerns about how personal information is used' },
              { k: 'vi', t: 'Competition between cities for investment' },
              { k: 'vii', t: 'Treating information as a shared asset' },
              { k: 'viii', t: 'The risk of uneven benefits' },
              { k: 'ix', t: 'A history of urban planning' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'i' },
              { n: 15, text: 'Paragraph B', answer: 'ii' },
              { n: 16, text: 'Paragraph C', answer: 'iv' },
              { n: 17, text: 'Paragraph D', answer: 'v' },
              { n: 18, text: 'Paragraph E', answer: 'vii' },
              { n: 19, text: 'Paragraph F', answer: 'viii' }
            ]
          },
          {
            type: 'multi', from: 20, to: 21, ns: [20, 21],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> problems with ambitious smart city projects does the writer mention?',
            options: [
              { k: 'A', t: 'Some new districts attracted fewer residents than expected.' },
              { k: 'B', t: 'Sensors stopped working in extreme weather.' },
              { k: 'C', t: 'Cities found it hard to change or add suppliers.' },
              { k: 'D', t: 'Staff were not trained to use the control centres.' },
              { k: 'E', t: 'Projects took much longer to complete than planned.' }
            ],
            answers: ['A', 'C']
          },
          {
            type: 'gap', from: 22, to: 26,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <p class="sent">22. Adaptive traffic lights change their timing according to real-time [[22]].</p>
              <p class="sent">23. Acoustic sensors in water pipes help engineers to find [[23]] at an early stage.</p>
              <p class="sent">24. Researchers showed that four [[24]] can reveal the identity of most people in an anonymous dataset.</p>
              <p class="sent">25. Data published through [[25]] can be used by citizens and start-ups to create new applications.</p>
              <p class="sent">26. Reports from a pothole app came mainly from [[26]] neighbourhoods.</p>`,
            answers: {
              22: ['traffic volumes'], 23: ['leaks'], 24: ['location points'], 25: ['online portals'], 26: ['wealthier']
            }
          }
        ]
      },

      /* ---------------- Passage 3 */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Can Economics Measure Happiness?',
          html: `
<p><b class="para">A</b> For most of the twentieth century, economists avoided asking people whether they were happy. Satisfaction, it was assumed, was revealed by choices: if someone bought a car rather than a holiday, the car must have offered greater ‘utility’. Asking people directly about their feelings was dismissed as unscientific, since there was no way to know whether one person’s ‘seven out of ten’ meant the same as another’s. This caution was understandable, but it had an unfortunate consequence. In the absence of any direct measure of welfare, gross domestic product, which records the value of goods and services produced, became the standard indicator of national progress almost by accident, even though its architects in the 1930s had explicitly warned that it was not a measure of well-being.</p>
<p><b class="para">B</b> The revival of interest began with a puzzle first identified in the 1970s. Within any single country at a given time, richer people reported being happier, on average, than poorer ones. Yet as whole countries became richer over several decades, average reported happiness barely changed. Two explanations were proposed. The first is that people judge their income relative to that of others: if everyone’s income rises together, nobody feels better off. The second is adaptation. The pleasure of a pay rise, on this account, fades as people become accustomed to their new circumstances and raise their expectations accordingly.</p>
<p><b class="para">C</b> Not everyone accepts that the paradox exists. Drawing on much larger international datasets, Professor Kenji Arai has argued that happiness does rise with national income, but in a logarithmic fashion: a given percentage increase in income produces roughly the same gain in happiness whether a country is poor or rich, which means that each additional dollar matters far less in a wealthy nation. On this view, the original finding was partly an artefact of short time series and small samples. Dr Marta Lindqvist, however, maintains that the association largely vanishes in several countries once changes in inequality and levels of social trust over the same period are taken into account. The debate remains unresolved, not least because the two sides tend to use different data.</p>
<p><b class="para">D</b> The objection that answers cannot be compared has been addressed, though only in part. Researchers now distinguish between evaluative well-being, meaning how satisfied people are with their lives as a whole, and experienced well-being, the emotions they feel from moment to moment. To capture the latter, Dr Samuel Okafor developed what he called the ‘day reconstruction method’, in which participants recall the previous day episode by episode and rate how they felt during each. One of its more striking results was that commuting ranked among the least enjoyable activities of the day, below even housework. The two kinds of measure do not always agree: life evaluations continue to rise with income, whereas daily emotions appear to level off above a moderate income. Responses are also sensitive to context. When people are asked about politics immediately before a question on life satisfaction, for instance, they tend to report lower satisfaction.</p>
<p><b class="para">E</b> If money is only part of the story, what else matters? Unemployment stands out. Losing a job reduces happiness far more than the associated loss of income would predict, and the effect persists even after people find new work. Professor Elena Ruiz found that this ‘scar’ was noticeably smaller in regions where unemployment was widespread, which suggests that much of the harm comes from the social stigma of being out of work rather than from the absence of work itself. Health, close relationships and a sense of control over one’s life are also consistently important. People are, however, poor at predicting what will make them happier. They tend to overestimate the effect of changes such as moving to a region with a sunnier climate, because, while imagining the change, they focus on the one feature that differs and ignore the many that stay the same.</p>
<p><b class="para">F</b> Such findings have begun to influence policy. Several governments now publish official well-being statistics alongside economic data, and at least one has used a well-being framework to set its budget priorities, directing additional spending towards mental health services and child poverty. Not everyone is enthusiastic. Dr Thomas Brandt warns that once happiness becomes an official target, it is likely to be manipulated, and that governments may be tempted to encourage contentment rather than address the injustices that cause discontent. He also points out that a policy which raises average happiness could leave a minority considerably worse off. Others raise the objection of paternalism: it is not, they argue, the role of the state to decide what makes citizens’ lives go well.</p>
<p><b class="para">G</b> Few economists now propose that well-being measures should replace GDP altogether, and such a proposal would be difficult to defend. The more modest claim is the more convincing one: that data on well-being can reveal costs and benefits that market prices fail to capture, such as the daily misery of a long commute or the value of a well-kept park. Choosing to ignore such information is not a neutral position. It is itself a decision, and one with real consequences for the way public money is spent.</p>`
        },
        groups: [
          {
            type: 'match', from: 27, to: 31,
            instr: 'Look at the following statements (Questions 27–31) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–E</b>.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'Marta Lindqvist' },
              { k: 'B', t: 'Kenji Arai' },
              { k: 'C', t: 'Samuel Okafor' },
              { k: 'D', t: 'Elena Ruiz' },
              { k: 'E', t: 'Thomas Brandt' }
            ],
            questions: [
              { n: 27, text: 'found that one regular daily activity is particularly disliked', answer: 'C' },
              { n: 28, text: 'suggested that social attitudes explain much of the damage caused by job loss', answer: 'D' },
              { n: 29, text: 'claimed that national income and happiness are linked in both poor and rich countries', answer: 'B' },
              { n: 30, text: 'warned that official well-being targets could be misused', answer: 'E' },
              { n: 31, text: 'argued that a link disappears when other social changes are considered', answer: 'A' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 32, to: 36,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Write <b>YES</b> if the statement agrees with the claims of the writer, <b>NO</b> if the statement contradicts the claims of the writer, <b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this.',
            questions: [
              { n: 32, text: 'GDP became the main measure of national progress largely by chance.', answer: 'YES' },
              { n: 33, text: 'Early economists had good reason to be cautious about asking people how happy they were.', answer: 'YES' },
              { n: 34, text: 'The problem of comparing different people’s answers has now been fully solved.', answer: 'NO' },
              { n: 35, text: 'The day reconstruction method is more reliable than surveys of life satisfaction.', answer: 'NOT GIVEN' },
              { n: 36, text: 'Well-being measures should take the place of GDP.', answer: 'NO' }
            ]
          },
          {
            type: 'match', from: 37, to: 40,
            instr: 'Complete each sentence with the correct ending, <b>A–G</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'may be explained by people comparing their income with that of others.' },
              { k: 'B', t: 'can lower the level of satisfaction that people report.' },
              { k: 'C', t: 'remain less happy even after they find another job.' },
              { k: 'D', t: 'to decide how its spending should be allocated.' },
              { k: 'E', t: 'produces the same effect in every country.' },
              { k: 'F', t: 'is the least pleasant part of most people’s day.' },
              { k: 'G', t: 'has been abandoned by most governments.' }
            ],
            questions: [
              { n: 37, text: 'The fact that average happiness did not rise as countries grew richer', answer: 'A' },
              { n: 38, text: 'Asking people about politics just before a question on life satisfaction', answer: 'B' },
              { n: 39, text: 'People who lose their jobs', answer: 'C' },
              { n: 40, text: 'One government used a well-being framework', answer: 'D' }
            ]
          }
        ]
      }
    ]
  },

  /* ===================================================== READING GENERAL */
  readingGeneral: {
    parts: [
      /* ---------------- Section 1 */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
        range: [1, 14],
        passage: {
          title: 'Bus changes and pet care',
          html: `
<h3>Brookfield Buses: changes to Routes 7 and 12 from Monday 3 March</h3>
<p><b>Route 7 (Town Centre – Hillside)</b><br>
From 3 March, daytime buses on Route 7 will run every 15 minutes from Monday to Saturday, instead of every 20 minutes as at present. Evening services after 7 p.m. will continue to run every 30 minutes, as now. On Sundays, the hourly service will start at 8 a.m. rather than 9 a.m., giving passengers an extra journey in each direction.</p>
<p><b>Route 12 (Station – Northgate)</b><br>
Following the creation of new parking bays, Mill Lane is now too narrow for our buses, although it remains open to cars. Route 12 will therefore no longer serve the Mill Lane stop. Passengers who used this stop should walk to the Station Approach stop, around five minutes away. Passengers who are unable to manage this walk can use our Dial-a-Ride minibus at no extra cost. Dial-a-Ride must be booked at least 24 hours before travel by calling 01632 960 412.</p>
<p><b>Timetables and fares</b><br>
New printed timetables are available from the bus station and the public library. Please note that we no longer carry printed timetables on buses. The Brookfield Buses app will show the new times from 1 March. Fares are not affected by these changes.</p>

<h3>Pet care services in Brookfield</h3>
<p><b class="para">A</b> <b>Paws at Home</b> – Going away? Jenny will visit your cats, rabbits or guinea pigs twice a day in your own home, so they stay relaxed in familiar surroundings. Fully insured, and keys are kept in a locked safe. Sorry, I do not take dogs. You will receive photos of your pet by text every day.</p>
<p><b class="para">B</b> <b>Happy Tails Dog Walking</b> – Marcus takes dogs on hour-long group walks in the countryside, with no more than six dogs at a time. We collect your dog from your door in our specially adapted van. Your dog’s first walk is completely free, so you can see if it suits you.</p>
<p><b class="para">C</b> <b>Home and Pet Sitters</b> – We are a retired couple who will move into your home while you are away and look after your animals as if they were our own. We will also water your garden and indoor plants and collect your post. Minimum stay three nights. Excellent references available.</p>
<p><b class="para">D</b> <b>Feathers and Fins</b> – Specialist care for birds, fish and reptiles, which many pet sitters will not handle. Sam trained and worked as a veterinary nurse for ten years and is happy to give medicines and follow special diets.</p>
<p><b class="para">E</b> <b>Oakfield Farm Pet Hotel</b> – Comfortable boarding for dogs and cats in heated rooms with outdoor runs. Owners can drop pets off at the farm, or we can collect them for a small additional charge. In July and August we are very busy, so please book at least two weeks ahead.</p>`
        },
        groups: [
          {
            type: 'tf', variant: 'tf', from: 1, to: 7,
            instr: 'Look at the notice about bus changes.<br>Do the following statements agree with the information given in the text?<br>Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.',
            questions: [
              { n: 1, text: 'Route 7 buses will run more often during the day from Monday to Saturday.', answer: 'TRUE' },
              { n: 2, text: 'There will be fewer Route 7 buses in the evening.', answer: 'FALSE' },
              { n: 3, text: 'The first Sunday bus on Route 7 will leave earlier than before.', answer: 'TRUE' },
              { n: 4, text: 'People who used the Mill Lane stop will need to go to a different stop.', answer: 'TRUE' },
              { n: 5, text: 'Dial-a-Ride can be booked on the day of travel.', answer: 'FALSE' },
              { n: 6, text: 'Passengers can pick up the new timetable on any bus.', answer: 'FALSE' },
              { n: 7, text: 'The bus company asked passengers for their views before making the changes.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'match', from: 8, to: 14,
            instr: 'Look at the five advertisements for pet care services, <b>A–E</b>.<br>Which advertisement mentions the following?<br>You may use any letter more than once.',
            boxTitle: 'Advertisements',
            options: [
              { k: 'A', t: 'Paws at Home' },
              { k: 'B', t: 'Happy Tails Dog Walking' },
              { k: 'C', t: 'Home and Pet Sitters' },
              { k: 'D', t: 'Feathers and Fins' },
              { k: 'E', t: 'Oakfield Farm Pet Hotel' }
            ],
            questions: [
              { n: 8, text: 'a free trial of the service', answer: 'B' },
              { n: 9, text: 'a carer with relevant professional experience', answer: 'D' },
              { n: 10, text: 'sending pictures of the animal to the owner', answer: 'A' },
              { n: 11, text: 'looking after plants as well as animals', answer: 'C' },
              { n: 12, text: 'the need to book early at certain times of year', answer: 'E' },
              { n: 13, text: 'a charge for transporting the animal', answer: 'E' },
              { n: 14, text: 'a type of animal that the service will not care for', answer: 'A' }
            ]
          }
        ]
      },

      /* ---------------- Section 2 */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Staff information',
          html: `
<h3>Raising a concern at work: our grievance procedure</h3>
<p><b>Informal stage</b><br>
Most problems at work can be settled quickly and informally. If you have a concern, you should first discuss it with your line manager. If your concern is about your line manager, you may speak instead to a more senior manager or to a member of the HR department.</p>
<p><b>Formal stage</b><br>
If the matter cannot be resolved informally, you may raise a formal grievance. To do this, complete form GR1, which can be downloaded from the staff intranet, and send it to HR. Formal grievances should normally be submitted within three months of the incident or problem you are complaining about.</p>
<p><b>The grievance meeting</b><br>
HR will arrange a meeting with you within ten working days of receiving your form. You have the right to be accompanied by a work colleague or a trade union representative. Family members and friends who are not employees may not attend. If your chosen companion cannot come on the date offered, the meeting may be postponed once, by up to five working days. A note-taker will be present, and you will be given a copy of the notes afterwards.</p>
<p><b>Outcome and appeal</b><br>
You will receive the decision in writing within five working days of the meeting. If you are not satisfied, you may appeal within seven days. Your appeal will be heard by a director who has had no previous involvement in the case, and the director’s decision is final.</p>
<p>All grievances are treated in confidence. No employee will be disadvantaged for raising a genuine concern.</p>

<h3>Our new parental leave policy</h3>
<p>We are pleased to announce a new, more generous parental leave policy, which applies to all children born or placed for adoption on or after 1 January.</p>
<p><b>Who is eligible?</b> All employees who have completed six months’ service by the expected week of birth or placement. Previously, a full year of service was required.</p>
<p><b>Birth parents</b> will receive 26 weeks’ leave on full pay (up from 18 weeks), followed by a further 13 weeks on half pay. <b>Partners</b> will now receive six weeks on full pay instead of two. This may be taken in one continuous period or in up to three separate blocks at any time during the child’s first year. <b>Adoptive parents</b> are entitled to exactly the same leave and pay as birth parents.</p>
<p><b>Keeping in touch</b> While on leave, you may work up to ten ‘keeping-in-touch’ days, for which you will be paid at your normal rate. These days are entirely optional, and your manager may not insist that you take them.</p>
<p><b>Returning to work</b> To help you settle back in, you may choose a phased return over four weeks, working reduced hours while still receiving your full salary. You may also make a request for flexible working; your manager must respond within four weeks.</p>
<p><b>How to apply</b> Birth parents and partners should notify HR at least 15 weeks before the baby is due. Adoptive parents should notify HR within seven days of being matched with a child.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 21,
            instr: 'Complete the notes below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Grievance procedure</h4>
                <ul>
                  <li>If the problem concerns your line manager, speak to a more senior manager or someone in the [[15]] department</li>
                  <li>For a formal grievance, use form GR1, available on the [[16]]</li>
                  <li>Submit the form within three [[17]] of the problem</li>
                  <li>At the meeting you may bring a colleague or a trade union [[18]]</li>
                  <li>If your companion is unavailable, the meeting can be [[19]] one time only</li>
                  <li>You will receive a copy of the [[20]] taken at the meeting</li>
                  <li>Appeals are heard by a [[21]] whose decision cannot be challenged</li>
                </ul>
              </div>`,
            answers: {
              15: ['hr'], 16: ['intranet'], 17: ['months'], 18: ['representative'], 19: ['postponed'], 20: ['notes'], 21: ['director']
            }
          },
          {
            type: 'mc', from: 22, to: 27,
            instr: 'Look at the text about the new parental leave policy.<br>Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 22, text: 'What change has been made to eligibility?', options: [
                { k: 'A', t: 'Employees need a shorter period of service.' },
                { k: 'B', t: 'Part-time staff are now included.' },
                { k: 'C', t: 'Employees must have worked for a full year.' },
                { k: 'D', t: 'Only children born after 1 January are covered.' }], answer: 'A' },
              { n: 23, text: 'For how many weeks will birth parents now receive full pay?', options: [
                { k: 'A', t: '13' },
                { k: 'B', t: '18' },
                { k: 'C', t: '26' },
                { k: 'D', t: '39' }], answer: 'C' },
              { n: 24, text: 'Partners may take their leave', options: [
                { k: 'A', t: 'only immediately after the birth.' },
                { k: 'B', t: 'in a maximum of three periods.' },
                { k: 'C', t: 'at any time before the child is two.' },
                { k: 'D', t: 'partly on half pay.' }], answer: 'B' },
              { n: 25, text: 'Keeping-in-touch days are', options: [
                { k: 'A', t: 'required by the employee’s manager.' },
                { k: 'B', t: 'unpaid.' },
                { k: 'C', t: 'limited in number.' },
                { k: 'D', t: 'available only to birth parents.' }], answer: 'C' },
              { n: 26, text: 'During a phased return, employees', options: [
                { k: 'A', t: 'work fewer hours with no loss of pay.' },
                { k: 'B', t: 'receive half their normal salary.' },
                { k: 'C', t: 'must agree to flexible working.' },
                { k: 'D', t: 'work from home for four weeks.' }], answer: 'A' },
              { n: 27, text: 'Adoptive parents should inform HR', options: [
                { k: 'A', t: 'at least 15 weeks in advance.' },
                { k: 'B', t: 'within a week of being matched with a child.' },
                { k: 'C', t: 'after the child has arrived.' },
                { k: 'D', t: 'within four weeks of applying to adopt.' }], answer: 'B' }
            ]
          }
        ]
      },

      /* ---------------- Section 3 */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'The Zip: a Small Invention with a Long History',
          html: `
<p><b class="para">A</b> Few objects are used as often, or noticed as rarely, as the zip. Yet the device that now fastens everything from jeans to tents took more than half a century to develop. In 1851, Elias Howe, already famous for his work on the sewing machine, patented what he called an ‘automatic, continuous clothing closure’. It consisted of a series of clasps joined by a string, which could be pulled tight to close a garment. Howe, however, was busy with his sewing machine business and never tried to manufacture or sell the idea, and it was quickly forgotten.</p>
<p><b class="para">B</b> Forty years later, a Chicago engineer named Whitcomb Judson designed a ‘clasp locker’, a system of hooks and eyes that could be closed with a sliding guide. Judson’s main aim was to spare people the tedious task of fastening high button boots, which were fashionable at the time. He displayed the device at the World’s Fair in Chicago in 1893, but it attracted little interest. Those who did try it found that it was expensive, difficult to make, and liable to spring open unexpectedly, which made it unsuitable for clothing.</p>
<p><b class="para">C</b> The breakthrough came from Gideon Sundback, a Swedish-born engineer employed by Judson’s company. After the death of his wife in 1911, Sundback threw himself into his work, and by 1913 he had produced a design that replaced hooks and eyes with small interlocking teeth, each with a tiny hollow on one side and a bump on the other. He also greatly increased the number of teeth per inch, making the fastener both stronger and more flexible. Just as importantly, he designed a machine that could produce the new fastener cheaply and in large quantities, solving the problem that had defeated earlier inventors.</p>
<p><b class="para">D</b> Early customers were mostly practical rather than fashionable. During the First World War, the fastener was used on flying suits and money belts, where reliability mattered more than appearance. In 1923, a rubber company began to sell boots that were closed with the new device. Its president is said to have liked the sound the slider made as it was pulled, and the company marketed the boots under the name ‘Zipper’. Although the word was originally a brand name for the boots, the public soon applied it to the fastener itself, and it has remained in use ever since.</p>
<p><b class="para">E</b> Clothing manufacturers were slower to adopt the idea. Early metal zips could rust, so garments sometimes had to be unpicked and the zip removed before washing. In the 1930s, however, manufacturers began to promote zips on children’s clothes, arguing that they encouraged independence by allowing young children to dress themselves. Around the same time, leading fashion designers in Paris began to use brightly coloured plastic zips as a visible feature of their designs. The most significant moment came when zips began to replace buttons in men’s trousers. Advocates claimed that the zip prevented the embarrassment of a forgotten button, and within a few years the change was widely accepted.</p>
<p><b class="para">F</b> Today, billions of zips are made every year, and one company dominates the industry. Founded in Tokyo in 1934 as a small business selling zips, it grew by making every part of its product itself, from the metal alloys to the machines that make the teeth. Its initials can now be seen on a large proportion of the world’s zips. Competitors exist, particularly in China, but many clothing brands remain loyal to the market leader because a faulty zip can ruin an otherwise perfect garment and lead to costly returns. It is a remarkable outcome for an invention that its first patent holder did not consider worth making.</p>`
        },
        groups: [
          {
            type: 'match', from: 28, to: 33,
            instr: 'The text has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.<br>Write the correct number, <b>i–ix</b>, next to Questions 28–33.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Legal disputes over who owned the idea' },
              { k: 'ii', t: 'An idea that its inventor did not pursue' },
              { k: 'iii', t: 'How a product got its name' },
              { k: 'iv', t: 'A disappointing first public appearance' },
              { k: 'v', t: 'Environmental concerns about plastic fasteners' },
              { k: 'vi', t: 'Solving the problems of design and production' },
              { k: 'vii', t: 'A gradual acceptance in the world of clothing' },
              { k: 'viii', t: 'The rise of alternative fastenings' },
              { k: 'ix', t: 'One firm’s control of a global market' }
            ],
            questions: [
              { n: 28, text: 'Paragraph A', answer: 'ii' },
              { n: 29, text: 'Paragraph B', answer: 'iv' },
              { n: 30, text: 'Paragraph C', answer: 'vi' },
              { n: 31, text: 'Paragraph D', answer: 'iii' },
              { n: 32, text: 'Paragraph E', answer: 'vii' },
              { n: 33, text: 'Paragraph F', answer: 'ix' }
            ]
          },
          {
            type: 'mc', from: 34, to: 36,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 34, text: 'Judson designed his device mainly to', options: [
                { k: 'A', t: 'replace the buttons on coats.' },
                { k: 'B', t: 'make boots easier to fasten.' },
                { k: 'C', t: 'win a prize at the World’s Fair.' },
                { k: 'D', t: 'improve Howe’s earlier design.' }], answer: 'B' },
              { n: 35, text: 'What was one of Sundback’s improvements?', options: [
                { k: 'A', t: 'He used string to join the teeth.' },
                { k: 'B', t: 'He made the teeth larger and heavier.' },
                { k: 'C', t: 'He put more teeth into the same length.' },
                { k: 'D', t: 'He replaced metal with plastic.' }], answer: 'C' },
              { n: 36, text: 'The word ‘zipper’ was first used for', options: [
                { k: 'A', t: 'a military flying suit.' },
                { k: 'B', t: 'a type of money belt.' },
                { k: 'C', t: 'a range of rubber boots.' },
                { k: 'D', t: 'a machine for making fasteners.' }], answer: 'C' }
            ]
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>The zip enters the fashion world</h4>
                <p>At first, clothing makers were reluctant to use zips, partly because early metal ones could [[37]] when washed. In the 1930s, zips were promoted on children’s clothing because they were said to encourage [[38]]. At the same time, designers in [[39]] began to make colourful plastic zips part of the look of their clothes. The greatest change came when zips replaced buttons in men’s [[40]].</p>
              </div>`,
            answers: {
              37: ['rust'], 38: ['independence'], 39: ['paris'], 40: ['trousers']
            }
          }
        ]
      }
    ]
  },

  /* ===================================================== WRITING ACADEMIC */
  writingAcademic: {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p><b>The diagram below shows how waste water from homes is treated and recycled for use in a city.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'process',
          title: 'The urban water recycling cycle',
          steps: [
            'Waste water from homes flows through sewers',
            'Screens remove large solid objects',
            'Sand and grit settle in tanks',
            'Bacteria break down organic matter',
            'Water is filtered through membranes',
            'Ultraviolet light disinfects the water',
            'Clean water is stored in a reservoir',
            'Water is piped back to homes'
          ],
          cycle: true
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>Some people believe that final examinations at school and university should be replaced by coursework assessed throughout the year.</b></p>
<p><b>To what extent do you agree or disagree?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  },

  /* ===================================================== WRITING GENERAL */
  writingGeneral: {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p>You have seen an advertisement for a more senior position in another department of the company where you work, and you would like to apply for it.</p>
<p>Write a letter to the manager of that department. In your letter</p>
<ul>
<li>explain which position you are interested in and why</li>
<li>describe the experience and skills that make you suitable for it</li>
<li>say when you would be available for an interview and to start the new role</li>
</ul>
<p>Write at least 150 words.</p>
<p>You do <b>NOT</b> need to write any addresses.</p>
<p>Begin your letter as follows:</p><p><b>Dear ......,</b></p>`
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>More and more people now buy food that has been prepared by others, such as ready meals and takeaways, instead of cooking at home.</b></p>
<p><b>Why is this happening? Is this a positive or negative development?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  }
};
IELTS.add('listening', 10, T.listening);
IELTS.add('reading-academic', 10, T.readingAcademic);
IELTS.add('reading-general', 10, T.readingGeneral);
IELTS.add('writing-academic', 10, T.writingAcademic);
IELTS.add('writing-general', 10, T.writingGeneral);
})();
