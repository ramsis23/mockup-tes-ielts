/* Konten tes 13 (orisinal, dibuat khusus untuk latihan ini). Academic saja.
   Format audio: ['N', teks] = narator, ['A'|'B'|'C', teks] = pembicara, ['P', detik] = jeda. */
(() => {
const T = {
  /* ===================================================== LISTENING */
  listening: {
    parts: [
      /* ---------------------------------------------------------- Part 1 */
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'm', B: 'f' },
        groups: [
          {
            type: 'gap', from: 1, to: 5,
            instr: 'Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>WILLOWBANK NARROWBOATS<br><span>Boats available this summer</span></h4>
                <table class="form-table">
                  <tr><th>Boat</th><th>Sleeps</th><th>Price for one week</th><th>Notes</th></tr>
                  <tr><td>Kingfisher</td><td>4</td><td>£[[1]]</td><td>has a [[2]] on the roof</td></tr>
                  <tr><td>Heron</td><td>[[3]]</td><td>£1,150</td><td>specially adapted for [[4]] users</td></tr>
                  <tr><td>Otter</td><td>8</td><td>£1,480</td><td>has two [[5]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['890', 'eight hundred and ninety', 'eight hundred ninety'],
              2: ['barbecue', 'barbeque', 'bbq'],
              3: ['6', 'six'],
              4: ['wheelchair'],
              5: ['bathrooms']
            }
          },
          {
            type: 'gap', from: 6, to: 10,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Provisional booking: Heron</h4>
                <ul>
                  <li>Customer’s name: Ruth [[6]]</li>
                  <li>Holiday starts: Saturday [[7]] June, at 2 pm</li>
                  <li>Before setting off, all the crew must watch a safety [[8]]</li>
                  <li>Charge for bringing a dog: £[[9]] per week</li>
                  <li>Bedding is provided, but customers must bring their own [[10]]</li>
                </ul>
              </div>`,
            answers: {
              6: ['calloway'],
              7: ['14', '14th', 'fourteenth', 'fourteen'],
              8: ['video', 'film'],
              9: ['35', 'thirty-five', 'thirty five'],
              10: ['towels']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a woman telephoning a company that hires out canal boats for holidays. First, you have some time to look at questions 1 to 5.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 1 to 5.'],
          ['A', 'Good afternoon, Willowbank Narrowboats, Gareth speaking. How can I help?'],
          ['B', "Hello. I'm thinking of hiring a canal boat for a week this summer, and I wondered what you have available."],
          ['A', "Of course. We've got three boats this season, all different sizes. The smallest one is called Kingfisher, and that sleeps four people."],
          ['B', 'And how much is Kingfisher for a week?'],
          ['A', "Well, the price in our brochure is nine hundred and twenty pounds, but we've actually reduced it this year, so it's now eight hundred and ninety pounds for the week."],
          ['B', "That's not bad at all. Is there any outside space?"],
          ['A', "There's a small deck at the front, and up on the roof there's a barbecue fitted, which people love in good weather. There used to be a little table and chairs up there as well, but we took those off for safety reasons."],
          ['B', 'I see. The thing is, there might be five of us, if my brother decides to come. What else have you got?'],
          ['A', "The next size up is Heron. It's a bit longer, and it sleeps six."],
          ['B', 'Six. So that would be fine even if my brother joins us.'],
          ['A', "Exactly. Heron is one thousand one hundred and fifty pounds a week. It was completely rebuilt two years ago, and it's specially adapted for wheelchair users, so it has a lift at the back and wider doorways inside."],
          ['B', "Oh, that's useful to know. And the third boat?"],
          ['A', "That's Otter, our largest. It sleeps eight, and it's one thousand four hundred and eighty pounds. Big groups like it because, although there's only one kitchen, it has two bathrooms, so nobody has to queue in the morning."],
          ['B', "I think Heron sounds about right for us. Could I make a provisional booking?"],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 6 to 10.'],
          ['A', 'Certainly. Can I take your name, please?'],
          ['B', "It's Ruth Calloway. That's C, A, double L, O, W, A, Y."],
          ['A', 'Thank you. And when would you like to start?'],
          ['B', "We were thinking of Saturday the seventh of June, but my daughter has exams that week, so it would have to be the following Saturday, the fourteenth."],
          ['A', "The fourteenth of June. Yes, Heron is free that week. All our holidays start at two o'clock on a Saturday afternoon."],
          ['B', "None of us has ever steered a boat before. Is that a problem?"],
          ['A', "Not at all. Before you set off, all of your crew will need to watch a safety video. It lasts about twenty minutes. Then one of our staff will come with you through the first lock and show you how everything works."],
          ['B', 'Does everyone have to watch it, even the children?'],
          ['A', "Everyone, I'm afraid. It's a condition of our insurance."],
          ['B', 'Fair enough. Another question: can we bring our dog?'],
          ['A', "Yes, dogs are welcome on all our boats. There's an extra charge to cover cleaning. It used to be twenty-five pounds, but it's now thirty-five pounds per dog for the week."],
          ['B', "That's fine. And is bedding provided?"],
          ['A', "Yes, all the bedding is included, and so are tea towels for the kitchen. But you'll need to bring your own towels for the bathroom."],
          ['B', "Right, I'll make a note of that."],
          ['A', "Lovely. I'll email you a booking form this afternoon."],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------------------------------------------------- Part 2 */
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'mc', from: 11, to: 14,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 11, text: 'Most of the money for the rainwater system came from', options: [
                { k: 'A', t: 'the local council.' },
                { k: 'B', t: 'a lottery grant.' },
                { k: 'C', t: 'a building firm.' }], answer: 'B' },
              { n: 12, text: 'What was the main reason for installing the system?', options: [
                { k: 'A', t: 'to reduce the farm’s water bills' },
                { k: 'B', t: 'to teach visiting schoolchildren' },
                { k: 'C', t: 'to protect the farm during dry summers' }], answer: 'A' },
              { n: 13, text: 'Who carried out the building work?', options: [
                { k: 'A', t: 'a professional engineer' },
                { k: 'B', t: 'the farm’s regular volunteers' },
                { k: 'C', t: 'students from a local college' }], answer: 'C' },
              { n: 14, text: 'In its first year, the system has provided', options: [
                { k: 'A', t: 'about a quarter of the farm’s water.' },
                { k: 'B', t: 'about half of the farm’s water.' },
                { k: 'C', t: 'about three quarters of the farm’s water.' }], answer: 'B' }
            ]
          },
          {
            type: 'gap', from: 15, to: 20,
            instr: 'Label the diagram below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            figure: `<svg viewBox="0 0 660 420" role="img" aria-label="Diagram of the rainwater system at Brookside City Farm: barn roof and gutter, downpipe, filter box, three storage tanks with a pump, an overflow pipe and a supply pipe to the animal pens, with numbered labels 15 to 20">
              <text class="fig-title" x="330" y="26" text-anchor="middle">Brookside City Farm: the rainwater system</text>
              <line class="thin" x1="20" y1="80" x2="12" y2="96"/><line class="thin" x1="50" y1="70" x2="42" y2="86"/><line class="thin" x1="80" y1="60" x2="72" y2="76"/><line class="thin" x1="110" y1="62" x2="102" y2="78"/><line class="thin" x1="140" y1="72" x2="132" y2="88"/>
              <line class="thin" x1="10" y1="320" x2="650" y2="320"/>
              <rect class="area" x="20" y="172" width="150" height="148"/>
              <path class="line" d="M10 174 L95 108 L180 174"/>
              <rect class="thin" x="78" y="250" width="34" height="70"/>
              <text class="halo" x="95" y="228" text-anchor="middle">BARN</text>
              <rect class="box" x="172" y="168" width="20" height="10"/>
              <path class="line" d="M183 178 V242 H220 V262"/>
              <rect class="box" x="200" y="262" width="40" height="40"/>
              <path class="line" d="M240 292 H270"/>
              <rect class="area" x="270" y="200" width="55" height="120" rx="6"/>
              <rect class="area" x="340" y="200" width="55" height="120" rx="6"/>
              <rect class="area" x="410" y="200" width="55" height="120" rx="6"/>
              <path class="line" d="M325 306 H340 M395 306 H410"/>
              <text x="367" y="342" text-anchor="middle">storage tanks</text>
              <rect class="solid" x="356" y="184" width="22" height="16"/>
              <text x="367" y="178" text-anchor="middle">pump</text>
              <path class="line" d="M465 214 H500 V361"/>
              <ellipse class="water" cx="470" cy="376" rx="56" ry="16"/>
              <path class="line" d="M378 192 H385 V160 H580 V296"/>
              <line class="thin" x1="520" y1="262" x2="650" y2="262"/><line class="thin" x1="520" y1="284" x2="650" y2="284"/>
              <line class="thin" x1="522" y1="250" x2="522" y2="320"/><line class="thin" x1="648" y1="250" x2="648" y2="320"/>
              <rect class="box" x="550" y="296" width="60" height="24"/>
              <text x="598" y="342" text-anchor="middle">animal pens</text>
              <line class="thin" x1="192" y1="170" x2="226" y2="138"/>
              <line class="thin" x1="220" y1="302" x2="220" y2="352"/>
              <line class="thin" x1="297" y1="200" x2="297" y2="146"/>
              <line class="thin" x1="500" y1="338" x2="508" y2="338"/>
              <line class="thin" x1="378" y1="190" x2="416" y2="106"/>
              <line class="thin" x1="606" y1="320" x2="614" y2="372"/>
              <g text-anchor="middle">
                <rect class="box" x="226" y="114" width="28" height="24"/><text class="lbl" x="240" y="131">15</text>
                <rect class="box" x="206" y="352" width="28" height="24"/><text class="lbl" x="220" y="369">16</text>
                <rect class="box" x="283" y="122" width="28" height="24"/><text class="lbl" x="297" y="139">17</text>
                <rect class="box" x="508" y="326" width="28" height="24"/><text class="lbl" x="522" y="343">18</text>
                <rect class="box" x="402" y="82" width="28" height="24"/><text class="lbl" x="416" y="99">19</text>
                <rect class="box" x="600" y="372" width="28" height="24"/><text class="lbl" x="614" y="389">20</text>
              </g>
            </svg>`,
            template: `
              <p class="sent"><b>15</b> a fine [[15]] stops leaves getting into the gutter</p>
              <p class="sent"><b>16</b> filter box filled with [[16]]</p>
              <p class="sent"><b>17</b> tanks were given to the farm by a local [[17]]</p>
              <p class="sent"><b>18</b> overflow pipe takes extra water to the [[18]]</p>
              <p class="sent"><b>19</b> pump runs on [[19]] power</p>
              <p class="sent"><b>20</b> supply pipe fills a [[20]] for the goats and sheep</p>`,
            answers: {
              15: ['mesh', 'net', 'netting'],
              16: ['gravel'],
              17: ['brewery'],
              18: ['pond'],
              19: ['solar'],
              20: ['trough']
            }
          }
        ],
        audio: [
          ['N', "Part 2. You will hear the manager of a city farm talking to a group of visitors about the farm's new rainwater system. First, you have some time to look at questions 11 to 14."],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 14.'],
          ['A', "Good morning, everyone, and welcome to Brookside City Farm. I'm Jenny Marsh, the farm manager. Before you go off to meet the animals, I'd like to tell you about something we're very proud of: the rainwater system we finished last spring."],
          ['A', "People often assume that a project like this was paid for by the council, but in fact the council turned down our application. A local building firm let us have some pipes and materials at a discount, which helped, and visitors have kindly put money in our collection box. But most of the money, around eighteen thousand pounds, came from a lottery grant, and we couldn't have done it without that."],
          ['A', "So why did we do it? Of course it's good for the environment, and the school groups who visit learn a great deal from it. We've never actually run short of water, even in the driest summers. But to be honest, the main reason was money. Our water bills had nearly doubled in three years, because the animals drink so much and the greenhouse needs watering every day."],
          ['A', "The system was designed by an engineer who lives locally, and he gave his time for free. Our regular volunteers were all busy with the lambs at the time, so the actual building work was done by students on the construction course at Brookside College. It counted towards their qualification, and they did a brilliant job."],
          ['A', "We'd hoped to collect enough rain to meet about three quarters of our needs. In the first year, it's actually been about half, which is still very good, and it's saved us around two thousand pounds."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 15 to 20.'],
          ['A', "Now, if you look at the diagram in your leaflet, I'll explain how the system works. It starts with the roof of the big barn, on the left. When it rains, the water runs down into the gutter along the edge of the roof. Our first problem was leaves from the oak trees, so we've fitted a fine mesh over the whole length of the gutter. That stops leaves and twigs from getting in."],
          ['A', "From the gutter, the water goes down a pipe into a filter box. Inside the box there's a deep layer of gravel. We tried sand at first, but it got blocked very quickly, so gravel works much better."],
          ['A', "The clean water then flows into the storage tanks. There are three of them, each holding about four thousand litres. They aren't new. They came from a brewery just down the road, which was replacing its equipment and gave them to us for nothing."],
          ['A', "In a really wet winter, the tanks fill up completely. When that happens, the extra water goes through an overflow pipe and down into the pond at the bottom of the field, so the ducks get the benefit too."],
          ['A', "To move the water around the farm, we use a pump, which sits on top of the middle tank. Some people expect it to run on electricity from the barn, but in fact it's powered entirely by solar energy."],
          ['A', "Finally, the supply pipe from the pump runs across the yard to the animal pens on the right of the diagram, where it fills a large trough. That's where the goats and sheep drink. We'd like to connect the greenhouse next, but that will have to wait for another grant. Right, that's enough from me. Enjoy your visit."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------------------------------------------------- Part 3 */
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'multi', from: 21, to: 22, ns: [21, 22],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> benefits of oral history do the students agree to mention?',
            options: [
              { k: 'A', t: 'It shows the daily experiences of ordinary people.' },
              { k: 'B', t: 'It is less expensive than archive research.' },
              { k: 'C', t: 'It can be completed quickly.' },
              { k: 'D', t: 'It reveals people’s emotions.' },
              { k: 'E', t: 'People’s memories are very accurate.' }
            ],
            answers: ['A', 'D']
          },
          {
            type: 'multi', from: 23, to: 24, ns: [23, 24],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> problems occurred during the pilot interview?',
            options: [
              { k: 'A', t: 'There was too much background noise.' },
              { k: 'B', t: 'The interviewee seemed nervous.' },
              { k: 'C', t: 'The recorder stopped working.' },
              { k: 'D', t: 'The interview went on too long.' },
              { k: 'E', t: 'The interviewee talked about unrelated subjects.' }
            ],
            answers: ['A', 'E']
          },
          {
            type: 'gap', from: 25, to: 30,
            instr: 'Complete the flow-chart below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Oral history project: procedure</h4>
                <p>Find interviewees through the residents’ [[25]]</p>
                <p style="text-align:center">&#8595;</p>
                <p>Send each person a list of [[26]] before the interview</p>
                <p style="text-align:center">&#8595;</p>
                <p>On the day, the interviewee signs a consent [[27]]</p>
                <p style="text-align:center">&#8595;</p>
                <p>Record an interview lasting about one [[28]]</p>
                <p style="text-align:center">&#8595;</p>
                <p>Write a detailed [[29]] of each interview</p>
                <p style="text-align:center">&#8595;</p>
                <p>Give the recordings to the town [[30]]</p>
              </div>`,
            answers: {
              25: ['newsletter'], 26: ['topics'], 27: ['form'], 28: ['hour'],
              29: ['summary'], 30: ['museum']
            }
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two history students, Fiona and Marcus, discussing an oral history project about a biscuit factory that has closed down. First, you have some time to look at questions 21 to 24.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 24.'],
          ['B', "So, Fiona, we need to write the section explaining why interviews are worth doing, rather than just using the archive."],
          ['A', "Well, the obvious point is that the official records of the factory only tell us about production figures and decisions made by the managers. They hardly mention what an ordinary worker's day was actually like. Interviews fill that gap."],
          ['B', "Agreed. Some books say oral history is cheaper than archive work, but I'm not sure that's true once you count all the travel and the time spent listening back."],
          ['A', "No, let's not claim that. And it certainly isn't quicker."],
          ['B', "Definitely not. What about the reliability of people's memories?"],
          ['A', "That's a weakness, not a benefit. People often mix up dates. But there's another advantage I'd like to include, and that's feelings. When Mrs Dobson described the day the factory closed, you could hear how upset she still was. No document gives you that."],
          ['B', "Yes, the emotional side. Let's put those two down, then. Now, the pilot interview with Mr Hughes. What went wrong?"],
          ['A', "Well, the recorder was fine. I was worried the battery would run out, but it lasted. The problem was that we did it in the café at the community centre, and the coffee machine was so loud that some parts are really hard to hear."],
          ['B', "True. Next time we'll go to people's homes. He wasn't nervous at all, though, was he? He was very relaxed."],
          ['A', "Too relaxed, maybe. He kept telling us about his time in the army, which had nothing to do with the factory."],
          ['B', "We'll need to get better at bringing people back to the subject. At least we finished on time."],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 25 to 30.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 25 to 30.'],
          ['B', "Let's agree on the procedure. First, finding people to interview. We thought about putting posters up in the library."],
          ['A', "I tried that last term, and nobody replied. I think the best way is the residents' newsletter. Almost every household in the town gets it, and lots of former factory workers read it."],
          ['B', "The newsletter, then. Next, once someone agrees, we send them a list of topics before the interview, so they can start remembering. But not the actual questions, because then the answers sound rehearsed."],
          ['A', "Right, just the topics. Then on the day, before we switch the recorder on, they have to sign a consent form, which says we're allowed to keep and use the recording."],
          ['B', 'And how long should each interview be? Two hours was far too tiring for Mr Hughes.'],
          ['A', "Let's aim for one hour. If people have more to say, we can always arrange a second visit."],
          ['B', 'Then after each interview, do we have to write out a full transcript?'],
          ['A', "That would take forever. Professor Grant said a detailed summary, with the times of the main points, is enough for a project like this."],
          ['B', "OK, a summary. And finally, where do the recordings go? I'd assumed they'd go to the university library."],
          ['A', "Actually, the town museum has agreed to keep them, and they'll make them available to the public. That seems more appropriate, since it's the town's history."],
          ['B', "Perfect. I'll start drafting the advert tonight."],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------------------------------------------------------- Part 4 */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'm' },
        groups: [
          {
            type: 'mc', from: 31, to: 33,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 31, text: 'What did research published in 2016 show about many lichens?', options: [
                { k: 'A', t: 'They contain a third partner organism.' },
                { k: 'B', t: 'They are closely related to mosses.' },
                { k: 'C', t: 'They can survive without any light.' }], answer: 'A' },
              { n: 32, text: 'According to the lecturer, geologists use lichens to', options: [
                { k: 'A', t: 'identify different types of rock.' },
                { k: 'B', t: 'estimate how long a rock surface has been exposed.' },
                { k: 'C', t: 'measure how quickly rocks are being worn away.' }], answer: 'B' },
              { n: 33, text: 'In the far north, lichens are especially important because they', options: [
                { k: 'A', t: 'are the main winter food of reindeer.' },
                { k: 'B', t: 'prevent soil from being washed away.' },
                { k: 'C', t: 'provide shelter for insects.' }], answer: 'A' }
            ]
          },
          {
            type: 'gap', from: 34, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Lichens</h4>
                <p><b>Lichens and air quality</b></p>
                <ul>
                  <li>have no roots, so take in water and nutrients directly from the [[34]]</li>
                  <li>very sensitive to sulphur dioxide, produced mainly by burning [[35]]</li>
                  <li>[[36]] species, which look like tiny shrubs, are the first to disappear</li>
                  <li>today the main problem is nitrogen from traffic and [[37]]</li>
                  <li>volunteers, including school pupils, record the lichens growing on the [[38]] of trees</li>
                </ul>
                <p><b>Other uses</b></p>
                <ul>
                  <li>one species, oak moss, is used in making [[39]], as it holds a scent for a long time</li>
                  <li>some contain substances that kill [[40]], so may be useful in medicine</li>
                </ul>
              </div>`,
            answers: {
              34: ['air', 'atmosphere'], 35: ['coal'], 36: ['bushy'], 37: ['farming', 'agriculture'],
              38: ['twigs'], 39: ['perfume', 'perfumes'], 40: ['bacteria']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear part of a lecture about lichens. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. Today we're looking at lichens, those crusty, leafy or hairy growths you see on old walls, gravestones and tree trunks. A lichen isn't a single organism. It's a partnership between a fungus and an alga, a tiny green plant-like organism that makes food from sunlight. The fungus provides the structure and protection, and the alga provides the food. For over a century, that was the whole story. But in 2016, researchers discovered that many common lichens also contain a yeast, a third partner that nobody had noticed before. So even a familiar organism can still surprise us."],
          ['A', "Lichens grow extremely slowly, often only a millimetre or two a year. That makes them useful to geologists. If you measure the size of the largest lichens on a rock surface, you can estimate how long that surface has been exposed, for example since a glacier retreated or a rockfall took place. Lichens do slowly break down rock and help to form soil, but it's their role as a kind of clock that interests geologists most."],
          ['A', "They're also important for wildlife. In the far north, a lichen often called reindeer moss is the main food that reindeer eat in winter, when they dig through the snow to find it. Some birds use lichens to build their nests as well, but for reindeer, survival really depends on them."],
          ['A', "Now, the main focus of today's lecture is lichens and air quality. Lichens have no roots. Instead, they take in water and nutrients directly from the air, through their whole surface. This means that they also absorb whatever pollution the air contains, and they have no way of getting rid of it."],
          ['A', "They're particularly sensitive to sulphur dioxide, which is produced mainly when coal is burned. In the nineteenth century, scientists noticed that lichens had almost completely disappeared from the centres of industrial cities. Not all types are affected equally. The bushy kinds, which look like tiny shrubs, are the most sensitive and are the first to disappear. The flat, crusty kinds that stick tightly to the surface are much more tolerant."],
          ['A', "Since coal burning declined, sulphur levels have fallen, and many lichens have returned to our cities. Today the main problem is nitrogen. Some of it comes from traffic, but in many areas most of it comes from farming, particularly from fertilisers and animal waste."],
          ['A', "Because lichens respond so clearly, they're used in citizen science projects. Volunteers, including school pupils, record the lichens growing on the twigs of trees. Twigs are better than trunks, because they're younger, so the lichens on them reflect the air quality of the last few years."],
          ['A', "Finally, lichens have other uses. In some northern countries they were even ground into flour in times of famine, though that's rare today. Commercially, the most important is a species known as oak moss, which has been used for centuries in making perfume, because it holds a scent for a very long time. And some lichens contain chemicals that kill bacteria, so researchers are investigating whether they could be developed into new medicines."],
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
      /* ---------------------------------------------------------- Passage 1 */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'Catching the Wind',
          html: `
<p>Anyone who walks through the old quarter of Yazd, a desert city in central Iran, soon notices that the skyline is dominated not by domes or minarets but by tall, rectangular towers rising above the flat mud roofs. These are <i>badgirs</i>, or windcatchers, and there are so many of them that Yazd is sometimes called the city of windcatchers. For hundreds of years, they allowed people to live in reasonable comfort in a place where summer temperatures regularly climb above 40°C, long before electric air conditioning was invented.</p>
<p>Nobody knows exactly where the idea first appeared. Paintings in ancient Egyptian tombs show houses with slanting vents on their roofs, designed to direct the cool north wind into the rooms below, and similar structures were built across the Middle East and North Africa. It was on the dry plateau of Iran, however, that the windcatcher reached its most elaborate form. The most famous example stands in the Dowlat Abad garden in Yazd. At around 33 metres, it is thought to be the tallest windcatcher in the world.</p>
<p>A traditional windcatcher is built from mud brick, the same material as the houses beneath it, and is usually plastered to protect it from the weather. Near the top of the tower, on one or more sides, there are tall, narrow openings. These are fitted with wooden shutters, which residents close in winter to keep out cold winds and the dust storms that sweep across the plateau. Inside, the tower is a hollow shaft that runs down into the building, but it is not a single open space. Thin brick partitions divide it vertically into several separate channels, so that air can move downwards in one channel while it moves upwards in another. The partitions also strengthen the tower, which must withstand strong winds.</p>
<p>The principle is straightforward. When the wind blows against the tower, it enters the openings that face it and is forced down a channel into the rooms below. At the same time, the wind passing around the tower creates an area of low pressure on the leeward side – the side facing away from the wind – and this draws warm, stale air up the other channels and out through the openings on that side. The result is a continuous flow of air through the house. Remarkably, a windcatcher continues to work even on still days. The sun heats the walls of the tower and the air inside it. Because warm air is lighter than cool air, it rises and escapes from the top, pulling air from the rooms below up after it. This process, known as the stack effect, keeps the air moving even when there is no breeze at all.</p>
<p>Moving air feels cooler on the skin, but the most sophisticated windcatchers did more than simply create a draught. In many houses, wet clay jars were placed beneath the shaft, so that the incoming air passed over their damp surfaces. As some of the water evaporated, it absorbed heat from the air, lowering its temperature. Wealthier households went further. Their windcatchers connected with a basement room containing a pool, and in some cases the air was also drawn over a <i>qanat</i>, an underground channel that carried water from distant mountains to the city. Air cooled in this way could be several degrees cooler than the air outside, and families often retreated to these basement rooms during the hottest hours of the afternoon.</p>
<p>During the twentieth century, as electricity reached even remote towns, many windcatchers were neglected. Electric air conditioners were cheaper to install and could be controlled at the touch of a button, and new buildings were constructed without towers. Many old windcatchers fell into disrepair, and some collapsed. In recent decades, however, a programme of restoration has begun in Yazd, encouraged partly by the growth of tourism.</p>
<p>Architects elsewhere have also begun to look again at the windcatcher, seeing it as a way of cooling buildings without the high energy costs and carbon emissions of air conditioning. Modern versions are usually made from lightweight materials such as aluminium or plastic rather than brick, and some are fitted with small fans powered by solar panels to keep the air moving on calm nights. Such devices have been installed on schools, offices and shopping centres in the Gulf and in Europe. The traditional design is not without drawbacks: open shafts can let in dust, insects and even birds, and evaporative cooling works far less well in humid climates, where the air already contains a great deal of moisture. Nevertheless, the towers of Yazd are a reminder that some of the most effective solutions to modern problems were developed centuries ago.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 5,
            instr: 'Label the diagram below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            figure: `<svg viewBox="0 0 640 440" role="img" aria-label="Cross-section of a traditional windcatcher house: tower with openings and an inner shaft, ground-floor room, basement with a pool, and an underground water channel, with numbered labels 1 to 5">
              <text class="fig-title" x="320" y="24" text-anchor="middle">Cross-section of a windcatcher house</text>
              <line class="thin" x1="10" y1="300" x2="630" y2="300"/>
              <rect class="area" x="230" y="44" width="80" height="156"/>
              <rect class="box" x="230" y="58" width="10" height="44"/>
              <rect class="box" x="300" y="58" width="10" height="44"/>
              <line class="thin" x1="230" y1="70" x2="240" y2="70"/><line class="thin" x1="230" y1="80" x2="240" y2="80"/><line class="thin" x1="230" y1="90" x2="240" y2="90"/>
              <line class="thin" x1="300" y1="70" x2="310" y2="70"/><line class="thin" x1="300" y1="80" x2="310" y2="80"/><line class="thin" x1="300" y1="90" x2="310" y2="90"/>
              <line class="line" x1="270" y1="50" x2="270" y2="200"/>
              <rect class="area" x="140" y="200" width="320" height="100"/>
              <rect class="box" x="246" y="200" width="48" height="6"/>
              <text class="halo" x="390" y="262" text-anchor="middle">ground-floor room</text>
              <rect class="area" x="190" y="300" width="240" height="72"/>
              <text class="halo" x="380" y="326" text-anchor="middle">basement</text>
              <rect class="water" x="250" y="348" width="110" height="16"/>
              <text x="305" y="342" text-anchor="middle">pool</text>
              <ellipse class="thin" cx="244" cy="285" rx="8" ry="13"/><ellipse class="thin" cx="264" cy="285" rx="8" ry="13"/>
              <rect class="thin" x="398" y="372" width="12" height="28"/>
              <rect class="water" x="30" y="400" width="580" height="16"/>
              <path class="line" d="M60 80 H214"/><path class="solid" d="M226 80 l-13 -7 v14 z"/>
              <text class="halo" x="120" y="70" text-anchor="middle">wind</text>
              <path class="line" d="M250 108 V180"/><path class="solid" d="M250 192 l-7 -13 h14 z"/>
              <path class="line" d="M290 186 V80 H380"/><path class="solid" d="M290 120 l-7 13 h14 z"/><path class="solid" d="M392 80 l-13 -7 v14 z"/>
              <path class="thin" d="M250 206 V262 M290 250 V206"/>
              <line class="thin" x1="226" y1="58" x2="198" y2="52"/>
              <line class="thin" x1="272" y1="150" x2="338" y2="150"/>
              <line class="thin" x1="396" y1="80" x2="420" y2="62"/>
              <line class="thin" x1="236" y1="285" x2="178" y2="265"/>
              <line class="thin" x1="560" y1="400" x2="560" y2="372"/>
              <g text-anchor="middle">
                <rect class="box" x="170" y="40" width="28" height="24"/><text class="lbl" x="184" y="57">1</text>
                <rect class="box" x="338" y="138" width="28" height="24"/><text class="lbl" x="352" y="155">2</text>
                <rect class="box" x="420" y="44" width="28" height="24"/><text class="lbl" x="434" y="61">3</text>
                <rect class="box" x="150" y="252" width="28" height="24"/><text class="lbl" x="164" y="269">4</text>
                <rect class="box" x="546" y="348" width="28" height="24"/><text class="lbl" x="560" y="365">5</text>
              </g>
            </svg>`,
            template: `
              <p class="sent"><b>1</b> openings fitted with [[1]], which are closed in winter</p>
              <p class="sent"><b>2</b> thin [[2]] divide the shaft into separate channels</p>
              <p class="sent"><b>3</b> warm air leaves through the openings on the [[3]] side</p>
              <p class="sent"><b>4</b> wet [[4]] cool the incoming air as water evaporates</p>
              <p class="sent"><b>5</b> a [[5]] carries water from the mountains</p>`,
            answers: {
              1: ['wooden shutters', 'shutters'],
              2: ['brick partitions', 'partitions'],
              3: ['leeward'],
              4: ['clay jars', 'jars'],
              5: ['qanat', 'underground channel']
            }
          },
          {
            type: 'gap', from: 6, to: 9,
            instr: 'Answer the questions below.<br>Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer.',
            template: `
              <p class="sent"><b>6</b> What name is sometimes given to the city of Yazd? [[6]]</p>
              <p class="sent"><b>7</b> What are traditional windcatchers built from? [[7]]</p>
              <p class="sent"><b>8</b> What is the name of the process that keeps air moving through a windcatcher on still days? [[8]]</p>
              <p class="sent"><b>9</b> In what kind of climate does evaporative cooling work less effectively? [[9]]</p>`,
            answers: {
              6: ['city of windcatchers', 'the city of windcatchers'],
              7: ['mud brick', 'mud bricks', 'mud-brick'],
              8: ['stack effect', 'the stack effect'],
              9: ['humid climates', 'humid', 'humid climate']
            }
          },
          {
            type: 'tf', variant: 'tf', from: 10, to: 13,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 10, text: 'The windcatcher in the Dowlat Abad garden is believed to be the tallest of its kind.', answer: 'TRUE' },
              { n: 11, text: 'A windcatcher stops working completely when there is no wind.', answer: 'FALSE' },
              { n: 12, text: 'Most of the windcatchers in Yazd have now been restored.', answer: 'NOT GIVEN' },
              { n: 13, text: 'Modern windcatchers are generally made from the same materials as traditional ones.', answer: 'FALSE' }
            ]
          }
        ]
      },

      /* ---------------------------------------------------------- Passage 2 */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Saving Seeds',
          html: `
<p><b class="para">A</b> Deep inside a mountain on the Norwegian island of Spitsbergen, around 1,300 kilometres from the North Pole, a tunnel runs more than a hundred metres into the frozen rock. At its end lie three vaults which together can hold up to four and a half million samples of seeds. The Svalbard Global Seed Vault, which opened in 2008, was built in this remote location for a reason: the surrounding permafrost keeps the rock naturally cold, so that even if the electricity supply failed, the seeds would stay frozen for many years. Inside, the vaults are kept at −18°C. The facility is owned by the Norwegian government and managed with international partners, but it works rather like a bank’s safe-deposit box. The seeds remain the property of the institutions that send them, vault staff never open the sealed boxes, and responsibility for testing and renewing the seeds lies with the depositors.</p>
<p><b class="para">B</b> Why go to such lengths? The answer lies in the narrowing base of modern agriculture. For thousands of years, farmers saved seed from their best plants and grew a vast number of local varieties, each suited to particular soils and climates. In the twentieth century, these were largely replaced by a small number of high-yielding commercial varieties. The new crops fed far more people, but they also created a hidden risk. When a whole region grows a single variety, one disease can destroy the entire harvest. Ireland learned this lesson in the 1840s, when much of the population depended on one type of potato and a disease called blight caused a famine in which around a million people died. Old and wild varieties often carry genes for resistance to drought, heat or disease, and plant breeders need access to them in order to develop the crops of the future.</p>
<p><b class="para">C</b> The idea of collecting seeds systematically owes much to the Russian botanist Nikolai Vavilov. In the 1920s and 1930s he led expeditions across five continents, gathering tens of thousands of samples and developing the theory that crops show the greatest variety in the regions where they were first domesticated. His collection, housed in an institute in Leningrad, became the largest in the world. Its survival is one of the most moving stories in the history of science. During the long siege of the city in the Second World War, scientists at the institute guarded the seeds against both soldiers and starving citizens, and several of them died of hunger rather than eat the collection they were protecting.</p>
<p><b class="para">D</b> Modern seed banks rely on a simple but carefully controlled process. When a sample arrives, the seeds are cleaned and then dried until only a small percentage of their weight is water. They are sealed in airtight foil packets and stored at low temperatures. Under these conditions, the seeds of many crops, such as wheat and barley, can remain alive for decades, and some for centuries. Even so, no seed lasts for ever. Gene banks must test their samples at regular intervals by attempting to germinate a few of the seeds, and when the success rate falls, they must grow the plants again to produce a fresh supply.</p>
<p><b class="para">E</b> Not every plant fits this system. The seeds of a surprising number of species, including cocoa, mango, avocado and many tropical trees, die if they are dried. These must be conserved in other ways: as living plants in field collections, which are expensive to maintain and vulnerable to storms and disease, or as small pieces of tissue frozen in liquid nitrogen at around −196°C, a technique known as cryopreservation. For such species, the safety net is considerably weaker than it is for the major grain crops.</p>
<p><b class="para">F</b> For several years after the vault opened, critics questioned whether a store in the Arctic would ever actually be needed. The answer came sooner than expected. The International Center for Agricultural Research in the Dry Areas had kept an important collection of wheat, barley and lentil seeds near Aleppo in Syria. When war made the area unsafe, its staff could no longer maintain the collection, and in 2015 the centre asked for the return of some of the duplicate samples it had sent to Svalbard. The seeds were grown at new facilities in Lebanon and Morocco, and fresh samples were later sent back to the vault. It was the first time that any seeds had been withdrawn.</p>
<p><b class="para">G</b> Some scientists warn, however, that seed banks alone cannot protect the diversity of crops. A seed frozen in a vault is, in effect, a snapshot of a single moment in time. Meanwhile, in farmers’ fields, crops continue to evolve alongside changing climates, new pests and new diseases, as farmers select the plants that cope best with local conditions. Frozen seeds cannot adapt in this way. For this reason, many experts argue that conservation in vaults must be matched by conservation on farms, where traditional varieties are kept in use. Community seed banks, run by farmers themselves in countries such as Nepal, Ethiopia and Guatemala, store local seeds and lend them to neighbours, who repay the loan with seed from their own harvest. In the long term, the security of the world’s food supply may depend as much on these small local efforts as on the vault in the Arctic rock.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 20,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'An emergency that showed the value of a back-up' },
              { k: 'ii', t: 'The high cost of running a modern seed bank' },
              { k: 'iii', t: 'The dangers of relying on too few varieties' },
              { k: 'iv', t: 'Why stored seeds need to be supported by living farms' },
              { k: 'v', t: 'A secure store protected by its natural surroundings' },
              { k: 'vi', t: 'Disputes between nations over who owns seeds' },
              { k: 'vii', t: 'How seeds are kept alive in storage' },
              { k: 'viii', t: 'A pioneering collector and the sacrifice of his colleagues' },
              { k: 'ix', t: 'The growing popularity of traditional vegetables' },
              { k: 'x', t: 'Species that require a different approach' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'v' },
              { n: 15, text: 'Paragraph B', answer: 'iii' },
              { n: 16, text: 'Paragraph C', answer: 'viii' },
              { n: 17, text: 'Paragraph D', answer: 'vii' },
              { n: 18, text: 'Paragraph E', answer: 'x' },
              { n: 19, text: 'Paragraph F', answer: 'i' },
              { n: 20, text: 'Paragraph G', answer: 'iv' }
            ]
          },
          {
            type: 'multi', from: 21, to: 23, ns: [21, 22, 23],
            instr: 'Choose <b>THREE</b> letters, <b>A–G</b>.',
            text: 'Which <b>THREE</b> of the following statements about the Svalbard Global Seed Vault are given in the passage?',
            options: [
              { k: 'A', t: 'The rock around it would keep the seeds frozen if the power failed.' },
              { k: 'B', t: 'It holds samples of every plant species in the world.' },
              { k: 'C', t: 'Its staff regularly test the seeds to check that they are still alive.' },
              { k: 'D', t: 'The seeds stored there belong to the organisations that sent them.' },
              { k: 'E', t: 'It was designed with the help of Russian scientists.' },
              { k: 'F', t: 'Seeds withdrawn from it have been grown in two different countries.' },
              { k: 'G', t: 'It is open to visitors during the summer months.' }
            ],
            answers: ['A', 'D', 'F']
          },
          {
            type: 'match', from: 24, to: 26,
            instr: 'Complete the summary using the list of words, <b>A–H</b>, below.',
            boxTitle: 'List of Words',
            options: [
              { k: 'A', t: 'die' },
              { k: 'B', t: 'germinate' },
              { k: 'C', t: 'liquid nitrogen' },
              { k: 'D', t: 'adapt' },
              { k: 'E', t: 'ice' },
              { k: 'F', t: 'spread' },
              { k: 'G', t: 'foil' },
              { k: 'H', t: 'soil' }
            ],
            questions: [
              { n: 24, text: 'The seeds of plants such as cocoa and mango (24) …… if they are dried, so they cannot be stored in the usual way.', answer: 'A' },
              { n: 25, text: 'Instead, they are kept as living plants or as pieces of tissue frozen in (25) …….', answer: 'C' },
              { n: 26, text: 'A further weakness of seed banks is that frozen seeds cannot (26) …… to new conditions, unlike crops growing in farmers’ fields.', answer: 'D' }
            ]
          }
        ]
      },

      /* ---------------------------------------------------------- Passage 3 */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Why Do We Yawn?',
          html: `
<p>Few behaviours are as universal, or as poorly understood, as the yawn. Humans begin yawning before birth: ultrasound scans have recorded unborn babies yawning in the womb from around eleven weeks after conception. Almost all vertebrates yawn, from chimpanzees and dogs to snakes and fish, which suggests that the behaviour is extremely ancient. A typical human yawn lasts about six seconds, and the average adult yawns several times a day. Yet despite its familiarity, there is still no agreement about what yawning is actually for. Over the past few decades, four main explanations have been proposed, and each has its supporters and its critics.</p>
<p>The oldest and most widely held explanation is that yawning increases the supply of oxygen to the body. According to this view, when we are tired or bored our breathing becomes shallow, carbon dioxide builds up in the blood, and a deep yawn restores the balance. For much of the twentieth century this idea was taught in medical schools as established fact, and it remains the explanation that most people would give today. It was put to the test in the 1980s by the American psychologist Robert Provine, who asked volunteers to breathe air containing either a higher level of carbon dioxide than normal or pure oxygen. If the theory were correct, the first group should have yawned more and the second less. In fact, neither change made any difference to how often the volunteers yawned. Physical exercise, which greatly increases the body’s need for oxygen, does not trigger yawning either. There is, frankly, little reason to keep the oxygen hypothesis alive, although it survives stubbornly in popular belief.</p>
<p>A more recent proposal, developed by the psychologist Andrew Gallup and his colleagues, is that yawning helps to cool the brain. The brain works best within a narrow range of temperatures and, like a computer, it generates heat as it works. A yawn involves a powerful stretching of the jaw, which increases the flow of blood through the skull, while the deep breath draws in air that is usually cooler than the body. Together, these effects may carry heat away from the brain. Supporters point to studies showing that people are more likely to yawn when the outdoor temperature is moderate than when it is close to or above body temperature: when the air is hotter than the body, a yawn could not cool anything. In one experiment, volunteers who held a cold pack against their foreheads while watching videos of other people yawning yawned far less than those who held a warm pack or nothing at all. A comparison of about twenty species of mammals, from mice to elephants, also found that animals with larger and more complex brains tend to produce longer yawns, which is what the theory would predict. Critics respond that the temperature changes involved are tiny, and that the theory has difficulty explaining why yawning is so strongly linked to particular times of day. The debate remains far from settled.</p>
<p>A third explanation, sometimes called the state-change hypothesis, focuses on transitions between different levels of alertness. People tend to yawn shortly after waking and shortly before going to sleep, but also at moments when they need to become more alert: athletes before a race, musicians before a performance and, in one often-quoted observation, parachutists before their first jump. According to this view, the yawn, together with the stretching that often accompanies it, acts as a kind of reset, briefly increasing heart rate and muscle tone and helping the body shift from one state to another. This would explain why yawning is so closely tied to the daily cycle of sleeping and waking, a pattern that the brain-cooling theory struggles to account for. It is less clear, however, why such a change should require so dramatic an opening of the mouth.</p>
<p>The fourth explanation concerns not the individual but the group. Yawning is famously contagious. Provine found that simply reading about yawning was enough to make many people yawn – as some readers of this article may by now have discovered. According to the social hypothesis, contagious yawning evolved as a way of coordinating the behaviour of a group, signalling to others that it is time to rest or to change activity. Some researchers have linked it to empathy, the ability to share the feelings of others. Studies have found that people are more likely to catch yawns from relatives and friends than from strangers, and that children rarely catch yawns until they are about four or five years old, roughly the age at which they begin to understand what other people are thinking. Dogs, which have lived alongside humans for thousands of years, have been reported to yawn in response to their owners’ yawns, although the results of such studies are mixed.</p>
<p>Evidence of this kind has led some commentators to suggest that a weak response to other people’s yawns might indicate difficulties with empathy. This seems to me a step too far. Contagious yawning varies enormously between individuals and is affected by tiredness, age and even whether a person happens to be looking at the face in front of them. To treat it as a test of anyone’s emotional abilities would be a mistake.</p>
<p>Perhaps the most likely answer is that the yawn does not have a single function. A behaviour that has existed for hundreds of millions of years may well have taken on new roles over time: what began as a physical response, perhaps connected with alertness or temperature, may later have been adopted by social animals as a form of communication. If so, the competing theories may each be partly right. What is certain is that the humble yawn, so often dismissed as a mere sign of tiredness, still has a great deal to teach us about the workings of the body and the brain.</p>`
        },
        groups: [
          {
            type: 'match', from: 27, to: 31, display: 'grid',
            instr: 'Look at the following statements (Questions 27–31) and the list of explanations below.<br>Match each statement with the correct explanation, <b>A–D</b>.<br>Click on the correct space in the table.<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'List of Explanations',
            options: [
              { k: 'A', t: 'the brain-cooling hypothesis' },
              { k: 'B', t: 'the social hypothesis' },
              { k: 'C', t: 'the oxygen hypothesis' },
              { k: 'D', t: 'the state-change hypothesis' }
            ],
            questions: [
              { n: 27, text: 'It was tested by changing the air that volunteers breathed.', answer: 'C' },
              { n: 28, text: 'It is supported by evidence about yawning at different outdoor temperatures.', answer: 'A' },
              { n: 29, text: 'It can account for the connection between yawning and the daily pattern of sleep.', answer: 'D' },
              { n: 30, text: 'It is consistent with the finding that yawns pass more easily between people who know each other.', answer: 'B' },
              { n: 31, text: 'It was for a long time presented to trainee doctors as a proven fact.', answer: 'C' }
            ]
          },
          {
            type: 'match', from: 32, to: 36,
            instr: 'Complete each sentence with the correct ending, <b>A–H</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'can be enough to cause a yawn.' },
              { k: 'B', t: 'greatly increases the need to yawn.' },
              { k: 'C', t: 'had no effect on how often people yawned.' },
              { k: 'D', t: 'are more likely to yawn in hot weather.' },
              { k: 'E', t: 'tend to produce longer yawns.' },
              { k: 'F', t: 'yawn more often in the evening than in the morning.' },
              { k: 'G', t: 'reduced the number of yawns caused by watching others.' },
              { k: 'H', t: 'rarely catch yawns from other people.' }
            ],
            questions: [
              { n: 32, text: 'In Provine’s experiment, breathing pure oxygen', answer: 'C' },
              { n: 33, text: 'Holding a cold pack against the forehead', answer: 'G' },
              { n: 34, text: 'Mammals with larger and more complex brains', answer: 'E' },
              { n: 35, text: 'Simply reading about yawning', answer: 'A' },
              { n: 36, text: 'Children younger than about four', answer: 'H' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 37, to: 40,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 37, text: 'The oxygen hypothesis should no longer be taken seriously.', answer: 'YES' },
              { n: 38, text: 'People who work at night yawn more often than people who work during the day.', answer: 'NOT GIVEN' },
              { n: 39, text: 'A person’s response to other people’s yawns can be used to measure their empathy.', answer: 'NO' },
              { n: 40, text: 'More than one of the explanations of yawning may be correct.', answer: 'YES' }
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
<p><b>The maps below show the harbour area of Porthkellan, a small coastal town, in 1995 and today.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'map',
          title: 'Porthkellan harbour: 1995 and today',
          maps: [
            { label: '1995', features: [
              { name: 'Farmland', x: 4, y: 6, w: 50, h: 34, kind: 'green' },
              { name: 'Warehouses', x: 60, y: 22, w: 30, h: 18, kind: 'building' },
              { name: 'Coast Road', x: 0, y: 44, w: 100, h: 6, kind: 'road' },
              { name: 'Fish market', x: 6, y: 56, w: 26, h: 14, kind: 'building' },
              { name: 'Car park', x: 38, y: 56, w: 16, h: 14, kind: 'other' },
              { name: 'Boatyard', x: 66, y: 56, w: 28, h: 16, kind: 'building' },
              { name: 'Sea', x: 0, y: 76, w: 100, h: 24, kind: 'water' },
              { name: 'Harbour wall', x: 44, y: 76, w: 5, h: 14, kind: 'other' },
              { name: 'Fishing boats', x: 12, y: 82, w: 26, h: 10, kind: 'other' }
            ] },
            { label: 'Today', features: [
              { name: 'Housing estate', x: 4, y: 6, w: 34, h: 34, kind: 'building' },
              { name: 'Park', x: 40, y: 6, w: 14, h: 34, kind: 'green' },
              { name: 'Apartments', x: 60, y: 22, w: 30, h: 18, kind: 'building' },
              { name: 'Coast Road', x: 0, y: 44, w: 100, h: 6, kind: 'road' },
              { name: 'Seafood restaurants', x: 6, y: 56, w: 26, h: 14, kind: 'building' },
              { name: 'Hotel', x: 66, y: 56, w: 28, h: 16, kind: 'building' },
              { name: 'Promenade', x: 0, y: 72, w: 100, h: 4, kind: 'other' },
              { name: 'Sea', x: 0, y: 76, w: 100, h: 24, kind: 'water' },
              { name: 'Harbour wall', x: 44, y: 76, w: 5, h: 22, kind: 'other' },
              { name: 'Marina', x: 54, y: 82, w: 40, h: 12, kind: 'other' }
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
<p><b>In many countries, fewer young people are choosing to train for skilled manual trades such as plumbing, carpentry and electrical work.</b></p>
<p><b>What are the causes of this, and what measures could be taken to encourage more young people into these careers?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  }
};
IELTS.add('listening', 13, T.listening);
IELTS.add('reading-academic', 13, T.reading);
IELTS.add('writing-academic', 13, T.writing);
})();
