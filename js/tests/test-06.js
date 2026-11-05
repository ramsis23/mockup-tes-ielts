/* Test 6 — konten orisinal, dibuat khusus untuk latihan ini.
   Format audio: ['N', teks] = narator, ['A'|'B'|'C', teks] = pembicara, ['P', detik] = jeda. */
(() => {
  /* ===================================================== LISTENING */
  const listening = {
    parts: [
      /* ---------- Part 1: joining a book club ---------- */
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'gap', from: 1, to: 5,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>WILLOWBROOK READERS’ CIRCLE<br><span>New Member Details</span></h4>
                <table class="form-table">
                  <tr><td>Name:</td><td>Daniel [[1]]</td></tr>
                  <tr><td>Address:</td><td>Flat 3, 27 [[2]] Street</td></tr>
                  <tr><td>Occupation:</td><td>[[3]]</td></tr>
                  <tr><td>Favourite type of book:</td><td>[[4]]</td></tr>
                  <tr><td>Found out about the club:</td><td>from a notice in the [[5]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['Prothero'], 2: ['Mercer'], 3: ['nurse'],
              4: ['biography', 'biographies'], 5: ['library']
            }
          },
          {
            type: 'gap', from: 6, to: 10,
            instr: 'Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Club information</th><th>Details</th></tr>
                <tr><td>Meetings</td><td>on the [[6]] Tuesday of every month</td></tr>
                <tr><td>Venue</td><td>upstairs room of the [[7]] Café, high street</td></tr>
                <tr><td>Start time</td><td>[[8]] pm</td></tr>
                <tr><td>Fee if joining this month</td><td>£ [[9]] per year</td></tr>
                <tr><td>Bring to first meeting</td><td>the novel and a [[10]]</td></tr>
              </table>`,
            answers: {
              6: ['last'], 7: ['Lantern'], 8: ['7.30', '7:30', 'seven thirty'],
              9: ['18', 'eighteen'], 10: ['mug']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a man telephoning the organiser of a local book club. First, you have some time to look at questions 1 to 5.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 1 to 5.'],
          ['A', 'Hello, Linda Marsh speaking.'],
          ['B', "Oh, hello. I got your number from a notice about the Willowbrook Readers' Circle. Are you the right person to speak to about joining?"],
          ['A', "I certainly am. I organise the club. Are you thinking of becoming a member?"],
          ['B', "Yes, I've just moved to the area and I thought it would be a good way to meet people."],
          ['A', "That's exactly why a lot of our members joined. Let me take a few details first, if that's all right. What's your name?"],
          ['B', 'Daniel Prothero.'],
          ['A', 'Could you spell the surname for me?'],
          ['B', "Of course. It's P, R, O, T, H, E, R, O."],
          ['A', 'P, R, O, T, H, E, R, O. Thanks. And your address, Daniel?'],
          ['B', "It's Flat 3, 27 Mercer Street. That's M, E, R, C, E, R."],
          ['A', "Oh, near the old cinema? I know it. And can I ask what you do for a living? We like to know because we sometimes arrange talks, and members' jobs can be useful."],
          ['B', 'Well, I trained as a teacher and did that for a few years, but then I retrained, and now I work as a nurse at the general hospital.'],
          ['A', "Shift work, then. That might matter for the meetings, but we'll come to that. What kind of books do you most enjoy?"],
          ['B', "I used to read a lot of crime fiction, but I've rather gone off it. These days I mostly read biography. I like finding out about real people's lives."],
          ['A', "Then you'll be pleased to hear we're choosing one for next spring. And how did you hear about us? Was it our website?"],
          ['B', 'I did look at the website afterwards, but actually I first saw your notice on the board in the library, when I went in to get my library card.'],
          ['A', "Good, I'm glad those notices still work."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 6 to 10.'],
          ['B', 'So, when does the club meet?'],
          ['A', "We used to meet on the first Tuesday of the month, but that clashed with a quiz night at the community centre, so now it's the last Tuesday of each month."],
          ['B', 'That should be fine. I can usually swap my shifts if I know in advance.'],
          ['A', "We've moved venue, too. We met in the library itself for years, but it closes at six now. So we've moved to the upstairs room of the Lantern Café, on the high street."],
          ['B', 'Lantern, as in a light?'],
          ['A', "That's it. L, A, N, T, E, R, N. The owners are very kind. They let us have the room for nothing as long as we buy drinks."],
          ['B', 'And what time do meetings start?'],
          ['A', 'The café closes to the public at seven, so we used to start straight away, but people found it a rush after work. Now we start at seven thirty and finish at about nine.'],
          ['B', 'Seven thirty. Great. And is there a membership fee?'],
          ['A', "There is. The full annual fee is twenty-four pounds. That covers refreshments and buying a few spare copies of each book for people who can't afford one. But if you join before the end of this month, it's only eighteen pounds."],
          ['B', "Then I'll pay the eighteen now, if that's possible, by bank transfer."],
          ['A', "Lovely. I'll email you the details. Now, for your first meeting you'll obviously need the novel we're discussing, which is ‘The Salt Road’. You don't need to bring any food, because someone always bakes. But there's one thing new members always forget. Please bring a mug. We stopped using paper cups last year because of all the waste."],
          ['B', "A mug. I'll make a note of that."],
          ['A', 'Wonderful. We look forward to meeting you, Daniel.'],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 2: charity fun run ---------- */
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
              { n: 11, text: 'This year the money raised by the fun run will go to', options: [
                { k: 'A', t: 'a children’s hospital.' },
                { k: 'B', t: 'a mountain rescue team.' },
                { k: 'C', t: 'an animal shelter.' }], answer: 'B' },
              { n: 12, text: 'How long is the route this year?', options: [
                { k: 'A', t: '5 kilometres' },
                { k: 'B', t: '8 kilometres' },
                { k: 'C', t: '10 kilometres' }], answer: 'A' },
              { n: 13, text: 'Runners who wear fancy dress will', options: [
                { k: 'A', t: 'receive a free T-shirt.' },
                { k: 'B', t: 'be allowed to start first.' },
                { k: 'C', t: 'be entered in a prize draw.' }], answer: 'C' },
              { n: 14, text: 'The speaker advises participants to', options: [
                { k: 'A', t: 'travel to the park by public transport.' },
                { k: 'B', t: 'register online before the day.' },
                { k: 'C', t: 'bring their own drinking water.' }], answer: 'A' }
            ]
          },
          {
            type: 'match', from: 15, to: 20,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 15–20.
              <table class="form-table" style="text-align:center;max-width:420px;margin-top:8px">
                <tr><td colspan="3"><b>Hollin Park</b> (North ↑)</td></tr>
                <tr><td><b>A</b></td><td>Boathouse</td><td><b>B</b></td></tr>
                <tr><td><b>C</b></td><td>LAKE</td><td><b>D</b></td></tr>
                <tr><td><b>E</b></td><td>Bandstand</td><td><b>F</b></td></tr>
                <tr><td><b>G</b></td><td>Main gate</td><td><b>H</b></td></tr>
                <tr><td colspan="3">Park Road</td></tr>
              </table>`,
            boxTitle: 'Locations on the plan',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 15, text: 'Registration tent', answer: 'H' },
              { n: 16, text: 'Baggage store', answer: 'E' },
              { n: 17, text: 'Start of the children’s race', answer: 'F' },
              { n: 18, text: 'First aid point', answer: 'D' },
              { n: 19, text: 'Water station', answer: 'A' },
              { n: 20, text: 'Finish line', answer: 'B' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a man giving information on local radio about a charity fun run. First, you have some time to look at questions 11 to 14.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 14.'],
          ['A', "Good morning. I'm Greg Saunders, and I'm on the organising committee for the Hollin Park Fun Run, which takes place on Sunday the fourteenth. Thanks for having me on the programme."],
          ['A', "This is our ninth year, and the event has grown enormously. For the last three years the money we raised went to the children's hospital in the city centre, and they've used it to refurbish their play area. This year, though, the committee voted to support the Hollin Valley mountain rescue team. They're all volunteers, and they need a new vehicle, which costs a great deal. The animal shelter on Mill Lane will be our partner next year, so they haven't been forgotten."],
          ['A', "Now, the distance. In the past the route was ten kilometres, and a lot of people told us that was too much for a fun run. So we'd planned an eight-kilometre route this year, going over the old footbridge to the far side of the river. Unfortunately, the footbridge has been closed for repairs, so the whole route now stays inside the park. It's five kilometres, two laps of the lake, and you can walk it if you like."],
          ['A', "We'd love to see plenty of costumes again. Last year we had three runners dressed as a pantomime horse, which was quite something. Everyone who takes part gets a free T-shirt, whatever they're wearing, but if you come in fancy dress, your name goes into a prize draw, and the winner gets a weekend for two at a spa hotel. We did think about letting people in costume start at the front, but for safety reasons everyone starts together."],
          ['A', "A practical point. Online registration actually closed last Friday, but you can still sign up on the day, so that's no problem. Water will be provided, so you needn't carry bottles. What I would ask is that you leave your car at home. There are only forty parking spaces at the park, and they're reserved for disabled visitors. The number twelve bus stops right outside, and extra trains are running to Hollin station that morning."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 15 to 20.'],
          ['A', "Let me explain the layout of the park on the day, so you know where everything is. You'll all arrive through the main gate on Park Road, at the south end of the park."],
          ['A', "As soon as you come through the gate, you'll see the registration tent immediately on your right. That's where you collect your number and your T-shirt. Please don't confuse it with the information kiosk, which is on the left of the gate. The kiosk is just for general questions."],
          ['A', "If you've brought bags or coats, you can leave them at the baggage store. That's a little further into the park, beside the bandstand, on its western side, so on your left as you walk north."],
          ['A', "Families, listen carefully. The children's race starts at ten o'clock, half an hour before the main race. The start for that is on the opposite side of the bandstand from the baggage store, so on the eastern side."],
          ['A', "Now, you might expect the first aid point to be near the gate, and it was last year, but the paramedics asked to be closer to the route. So this year it's on the east side of the lake, about halfway along. They'll be able to see runners coming round on both laps."],
          ['A', "There's one water station on the route. It's in the north-west corner of the park, on the left-hand side of the boathouse as you look at it from the lake. Please put your empty cups in the bins there."],
          ['A', "And finally, the finish line. That's not back at the gate, which surprises some people. It's in the north-east corner, to the right of the boathouse, where there's plenty of room for spectators. The medal tables will be set up just beyond it. So, we hope to see lots of you there on Sunday."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 3: dissertation on noise pollution ---------- */
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'm', B: 'f', C: 'm' },
        groups: [
          {
            type: 'mc', from: 21, to: 23,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 21, text: 'Why did Hannah choose noise pollution as her dissertation topic?', options: [
                { k: 'A', t: 'She lives beside a busy road.' },
                { k: 'B', t: 'A lecture made her interested in it.' },
                { k: 'C', t: 'She hopes to work in urban planning.' }], answer: 'B' },
              { n: 22, text: 'What does Dr Okafor think about Hannah’s original research question?', options: [
                { k: 'A', t: 'It covers too much.' },
                { k: 'B', t: 'It repeats earlier studies.' },
                { k: 'C', t: 'It would be hard to measure.' }], answer: 'A' },
              { n: 23, text: 'What does Ravi offer to lend Hannah?', options: [
                { k: 'A', t: 'a sound level meter' },
                { k: 'B', t: 'software for analysing data' },
                { k: 'C', t: 'a list of useful contacts' }], answer: 'A' }
            ]
          },
          {
            type: 'match', from: 24, to: 28,
            instr: 'What does Hannah say about each of the following measurement sites?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 24–28.',
            boxTitle: 'Comments',
            options: [
              { k: 'A', t: 'It is noisiest early in the morning.' },
              { k: 'B', t: 'Results there may be affected by building work.' },
              { k: 'C', t: 'People living there were very keen to help.' },
              { k: 'D', t: 'It has the lowest noise levels of all the sites.' },
              { k: 'E', t: 'Traffic there has recently been slowed down.' },
              { k: 'F', t: 'It lies under a flight path.' },
              { k: 'G', t: 'It is difficult to take measurements there safely.' }
            ],
            questions: [
              { n: 24, text: 'Station Road', answer: 'G' },
              { n: 25, text: 'the Elm Park estate', answer: 'C' },
              { n: 26, text: 'the ring road junction', answer: 'E' },
              { n: 27, text: 'Castle Square', answer: 'B' },
              { n: 28, text: 'Hilltop village', answer: 'F' }
            ]
          },
          {
            type: 'multi', from: 29, to: 30, ns: [29, 30],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> things does Dr Okafor advise Hannah to include in her methodology chapter?',
            options: [
              { k: 'A', t: 'reasons for her choice of measurement times' },
              { k: 'B', t: 'the limitations of her equipment' },
              { k: 'C', t: 'a history of noise laws' },
              { k: 'D', t: 'photographs of every site' },
              { k: 'E', t: 'full transcripts of interviews' }
            ],
            answers: ['A', 'B']
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear a student called Hannah talking to her tutor, Dr Okafor, about her dissertation on noise pollution. Later, another student, Ravi, joins them. First, you have some time to look at questions 21 to 23.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 23.'],
          ['A', 'Come in, Hannah. So, you want to talk about your dissertation plan. Remind me, why noise pollution?'],
          ['B', "Well, people assume it's because I live on Station Road, which is incredibly busy, but honestly I'd got used to that. What really got me thinking was the guest lecture last term on the health effects of noise, about sleep and blood pressure. I came out of it wanting to know more. I don't actually see myself going into planning, though. I'd rather do research."],
          ['A', "That lecture's inspired a few people. Now, your proposal. You've written that you want to examine the effects of noise on health and well-being across the whole city. My worry is that you're trying to do far too much in ten thousand words. It's not that nobody's done it before, and noise is perfectly measurable. It's simply the scale."],
          ['B', "Yes, I was starting to think that myself. Perhaps I could just look at five sites and compare noise levels with what residents report about their sleep."],
          ['A', "Much more manageable. Ah, here's Ravi. I asked him to drop in, because his project last year used a similar design."],
          ['C', "Hi, Hannah. I hear you need some equipment."],
          ['B', "Hi. Yes, the department's meters are all booked until March."],
          ['C', "Well, I've still got the calibrated sound level meter I bought for my project, and I'm not using it now, so you're welcome to borrow it. I'd offer you my analysis software too, but the licence is only for one user, unfortunately. You can get a free version from the library, though."],
          ['B', "That's so kind. Thank you."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 24 to 30.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 24 to 30.'],
          ['A', 'So, Hannah, which five sites have you chosen?'],
          ['B', "The first is Station Road, obviously. The problem is that the pavement is very narrow there and the lorries come really close, so I'll have to be careful. I may need to stand in a shop doorway to take readings."],
          ['C', 'I had the same issue on the bypass. Wear a high-visibility jacket.'],
          ['B', "Good idea. The second is the Elm Park estate. I went round with leaflets, and I was amazed. Nearly everyone wanted to fill in my questionnaire, and some even offered to keep a sleep diary."],
          ['A', "That's unusual. Most people struggle to get responses."],
          ['B', "Then there's the ring road junction. I assumed it would be loudest in the morning rush hour, but the council reduced the speed limit there to thirty miles an hour last month, so it'll be interesting to see whether that's made a difference."],
          ['A', 'A natural experiment. Good.'],
          ['B', "Fourth is Castle Square, in the old town. It ought to be fairly quiet because it's pedestrianised, but they've just started renovating the library on one side, so my figures might be distorted by the drilling."],
          ['C', 'You could compare your readings with ones taken before the work began. The council might have some.'],
          ['B', "And the last is Hilltop village. I chose it because I thought it would be the quietest place, a sort of control. But actually, it's right underneath the approach to the airport, so planes go over every few minutes. I still want to include it, as aircraft noise is a different kind of problem."],
          ['A', 'Fine. Now, when you write up your methodology chapter, there are a couple of things I want to see. First, you must justify the times of day you chose for your measurements, because that affects everything.'],
          ['B', 'Right. I was going to measure at eight, one and ten at night.'],
          ['A', "Then explain why. And second, be honest about what your equipment can't do. A single meter has limitations, and examiners like to see that you're aware of them. You don't need a long history of noise legislation. A paragraph will do. And photographs can go in an appendix if you want them."],
          ['C', "What about interview transcripts? I put all mine in."],
          ['A', "Not necessary, Ravi. Short quotations are enough, Hannah."],
          ['B', "OK. That's really helpful. Thank you both."],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 4: early Antarctic exploration ---------- */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'gap', from: 31, to: 36,
            instr: 'Complete the table below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Explorers</th><th>Date</th><th>Notes</th></tr>
                <tr><td>James Cook</td><td>1770s</td><td>first to cross the Antarctic [[31]]<br>forced to turn back by [[32]]</td></tr>
                <tr><td>Sealers</td><td>1820s</td><td>hunted fur seals almost to [[33]]</td></tr>
                <tr><td>James Clark Ross</td><td>1841</td><td>discovered an active [[34]], which he named after one of his [[35]]</td></tr>
                <tr><td><i>Belgica</i> expedition</td><td>1898</td><td>first people to survive the [[36]] in the Antarctic</td></tr>
              </table>`,
            answers: {
              31: ['Circle'], 32: ['ice'], 33: ['extinction'], 34: ['volcano'],
              35: ['ships'], 36: ['winter']
            }
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>The race to the South Pole (1911–12)</h4>
                <ul>
                  <li>Amundsen relied on [[37]] to pull the sledges</li>
                  <li>Scott’s motor sledges failed because of the extreme [[38]]</li>
                  <li>Amundsen’s clothing was based on [[39]] designs made of fur</li>
                  <li>Scott’s party suffered a shortage of [[40]] on the return journey</li>
                </ul>
              </div>`,
            answers: { 37: ['dogs'], 38: ['cold'], 39: ['Inuit'], 40: ['fuel'] }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear part of a lecture on the history of Antarctic exploration. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good afternoon. Today I'm going to look at how people first came to know the Antarctic, from the earliest voyages up to the famous race to the South Pole."],
          ['A', "For centuries, European geographers believed there must be a great southern continent to balance the land in the north. The first serious attempt to find it was made by James Cook in the 1770s. On his second voyage, in 1773, Cook became the first person known to have crossed the Antarctic Circle. He never actually saw the continent, though. Again and again his ships were forced to turn back by ice, and he concluded that any land so far south would be of no use to anyone. Some historians have blamed storms for his failure, but Cook's own journals make it clear that ice was the real barrier."],
          ['A', "Ironically, it was Cook's reports of huge numbers of seals in the southern islands that brought the next wave of visitors. In the 1820s, sealing ships from Britain and America arrived in large numbers, and they hunted the fur seals so intensively that, within a few years, the animals had been driven almost to extinction. The sealers were secretive about where they went, because they didn't want competitors to find their hunting grounds, so many of their discoveries were never recorded."],
          ['A', "The next major figure is James Clark Ross, a British naval officer. In 1841 he sailed further south than anyone before him and found a vast wall of floating ice, which we now call the Ross Ice Shelf. Even more remarkably, he discovered an active volcano, pouring out smoke in the middle of this frozen landscape. He named it Mount Erebus, after one of his ships. The other ship, the Terror, gave its name to a second, smaller mountain nearby."],
          ['A', "Towards the end of the nineteenth century, interest returned, and this time scientists led the way. In 1898, a Belgian ship, the Belgica, became trapped in sea ice. Its crew had not planned to stay, but they became the first people to survive the winter in the Antarctic. It was a terrible experience. There were months of darkness, and many of the men developed scurvy. The ship's doctor discovered that eating fresh seal and penguin meat helped them recover."],
          ['A', "This brings us to the best-known chapter of the story, the race to the South Pole between the Norwegian Roald Amundsen and the British officer Robert Falcon Scott. The two men took very different approaches. Amundsen relied on dogs to pull his sledges, and he had learned to drive them expertly. Scott took ponies, and he also brought motor sledges, which were a new and exciting technology at the time. Unfortunately, the motor sledges broke down within days, because their engines simply couldn't cope with the extreme cold. The ponies also struggled and had to be shot."],
          ['A', "Clothing was another difference. Amundsen had spent time in the Arctic, and he based his clothing on Inuit designs made of fur, which were warm but allowed sweat to escape. Scott's men wore mainly wool and windproof cotton, which became heavy when wet."],
          ['A', "Amundsen reached the Pole in December 1911, about five weeks before Scott. Scott's party all died on the return journey. Several factors were involved: the weather was unusually severe, and the men were exhausted and hungry. But one problem stands out. When they reached their supply depots, they found a shortage of fuel, because the containers had leaked in the cold. Without fuel, they couldn't melt snow to drink or cook their food. In the next lecture, we'll look at what science gained from these expeditions."],
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
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'The Long Road: A History of the Marathon',
          html: `
<p>Few sporting events carry as much legend as the marathon. According to the popular story, in 490 BC a Greek messenger ran from the battlefield at Marathon to Athens to announce that the Persian army had been defeated, delivered his message and then collapsed and died. It is a dramatic tale, but historians treat it with caution. Herodotus, the earliest writer to describe the battle, says nothing about a run to Athens. Instead, he describes a messenger named Pheidippides who ran to Sparta, a distance of around 240 kilometres, to ask for military help before the fighting began. The version in which a runner dies after reaching Athens appears only centuries later, in the works of writers such as Plutarch.</p>
<p>Whatever its accuracy, the legend was powerful enough to inspire a modern sporting event. When the first modern Olympic Games were being planned for Athens in 1896, a French philologist, Michel Bréal, proposed a long-distance race to honour the ancient story. The organisers agreed, and the course was set at roughly 40 kilometres, from the town of Marathon to the Olympic stadium. The race was won by Spyridon Louis, a local man who worked as a water carrier. Greek athletes had performed poorly in other events, so his victory caused enormous celebration, and he became a national hero almost overnight.</p>
<p>The Olympic race quickly inspired imitators. A group of spectators from Boston returned home so enthusiastic that they organised their own event the following year. First held in 1897, the Boston Marathon is now the oldest annual marathon in the world. In its early decades, however, it attracted only a few dozen runners, most of them local men.</p>
<p>Curiously, the distance that is now standard was not fixed until the 1908 Olympic Games in London. The course was planned to begin at Windsor Castle, so that the royal children could watch the start, and to finish in front of the royal box in the new stadium at White City. The result was a distance of 26 miles and 385 yards, or 42.195 kilometres. That race is also remembered for the fate of the Italian runner Dorando Pietri, who entered the stadium first but was so exhausted that he fell several times. Officials helped him across the line, and as a result he was disqualified. Nevertheless, his courage won public sympathy, and Queen Alexandra presented him with a special cup. The London distance was used at several later events, and in 1921 it was made official by the international athletics federation.</p>
<p>For most of the twentieth century, women were excluded from the marathon, partly because of a widespread belief that such a long run could damage their health. A few women challenged this. In 1966, Roberta Gibb hid in bushes near the start of the Boston Marathon and joined the race without a number. The following year, Kathrine Switzer registered using her initials, K. V. Switzer, and received an official number. During the race, an official tried to pull her off the course, and photographs of the incident were published around the world. Boston finally allowed women to enter officially in 1972, and a women’s marathon was included in the Olympic Games for the first time in 1984.</p>
<p>The 1970s saw what is often called the running boom. The first New York City Marathon, held in 1970, had 127 starters, who completed several loops of Central Park. Only a handful of spectators watched. In 1976 the route was changed to pass through all five districts of the city, and the event was transformed into a celebration involving thousands of runners and huge crowds. Other cities followed, and today the largest marathons attract more than fifty thousand participants, many of whom raise money for charity.</p>
<p>At the elite level, times have fallen steadily. In 2019, the Kenyan runner Eliud Kipchoge covered the distance in under two hours in Vienna, a feat once thought impossible. However, the event was specially organised, with teams of pacemakers taking turns in front of him, and so his time was not accepted as an official world record. Debate now centres on technology, particularly shoes containing carbon-fibre plates, which some critics argue give runners an unfair advantage. More than two thousand years after the legend was born, the marathon continues to test the limits of human endurance and to provoke argument.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the table below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Date</th><th>Event</th><th>Details</th></tr>
                <tr><td>490 BC</td><td>Battle of Marathon</td><td>Herodotus describes a run from Athens to [[1]]</td></tr>
                <tr><td>1896</td><td>first Olympic marathon</td><td>race proposed by a [[2]]<br>winner’s job: [[3]]</td></tr>
                <tr><td>1908</td><td>London Olympics</td><td>race started at [[4]]</td></tr>
                <tr><td>1921</td><td>—</td><td>London distance made [[5]]</td></tr>
                <tr><td>1970</td><td>first New York City Marathon</td><td>runners went round [[6]] several times</td></tr>
              </table>`,
            answers: {
              1: ['Sparta'], 2: ['philologist', 'French philologist'], 3: ['water carrier'],
              4: ['Windsor Castle'], 5: ['official'], 6: ['Central Park']
            }
          },
          {
            type: 'tf', variant: 'tf', from: 7, to: 13,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 7, text: 'Spyridon Louis became famous throughout Greece after his win.', answer: 'TRUE' },
              { n: 8, text: 'The Boston Marathon was first held before the 1896 Olympic Games.', answer: 'FALSE' },
              { n: 9, text: 'Dorando Pietri kept his first place despite receiving help.', answer: 'FALSE' },
              { n: 10, text: 'Roberta Gibb finished the Boston Marathon in under three hours.', answer: 'NOT GIVEN' },
              { n: 11, text: 'Kathrine Switzer entered the Boston Marathon without revealing her first name.', answer: 'TRUE' },
              { n: 12, text: 'The first women’s Olympic marathon attracted larger crowds than the men’s race.', answer: 'NOT GIVEN' },
              { n: 13, text: 'Kipchoge’s run in Vienna is recognised as the official world record.', answer: 'FALSE' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Power from the Tides',
          html: `
<p><b class="para">A</b> Among the renewable sources of energy, the tides have one great advantage: they are predictable. The wind may drop for days and the sun disappears every night and behind every cloud, but the rise and fall of the sea is governed by the gravitational pull of the moon and, to a lesser extent, the sun. Most coasts experience two high tides and two low tides roughly every twenty-five hours, and the height and timing of these tides can be calculated accurately decades in advance. For engineers who must keep electricity supplies stable, this reliability is extremely attractive.</p>
<p><b class="para">B</b> The idea of using tidal power is far from new. In medieval Europe, tide mills were built along estuaries and inlets. As the tide came in, water flowed into a storage pond through a gate, which closed when the tide turned. Once the sea level outside had fallen, the trapped water was released through a waterwheel, which drove machinery to grind grain. Hundreds of these mills once operated along the coasts of Britain, France and Spain, and a few, such as one at Eling in southern England, are still in working order today.</p>
<p><b class="para">C</b> The modern equivalent of the tide mill is the tidal barrage, a dam built across the mouth of an estuary. Turbines inside the barrage generate electricity as water passes through them. The first large example, on the Rance estuary in Brittany, France, opened in 1966 and has a capacity of 240 megawatts. For almost half a century it was the largest tidal power station in the world, until the Sihwa Lake station in South Korea opened in 2011. Sihwa was relatively inexpensive to build, because the engineers were able to make use of a sea wall that already existed, which had originally been constructed to create farmland and a freshwater lake.</p>
<p><b class="para">D</b> Barrages, however, have serious drawbacks. By changing the natural flow of water, they alter the way sediment is deposited, which can transform the mudflats on which wading birds depend for food. Fish may be injured as they pass through the turbines. At the Rance, the estuary’s ecology changed considerably in the years after construction, although it has since reached a new balance. In Britain, a barrage across the Severn estuary, which has one of the largest tidal ranges in the world, has been proposed many times over the past century. Each time it has been rejected, most recently in 2010, when the government concluded that the cost was too high and the environmental damage too great.</p>
<p><b class="para">E</b> For this reason, attention has shifted to tidal stream technology. Instead of holding water back, tidal stream turbines are placed directly in fast-flowing currents, where they work much like underwater wind turbines. Because water is roughly eight hundred times denser than air, a tidal turbine can be much smaller than a wind turbine and still generate a similar amount of electricity. Crucially, the water continues to flow freely around the turbines, so the effects on sediment and wildlife are thought to be far smaller than those of a barrage. One of the best-known projects is located in the Pentland Firth, the stretch of water between the Scottish mainland and the Orkney Islands, where the currents are among the strongest in Europe.</p>
<p><b class="para">F</b> Despite these advantages, tidal stream power remains expensive. The sea is a hostile environment: salt water corrodes metal, and marine organisms quickly attach themselves to any surface, reducing the efficiency of the blades. Maintenance is a particular problem. Engineers can work on the turbines only when sea conditions are calm enough, which may mean waiting weeks for a suitable opportunity, and specialised vessels must be hired at great expense. As a result, electricity from tidal stream projects still costs several times more than electricity from offshore wind farms, whose costs have fallen sharply as they have been built in ever greater numbers.</p>
<p><b class="para">G</b> Supporters of tidal power argue that these costs will also fall as the industry grows. New designs, including floating turbines that can be towed to port for repair, are already reducing maintenance costs, and other proposals, such as tidal lagoons enclosed by walls built out from the shore, continue to be discussed, although a major lagoon planned for Swansea Bay in Wales was rejected in 2018 on cost grounds. Few experts expect tidal energy to supply more than a small share of the world’s electricity. Its value lies elsewhere. Because it is predictable, it helps operators balance supply and demand on the grid, complementing more variable sources such as wind and solar power. It may also be especially useful for island and coastal communities that currently depend on imported fuel.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 20,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'An idea with a long history' },
              { k: 'ii', t: 'Why the sea is more dependable than the sky' },
              { k: 'iii', t: 'Harm to nature and a scheme that never went ahead' },
              { k: 'iv', t: 'Capturing moving water without blocking it' },
              { k: 'v', t: 'Walls across river mouths' },
              { k: 'vi', t: 'The practical difficulties that keep prices high' },
              { k: 'vii', t: 'A limited but useful role in the future' },
              { k: 'viii', t: 'Government grants for marine engineers' },
              { k: 'ix', t: 'International competition to build the largest turbine' },
              { k: 'x', t: 'The effect of tides on coastal tourism' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'ii' },
              { n: 15, text: 'Paragraph B', answer: 'i' },
              { n: 16, text: 'Paragraph C', answer: 'v' },
              { n: 17, text: 'Paragraph D', answer: 'iii' },
              { n: 18, text: 'Paragraph E', answer: 'iv' },
              { n: 19, text: 'Paragraph F', answer: 'vi' },
              { n: 20, text: 'Paragraph G', answer: 'vii' }
            ]
          },
          {
            type: 'multi', from: 21, to: 22, ns: [21, 22],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> advantages of tidal stream turbines does the writer mention?',
            options: [
              { k: 'A', t: 'They can be smaller than wind turbines with a similar output.' },
              { k: 'B', t: 'They cannot be seen from the shore.' },
              { k: 'C', t: 'They require very little maintenance.' },
              { k: 'D', t: 'They allow water to keep moving naturally.' },
              { k: 'E', t: 'They produce cheaper electricity than offshore wind farms.' }
            ],
            answers: ['A', 'D']
          },
          {
            type: 'match', from: 23, to: 26,
            instr: 'Complete each sentence with the correct ending, <b>A–F</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'because an existing sea wall could be used.' },
              { k: 'B', t: 'because of its expense and its likely effect on the environment.' },
              { k: 'C', t: 'when the sea is calm enough.' },
              { k: 'D', t: 'because it helps to match electricity supply with demand.' },
              { k: 'E', t: 'because it is located in an area with strong winds.' },
              { k: 'F', t: 'because local people campaigned against it.' }
            ],
            questions: [
              { n: 23, text: 'The Sihwa Lake station was fairly cheap to construct', answer: 'A' },
              { n: 24, text: 'The Severn barrage was turned down in 2010', answer: 'B' },
              { n: 25, text: 'Repairs to tidal stream turbines can only be carried out', answer: 'C' },
              { n: 26, text: 'The predictability of tidal energy is valuable', answer: 'D' }
            ]
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'How Children Acquire Language',
          html: `
<p>By the age of four, most children can produce sentences of considerable complexity, ask questions, tell simple stories and follow instructions involving several steps. They achieve this without formal teaching, and often while their parents are paying little deliberate attention to the process. How they do so has been one of the most contested questions in psychology and linguistics for more than half a century.</p>
<p>In the middle of the twentieth century, the dominant explanation came from behaviourism. In his 1957 book <i>Verbal Behavior</i>, the American psychologist B. F. Skinner argued that language is learned in the same way as any other behaviour: through imitation and reinforcement. A child who produces a sound resembling a word is rewarded with attention and praise, and so repeats it; gradually, closer approximations are rewarded until the child speaks like the adults around them. The theory had the appeal of simplicity, and it fitted the general scientific mood of the time.</p>
<p>It was soon challenged. In an influential review of Skinner’s book, the linguist Noam Chomsky argued that reinforcement could not possibly explain what children actually achieve. The language children hear, he claimed, is too limited and too full of errors and unfinished sentences to account for the grammatical knowledge they end up with, an argument that became known as the ‘poverty of the stimulus’. Chomsky proposed instead that human beings are born with a specialised mental capacity for language, which includes knowledge of principles common to all languages. On this view, children do not so much learn grammar as discover which of a limited set of possibilities applies to the language around them.</p>
<p>Some of the most persuasive evidence for this position comes from the mistakes children make. A three-year-old who says ‘I goed to the shop’ or ‘two mouses’ is not copying anything heard from adults. Instead, the child has extracted a rule, that past tenses end in ‘-ed’ and plurals in ‘-s’, and is applying it too widely. Such errors are difficult to explain through imitation alone, and they suggest that children are actively constructing a system rather than passively absorbing examples.</p>
<p>Yet the idea of a ready-made grammar has itself come under sustained attack. Researchers in the usage-based tradition, most prominently Michael Tomasello, argue that children build language gradually from the specific phrases they hear, relying on general cognitive skills rather than a dedicated language faculty. Central to this view is the child’s ability to read the intentions of others: to understand, for instance, that when an adult looks at a ball and says a word, the word probably refers to the ball. Tomasello and his colleagues have shown that even infants under eighteen months will follow an adult’s gaze and work out what the adult is trying to communicate, a skill that seems far less developed in other primates.</p>
<p>Further support for the importance of general learning abilities came from a study published in 1996 by Jenny Saffran and her colleagues. Eight-month-old babies listened to a continuous stream of invented syllables, with no pauses between ‘words’. After only two minutes, the infants were able to distinguish the ‘words’ from other combinations of the same syllables, apparently by tracking how often particular syllables followed one another. This kind of statistical learning, it was argued, might allow children to extract a great deal of structure from what they hear, reducing the need for innate knowledge.</p>
<p>Research on speech sounds has added a social dimension. Patricia Kuhl has shown that newborns can distinguish the sounds of all the world’s languages, but that by around their first birthday they have become specialists, losing much of their sensitivity to contrasts that are absent from the language around them. In one experiment, American infants who spent time with a Mandarin-speaking adult retained the ability to hear Mandarin sounds, whereas infants who watched the same speaker on a video screen showed no such benefit. Live human interaction, it seems, plays a role that recordings cannot replace.</p>
<p>One of the most striking natural experiments took place in Nicaragua. In the late 1970s and 1980s, a new school for deaf children opened in the capital, bringing together young people who had previously communicated with their families using only simple gestures. Within a few years, the children had developed a shared sign language. Researchers including Ann Senghas found that it was the younger pupils, rather than the older ones who had founded the community, who made the language more systematic, adding consistent grammatical features. This appears to support the existence of a critical period, a stage early in life when the mind is especially well equipped to acquire language.</p>
<p>It would be a mistake, however, to present the field as a simple battle between two camps. Few researchers today defend Skinner’s original theory, and most accept that both biological predispositions and experience matter. The real disagreement concerns how much structure is built in and how much is learned. Children, it seems, arrive with powerful learning abilities, but they need rich interaction with other people to put them to use.</p>`
        },
        groups: [
          {
            type: 'match', from: 27, to: 31,
            instr: 'Look at the following statements (Questions 27–31) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–F</b>.<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'B. F. Skinner' },
              { k: 'B', t: 'Noam Chomsky' },
              { k: 'C', t: 'Jenny Saffran' },
              { k: 'D', t: 'Patricia Kuhl' },
              { k: 'E', t: 'Michael Tomasello' },
              { k: 'F', t: 'Ann Senghas' }
            ],
            questions: [
              { n: 27, text: 'The speech children hear is not sufficient to explain the grammar they acquire.', answer: 'B' },
              { n: 28, text: 'Very young infants can work out where words begin and end after a short period of listening.', answer: 'C' },
              { n: 29, text: 'Children learn to speak because their attempts are rewarded.', answer: 'A' },
              { n: 30, text: 'Understanding what other people mean to communicate is central to learning words.', answer: 'E' },
              { n: 31, text: 'Babies learned to recognise foreign speech sounds from a real person but not from a screen.', answer: 'D' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 32, to: 36,
            instr: 'Do the following statements agree with the views of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the views of the writer<br><b>NO</b> if the statement contradicts the views of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 32, text: 'Most adults underestimate how quickly children learn to speak.', answer: 'NOT GIVEN' },
              { n: 33, text: 'Errors such as ‘goed’ cannot easily be explained by imitation.', answer: 'YES' },
              { n: 34, text: 'Skinner’s theory is still accepted by most researchers today.', answer: 'NO' },
              { n: 35, text: 'Researchers should give up the idea that children have any inborn abilities for language.', answer: 'NO' },
              { n: 36, text: 'Children who attend nursery school learn grammar faster than those who stay at home.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>A new language in Nicaragua</h4>
                <p>In the late 1970s and 1980s, deaf children in Nicaragua were brought together when a [[37]] was established for them. Before this, they had used only simple [[38]] to communicate at home. A shared sign language soon emerged, and it was the [[39]] children who gave it regular grammatical features. This evidence suggests that there may be a [[40]] period in which humans are particularly able to learn language.</p>
              </div>`,
            answers: { 37: ['school'], 38: ['gestures'], 39: ['younger'], 40: ['critical'] }
          }
        ]
      }
    ]
  };

  /* ===================================================== READING — GENERAL TRAINING */
  const readingGeneral = {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
        range: [1, 14],
        passage: {
          title: 'Summer Camps and Travel Insurance',
          html: `
<h3>Summer Camps for Young People</h3>
<p><b class="para">A</b> <b>Pinewood Adventure Camp</b><br>Seven nights under canvas in the Black Hill forest for ages 10–15. Activities include rock climbing, kayaking and night-time navigation. All meals are cooked on site. £395 per child. Booking two or more children from the same family? Each will receive 10% off the price.</p>
<p><b class="para">B</b> <b>Code &amp; Create</b><br>A day camp (9 a.m. – 4 p.m.) at Eastgate University for 12–17-year-olds who want to design their own computer games. No experience is needed, and there is no need to bring your own laptop, as all computers and software are supplied. Please bring a packed lunch, as food is not included. £220 per week.</p>
<p><b class="para">C</b> <b>Starlight Drama School</b><br>Two weeks of acting, singing and dance for ages 8–14. Participants make their own costumes and scenery, and the camp ends with a performance at the Royal Theatre, to which tickets are on sale to the general public. Daytime only. £280.</p>
<p><b class="para">D</b> <b>Seaview Sailing Club</b><br>A five-night residential course for ages 11–16. All participants must be able to swim at least 50 metres, and we will ask to see proof of this on arrival. Successful sailors receive a nationally recognised Level 1 certificate on the final day. £450, including all meals and equipment.</p>
<p><b class="para">E</b> <b>Little Explorers Nature Mornings</b><br>Pond dipping, bug hunts and den building in Fernley Woods for children aged 5–9. Sessions run from 9.30 a.m. to 12.30 p.m. Parents and carers are welcome to stay. £15 per session. Just turn up on the day — places do not need to be reserved.</p>
<h3>Travel Insurance: Frequently Asked Questions</h3>
<p><b>Who is covered by my policy?</b><br>Your policy covers the named policyholder. Children under 18 are covered free of charge when travelling with an insured adult.</p>
<p><b>Am I covered for skiing and snowboarding?</b><br>Winter sports are not included in our standard policy. You can add them by purchasing our Winter Sports Extension before you travel.</p>
<p><b>Can I change my mind?</b><br>Yes. If you cancel within 14 days of buying your policy, we will refund your payment in full, provided you have not travelled or made a claim.</p>
<p><b>What should I do if my luggage is lost or stolen?</b><br>You must report the loss to the local police within 24 hours and obtain a written report. Without this, we will be unable to process your claim.</p>
<p><b>I have a medical condition. Can I still buy a policy?</b><br>Yes, but you must tell us about any existing medical conditions when you apply. We may charge an additional premium, depending on the condition.</p>
<p><b>How long can my trip last?</b><br>Our single-trip policy covers one journey of up to 31 days. For longer trips, please see our Long-Stay policy.</p>`
        },
        groups: [
          {
            type: 'match', from: 1, to: 7,
            instr: 'Look at the five summer camps, <b>A–E</b>.<br>For which camp are the following statements true?<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Summer Camps',
            options: [
              { k: 'A', t: 'Pinewood Adventure Camp' },
              { k: 'B', t: 'Code & Create' },
              { k: 'C', t: 'Starlight Drama School' },
              { k: 'D', t: 'Seaview Sailing Club' },
              { k: 'E', t: 'Little Explorers Nature Mornings' }
            ],
            questions: [
              { n: 1, text: 'Participants must prove they have a certain physical skill.', answer: 'D' },
              { n: 2, text: 'There is a reduction for families sending more than one child.', answer: 'A' },
              { n: 3, text: 'It is not necessary to book in advance.', answer: 'E' },
              { n: 4, text: 'It ends with a show that anyone can attend.', answer: 'C' },
              { n: 5, text: 'Participants do not need to bring their own equipment.', answer: 'B' },
              { n: 6, text: 'Participants can gain a qualification.', answer: 'D' },
              { n: 7, text: 'It is suitable for children aged six.', answer: 'E' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 8, to: 14,
            instr: 'Do the following statements agree with the information given in the text?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 8, text: 'Children under 18 travelling with an insured adult do not need to pay for cover.', answer: 'TRUE' },
              { n: 9, text: 'Skiing is included in the standard policy.', answer: 'FALSE' },
              { n: 10, text: 'Customers can get a full refund if they cancel within a month of buying.', answer: 'FALSE' },
              { n: 11, text: 'Lost luggage must be reported to the police within one day.', answer: 'TRUE' },
              { n: 12, text: 'Customers who buy their policy online receive a discount.', answer: 'NOT GIVEN' },
              { n: 13, text: 'People with existing medical conditions are unable to buy a policy.', answer: 'FALSE' },
              { n: 14, text: 'Single-trip cover can be extended while the customer is abroad.', answer: 'NOT GIVEN' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Workplace Information for Staff',
          html: `
<h3>Harland &amp; Pike Ltd — Office Recycling Policy</h3>
<p>Our goal is to reduce the amount of waste the company sends to landfill by half within two years. To achieve this, we need every member of staff to follow the guidelines below.</p>
<p><b>Paper and card</b> — Blue bins are provided under every desk for clean paper and card. Please flatten cardboard boxes before recycling them. Confidential documents must never be placed in blue bins. Instead, put them in the locked security consoles located beside each printer; their contents are collected and shredded by an approved contractor.</p>
<p><b>Plastic bottles and cans</b> — These should be rinsed and placed in the yellow bins in the staff kitchen. Unfortunately, plastic film, crisp packets and coffee cups cannot be recycled by our current supplier and should go in general waste.</p>
<p><b>Batteries and ink cartridges</b> — These must not be put in any bin, as they can cause fires in collection vehicles. Please hand them to reception, where they will be stored safely until collection.</p>
<p><b>Electronic equipment</b> — Old keyboards, monitors, phones and cables belong to the company. If you have equipment that is broken or no longer needed, contact the IT helpdesk, who will arrange for any data to be removed before the items are recycled.</p>
<p><b>Food waste</b> — Small green caddies are available in every kitchen. These are emptied by the cleaning team every evening, and their contents are sent for composting.</p>
<p><b>Recycling champions</b> — We are looking for volunteers to act as recycling champions, with one on each floor. Champions will check that bins are being used correctly and pass on suggestions to the Facilities Manager.</p>

<h3>New Staff Mentoring Scheme</h3>
<p><b class="para">A</b> From next month, Harland &amp; Pike is launching a mentoring scheme designed to help employees develop their careers. Each participant will be paired with a more experienced colleague who can offer advice, share knowledge and help them set goals for their professional development. The scheme is not a substitute for your line manager, who remains responsible for your day-to-day work.</p>
<p><b class="para">B</b> Any permanent employee who has completed their probation period may apply to be mentored. Mentors must have worked for the company for at least two years and must attend a half-day training session before they begin. Applications for both roles should be submitted through the staff portal by the 30th of this month.</p>
<p><b class="para">C</b> Pairs will be matched by the Human Resources team, using the information you provide in a short questionnaire about your interests and goals. In most cases, mentors will be chosen from a different department, as we believe this gives participants a wider view of the business and allows them to speak more freely.</p>
<p><b class="para">D</b> Mentors and mentees are expected to meet for at least one hour a month over a period of six months. Meetings may take place during working hours, and can be held in person or online. It is up to each pair to decide what they discuss.</p>
<p><b class="para">E</b> Occasionally, a partnership may not work as well as hoped. If this happens, either person may contact HR in confidence, and a new match will be arranged without any need to explain the reasons in detail.</p>
<p>Being a mentor is a valuable experience in itself. Mentors’ contribution will be formally recognised in their annual appraisal, and many past mentors in our partner companies have said that the experience gave them a better understanding of how other parts of the business operate.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 20,
            instr: 'Complete the notes below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Recycling at Harland &amp; Pike</h4>
                <ul>
                  <li>Confidential papers: place in the [[15]] next to printers</li>
                  <li>Rinsed bottles and cans: yellow bins in the [[16]]</li>
                  <li>Batteries and ink cartridges: give to [[17]]</li>
                  <li>Unwanted electronic items: get in touch with the [[18]]</li>
                  <li>Food caddies: emptied every [[19]] by cleaners</li>
                  <li>Recycling champions needed: one per [[20]]</li>
                </ul>
              </div>`,
            answers: {
              15: ['security consoles', 'locked consoles', 'consoles'], 16: ['staff kitchen', 'kitchen'],
              17: ['reception'], 18: ['IT helpdesk', 'helpdesk'], 19: ['evening'], 20: ['floor']
            }
          },
          {
            type: 'match', from: 21, to: 25,
            instr: 'The text on the mentoring scheme has five sections, <b>A–E</b>.<br>Choose the correct heading for each section from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Who is eligible to apply' },
              { k: 'ii', t: 'What to do if a pairing is unsuccessful' },
              { k: 'iii', t: 'The purpose of the scheme' },
              { k: 'iv', t: 'How partners are chosen' },
              { k: 'v', t: 'The time commitment required' },
              { k: 'vi', t: 'Payment for mentors' },
              { k: 'vii', t: 'Courses available after the scheme ends' },
              { k: 'viii', t: 'Comments from earlier participants' }
            ],
            questions: [
              { n: 21, text: 'Section A', answer: 'iii' },
              { n: 22, text: 'Section B', answer: 'i' },
              { n: 23, text: 'Section C', answer: 'iv' },
              { n: 24, text: 'Section D', answer: 'v' },
              { n: 25, text: 'Section E', answer: 'ii' }
            ]
          },
          {
            type: 'multi', from: 26, to: 27, ns: [26, 27],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> benefits for mentors are mentioned in the text?',
            options: [
              { k: 'A', t: 'recognition in their yearly review' },
              { k: 'B', t: 'an extra day of annual leave' },
              { k: 'C', t: 'a better understanding of other departments' },
              { k: 'D', t: 'an additional payment' },
              { k: 'E', t: 'priority for promotion' }
            ],
            answers: ['A', 'C']
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'The Umbrella: A Short History',
          html: `
<p><b class="para">A</b> The umbrella is so ordinary today that we rarely give it a second thought, yet its history stretches back thousands of years. The earliest examples were not designed to keep off the rain at all, but to provide shade from the sun. Carvings and paintings from ancient Egypt, Assyria and China show servants holding parasols over kings, nobles and religious figures. In these societies, being shaded was a mark of power and rank, and in some places only royalty were permitted to use a parasol.</p>
<p><b class="para">B</b> It was probably in China that the umbrella was first used as protection against rain. Chinese craftsmen covered frames of bamboo with paper or silk and then coated them with oil or wax to make them waterproof. According to one legend, the first collapsible umbrella was invented more than two thousand years ago, though there is little reliable evidence for the story. Oiled paper umbrellas are still made by hand in parts of China and Japan, where they are now mainly sold as decorative objects.</p>
<p><b class="para">C</b> In ancient Greece and Rome, the parasol was used chiefly by women, and men who carried one were often mocked. Wealthy Roman women had slaves to carry their parasols, and some writers suggest that oiled versions were occasionally used in wet weather. After the fall of the Roman Empire, however, umbrellas largely disappeared from everyday life in Europe for many centuries, surviving mainly as ceremonial objects in the Church.</p>
<p><b class="para">D</b> The umbrella returned to Europe in the sixteenth and seventeenth centuries, first in Italy and France, where it was again considered a fashionable accessory for women. In Britain, the turning point came in the 1750s, when a London traveller and writer, Jonas Hanway, began carrying an umbrella in public. For about thirty years he was laughed at in the street, and the drivers of horse-drawn cabs were particularly hostile, as they feared that if people could keep themselves dry, they would no longer pay for a ride in the rain. By the time Hanway died, however, umbrellas had become widely accepted, and for many years afterwards they were known in England as ‘Hanways’.</p>
<p><b class="para">E</b> Early European umbrellas were heavy and awkward, with ribs made of whalebone or wood and covers of oiled canvas. The most important improvement came in 1852, when an English manufacturer, Samuel Fox, designed a frame with ribs made of steel. Fox’s company produced steel for women’s corsets, and he had the idea of using left-over material to build umbrella frames. The result was lighter and stronger than anything that had gone before, and his basic design is still used in most umbrellas today. Even before this, in 1830, a shop specialising in umbrellas had opened in London, and it is still in business today.</p>
<p><b class="para">F</b> The next major change concerned size. In 1928, Hans Haupt, a German who walked with a stick after being wounded in the First World War, wanted an umbrella that he could carry easily alongside it. He designed a telescopic model that folded down small enough to fit in a pocket or a bag. His design was a commercial success, and folding umbrellas became popular across Europe.</p>
<p><b class="para">G</b> Today, hundreds of millions of umbrellas are sold every year, many of them very cheap. Unfortunately, they are also easily broken and are difficult to recycle, because they combine metal, plastic and fabric that must be separated by hand. As a result, most discarded umbrellas end up in landfill. Some companies have tried to address the problem with sharing schemes, in which users borrow an umbrella from a station and return it later. One such scheme in China, launched in 2017, lost most of its umbrellas within a few weeks, as users simply failed to return them. Designers are now experimenting with frames that can be repaired more easily and covers made from recycled plastic bottles.</p>`
        },
        groups: [
          {
            type: 'match', from: 28, to: 32,
            instr: 'The text has seven paragraphs, <b>A–G</b>.<br>Which paragraph contains the following information?<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Paragraphs',
            options: [
              { k: 'A', t: 'Paragraph A' }, { k: 'B', t: 'Paragraph B' }, { k: 'C', t: 'Paragraph C' },
              { k: 'D', t: 'Paragraph D' }, { k: 'E', t: 'Paragraph E' }, { k: 'F', t: 'Paragraph F' },
              { k: 'G', t: 'Paragraph G' }
            ],
            questions: [
              { n: 28, text: 'a development that made umbrellas lighter', answer: 'E' },
              { n: 29, text: 'an example of a business idea that did not succeed', answer: 'G' },
              { n: 30, text: 'the reason why one group of workers disliked umbrellas', answer: 'D' },
              { n: 31, text: 'a link between umbrellas and social status', answer: 'A' },
              { n: 32, text: 'a description of how umbrellas were made waterproof', answer: 'B' }
            ]
          },
          {
            type: 'mc', from: 33, to: 36,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 33, text: 'In ancient Greece and Rome, parasols were', options: [
                { k: 'A', t: 'reserved for religious leaders.' },
                { k: 'B', t: 'mostly associated with women.' },
                { k: 'C', t: 'used mainly by soldiers.' },
                { k: 'D', t: 'too expensive for most people.' }], answer: 'B' },
              { n: 34, text: 'Jonas Hanway is remembered because he', options: [
                { k: 'A', t: 'opened the first umbrella shop in London.' },
                { k: 'B', t: 'wrote a book about the history of umbrellas.' },
                { k: 'C', t: 'used an umbrella in public despite being ridiculed.' },
                { k: 'D', t: 'persuaded cab drivers to carry umbrellas.' }], answer: 'C' },
              { n: 35, text: 'Samuel Fox’s umbrella frames were made from', options: [
                { k: 'A', t: 'steel left over from another product.' },
                { k: 'B', t: 'a mixture of whalebone and wood.' },
                { k: 'C', t: 'steel imported from Germany.' },
                { k: 'D', t: 'a new type of lightweight wood.' }], answer: 'A' },
              { n: 36, text: 'According to the writer, what is the main problem with modern umbrellas?', options: [
                { k: 'A', t: 'They are too expensive to repair.' },
                { k: 'B', t: 'They are made from harmful chemicals.' },
                { k: 'C', t: 'They are hard to recycle.' },
                { k: 'D', t: 'They are too heavy to carry.' }], answer: 'C' }
            ]
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> from the text for each answer.',
            template: `
              <p class="sent">37. A London umbrella shop that opened in [[37]] is still trading today.</p>
              <p class="sent">38. Hans Haupt’s umbrella could be folded small enough to fit in a [[38]] or a bag.</p>
              <p class="sent">39. Most umbrellas that are thrown away are sent to [[39]].</p>
              <p class="sent">40. A Chinese umbrella-sharing scheme lost most of its umbrellas in a few [[40]].</p>`,
            answers: { 37: ['1830'], 38: ['pocket'], 39: ['landfill'], 40: ['weeks'] }
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
<p><b>The maps below show the town of Millbrook in 2000 and today.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'map',
          title: 'Millbrook: 2000 and today',
          maps: [
            { label: '2000', features: [
              { name: 'River', x: 0, y: 0, w: 100, h: 10, kind: 'water' },
              { name: 'Farmland', x: 2, y: 14, w: 45, h: 34, kind: 'green' },
              { name: 'Railway station', x: 58, y: 16, w: 26, h: 14, kind: 'building' },
              { name: 'Main Street', x: 0, y: 52, w: 100, h: 6, kind: 'road' },
              { name: 'Shops', x: 4, y: 62, w: 24, h: 12, kind: 'building' },
              { name: 'Primary school', x: 54, y: 62, w: 18, h: 14, kind: 'building' },
              { name: 'Factory', x: 4, y: 78, w: 30, h: 18, kind: 'building' },
              { name: 'Park', x: 62, y: 80, w: 36, h: 18, kind: 'green' }
            ] },
            { label: 'Today', features: [
              { name: 'River', x: 0, y: 0, w: 100, h: 10, kind: 'water' },
              { name: 'New bridge', x: 46, y: 0, w: 6, h: 52, kind: 'road' },
              { name: 'Housing estate', x: 2, y: 14, w: 40, h: 34, kind: 'building' },
              { name: 'Railway station', x: 58, y: 16, w: 26, h: 14, kind: 'building' },
              { name: 'Pedestrian zone (Main Street)', x: 0, y: 52, w: 88, h: 6, kind: 'other' },
              { name: 'Ring road', x: 90, y: 12, w: 8, h: 86, kind: 'road' },
              { name: 'Cafés and shops', x: 4, y: 62, w: 24, h: 12, kind: 'building' },
              { name: 'Primary school (extended)', x: 54, y: 62, w: 28, h: 14, kind: 'building' },
              { name: 'Shopping centre', x: 4, y: 78, w: 30, h: 18, kind: 'building' },
              { name: 'Car park', x: 62, y: 80, w: 14, h: 18, kind: 'other' },
              { name: 'Park', x: 76, y: 80, w: 12, h: 18, kind: 'green' }
            ] }
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
<p><b>Young people today spend a large part of their free time on social media. Some people believe this does more harm than good to their development.</b></p>
<p><b>To what extent do you agree or disagree?</b></p>
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
<p>You recently stayed at a hotel and, after you returned home, you realised that you had left something valuable in your room.</p>
<p>Write a letter to the hotel manager. In your letter</p>
<ul>
<li>give details of your stay</li>
<li>describe the item you left behind and say where you think you left it</li>
<li>explain how you would like the item to be returned to you</li>
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
<p><b>In some countries, there is a fixed age at which people must stop working. Others believe that people should be allowed to continue working for as long as they wish.</b></p>
<p><b>Discuss both these views and give your own opinion.</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 6, listening);
  IELTS.add('reading-academic', 6, readingAcademic);
  IELTS.add('reading-general', 6, readingGeneral);
  IELTS.add('writing-academic', 6, writingAcademic);
  IELTS.add('writing-general', 6, writingGeneral);
})();
