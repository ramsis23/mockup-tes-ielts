/* Konten tes 12 (orisinal, dibuat khusus untuk latihan ini). Academic saja.
   Format audio: ['N', teks] = narator, ['A'|'B', teks] = pembicara, ['P', detik] = jeda. */
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
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>HALLAM REMOVALS<br><span>Customer Booking Form</span></h4>
                <table class="form-table">
                  <tr><td>Name:</td><td>Joanna [[1]]</td></tr>
                  <tr><td>Current address:</td><td>27 [[2]] Close, Harrogate</td></tr>
                  <tr><td>Contact number (mobile):</td><td>07813 [[3]]</td></tr>
                  <tr><td>Moving date:</td><td>Saturday [[4]] June</td></tr>
                  <tr><td>Size of property:</td><td>[[5]] bedrooms (plus small storage room)</td></tr>
                  <tr><td>Item needing special care:</td><td>a [[6]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['pritchard'], 2: ['fenwick'], 3: ['552904', '552 904'],
              4: ['21', '21st', 'twenty-first', 'twenty first'], 5: ['3', 'three'], 6: ['piano']
            }
          },
          {
            type: 'mc', from: 7, to: 10,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 7, text: 'What does Dave say is the most useful thing to do before the move?', options: [
                { k: 'A', t: 'write the name of the room on the side of each box' },
                { k: 'B', t: 'pack books in small boxes' },
                { k: 'C', t: 'photograph the cables behind electrical equipment' }], answer: 'A' },
              { n: 8, text: 'What will Hallam Removals provide free of charge?', options: [
                { k: 'A', t: 'standard packing boxes' },
                { k: 'B', t: 'bubble wrap' },
                { k: 'C', t: 'wardrobe boxes' }], answer: 'C' },
              { n: 9, text: 'What problem is there at Joanna’s new address?', options: [
                { k: 'A', t: 'The road is too narrow for the lorry.' },
                { k: 'B', t: 'A parking permit is needed.' },
                { k: 'C', t: 'There are roadworks in the street.' }], answer: 'B' },
              { n: 10, text: 'What is the total price Dave quotes for the move?', options: [
                { k: 'A', t: '£640' },
                { k: 'B', t: '£720' },
                { k: 'C', t: '£780' }], answer: 'B' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a woman telephoning a removal company to arrange moving house. First, you have some time to look at questions 1 to 6.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 1 to 6.'],
          ['A', 'Good morning, Hallam Removals, Dave speaking. How can I help?'],
          ['B', "Oh, hello. I'm moving house next month, and I'd like to get a quote and, if possible, book a date with you."],
          ['A', 'Certainly. Let me open a booking form. Can I take your name first?'],
          ['B', "Yes, it's Joanna Pritchard. That's P, R, I, T, C, H, A, R, D."],
          ['A', 'Thank you. And where are you moving from?'],
          ['B', "At the moment I'm at twenty-seven Fenwick Close, in Harrogate. Fenwick is F, E, N, W, I, C, K."],
          ['A', 'Twenty-seven Fenwick Close. Lovely. And what is the best number to reach you on?'],
          ['B', "My mobile, please. It's oh seven eight one three, five five two, nine oh four."],
          ['A', 'Oh seven eight one three, five five two, nine oh four.'],
          ['B', "That's right. My landline is being disconnected next week, so please don't use that one."],
          ['A', 'Noted. Now, have you fixed a date for the move?'],
          ['B', "Well, I was hoping for Saturday the fourteenth of June, but the people buying my house have asked for a bit more time, so it'll be the following Saturday, the twenty-first."],
          ['A', 'The twenty-first of June. We do still have a team free that day. And how big is the property you are leaving?'],
          ['B', "It's a three-bedroom house. Well, the estate agent advertised it as four bedrooms, but the smallest one is really just a box room that I use for storage."],
          ['A', "So I'll put three bedrooms, plus a small storage room. Are there any items that need special care? Antiques, a large mirror, that kind of thing?"],
          ['B', "There's a big mirror in the hall, but I'll wrap that myself. My real worry is the piano. It belonged to my grandmother, and it's extremely heavy."],
          ['A', "That's not a problem. We have a specialist team for pianos. I'll make a note of it."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 7 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 7 to 10.'],
          ['B', 'Is there anything you would advise me to do before the day?'],
          ['A', "A lot of people take photos of the cables behind the television, which is fine, and some people pack all their books into small boxes, but our team usually does the books anyway. The thing that saves the most time is writing the name of the room on the side of every box, not on the top. Then we can see it even when the boxes are stacked."],
          ['B', 'That makes sense. Do you supply the boxes?'],
          ['A', "We sell standard boxes at two pounds each, and bubble wrap is sold by the roll. But we lend our wardrobe boxes, the tall ones with a rail for hanging clothes, at no charge. You just give them back afterwards."],
          ['B', "Great. Oh, I should mention the new house. It's on Mill Street in Knaresborough."],
          ['A', "I know Mill Street. It's wide enough for our lorry, and I think the roadworks there finished last week. But it's residents' parking only, so you'll need to get a temporary permit from the council for the day."],
          ['B', "Right, I'll apply for one. And finally, how much will it all cost?"],
          ['A', "The basic price for a three-bedroom house is six hundred and forty pounds. The piano adds eighty pounds, so that's seven hundred and twenty. Normally there's a sixty-pound charge for Saturdays, which would make it seven hundred and eighty, but we're not charging that this month. So the total is seven hundred and twenty pounds."],
          ['B', "That's fine. Please go ahead and book it."],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 2 */
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'm' },
        groups: [
          {
            type: 'gap', from: 11, to: 15,
            instr: 'Answer the questions below.<br>Write <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> for each answer.',
            template: `
              <p class="sent">What was the building used for before it became an arts centre? [[11]]</p>
              <p class="sent">How long did the renovation work take? [[12]]</p>
              <p class="sent">What did builders find under the floor of the main hall? [[13]]</p>
              <p class="sent">What do members receive free every month? [[14]]</p>
              <p class="sent">Who will the Saturday morning workshops be for from September? [[15]]</p>`,
            answers: {
              11: ['fire station', 'a fire station'],
              12: ['18 months', 'eighteen months'],
              13: ['water tank', 'a water tank', 'tank'],
              14: ['two tickets', '2 tickets', 'two free tickets', '2 free tickets'],
              15: ['teenagers']
            }
          },
          {
            type: 'match', from: 16, to: 20, display: 'grid',
            instr: 'Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 16–20.',
            figure: `<svg viewBox="0 0 660 440" role="img" aria-label="Plan of the ground floor of Brindley Arts Centre with locations A to H">
              <text class="fig-title" x="300" y="28" text-anchor="middle">Brindley Arts Centre – Ground Floor</text>
              <line class="thin" x1="180" y1="50" x2="180" y2="370"/><line class="thin" x1="420" y1="50" x2="420" y2="370"/>
              <line class="thin" x1="60" y1="160" x2="180" y2="160"/><line class="thin" x1="60" y1="270" x2="180" y2="270"/>
              <line class="thin" x1="420" y1="160" x2="540" y2="160"/><line class="thin" x1="420" y1="270" x2="540" y2="270"/>
              <line class="thin" x1="180" y1="170" x2="420" y2="170"/><line class="thin" x1="180" y1="260" x2="420" y2="260"/>
              <line class="thin" x1="300" y1="170" x2="300" y2="260"/>
              <path class="line" d="M270 370 H60 V50 H540 V370 H330"/>
              <rect class="area" x="225" y="56" width="150" height="26"/>
              <text class="halo" x="300" y="74" text-anchor="middle">Stage</text>
              <text x="300" y="132" text-anchor="middle">Main Hall</text>
              <rect class="area" x="262" y="284" width="76" height="20"/>
              <text x="300" y="324" text-anchor="middle">Reception</text>
              <text x="300" y="352" text-anchor="middle">Foyer</text>
              <g class="lbl" text-anchor="middle">
                <rect class="box" x="108" y="93" width="24" height="24"/><text class="lbl" x="120" y="110">A</text>
                <rect class="box" x="108" y="203" width="24" height="24"/><text class="lbl" x="120" y="220">B</text>
                <rect class="box" x="108" y="308" width="24" height="24"/><text class="lbl" x="120" y="325">C</text>
                <rect class="box" x="228" y="203" width="24" height="24"/><text class="lbl" x="240" y="220">D</text>
                <rect class="box" x="348" y="203" width="24" height="24"/><text class="lbl" x="360" y="220">E</text>
                <rect class="box" x="468" y="93" width="24" height="24"/><text class="lbl" x="480" y="110">F</text>
                <rect class="box" x="468" y="203" width="24" height="24"/><text class="lbl" x="480" y="220">G</text>
                <rect class="box" x="468" y="308" width="24" height="24"/><text class="lbl" x="480" y="325">H</text>
              </g>
              <path class="solid" d="M300 380 l-9 16 h18 z"/>
              <text x="300" y="418" text-anchor="middle">Main entrance</text>
              <g class="compass" transform="translate(615 70)"><line class="thin" x1="0" y1="-18" x2="0" y2="18"/><line class="thin" x1="-18" y1="0" x2="18" y2="0"/><path class="solid" d="M0 -22 l-5 10 h10 z"/><path class="solid" d="M0 22 l-5 -10 h10 z"/><path class="solid" d="M22 0 l-10 -5 v10 z"/><path class="solid" d="M-22 0 l10 -5 v10 z"/><text x="0" y="-27" text-anchor="middle">N</text><text x="0" y="37" text-anchor="middle">S</text><text x="33" y="4" text-anchor="middle">E</text><text x="-33" y="4" text-anchor="middle">W</text></g>
            </svg>`,
            boxTitle: 'Plan locations',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 16, text: 'box office', answer: 'C' },
              { n: 17, text: 'dance studio', answer: 'F' },
              { n: 18, text: 'pottery studio', answer: 'E' },
              { n: 19, text: 'gallery', answer: 'B' },
              { n: 20, text: 'recording studio', answer: 'A' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear the director of an arts centre talking to visitors at an open day. First, you have some time to look at questions 11 to 15.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 11 to 15.'],
          ['A', "Good morning, everyone, and welcome to the Brindley Arts Centre open day. I'm Martin Hale, the director, and I'd like to tell you a little about the centre before you go off and explore."],
          ['A', "Many visitors assume that this building was once a school, because of the tall windows and the clock tower. In fact, it was built in eighteen ninety-one as the town's fire station. The fire engines, which were pulled by horses in those days, came out through the arches where the main entrance is now. It stayed in use until nineteen seventy-eight, when a new station opened on the ring road."],
          ['A', "After that the building stood empty for many years. When the council finally agreed to pay for the renovation, the plan was to finish the work within twelve months. But old buildings are full of surprises, and in the end it took eighteen months. One of those surprises came when the builders lifted the floor of what is now the main hall. Underneath it they found an enormous water tank, which the firefighters would have used to fill their equipment. It has been sealed now, but you can see part of it through a glass panel near the stage."],
          ['A', "Now, membership. It costs forty pounds a year. Everyone, whether they're a member or not, gets ten per cent off in the café, so that's not a special benefit. The main advantage for members is that you receive two free tickets every month for any of our film screenings or talks."],
          ['A', "Finally, workshops. Our Saturday morning workshops have always been for children aged five to ten. However, there are already plenty of activities in town for that age group, so from September they'll be aimed at teenagers instead. Younger children are still very welcome at our holiday clubs."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 16 to 20.'],
          ['A', "Let's look at the plan of the ground floor. You came in through the main entrance on the south side, and you're now standing in the foyer, with the reception desk in front of you and the main hall beyond it, at the north end of the building."],
          ['A', "If you want to book tickets, the box office is the room immediately on your left as you come in, in the south-west corner. Please don't confuse it with the room on the opposite side of the foyer, in the south-east corner. That's the cloakroom, where you can leave coats and bags."],
          ['A', "Our dance studio is the busiest room in the building. It's in the north-east corner, right next to the main hall, so dancers can go straight onto the stage for performances. Between the dance studio and the cloakroom, in the middle of the east side, is our café."],
          ['A', "Directly behind the reception desk there are two smaller rooms. The one on the left is the green room, where performers wait before they go on stage. The one on the right is the pottery studio. It's small, but it has two kilns and space for twelve people."],
          ['A', "The long room in the middle of the west side is the gallery. At the moment it has an exhibition of photographs of the fire station in its working days, so do have a look."],
          ['A', "And lastly, the recording studio, which is in the north-west corner. Like the dance studio, it's beside the main hall, which means we can record concerts directly from the stage. That's all from me. Enjoy your visit."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 3 */
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'gap', from: 21, to: 25,
            instr: 'Complete the sentences below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <p class="sent">The students chose Saltmoor Marsh mainly because it is easy to reach by [[21]].</p>
              <p class="sent">Their first visit was cancelled because of strong [[22]].</p>
              <p class="sent">They measured plant cover using a square frame called a [[23]].</p>
              <p class="sent">Freya thinks their [[24]] were more useful than their photographs.</p>
              <p class="sent">Their tutor advised them to compare their results with records kept by the local [[25]].</p>`,
            answers: { 21: ['train'], 22: ['winds', 'wind'], 23: ['quadrat'], 24: ['sketches'], 25: ['council'] }
          },
          {
            type: 'match', from: 26, to: 30,
            instr: 'What do the students decide to do with each section of their report?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 26–30.',
            boxTitle: 'Decisions',
            options: [
              { k: 'A', t: 'add more detail' },
              { k: 'B', t: 'make it shorter' },
              { k: 'C', t: 'add a diagram' },
              { k: 'D', t: 'move it to the appendix' },
              { k: 'E', t: 'ask the tutor about it' },
              { k: 'F', t: 'remove it completely' }
            ],
            questions: [
              { n: 26, text: 'the introduction', answer: 'B' },
              { n: 27, text: 'the description of methods', answer: 'C' },
              { n: 28, text: 'the tables of measurements', answer: 'D' },
              { n: 29, text: 'the discussion', answer: 'A' },
              { n: 30, text: 'the reflection on teamwork', answer: 'E' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two environmental science students, Freya and Owen, discussing their field study of a salt marsh. First, you have some time to look at questions 21 to 25.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 25.'],
          ['B', 'So, Freya, shall we go over the field study before we start writing it up?'],
          ['A', "Good idea. I was trying to remember why we chose Saltmoor Marsh in the first place. There were two or three other sites on the list."],
          ['B', "It was mainly about getting there, wasn't it? The bus only goes twice a day, but the station is a ten-minute walk from the edge of the marsh, so we could get there easily by train with all our equipment."],
          ['A', "That's right. Although our first visit didn't exactly go to plan."],
          ['B', "No. Everyone was worried about the forecast of heavy rain, but in the end it was the strong winds that stopped us. The warden said it wasn't safe to be out on the mudflats."],
          ['A', 'So we went the following week instead. And I thought our method for measuring plant cover worked really well.'],
          ['B', 'The quadrat, you mean? The square frame?'],
          ['A', "Yes. And in the report we must spell it correctly. Q, U, A, D, R, A, T. Not quadrant, which is what I wrote in my notebook."],
          ['B', "Fair enough. One thing I wasn't sure about was the photographs. We took hundreds of them."],
          ['A', "I know, but honestly, most of them just look like mud. The sketches we made on the spot were far more useful, because we could mark exactly where each plant was."],
          ['B', 'True. And what did Doctor Harris say when you saw her yesterday?'],
          ['A', "She was quite positive. She thought we should compare our results with some older data. I suggested the university's own survey from twenty fifteen, but she said that only covered a tiny area. She recommended the records kept by the local council, which go back about thirty years."],
          ['B', "Great. I'll request those."],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 26 to 30.'],
          ['B', "Let's think about the report itself. The introduction is nearly three pages at the moment."],
          ['A', "That's far too long for a report of this size. We really need to cut it down to about one page."],
          ['B', "Agreed. Then there's the methods section. I've described everything in words, but it's quite hard to follow."],
          ['A', "The text itself is fine. But a diagram showing where we placed the quadrats, along the line from the sea up to the dry land, would make it much clearer."],
          ['B', "OK, I'll draw one. What about the tables of measurements? There are eleven of them."],
          ['A', "They break up the text too much. Readers only need the summary graph in the main report, so let's put the full tables in the appendix."],
          ['B', 'Makes sense. Now, the discussion. I was worried it was too long.'],
          ['A', "Actually, I think it's the opposite. We only mention the tides very briefly. We should explain in more detail how flooding affects which plants grow where."],
          ['B', "All right. And the last section, the reflection on how we worked as a team. Honestly, I'd just remove it completely."],
          ['A', "I'd be happy to, but I have a feeling the guidelines say it's compulsory. Let's check with Doctor Harris before we decide."],
          ['B', "Fair enough. I'll email her tonight."],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------- Part 4 */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'gap', from: 31, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>The Acoustics of Concert Halls</h4>
                <p><b>Ancient theatres</b></p>
                <ul>
                  <li>Greek theatres were built into a [[31]], so seats rose steeply above the stage</li>
                </ul>
                <p><b>Wallace Sabine (1890s)</b></p>
                <ul>
                  <li>asked to improve a lecture hall where words echoed for several seconds</li>
                  <li>timed how long sound took to fade, using an organ pipe and a [[32]]</li>
                  <li>borrowed seat [[33]] from a nearby theatre to test how much sound was absorbed</li>
                  <li>realised an audience also absorbs sound, so a hall sounds different when it is [[34]]</li>
                </ul>
                <p><b>Hall shapes</b></p>
                <ul>
                  <li>‘shoebox’: long, high and narrow; sound is reflected from the side [[35]] towards listeners</li>
                  <li>‘vineyard’: audience sits on terraces surrounding the [[36]]</li>
                </ul>
                <p><b>Materials</b></p>
                <ul>
                  <li>thin wooden panels vibrate and absorb [[37]] notes</li>
                  <li>carvings and other uneven surfaces [[38]] sound in many directions</li>
                </ul>
                <p><b>Modern halls</b></p>
                <ul>
                  <li>adjustable [[39]] above the stage can be raised or lowered</li>
                  <li>heavy curtains make a hall suitable for [[40]]</li>
                </ul>
              </div>`,
            answers: {
              31: ['hillside', 'hill'], 32: ['stopwatch'], 33: ['cushions'], 34: ['empty'], 35: ['walls'],
              36: ['stage'], 37: ['bass', 'low'], 38: ['scatter'], 39: ['reflectors'], 40: ['conferences']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture about the acoustics of concert halls. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. Today I'm going to talk about the acoustics of concert halls, in other words, the science of how sound behaves inside a building designed for music."],
          ['A', "Let's begin with the ancient world. The Greeks built their open-air theatres into a hillside, so that the audience sat on steep rows of stone seats rising above the stage. Sound could travel directly to each listener without being blocked by the heads of the people in front. Visitors to these theatres today are still amazed that a coin dropped on the stage can be heard from the back row."],
          ['A', "Indoor halls are more complicated, because sound bounces off walls and ceilings. The modern science really begins in the eighteen nineties with a young American physicist, Wallace Sabine. He was asked to do something about a new lecture hall where students couldn't understand the lecturer, because every word echoed on for several seconds. Sabine's method was simple. He played a note on an organ pipe, stopped it, and used a stopwatch to time how long the sound took to fade until he could no longer hear it."],
          ['A', "To find out how much sound different materials absorbed, he needed something he could carry in and out of the room easily. So he borrowed hundreds of seat cushions from a theatre nearby, collecting them at night after the performances had finished. He found that each cushion absorbed a measurable amount of sound. He also realised that people's bodies and clothes absorb sound in much the same way. This is why a hall sounds quite different when it is empty from when it is full, and why rehearsals can mislead musicians."],
          ['A', "Sabine went on to advise on the design of Boston Symphony Hall, which opened in nineteen hundred. It's an example of what we call the shoebox shape: long, high and narrow. Because the hall is narrow, sound is reflected from the side walls back towards the listeners, which gives a rich, surrounding effect. In the nineteen sixties a very different design appeared, called the vineyard style, because the audience sits on terraces, a bit like rows of vines, surrounding the stage on all sides. This brings everyone closer to the musicians."],
          ['A', "What about materials? People often say that wood is the best material for a concert hall, but this is something of a myth. Thick wood is fine, but thin wooden panels tend to vibrate and absorb the bass notes, so the music can sound thin. Thick plaster often works better. The shape of a surface matters just as much. Decorative carvings, statues and other uneven surfaces scatter sound in many directions, so it reaches every seat evenly instead of bouncing back as a single echo."],
          ['A', "Finally, modern halls usually have to host many kinds of event. To make this possible, engineers install adjustable reflectors, large panels that hang above the stage and can be raised or lowered depending on the size of the orchestra. Some halls also have heavy curtains that can be drawn across the walls to absorb sound. This makes the hall suitable for conferences, where clear speech matters more than a rich musical tone."],
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
      /* ---------------- Passage 1 */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'Guardians of the Coast',
          html: `
<p>For as long as people have travelled by sea, the coast has been the most dangerous part of any voyage. In open water a ship has room to manoeuvre, but near land it faces hidden rocks, sandbanks and strong currents, often in darkness or fog. The lighthouse was humanity’s answer to this problem, and its history is a story of engineering ambition, scientific discovery and, until surprisingly recently, a great deal of lonely human labour.</p>
<p>The most famous early lighthouse was the Pharos of Alexandria, completed in about 280 BC on a small island at the entrance to the Egyptian harbour. Ancient writers describe a tower well over one hundred metres high, which would have made it one of the tallest structures in the world for many centuries. A fire burned at its summit at night, and some accounts claim that a great mirror, possibly made of polished bronze, reflected the light far out to sea, although historians remain unsure whether this detail is accurate. The Pharos survived for more than a thousand years before a series of earthquakes finally brought it down.</p>
<p>After the fall of the Roman Empire, few new lights were built in Europe, and those that did exist were often kept by monks, who regarded guiding sailors to safety as a religious duty. At Hook Head in Ireland, for example, a community of monks is said to have maintained a fire for centuries before a stone tower was constructed there. By the seventeenth century, however, sea trade was growing rapidly, and merchants began to demand better protection for their ships and cargoes.</p>
<p>Nowhere was the need clearer than at the Eddystone rocks, a reef lying some twenty kilometres off the coast of Plymouth in south-west England. The rocks are almost completely covered at high tide, and they had wrecked countless vessels. In 1698 an eccentric showman and engineer named Henry Winstanley completed the first lighthouse there, an elaborate tower made of wood and decorated with carvings. It was a remarkable achievement, but wood was no match for the Atlantic. In 1703, while Winstanley was on the rock carrying out repairs, a violent storm swept the entire structure away, and he was among those who lost their lives.</p>
<p>A second tower, also largely wooden, stood for almost fifty years until it was destroyed by fire. The engineer who replaced it, John Smeaton, took a completely different approach. Smeaton studied the way an oak tree withstands the wind, with a broad base that narrows gradually towards the top, and he designed a curved tower on the same principle. Its blocks of granite were cut so that each one locked into its neighbours, like the pieces of a puzzle, and the structure was bound together so firmly that the sea could not prise it apart. Completed in 1759, Smeaton’s tower served for over a hundred and twenty years. It was eventually taken down only because the rock beneath it had begun to crumble, and the upper part was rebuilt on Plymouth Hoe, overlooking the harbour, where visitors can still climb it today.</p>
<p>Strong towers were only half the problem; the light itself also needed improving. For centuries, lighthouses had relied on open coal fires or clusters of candles, which produced a great deal of smoke and comparatively little light. In the 1780s the Swiss scientist Aimé Argand invented an oil lamp with a hollow, circular wick and a glass chimney. Air flowed up through the centre of the wick as well as around the outside, so the oil burned far more completely, giving a steady flame that was many times brighter than a candle and almost free of smoke. Argand lamps, often placed in front of curved metal reflectors, were soon installed in lighthouses across Europe.</p>
<p>The greatest advance came in 1822, when the French physicist Augustin Fresnel demonstrated a new type of lens. A conventional lens large enough to concentrate a lighthouse beam would have been impossibly thick and heavy. Fresnel’s solution was to divide the lens into a series of rings of glass, each angled to bend the light into a single horizontal beam. The result was lighter and dramatically more powerful: the light from a large Fresnel lens could be seen more than thirty kilometres away. By rotating the lens, engineers could also give each lighthouse its own ‘character’, a distinctive pattern of flashes that allowed sailors to identify exactly which stretch of coast they were passing.</p>
<p>For all this technology, lighthouses still depended on people. Keepers trimmed wicks, polished lenses, wound the clockwork that turned the lights and recorded the weather. On remote rock stations, where there was no room for families, keepers worked in small teams and spent several weeks at a time on duty, while their wives and children lived in cottages on the mainland. The work was monotonous and occasionally dangerous, and supply boats could be delayed for weeks by bad weather.</p>
<p>During the twentieth century, electricity and then automatic controls gradually made keepers unnecessary. In Britain, the last lighthouse to be staffed, North Foreland in Kent, was automated in 1998. Today, satellite navigation means that ships rely far less on lights than they once did, but most lighthouses continue to operate as a back-up in case electronic systems fail. Many keepers’ cottages, meanwhile, have found new lives as museums and holiday homes, attracting visitors who are drawn by the romance of these isolated towers.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the table below.<br>Choose <b>ONE WORD AND/OR A NUMBER</b> from the passage for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Date</th><th>Lighthouse or invention</th><th>Key features</th></tr>
                <tr><td>c. 280 BC</td><td>Pharos of Alexandria</td><td>fire at the top; light may have been reflected by a bronze [[1]]</td></tr>
                <tr><td>Middle Ages</td><td>lights such as Hook Head</td><td>fires kept by [[2]] as a religious duty</td></tr>
                <tr><td>1698</td><td>Winstanley’s Eddystone tower</td><td>built of [[3]]; destroyed by a storm in [[4]]</td></tr>
                <tr><td>1759</td><td>Smeaton’s Eddystone tower</td><td>shape based on an oak tree; interlocking blocks of [[5]]</td></tr>
                <tr><td>1780s</td><td>Argand lamp</td><td>a hollow, circular [[6]] and a glass chimney</td></tr>
              </table>`,
            answers: { 1: ['mirror'], 2: ['monks'], 3: ['wood'], 4: ['1703'], 5: ['granite'], 6: ['wick'] }
          },
          {
            type: 'tf', variant: 'tf', from: 7, to: 13,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 7, text: 'Winstanley died when his lighthouse was destroyed.', answer: 'TRUE' },
              { n: 8, text: 'The second lighthouse on the Eddystone rocks was destroyed by a storm.', answer: 'FALSE' },
              { n: 9, text: 'Part of Smeaton’s lighthouse can still be visited.', answer: 'TRUE' },
              { n: 10, text: 'Argand lamps were cheaper to run than the candles used before them.', answer: 'NOT GIVEN' },
              { n: 11, text: 'Sailors could tell lighthouses apart by their patterns of flashes.', answer: 'TRUE' },
              { n: 12, text: 'Keepers at rock stations usually lived there with their families.', answer: 'FALSE' },
              { n: 13, text: 'Some former lighthouse keepers now work as guides for tourists.', answer: 'NOT GIVEN' }
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
          title: 'Why We Laugh',
          html: `
<p><b class="para">A</b> Laughter is one of the few human behaviours found in every culture on Earth. Babies begin to laugh at around four months of age, long before they can speak, and children who have been deaf and blind from birth laugh in much the same way as other children, even though they have never heard or seen anyone else do so. This suggests that laughter is not something we learn by imitation but something we are born with. Yet for a behaviour so universal, it has received surprisingly little scientific attention until recent decades, perhaps because it seemed too trivial to deserve serious study.</p>
<p><b class="para">B</b> One clue to its origins comes from our closest animal relatives. When young chimpanzees, gorillas and orangutans wrestle and chase one another, they produce a breathy, panting sound that the primatologist Dr Yuki Tanabe has spent years recording. In her view, this ‘play pant’ is the ancestor of human laughter, a signal that originally meant ‘this is only a game, not a real attack’. The sounds are not identical, however. An ape pants on both the in-breath and the out-breath, whereas humans laugh almost entirely while breathing out, chopping a single exhalation into a series of short ‘ha-ha’ sounds. Tanabe argues that this change became possible only once our ancestors had developed the fine control of breathing that speech also requires.</p>
<p><b class="para">C</b> If laughter began as a signal, we would expect it to be closely linked to the presence of other people, and this is exactly what researchers have found. Professor Liam Brennan asked volunteers to keep a diary recording every occasion on which they laughed over a week. He found that they were around thirty times more likely to laugh when they were with others than when they were alone, and that even the solitary laughter usually occurred while watching television or reading messages from friends. In a separate project, the anthropologist Dr Sofia Marchetti recorded more than a thousand everyday conversations in cafés, offices and shopping centres. To her surprise, fewer than one laugh in five followed anything that could be described as a joke. Most came after perfectly ordinary remarks such as ‘See you later’ or ‘I know what you mean’. Marchetti also found that speakers laughed more often than their listeners did, which suggests that laughter serves to punctuate conversation and to show friendly intentions rather than simply to express amusement.</p>
<p><b class="para">D</b> Why should such a signal be so valuable? Professor Ruth Adeyemi believes the answer lies in the way laughter helps to bind groups together. In a series of experiments, she asked participants to watch either a comedy or a documentary, alone or in small groups, and then measured how long they could tolerate an uncomfortable task, such as keeping a hand in very cold water. Those who had laughed together could endure the discomfort for significantly longer. Adeyemi attributes this to the release of endorphins, chemicals produced by the brain that reduce pain and create a feeling of wellbeing. She points out that other primates strengthen friendships by grooming one another, which is time-consuming and can only be done with one partner at a time. Laughter, by contrast, can be shared by several people at once, and it may therefore have allowed early humans to maintain bonds with a much larger number of individuals.</p>
<p><b class="para">E</b> Not all laughter is the same, as anyone who has heard a polite laugh at a dull joke will know. Dr Henrik Lund played short recordings of pairs of people laughing together to listeners in more than twenty countries. Remarkably, the listeners could usually tell whether the people laughing were close friends or strangers who had only just met, regardless of the language or culture of the laughers. Friends’ laughter tended to be faster, more irregular and higher in pitch. Lund believes this is because genuine, spontaneous laughter is produced by a different system in the brain from the deliberate, social laughter we use out of politeness, and that our ears have become finely tuned to the difference.</p>
<p><b class="para">F</b> Laughter is also famously contagious. Brain-imaging studies show that simply hearing laughter activates the regions that prepare the facial muscles used in smiling, so that we are already halfway to joining in. Television producers have exploited this effect for decades by adding recorded laughter to comedy programmes, and experiments confirm that audiences rate jokes as funnier when they are accompanied by the sound of others laughing. The effect is stronger still when the laughter comes from someone we know, which perhaps explains why a joke that falls flat on a recording can seem hilarious in the company of friends.</p>
<p><b class="para">G</b> Given all this, it is not surprising that laughter has been promoted as a form of medicine. Hospitals in several countries employ clowns to visit children’s wards, and an activity known as laughter yoga, in which groups laugh deliberately without any jokes at all, has spread to thousands of clubs around the world. There is reasonable evidence that laughing reduces stress and improves mood in the short term. Claims that it can strengthen the immune system or extend life expectancy, however, are based on small studies that have proved difficult to repeat, and most researchers remain cautious. Laughter may not be the best medicine, but as a way of bringing people closer together, it appears to have few rivals.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 18,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Which paragraph contains the following information?<br>Write the correct letter, <b>A–G</b>, next to Questions 14–18.<br><b>NB</b> You may use any letter more than once.',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }
            ],
            questions: [
              { n: 14, text: 'a reference to the age at which humans first laugh', answer: 'A' },
              { n: 15, text: 'a comparison between the sounds made by humans and by apes', answer: 'B' },
              { n: 16, text: 'an example of a commercial use of the way laughter spreads between people', answer: 'F' },
              { n: 17, text: 'an explanation of how laughter may have allowed humans to live in larger social groups', answer: 'D' },
              { n: 18, text: 'doubts about some claims concerning the health benefits of laughter', answer: 'G' }
            ]
          },
          {
            type: 'match', from: 19, to: 23, display: 'grid',
            instr: 'Look at the following statements (Questions 19–23) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–E</b>.<br>Click on the correct space in the table.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'Sofia Marchetti' },
              { k: 'B', t: 'Liam Brennan' },
              { k: 'C', t: 'Yuki Tanabe' },
              { k: 'D', t: 'Ruth Adeyemi' },
              { k: 'E', t: 'Henrik Lund' }
            ],
            questions: [
              { n: 19, text: 'Most laughter follows remarks that are not intended to be funny.', answer: 'A' },
              { n: 20, text: 'Laughing with others can make physical discomfort easier to bear.', answer: 'D' },
              { n: 21, text: 'People laugh far more often in company than on their own.', answer: 'B' },
              { n: 22, text: 'Human laughter developed from a sound made by animals during play.', answer: 'C' },
              { n: 23, text: 'The sound of laughter reveals how well the people laughing know each other.', answer: 'E' }
            ]
          },
          {
            type: 'gap', from: 24, to: 26,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <p class="sent">Unlike humans, apes make their laughing sound on both the in-breath and the [[24]].</p>
              <p class="sent">Hearing other people laugh causes the brain to prepare the [[25]] that are used in smiling.</p>
              <p class="sent">In the activity called [[26]], people laugh on purpose without hearing any jokes.</p>`,
            answers: { 24: ['out-breath', 'outbreath', 'out breath'], 25: ['facial muscles', 'muscles'], 26: ['laughter yoga'] }
          }
        ]
      },

      /* ---------------- Passage 3 */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'In Defence of Boredom',
          html: `
<p>Few experiences are as universally disliked as boredom. We speak of being ‘bored to death’ or ‘bored stiff’, as though the condition were a kind of slow suffocation, and a vast industry now exists to ensure that we never have to endure it. The smartphone, in particular, has made it possible to fill every spare moment, whether we are waiting for a bus, standing in a queue or lying awake at night. Yet a growing body of research suggests that in our eagerness to banish boredom we may be losing something of value. Boredom, I want to argue, is not simply an absence of stimulation but a signal, and like other uncomfortable signals, such as hunger or pain, it exists for a reason.</p>
<p>Psychologists have long struggled to define boredom precisely. Early studies tended to treat it as the product of a dull environment: the factory worker repeating the same task all day, the guard on a long night watch. More recent work places the emphasis on the mind rather than on the surroundings. On this view, boredom is the feeling that arises when we want to be engaged in something satisfying but cannot find a way to be. Crucially, this means that boredom is not the same as relaxation. A person lying contentedly on a beach is not bored; the person who wishes to be doing something, but finds every available option unappealing, is.</p>
<p>Understood in this way, boredom functions as a prompt. It tells us that our current activity is failing to meet our needs and pushes us to look for something better. Some researchers compare it to a gauge on a car dashboard, warning the driver that something requires attention. From an evolutionary perspective, an animal that never grew restless would have little reason to explore new territory or to try unfamiliar sources of food, and it would be at a disadvantage compared with its more curious rivals.</p>
<p>The most widely discussed claim, however, concerns creativity. In one frequently cited experiment, volunteers were first asked to spend a quarter of an hour on a deliberately tedious task: copying numbers from a telephone directory. They were then asked to think of as many uses as possible for a pair of plastic cups. Compared with a group who had not done the dull task, they came up with significantly more ideas, and their ideas were judged to be more original. The researchers suggested that boredom encourages the mind to wander, and that daydreaming allows connections to form between ideas that would not normally meet.</p>
<p>I find this explanation persuasive, but it is important not to overstate it. The experiment involved small numbers of participants, and creativity was measured over a few minutes rather than over weeks or months. Boredom may open the door to creative thought, but it does not guarantee that anyone will walk through it. Many bored people simply become irritable or reach for the nearest distraction. Indeed, in another study, participants who were left alone in a bare room for fifteen minutes with nothing to do but think were given the option of pressing a button that delivered a mild electric shock. A surprising number chose to press it, apparently preferring physical discomfort to their own company.</p>
<p>That finding points to a genuine danger. Chronic boredom, as opposed to the passing kind, has been associated with a range of problems, including overeating, gambling and poor performance at school and at work. It would be foolish, then, to romanticise boredom or to suggest that it is always good for us. The real question is not whether boredom is pleasant, but how we respond to it.</p>
<p>This is where I believe our current habits are most worrying. When we reach for a phone the moment a feeling of boredom appears, we never discover where that feeling might have led. The digital world offers stimulation that is endlessly varied but rarely demanding: it relieves the discomfort without addressing its cause. In this sense, it resembles eating sweets when what we really need is a proper meal. Over time, we may lose the capacity to tolerate even brief periods without input, so that ordinary activities such as reading a long book or listening to a lecture come to seem unbearably slow.</p>
<p>Children deserve particular consideration here. Many parents feel obliged to keep their children constantly entertained, filling the week with organised activities and treating any complaint of boredom as a problem to be solved immediately. Some educators now argue that this is a mistake, and I agree with them. A child who is left to deal with an empty afternoon may eventually build a den, invent a game or start writing a story, and in doing so learn that their own imagination is a resource they can rely on. Of course, a child left alone with nothing but a screen will learn something quite different.</p>
<p>None of this means that we should seek out boredom for its own sake, or abandon the technology that makes so much of modern life easier. What it suggests is a change of attitude. Rather than treating boredom as an enemy to be defeated at once, we might treat it as a message worth listening to. The next time you find yourself waiting with nothing to do, it may be worth leaving the phone in your pocket, at least for a few minutes, and seeing where your thoughts take you.</p>`
        },
        groups: [
          {
            type: 'gap', from: 27, to: 31,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>Understanding boredom</h4>
                <p>Early researchers believed that boredom was caused by a dull [[27]], but psychologists now focus on the mind: boredom occurs when people want to be engaged in something satisfying but are unable to be. For this reason, boredom should not be confused with [[28]]. It acts as a [[29]] that pushes people to look for a more rewarding activity, and it has been compared to a [[30]] on a car dashboard. From an evolutionary point of view, restless animals would have been more likely to explore new [[31]] and so gain an advantage over their rivals.</p>
              </div>`,
            answers: { 27: ['environment'], 28: ['relaxation'], 29: ['prompt', 'signal'], 30: ['gauge'], 31: ['territory'] }
          },
          {
            type: 'mc', from: 32, to: 35,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 32, text: 'According to the researchers, why did the volunteers who copied numbers produce more ideas?', options: [
                { k: 'A', t: 'They were more eager to impress the researchers.' },
                { k: 'B', t: 'They had been given more time to think.' },
                { k: 'C', t: 'Their minds had been encouraged to wander.' },
                { k: 'D', t: 'They were more used to repetitive work.' }], answer: 'C' },
              { n: 33, text: 'What is the writer’s main reservation about the creativity experiment?', options: [
                { k: 'A', t: 'It was small in scale and short in duration.' },
                { k: 'B', t: 'The task chosen was unrealistic.' },
                { k: 'C', t: 'Its results contradicted those of other studies.' },
                { k: 'D', t: 'The researchers judged originality unfairly.' }], answer: 'A' },
              { n: 34, text: 'The writer mentions the study involving electric shocks in order to show that', options: [
                { k: 'A', t: 'boredom can cause people physical harm.' },
                { k: 'B', t: 'some laboratory experiments are unethical.' },
                { k: 'C', t: 'people are more creative when they are alone.' },
                { k: 'D', t: 'many people find being alone with their thoughts unpleasant.' }], answer: 'D' },
              { n: 35, text: 'The writer compares using digital devices to eating sweets in order to suggest that they', options: [
                { k: 'A', t: 'are harmful only when used in large amounts.' },
                { k: 'B', t: 'remove an unpleasant feeling without dealing with its cause.' },
                { k: 'C', t: 'are especially attractive to children.' },
                { k: 'D', t: 'are difficult to give up once people are used to them.' }], answer: 'B' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 36, to: 40,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 36, text: 'Like hunger, boredom serves a useful purpose.', answer: 'YES' },
              { n: 37, text: 'Boredom reliably leads people to think more creatively.', answer: 'NO' },
              { n: 38, text: 'Chronic boredom is more common among adults than among teenagers.', answer: 'NOT GIVEN' },
              { n: 39, text: 'Parents should act quickly to end their children’s boredom.', answer: 'NO' },
              { n: 40, text: 'It is worth resisting the urge to use a phone during short periods of waiting.', answer: 'YES' }
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
<p><b>The table below shows the average number of minutes per day that people in four age groups in one country spent on five leisure activities in 2025.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'table',
          title: 'Average time spent on leisure activities per day, by age group, 2025 (minutes)',
          columns: ['Activity', '16–24', '25–44', '45–64', '65+'],
          rows: [
            ['Watching television', '72', '95', '138', '186'],
            ['Using social media', '154', '88', '41', '17'],
            ['Reading for pleasure', '14', '19', '27', '46'],
            ['Sport and exercise', '48', '31', '24', '19'],
            ['Socialising with friends', '96', '62', '55', '58']
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
<p><b>Some people believe that children should start learning a foreign language as soon as they begin primary school. Others think it is better for children to wait until they are at secondary school.</b></p>
<p><b>Discuss both these views and give your own opinion.</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  }
};
IELTS.add('listening', 12, T.listening);
IELTS.add('reading-academic', 12, T.reading);
IELTS.add('writing-academic', 12, T.writing);
})();
