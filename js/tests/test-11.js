/* Test 11 — konten orisinal, dibuat khusus untuk latihan ini (Academic saja).
   Format audio: ['N', teks] = narator, ['A'|'B', teks] = pembicara, ['P', detik] = jeda. */
(() => {
  /* ===================================================== LISTENING */
  const listening = {
    parts: [
      /* ---------- Part 1: booking a dog into boarding kennels ---------- */
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'gap', from: 1, to: 10,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Hillside Boarding Kennels – Booking Notes</h4>
                <p><b>Owner and dog</b></p>
                <ul>
                  <li>Owner’s name: Michael [[1]]</li>
                  <li>Dog’s name: [[2]]</li>
                  <li>Breed: cocker [[3]]</li>
                  <li>Age: [[4]] years</li>
                  <li>Arrival date: [[5]] July (collection: 2 August)</li>
                </ul>
                <p><b>Care and costs</b></p>
                <ul>
                  <li>Medical: tablets for his [[6]], given with breakfast</li>
                  <li>Vet: [[7]] Veterinary Practice, Station Road</li>
                  <li>Accommodation: [[8]] suite</li>
                  <li>Cost: £[[9]] per night</li>
                  <li>Extra service: a [[10]] on the last day (£12)</li>
                  <li>Bring: vaccination certificate and usual food</li>
                </ul>
              </div>`,
            answers: {
              1: ['whitlock'], 2: ['pepper'], 3: ['spaniel'], 4: ['11', 'eleven'],
              5: ['15', '15th', 'fifteenth'], 6: ['joints'], 7: ['abbey'], 8: ['garden'],
              9: ['28', 'twenty-eight', 'twenty eight'], 10: ['bath']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a man telephoning a boarding kennels to book a stay for his dog. First, you have some time to look at questions 1 to 5.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 1 to 5.'],
          ['A', 'Good morning, Hillside Boarding Kennels, Karen speaking. How can I help?'],
          ['B', "Hello. I'd like to book a place for my dog while we're away on holiday this summer."],
          ['A', 'Of course. Has your dog stayed with us before?'],
          ['B', 'No, this would be the first time. One of my neighbours recommended you.'],
          ['A', "That's nice to hear. Just so you know, we take dogs in between eight and ten in the morning, and collections are in the afternoon."],
          ['B', 'That should work for us.'],
          ['A', "Good. I'll just take a few details. What's your name, please?"],
          ['B', "It's Michael Whitlock."],
          ['A', 'And how do you spell your surname?'],
          ['B', 'W, H, I, T, L, O, C, K.'],
          ['A', "Thank you. And what's your dog called?"],
          ['B', "He's called Pepper."],
          ['A', 'Lovely. And what breed is he?'],
          ['B', "Because of his colour, people often think he's a Labrador, but he's actually a cocker spaniel."],
          ['A', 'A spaniel. And how old is he?'],
          ['B', "He's getting on a bit now. My wife always says he's ten, but I checked his papers last night, and he's actually eleven."],
          ['A', 'Eleven. And which dates do you need?'],
          ['B', "Well, our holiday was going to start on the twelfth of July, but the airline changed our flight, so we'll be bringing him in on the fifteenth instead."],
          ['A', 'So arriving on the fifteenth of July. And when will you collect him?'],
          ['B', 'On the second of August.'],
          ['A', "That's fine, we have space for those dates."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 6 to 10.'],
          ['A', 'Does Pepper have any medical needs that we should know about?'],
          ['B', "Yes, he takes tablets for his joints. He gets quite stiff in the mornings. His heart is fine, though. The vet checked it only last month."],
          ['A', "No problem. We can give him the tablets with his breakfast. And which vet do you use, in case we need to contact them?"],
          ['B', "Abbey Veterinary Practice, on Station Road."],
          ['A', 'Is that Abbey, A, B, B, E, Y?'],
          ['B', "That's right."],
          ['A', 'Now, we have two kinds of accommodation. The standard kennels are indoors, in our main building, or there are the garden suites, which are a bit larger and each have their own outdoor run.'],
          ['B', 'He loves being outside, so the garden suite, please.'],
          ['A', "A garden suite. That's normally thirty-one pounds a night. But for stays of more than a week we take three pounds off, so it will be twenty-eight pounds a night."],
          ['B', "That's fine."],
          ['A', "We also offer a few extra services. Some owners like their dog to have a haircut before they go home."],
          ['B', "He had one last month, so he doesn't need that. But he always comes back from these places smelling awful, so could he have a bath on the last day?"],
          ['A', "Of course. That's twelve pounds. Finally, please remember to bring his vaccination certificate when you drop him off, and some of his usual food."],
          ['B', 'I will. And do the dogs get taken out for walks?'],
          ['A', 'Yes, every dog has two walks a day in our fields, as well as some play time in the yard.'],
          ['B', 'Perfect. Thanks very much for your help.'],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 2: ranger's talk at a country park ---------- */
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'match', from: 11, to: 15, display: 'grid',
            instr: 'Label the map below.<br>Write the correct letter, <b>A–H</b>, next to Questions 11–15.',
            figure: `<svg viewBox="0 0 640 460" role="img" aria-label="Map of Fernley Country Park with locations A to H">
              <text class="fig-title" x="280" y="24" text-anchor="middle">Fernley Country Park</text>
              <path class="thin" d="M310 403 C220 406, 120 405, 40 400 C34 300, 36 160, 42 46 C180 36, 380 34, 528 46 C536 160, 534 300, 530 400 C460 404, 400 404, 340 403"/>
              <path class="green" d="M60 70 C100 56, 170 58, 196 80 C210 120, 206 180, 214 230 C200 256, 140 262, 90 258 C62 250, 52 200, 56 150 C58 110, 52 86, 60 70 Z"/>
              <g>
                <circle class="tree" cx="80" cy="120" r="7"/><circle class="tree" cx="146" cy="84" r="7"/><circle class="tree" cx="178" cy="112" r="7"/>
                <circle class="tree" cx="84" cy="160" r="7"/><circle class="tree" cx="182" cy="152" r="7"/><circle class="tree" cx="72" cy="206" r="7"/>
                <circle class="tree" cx="122" cy="236" r="7"/><circle class="tree" cx="166" cy="198" r="7"/><circle class="tree" cx="192" cy="190" r="6"/>
                <circle class="tree" cx="140" cy="122" r="6"/><circle class="tree" cx="96" cy="236" r="6"/>
                <circle class="tree" cx="236" cy="66" r="7"/><circle class="tree" cx="258" cy="84" r="6"/>
                <circle class="tree" cx="418" cy="62" r="7"/><circle class="tree" cx="444" cy="76" r="6"/>
                <circle class="tree" cx="72" cy="290" r="6"/><circle class="tree" cx="100" cy="300" r="6"/>
              </g>
              <text class="halo" x="132" y="174" text-anchor="middle">Ash Wood</text>
              <path class="shore" d="M280 110 C300 92, 340 94, 370 98 C400 102, 418 124, 412 150 C406 178, 392 196, 360 198 C330 200, 300 196, 284 178 C268 160, 266 128, 280 110 Z"/>
              <text class="halo" x="342" y="152" text-anchor="middle">Lake</text>
              <path class="shore" d="M404 182 C430 220, 446 260, 460 300 C474 340, 492 370, 506 400 L514 400 C500 368, 482 336, 468 298 C454 258, 438 216, 410 178 Z"/>
              <text class="halo" x="500" y="352" text-anchor="middle">Stream</text>
              <rect class="area" x="140" y="300" width="100" height="40" rx="3"/>
              <text x="190" y="317" text-anchor="middle">Visitor Centre</text>
              <text x="190" y="333" text-anchor="middle">(you are here)</text>
              <rect class="area" x="270" y="345" width="110" height="42" rx="3"/>
              <text x="325" y="371" text-anchor="middle">Car park</text>
              <path class="road" d="M10 434 C150 426, 300 436, 420 432 C500 429, 580 426, 630 434"/>
              <path class="road" d="M325 387 L325 432"/>
              <text class="halo" x="170" y="452" text-anchor="middle">Fernley Lane</text>
              <path class="path" d="M268 104 C292 80, 345 82, 378 86 C415 92, 432 122, 426 152 C420 186, 400 212, 360 214 C324 216, 290 212, 272 192 C252 170, 250 126, 268 104 Z"/>
              <path class="path" d="M200 300 C206 272, 222 258, 236 250 C258 238, 282 224, 300 213"/>
              <path class="path" d="M236 250 C214 244, 200 238, 180 232 C150 222, 120 214, 102 190 C86 160, 92 124, 108 98"/>
              <path class="path" d="M240 325 C252 330, 262 345, 270 360"/>
              <path class="path" d="M140 322 C122 330, 108 340, 96 350"/>
              <path class="path" d="M380 350 C410 334, 438 314, 456 300 M476 292 C488 268, 494 230, 492 190 C490 150, 494 112, 498 80"/>
              <rect class="area" x="455" y="290" width="22" height="9" transform="rotate(-25 466 294)"/>
              <text class="halo" x="484" y="312">Bridge</text>
              <text class="halo" transform="translate(508 200) rotate(-90)" text-anchor="middle">East path</text>
              <text class="halo" x="214" y="290">Main path</text>
              <rect class="box" x="96" y="70" width="24" height="24"/><text class="lbl" x="108" y="88" text-anchor="middle">A</text>
              <rect class="box" x="328" y="57" width="24" height="24"/><text class="lbl" x="340" y="75" text-anchor="middle">B</text>
              <rect class="box" x="432" y="126" width="24" height="24"/><text class="lbl" x="444" y="144" text-anchor="middle">C</text>
              <rect class="box" x="178" y="238" width="24" height="24"/><text class="lbl" x="190" y="256" text-anchor="middle">D</text>
              <rect class="box" x="262" y="250" width="24" height="24"/><text class="lbl" x="274" y="268" text-anchor="middle">E</text>
              <rect class="box" x="390" y="360" width="24" height="24"/><text class="lbl" x="402" y="378" text-anchor="middle">F</text>
              <rect class="box" x="70" y="342" width="24" height="24"/><text class="lbl" x="82" y="360" text-anchor="middle">G</text>
              <rect class="box" x="486" y="55" width="24" height="24"/><text class="lbl" x="498" y="73" text-anchor="middle">H</text>
              <g class="compass" transform="translate(590 78)">
                <line class="thin" x1="0" y1="-18" x2="0" y2="18"/><line class="thin" x1="-18" y1="0" x2="18" y2="0"/>
                <path class="solid" d="M0 -22 l-5 10 h10 z"/><path class="solid" d="M0 22 l-5 -10 h10 z"/>
                <path class="solid" d="M22 0 l-10 -5 v10 z"/><path class="solid" d="M-22 0 l10 -5 v10 z"/>
                <text x="0" y="-27" text-anchor="middle">N</text><text x="0" y="37" text-anchor="middle">S</text>
                <text x="33" y="4" text-anchor="middle">E</text><text x="-33" y="4" text-anchor="middle">W</text>
              </g>
              <rect class="thin" x="542" y="176" width="96" height="206" rx="4"/>
              <text class="lbl" x="550" y="196">Key</text>
              <line class="road" x1="550" y1="214" x2="572" y2="214"/><text x="580" y="218">Road</text>
              <line class="path" x1="550" y1="236" x2="572" y2="236"/><text x="580" y="240">Footpath</text>
              <line class="thin" x1="550" y1="258" x2="572" y2="258"/><text x="580" y="262">Hedge</text>
              <rect class="area" x="550" y="273" width="22" height="14" rx="2"/><text x="580" y="284">Building</text>
              <path class="green" d="M552 296 C560 292, 570 293, 572 298 C574 304, 570 310, 562 310 C554 310, 549 304, 552 296 Z"/><text x="580" y="307">Woodland</text>
              <circle class="tree" cx="555" cy="325" r="5"/><circle class="tree" cx="567" cy="325" r="5"/><text x="580" y="329">Trees</text>
              <path class="shore" d="M552 344 C558 338, 570 339, 572 345 C574 351, 566 354, 560 353 C553 352, 549 348, 552 344 Z"/><text x="580" y="351">Water</text>
              <rect class="area" x="550" y="362" width="22" height="8" transform="rotate(-25 561 366)"/><text x="580" y="372">Bridge</text>
            </svg>`,
            boxTitle: 'Locations on the map',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 11, text: 'bird hide', answer: 'B' },
              { n: 12, text: 'cycle hire', answer: 'F' },
              { n: 13, text: 'adventure playground', answer: 'D' },
              { n: 14, text: 'wildflower meadow', answer: 'H' },
              { n: 15, text: 'barbecue area', answer: 'G' }
            ]
          },
          {
            type: 'mc', from: 16, to: 20,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 16, text: 'The lake in the park was formed', options: [
                { k: 'A', t: 'when an old quarry filled with water.' },
                { k: 'B', t: 'when a dam was built across the stream.' },
                { k: 'C', t: 'when farmland was flooded deliberately.' }], answer: 'A' },
              { n: 17, text: 'Between March and July, dogs must be kept on a lead', options: [
                { k: 'A', t: 'everywhere in the park.' },
                { k: 'B', t: 'in Ash Wood.' },
                { k: 'C', t: 'on the path around the lake.' }], answer: 'C' },
              { n: 18, text: 'What is the subject of this afternoon’s ranger-led walk?', options: [
                { k: 'A', t: 'bats' },
                { k: 'B', t: 'dragonflies' },
                { k: 'C', t: 'fungi' }], answer: 'B' },
              { n: 19, text: 'What does the ranger say about the café?', options: [
                { k: 'A', t: 'It will close early today.' },
                { k: 'B', t: 'It no longer accepts cash.' },
                { k: 'C', t: 'It is serving a reduced menu.' }], answer: 'B' },
              { n: 20, text: 'The ranger asks visitors to help the park by', options: [
                { k: 'A', t: 'making a donation.' },
                { k: 'B', t: 'joining a volunteer day.' },
                { k: 'C', t: 'recording wildlife sightings.' }], answer: 'C' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a ranger talking to a group of visitors at the start of a day at a country park. First, you have some time to look at questions 11 to 15.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 15.'],
          ['A', "Good morning, everyone, and welcome to Fernley Country Park. My name's Rachel, and I'm one of the rangers here. Before you set off, I'll give you a quick guide to the park, using the map on the board here. We're standing outside the Visitor Centre, which is in the southern part of the park, just to the west of the car park."],
          ['A', "Let's start with the lake, which is where most of you will be heading. The lakeside path goes all the way round it. A lot of regular visitors still look for the bird hide on the eastern shore, among the reeds, because that's where it used to be. But last year it was rebuilt on the northern shore, on the far side of the lake from here, so that you look south across the open water. The views from there are much better."],
          ['A', "If you'd like to hire a bike, the cycle hire is right next to the car park, on its eastern side. As you drive in from Fernley Lane, it's on your right. Bikes are available until four o'clock."],
          ['A', "Families with young children usually want the adventure playground. Walk up the main path from here towards the lake. About halfway along, the woodland trail branches off to the left, into Ash Wood. The playground is just there, at the corner where the trail leaves the main path, on the edge of the wood. There's an open grassy area on the other side of the main path, but that's only for ball games."],
          ['A', "Further away is the wildflower meadow, which is at its best at this time of year. To get there, take the east path, which starts at the far end of the car park. It crosses the stream by a small wooden bridge, and then you just keep walking north until the path ends, in the north-east corner of the park. The meadow is right at the end."],
          ['A', "And finally, for anyone planning a barbecue, the barbecue area is in the south-west corner of the park, close to the road. Just head west from the Visitor Centre and you'll see it. Please don't light barbecues anywhere else, and especially not in the wood."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 16 to 20.'],
          ['A', "Now, a little history. People often assume the lake has always been here, or that it was made by damming the stream. There was farmland on this site in the nineteenth century, it's true. But until the nineteen seventies this was a gravel quarry, and when the digging stopped, the pits slowly filled with water. That's how the lake was formed."],
          ['A', "A few rules. Dogs are very welcome, and in most of the park they can run freely. However, from March to July, while the birds are nesting, they must be kept on a lead on the lakeside path. In the wood they can be off the lead, as long as they're under control."],
          ['A', "We run free ranger-led walks most days. On summer evenings we usually do a bat walk, and in the autumn there's a very popular fungi walk. This afternoon, though, the walk at two o'clock will be looking for dragonflies around the ponds. Meet here at the Visitor Centre."],
          ['A', "The café in the Visitor Centre is open until five today, with the full menu as usual. But please note that we stopped taking cash in the spring, so you'll need a card or your phone to pay."],
          ['A', "Finally, how can you help us? Entry to the park is free, and we're not asking for donations today. What really helps us is information. If you spot any interesting wildlife, please record it on the park's free app. Our staff use those records to monitor how different species are doing. We do run volunteer days, but I'm afraid they're fully booked until the autumn. Right, enjoy your day."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 3: two trainee teachers discuss their placements ---------- */
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'mc', from: 21, to: 25,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 21, text: 'Why did Nadia choose Ashgrove School for her placement?', options: [
                { k: 'A', t: 'The classes there are small.' },
                { k: 'B', t: 'It is close to her home.' },
                { k: 'C', t: 'She wanted to see how mixed-age classes are taught.' }], answer: 'C' },
              { n: 22, text: 'What surprised Sam most about the school where he worked?', options: [
                { k: 'A', t: 'the independence of the pupils' },
                { k: 'B', t: 'the amount of paperwork teachers had to do' },
                { k: 'C', t: 'the amount of technology in the classrooms' }], answer: 'A' },
              { n: 23, text: 'Both students found that the most difficult part of the placement was', options: [
                { k: 'A', t: 'managing pupils’ behaviour.' },
                { k: 'B', t: 'planning for pupils of different abilities.' },
                { k: 'C', t: 'marking pupils’ work.' }], answer: 'B' },
              { n: 24, text: 'What did Nadia’s mentor advise her to do?', options: [
                { k: 'A', t: 'make video recordings of her lessons' },
                { k: 'B', t: 'spend more time observing experienced teachers' },
                { k: 'C', t: 'keep a short diary at the end of each day' }], answer: 'C' },
              { n: 25, text: 'What will the focus of the students’ joint report be?', options: [
                { k: 'A', t: 'outdoor learning' },
                { k: 'B', t: 'the involvement of parents' },
                { k: 'C', t: 'schemes for teaching reading' }], answer: 'A' }
            ]
          },
          {
            type: 'match', from: 26, to: 30, display: 'grid',
            instr: 'What do the students say about each of the following classroom activities?<br>Choose the correct answer, <b>A–E</b>, for each activity. You may choose any letter more than once.',
            boxTitle: 'Comments',
            options: [
              { k: 'A', t: 'Pupils found it too difficult.' },
              { k: 'B', t: 'It took a long time to prepare.' },
              { k: 'C', t: 'It suited older pupils better.' },
              { k: 'D', t: 'It helped pupils to concentrate.' },
              { k: 'E', t: 'It encouraged quieter pupils to take part.' }
            ],
            questions: [
              { n: 26, text: 'role-play', answer: 'E' },
              { n: 27, text: 'science experiments', answer: 'B' },
              { n: 28, text: 'quiz on tablets', answer: 'C' },
              { n: 29, text: 'storytelling circle', answer: 'D' },
              { n: 30, text: 'nature walk', answer: 'B' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two trainee teachers, Sam and Nadia, discussing their recent teaching placements at primary schools. First, you have some time to look at questions 21 to 25.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 25.'],
          ['A', "Hi, Nadia. How did the placement go? You were at the village school, weren't you?"],
          ['B', "Yes, Ashgrove. Everyone assumed I'd picked it because the classes would be small, but actually there were nearly thirty in mine. And it isn't close to home either, it's a forty-minute drive. The real reason was that they teach children of different ages together in the same class. I'd never seen that, and I wanted to find out how teachers manage it."],
          ['A', 'And how do they manage it?'],
          ['B', "Very well, mostly. What about you? You were in the city, weren't you?"],
          ['A', "Yes, a big school with three classes in every year group. I'd expected a lot of technology, and there were some tablets, but not as many as I'd thought. And everyone had warned me about the paperwork, but that was fine. What really struck me was how independent the children were. Even the six-year-olds organised their own materials and moved between activities without being told."],
          ['B', "That's impressive. For me, behaviour wasn't really an issue. The hardest thing was the planning."],
          ['A', "Same here. Marking was quick, but preparing lessons that worked for the strongest and the weakest children in the same class took me hours every evening."],
          ['B', 'Exactly. And in a mixed-age class, the range is even wider.'],
          ['A', 'Did your mentor give you much advice?'],
          ['B', "Lots. I thought she'd tell me to watch more experienced teachers, because I'd only done two observations. But she said the most useful thing would be to write a short diary at the end of every day, noting what worked and what didn't. She said filming your own lessons often just makes trainees self-conscious."],
          ['A', "That's good advice. Now, we need to decide on a focus for our joint report. I was wondering about reading schemes."],
          ['B', "Hmm, both our schools used the same one, so there wouldn't be much to compare. And parental involvement would be hard, because we hardly met any parents. But both schools had outdoor lessons every week."],
          ['A', "True. Ashgrove has its forest school, and mine had the rooftop garden. OK, let's go with outdoor learning."],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 26 to 30.'],
          ['A', 'Let’s go through the activities we each tried, for the report. You did some role-play, didn’t you?'],
          ['B', "Yes, in history. The children acted out a Victorian market. What I loved was that some of the quieter ones, who never put their hands up, joined in happily once they were playing a character."],
          ['A', "My science experiments on floating and sinking went well in the end. But honestly, collecting all the containers and materials took me most of a weekend. I don't think I'd do it very often."],
          ['B', 'And the quiz on the tablets?'],
          ['A', "Mixed. It wasn't that the questions were too hard for them. The ten-year-olds loved it and really got involved, but the youngest ones just kept tapping the screen at random. It suits the top end of the school much more."],
          ['B', "My storytelling circle was a real surprise. I expected the little ones to get fidgety, but they sat and listened for twenty minutes. Their teacher said she'd never seen them focus for that long."],
          ['A', 'And the nature walk?'],
          ['B', "The children had a great time. But organising it was hard work. I had to send permission forms home, find three parent helpers and walk the route in advance. It took far more preparation than the lesson itself."],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 4: lecture on natural dyes ---------- */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'gap', from: 31, to: 40,
            instr: 'Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Colour</th><th>Source</th><th>Notes</th></tr>
                <tr><td>blue</td><td>woad: the dye is found in the [[31]], not the flowers</td><td>later replaced by indigo imported from [[32]]</td></tr>
                <tr><td>red</td><td>madder: the dye comes from the [[33]]</td><td>a [[34]], such as alum, was needed to fix the colour</td></tr>
                <tr><td>crimson</td><td>cochineal: made from tiny [[35]] that live on cactus plants</td><td>brought to Europe from [[36]] in the sixteenth century</td></tr>
                <tr><td>purple</td><td>Tyrian purple: a liquid produced by sea [[37]]</td><td>at times restricted by law to [[38]]</td></tr>
                <tr><td>yellow</td><td>weld: a flowering plant</td><td>colour faded quickly in [[39]]</td></tr>
                <tr><td>mauve</td><td>made from substances in coal [[40]] (1856)</td><td>an early synthetic dye; cheap and did not fade</td></tr>
              </table>`,
            answers: {
              31: ['leaves'], 32: ['india'], 33: ['roots'], 34: ['mordant'], 35: ['insects'],
              36: ['mexico'], 37: ['snails'], 38: ['emperors'], 39: ['sunlight', 'sun'], 40: ['tar']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture about the history of natural dyes. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. Today I'm going to talk about natural dyes, the colours people used for textiles for thousands of years before synthetic dyes were invented. I'll take the main examples one colour at a time."],
          ['A', "Let's begin with blue. In Europe, the main source of blue for many centuries was a plant called woad. Interestingly, the dye isn't in the flowers, which are actually yellow, but in the leaves. These were crushed, rolled into balls and left to ferment, a process that was famous for its terrible smell. From the sixteenth century onwards, woad was gradually replaced by indigo, which gave a stronger blue. Indigo was imported mainly from India, and woad growers protested so fiercely that some governments banned the new dye for a time."],
          ['A', "Next, red. One of the most important red dyes came from madder, a climbing plant. Again, it isn't the part above the ground that matters. The dye comes from the roots, which are dug up after about three years of growth. Now, the colour from madder, like that of many natural dyes, would simply wash out of the cloth unless something was added to fix it. That substance is called a mordant, and it was usually a metal salt such as alum. The mordant binds the dye to the fibres."],
          ['A', "A brighter, more intense red, closer to crimson, came from cochineal. Many people are surprised to learn that this is made from insects, tiny ones that live on certain cactus plants. It takes around seventy thousand of them to produce half a kilo of dye. Spanish traders brought cochineal to Europe from Mexico in the sixteenth century, and it quickly became one of the most valuable goods shipped across the Atlantic."],
          ['A', "Purple was the rarest colour of all. Tyrian purple, named after the ancient city of Tyre, was made from a liquid produced by sea snails. Thousands of snails were needed to dye a single garment, which made it so expensive that, at certain periods in the Roman Empire, wearing it was restricted by law to emperors. Ordinary citizens could be punished for wearing it."],
          ['A', "For yellow, a common source was weld, a flowering plant that grew widely across Europe. It gave a clear, bright colour, but it had one major weakness. It faded quickly in sunlight, so yellow clothes soon looked dull. Dyers sometimes combined weld with woad to produce green."],
          ['A', "Finally, the end of the natural dye era. In 1856, a young chemist in London, William Perkin, was trying to make a medicine to treat malaria. Instead, working with substances obtained from coal tar, he accidentally produced a purple dye, which became known as mauve. It was cheap to make and it didn't fade, and within a few decades synthetic dyes had replaced most natural ones. Perkin's discovery is often said to have started the modern chemical industry."],
          ['N', 'That is the end of Part 4. You now have 30 seconds to check your answers.'],
          ['P', 30],
          ['N', 'That is the end of the Listening test.']
        ]
      }
    ]
  };

  /* ===================================================== READING ACADEMIC */
  const readingAcademic = {
    parts: [
      /* ---------- Passage 1 ---------- */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'Frozen Assets: The Rise and Fall of the Ice Trade',
          html: `
<p>Today, ice is so easy to make that it is hard to imagine it was once a luxury. Yet for most of history, keeping anything cold in warm weather was extremely difficult. Wealthy households in Europe and Asia built ice houses – underground or partly buried stone chambers – in which ice cut from local ponds in winter could be stored, packed in straw, for use in summer. This ice was used mainly to chill drinks and make desserts for the rich, and the idea that ordinary people might buy it, let alone that it could be shipped across oceans, would have seemed absurd.</p>
<p>The man who changed this was Frederic Tudor, the son of a wealthy Boston family. In 1805, Tudor and his brother were reportedly joking at a party about cutting ice from the ponds of New England and selling it in the Caribbean. Tudor took the idea seriously. The following year he bought a ship and sent around 130 tonnes of ice to the island of Martinique. The voyage was a commercial disaster. Although much of the ice survived the journey, the islanders had no way of storing it and little idea of what to do with it, and most of it melted on the dock. Tudor lost a considerable sum of money, and over the next few years his debts grew so large that he was briefly imprisoned.</p>
<p>He persisted, however, and gradually solved the problems that had defeated him. He experimented with different materials for insulating ice in the holds of ships and in warehouses, and found that sawdust, a waste product of New England’s timber mills, was both cheap and highly effective. He built well-insulated ice houses in the ports he supplied, so that ice could be sold over many weeks rather than all at once. And he set about creating demand: his agents gave away cold drinks to bar owners, and showed hospitals how ice could be used to make patients suffering from fevers more comfortable. Once customers had grown used to cold drinks, Tudor reasoned, they would be willing to pay for them.</p>
<p>Harvesting ice in large quantities also required new technology. Ice had traditionally been cut by hand with saws and axes, which produced irregular lumps that were slow to cut and hard to stack. In 1825, Nathaniel Wyeth, one of Tudor’s suppliers, introduced a horse-drawn ice cutter: a sledge fitted with iron blades that cut parallel grooves into the surface of a frozen lake. When the cutter was dragged across the ice in two directions, it marked out a grid of identical blocks, which could then be broken apart and loaded quickly. Because uniform blocks could be packed tightly together, they left less space for warm air, which reduced melting.</p>
<p>The trade’s most remarkable achievement came in 1833, when Tudor sent a cargo of ice to Calcutta in India, a voyage of about four months that crossed the equator twice. More than half of the cargo survived, and the ice sold so well that Calcutta remained one of the trade’s most profitable markets for decades. By the middle of the century, American ice was being shipped to South America, the Middle East and Australia, and Tudor, once imprisoned for debt, had become extremely rich. He came to be known as the ‘Ice King’.</p>
<p>Meanwhile, ice was transforming daily life in the United States itself. In the cities, it was delivered to homes by horse and cart, and households kept food in an ‘icebox’, a wooden cabinet lined with metal that had a compartment for a block of ice. This made it possible to keep meat, milk and vegetables fresh for longer, and it allowed food to be transported over long distances: railway wagons cooled with ice carried meat from the processing plants of Chicago to the cities of the east coast. Breweries also became major customers, since ice allowed beer to be produced through the summer months. In Europe, Norway developed a large export trade of its own, sending ice from its lakes to Britain and other countries.</p>
<p>The trade reached its peak towards the end of the nineteenth century, but by then it was already under threat. Machines that produced ice artificially had been developed from the 1850s onwards, and they steadily became cheaper and more reliable. Natural ice also suffered from a growing problem of quality: as towns and factories grew up around lakes and rivers, the ice harvested from them became increasingly polluted, and doctors warned that it could spread disease. Mild winters, which produced thin ice or none at all, made supplies unpredictable. By the 1930s, electric refrigerators had begun to appear in homes, and the natural ice trade had almost entirely disappeared.</p>
<p>It left a lasting legacy, nevertheless. The trade created the habit of consuming cold food and drink, and the expectation that fresh food would be available all year round, long before the technology existed to make this easy. Some older Americans still refer to the refrigerator as the ‘icebox’, a reminder of a time when the cold had to be cut from a frozen lake.</p>`
        },
        groups: [
          {
            type: 'tf', variant: 'tf', from: 1, to: 7,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 1, text: 'Before the nineteenth century, stored ice was used mainly by wealthy people.', answer: 'TRUE' },
              { n: 2, text: 'Most of Tudor’s first shipment of ice melted during the voyage to Martinique.', answer: 'FALSE' },
              { n: 3, text: 'Tudor’s brother invested money in the first voyage to Martinique.', answer: 'NOT GIVEN' },
              { n: 4, text: 'Tudor spent time in prison because of the money he owed.', answer: 'TRUE' },
              { n: 5, text: 'Wyeth’s ice cutter was powered by steam.', answer: 'FALSE' },
              { n: 6, text: 'The ship that carried ice to Calcutta in 1833 had been specially built for the voyage.', answer: 'NOT GIVEN' },
              { n: 7, text: 'Ice was exported from Norway to Britain.', answer: 'TRUE' }
            ]
          },
          {
            type: 'gap', from: 8, to: 13,
            instr: 'Complete the notes below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>The nineteenth-century ice trade</h4>
                <p><b>Tudor’s solutions</b></p>
                <ul>
                  <li>insulation: used [[8]] from timber mills</li>
                  <li>to create demand: free cold drinks were offered to [[9]]</li>
                  <li>hospitals were shown how ice could help patients with [[10]]</li>
                </ul>
                <p><b>Technology and daily life</b></p>
                <ul>
                  <li>Wyeth’s cutter marked out a [[11]] of identical blocks</li>
                  <li>in homes, food was kept cold in an [[12]]</li>
                </ul>
                <p><b>Decline</b></p>
                <ul>
                  <li>natural ice became more and more [[13]] and could spread disease</li>
                </ul>
              </div>`,
            answers: {
              8: ['sawdust'], 9: ['bar owners'], 10: ['fevers', 'fever'], 11: ['grid'],
              12: ['icebox', 'ice box'], 13: ['polluted']
            }
          }
        ]
      },

      /* ---------- Passage 2 ---------- */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'The Return of the Beaver',
          html: `
<p><b class="para">A</b> Four hundred years ago, the Eurasian beaver had all but vanished from Britain. For centuries it had been hunted for its thick, waterproof fur, for its meat, which the medieval Church allowed to be eaten on fast days because the animal spent so much of its life in water, and above all for castoreum, an oily substance produced by glands near its tail, which was used in perfumes and medicines. By the sixteenth century the beaver was probably extinct in England and Wales, and it disappeared from Scotland not long afterwards. The story was similar across much of Europe: by 1900, only around 1,200 animals survived, in a handful of isolated populations in France, Germany, Norway and parts of Eastern Europe.</p>
<p><b class="para">B</b> The loss mattered because few animals change their environment as dramatically as the beaver. Using their large front teeth, which never stop growing, beavers can fell a tree trunk thicker than a person’s leg in a single night. They use the branches, together with mud and stones, to build dams across streams, creating ponds deep enough for them to swim safely and to hide the underwater entrances of their homes, or lodges, from predators. The trees they cut down are rarely killed; most send up new shoots from the stump, much as they do when foresters cut woodland back deliberately to encourage new growth. Over time, a single family of beavers can turn a narrow, fast-flowing stream into a complex series of pools, channels and wet meadows.</p>
<p><b class="para">C</b> Ecologists increasingly regard these changes as beneficial. Beaver ponds provide habitat for insects, frogs, fish and birds, and the dead wood the animals leave behind supports a rich variety of fungi and invertebrates. There are advantages for people too. In a long-term study of an enclosed site in Devon, in south-west England, researchers found that a series of beaver dams slowed the flow of water after heavy rain, reducing peak flows downstream by around a third – a significant contribution to lowering the risk of flooding in villages further down the valley. The ponds also trapped soil washed off nearby fields, together with some of the fertiliser attached to it, so that the water leaving the site was noticeably cleaner than the water entering it.</p>
<p><b class="para">D</b> Not everyone welcomes the beaver’s return, however. Farmers whose fields lie beside rivers complain that dams can flood valuable grazing land and crops, and block the drainage ditches on which low-lying farms depend. Beavers sometimes fell fruit trees in orchards or trees that have been planted for timber, and in some places the tunnels they dig into riverbanks have caused the banks to collapse, damaging footpaths and farm tracks. For landowners who receive no direct benefit from cleaner water or reduced flooding further downstream, these costs can seem deeply unfair.</p>
<p><b class="para">E</b> Experience from mainland Europe, where beaver numbers have now recovered to more than a million, suggests that most of these problems can be managed. One widely used device is the flow pipe: a long pipe passed through a dam, with its upstream end protected by a cage, so that the level of the water behind the dam can be controlled without removing the dam itself. Individual trees can be protected by wrapping their trunks in wire mesh. In the German state of Bavaria, a network of trained advisers visits landowners to help them deal with difficulties, and where serious damage does occur, the animals may be trapped and moved elsewhere. Simply destroying a dam is seldom effective, as the beavers usually rebuild it within days.</p>
<p><b class="para">F</b> In Britain, the beaver’s return has been partly planned and partly accidental. The first official trial began in 2009 at Knapdale, in western Scotland, where a small number of animals brought from Norway were released and closely monitored. At the same time, a much larger population was establishing itself along the rivers of Tayside, apparently descended from animals that had escaped from private collections. In England, beavers were discovered living wild on the River Otter in Devon in 2008. Nobody knew for certain where they had come from, and the government initially planned to remove them. After local protests, they were allowed to remain, on condition that they were monitored as part of a five-year study. The results were largely positive, and in 2020 the beavers were given permission to stay permanently. Two years later, the beaver became a legally protected species in England, and the debate has now moved on to where, and how quickly, new populations should be released.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 19,
            instr: 'Reading Passage 2 has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Gains for wildlife and for communities downstream' },
              { k: 'ii', t: 'The commercial value of beaver products today' },
              { k: 'iii', t: 'How beavers reshape their surroundings' },
              { k: 'iv', t: 'A return that was partly unplanned' },
              { k: 'v', t: 'Differences between European and American beavers' },
              { k: 'vi', t: 'Hunted almost to extinction' },
              { k: 'vii', t: 'Reasons why some landowners object' },
              { k: 'viii', t: 'The effect of rising temperatures on river wildlife' },
              { k: 'ix', t: 'Lessons from elsewhere on reducing conflict' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'vi' },
              { n: 15, text: 'Paragraph B', answer: 'iii' },
              { n: 16, text: 'Paragraph C', answer: 'i' },
              { n: 17, text: 'Paragraph D', answer: 'vii' },
              { n: 18, text: 'Paragraph E', answer: 'ix' },
              { n: 19, text: 'Paragraph F', answer: 'iv' }
            ]
          },
          {
            type: 'multi', from: 20, to: 21, ns: [20, 21],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> benefits of beaver activity for people does the writer mention?',
            options: [
              { k: 'A', t: 'a reduced risk of flooding' },
              { k: 'B', t: 'improved water quality' },
              { k: 'C', t: 'a supply of timber for local industry' },
              { k: 'D', t: 'protection of riverbanks from erosion' },
              { k: 'E', t: 'larger catches of fish for anglers' }
            ],
            answers: ['A', 'B']
          },
          {
            type: 'match', from: 22, to: 26,
            instr: 'Complete the summary using the list of words, <b>A–H</b>, below.',
            boxTitle: 'List of Words',
            options: [
              { k: 'A', t: 'protection' },
              { k: 'B', t: 'speed' },
              { k: 'C', t: 'study' },
              { k: 'D', t: 'mesh' },
              { k: 'E', t: 'compensation' },
              { k: 'F', t: 'level' },
              { k: 'G', t: 'origin' },
              { k: 'H', t: 'permission' }
            ],
            questions: [
              { n: 22, text: 'In mainland Europe, a pipe may be fitted through a dam so that the (22) …… of the water behind it can be controlled.', answer: 'F' },
              { n: 23, text: 'Valuable trees can be protected by wrapping them in (23) …….', answer: 'D' },
              { n: 24, text: 'In 2008, beavers of uncertain (24) …… were found living on the River Otter in Devon.', answer: 'G' },
              { n: 25, text: 'They were allowed to stay while a five-year (25) …… took place.', answer: 'C' },
              { n: 26, text: 'Since 2022, the beaver has had legal (26) …… in England.', answer: 'A' }
            ]
          }
        ]
      },

      /* ---------- Passage 3 ---------- */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Mend, Don’t End: The Case for Repair',
          html: `
<p>Within living memory, mending was an ordinary part of domestic life. Socks were darned, radios were taken to the repair shop on the high street, and a broken toaster was opened up with a screwdriver before anyone considered replacing it. Today, for many products, that sequence has been reversed. When a phone screen cracks or a washing machine develops a fault, the first question is usually not how to fix it but whether fixing it is worth the trouble. Often the honest answer is no: the repair costs almost as much as a new model, spare parts cannot be obtained, or the device has been sealed so tightly that it cannot be opened without being damaged. I want to argue that this situation is neither natural nor inevitable, and that we would all benefit from reversing it.</p>
<p>It is sometimes claimed that people simply prefer new things, and that the decline of repair reflects consumer choice rather than anything manufacturers have done. There is some truth in this. Rising incomes and falling prices have made replacement affordable, and many of us enjoy owning the latest model. But preferences are shaped by the options available. When a laptop battery is glued in place rather than held by screws, or when a manufacturer refuses to sell replacement parts to independent repairers, the consumer’s ‘choice’ to buy a new machine is hardly a free one. Some devices are even programmed to display warning messages, or to stop working altogether, when an unofficial part is fitted. Surveys in several European countries have found that a large majority of people say they would rather repair a product than replace it, if repair were cheaper and easier.</p>
<p>The environmental argument for repair is, to my mind, the strongest. Most of the environmental damage caused by an electronic device occurs before it ever reaches the shop: in mining the metals it contains, in manufacturing its components and in transporting it around the world. For a typical smartphone, this stage accounts for the great majority of the carbon emissions it will be responsible for during its lifetime. Using a device for longer therefore does far more good than recycling it at the end, valuable as recycling is. Recycling recovers only a fraction of the materials in a device; a repaired phone saves almost all of them.</p>
<p>Manufacturers raise several objections. The first is safety: they argue that untrained people who open devices risk electric shocks or fires, particularly where lithium batteries are involved. This concern is reasonable but greatly exaggerated. Independent repairers have handled such components safely for decades, and clear instructions and proper tools reduce the risk for amateurs too. The second objection is that products which are easy to take apart are bulkier and less attractive. Yet several companies now sell phones and laptops built around replaceable modules, and while these are not the thinnest products on the market, they are far from clumsy. Some customers actually prefer them, precisely because a worn battery or a broken camera can be swapped in a matter of minutes. The third, and least convincing, is that repair by unauthorised people threatens the security of users’ personal data. Banks and hospitals routinely allow outside engineers to service their equipment; it is difficult to see why a phone should be any different.</p>
<p>Governments have begun to respond. Since 2021, rules in the European Union have required the makers of certain household appliances, such as washing machines and refrigerators, to make spare parts available for up to ten years after the last unit of a model is sold, and similar laws have been adopted in a number of US states. It is too early to judge how effective these measures will be. Much depends on whether parts are offered at reasonable prices, and on whether manufacturers look for ways around the rules. Even so, the principle that a product should be repairable has now been accepted in law, and that in itself is a significant change.</p>
<p>Change is also happening at a local level. The first ‘repair café’ was organised in Amsterdam in 2009: a free event at which volunteers with practical skills help members of the public to fix broken items, from lamps and bicycles to clothes and coffee machines. There are now thousands of such gatherings around the world. Their direct impact on waste is small, since the number of items repaired is tiny compared with the quantity thrown away. Their real importance, I believe, lies elsewhere. They show people that many apparently hopeless objects can be saved, and they pass on skills that were in danger of being lost. Many cafés also record the faults they see most often, and this information has been used to put pressure on manufacturers to improve their designs.</p>
<p>None of this means that every object should be kept forever. Some old appliances use so much more electricity than their modern equivalents that replacing them is the greener choice, and nobody would suggest repairing a car whose safety features are decades out of date. Nor should repair become a moral test in which those who buy new goods are made to feel guilty. The aim should be more modest: that when something breaks, repairing it should be a genuine and affordable option rather than an impossibility. Achieving that will require effort from manufacturers, governments and consumers alike – but it would restore a habit that served previous generations very well.</p>`
        },
        groups: [
          {
            type: 'mc', from: 27, to: 31,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 27, text: 'What point does the writer make in the first paragraph?', options: [
                { k: 'A', t: 'People today lack the practical skills needed to repair objects.' },
                { k: 'B', t: 'Repair shops have disappeared from most high streets.' },
                { k: 'C', t: 'Modern products break down more often than older ones.' },
                { k: 'D', t: 'Repair is often no longer a realistic option for consumers.' }], answer: 'D' },
              { n: 28, text: 'In the second paragraph, the writer argues that consumers’ preference for new products', options: [
                { k: 'A', t: 'is the main reason why repair has declined.' },
                { k: 'B', t: 'is influenced by the way products are designed and sold.' },
                { k: 'C', t: 'has grown weaker as incomes have fallen.' },
                { k: 'D', t: 'is stronger in Europe than in other regions.' }], answer: 'B' },
              { n: 29, text: 'Why does the writer consider the environmental argument the strongest?', options: [
                { k: 'A', t: 'Recycling recovers most of the materials in a device.' },
                { k: 'B', t: 'Electronic devices use large amounts of electricity.' },
                { k: 'C', t: 'Most of a device’s environmental impact comes from its production.' },
                { k: 'D', t: 'The cost of transporting goods has risen sharply.' }], answer: 'C' },
              { n: 30, text: 'How does the writer respond to the argument about data security?', options: [
                { k: 'A', t: 'by pointing out that other organisations let outside engineers work on their equipment' },
                { k: 'B', t: 'by admitting that it is the most serious of the manufacturers’ concerns' },
                { k: 'C', t: 'by recommending that users delete their data before a repair' },
                { k: 'D', t: 'by claiming that manufacturers have no evidence of any problems' }], answer: 'A' },
              { n: 31, text: 'What is the writer’s view of repair cafés?', options: [
                { k: 'A', t: 'They have greatly reduced the amount of waste produced.' },
                { k: 'B', t: 'They should receive financial support from governments.' },
                { k: 'C', t: 'Their main value lies in changing attitudes and keeping skills alive.' },
                { k: 'D', t: 'They are used mainly by older members of the public.' }], answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 32, to: 36,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 32, text: 'The safety risks of repairing electronic devices are often overstated.', answer: 'YES' },
              { n: 33, text: 'Independent repairers usually charge less than manufacturers’ own repair services.', answer: 'NOT GIVEN' },
              { n: 34, text: 'The legal acceptance that products should be repairable is an important development.', answer: 'YES' },
              { n: 35, text: 'Repair cafés are more popular in Europe than in North America.', answer: 'NOT GIVEN' },
              { n: 36, text: 'People who buy new products instead of repairing old ones should be made to feel guilty.', answer: 'NO' }
            ]
          },
          {
            type: 'match', from: 37, to: 40,
            instr: 'Complete each sentence with the correct ending, <b>A–G</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'offer free help from volunteers with practical skills.' },
              { k: 'B', t: 'must now be sold with a ten-year guarantee.' },
              { k: 'C', t: 'has been banned in several US states.' },
              { k: 'D', t: 'accounts for most of the carbon emissions linked to it.' },
              { k: 'E', t: 'are usually more expensive to manufacture.' },
              { k: 'F', t: 'recovers only part of the materials it contains.' },
              { k: 'G', t: 'may be better replaced than repaired.' }
            ],
            questions: [
              { n: 37, text: 'The stage before a typical smartphone reaches the shop', answer: 'D' },
              { n: 38, text: 'Recycling a device at the end of its life', answer: 'F' },
              { n: 39, text: 'Repair cafés', answer: 'A' },
              { n: 40, text: 'Some very old appliances', answer: 'G' }
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
<p><b>The graph below shows the percentage of adults in one country who regularly read books in three different formats between 2010 and 2024.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'line',
          title: 'Adults who regularly read books, by format (%)',
          categories: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
          unit: '%',
          series: [
            { name: 'Printed books', values: [68, 66, 63, 61, 58, 57, 55, 54] },
            { name: 'E-books', values: [6, 14, 22, 26, 27, 30, 28, 27] },
            { name: 'Audiobooks', values: [3, 4, 5, 7, 11, 17, 22, 26] }
          ],
          max: 80
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>Some people believe that every young person should be required to spend several months doing unpaid community work, such as helping in hospitals or protecting the environment, before starting university or full-time employment.</b></p>
<p><b>To what extent do you agree or disagree?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 11, listening);
  IELTS.add('reading-academic', 11, readingAcademic);
  IELTS.add('writing-academic', 11, writingAcademic);
})();
