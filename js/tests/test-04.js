/* Test 4 — konten orisinal, dibuat khusus untuk latihan ini.
   Format audio: ['N', teks] = narator, ['A'|'B', teks] = pembicara, ['P', detik] = jeda. */
(() => {
  const TF_INSTR = 'Do the following statements agree with the information given in the text?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this';

  /* ===================================================== LISTENING */
  const listening = {
    parts: [
      /* ---------------- Part 1: booking a cooking class */
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>HILLCREST COOKERY SCHOOL<br><span>Evening Course Booking Form</span></h4>
                <table class="form-table">
                  <tr><td>Name:</td><td>Daniel [[1]]</td></tr>
                  <tr><td>Course:</td><td>[[2]] cooking</td></tr>
                  <tr><td>First session:</td><td>[[3]] March</td></tr>
                  <tr><td>Mobile number:</td><td>07821 [[4]]</td></tr>
                  <tr><td>Allergy:</td><td>[[5]]</td></tr>
                  <tr><td>Course fee (with discount):</td><td>£ [[6]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['thorpe'], 2: ['thai'], 3: ['14', '14th', 'fourteenth'], 4: ['664390'],
              5: ['nuts', 'nut', 'peanuts'], 6: ['185']
            }
          },
          {
            type: 'mc', from: 7, to: 10,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 7, text: 'The course fee includes', options: [
                { k: 'A', t: 'all the ingredients.' },
                { k: 'B', t: 'a set of knives.' },
                { k: 'C', t: 'a printed recipe book.' }], answer: 'A' },
              { n: 8, text: 'Where does the receptionist suggest Daniel should park?', options: [
                { k: 'A', t: 'in the school’s own car park' },
                { k: 'B', t: 'in the supermarket car park' },
                { k: 'C', t: 'on a nearby street' }], answer: 'B' },
              { n: 9, text: 'What should Daniel bring to the first class?', options: [
                { k: 'A', t: 'a container with a lid' },
                { k: 'B', t: 'a notebook' },
                { k: 'C', t: 'an apron' }], answer: 'A' },
              { n: 10, text: 'If Daniel misses a class, he can', options: [
                { k: 'A', t: 'get part of his money back.' },
                { k: 'B', t: 'watch a recording of it.' },
                { k: 'C', t: 'attend a session on a different day.' }], answer: 'C' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a man telephoning a cookery school to book a place on a course. First, you have some time to look at questions 1 to 6.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 1 to 6.'],
          ['B', 'Good afternoon, Hillcrest Cookery School, Anna speaking. How can I help?'],
          ['A', 'Hi. I’d like to book a place on one of your evening courses, if there’s still space.'],
          ['B', 'Certainly. Let me just open the booking form. Can I take your name first?'],
          ['A', 'Yes, it’s Daniel Thorpe.'],
          ['B', 'Is that T, H, O, R, P?'],
          ['A', 'Almost. There’s an E on the end. So T, H, O, R, P, E.'],
          ['B', 'Got it. And which course were you interested in? This term we’re running Italian, Thai and Middle Eastern.'],
          ['A', 'Well, I was really hoping to do Italian, but the website says it’s fully booked.'],
          ['B', 'I’m afraid it is, yes. I could put you on the waiting list, if you like.'],
          ['A', 'No, that’s fine. I’ll go for Thai cooking instead. I’ve always wanted to learn how to make a proper curry paste.'],
          ['B', 'Good choice, it’s one of our most popular. Now, the Thai course was due to start on the seventh of March, but the tutor is away that week, so the first session will now be on the fourteenth.'],
          ['A', 'The fourteenth of March. That actually suits me better.'],
          ['B', 'Great. Could I have a contact number?'],
          ['A', 'Sure. My mobile is oh seven eight two one, six six four, three nine oh.'],
          ['B', 'Six six four, three nine oh. Thank you. Now, do you have any allergies or dietary requirements? We need to know before we order the ingredients.'],
          ['A', 'I’m not vegetarian, and dairy is fine, but I can’t eat nuts. I’ve got quite a serious allergy.'],
          ['B', 'That’s important. I’ll put it on the form and tell the tutor. Thai dishes often use peanuts, so she’ll prepare a separate version for you.'],
          ['A', 'Thanks. And how much does the course cost?'],
          ['B', 'The full price for the eight weeks is two hundred and ten pounds. But if you book more than a month before the start date, there’s an early booking discount, which brings it down to one hundred and eighty-five pounds.'],
          ['A', 'Oh, that’s good. One eight five, then.'],
          ['B', 'That’s right.'],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 7 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 7 to 10.'],
          ['A', 'Can I ask what the fee actually includes?'],
          ['B', 'Of course. All the ingredients are covered, so you won’t need to buy anything. We used to give everyone a set of knives as well, but people found them awkward to carry home on the bus, so we stopped doing that.'],
          ['A', 'And do I get copies of the recipes?'],
          ['B', 'Yes, they’re emailed to you after each session. There is a printed recipe book too, but that’s sold separately at reception for twelve pounds.'],
          ['A', 'OK. What about parking? I’ll probably drive.'],
          ['B', 'Our own car park is very small, I’m afraid, and it’s kept for staff. And most of the streets round here are for residents only. But the supermarket next door lets our students use its car park free of charge after six o’clock, so that’s your best option.'],
          ['A', 'Perfect. Is there anything I should bring to the first class?'],
          ['B', 'Aprons are provided, so don’t worry about that. And you won’t need a notebook, because, as I said, we send everything by email. But do bring a plastic container with a lid, because you’ll be taking home whatever you cook.'],
          ['A', 'Sounds delicious. One last thing. I sometimes have to travel for work. What happens if I miss a class?'],
          ['B', 'Unfortunately we can’t refund individual sessions, and we don’t film the classes either. But we run exactly the same course on Saturday mornings, so you can join that group for the week you miss, as long as you let us know in advance.'],
          ['A', 'That’s really helpful. Thanks very much.'],
          ['B', 'You’re welcome, Daniel. I’ll email you a confirmation this afternoon.'],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 2: radio talk about a recycling scheme */
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'mc', from: 11, to: 13,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 11, text: 'According to Priya, the main reason for the new scheme is', options: [
                { k: 'A', t: 'the rising cost of landfill.' },
                { k: 'B', t: 'a national recycling target.' },
                { k: 'C', t: 'complaints from local residents.' }], answer: 'B' },
              { n: 12, text: 'How often will food waste be collected?', options: [
                { k: 'A', t: 'every week' },
                { k: 'B', t: 'every two weeks' },
                { k: 'C', t: 'every month' }], answer: 'A' },
              { n: 13, text: 'Households that want a larger black bin should', options: [
                { k: 'A', t: 'complete an online form.' },
                { k: 'B', t: 'telephone the council.' },
                { k: 'C', t: 'return the leaflet by post.' }], answer: 'B' }
            ]
          },
          {
            type: 'multi', from: 14, to: 15, ns: [14, 15],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> items should <b>NOT</b> be put in the blue recycling bin?',
            options: [
              { k: 'A', t: 'glass jars' },
              { k: 'B', t: 'plastic bags' },
              { k: 'C', t: 'drinks cans' },
              { k: 'D', t: 'cardboard' },
              { k: 'E', t: 'batteries' }
            ],
            answers: ['B', 'E']
          },
          {
            type: 'match', from: 16, to: 20,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 16–20.
              <div class="plan" style="max-width:380px;margin:10px 0">
                <svg viewBox="0 0 360 310" role="img" aria-label="Plan of Ferris Lane Recycling Centre" style="width:100%;height:auto;font-family:inherit">
                  <text x="180" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="currentColor">Ferris Lane Recycling Centre</text>
                  <rect x="10" y="20" width="340" height="252" fill="none" stroke="currentColor" stroke-width="2"/>
                  <rect x="40" y="72" width="280" height="18" fill="#8884"/>
                  <rect x="165" y="90" width="30" height="185" fill="#8884"/>
                  <rect x="140" y="98" width="80" height="50" fill="#8884"/>
                  <rect x="20" y="26" width="85" height="40" fill="none" stroke="currentColor"/>
                  <text x="62" y="51" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">H</text>
                  <rect x="138" y="26" width="84" height="40" fill="none" stroke="currentColor"/>
                  <text x="180" y="51" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">E</text>
                  <rect x="255" y="26" width="85" height="40" fill="none" stroke="currentColor"/>
                  <text x="297" y="51" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">C</text>
                  <rect x="152" y="106" width="56" height="34" fill="none" stroke="currentColor"/>
                  <text x="180" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">G</text>
                  <rect x="40" y="155" width="95" height="45" fill="none" stroke="currentColor"/>
                  <text x="87" y="182" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">D</text>
                  <rect x="225" y="155" width="95" height="45" fill="none" stroke="currentColor"/>
                  <text x="272" y="182" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">B</text>
                  <rect x="40" y="215" width="95" height="45" fill="none" stroke="currentColor"/>
                  <text x="87" y="242" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">F</text>
                  <rect x="225" y="215" width="95" height="45" fill="none" stroke="currentColor"/>
                  <text x="272" y="242" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">A</text>
                  <text x="180" y="266" text-anchor="middle" font-size="9" fill="currentColor">ENTRANCE</text>
                  <path d="M180 300 L180 282" stroke="currentColor" stroke-width="1.5" marker-end="url(#p4arr)"/>
                  <defs><marker id="p4arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
                  <text x="60" y="296" font-size="11" fill="currentColor">FERRIS LANE</text>
                  <line x1="10" y1="285" x2="350" y2="285" stroke="currentColor" stroke-dasharray="6 4"/>
                </svg>
              </div>`,
            boxTitle: 'Plan labels',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 16, text: 'site office', answer: 'A' },
              { n: 17, text: 'garden waste area', answer: 'D' },
              { n: 18, text: 'reuse shop', answer: 'G' },
              { n: 19, text: 'electrical items', answer: 'C' },
              { n: 20, text: 'textile bank', answer: 'H' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a waste officer from the local council talking on a radio programme about a new recycling scheme. First, you have some time to look at questions 11 to 15.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 15.'],
          ['A', 'Good morning and welcome back to Town Talk. With me in the studio is Priya Desai from Northbrook Council, who’s here to explain the changes to rubbish collection that start next month. Priya, welcome.'],
          ['B', 'Thank you. Yes, from the first of June, every household in Northbrook will be on a new system, and I know listeners have lots of questions. People often assume we’re doing this just to save money. It’s true that the cost of sending waste to landfill has gone up, and we’ve certainly had complaints from residents about overflowing bins. But the real reason is that the government has set a target for every council to recycle sixty-five per cent of household waste, and at the moment we’re only at around forty. We simply have to improve.'],
          ['B', 'So what’s changing? Your general rubbish, the black bin, will now be collected every two weeks instead of every week. Some people are worried about smells, and that’s exactly why we’re introducing food waste caddies. These small brown containers will be emptied weekly, so leftover food won’t sit around. Garden waste stays as it is, with a monthly collection from April to October.'],
          ['B', 'Some larger families have asked whether they can have a bigger black bin. The answer is yes, if six or more people live in your home. Under the old system there was an online form for this, but because we now need to check the number of residents, we’re asking people to ring our helpline instead. The number is on the leaflet that came through your door last week.'],
          ['B', 'Now, the blue bin is for mixed recycling. Glass jars and bottles can go in, and so can drinks cans and food tins, as long as they’ve been rinsed. Cardboard is fine too, but please flatten it first. What we don’t want are plastic bags. They wrap around the machinery at the sorting plant and cause breakdowns, so please take them back to a supermarket. And batteries must never go in any bin, because they can start fires in the collection lorries. We’ll be providing special battery bags that you can leave on top of your bin.'],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 16 to 20.'],
          ['A', 'Priya, the recycling centre on Ferris Lane has been redesigned as well, hasn’t it?'],
          ['B', 'Yes, it reopened last week and the layout is quite different, so let me guide listeners through it. You drive in through the entrance from Ferris Lane, at the bottom of the site. The first building you’ll see, immediately on your right, is the site office. Do call in there if you’re not sure where something should go. On your left, by the entrance, there’s a small car park, which is for people visiting the reuse shop. I’ll come to that in a moment.'],
          ['B', 'Follow the road straight ahead. About halfway up, on your left, there’s a large open area for garden waste, so that’s grass cuttings, branches, leaves and so on. Opposite that, on the right, are the skips for wood and scrap metal.'],
          ['B', 'A little further on, the road divides and goes round both sides of a central island. On that island, right in the middle of the site, is our new reuse shop. People can drop off furniture and other things in good condition, and we sell them on cheaply. It’s been incredibly popular.'],
          ['B', 'If you carry on past the shop to the far end of the site, in the top right-hand corner you’ll find the area for electrical items, such as fridges, televisions and old computers. Please don’t leave those anywhere else, because they contain chemicals that need careful handling.'],
          ['B', 'And finally, the textile bank, for old clothes and shoes. It used to be next to the site office, but it’s now moved to the top left-hand corner, on the opposite side from the electrical area. The building between those two, at the top in the middle, is for staff only.'],
          ['A', 'Priya Desai, thank you very much.'],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 3: work placement at a newspaper */
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
              { n: 21, text: 'Why did Ruth choose a placement at a local newspaper?', options: [
                { k: 'A', t: 'She expected to be given more responsibility.' },
                { k: 'B', t: 'It was close to where she lives.' },
                { k: 'C', t: 'The national papers did not reply to her.' }], answer: 'A' },
              { n: 22, text: 'What did Ruth find most difficult at the start of her placement?', options: [
                { k: 'A', t: 'meeting tight deadlines' },
                { k: 'B', t: 'contacting people she did not know' },
                { k: 'C', t: 'learning the newspaper’s software' }], answer: 'B' },
              { n: 23, text: 'How does Ruth describe the editor’s feedback?', options: [
                { k: 'A', t: 'direct but helpful' },
                { k: 'B', t: 'too general to be useful' },
                { k: 'C', t: 'only given at the end' }], answer: 'A' }
            ]
          },
          {
            type: 'match', from: 24, to: 28,
            instr: 'What does Ruth say about each of the following departments?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 24–28.',
            boxTitle: 'Comments',
            options: [
              { k: 'A', t: 'She would like to work there in the future.' },
              { k: 'B', t: 'It was the busiest department.' },
              { k: 'C', t: 'The staff were especially welcoming.' },
              { k: 'D', t: 'There was little for her to do.' },
              { k: 'E', t: 'She learnt a useful technical skill.' },
              { k: 'F', t: 'It was very different from what she expected.' },
              { k: 'G', t: 'A piece of her work appeared with her name on it.' }
            ],
            questions: [
              { n: 24, text: 'news desk', answer: 'B' },
              { n: 25, text: 'sports', answer: 'D' },
              { n: 26, text: 'photography', answer: 'E' },
              { n: 27, text: 'features', answer: 'G' },
              { n: 28, text: 'online team', answer: 'A' }
            ]
          },
          {
            type: 'gap', from: 29, to: 30,
            instr: 'Complete the sentences below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <p class="sent">Ruth advises Kenji to apply before the end of [[29]].</p>
              <p class="sent">Kenji should send a [[30]] of his writing with his application.</p>`,
            answers: { 29: ['january'], 30: ['portfolio'] }
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two journalism students, Kenji and Ruth, discussing the work placement Ruth did at a newspaper. First, you have some time to look at questions 21 to 28.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 28.'],
          ['A', 'Ruth, have you got a minute? I’m thinking of applying for a placement at the Weston Herald next summer, and I know that’s where you went.'],
          ['B', 'Sure, Kenji. I had a great time there.'],
          ['A', 'Can I ask why you went for a local paper? I thought you’d want to be at one of the big national titles.'],
          ['B', 'I did apply to a couple of nationals, and one of them actually offered me a place. But friends who’d been there said interns mostly sit in the corner and make coffee. At a local paper there are so few staff that you’re given real stories to write from the first week. That’s what I wanted. It certainly wasn’t for convenience, because it’s an hour and a half on the train from my flat.'],
          ['A', 'And was it hard to settle in?'],
          ['B', 'Well, I’d expected the deadlines to be the worst part, but I actually enjoyed the pressure. The software took a day or so to learn, which was fine. What I really struggled with was picking up the phone and calling complete strangers to ask them questions. I used to write out what I was going to say word for word.'],
          ['A', 'I’d be the same. What was the editor like?'],
          ['B', 'She was very straightforward. If something I’d written was boring, she’d say so, right there at my desk. It wasn’t always pleasant, but she always explained exactly what to change, and my writing improved enormously because of it.'],
          ['A', 'Did you stay in one department the whole time?'],
          ['B', 'No, they move you around. I started on the news desk. Everyone says the people there are really friendly, and they were nice enough, but honestly there was hardly time to talk. The phones never stopped, and they were producing more stories than any other section.'],
          ['A', 'Then sports?'],
          ['B', 'Yes, but my timing was bad. It was the break between football seasons, so there weren’t many matches to report on, and I spent most of the week tidying up old records.'],
          ['A', 'What about photography? That sounds fun.'],
          ['B', 'It was. I didn’t take many pictures myself, but one of the photographers showed me how to edit images properly with professional software, which I’m sure will come in handy whatever job I end up doing.'],
          ['A', 'And the features section?'],
          ['B', 'That was the highlight. I interviewed a woman who repairs old clocks, and they printed the article with my name at the top. My parents bought ten copies!'],
          ['A', 'That’s brilliant. Did you work with the website people too?'],
          ['B', 'Only for the last few days. They’re a small team, and the work wasn’t quite what I’d imagined. It’s much more about checking audience figures than writing. But I found it fascinating, and that’s the area I’d really like to go into once I graduate.'],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 29 and 30.'],
          ['P', 20],
          ['N', 'Now listen and answer questions 29 and 30.'],
          ['A', 'So when should I apply? The website says the closing date is the end of February.'],
          ['B', 'That’s the official deadline, but they fill most of the places well before then. I’d try to get your application in by the end of January at the latest.'],
          ['A', 'OK. And is it just a CV and a covering letter?'],
          ['B', 'That’s all they ask for, but I’d also send a portfolio of your writing. Three or four of your best articles from the student magazine would be ideal. The editor told me that’s what really made my application stand out.'],
          ['A', 'Great. Thanks, Ruth, that’s really useful.'],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 4: lecture on desert ecology */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'gap', from: 31, to: 35,
            instr: 'Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Organism</th><th>Adaptation</th><th>Benefit</th></tr>
                <tr><td>saguaro cactus</td><td>folded stem opens out like an [[31]]</td><td>stores large amounts of water after rain</td></tr>
                <tr><td>creosote bush</td><td>leaves have a coating of [[32]]</td><td>reduces water loss</td></tr>
                <tr><td>fennec fox</td><td>very large [[33]]</td><td>allow heat to escape from the body</td></tr>
                <tr><td>kangaroo rat</td><td>extremely efficient [[34]]</td><td>never needs to drink</td></tr>
                <tr><td>Namib beetle</td><td>bumps on its back</td><td>collect water from [[35]]</td></tr>
              </table>`,
            answers: { 31: ['accordion'], 32: ['resin'], 33: ['ears'], 34: ['kidneys'], 35: ['fog'] }
          },
          {
            type: 'gap', from: 36, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Desert ecosystems</h4>
                <p><b>Soil crusts</b></p>
                <ul>
                  <li>made of bacteria, lichens and [[36]]</li>
                  <li>protect the ground against [[37]]</li>
                </ul>
                <p><b>Annual plants</b></p>
                <ul>
                  <li>can survive many dry years in the form of [[38]]</li>
                  <li>sudden flowering after rain provides food for [[39]]</li>
                </ul>
                <p><b>Threats</b></p>
                <ul>
                  <li>most serious local damage is caused by off-road [[40]]</li>
                </ul>
              </div>`,
            answers: { 36: ['mosses', 'moss'], 37: ['erosion'], 38: ['seeds'], 39: ['insects'], 40: ['vehicles'] }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture about desert ecology. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', 'Good morning, everyone. Today we’re looking at desert ecology. Let’s start with a definition. Most people picture deserts as hot, sandy places, but scientists define a desert by its rainfall, not its temperature. Any region receiving less than about two hundred and fifty millimetres of rain a year counts as a desert, which is why Antarctica is technically the largest desert on Earth. Altogether, deserts cover roughly a third of the planet’s land surface.'],
          ['A', 'Living things in deserts face two main challenges: finding water and avoiding overheating. Let’s look at some of the ways different organisms cope, beginning with plants. The saguaro cactus of North America has a stem with deep folds running down it. After a heavy storm, these folds open out like an accordion, so the stem can swell and store a huge quantity of water, sometimes over a thousand litres, which keeps the plant alive through months of drought.'],
          ['A', 'The creosote bush takes a different approach. You might expect its leaves to be very small, like the spines of a cactus, but in fact they’re fairly ordinary in size. What protects them is a sticky coating of resin, which seals in moisture and reduces the amount of water lost through the leaf surface.'],
          ['A', 'Animals have their own strategies. The fennec fox of the Sahara is a good example. People often comment on its large eyes, which help it hunt at night, but its most striking feature is its enormous ears. They contain a dense network of blood vessels, so they allow heat to escape from the body, working rather like a radiator.'],
          ['A', 'Then there’s the kangaroo rat. It was once thought that it must store water in body fat, as camels were believed to do. In fact, the secret is its extremely efficient kidneys, which produce very concentrated urine. Combined with the water it gets from digesting dry seeds, this means the kangaroo rat never needs to drink at all.'],
          ['A', 'My final example is a beetle from the Namib Desert in south-west Africa. Rain is almost unknown there, but on many mornings fog rolls in from the Atlantic. The beetle stands on top of a sand dune with its back to the wind, and tiny bumps on its back collect water from the fog. The droplets then run down into its mouth.'],
          ['A', 'Now let’s move from individual species to the ecosystem as a whole, starting with the soil. In many deserts the surface isn’t loose sand at all, but is covered by what’s called a biological soil crust. This is a thin living layer made of bacteria, lichens and mosses, bound together. It may not look impressive, but it’s vital, because it holds the soil particles together and protects the ground against erosion by wind and water.'],
          ['A', 'Another key feature is the life cycle of annual plants. These plants may not appear above ground for years. They survive the long dry periods in the form of seeds lying in the soil, and only germinate when enough rain falls. When that happens, the desert can be covered in flowers within a couple of weeks. This sudden flowering provides food for insects, which in turn feed birds and lizards, so the whole food web depends on these brief events.'],
          ['A', 'Finally, threats. Climate change is obviously a long-term concern, and so is overgrazing by livestock in some regions. But in terms of local damage, the most serious problem in many deserts is off-road vehicles. A single set of tyre tracks can break up the soil crust, and it may take decades, or even centuries, to recover.'],
          ['N', 'That is the end of Part 4. You now have 30 seconds to check your answers.'],
          ['P', 30],
          ['N', 'That is the end of the Listening test.']
        ]
      }
    ]
  };

  /* ===================================================== READING — ACADEMIC */
  const readingAcademic = {
    parts: [
      /* ---------------- Passage 1: the printing press */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'The Press that Changed the World',
          html: `
<p>Before the fifteenth century, books in Europe were copied by hand, mostly by monks working in rooms known as scriptoria. A single Bible could take a skilled scribe more than a year to complete, and books were therefore rare objects, owned mainly by churches, universities and the very wealthy. Errors were common, because each copy introduced new mistakes, and these were passed on whenever that copy was itself copied.</p>
<p>Printing itself was not a European invention. In China, craftsmen were carving whole pages of text into wooden blocks by the eighth century, and the oldest surviving printed book with a known date, a Buddhist text called the Diamond Sutra, was produced in 868. Around 1040, a Chinese artisan named Bi Sheng created movable type from baked clay, and later Korean printers cast type in bronze. However, written Chinese uses thousands of different characters, which made movable type far less practical than it would be for a language with a small alphabet, and block printing remained the main method in East Asia for centuries.</p>
<p>In Europe, the key figure was Johannes Gutenberg, a goldsmith from the German city of Mainz. Around 1440 he began experimenting with a system that combined several existing technologies. His most important contribution was a hand mould, which allowed individual metal letters to be cast quickly and in identical sizes. The letters were made from an alloy of lead, tin and antimony, which melted at a low temperature but hardened quickly and was durable enough to be used thousands of times.</p>
<p>Gutenberg also needed a suitable ink. The water-based inks used by scribes simply ran off metal type, so he developed an oil-based ink, similar to the varnishes used by painters of the period. For the press itself, he adapted the screw presses that were already used in the Rhineland region to squeeze grapes for wine and olives for oil. A sheet of damp paper was laid over the inked type, and the screw was turned to apply even pressure across the whole page.</p>
<p>The most famous product of Gutenberg’s workshop is the Bible he completed around 1455. About 180 copies were printed, some on paper and some on vellum, a material made from animal skin. Around fifty survive today, and they are among the most valuable books in the world. Despite this achievement, Gutenberg did not become rich. He had borrowed heavily from a businessman, Johann Fust, who took him to court when the loan was not repaid, and Fust gained control of much of the equipment.</p>
<p>Nevertheless, the new technology spread with remarkable speed. By 1500, printing presses were operating in more than 250 European towns, and an estimated twenty million books had been produced. Venice became the leading centre of the trade, partly because of its wealth and its position on major trade routes. The price of books fell sharply, and for the first time ordinary merchants and professionals could afford to own small collections.</p>
<p>The consequences reached far beyond the book trade. Because identical copies could now be made, scholars in different countries could refer to exactly the same text, which made it easier to compare and correct scientific observations. Printed pamphlets allowed new religious and political ideas to circulate before the authorities could suppress them. Printing also helped to standardise spelling and grammar, as printers tended to adopt the forms used in the region where they worked, gradually reducing the variety of local spellings.</p>
<p>Not everyone welcomed the change. Some scribes feared for their livelihoods, and certain scholars complained that cheap printed books were full of mistakes and would encourage careless reading. Yet the printing press continued to dominate the spread of information for more than four centuries, until steam power, and later digital technology, transformed the industry once again.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 7,
            instr: 'Complete the table below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Place and date</th><th>Development</th></tr>
                <tr><td>China, 8th century</td><td>pages of text carved into wooden [[1]]</td></tr>
                <tr><td>China, c. 1040</td><td>Bi Sheng makes movable type from baked [[2]]</td></tr>
                <tr><td rowspan="4">Mainz, from c. 1440</td><td>a hand [[3]] produces letters of identical size</td></tr>
                <tr><td>letters made from lead, tin and [[4]]</td></tr>
                <tr><td>a new [[5]] based on oil rather than water</td></tr>
                <tr><td>press adapted from those used for grapes and [[6]]</td></tr>
                <tr><td>Mainz, c. 1455</td><td>Bible printed on paper and on [[7]]</td></tr>
              </table>`,
            answers: { 1: ['blocks'], 2: ['clay'], 3: ['mould', 'mold'], 4: ['antimony'], 5: ['ink'], 6: ['olives'], 7: ['vellum'] }
          },
          {
            type: 'tf', variant: 'tf', from: 8, to: 13,
            instr: TF_INSTR.replace('the text', 'Reading Passage 1'),
            questions: [
              { n: 8, text: 'Mistakes made by scribes were often repeated in later copies.', answer: 'TRUE' },
              { n: 9, text: 'Bi Sheng’s clay type soon replaced block printing in China.', answer: 'FALSE' },
              { n: 10, text: 'Gutenberg learnt about screw presses while working in the wine trade.', answer: 'NOT GIVEN' },
              { n: 11, text: 'Gutenberg made a large profit from his Bible.', answer: 'FALSE' },
              { n: 12, text: 'Fust went on to print books using Gutenberg’s equipment.', answer: 'NOT GIVEN' },
              { n: 13, text: 'Printing helped to make spelling more consistent.', answer: 'TRUE' }
            ]
          }
        ]
      },

      /* ---------------- Passage 2: microplastics */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'The Invisible Tide: Microplastics in the Oceans',
          html: `
<p><b class="para">A</b> Walk along almost any beach, look closely at the sand, and you are likely to find tiny fragments of coloured plastic mixed in with the shells and grains of quartz. For decades these particles attracted little attention, because they were too small to be seen from a ship and too scattered to appear in the photographs of floating rubbish that dominated news coverage. It was only in the early years of this century that marine scientists began to use a single term, ‘microplastics’, for any piece of plastic smaller than five millimetres. Giving the problem a name helped to turn a collection of isolated observations into a recognised field of research.</p>
<p><b class="para">B</b> Microplastics are usually divided into two categories. Primary microplastics are manufactured at a small size. They include the tiny beads once added to face scrubs and toothpaste, and the pellets, known in the industry as nurdles, from which larger plastic products are moulded. Secondary microplastics, which make up the majority, are created when larger objects such as bottles, bags and fishing nets break apart. Plastic does not decay in the way that wood or paper does; instead, ultraviolet light from the sun makes it brittle, and the constant movement of waves grinds it into ever smaller pieces.</p>
<p><b class="para">C</b> One of the most significant sources was identified almost by accident. Researchers examining sediment near sewage outlets found that a large proportion of the particles were not fragments but fibres. These turned out to come from synthetic clothing made of polyester, nylon and acrylic. Each time such garments are washed, they shed fibres, and a single load of washing may release several hundred thousand of them. Modern treatment plants capture most fibres before the water is returned to rivers, but the fibres then end up in sewage sludge, which in many countries is spread on farmland as fertiliser. From there, rain can wash them back into waterways.</p>
<p><b class="para">D</b> Microplastics have now been found in virtually every marine environment that has been tested. They are present in Arctic sea ice, where they are thought to arrive on ocean currents from the Atlantic, and in sediment collected from the bottom of trenches more than ten kilometres deep. They have been detected in sea salt sold for cooking and, more recently, in the air above remote mountain ranges, suggesting that wind as well as water can carry them over long distances.</p>
<p><b class="para">E</b> Yet there is a puzzle. Estimates suggest that several million tonnes of plastic enter the oceans every year, but surveys of surface water find only a small fraction of this amount. Scientists have proposed several explanations for the ‘missing’ plastic. Floating particles quickly become covered in a thin layer of bacteria and algae called a biofilm, which makes them heavier, so that they sink towards the seabed. Others are eaten by zooplankton and packed into faecal pellets, which also sink rapidly. A further portion is washed back onto shorelines, where it may be buried in sand or broken down further. It now seems likely that the deep ocean floor is the final destination for much of the plastic in the sea.</p>
<p><b class="para">F</b> What harm these particles cause is harder to establish. Laboratory experiments have shown that zooplankton exposed to microplastics eat less of their natural food, and that mussels and oysters can suffer from inflammation and reduced growth. Plastics may also absorb toxic chemicals from the surrounding water and carry them into the bodies of animals that swallow them. However, critics point out that many experiments have used concentrations far higher than those normally found in the sea, and particles of a single shape and type, unlike the varied mixture in the natural environment. As for human health, microplastics have been detected in drinking water and even in human blood, but there is not yet convincing evidence that they cause illness at current levels of exposure.</p>
<p><b class="para">G</b> Because the particles are so small and so widely dispersed, removing them from the open ocean is not realistic: any net fine enough to catch them would also capture plankton and other small organisms. Most researchers therefore argue that the priority must be to stop more plastic from entering the sea in the first place. Several countries have banned microbeads in cosmetics, and at least one European government has passed a law requiring new washing machines to be fitted with filters for synthetic fibres. Reducing plastic packaging, improving waste collection in fast-growing coastal cities and designing fishing gear that is less likely to be lost would all cut the supply of larger items that eventually become microplastics.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 20,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Reaching the most remote places on Earth' },
              { k: 'ii', t: 'The economic cost to the fishing industry' },
              { k: 'iii', t: 'Two ways in which particles are formed' },
              { k: 'iv', t: 'Why prevention is more practical than removal' },
              { k: 'v', t: 'An everyday activity with hidden consequences' },
              { k: 'vi', t: 'A new machine for cleaning the open sea' },
              { k: 'vii', t: 'A name for a long-ignored problem' },
              { k: 'viii', t: 'Evidence of damage and its limitations' },
              { k: 'ix', t: 'Accounting for plastic that cannot be found' },
              { k: 'x', t: 'How plastic is manufactured from oil' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'vii' },
              { n: 15, text: 'Paragraph B', answer: 'iii' },
              { n: 16, text: 'Paragraph C', answer: 'v' },
              { n: 17, text: 'Paragraph D', answer: 'i' },
              { n: 18, text: 'Paragraph E', answer: 'ix' },
              { n: 19, text: 'Paragraph F', answer: 'viii' },
              { n: 20, text: 'Paragraph G', answer: 'iv' }
            ]
          },
          {
            type: 'multi', from: 21, to: 22, ns: [21, 22],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> criticisms of laboratory experiments on microplastics does the writer mention?',
            options: [
              { k: 'A', t: 'They have been carried out on too few species.' },
              { k: 'B', t: 'They have often used unrealistically high concentrations.' },
              { k: 'C', t: 'They have ignored the effects on human health.' },
              { k: 'D', t: 'They have used particles that are all alike.' },
              { k: 'E', t: 'They have been paid for by the plastics industry.' }
            ],
            answers: ['B', 'D']
          },
          {
            type: 'gap', from: 23, to: 26,
            instr: 'Complete the summary below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>The ‘missing’ plastic</h4>
                <p>Much less plastic is found in surface water than scientists would expect. One reason is that floating particles are soon coated with a [[23]] of bacteria and algae, which causes them to sink to the [[24]]. Some particles are swallowed by zooplankton and end up inside [[25]] that sink quickly. Others are returned to [[26]], where they may become buried. Much of the plastic in the sea probably ends up on the deep ocean floor.</p>
              </div>`,
            answers: { 23: ['biofilm'], 24: ['seabed', 'sea bed'], 25: ['faecal pellets', 'fecal pellets', 'pellets'], 26: ['shorelines', 'shoreline'] }
          }
        ]
      },

      /* ---------------- Passage 3: problem-solving in crows */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Clever Corvids: Problem-Solving in Crows',
          html: `
<p>For much of the twentieth century, the study of animal intelligence focused overwhelmingly on our closest relatives, the great apes. The assumption, rarely stated but widely held, was that complex thought required a brain built along primate lines, with a large and heavily folded outer layer, the neocortex. Birds, whose brains lack this layered structure, were regarded as creatures of instinct; the insult ‘bird-brained’ reflected scientific opinion as much as popular prejudice. Over the past three decades, however, a series of studies on the crow family, or corvids, has forced researchers to rethink not only what birds can do, but what kinds of brain can support flexible problem-solving.</p>
<p>The most striking evidence comes from the New Caledonian crow, a species found only on a group of islands in the South Pacific. In the wild, these birds manufacture tools from twigs and leaves, using them to extract insect larvae from holes in dead wood. Some individuals strip a twig of its side shoots and then shape the remaining stub into a hook; others cut stepped, tapered tools from the stiff edges of pandanus leaves. What impressed field biologists was not merely that the crows used tools – many animals do – but that tool designs differed from one part of the islands to another, and appeared to be passed down and gradually refined over generations. To Dr Helena Varga, who spent eleven years observing wild populations, this regional variation is ‘the closest thing to cumulative culture we have seen outside our own species’.</p>
<p>Laboratory experiments have probed how far this ability extends beyond inherited habit. In one well-known type of test, a piece of food floats on water at the bottom of a narrow tube, out of reach of the bird’s beak. To obtain it, the crow must drop stones into the tube so that the water level rises. Many corvids solve this task quickly, and they generally prefer heavy objects to light ones and solid objects to hollow ones, suggesting some grasp of cause and effect. Professor Martin Ochs, however, urges caution. He notes that the birds often need several attempts before succeeding, and that their performance collapses when the task is altered in ways that would not confuse a seven-year-old child. ‘What looks like insight,’ he argues, ‘may in many cases be rapid learning from feedback.’</p>
<p>Even sceptics acknowledge that some results are harder to explain in this way. In a series of experiments, crows were presented with a problem that could only be solved in several stages: a short stick had to be used to retrieve a longer stick, which in turn could reach a piece of meat. Several birds completed the sequence on their first attempt, without having been trained on any of its individual steps. Dr Ana Ribeiro, whose team designed one such test, believes that this demonstrates planning: the bird must hold in mind a goal that is not directly linked to the object in front of it. She concedes, though, that the crows involved had extensive previous experience of handling sticks, and that this may have contributed to their success.</p>
<p>Corvids also display abilities that appear to be social rather than mechanical. Scrub jays and ravens hide surplus food for later use, a behaviour known as caching. Birds that were watched by a potential thief while hiding food will frequently return alone and move it to a new location – but only if they themselves have previously stolen from others. Dr Samuel Petrie interprets this as evidence that the birds can, in some limited sense, imagine the intentions of another individual, a capacity once thought to be unique to humans and perhaps apes. Other studies have shown that wild crows can recognise individual human faces and remember people who have treated them badly for several years, even alerting other members of their group to them.</p>
<p>How can a brain the size of a walnut achieve all this? Part of the answer lies in density. Recent counts have found that bird brains pack neurons far more tightly than mammalian brains of similar size, so that a crow’s brain may contain as many neurons as that of a small monkey. In addition, a region called the nidopallium, though organised in clusters rather than layers, appears to perform functions similar to those of the primate prefrontal cortex, the area associated with planning and decision-making. The neuroscientist Dr Keiko Arai describes this as a case of convergent evolution: ‘Birds and primates have arrived at comparable solutions by entirely different routes.’</p>
<p>This conclusion has implications well beyond the study of birds. If intelligence can emerge from quite different brain structures, then the search for the biological basis of thought cannot be confined to one particular design. Nor can intelligence sensibly be measured on a single ladder, with humans at the top and other species ranked below. A crow may outperform a chimpanzee on some tasks and fail completely on others, because each has evolved to solve the problems most relevant to its own way of life. The more useful question, many researchers now suggest, is not how intelligent an animal is, but in what ways.</p>
<p>None of this means that crows think as we do, and enthusiasm for their abilities has sometimes run ahead of the evidence. Popular accounts tend to report the most impressive individual performances while overlooking the many birds that failed. Nevertheless, it is now difficult to maintain the old view that a bird is a mere bundle of instincts. In overturning that view, the crow has done science a considerable service.</p>`
        },
        groups: [
          {
            type: 'mc', from: 27, to: 31,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 27, text: 'In the first paragraph, the writer suggests that the expression ‘bird-brained’', options: [
                { k: 'A', t: 'was first used by scientists.' },
                { k: 'B', t: 'matched a view held by many experts.' },
                { k: 'C', t: 'is still common among researchers.' },
                { k: 'D', t: 'came from early studies of corvids.' }], answer: 'B' },
              { n: 28, text: 'What most impressed field biologists about New Caledonian crows?', options: [
                { k: 'A', t: 'the fact that they used tools at all' },
                { k: 'B', t: 'their skill in shaping twigs into hooks' },
                { k: 'C', t: 'the way tool designs varied and developed over time' },
                { k: 'D', t: 'their preference for leaves rather than twigs' }], answer: 'C' },
              { n: 29, text: 'Professor Ochs’s main concern about the water-tube experiments is that', options: [
                { k: 'A', t: 'the food used was unnatural for the birds.' },
                { k: 'B', t: 'success may result from learning rather than insight.' },
                { k: 'C', t: 'too few birds were included in the tests.' },
                { k: 'D', t: 'young children performed far better than the birds.' }], answer: 'B' },
              { n: 30, text: 'The stick experiment described in the fourth paragraph is significant because', options: [
                { k: 'A', t: 'the crows had never handled sticks before.' },
                { k: 'B', t: 'some birds solved a multi-stage problem without being trained on its steps.' },
                { k: 'C', t: 'every bird tested completed the task successfully.' },
                { k: 'D', t: 'it was carried out with wild rather than captive birds.' }], answer: 'B' },
              { n: 31, text: 'According to the fifth paragraph, birds move their hidden food to a new place if they', options: [
                { k: 'A', t: 'have previously had food stolen from them.' },
                { k: 'B', t: 'have stolen food from others in the past.' },
                { k: 'C', t: 'live in particularly large groups.' },
                { k: 'D', t: 'are hiding food for the first time.' }], answer: 'B' }
            ]
          },
          {
            type: 'match', from: 32, to: 35,
            instr: 'Look at the following statements (Questions 32–35) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–E</b>.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'Helena Varga' },
              { k: 'B', t: 'Martin Ochs' },
              { k: 'C', t: 'Ana Ribeiro' },
              { k: 'D', t: 'Samuel Petrie' },
              { k: 'E', t: 'Keiko Arai' }
            ],
            questions: [
              { n: 32, text: 'Similar mental abilities can develop from very different brain structures.', answer: 'E' },
              { n: 33, text: 'Earlier experience may partly explain an impressive result.', answer: 'C' },
              { n: 34, text: 'Some birds may be able to consider what another individual intends to do.', answer: 'D' },
              { n: 35, text: 'Crow behaviour in one region resembles a tradition that builds up over time.', answer: 'A' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 36, to: 40,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 36, text: 'The belief that complex thought requires a primate-type brain was often openly expressed.', answer: 'NO' },
              { n: 37, text: 'Studies of captive crows are more reliable than observations of wild ones.', answer: 'NOT GIVEN' },
              { n: 38, text: 'It is misleading to rank species on a single scale of intelligence.', answer: 'YES' },
              { n: 39, text: 'Popular descriptions of crow intelligence have sometimes given an unbalanced picture.', answer: 'YES' },
              { n: 40, text: 'The traditional view of birds as purely instinctive is still a reasonable one.', answer: 'NO' }
            ]
          }
        ]
      }
    ]
  };

  /* ===================================================== READING — GENERAL TRAINING */
  const readingGeneral = {
    parts: [
      /* ---------------- Section 1 */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
        range: [1, 14],
        passage: {
          title: 'Second-hand Furniture and Evening Classes',
          html: `
<h3>Second-hand Furniture for Sale</h3>
<p><b class="para">A</b> <b>Oak dining table</b> – seats six, extends to seat eight. Solid and well made, with one small scratch on a leg that is hardly noticeable. £120. Buyer must collect from a second-floor flat (no lift), so please bring someone to help carry it.</p>
<p><b class="para">B</b> <b>Two-seater sofa</b> – grey fabric with removable covers that can go in the washing machine. From a pet-free, non-smoking home. £85 or nearest offer. I can deliver within ten miles of Eastford for a small extra charge.</p>
<p><b class="para">C</b> <b>Children’s bunk beds</b> – pine frame in very good condition. Mattresses are not included. Already taken apart and ready for collection; the original assembly instructions are supplied. £60.</p>
<p><b class="para">D</b> <b>Desk and office chair</b> – ideal for working from home. The chair’s height is adjustable and the desk has three drawers, although the key for the lockable drawer has been lost. £45 for the pair – I will not sell them separately.</p>
<p><b class="para">E</b> <b>1930s wardrobe</b> – lovely old piece with a full-length mirror on the door. Very heavy: at least two strong people are needed to move it. We are moving abroad, so it is free to anyone who can collect it this weekend.</p>
<p><b class="para">F</b> <b>Three white bookcases</b> – flat-pack, bought last year but never assembled, so they are still in their original boxes. £30 each, or £80 if you take all three.</p>
<h3>Westfield Adult Education Centre – Spring Evening Classes</h3>
<p><b>Beginners’ Spanish</b> – Mondays, 7.00–9.00 pm, 10 weeks, £95. No previous knowledge of the language is required. The course book is included in the fee.</p>
<p><b>Digital Photography</b> – Tuesdays, 6.30–8.30 pm, 8 weeks, £110. Students must bring their own digital camera; mobile phone cameras are not suitable for this course. The fee includes one Saturday trip to photograph the coast.</p>
<p><b>Upholstery for Beginners</b> – Wednesdays, 7.00–9.30 pm, 12 weeks, £180 plus the cost of materials. Places are limited to eight. Bring a small chair or stool that you would like to re-cover.</p>
<p><b>Creative Writing</b> – Thursdays, 7.00–9.00 pm, 10 weeks, £90. Led by a novelist whose books have been published in several languages. Work by students will be collected in a short book at the end of the course.</p>
<p><b>Gentle Yoga</b> – Fridays, 6.00–7.00 pm, 10 weeks, £70. Suitable for all ages. The first session is a free taster class, so you can decide whether the course is right for you before you pay.</p>
<p><b>Important information</b>: People aged over 65 and those receiving unemployment benefits can claim a 30% reduction on all course fees. You can enrol online or at the centre’s reception. Fees are only refunded if the centre cancels a course.</p>`
        },
        groups: [
          {
            type: 'match', from: 1, to: 7,
            instr: 'Look at the six advertisements, <b>A–F</b>.<br>For which advertisement are the following statements true?<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Advertisements',
            options: [
              { k: 'A', t: 'Oak dining table' },
              { k: 'B', t: 'Two-seater sofa' },
              { k: 'C', t: 'Children’s bunk beds' },
              { k: 'D', t: 'Desk and office chair' },
              { k: 'E', t: '1930s wardrobe' },
              { k: 'F', t: 'Three white bookcases' }
            ],
            questions: [
              { n: 1, text: 'The item is being offered without charge.', answer: 'E' },
              { n: 2, text: 'The item has never been put together.', answer: 'F' },
              { n: 3, text: 'The item has a slight mark on it.', answer: 'A' },
              { n: 4, text: 'The seller can bring the item to the buyer.', answer: 'B' },
              { n: 5, text: 'The items must be bought together.', answer: 'D' },
              { n: 6, text: 'Something that some buyers might expect is not part of the sale.', answer: 'C' },
              { n: 7, text: 'Buyers will pay less per item if they buy more than one.', answer: 'F' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 8, to: 14,
            instr: TF_INSTR.replace('the text', 'the information about evening classes'),
            questions: [
              { n: 8, text: 'Students on the Spanish course have to buy a book separately.', answer: 'FALSE' },
              { n: 9, text: 'Students may use their phones to take pictures on the photography course.', answer: 'FALSE' },
              { n: 10, text: 'The upholstery course has fewer places than any other course.', answer: 'NOT GIVEN' },
              { n: 11, text: 'The creative writing teacher is a published author.', answer: 'TRUE' },
              { n: 12, text: 'It is possible to try the yoga class before paying for the course.', answer: 'TRUE' },
              { n: 13, text: 'Older people can get a discount on the course fees.', answer: 'TRUE' },
              { n: 14, text: 'Students who leave a course early can get part of their fee back.', answer: 'FALSE' }
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
          title: 'Harbour Logistics: Staff Guidance',
          html: `
<h3>Staff Dress Code</h3>
<p>Harbour Logistics wants all employees to look professional and, above all, to stay safe at work. The following rules apply to everyone on company premises.</p>
<p><b>Office staff</b> are expected to wear business casual clothing from Monday to Thursday. This means smart trousers or skirts with a shirt, blouse or smart top; trainers and sports clothing are not acceptable. Jeans may be worn on Fridays, provided they are clean and not ripped. Staff attending meetings with clients, on any day of the week, should wear a suit or similar formal clothing.</p>
<p><b>Warehouse staff</b> must wear a high-visibility vest at all times when they are on the warehouse floor, including during breaks. Safety boots with steel toecaps are also compulsory. The company supplies one pair of safety boots every year free of charge; replacement pairs needed before then can be bought from the stores department at a reduced price.</p>
<p>For safety reasons, rings, bracelets and long necklaces must be removed before working with any machinery. Long hair must be tied back.</p>
<p><b>Identity badges</b> must be worn where they can be clearly seen. Most staff should wear their badge on the lanyard provided, but anyone working near the conveyor belts must use a clip instead, as a lanyard could become caught in the equipment.</p>
<p>Reception staff wear the company uniform and receive a uniform allowance twice a year to cover cleaning costs. If you have any questions about this policy, please speak to your line manager in the first instance. Disagreements that cannot be settled in this way should be referred to the Human Resources department.</p>
<h3>Protecting Company Information: IT Security Guidance</h3>
<p><b class="para">A</b> Every account should be protected by a password of at least twelve characters. The easiest way to achieve this is to use a passphrase made of three or four unrelated words, such as ‘lemon river guitar’. Never use the same password for your work and personal accounts. You will no longer be asked to change your password every ninety days; you only need to change it if you think someone else may know it.</p>
<p><b class="para">B</b> As well as your password, you will now need to confirm your identity using the authentication app on your work phone each time you sign in from a new device. This means that even if a criminal discovers your password, they still cannot get into your account.</p>
<p><b class="para">C</b> Most attacks begin with an email. Be suspicious of any message that asks you to act urgently, to open an unexpected attachment or to enter your log-in details. Check the sender’s address carefully, as criminals often use names that look almost identical to those of real suppliers. If in doubt, contact the sender by phone using a number you already have.</p>
<p><b class="para">D</b> If you think you have clicked on a harmful link or given away your password, report it to the IT helpdesk immediately. Do not delete the message, as the security team may need to examine it. Nobody will be disciplined for reporting a genuine error; the real danger comes from staying silent.</p>
<p><b class="para">E</b> When working in cafés, hotels or on trains, always connect to the company network through the secure VPN before opening any work files. Avoid making work calls about confidential matters in public places, and use the privacy screen supplied with your laptop so that people nearby cannot read your screen.</p>
<p><b class="para">F</b> Lock your computer whenever you leave your desk, even for a minute, by pressing the Windows key and L together. Computers that are left unused will lock automatically after five minutes, but that is long enough for someone to send an email in your name.</p>
<p><b class="para">G</b> Updates often contain fixes for newly discovered security weaknesses. When you receive a notice that an update is ready, install it within forty-eight hours. Please do not keep postponing updates; if an update is not installed within a week, your computer will restart automatically to complete it.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 20,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.',
            template: `
              <p class="sent">Office staff are allowed to wear jeans on [[15]].</p>
              <p class="sent">Employees meeting clients should wear a [[16]] or something similar.</p>
              <p class="sent">On the warehouse floor, staff must wear a [[17]] even during breaks.</p>
              <p class="sent">Every year, warehouse staff are given one free pair of [[18]].</p>
              <p class="sent">Staff who work near the conveyor belts should attach their badge with a [[19]].</p>
              <p class="sent">Reception staff are paid a [[20]] to help with cleaning costs.</p>`,
            answers: {
              15: ['fridays', 'friday'], 16: ['suit'], 17: ['high-visibility vest', 'high visibility vest'],
              18: ['safety boots'], 19: ['clip'], 20: ['uniform allowance']
            }
          },
          {
            type: 'match', from: 21, to: 27,
            instr: 'The IT security guidance has seven sections, <b>A–G</b>.<br>Choose the correct heading for each section from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Keeping software current' },
              { k: 'ii', t: 'Choosing which websites to visit' },
              { k: 'iii', t: 'Creating secure log-in details' },
              { k: 'iv', t: 'What to do after a mistake' },
              { k: 'v', t: 'Backing up important files' },
              { k: 'vi', t: 'Staying protected away from the office' },
              { k: 'vii', t: 'A second check when signing in' },
              { k: 'viii', t: 'Leaving your machine unattended' },
              { k: 'ix', t: 'Spotting messages that may be dangerous' },
              { k: 'x', t: 'Rules for personal use of work phones' }
            ],
            questions: [
              { n: 21, text: 'Section A', answer: 'iii' },
              { n: 22, text: 'Section B', answer: 'vii' },
              { n: 23, text: 'Section C', answer: 'ix' },
              { n: 24, text: 'Section D', answer: 'iv' },
              { n: 25, text: 'Section E', answer: 'vi' },
              { n: 26, text: 'Section F', answer: 'viii' },
              { n: 27, text: 'Section G', answer: 'i' }
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
          title: 'Life in the Shadow of Volcanoes',
          html: `
<p><b class="para">A</b> Hundreds of millions of people around the world live within a hundred kilometres of an active volcano. To an outsider, this can seem difficult to understand. Why would so many families choose to build their homes, farms and towns in places that could be destroyed with little warning? The answer lies partly in what volcanoes give, and partly in how human beings think about risk.</p>
<p><b class="para">B</b> The most important gift is fertile soil. When volcanic ash and rock break down over time, they release minerals such as potassium and phosphorus, which plants need in order to grow. As a result, the slopes of many volcanoes support some of the most productive farmland on Earth. In parts of Indonesia, farmers can grow three crops of rice a year on volcanic soil, while coffee grown on the slopes of volcanoes in Central America is prized for its quality.</p>
<p><b class="para">C</b> Volcanoes provide other benefits too. Heat from beneath the ground can be used to generate electricity and to warm buildings; in Iceland, almost nine out of ten homes are heated in this way. Volcanic rock has long been used for building, and hot springs and dramatic landscapes attract large numbers of tourists, bringing jobs to areas that might otherwise have few.</p>
<p><b class="para">D</b> The dangers, however, are very real. The most deadly are pyroclastic flows: clouds of hot gas, ash and rock that rush down the side of a volcano at speeds of over a hundred kilometres an hour, far too fast for anyone to escape. Lahars, or volcanic mudflows, form when ash mixes with heavy rain or melted snow. They can travel many kilometres from the volcano along river valleys, burying villages that may seem a safe distance away. Even falling ash, which sounds less threatening, can be destructive: when it becomes wet, it is heavy enough to make roofs collapse.</p>
<p><b class="para">E</b> Despite these dangers, many people are reluctant to leave. For some, the land has belonged to their families for generations, and moving would mean losing their income as well as their home. Psychology also plays a part. Large eruptions at any one volcano may occur only once a century or less, so most residents have never experienced one. Because of this, people tend to underestimate the risk, judging the future by what they have seen in their own lifetime.</p>
<p><b class="para">F</b> Scientists now monitor many active volcanoes closely. Instruments called seismometers record the small earthquakes that occur as magma moves upwards beneath the surface. Satellites can detect tiny changes in the shape of the ground, which may swell as magma collects below it, and special equipment measures the gases a volcano gives off. Yet predicting exactly when an eruption will happen remains extremely difficult. If warnings are issued and nothing happens, residents may lose trust in the authorities and be less willing to leave the next time.</p>
<p><b class="para">G</b> For this reason, preparation is just as important as prediction. Many local governments now produce hazard maps that show which areas are most at risk, and they plan evacuation routes so that people can leave quickly and safely. Regular drills, in which whole communities practise leaving their homes, mean that residents know exactly what to do when a real warning comes. Experience shows that people are more likely to follow advice when it is delivered by local leaders whom they know and trust, rather than by distant officials. Families are also encouraged to keep a bag ready containing water, dust masks, medicines and torches, in case they have to leave in a hurry.</p>`
        },
        groups: [
          {
            type: 'mc', from: 28, to: 31,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 28, text: 'According to the text, volcanic soil is fertile because', options: [
                { k: 'A', t: 'it holds water better than other soils.' },
                { k: 'B', t: 'it releases minerals as it breaks down.' },
                { k: 'C', t: 'it stays warmer than other soils.' },
                { k: 'D', t: 'farmers add large amounts of fertiliser.' }], answer: 'B' },
              { n: 29, text: 'In Iceland, underground heat is mainly mentioned as a way of', options: [
                { k: 'A', t: 'attracting tourists.' },
                { k: 'B', t: 'growing crops all year round.' },
                { k: 'C', t: 'heating people’s homes.' },
                { k: 'D', t: 'producing building materials.' }], answer: 'C' },
              { n: 30, text: 'Why do many residents underestimate the danger from volcanoes?', options: [
                { k: 'A', t: 'They have not seen a major eruption themselves.' },
                { k: 'B', t: 'Scientists have given them inaccurate information.' },
                { k: 'C', t: 'They cannot afford to move elsewhere.' },
                { k: 'D', t: 'They live too far away to be affected.' }], answer: 'A' },
              { n: 31, text: 'What problem with volcano warnings does the writer mention?', options: [
                { k: 'A', t: 'The equipment needed is too expensive.' },
                { k: 'B', t: 'Satellites cannot detect changes in the ground.' },
                { k: 'C', t: 'False alarms can make people less likely to leave.' },
                { k: 'D', t: 'Warnings are often issued too late.' }], answer: 'C' }
            ]
          },
          {
            type: 'match', from: 32, to: 36,
            instr: 'Complete each sentence with the correct ending, <b>A–H</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'move too quickly for people to escape.' },
              { k: 'B', t: 'can be stopped by building strong walls.' },
              { k: 'C', t: 'can reach places a long way from the volcano.' },
              { k: 'D', t: 'may be heavy enough to damage buildings.' },
              { k: 'E', t: 'are caused by heavy rain alone.' },
              { k: 'F', t: 'may show that magma is rising.' },
              { k: 'G', t: 'identify the places in greatest danger.' },
              { k: 'H', t: 'give warnings several years in advance.' }
            ],
            questions: [
              { n: 32, text: 'Pyroclastic flows', answer: 'A' },
              { n: 33, text: 'Lahars', answer: 'C' },
              { n: 34, text: 'Wet ash', answer: 'D' },
              { n: 35, text: 'Small earthquakes', answer: 'F' },
              { n: 36, text: 'Hazard maps', answer: 'G' }
            ]
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Preparing for an eruption</h4>
                <p>As well as producing hazard maps, authorities plan evacuation [[37]] so that residents can get away safely. Communities take part in regular [[38]], which help people to understand what they should do. Advice is more likely to be followed if it comes from local [[39]] rather than officials from far away. Households are advised to keep a bag with essential items such as water, masks, medicines and [[40]].</p>
              </div>`,
            answers: { 37: ['routes'], 38: ['drills'], 39: ['leaders'], 40: ['torches'] }
          }
        ]
      }
    ]
  };

  /* ===================================================== WRITING — ACADEMIC */
  const writingAcademic = {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p><b>The table below shows average annual spending per person (in US dollars) on four types of entertainment in five countries in 2024.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'table',
          title: 'Average annual spending per person on entertainment, 2024 (US$)',
          columns: ['Country', 'Books', 'Music', 'Films', 'Video games'],
          rows: [
            ['Canada', '68', '41', '57', '95'],
            ['Germany', '92', '38', '44', '71'],
            ['Japan', '75', '52', '39', '118'],
            ['Brazil', '21', '17', '26', '34'],
            ['Australia', '64', '45', '61', '88']
          ]
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>In many towns and cities, traditional high streets are declining as more and more people choose to shop online.</b></p>
<p><b>What are the reasons for this trend? What can be done to make high streets attractive places to visit again?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  /* ===================================================== WRITING — GENERAL TRAINING */
  const writingGeneral = {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p>You are renting a flat, and several things in it need to be repaired.</p>
<p>Write a letter to your landlord. In your letter</p>
<ul>
<li>describe the problems in the flat</li>
<li>explain how these problems are affecting you</li>
<li>say what you would like your landlord to do</li>
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
<p><b>Some people believe that all young people should be required to do unpaid work in their local community, for example helping elderly people or cleaning public spaces, for a few hours each month.</b></p>
<p><b>To what extent do you agree or disagree?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 4, listening);
  IELTS.add('reading-academic', 4, readingAcademic);
  IELTS.add('reading-general', 4, readingGeneral);
  IELTS.add('writing-academic', 4, writingAcademic);
  IELTS.add('writing-general', 4, writingGeneral);
})();
