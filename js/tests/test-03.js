/* Konten tes 3 (orisinal, dibuat khusus untuk latihan ini).
   Format audio: ['N', teks] = narator, ['A'|'B'|'C', teks] = pembicara, ['P', detik] = jeda. */
(() => {
  /* ===================================================== LISTENING */
  const listening = {
    parts: [
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'gap', from: 1, to: 7,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>KINGSFORD STATION<br><span>Lost Property Report</span></h4>
                <table class="form-table">
                  <tr><td>Name:</td><td>Helen [[1]]</td></tr>
                  <tr><td>Date of travel:</td><td>[[2]] March</td></tr>
                  <tr><td>Train:</td><td>from Oakfield, departing at [[3]]</td></tr>
                  <tr><td>Description of item:</td><td>medium-sized brown [[4]] bag with a long strap</td></tr>
                  <tr><td>Contents:</td><td>laptop charger, a [[5]], two library books</td></tr>
                  <tr><td>Where left:</td><td>on the luggage [[6]] above the seat</td></tr>
                  <tr><td>Mobile number:</td><td>07863 [[7]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['whitlock'], 2: ['12', '12th', 'twelfth'], 3: ['7.45', '7:45', 'seven forty-five', 'seven forty five'],
              4: ['leather'], 5: ['camera'], 6: ['rack'], 7: ['294018']
            }
          },
          {
            type: 'mc', from: 8, to: 10,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 8, text: 'Items found on trains are first', options: [
                { k: 'A', t: 'handed to the police.' },
                { k: 'B', t: 'kept at the last station on the line.' },
                { k: 'C', t: 'taken to the train depot.' }], answer: 'B' },
              { n: 9, text: 'To collect the bag, Helen must bring', options: [
                { k: 'A', t: 'her train ticket.' },
                { k: 'B', t: 'a recent bill.' },
                { k: 'C', t: 'photo identification.' }], answer: 'C' },
              { n: 10, text: 'How much will Helen have to pay?', options: [
                { k: 'A', t: 'nothing' },
                { k: 'B', t: '£2.50' },
                { k: 'C', t: '£4.00' }], answer: 'B' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a woman telephoning a railway station to report some lost property. First, you have some time to look at questions 1 to 7.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 1 to 7.'],
          ['A', 'Good afternoon, Kingsford Station lost property office, Gary speaking. How can I help?'],
          ['B', "Oh, hello. I left a bag on one of your trains and I was hoping somebody might have handed it in."],
          ['A', "I'm sorry to hear that. Let me take a few details and I'll check what's come in. Could I have your name first?"],
          ['B', "Yes, it's Helen Whitlock."],
          ['A', 'And how do you spell your surname?'],
          ['B', "W, H, I, T, L, O, C, K."],
          ['A', 'Thank you. And when were you travelling?'],
          ['B', "Yesterday, the thirteenth. Oh, no, wait. Sorry, I've completely lost track of the week. It was the day before, Tuesday. So the twelfth of March."],
          ['A', 'The twelfth. No problem. Which train were you on?'],
          ['B', "The one from Oakfield into Kingsford. I usually get the seven fifteen, but I overslept that morning, so I caught the next one, which leaves at seven forty-five."],
          ['A', "OK, the seven forty-five from Oakfield. That's a busy one. Can you describe the bag for me?"],
          ['B', "It's medium-sized, brown, with a long strap so you can wear it over your shoulder. Some people think it's plastic because it's quite shiny, but it's actually leather. It was a present from my mother, so I'd really like it back."],
          ['A', 'And what was inside it?'],
          ['B', "Mostly work things. There was my laptop charger. Not the laptop itself, thank goodness, I had that in my other hand. Then there was a camera, which is quite an expensive one. Oh, and two library books, which are probably overdue by now."],
          ['A', 'Do you remember where you put it on the train? Under the seat, perhaps?'],
          ['B', "No, the train was so crowded that there wasn't room under the seat, so I put it on the luggage rack above my head. And then of course I forgot all about it when I got off."],
          ['A', "That happens a lot, believe me. Finally, could I have a contact number?"],
          ['B', "Yes, my mobile is oh seven eight six three, two nine four, oh one five."],
          ['A', 'Two nine four, oh one five.'],
          ['B', "Hang on, no, that's my old number. It's two nine four, oh one eight. Sorry."],
          ['A', 'Oh one eight. Got it.'],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 8 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 8 to 10.'],
          ['B', 'So what normally happens to things that are left on trains?'],
          ['A', "A lot of people think we pass everything straight to the police, but we only do that with passports and wallets. Anything else is collected by the cleaning staff when the train reaches the end of the line, and it's kept at that final station for two days before it's sent here to Kingsford. The depot doesn't deal with lost property at all."],
          ['B', 'I see. So is there any chance mine is there?'],
          ['A', "Let me look. Brown leather shoulder bag, Tuesday, Oakfield line. Yes, here we are. It arrived from the end station this morning, and the contents match what you've told me."],
          ['B', "Oh, that's wonderful. What do I need to bring to collect it?"],
          ['A', "You won't need your train ticket, and we don't ask for proof of address like a bill any more. We just need to see some photo identification, such as a passport or a driving licence."],
          ['B', 'Fine. And is there a charge?'],
          ['A', "There is, I'm afraid. It used to be free, but now there's a standard fee of two pounds fifty for each item. For valuable things on their own, like a phone, it's four pounds. But because your camera was inside the bag, it all counts as one item, so it's just the two pounds fifty."],
          ['B', "That's fair enough. I'll come in tomorrow morning."],
          ['A', "We open at eight. See you then."],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'm' },
        groups: [
          {
            type: 'mc', from: 11, to: 14,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 11, text: 'Before the stadium was built, the site was used as', options: [
                { k: 'A', t: 'a football ground.' },
                { k: 'B', t: 'a railway yard.' },
                { k: 'C', t: 'a housing estate.' }], answer: 'B' },
              { n: 12, text: 'What is special about the stadium roof?', options: [
                { k: 'A', t: 'It can be opened in good weather.' },
                { k: 'B', t: 'It provides water for the pitch.' },
                { k: 'C', t: 'It generates electricity for the stadium.' }], answer: 'B' },
              { n: 13, text: 'The capacity of the stadium is increased for', options: [
                { k: 'A', t: 'concerts.' },
                { k: 'B', t: 'international matches.' },
                { k: 'C', t: 'athletics events.' }], answer: 'A' },
              { n: 14, text: 'During the tour, visitors must not', options: [
                { k: 'A', t: 'take photographs in the changing rooms.' },
                { k: 'B', t: 'sit in the managers’ seats.' },
                { k: 'C', t: 'walk on the grass.' }], answer: 'C' }
            ]
          },
          {
            type: 'match', from: 15, to: 20,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 15–20.`,
            figure: `<svg viewBox="0 0 660 450" role="img" aria-label="Plan of Castleford Park Stadium with locations A to H">
              <text class="fig-title" x="300" y="28" text-anchor="middle">Castleford Park Stadium</text>
              <rect class="box" x="90" y="60" width="420" height="320"/>
              <rect class="area" x="160" y="110" width="280" height="220"/>
              <line class="thin" x1="300" y1="110" x2="300" y2="330"/>
              <circle class="thin" cx="300" cy="220" r="34"/>
              <rect class="thin" x="160" y="175" width="34" height="90"/><rect class="thin" x="406" y="175" width="34" height="90"/>
              <text class="halo" x="300" y="300" text-anchor="middle">PITCH</text>
              <line class="thin" x1="160" y1="60" x2="160" y2="380"/><line class="thin" x1="440" y1="60" x2="440" y2="380"/>
              <line class="thin" x1="90" y1="110" x2="510" y2="110"/><line class="thin" x1="90" y1="330" x2="510" y2="330"/>
              <line class="thin" x1="90" y1="220" x2="160" y2="220"/><line class="thin" x1="440" y1="220" x2="510" y2="220"/>
              <text x="300" y="90" text-anchor="middle">NORTH STAND</text>
              <text x="300" y="360" text-anchor="middle">SOUTH STAND</text>
              <text class="halo" x="125" y="226" text-anchor="middle" transform="rotate(-90 125 222)">WEST STAND</text>
              <text class="halo" x="475" y="226" text-anchor="middle" transform="rotate(90 475 222)">EAST STAND</text>
              <g class="lbl" text-anchor="middle">
                <rect class="box" x="113" y="73" width="24" height="24"/><text class="lbl" x="125" y="90">A</text>
                <rect class="box" x="463" y="73" width="24" height="24"/><text class="lbl" x="475" y="90">B</text>
                <rect class="box" x="113" y="128" width="24" height="24"/><text class="lbl" x="125" y="145">C</text>
                <rect class="box" x="463" y="128" width="24" height="24"/><text class="lbl" x="475" y="145">D</text>
                <rect class="box" x="113" y="290" width="24" height="24"/><text class="lbl" x="125" y="307">E</text>
                <rect class="box" x="463" y="290" width="24" height="24"/><text class="lbl" x="475" y="307">F</text>
                <rect class="box" x="113" y="343" width="24" height="24"/><text class="lbl" x="125" y="360">G</text>
                <rect class="box" x="463" y="343" width="24" height="24"/><text class="lbl" x="475" y="360">H</text>
              </g>
              <rect class="solid" x="285" y="376" width="30" height="8"/>
              <path class="solid" d="M300 392 l-9 16 h18 z"/>
              <text x="300" y="428" text-anchor="middle">Main entrance (you are here)</text>
              <g class="compass" transform="translate(615 70)"><line class="thin" x1="0" y1="-18" x2="0" y2="18"/><line class="thin" x1="-18" y1="0" x2="18" y2="0"/><path class="solid" d="M0 -22 l-5 10 h10 z"/><path class="solid" d="M0 22 l-5 -10 h10 z"/><path class="solid" d="M22 0 l-10 -5 v10 z"/><path class="solid" d="M-22 0 l10 -5 v10 z"/><text x="0" y="-27" text-anchor="middle">N</text><text x="0" y="37" text-anchor="middle">S</text><text x="33" y="4" text-anchor="middle">E</text><text x="-33" y="4" text-anchor="middle">W</text></g>
            </svg>`,
            boxTitle: 'Locations on the plan',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 15, text: 'Ticket office', answer: 'G' },
              { n: 16, text: 'Changing rooms', answer: 'C' },
              { n: 17, text: 'Media room', answer: 'F' },
              { n: 18, text: 'Family zone', answer: 'D' },
              { n: 19, text: 'Museum', answer: 'B' },
              { n: 20, text: 'Café', answer: 'A' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a guide talking to a group of visitors at the start of a tour of a new sports stadium. First, you have some time to look at questions 11 to 14.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 14.'],
          ['A', "Good morning, everyone, and welcome to Castleford Park Stadium. My name's Owen and I'll be showing you around this morning. Before we start walking, let me tell you a little about the place."],
          ['A', "The stadium opened just eighteen months ago. A lot of visitors assume it was built where the city's old football ground used to be, but that ground is actually about two miles north of here, and it's been turned into a housing estate. This site was a railway yard for over a hundred years. Goods trains used to be loaded and unloaded more or less where the pitch is now, and you can still see some of the original brick walls in the car park."],
          ['A', "Now, look up at the roof. People often ask whether it opens and closes, like some of the stadiums you see on television. It doesn't. That would have been far too expensive. There was also a plan to cover it with solar panels, but that was dropped. What it does do is quite clever. The whole surface is designed to collect rainwater, which is stored in tanks underground and then used to water the pitch. In a normal year, we hardly need to take any water from the mains at all."],
          ['A', "The stadium holds thirty-eight thousand people for football and rugby. You might think we'd squeeze more in for big international matches, but safety rules mean the number stays exactly the same. However, when we host concerts, we put an extra standing area on the pitch itself, and that takes the capacity up to around forty-five thousand. We don't have a running track, so athletics events still go to the old arena across the river."],
          ['A', "Just a couple of rules before we go. You're welcome to take photographs anywhere on the tour, and that includes the changing rooms. You can even sit in the managers' seats down by the pitch if you'd like a picture there. The one thing I must ask is that nobody steps onto the grass. The groundsman has just re-seeded it, and he'd never forgive me."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 15 to 20.'],
          ['A', "Right. If you look at the plan in your leaflet, you'll see we're standing at the main entrance, in the middle of the south side of the stadium. Let me point out where everything is."],
          ['A', "First, the ticket office. When the stadium opened, it was in the corner on your right, but that space has now become the first aid room. The ticket office has moved to the corner on your left, the south-west corner, so that's where you'll need to go if you want to buy match tickets later."],
          ['A', "Next, the changing rooms, which is where we'll begin the tour. They're under the West Stand. Not at the end nearest to us, which is only used for storage, but at the far end, towards the north."],
          ['A', "The media room, where managers give their press conferences after a match, is on the opposite side, under the East Stand. It's at the southern end of that stand, so it's actually fairly close to where we're standing now."],
          ['A', "Further along that same side, at the northern end of the East Stand, you'll find the family zone. That's a section with cheaper tickets and activities for children before the games start."],
          ['A', "Then, in the north-east corner of the stadium, there's our museum. It tells the story of the club and the city's sporting history, and entry is included in the price of today's tour."],
          ['A', "And finally, in the opposite corner, the north-west, there's the café, which is where we'll finish. Your ticket entitles you to a free hot drink there. OK, if you'd all like to follow me."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'm', B: 'f', C: 'f' },
        groups: [
          {
            type: 'multi', from: 21, to: 22, ns: [21, 22],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> problems does the tutor identify in the students’ first draft?',
            options: [
              { k: 'A', t: 'The introduction is too long.' },
              { k: 'B', t: 'The research question is too broad.' },
              { k: 'C', t: 'Too many sources are websites.' },
              { k: 'D', t: 'There is not enough data.' },
              { k: 'E', t: 'The references are in the wrong format.' }
            ],
            answers: ['B', 'E']
          },
          {
            type: 'mc', from: 23, to: 25,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 23, text: 'Why have the students decided to focus on breakfast?', options: [
                { k: 'A', t: 'It is easier to survey people about one meal.' },
                { k: 'B', t: 'Little research exists on students’ breakfast habits.' },
                { k: 'C', t: 'Their tutor suggested it in an earlier meeting.' }], answer: 'B' },
              { n: 24, text: 'What is the tutor’s main concern about food diaries?', options: [
                { k: 'A', t: 'Participants may not record everything they eat.' },
                { k: 'B', t: 'They take participants too much time.' },
                { k: 'C', t: 'One week is too short a period.' }], answer: 'A' },
              { n: 25, text: 'How many participants do the students finally decide to recruit?', options: [
                { k: 'A', t: '30' },
                { k: 'B', t: '50' },
                { k: 'C', t: '60' }], answer: 'C' }
            ]
          },
          {
            type: 'gap', from: 26, to: 30,
            instr: 'Complete the flow-chart below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Research procedure</h4>
                <p>Recruit participants through the student [[26]]</p>
                <p style="text-align:center">&#8595;</p>
                <p>Participants complete a short [[27]] about eating habits and sleep</p>
                <p style="text-align:center">&#8595;</p>
                <p>Each participant keeps a food diary for one [[28]]</p>
                <p style="text-align:center">&#8595;</p>
                <p>Every morning, an online test measures [[29]]</p>
                <p style="text-align:center">&#8595;</p>
                <p>Results are analysed using a [[30]]</p>
              </div>`,
            answers: { 26: ['union'], 27: ['questionnaire'], 28: ['week'], 29: ['concentration'], 30: ['spreadsheet'] }
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two students, Daniel and Priya, talking to their tutor, Dr Lawson, about their nutrition assignment. First, you have some time to look at questions 21 to 25.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 25.'],
          ['C', "Come in, both of you. So, I've read the first draft of your nutrition assignment. Overall it's a promising start, but there are a couple of things we need to sort out."],
          ['B', "Is it the introduction? I was worried it went on a bit too long."],
          ['C', "Actually, the introduction is fine. It's a sensible length and it sets things up well. No, the first issue is your research question. At the moment you're asking how diet affects student performance, which is far too broad for a project of this size. You'll need to narrow it down."],
          ['A', 'OK. And the second thing?'],
          ['C', "Your referencing. You've used a good range of sources, and I was pleased to see journal articles rather than just websites. You've also got plenty of data to work with. But the references themselves aren't set out in the format the department requires. Have a look at the style guide on the student portal."],
          ['A', "We'll fix that. About narrowing the question, we'd actually been thinking of focusing only on breakfast."],
          ['C', 'Interesting. Why breakfast?'],
          ['A', "Well, partly because we thought it would be easier to survey people about one meal, but to be honest it hasn't turned out to be any easier at all."],
          ['B', "The real reason is that when we searched the literature, we found loads of research on school lunches for children, but almost nothing on the breakfast habits of university students. So it seemed like a genuine gap."],
          ['C', "That's a good justification, and you should say so clearly in the introduction. Now, you're planning to use food diaries, is that right?"],
          ['B', 'Yes, participants write down everything they eat and drink.'],
          ['C', "Food diaries are widely used, but you need to be aware of their limitations. A week is a perfectly reasonable length of time, and most people can fill one in in a few minutes a day, so that's not my worry. The real problem is that people tend to leave things out, especially snacks and sugary drinks, so the data can be quite inaccurate. Make sure you acknowledge that in your methodology section."],
          ['A', 'Right. Should we change the number of participants? We had planned on thirty.'],
          ['C', "Thirty is rather small if you want to compare people who eat breakfast with people who don't. I'd suggest at least fifty."],
          ['B', 'Could we manage sixty? Then we would have thirty in each group.'],
          ['A', "It's more work, but I think it's worth it."],
          ['C', 'Sixty would be ideal.'],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 26 to 30.'],
          ['C', "Let's go through your procedure step by step. How are you going to find participants?"],
          ['A', "We thought about putting posters up in the library, but Priya suggested going through the student union instead. They send a weekly email to every student on campus."],
          ['C', "Good, that will reach far more people. And then?"],
          ['B', "First, everyone completes a short questionnaire about their usual eating habits and their sleep, so that we can put them into groups."],
          ['C', 'Keep it to ten questions at most. And then the diary?'],
          ['B', "Yes. They'll keep the food diary for one week. We did consider asking them to do it for a whole month, but we'd probably lose too many people along the way."],
          ['C', 'Sensible. And how will you measure the effect on performance? In the draft you mentioned exam results.'],
          ['A', "We've dropped that idea, because we can't get access to them. Instead, every morning the participants will do a short online test that measures concentration. It only takes about five minutes."],
          ['C', "Much better. That's something you can actually control. And finally, the analysis?"],
          ['B', "We were going to use the specialist statistics package, but we haven't been trained on it yet, so we'll just use a spreadsheet. The calculations are fairly simple."],
          ['C', "That's perfectly adequate at this level. Right, I look forward to seeing the next draft."],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },
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
                <tr><th>Period / place</th><th>Development</th></tr>
                <tr><td>Early Central America</td><td>cacao made into a [[31]] drink, often flavoured with chilli</td></tr>
                <tr><td>The Maya</td><td>cacao used in [[32]] ceremonies, including weddings</td></tr>
                <tr><td>The Aztecs</td><td>cacao beans used as a form of [[33]]</td></tr>
                <tr><td>16th-century Spain</td><td>[[34]] added to the drink for the first time</td></tr>
                <tr><td>17th-century London</td><td>chocolate houses became places to discuss [[35]]</td></tr>
              </table>`,
            answers: { 31: ['bitter'], 32: ['religious'], 33: ['currency', 'money'], 34: ['sugar'], 35: ['politics'] }
          },
          {
            type: 'gap', from: 36, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Industrial chocolate</h4>
                <ul>
                  <li>1828: a press removed cocoa butter, leaving a [[36]] that was easy to mix with water</li>
                  <li>1847: the first solid chocolate [[37]] was produced in Britain</li>
                  <li>Switzerland: milk chocolate made using [[38]] milk</li>
                  <li>the conching machine greatly improved the [[39]] of chocolate</li>
                  <li>today: most cacao is grown in West [[40]], mainly on small farms</li>
                </ul>
              </div>`,
            answers: { 36: ['powder'], 37: ['bar'], 38: ['condensed'], 39: ['texture'], 40: ['africa'] }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture on the history of chocolate production. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. Today we're going to look at the history of chocolate, and in particular how a drink once reserved for a small elite became one of the most widely traded food products in the world."],
          ['A', "The story begins in Central America, where the cacao tree grows naturally. Archaeologists have found traces of cacao in pottery that is several thousand years old. The earliest peoples to use it didn't eat chocolate as we know it. They ground the roasted beans and mixed them with water to make a drink. It would have tasted very different from modern hot chocolate. It was bitter, rather than sweet, and it was often flavoured with chilli or other spices."],
          ['A', "For the Maya, cacao was far more than a refreshment. It had a special place in religious ceremonies, and it was shared between families at important events such as weddings. Some Maya pottery even shows gods holding cacao pods."],
          ['A', "The Aztecs, who came later, could not grow cacao easily in their own highland territory, so they obtained it through trade and as tribute from conquered peoples. As a result, the beans became so valuable that they were used as currency. Records suggest you could buy a turkey, for example, for around a hundred beans."],
          ['A', "When Spanish explorers arrived in the sixteenth century, they were not immediately impressed by the drink. But once it was taken back to Spain, it was gradually adapted to European tastes. Some people believe vanilla was the key change, but in fact the Aztecs already used vanilla. The really important new ingredient was sugar, and sweetened chocolate soon became fashionable among the Spanish nobility."],
          ['A', "From Spain, chocolate spread across Europe. In seventeenth-century London, chocolate houses opened, similar to the coffee houses of the same period. They weren't just places to have a drink. They became places where wealthy men met to discuss politics, and some were even linked to particular political parties."],
          ['A', "Let's move on now to the industrial era. Until the nineteenth century, chocolate was still mainly a drink, and quite a heavy, oily one. The turning point came in 1828, when a Dutch chemist developed a press that could remove most of the cocoa butter from the beans. What remained was a powder, which mixed much more easily with water and was cheaper to produce."],
          ['A', "This also made it possible to combine cocoa butter, cocoa and sugar in new ways. In 1847, a British company produced what is generally considered the first solid chocolate bar. It was rather coarse by today's standards, but it was an immediate success."],
          ['A', "The next major step took place in Switzerland. Fresh milk contains a lot of water, which doesn't combine well with chocolate. The solution was to use condensed milk, and this led to the first commercial milk chocolate in the eighteen seventies."],
          ['A', "Shortly afterwards, another Swiss manufacturer invented the conching machine, which stirs liquid chocolate for many hours. Some people assume this was mainly about flavour, and it did help a little, but its great achievement was the texture. For the first time, chocolate became smooth enough to melt in the mouth."],
          ['A', "Finally, a word about where cacao comes from today. Although it originated in the Americas, the majority of the world's cacao is now grown in West Africa, mostly by small farmers who earn only a tiny share of the final price. That's an issue we'll explore in more detail next week."],
          ['N', 'That is the end of Part 4. You now have 30 seconds to check your answers.'],
          ['P', 30],
          ['N', 'That is the end of the Listening test.']
        ]
      }
    ]
  };

  /* ===================================================== READING ACADEMIC */
  const tfInstr = (n) => 'Do the following statements agree with the information given in ' + n + '?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this';

  const readingAcademic = {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'From Wolf to Companion',
          html: `
<p>Of all the animals that humans have domesticated, the dog was almost certainly the first. Long before the first crops were planted or the first sheep and goats were herded, people across Europe and Asia were living alongside animals that were no longer quite wolves. Yet despite decades of research, there is still no agreement on exactly when this happened. Estimates based on fossils and genetic evidence range from around 15,000 years ago to more than 30,000, and the question of how it happened is, if anything, even more hotly debated.</p>
<p>The traditional explanation is that hunters deliberately captured wolf pups and raised them in their camps. Over many generations, the story goes, the tamest animals were kept and bred, while aggressive ones were driven away or killed. This account has an obvious appeal, but it has been challenged. The zoologist Ellen Marsh points out that wolves raised by humans, however young they are when captured, often become difficult and unpredictable when they reach maturity. In her view, it is unlikely that early hunters, who had no way of controlling wolves’ breeding, could have produced a tame population in this way, and the deliberate taming of pups was probably not the main route to domestication.</p>
<p>An alternative theory, sometimes called self-domestication, suggests that wolves largely took the first steps themselves. As human groups became more settled, their camps produced rubbish heaps full of bones and other food waste. Wolves that were less fearful of humans could approach these sites and feed, while more nervous animals stayed away and missed out. According to the behavioural scientist Peter Haldane, natural selection would gradually have favoured calmer, more tolerant individuals, and humans may have played a largely passive role until the animals were already quite tame.</p>
<p>Support for the idea that selecting for tameness alone can produce dramatic changes comes from a long-running breeding experiment with silver foxes. Researchers chose only the foxes that showed the least fear or aggression towards people and allowed them to breed. Crucially, no attention was paid to the animals’ appearance. Within a few dozen generations, however, the tame foxes had begun to look strikingly different from their wild relatives. Many had patches of white fur, floppy ears and curled tails, features that are also common in domestic dogs but rare in wolves. Scientists believe that the genes linked to fearfulness also affect the development of these physical traits.</p>
<p>Genetics has added further complications to the story. By comparing DNA from ancient dog remains with that of modern breeds, the geneticist Tomas Varga has argued that dogs may have been domesticated not once but twice: once in East Asia and once in Europe. If he is correct, the eastern population later spread westwards and largely replaced the original European dogs, which would explain why their genetic signature is so hard to find in dogs today. Other researchers remain unconvinced, arguing that the ancient samples are too few to support such a firm conclusion.</p>
<p>Archaeology, meanwhile, offers a glimpse of the emotional relationship between early humans and their dogs. One of the oldest generally accepted dog burials, found in western Germany and dated to about 14,000 years ago, contained the remains of a dog laid to rest alongside two people. Analysis of its teeth showed that the animal had suffered a serious illness as a puppy and could only have survived if people had looked after it for several weeks. For the archaeologist Keiko Ando, this is strong evidence that dogs were valued not only for their usefulness in hunting but as companions in their own right.</p>
<p>Whatever its origins, domestication has left dogs with abilities that their wild ancestors lack. Perhaps the most remarkable is their skill at reading human gestures. In experiments carried out by the comparative psychologist Lucia Ferreira, dogs reliably followed a person’s pointing finger to find hidden food, a task at which chimpanzees, our closest relatives, performed surprisingly poorly. Even young puppies with little contact with people showed this ability, suggesting that it is at least partly inherited rather than learned.</p>
<p>Such findings help to explain why the partnership between humans and dogs has proved so lasting. Whether it began with hunters adopting pups or with wolves scavenging at the edge of camps, the result was an animal uniquely suited to living with people, and one that, in turn, may have helped to shape human societies.</p>`
        },
        groups: [
          {
            type: 'match', from: 1, to: 4,
            instr: 'Look at the following statements (Questions 1–4) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–E</b>.<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'Ellen Marsh' },
              { k: 'B', t: 'Peter Haldane' },
              { k: 'C', t: 'Tomas Varga' },
              { k: 'D', t: 'Keiko Ando' },
              { k: 'E', t: 'Lucia Ferreira' }
            ],
            questions: [
              { n: 1, text: 'Early people were attached to dogs for reasons other than their practical value.', answer: 'D' },
              { n: 2, text: 'Humans may have done little to encourage the first stages of domestication.', answer: 'B' },
              { n: 3, text: 'Wolves raised by humans from a young age may still be hard to manage as adults.', answer: 'A' },
              { n: 4, text: 'Dogs may have been domesticated in two different regions.', answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 5, to: 10,
            instr: tfInstr('Reading Passage 1'),
            questions: [
              { n: 5, text: 'Dogs were domesticated before people began farming.', answer: 'TRUE' },
              { n: 6, text: 'Experts now broadly agree on when dogs were first domesticated.', answer: 'FALSE' },
              { n: 7, text: 'In the fox experiment, animals were chosen for breeding partly because of their appearance.', answer: 'FALSE' },
              { n: 8, text: 'The fox experiment was originally intended to improve the quality of fox fur.', answer: 'NOT GIVEN' },
              { n: 9, text: 'Some scientists doubt Varga’s conclusions because of the limited number of ancient samples.', answer: 'TRUE' },
              { n: 10, text: 'The dog in the German grave had been trained to hunt.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'gap', from: 11, to: 13,
            instr: 'Complete the sentences below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <p class="sent">Wolves that were less [[11]] were able to feed at human rubbish heaps.</p>
              <p class="sent">The tame foxes often developed floppy ears and curled [[12]].</p>
              <p class="sent">Dogs were better than [[13]] at using a pointing finger to find hidden food.</p>`,
            answers: { 11: ['fearful'], 12: ['tails'], 13: ['chimpanzees', 'chimps'] }
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Farming Upwards',
          html: `
<p><b class="para">A</b> The idea of growing food inside tall buildings is not as new as it may seem. In the late 1990s, a professor of public health in New York set his students a challenge: to design a building in the city that could feed thousands of people. The students’ plans were ambitious and largely impractical, but the concept of the ‘vertical farm’ captured the public imagination. In its modern form, a vertical farm is an indoor facility in which crops are grown in stacked layers under artificial light, with temperature, humidity and nutrients all carefully controlled by computer.</p>
<p><b class="para">B</b> For many years, the main obstacle was lighting. Early indoor growers depended on sodium lamps, which consumed large amounts of electricity and gave off so much heat that they could not be placed close to the plants. The arrival of affordable LEDs changed the economics of the industry almost overnight. LEDs use far less power, run cool enough to sit just a few centimetres above the leaves and, importantly, can be adjusted to emit the precise wavelengths that plants use most efficiently, mainly in the red and blue parts of the spectrum. Some growers even vary the light during the day to alter the flavour or colour of their crops.</p>
<p><b class="para">C</b> Supporters point to several environmental advantages. Most vertical farms use hydroponic systems, in which roots sit in a nutrient-rich solution rather than soil, and the water is collected and recycled. As a result, a lettuce grown in this way may require up to 95 per cent less water than one grown in a field. Because the growing rooms are sealed from the outside world, insects and plant diseases rarely get in, so there is no need for pesticides. Crops can also be harvested all year round, regardless of droughts, floods or frosts.</p>
<p><b class="para">D</b> Location is another selling point. Since vertical farms can be built in warehouses, disused factories or even underground car parks, they can be placed close to the consumers they serve. This greatly reduces the distance that food must travel, and with it the fuel used by lorries and aircraft. Produce can reach supermarket shelves within hours of being picked rather than days, which means it is fresher and has a longer shelf life once it is bought, potentially reducing the amount of food that is thrown away.</p>
<p><b class="para">E</b> Despite these benefits, the industry has had a turbulent history. Lighting, heating and ventilation all depend on electricity, and energy can account for a third or more of a farm’s running costs. When energy prices rose sharply in 2022, several well-funded companies in Europe and North America found themselves unable to cover their costs. One firm that had raised hundreds of millions of dollars from investors and opened farms in several countries went bankrupt within a year. Urban land and buildings are also expensive, adding further pressure on profits.</p>
<p><b class="para">F</b> A further limitation is the narrow range of crops that can be grown profitably. Vertical farms are at their best with leafy greens and herbs, which grow quickly, are light and fetch a high price for their weight. Staple foods are another matter. One estimate calculated that a loaf of bread made from wheat grown under LEDs would cost many times its current price, simply because of the electricity needed to replace free sunlight. Root vegetables and fruit trees, meanwhile, take up too much space or take too long to mature. For the foreseeable future, therefore, vertical farms are unlikely to supply more than a small share of the calories people consume.</p>
<p><b class="para">G</b> None of this means the idea has failed. Rather, it suggests that vertical farming will be one tool among many, not a replacement for conventional agriculture. Its prospects seem brightest in places where farmland is scarce or the climate is harsh, such as small, densely populated island states or desert regions that currently import most of their fresh vegetables. Researchers are also experimenting with linking farms directly to solar or wind power, and with using waste heat from nearby factories or data centres, approaches that could bring energy costs down significantly. If they succeed, the vertical farm may yet prove its worth.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 18,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Which paragraph contains the following information?<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Paragraphs',
            options: [
              { k: 'A', t: 'Paragraph A' }, { k: 'B', t: 'Paragraph B' }, { k: 'C', t: 'Paragraph C' },
              { k: 'D', t: 'Paragraph D' }, { k: 'E', t: 'Paragraph E' }, { k: 'F', t: 'Paragraph F' }, { k: 'G', t: 'Paragraph G' }
            ],
            questions: [
              { n: 14, text: 'an example of a business that failed', answer: 'E' },
              { n: 15, text: 'a reference to an academic exercise that popularised an idea', answer: 'A' },
              { n: 16, text: 'a calculation showing why one type of crop is unsuitable', answer: 'F' },
              { n: 17, text: 'a comparison of the water needed by different growing methods', answer: 'C' },
              { n: 18, text: 'a mention of how light can be used to change the taste of crops', answer: 'B' }
            ]
          },
          {
            type: 'gap', from: 19, to: 22,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>How technology has helped vertical farms</h4>
                <p>The first indoor farms used [[19]] lamps, which used a lot of electricity and were too hot to be placed near the plants. LEDs are much more efficient and can be set to give out the exact [[20]] that plants need. Since growing rooms are sealed, [[21]] are not required. Food produced close to consumers is fresher and has a longer [[22]] life, which may mean less food is wasted.</p>
              </div>`,
            answers: { 19: ['sodium'], 20: ['wavelengths'], 21: ['pesticides'], 22: ['shelf'] }
          },
          {
            type: 'multi', from: 23, to: 24, ns: [23, 24],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> advantages of locating vertical farms near consumers are mentioned in the passage?',
            options: [
              { k: 'A', t: 'reduced fuel use for transport' },
              { k: 'B', t: 'lower costs for land and buildings' },
              { k: 'C', t: 'new jobs for former farm workers' },
              { k: 'D', t: 'produce that arrives in shops more quickly' },
              { k: 'E', t: 'easier access to cheap electricity' }
            ],
            answers: ['A', 'D']
          },
          {
            type: 'multi', from: 25, to: 26, ns: [25, 26],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> statements about the future of vertical farming does the writer make?',
            options: [
              { k: 'A', t: 'It will eventually replace most traditional farming.' },
              { k: 'B', t: 'It is most promising where land for farming is limited.' },
              { k: 'C', t: 'Governments will need to provide financial support.' },
              { k: 'D', t: 'Using renewable energy could make it cheaper.' },
              { k: 'E', t: 'Staple crops will soon be grown profitably indoors.' }
            ],
            answers: ['B', 'D']
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'The Unreliable Archive: Why Memory Errs',
          html: `
<p><b class="para">A</b> Ask people to describe how memory works and many will reach for the image of a video camera: experiences are recorded, stored somewhere in the brain and later played back, perhaps a little faded but essentially intact. It is a comforting picture, and an almost entirely misleading one. Nearly a century of research has shown that remembering is not a matter of retrieving a fixed recording but of reconstruction. Each time we recall an event, we rebuild it from fragments, filling the gaps with general knowledge, expectations and, sometimes, information acquired long after the event itself. One of the earliest demonstrations came in the 1930s, when a British psychologist asked students to read an unfamiliar folk tale from another culture and retell it at intervals. With each retelling, the story became shorter, more conventional and more in line with the students’ own cultural assumptions; puzzling details were dropped or quietly altered to make sense.</p>
<p><b class="para">B</b> If memory is reconstructed, it should be open to influence, and so it proves. In a well-known series of studies from the 1970s, participants watched film of a traffic accident and were then asked questions about it. The crucial manipulation was a single verb. Those asked how fast the cars were going when they ‘smashed into’ each other gave higher estimates of speed than those asked how fast the cars were going when they ‘hit’ each other. More strikingly, when questioned a week later, participants in the ‘smashed’ condition were more than twice as likely to report having seen broken glass, although none had appeared in the film. A subtle choice of wording had not merely coloured their judgement; it had added a detail to the memory itself.</p>
<p><b class="para">C</b> Later research went further, showing that it is possible to create memories of entire events that never took place. In typical experiments, volunteers are given short descriptions of several childhood experiences, supposedly supplied by relatives. Most are genuine, but one, such as being lost in a shopping centre or taking a ride in a hot-air balloon, is invented. After repeated interviews in which they are encouraged to imagine the events, a substantial minority of participants – roughly a quarter in some studies – come to remember the false event, often adding vivid details of their own. Many are astonished, and some are distressed, when the deception is revealed.</p>
<p><b class="para">D</b> Why should evolution have produced such an error-prone system? One increasingly influential answer is that the flaws are the price of a feature. A memory system that stored every experience exactly would be inefficient and, more importantly, inflexible. What matters for survival is not the precise record of a single event but the ability to extract its general meaning and apply it to new situations. Brain-imaging studies have found that the networks we use to remember the past overlap heavily with those we use to imagine the future. A system built to recombine elements of past experience into plausible new scenarios will, almost inevitably, sometimes recombine them into plausible scenarios that never happened. On this view, memory errors are not a malfunction but a by-product of a system that is, on the whole, remarkably useful.</p>
<p><b class="para">E</b> Whatever their origins, such errors can have grave consequences, nowhere more so than in the courtroom. Juries tend to find eyewitness testimony highly persuasive, particularly when the witness is confident. Yet in the United States, reviews of cases in which convicted people were later cleared by DNA evidence have found that mistaken eyewitness identification played a part in around 70 per cent of them. Worryingly, confidence turns out to be a poor guide to accuracy by the time a case reaches trial. Witnesses who were hesitant at first often become certain after months of interviews, encouraging feedback and repeated exposure to the suspect’s face in the media.</p>
<p><b class="para">F</b> Fortunately, research has also pointed the way towards better practice. In identity parades, the officer running the procedure should not know which person is the suspect, so that he or she cannot unconsciously signal the expected answer. Witnesses should be told that the culprit may not be present, and their level of confidence should be written down at the moment of their first identification, before anything can inflate it. Interviews should begin with open questions that allow witnesses to give their own account, rather than leading questions that suggest particular details. Several police forces have adopted such measures, and the evidence suggests that they reduce errors without making genuine identifications less likely.</p>
<p>None of this means that memory is worthless or that every recollection should be doubted. Most of what we remember is broadly accurate, especially the gist of events. But the research should make us more modest about the details, more careful about how we question others, and considerably more sceptical of the confident witness who claims to remember everything. In my view, it is precisely because memory is so central to our sense of who we are that we resist accepting how fragile it can be.</p>`
        },
        groups: [
          {
            type: 'match', from: 27, to: 32,
            instr: 'Reading Passage 3 has six labelled paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'The legal cost of unreliable recollection' },
              { k: 'ii', t: 'A weakness that may reflect a strength' },
              { k: 'iii', t: 'How a choice of words can alter what is recalled' },
              { k: 'iv', t: 'Why some individuals remember more than others' },
              { k: 'v', t: 'Challenging a popular comparison' },
              { k: 'vi', t: 'Recollections of experiences that never occurred' },
              { k: 'vii', t: 'Procedures designed to limit mistakes' },
              { k: 'viii', t: 'The influence of sleep on memory' },
              { k: 'ix', t: 'The decline of memory with age' }
            ],
            questions: [
              { n: 27, text: 'Paragraph A', answer: 'v' },
              { n: 28, text: 'Paragraph B', answer: 'iii' },
              { n: 29, text: 'Paragraph C', answer: 'vi' },
              { n: 30, text: 'Paragraph D', answer: 'ii' },
              { n: 31, text: 'Paragraph E', answer: 'i' },
              { n: 32, text: 'Paragraph F', answer: 'vii' }
            ]
          },
          {
            type: 'mc', from: 33, to: 35,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 33, text: 'In the 1930s study described in paragraph A, students retelling the folk tale', options: [
                { k: 'A', t: 'added new characters from their own imagination.' },
                { k: 'B', t: 'remembered the story more accurately with practice.' },
                { k: 'C', t: 'changed it to match what was familiar to them.' },
                { k: 'D', t: 'refused to retell parts they did not understand.' }], answer: 'C' },
              { n: 34, text: 'What is most significant about the traffic accident studies, according to the writer?', options: [
                { k: 'A', t: 'Participants were unable to judge the speed of the cars.' },
                { k: 'B', t: 'A question caused participants to remember something that was not there.' },
                { k: 'C', t: 'Participants forgot most of the film within a week.' },
                { k: 'D', t: 'The word ‘hit’ produced higher estimates of speed.' }], answer: 'B' },
              { n: 35, text: 'Brain-imaging studies mentioned in paragraph D suggest that', options: [
                { k: 'A', t: 'memories are stored in a single area of the brain.' },
                { k: 'B', t: 'false memories use different networks from true ones.' },
                { k: 'C', t: 'remembering and imagining rely on similar brain systems.' },
                { k: 'D', t: 'people who imagine vividly have fewer memory errors.' }], answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 36, to: 40,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 36, text: 'Comparing memory to a video camera gives an accurate picture of how it works.', answer: 'NO' },
              { n: 37, text: 'Children are more likely than adults to accept invented memories.', answer: 'NOT GIVEN' },
              { n: 38, text: 'Errors in memory are an unavoidable consequence of a generally valuable system.', answer: 'YES' },
              { n: 39, text: 'A witness’s confidence at trial is a dependable indicator of accuracy.', answer: 'NO' },
              { n: 40, text: 'Improved police procedures make it harder to identify guilty people correctly.', answer: 'NO' }
            ]
          }
        ]
      }
    ]
  };

  /* ===================================================== READING GENERAL TRAINING */
  const readingGeneral = {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
        range: [1, 14],
        passage: {
          title: 'Ashgrove Pool and Fernley Dental Surgery',
          html: `
<h3>Ashgrove Community Pool – Weekly Timetable</h3>
<table class="form-table">
  <tr><th>Day</th><th>Time</th><th>Session</th></tr>
  <tr><td rowspan="5">Monday – Friday</td><td>6.30 – 8.30</td><td>Early Swim (adults only, 16+)</td></tr>
  <tr><td>9.00 – 12.00</td><td>Public Swim</td></tr>
  <tr><td>12.00 – 13.30</td><td>Lane Swimming (fast, medium and slow lanes)</td></tr>
  <tr><td>13.30 – 15.30</td><td>School Lessons (pool closed to the public)</td></tr>
  <tr><td>16.00 – 21.00</td><td>Public Swim until 19.00, then Aqua Fitness (Tuesday and Thursday) or Lane Swimming (Monday, Wednesday and Friday)</td></tr>
  <tr><td>Saturday</td><td>8.00 – 17.00</td><td>Family Fun session with inflatables 8.00 – 12.00, then Public Swim</td></tr>
  <tr><td>Sunday</td><td>8.00 – 14.00</td><td>Public Swim (the pool closes at 2 pm for weekly cleaning)</td></tr>
</table>
<p><b>Prices:</b> Adult £4.80 &nbsp; Child (under 16) £2.60 &nbsp; Family ticket (2 adults + 2 children) £13.00. Aqua Fitness classes cost £6.00 and must be booked at reception at least a day in advance.</p>
<p><b>Please note:</b> Children under 8 must be accompanied in the water by an adult aged 16 or over. Each adult may supervise a maximum of two children under 8. Lockers take a £1 coin, which is returned when you open the locker. Swimming caps are not compulsory but are recommended for long hair.</p>

<h3>Fernley Dental Surgery – Notices for Patients</h3>
<p><b class="para">A</b> <b>Registering with us</b> – We are currently accepting new patients. Please complete a registration form at reception or online. When you attend your first appointment, bring a list of any medicines you take regularly, as some can affect dental treatment.</p>
<p><b class="para">B</b> <b>Missed appointments</b> – We send a reminder text message two days before every appointment. If you cannot attend, please let us know at least 24 hours beforehand. Patients who fail to attend without giving notice will be charged £25.</p>
<p><b class="para">C</b> <b>Urgent problems</b> – A small number of emergency appointments are kept free each weekday morning; please phone from 8.30 am. If you need urgent help when the surgery is closed, call the national health helpline on 111, who will direct you to an out-of-hours dentist.</p>
<p><b class="para">D</b> <b>Young patients</b> – Check-ups for under-18s are free of charge. We recommend that children visit us every six months. Every child receives a sticker and a certificate after their check-up, and regular visitors can join our Smile Club.</p>
<p><b class="para">E</b> <b>Getting here</b> – Our car park is small and has two spaces for disabled drivers. A larger public car park is available on Mill Street, two minutes’ walk away. Patients who use a wheelchair or find steps difficult should use the side entrance, which has a ramp.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 7,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> from the text for each answer.',
            template: `
              <p class="sent">Only people aged 16 and over may use the pool during the [[1]] session.</p>
              <p class="sent">On weekday afternoons, the public cannot use the pool because of [[2]].</p>
              <p class="sent">Aqua Fitness classes take place on Tuesday and [[3]] evenings.</p>
              <p class="sent">Inflatables are provided during the [[4]] session on Saturday mornings.</p>
              <p class="sent">One adult can look after no more than [[5]] children under the age of 8.</p>
              <p class="sent">The pool closes early on Sundays for [[6]].</p>
              <p class="sent">Two adults and two children can swim together for [[7]].</p>`,
            answers: {
              1: ['early swim'], 2: ['school lessons'], 3: ['thursday'], 4: ['family fun'],
              5: ['two', '2'], 6: ['weekly cleaning', 'cleaning'], 7: ['£13.00', '£13', '13', '13.00']
            }
          },
          {
            type: 'match', from: 8, to: 14,
            instr: 'Look at the five notices for patients, <b>A–E</b>, from Fernley Dental Surgery.<br>Which notice mentions the following information?<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Notices',
            options: [
              { k: 'A', t: 'Registering with us' },
              { k: 'B', t: 'Missed appointments' },
              { k: 'C', t: 'Urgent problems' },
              { k: 'D', t: 'Young patients' },
              { k: 'E', t: 'Getting here' }
            ],
            questions: [
              { n: 8, text: 'a charge that some patients may have to pay', answer: 'B' },
              { n: 9, text: 'what to do if you need help when the surgery is not open', answer: 'C' },
              { n: 10, text: 'information to bring on your first visit', answer: 'A' },
              { n: 11, text: 'a reward for patients', answer: 'D' },
              { n: 12, text: 'access for people with mobility difficulties', answer: 'E' },
              { n: 13, text: 'messages sent to patients’ phones', answer: 'B' },
              { n: 14, text: 'treatment for which there is no charge', answer: 'D' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Working at Brightline Logistics',
          html: `
<h3>Warehouse Health and Safety Rules</h3>
<p>All staff, agency workers and visitors must follow these rules while on the warehouse floor. Failure to do so may result in disciplinary action.</p>
<p><b>Clothing.</b> A high-visibility vest must be worn at all times in the warehouse, including during breaks if you remain on the floor. Safety boots with steel toe caps are compulsory; trainers and open shoes are not permitted under any circumstances. Spare vests are available from the supervisor’s office, but staff must provide their own boots after their first month.</p>
<p><b>Vehicles.</b> Forklift trucks may only be operated by staff who hold a valid licence. Even if you have driven a forklift elsewhere, you must not do so here until the site manager has checked your documents. Pedestrians must keep to the green walkways painted on the floor and should never assume that a driver has seen them.</p>
<p><b>Manual handling.</b> Before lifting any load, check its weight on the label. Items over 20 kg must be lifted by two people or with mechanical help. When lifting, keep your back straight and bend your knees, holding the load close to your body.</p>
<p><b>Accidents and emergencies.</b> Every accident, however minor, must be recorded in the accident book, which is kept in the canteen. If the fire alarm sounds, leave the building by the nearest exit and go to the assembly point in the front car park. Do not stop to collect personal belongings.</p>

<h3>Vacancy: Night Shift Team Leader</h3>
<p>Brightline Logistics is one of the region’s fastest-growing distribution companies, supplying supermarkets and online retailers across the north of the country. Due to continued expansion, we are looking for a Team Leader to join our night shift at our Hallam Road site.</p>
<p><b>The role.</b> You will lead a team of up to fifteen warehouse operatives, making sure that orders are picked, packed and loaded accurately and on time. This is a permanent night position, working four nights on and four nights off, from 10 pm to 7 am. You will report directly to the Night Shift Manager.</p>
<p><b>About you.</b> You will have at least two years’ experience in a warehouse environment, and some experience of supervising others would be an advantage. A forklift licence is desirable but not essential, as full training will be provided. You must be comfortable using handheld scanners and basic computer software.</p>
<p><b>What we offer.</b> A competitive salary with an additional allowance for night work, 25 days’ paid holiday, a company pension scheme, free on-site parking and a staff canteen serving hot meals at reduced prices. The site is a ten-minute walk from Hallam Road bus station.</p>
<p><b>How to apply.</b> Please complete the application form on our website by 30 June. We are unable to accept postal applications or CVs sent by email. Shortlisted candidates will be invited to an interview, which will include a short practical exercise on the warehouse floor.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 20,
            instr: 'Complete the notes below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Warehouse safety: key points</h4>
                <ul>
                  <li>wear a high-visibility [[15]] at all times</li>
                  <li>safety boots must have steel [[16]] caps</li>
                  <li>do not drive a forklift without a valid [[17]] that has been checked</li>
                  <li>pedestrians must use the green [[18]]</li>
                  <li>when lifting, bend your [[19]] and keep your back straight</li>
                  <li>record every accident, however minor, in the accident [[20]]</li>
                </ul>
              </div>`,
            answers: { 15: ['vest'], 16: ['toe'], 17: ['licence', 'license'], 18: ['walkways'], 19: ['knees'], 20: ['book'] }
          },
          {
            type: 'tf', variant: 'tf', from: 21, to: 27,
            instr: tfInstr('the job advertisement'),
            questions: [
              { n: 21, text: 'The Team Leader will work only at night.', answer: 'TRUE' },
              { n: 22, text: 'Applicants must already have a forklift licence.', answer: 'FALSE' },
              { n: 23, text: 'Team Leaders receive a bonus at the end of each year.', answer: 'NOT GIVEN' },
              { n: 24, text: 'Meals in the staff canteen are provided free of charge.', answer: 'FALSE' },
              { n: 25, text: 'It is possible to reach the site by public transport.', answer: 'TRUE' },
              { n: 26, text: 'Applications may be sent by post.', answer: 'FALSE' },
              { n: 27, text: 'Candidates will be asked to complete a practical task at interview.', answer: 'TRUE' }
            ]
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'A Nation of Tea Drinkers',
          html: `
<p><b class="para">A</b> Few habits are as closely associated with Britain as drinking tea. Estimates suggest that the British get through around a hundred million cups a day, and for many people the first cup of the morning is an unbreakable ritual. Yet tea is a relatively recent arrival. It was almost unknown in Britain until the middle of the seventeenth century, when it began to be offered in a handful of London coffee houses. At that time it was an exotic and extremely expensive product, imported from China and sold in small quantities to wealthy customers, many of whom valued it as a medicine as much as a drink.</p>
<p><b class="para">B</b> Tea’s rise to fashion owed a great deal to royalty. When the Portuguese princess Catherine of Braganza married King Charles II in 1662, she brought with her a taste for tea that was already common among the Portuguese aristocracy. Her habit of drinking it at court was quickly copied by ladies of the upper classes, and before long tea had become a symbol of elegance and refinement. Expensive tea sets, imported porcelain and locked wooden boxes for storing the precious leaves became signs of status in wealthy homes.</p>
<p><b class="para">C</b> For most of the eighteenth century, however, tea was taxed so heavily that ordinary people could rarely afford it legally. The result was smuggling on an enormous scale. Gangs brought tea in from continental Europe by boat and distributed it through networks of inns and farms; by some estimates, more tea entered Britain illegally than through official channels. Smuggled tea was often of poor quality and was frequently adulterated. Dealers mixed it with the leaves of other plants, coloured it with chemicals, or dried and resold leaves that had already been used. The problem was only solved in 1784, when the Commutation Act cut the tax on tea from over 100 per cent to around 12 per cent. Almost overnight, smuggling ceased to be profitable and legal tea became affordable to far more people.</p>
<p><b class="para">D</b> Behind the trade stood the East India Company, which for many years held a monopoly on the import of tea from China. Britain’s demand was so great that it created a serious trade imbalance: the Chinese wanted few British goods in return and insisted on payment in silver. The Company’s attempts to correct this imbalance, including the controversial trade in opium, led to tension and eventually war. The Company itself lost its control over trade with China in 1834, opening the market to other merchants.</p>
<p><b class="para">E</b> Meanwhile, the British were looking for ways to grow tea themselves. In the 1820s and 1830s, a variety of the tea plant was found growing wild in Assam, in north-east India, and the first experimental plantations were established there. In the following decade, a Scottish plant collector named Robert Fortune travelled through China in disguise and succeeded in obtaining thousands of tea plants and seeds, as well as learning the secrets of Chinese processing methods. Within a few decades, plantations in India and later Ceylon, now Sri Lanka, were producing tea on an industrial scale, and by the end of the nineteenth century most of the tea drunk in Britain came from the British Empire rather than China.</p>
<p><b class="para">F</b> As tea became cheaper, its role in daily life changed. Among the wealthy, the custom of afternoon tea is said to have begun in the 1840s with a duchess who complained of feeling hungry during the long gap between lunch and dinner, which was by then served late in the evening. She began taking tea with sandwiches and cakes in the late afternoon, and invited friends to join her. For working people, tea took on a very different role. Strong and sweetened with milk and sugar, it was a cheap source of calories and warmth for those doing long hours of physical labour. Employers introduced tea breaks, and these soon became an established part of the working day in factories and offices.</p>
<p><b class="para">G</b> Tea remained central to British life throughout the twentieth century. During the Second World War, the government considered it so important to public morale that it bought up the entire national supply, and tea was rationed for more than a decade. The biggest change in recent times has been the tea bag. Although invented earlier, it only became popular in Britain from the 1960s onwards; today more than 90 per cent of the tea made in British homes is made with tea bags. In recent years coffee has grown in popularity, particularly among younger people, and herbal and fruit teas have attracted new customers. But for millions, the familiar cup of strong tea with milk remains as much a part of daily life as ever.</p>`
        },
        groups: [
          {
            type: 'mc', from: 28, to: 31,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 28, text: 'When tea first arrived in Britain, it was', options: [
                { k: 'A', t: 'grown in small quantities in London.' },
                { k: 'B', t: 'sold mainly in shops selling medicines.' },
                { k: 'C', t: 'an expensive product for the rich.' },
                { k: 'D', t: 'more popular than coffee.' }], answer: 'C' },
              { n: 29, text: 'Catherine of Braganza is important in the history of tea because she', options: [
                { k: 'A', t: 'introduced tea to the Portuguese court.' },
                { k: 'B', t: 'made it fashionable among the British upper classes.' },
                { k: 'C', t: 'imported the first porcelain tea sets.' },
                { k: 'D', t: 'persuaded the king to lower the price of tea.' }], answer: 'B' },
              { n: 30, text: 'What was the main cause of tea smuggling in the eighteenth century?', options: [
                { k: 'A', t: 'high taxes' },
                { k: 'B', t: 'poor quality of legal tea' },
                { k: 'C', t: 'a shortage of tea in China' },
                { k: 'D', t: 'the closure of coffee houses' }], answer: 'A' },
              { n: 31, text: 'Robert Fortune is described as someone who', options: [
                { k: 'A', t: 'discovered tea growing wild in Assam.' },
                { k: 'B', t: 'ran the first plantations in Ceylon.' },
                { k: 'C', t: 'worked for the East India Company in China.' },
                { k: 'D', t: 'secretly acquired plants and knowledge from China.' }], answer: 'D' }
            ]
          },
          {
            type: 'gap', from: 32, to: 36,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Tea in everyday life</h4>
                <p>Afternoon tea is believed to have started because of the long interval between lunch and [[32]]. For working people, strong tea with milk and sugar provided warmth and was an inexpensive source of [[33]]. Tea [[34]] were introduced by employers and became part of the working day. During the Second World War, tea was [[35]] for over ten years. Today, nearly all tea made at home in Britain uses tea [[36]].</p>
              </div>`,
            answers: { 32: ['dinner'], 33: ['calories'], 34: ['breaks'], 35: ['rationed'], 36: ['bags'] }
          },
          {
            type: 'match', from: 37, to: 40,
            instr: 'Complete each sentence with the correct ending, <b>A–F</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'made illegal trade in tea no longer worthwhile.' },
              { k: 'B', t: 'sometimes contained leaves that had been used before.' },
              { k: 'C', t: 'lost its exclusive right to trade with China.' },
              { k: 'D', t: 'were developed using a plant that grew naturally in India.' },
              { k: 'E', t: 'were banned by the British government.' },
              { k: 'F', t: 'was only available in royal palaces.' }
            ],
            questions: [
              { n: 37, text: 'The Commutation Act of 1784', answer: 'A' },
              { n: 38, text: 'Tea sold by smugglers', answer: 'B' },
              { n: 39, text: 'The East India Company', answer: 'C' },
              { n: 40, text: 'The first plantations in Assam', answer: 'D' }
            ]
          }
        ]
      }
    ]
  };

  /* ===================================================== WRITING ACADEMIC */
  const writingAcademic = {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p><b>The pie charts below show how full-time students at one university spent their weekly budget in 2005 and 2025.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'pie',
          title: 'Student weekly spending by category (%)',
          pies: [
            { label: '2005', slices: [
              { name: 'Accommodation', value: 38 }, { name: 'Food', value: 22 }, { name: 'Entertainment', value: 14 },
              { name: 'Transport', value: 10 }, { name: 'Books & study materials', value: 9 },
              { name: 'Phone & internet', value: 4 }, { name: 'Other', value: 3 }] },
            { label: '2025', slices: [
              { name: 'Accommodation', value: 52 }, { name: 'Food', value: 18 }, { name: 'Entertainment', value: 9 },
              { name: 'Transport', value: 6 }, { name: 'Books & study materials', value: 4 },
              { name: 'Phone & internet', value: 8 }, { name: 'Other', value: 3 }] }
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
<p><b>Some people believe that living in a large city offers a better quality of life than living in the countryside. Others think that rural areas provide a healthier and more satisfying way of life.</b></p>
<p><b>Discuss both these views and give your own opinion.</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  /* ===================================================== WRITING GENERAL TRAINING */
  const writingGeneral = {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p>You are getting married later this year and would like an old friend, whom you have not seen for some time, to come to the wedding.</p>
<p>Write a letter to your friend. In your letter</p>
<ul>
  <li>give details of the wedding</li>
  <li>explain why you would especially like your friend to be there</li>
  <li>offer to help with travel or accommodation arrangements</li>
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
<p><b>In many countries, more and more people are choosing to work from home for some or all of the week.</b></p>
<p><b>Do the advantages of this trend outweigh the disadvantages?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 3, listening);
  IELTS.add('reading-academic', 3, readingAcademic);
  IELTS.add('reading-general', 3, readingGeneral);
  IELTS.add('writing-academic', 3, writingAcademic);
  IELTS.add('writing-general', 3, writingGeneral);
})();
