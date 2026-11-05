/* Test 8 — konten orisinal, dibuat khusus untuk latihan ini.
   Format audio: ['N', teks] = narator, ['A'|'B', teks] = pembicara, ['P', detik] = jeda. */
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
            type: 'gap', from: 1, to: 5,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>OLD TOWN FOOTSTEPS<br><span>Walking Tour Booking Form</span></h4>
                <table class="form-table">
                  <tr><td>Tour chosen:</td><td>the [[1]] Tour</td></tr>
                  <tr><td>Date:</td><td>Saturday [[2]] June</td></tr>
                  <tr><td>Number of people:</td><td>[[3]] adults (no children)</td></tr>
                  <tr><td>Name:</td><td>Julia [[4]]</td></tr>
                  <tr><td>Mobile number:</td><td>07845 [[5]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['harbour', 'harbor'], 2: ['14', '14th', 'fourteenth'], 3: ['5', 'five'],
              4: ['wrexley'], 5: ['331972', '331 972']
            }
          },
          {
            type: 'gap', from: 6, to: 10,
            instr: 'Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Tour details</th><th>Information</th></tr>
                <tr><td>Meeting point</td><td>outside the [[6]] on Bridge Street</td></tr>
                <tr><td>Start time</td><td>[[7]] a.m.</td></tr>
                <tr><td>Price per adult (group discount)</td><td>£ [[8]]</td></tr>
                <tr><td>What to bring</td><td>comfortable shoes and an [[9]]</td></tr>
                <tr><td>Included at the end</td><td>free entry to the [[10]]</td></tr>
              </table>`,
            answers: {
              6: ['library'], 7: ['10.15', '10:15', 'ten fifteen'], 8: ['12.50', '12.5'],
              9: ['umbrella'], 10: ['lighthouse']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a woman telephoning a tour company to book a walking tour of the city. First, you have some time to look at questions 1 to 5.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 1 to 5.'],
          ['A', 'Good afternoon, Old Town Footsteps, Ben speaking. How can I help?'],
          ['B', "Hi there. I'd like to book one of your walking tours for a small group. My cousins are coming to visit next month."],
          ['A', "Lovely. Do you know which tour you're interested in? At the moment we run four: the Castle Tour, the Market Tour, the Harbour Tour and the Ghost Walk in the evenings."],
          ['B', 'Well, I was hoping for the Castle Tour, because my cousins really love history.'],
          ['A', "I'm afraid the Castle Tour isn't running in June, while they repair the castle walls. Sorry about that."],
          ['B', "Oh, that's a shame. What about the Harbour Tour, then? A friend of mine said it was excellent, and there's quite a lot of history on that one too."],
          ['A', "Yes, it's one of our most popular. It covers the old fishing quarter and the shipyards. So shall I put you down for the Harbour Tour?"],
          ['B', 'Yes, please.'],
          ['A', 'And which date were you thinking of?'],
          ['B', 'It would have to be a Saturday. Is Saturday the seventh possible?'],
          ['A', "Let me have a look. No, I'm afraid the seventh is already full. But we do have space on Saturday the fourteenth."],
          ['B', "The fourteenth is fine. They arrive on the twelfth, so that works well."],
          ['A', 'Great. And how many people will there be?'],
          ['B', "There'll be four adults... oh, wait, my neighbour said she'd like to come along as well, so that makes five adults. No children."],
          ['A', 'Five adults, no problem. Could I take your name, please?'],
          ['B', "It's Julia Wrexley."],
          ['A', 'Could you spell your surname for me?'],
          ['B', 'Of course. W, R, E, X, L, E, Y.'],
          ['A', 'W, R, E, X, L, E, Y. Thank you. And a contact number?'],
          ['B', "My mobile's best. It's oh seven eight four five, three three one, nine seven two."],
          ['A', "So that's oh seven eight four five, three three one, nine seven two."],
          ['B', "That's right."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 6 to 10.'],
          ['A', "Now let me give you the details. The tour used to start at the clock tower by the railway station, but because of the building work there, we now meet outside the library on Bridge Street."],
          ['B', 'Outside the library. OK, I know where that is.'],
          ['A', "Most of our tours begin at half past nine, but the Harbour Tour starts a little later, at ten fifteen, so that you arrive at the fish market when it's quieter."],
          ['B', "Ten fifteen. That's actually better for us, to be honest."],
          ['A', "Now, the price. Normally it's fourteen pounds per adult, but for groups of five or more we give a discount, so it'll be twelve pounds fifty each."],
          ['B', 'Oh good, so my neighbour coming along actually saves us all money!'],
          ['A', 'Exactly. You can pay on the day, either in cash or by card.'],
          ['B', 'Is there anything we should bring with us?'],
          ['A', "Comfortable shoes, definitely, because a lot of the streets are cobbled. We provide bottled water, so you don't need to worry about that. But the weather by the sea can change very quickly, so I'd recommend everyone brings an umbrella."],
          ['B', "Right, I'll tell them. And what happens at the end of the tour?"],
          ['A', "It lasts about two and a half hours, and your ticket includes free entry to the lighthouse, where you can climb right to the top. Some people expect a free visit to the maritime museum, but that's only included on the Market Tour."],
          ['B', 'The lighthouse sounds wonderful. Thanks so much for your help.'],
          ['A', "My pleasure. I'll send you a confirmation by text this afternoon."],
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
              { n: 11, text: 'Why has this afternoon’s programme been changed?', options: [
                { k: 'A', t: 'Bad weather is expected.' },
                { k: 'B', t: 'A band’s flight has been delayed.' },
                { k: 'C', t: 'The main stage needs repairs.' }], answer: 'B' },
              { n: 12, text: 'What are festival-goers told about their wristbands?', options: [
                { k: 'A', t: 'They must be shown when buying drinks.' },
                { k: 'B', t: 'They can be replaced free of charge.' },
                { k: 'C', t: 'They should be worn at all times.' }], answer: 'C' },
              { n: 13, text: 'The last shuttle bus to the town will now leave at', options: [
                { k: 'A', t: '11.30 p.m.' },
                { k: 'B', t: '12.30 a.m.' },
                { k: 'C', t: '1.30 a.m.' }], answer: 'B' },
              { n: 14, text: 'People who return used cups to a bar will receive', options: [
                { k: 'A', t: 'a cash refund.' },
                { k: 'B', t: 'a token for a free drink.' },
                { k: 'C', t: 'an entry in a prize draw.' }], answer: 'B' }
            ]
          },
          {
            type: 'match', from: 15, to: 20,
            instr: `Label the map below.<br>Write the correct letter, <b>A–H</b>, next to Questions 15–20.
              <table class="form-table" style="text-align:center;margin-top:8px">
                <tr><td colspan="4"><b>Greenhill Valley Music Festival – Site Map</b> (north at top)</td></tr>
                <tr><td><b>MAIN STAGE</b></td><td><b>A</b></td><td><b>B</b></td><td><b>LAKE</b></td></tr>
                <tr><td><b>C</b></td><td><b>INFORMATION POINT</b><br>(you are here)</td><td><b>D</b></td><td><b>E</b></td></tr>
                <tr><td><b>F</b></td><td><b>G</b></td><td><b>MAIN ENTRANCE</b></td><td><b>H</b></td></tr>
              </table>`,
            boxTitle: 'Map locations',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' }, { k: 'D', t: 'D' },
              { k: 'E', t: 'E' }, { k: 'F', t: 'F' }, { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 15, text: 'First aid tent', answer: 'A' },
              { n: 16, text: 'Lost property', answer: 'G' },
              { n: 17, text: 'Water refill station', answer: 'E' },
              { n: 18, text: 'Acoustic stage', answer: 'F' },
              { n: 19, text: 'Food court', answer: 'B' },
              { n: 20, text: 'Phone charging tent', answer: 'D' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear an announcement made to people arriving at a music festival. First, you have some time to look at questions 11 to 14.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 14.'],
          ['A', "Good morning, everyone, and welcome to the Greenhill Valley Music Festival. I'm Tom, from the festival information team, and I've got a few announcements for you before the music gets going."],
          ['A', "First of all, there's been a change to this afternoon's programme. Some of you may have heard a rumour that the weather would cause problems, but in fact the forecast is dry and sunny all weekend. The change is because the band Silver Lanterns have had their flight from Lisbon delayed, so they'll now be playing at eight o'clock this evening instead of four. Their place this afternoon will be taken by local group The Harbour Lights."],
          ['A', "Next, your wristbands. You'll need these to get onto the festival site and into the campsite. You don't have to show them at the bars or food stalls, but please keep them on at all times, day and night, because our security staff carry out random checks. If you lose yours, a replacement will cost fifteen pounds, so do look after it."],
          ['A', "Quite a few people have asked about the shuttle bus into Ashford town. The printed programme says the last bus leaves the site at half past eleven. However, because of the late finish on the main stage, we've added an extra service, so the last bus will now leave at half past twelve. Buses go from the coach park every thirty minutes."],
          ['A', "And finally, recycling. All drinks at the festival are served in reusable cups. Last year we gave you a cash refund for every cup you brought back, but this year we're doing something different. For every five cups you return to a bar, you'll get a token for a free soft drink. There is also a prize draw, but that's for people who bring full bags of litter to the recycling tent."],
          ['N', 'Before you hear the rest of the announcement, you have some time to look at questions 15 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 15 to 20.'],
          ['A', "Now let me help you find your way around. If you look at the map in your programme, you'll see the information point, where I'm standing now, right in the centre of the site. The main entrance, where you all came in, is just below us and slightly to the right."],
          ['A', "Let's start with the first aid tent. It's directly above the information point on the map, so just north of here, right next to the main stage. If you can see the stage, you can find first aid."],
          ['A', "If you lose anything, go to lost property. That's immediately to the left of the main entrance, in the row along the bottom of the map. Please don't confuse it with the box office, which is on the other side of the entrance, in the bottom right-hand corner."],
          ['A', "It's going to be hot, so please keep drinking water. Last year the water refill station was beside the main stage, but it's been moved to the eastern side of the site. You'll find it just below the lake, against the fence on the far right."],
          ['A', "Some of you will be here for the acoustic stage, which has quieter performances. To keep it well away from the noise of the main stage, it's been put in the bottom left-hand corner of the site, the south-west corner."],
          ['A', "Hungry? The food court is along the top of the site, between the first aid tent and the lake. There are about thirty stalls, so there's something for everyone."],
          ['A', "And finally, if your phone is running out of battery, the phone charging tent is immediately to the right of the information point, directly above the main entrance. It's free, but it does get busy in the evenings. Enjoy the festival, everyone!"],
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
            type: 'mc', from: 21, to: 23,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 21, text: 'What was the aim of the students’ experiment?', options: [
                { k: 'A', t: 'to find out whether wall colour affects mood' },
                { k: 'B', t: 'to find out whether lighting affects concentration' },
                { k: 'C', t: 'to find out whether colour preferences change with age' }], answer: 'A' },
              { n: 22, text: 'What problem was there with the participants?', options: [
                { k: 'A', t: 'Many of them were the students’ friends.' },
                { k: 'B', t: 'Most of them studied psychology.' },
                { k: 'C', t: 'Too few of them volunteered.' }], answer: 'B' },
              { n: 23, text: 'What did the students change after the pilot study?', options: [
                { k: 'A', t: 'the length of the questionnaire' },
                { k: 'B', t: 'the temperature of the rooms' },
                { k: 'C', t: 'the time spent in each room' }], answer: 'C' }
            ]
          },
          {
            type: 'multi', from: 24, to: 25, ns: [24, 25],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> limitations will the students mention in their report?',
            options: [
              { k: 'A', t: 'the small number of participants' },
              { k: 'B', t: 'differences in the size of the rooms' },
              { k: 'C', t: 'participants knowing the purpose of the study' },
              { k: 'D', t: 'changes in natural light during the day' },
              { k: 'E', t: 'the questionnaire being in only one language' }
            ],
            answers: ['C', 'D']
          },
          {
            type: 'match', from: 26, to: 30,
            instr: 'What did the students find about each colour?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.',
            boxTitle: 'Findings',
            options: [
              { k: 'A', t: 'Participants felt more relaxed.' },
              { k: 'B', t: 'Participants felt more energetic.' },
              { k: 'C', t: 'Responses showed no clear pattern.' },
              { k: 'D', t: 'Participants felt sadder.' },
              { k: 'E', t: 'It had no noticeable effect.' },
              { k: 'F', t: 'It affected performance on a task.' },
              { k: 'G', t: 'Participants reported feeling hungry.' }
            ],
            questions: [
              { n: 26, text: 'red', answer: 'B' },
              { n: 27, text: 'blue', answer: 'A' },
              { n: 28, text: 'yellow', answer: 'C' },
              { n: 29, text: 'green', answer: 'E' },
              { n: 30, text: 'grey', answer: 'F' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two psychology students, Daniel and Priya, reviewing an experiment they carried out on colour and mood. First, you have some time to look at questions 21 to 25.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 25.'],
          ['B', 'Right, Daniel, shall we go through the experiment before we start writing the report?'],
          ['A', "Good idea. Let's begin with the aim, because Dr Okafor said ours wasn't clear enough in the proposal."],
          ['B', "Well, originally we were going to look at lighting and concentration, weren't we? But we had to drop that, because the lights in the lab couldn't be adjusted."],
          ['A', "That's right. So in the end, what we were really testing was whether the colour of the walls in a room has any effect on how people feel. We weren't looking at which colours people prefer, or whether that changes as they get older."],
          ['B', "OK. Then there's recruitment. We'd planned not to use any of our friends, and we managed that, which was good."],
          ['A', "Yes, but nearly everyone who volunteered was a psychology student, because we only put up posters in our own department. That's a problem, because they might have guessed what we were looking for."],
          ['B', "True. I think we have to say that clearly. And what about the pilot study? What did we change after that?"],
          ['A', "Well, I wanted to cut the questionnaire down, but when we timed it, it only took about three minutes, so we left it as it was."],
          ['B', 'And we wondered about the temperature, because the blue room felt cold, but we checked and all the rooms were exactly the same.'],
          ['A', "Exactly. The one thing we did change was how long people spent in each room. Five minutes just wasn't long enough for any effect to show, so we doubled it to ten."],
          ['B', "Now, limitations. I'm sure we need to mention that the participants knew what the study was about. We actually said it was about colour and mood on the consent form."],
          ['A', "Yes, that was a mistake. And the other one is the light. We ran some sessions in the morning and some in the late afternoon, and the natural light coming through the windows was completely different."],
          ['B', "What about the sample size? Thirty-two people isn't very many."],
          ['A', "Dr Okafor said that's fine for a student project, so I don't think we need to focus on it. And the rooms were all the same size, so that's not an issue."],
          ['B', "And the questionnaire was only in English, but everyone was a fluent speaker, so I'd leave that out too."],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 26 to 30.'],
          ['A', "So, the results for each colour. Let's start with red."],
          ['B', 'Red was interesting. People rated themselves as much more energetic after the red room, which fits with earlier research.'],
          ['A', 'And blue?'],
          ['B', 'Most people said they felt calmer in the blue room. A few said it seemed a bit cold, but when we asked them about it, they really meant they felt relaxed.'],
          ['A', 'Yellow was the one I expected to make people feel cheerful.'],
          ['B', 'Me too, but the results were all over the place. Some people loved it and others found it irritating, so there was no clear pattern at all.'],
          ['A', 'Then green. I thought that would be calming as well, like blue.'],
          ['B', "But it wasn't. The scores for green were almost identical to the white control room. It just didn't seem to make any difference."],
          ['A', 'And finally grey. That one really surprised me.'],
          ['B', "Yes. People didn't say they felt sad, as we'd predicted. But they did much worse on the short memory test we gave them at the end. So it seemed to affect performance rather than mood."],
          ['A', "Interesting. We should definitely discuss that in the conclusion."],
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
            type: 'mc', from: 31, to: 34,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 31, text: 'According to the lecturer, Roman roads were built mainly', options: [
                { k: 'A', t: 'to help merchants transport goods.' },
                { k: 'B', t: 'to allow the army to move quickly.' },
                { k: 'C', t: 'to make tax collection easier.' }], answer: 'B' },
              { n: 32, text: 'At its peak, the network of major paved roads measured about', options: [
                { k: 'A', t: '16,000 kilometres.' },
                { k: 'B', t: '80,000 kilometres.' },
                { k: 'C', t: '400,000 kilometres.' }], answer: 'B' },
              { n: 33, text: 'The lecturer believes Roman roads were straight mainly because', options: [
                { k: 'A', t: 'this reduced the risk of ambushes.' },
                { k: 'B', t: 'of the surveying instrument that was used.' },
                { k: 'C', t: 'the Romans avoided going around obstacles.' }], answer: 'B' },
              { n: 34, text: 'Roman milestones most commonly showed', options: [
                { k: 'A', t: 'the distance to Rome.' },
                { k: 'B', t: 'the distance to the nearest town.' },
                { k: 'C', t: 'the names of the builders.' }], answer: 'B' }
            ]
          },
          {
            type: 'gap', from: 35, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Building and using Roman roads</h4>
                <p><b>Construction</b></p>
                <ul>
                  <li>trench dug down to solid ground</li>
                  <li>foundation: large [[35]]</li>
                  <li>middle layer: gravel mixed with [[36]] to bind it together</li>
                  <li>surface curved so that [[37]] could drain away into ditches</li>
                </ul>
                <p><b>The state post</b></p>
                <ul>
                  <li>messengers could travel up to [[38]] km per day</li>
                  <li>stations along the roads provided fresh [[39]]</li>
                </ul>
                <p><b>Legacy</b></p>
                <ul>
                  <li>many modern roads in Britain follow the same [[40]]</li>
                </ul>
              </div>`,
            answers: {
              35: ['stones'], 36: ['lime'], 37: ['water'], 38: ['75', 'seventy-five', 'seventy five'],
              39: ['horses'], 40: ['routes', 'route']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture about the road system of ancient Rome. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. In today's lecture in our series on ancient engineering, I'm going to look at one of the Romans' greatest achievements: their road network."],
          ['A', "We tend to think of roads as being built for trade, and of course merchants did use them. But that wasn't the main reason they were built. The Roman state built roads first and foremost so that its army could move quickly from one part of the empire to another. A legion could march around thirty kilometres a day on a good road, which allowed Rome to control huge territories with relatively few soldiers. Tax collectors used the roads too, but again, that was a secondary benefit."],
          ['A', "So how big was the network? At its peak, in the second century, the empire had something like eighty thousand kilometres of major paved roads. Some estimates go as high as four hundred thousand kilometres, but that figure includes minor local tracks, so I'll stick with eighty thousand for the main roads."],
          ['A', "One thing everyone knows about Roman roads is that they're straight. It's often said this was for military reasons, to avoid ambushes, but I don't find that very convincing. The more likely explanation is the surveying equipment. Roman surveyors used an instrument called a groma, a kind of cross mounted on a pole, and it worked best along straight lines of sight. Where the ground was difficult, though, the Romans were perfectly willing to go around obstacles."],
          ['A', "Along the roads, milestones were placed every Roman mile, which is about one and a half kilometres. People often assume they showed the distance to Rome. A few did, but most commonly they gave the distance to the nearest town. Many also recorded the emperor who had paid for the road or its repairs. The names of the people who actually built the road, on the other hand, were almost never recorded."],
          ['A', "Let's turn now to how the roads were built. First, surveyors marked out the route. Then workers, who were usually soldiers, dug a trench down to solid ground. The bottom of the trench was filled with large stones, which formed the foundation. On top of this went a layer of gravel mixed with lime, which acted rather like cement and bound everything together. On the most important roads, the top surface was made of flat paving slabs fitted closely together."],
          ['A', "Crucially, the surface wasn't flat. It was slightly curved, higher in the middle than at the sides, so that water could drain away. There were ditches on both sides to carry it off. This is one of the reasons so many Roman roads lasted for centuries, because water is the greatest enemy of any road."],
          ['A', "The roads also supported a remarkable communication system, the state post. Official messengers could cover up to seventy-five kilometres in a day in normal conditions, and considerably more in an emergency. To make this possible, there were stations along the roads where messengers could pick up fresh horses. Larger stations also offered food and a bed for the night, although these were only for people travelling on government business."],
          ['A', "Finally, what is the legacy of the Roman roads today? In Britain, for example, the Romans built roughly sixteen thousand kilometres of roads. Very little of the original surface remains, but many modern roads follow the same routes, simply because the Romans chose the most efficient way between important places. So the next time you drive along a long, straight road in Europe, you may well be following in the footsteps of a Roman legion."],
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
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'Raising the Pyramids',
          html: `
<p>For more than four thousand years, the pyramids of Giza have provoked one question above all others: how were they built? The Great Pyramid, completed around 2560 BCE for the pharaoh Khufu, originally stood about 146 metres high and contains an estimated 2.3 million blocks of stone, most of them limestone weighing two to three tonnes each. Some of the granite beams above the king’s chamber weigh more than fifty tonnes. Achieving this without iron tools, pulleys or wheels suitable for heavy loads was a remarkable feat, and for centuries the lack of written records left plenty of room for speculation.</p>
<p>Early explanations were often fanciful. The Greek historian Herodotus, writing some two thousand years after construction, claimed that a hundred thousand slaves had laboured for twenty years. This image of a workforce of slaves driven by cruel overseers proved extraordinarily durable, appearing in novels and films well into the twentieth century. Archaeology has since told a very different story. In the 1990s, excavations south of the plateau uncovered a town that had housed the workers, complete with bakeries, breweries and sleeping quarters. Nearby cemeteries contained the tombs of labourers buried with bread and beer for the afterlife – an honour unlikely to have been granted to slaves. Skeletons show evidence of hard physical work but also of medical care: broken limbs had been set, and some workers had even survived surgery. Most experts now believe the workforce numbered around twenty thousand at any one time, made up of a permanent core of skilled craftsmen supported by farmers who served in rotating teams, perhaps during the annual flood when their fields lay under water.</p>
<p>Obtaining the stone was the first challenge. Most of the limestone was quarried on the Giza plateau itself, just a few hundred metres from the pyramid. Workers cut channels around each block using copper chisels and then split it free by hammering in wooden wedges. The finer white limestone used for the outer casing came from Tura, on the other side of the Nile, while the granite was brought from Aswan, some 800 kilometres to the south. Transport over such distances was by boat. In 2013, archaeologists working at an ancient harbour on the Red Sea coast discovered the oldest inscribed papyri ever found. Among them was the logbook of an official named Merer, who recorded his team’s journeys carrying limestone from Tura to Giza along canals dug specially for the purpose.</p>
<p>Moving the blocks over land was another matter. A painting in a tomb from around 1900 BCE shows a huge statue being dragged on a wooden sledge while a man pours liquid onto the sand in front of it. For a long time this was interpreted as a religious ceremony. In 2014, however, physicists in Amsterdam showed that wetting desert sand with the right amount of water roughly halves the force needed to pull a sledge across it, because the water forms tiny bridges between the grains and stiffens the surface. The painting, it seems, records a practical engineering technique.</p>
<p>The greatest puzzle is how the blocks were lifted into position. The most widely accepted theory involves ramps, but there is little agreement about their form. A straight ramp running up one face would have needed to be extremely long to keep a manageable slope, and would have required almost as much material as the pyramid itself. A ramp spiralling around the outside would have used less material, but it would have covered the corners, making it difficult for surveyors to check that the faces were correctly aligned. In 2007 the French architect Jean-Pierre Houdin proposed that an internal ramp had been built inside the pyramid, rising in a spiral just beneath the outer surface. Some support for this idea comes from a density survey suggesting an unusual structure in that position, but critics argue that the evidence is far from conclusive.</p>
<p>Other researchers emphasise levers rather than ramps. Herodotus himself mentioned machines made of short pieces of timber, and experiments have shown that a small team using wooden levers can raise a heavy block one step at a time. In 2018, at an ancient alabaster quarry, archaeologists found a steep ramp flanked by staircases and post holes, suggesting that sledges were hauled up using a system of wooden posts that worked rather like a simple pulley. It is quite possible that the Egyptians combined several of these methods, using different techniques at different heights.</p>
<p>What is clear is that the pyramids were not the product of a single brilliant idea but of an extraordinarily well-organised state. Feeding, housing and coordinating thousands of workers, keeping records, and transporting materials across hundreds of kilometres required a level of administration that was, in many ways, as impressive as the engineering itself.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the table below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Topic</th><th>Evidence or finding</th></tr>
                <tr><td>The workforce</td><td>Workers were buried with bread and [[1]], which suggests they were not slaves.</td></tr>
                <tr><td>The workforce</td><td>Skilled craftsmen were helped by farmers working in rotating [[2]].</td></tr>
                <tr><td>Quarrying</td><td>Blocks were split free with wooden [[3]].</td></tr>
                <tr><td>Transport by water</td><td>The logbook of an official called [[4]] describes moving limestone along specially dug [[5]].</td></tr>
                <tr><td>Transport over land</td><td>Wet sand halves the force needed to pull a [[6]].</td></tr>
              </table>`,
            answers: { 1: ['beer'], 2: ['teams'], 3: ['wedges'], 4: ['merer'], 5: ['canals'], 6: ['sledge'] }
          },
          {
            type: 'tf', variant: 'tf', from: 7, to: 13,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 7, text: 'Herodotus visited Giza while the Great Pyramid was being built.', answer: 'FALSE' },
              { n: 8, text: 'Some pyramid workers received medical treatment for injuries.', answer: 'TRUE' },
              { n: 9, text: 'The stone used for the outside of the pyramid was of higher quality than most of the limestone.', answer: 'TRUE' },
              { n: 10, text: 'Merer’s logbook was discovered close to the pyramids at Giza.', answer: 'FALSE' },
              { n: 11, text: 'The Amsterdam physicists used sand taken from the Giza plateau.', answer: 'NOT GIVEN' },
              { n: 12, text: 'An external spiral ramp would have made it harder to check the pyramid’s alignment.', answer: 'TRUE' },
              { n: 13, text: 'Houdin spent several years working in Egypt before publishing his theory.', answer: 'NOT GIVEN' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Sailing on Sunlight',
          html: `
<p><b class="para">A</b> Every spacecraft launched so far has faced the same fundamental limitation: it can only travel as far as its fuel allows. Rockets must carry their propellant with them, and since fuel itself has mass, still more fuel is needed to lift the fuel – a vicious circle that makes long journeys extremely costly. A solar sail offers a way out of this trap. Instead of burning anything, it is pushed by sunlight itself. The idea is older than it might seem. In the early seventeenth century, the astronomer Johannes Kepler noticed that the tails of comets always point away from the Sun, as though blown by a breeze, and suggested in a letter to Galileo that ships with sails might one day travel between the heavenly bodies.</p>
<p><b class="para">B</b> Kepler’s explanation was not quite right, but his intuition was sound. In 1873 the Scottish physicist James Clerk Maxwell showed mathematically that light should exert pressure on any surface it strikes, and this was confirmed experimentally about thirty years later. Light consists of particles called photons which, although they have no mass, carry momentum. When they bounce off a mirror-like surface, they transfer a tiny push. The force is extraordinarily small: at the Earth’s distance from the Sun, sunlight falling on a sail the size of a football pitch produces a push roughly equal to the weight of a few coins. Yet unlike a rocket engine, which fires for only minutes, this push never stops. Over weeks and months, a sail can gradually build up speeds that no chemical rocket could match.</p>
<p><b class="para">C</b> Because the force is so weak, the sail must be both enormous and astonishingly light. Most designs use a plastic film called polyimide, or a similar material, coated with a thin layer of aluminium to make it reflective. The film is often only a few micrometres thick, many times thinner than a human hair. Manufacturing such a material is relatively straightforward; the real engineering difficulty lies in packing it into a container small enough to launch, and then unfolding it in space without tearing or tangling. Several designs borrow folding patterns from origami, the Japanese art of paper folding, while long booms made of flexible composite materials hold the finished sail taut.</p>
<p><b class="para">D</b> The first spacecraft to prove that solar sailing works between planets was IKAROS, launched by the Japan Aerospace Exploration Agency in 2010 on its way to Venus. Its square sail, roughly twenty metres from corner to corner, was partly covered in thin-film solar cells, so that it generated electricity from the sail itself as well as being propelled by it. An earlier attempt by the Planetary Society, a non-profit organisation, had ended in 2005, when the rocket carrying its Cosmos 1 sail failed shortly after launch. The organisation persisted, and in 2019 its LightSail 2 spacecraft, funded partly by public donations and the contributions of members, successfully raised its orbit around the Earth using sunlight alone. Not every mission has gone so well: NASA’s NEA Scout, designed to fly past a small asteroid, was launched in 2022, but its controllers were never able to make contact with it.</p>
<p><b class="para">E</b> The advantages of solar sails go beyond saving fuel. Because the push is continuous, a sail can hold positions that would be impossible for a conventional spacecraft. One proposal is for a so-called ‘pole-sitter’, which would remain permanently above one of Earth’s poles, providing a constant view of the polar regions for weather forecasting and communications. Sails may also offer a surprisingly fast route to the outer solar system. By first falling inwards and passing close to the Sun, where sunlight is most intense, a sail could be flung outwards at very high speed, possibly reaching the edge of the solar system in a fraction of the time taken by existing probes.</p>
<p><b class="para">F</b> There are, however, significant limitations. The strength of sunlight falls rapidly with distance, so that at the orbit of Jupiter it is only about one twenty-fifth of its strength near the Earth. Beyond that point, a sail can do little more than coast. The thin material is vulnerable to tiny particles known as micrometeoroids, which can puncture it, and to the harsh radiation of space, which gradually weakens it. Steering presents another challenge. A sail changes course by tilting relative to the Sun, so changing direction is slow, and close to the Earth, traces of the upper atmosphere can drag a sail down faster than sunlight can lift it.</p>
<p><b class="para">G</b> The most ambitious idea of all would replace sunlight with lasers. In 2016, a project called Breakthrough Starshot proposed launching thousands of probes, each weighing only a few grams and attached to a sail just a few metres wide. A vast array of lasers on the ground would accelerate them to around a fifth of the speed of light, allowing them to reach Alpha Centauri, the nearest star system, in about twenty years. Critics point out that the lasers would require enormous amounts of power, and that the sails would have to survive intense heating without melting. Even if such interstellar voyages remain distant, however, it seems likely that solar sails will become a practical and economical means of exploring our own corner of space.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 18,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Which paragraph contains the following information?<br>Write the correct letter, <b>A–G</b>. <i>NB</i> You may use any letter more than once.',
            boxTitle: 'Paragraphs',
            options: [
              { k: 'A', t: 'Paragraph A' }, { k: 'B', t: 'Paragraph B' }, { k: 'C', t: 'Paragraph C' },
              { k: 'D', t: 'Paragraph D' }, { k: 'E', t: 'Paragraph E' }, { k: 'F', t: 'Paragraph F' },
              { k: 'G', t: 'Paragraph G' }
            ],
            questions: [
              { n: 14, text: 'a reason why sails become less useful far from the Sun', answer: 'F' },
              { n: 15, text: 'a natural phenomenon that first suggested the idea of solar sailing', answer: 'A' },
              { n: 16, text: 'a description of what sails are made of', answer: 'C' },
              { n: 17, text: 'a mission that ended because of a problem with its launch', answer: 'D' },
              { n: 18, text: 'a plan to send spacecraft to another star system', answer: 'G' }
            ]
          },
          {
            type: 'match', from: 19, to: 22,
            instr: 'Look at the following statements (Questions 19–22) and the list of people and projects below.<br>Match each statement with the correct person or project, <b>A–F</b>.',
            boxTitle: 'List of People and Projects',
            options: [
              { k: 'A', t: 'Johannes Kepler' },
              { k: 'B', t: 'James Clerk Maxwell' },
              { k: 'C', t: 'IKAROS' },
              { k: 'D', t: 'LightSail 2' },
              { k: 'E', t: 'NEA Scout' },
              { k: 'F', t: 'Breakthrough Starshot' }
            ],
            questions: [
              { n: 19, text: 'was paid for partly by ordinary members of the public', answer: 'D' },
              { n: 20, text: 'provided a theoretical explanation of the pressure of light', answer: 'B' },
              { n: 21, text: 'produced electrical power using its sail', answer: 'C' },
              { n: 22, text: 'was intended to study an asteroid', answer: 'E' }
            ]
          },
          {
            type: 'gap', from: 23, to: 26,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>Advantages and limitations of solar sails</h4>
                <p>Because the push of sunlight never stops, a solar sail could stay permanently above one of Earth’s [[23]], something a conventional spacecraft cannot do. To reach the outer solar system quickly, a sail might first travel inwards and pass close to the [[24]]. However, the thin material can be punctured by [[25]], and because a sail steers by tilting, changing direction is [[26]].</p>
              </div>`,
            answers: { 23: ['poles'], 24: ['sun'], 25: ['micrometeoroids'], 26: ['slow'] }
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Two Languages, One Brain',
          html: `
<p>For much of the twentieth century, bilingualism was regarded with suspicion. Educational psychologists in the 1920s and 1930s reported that children raised with two languages scored lower on intelligence tests than their monolingual peers, and parents in many countries were advised to speak only the majority language at home for fear of confusing their children. Few of these early studies, however, took account of the fact that the bilingual children tested frequently came from poorer immigrant families and were being assessed in a language they had not yet fully mastered. Once researchers began to control for social class and the language of testing, the supposed deficit largely disappeared.</p>
<p>The turning point is usually dated to 1962, when Elizabeth Peal and Wallace Lambert, working in Montreal, found that bilingual ten-year-olds actually outperformed monolinguals on a range of verbal and non-verbal tests. Their study had its own weaknesses – the bilingual group was selected for balanced proficiency in both languages, a criterion that may have favoured more able children – but it shifted the terms of the debate. Rather than asking whether bilingualism caused harm, researchers began to ask whether it conferred advantages.</p>
<p>The most influential answer came from the Canadian psychologist Ellen Bialystok. Her starting point was the observation that a bilingual person’s two languages are never entirely switched off. Brain-imaging studies confirm that when bilinguals hear or read a word in one language, related words in the other are briefly activated as well. To speak fluently, therefore, they must continually suppress the language not in use. Bialystok proposed that this constant practice strengthens what psychologists call executive function – the set of mental processes, centred in the prefrontal cortex, that allow us to focus attention, ignore distractions and switch between tasks. In a series of experiments from the late 1990s onwards, she and her colleagues reported that bilingual children and adults responded more quickly on tasks such as the Simon task, in which participants must respond to the colour of a stimulus while ignoring its position on a screen.</p>
<p>Even more striking claims concerned old age. In 2007, Bialystok’s team examined the records of patients at a memory clinic in Toronto and found that bilinguals had first shown symptoms of dementia about four years later, on average, than monolinguals. Later studies in India and Belgium reported similar delays. The proposed explanation draws on the concept of cognitive reserve: a lifetime of managing two languages may not prevent the physical damage associated with dementia, but it may allow the brain to compensate for that damage for longer before symptoms become apparent.</p>
<p>Not everyone has been persuaded. Since around 2010, a growing number of researchers have failed to reproduce the bilingual advantage in executive function. One study of more than eleven thousand participants, many of them tested online, found no difference between bilinguals and monolinguals on measures of attention and task-switching. Critics such as the psychologist Kenneth Paap argue that the positive findings arose from small samples combined with a tendency for journals to publish exciting results while rejecting studies that found nothing – the so-called publication bias. An analysis of conference presentations appears to support this: studies reporting an advantage were considerably more likely to be published in full than those that did not. The dementia findings have also been questioned, since immigrants, who make up a large proportion of the bilinguals in some samples, may differ from the native-born population in ways that affect health, such as diet or level of education.</p>
<p>Supporters of the bilingual advantage respond that ‘bilingual’ is not a single category. A child who uses two languages every day in different settings, an adult who learned a second language at school and rarely uses it, and a professional interpreter who switches between languages constantly are all described as bilingual, yet their experiences are utterly different. If the benefits depend on how intensively, and in what contexts, the languages are used, then large studies that group all bilinguals together would be expected to find weak or inconsistent effects. Researchers have accordingly begun to measure language experience as a continuous variable rather than dividing people into two neat groups.</p>
<p>In my view, the controversy has been productive, even if it has damaged some reputations. It has forced the field to use larger samples, to register hypotheses before data are collected and to publish negative results. It has also clarified what the debate is not about. No serious researcher now argues that bilingualism harms cognitive development, and the practical benefits of speaking more than one language – access to other cultures, wider employment opportunities, the ability to maintain links with family – do not depend on any effect on executive function. Parents who wish to raise their children bilingually should not be deterred by the uncertainty; nor, however, should they be promised that a second language will make their children cleverer. The more modest conclusion is that the brain adapts to the demands placed upon it, and that managing two languages is one such demand among many, alongside playing a musical instrument or learning to find one’s way around a complicated city.</p>`
        },
        groups: [
          {
            type: 'mc', from: 27, to: 30,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 27, text: 'According to the first paragraph, early studies of bilingual children were unreliable because they', options: [
                { k: 'A', t: 'used too few participants.' },
                { k: 'B', t: 'ignored the children’s background and the language of testing.' },
                { k: 'C', t: 'were carried out only in immigrant communities.' },
                { k: 'D', t: 'relied on reports from parents.' }], answer: 'B' },
              { n: 28, text: 'What weakness does the writer identify in the study by Peal and Lambert?', options: [
                { k: 'A', t: 'The children were too young to be tested accurately.' },
                { k: 'B', t: 'Only verbal skills were measured.' },
                { k: 'C', t: 'The bilingual group may have contained unusually capable children.' },
                { k: 'D', t: 'The results were not published for many years.' }], answer: 'C' },
              { n: 29, text: 'Bialystok’s theory is based on the idea that bilingual people', options: [
                { k: 'A', t: 'use a different part of the brain for each language.' },
                { k: 'B', t: 'must constantly hold back the language they are not using.' },
                { k: 'C', t: 'learn new words more quickly than monolinguals.' },
                { k: 'D', t: 'pay more attention to colour than to position.' }], answer: 'B' },
              { n: 30, text: 'The concept of cognitive reserve suggests that bilingualism', options: [
                { k: 'A', t: 'prevents the physical damage caused by dementia.' },
                { k: 'B', t: 'makes dementia easier to diagnose.' },
                { k: 'C', t: 'helps the brain to cope with damage for a longer period.' },
                { k: 'D', t: 'is more beneficial in some countries than others.' }], answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 31, to: 35,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 31, text: 'The advice given to parents in the early twentieth century was based on flawed research.', answer: 'YES' },
              { n: 32, text: 'Peal and Lambert’s study was free from methodological problems.', answer: 'NO' },
              { n: 33, text: 'The Simon task is the most accurate available measure of executive function.', answer: 'NOT GIVEN' },
              { n: 34, text: 'Publication bias may partly explain why positive findings appeared so often.', answer: 'YES' },
              { n: 35, text: 'Overall, the controversy has had a harmful effect on research into bilingualism.', answer: 'NO' }
            ]
          },
          {
            type: 'multi', from: 36, to: 37, ns: [36, 37],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> changes in research practice does the writer say resulted from the controversy?',
            options: [
              { k: 'A', t: 'studying larger groups of participants' },
              { k: 'B', t: 'testing only people with balanced proficiency' },
              { k: 'C', t: 'stating hypotheses before collecting data' },
              { k: 'D', t: 'carrying out more testing online' },
              { k: 'E', t: 'making greater use of brain imaging' }
            ],
            answers: ['A', 'C']
          },
          {
            type: 'match', from: 38, to: 40,
            instr: 'Complete each sentence with the correct ending, <b>A–F</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'found no difference in attention between bilinguals and monolinguals.' },
              { k: 'B', t: 'the benefits depend on how and how often languages are used.' },
              { k: 'C', t: 'confirmed that bilinguals develop dementia later.' },
              { k: 'D', t: 'they should not expect a second language to make their children more intelligent.' },
              { k: 'E', t: 'bilingualism slows down vocabulary development.' },
              { k: 'F', t: 'they should introduce the second language as early as possible.' }
            ],
            questions: [
              { n: 38, text: 'A large study in which many participants were tested online', answer: 'A' },
              { n: 39, text: 'Supporters of the bilingual advantage argue that', answer: 'B' },
              { n: 40, text: 'The writer advises parents that', answer: 'D' }
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
          title: 'Local notices',
          html: `
<h3>Millbrook Community Car Boot Sale</h3>
<p>Every Sunday from April to September on the playing field of Millbrook Primary School, Station Lane.</p>
<p><b>Sellers</b> may arrive from 6.30 a.m. to set up. <b>Buyers</b> are admitted from 8 a.m.; please do not try to enter earlier, as stewards will turn you away. The sale closes at 1 p.m.</p>
<p><b>Pitch fees:</b> cars £8, vans and trailers £12. There is no need to book a pitch in advance – simply turn up and pay at the gate. The only exception is the first Sunday of each month, which is our charity sale; places on that day must be reserved through the school office.</p>
<p><b>Entry for buyers:</b> 50p per adult, children free.</p>
<p>In wet weather the sale may be cancelled at short notice. Please check the school website after 7 a.m. before setting out. Unfortunately, we are unable to move the sale indoors.</p>
<p><b>Please note:</b> sellers may only offer food in sealed, shop-bought packaging. No live animals may be sold. Dogs are welcome on short leads.</p>
<p>All profits go towards new books for the school library. Hot drinks and bacon rolls are available from the Parents’ Association tent.</p>

<h3>Learn a Language This Autumn</h3>
<p><b class="para">A</b> <b>Lingua House</b> – Evening classes in Spanish and Italian for complete beginners and improvers. Groups never exceed eight students, so everyone gets plenty of speaking practice. Not sure if it’s for you? Come along to any class in September as our guest, with no charge and no obligation to sign up.</p>
<p><b class="para">B</b> <b>Polyglot Online</b> – One-to-one lessons by video call in over twenty languages. Our tutors are available around the clock, so you can book a lesson whenever it suits you – early morning, lunchtime or late at night. Pay lesson by lesson; no long-term contract.</p>
<p><b class="para">C</b> <b>Eastgate Language Centre</b> – Intensive weekend courses in Mandarin and Japanese, plus specialist classes for anyone preparing to sit recognised language examinations. Students in full-time education receive 20% off all course fees on production of a valid student card.</p>
<p><b class="para">D</b> <b>The Conversation Café</b> – Want to practise your French or German in a relaxed setting? Join our weekly meet-ups in the back room of the Corner Café. There are no teachers and no lessons – just native speakers and learners chatting together. A small fee covers your coffee.</p>
<p><b class="para">E</b> <b>Horizon Language Academy</b> – We specialise in business English, French and German for companies. Our qualified trainers will come to your office at a time that fits around your working day. We also run a lively Saturday morning language club for children aged 6–11.</p>`
        },
        groups: [
          {
            type: 'tf', variant: 'tf', from: 1, to: 7,
            instr: 'Look at the notice about the car boot sale.<br>Do the following statements agree with the information given in the text?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 1, text: 'Sellers are allowed onto the field before buyers.', answer: 'TRUE' },
              { n: 2, text: 'If it rains, the sale will take place in the school hall.', answer: 'FALSE' },
              { n: 3, text: 'It costs more to sell from a van than from a car.', answer: 'TRUE' },
              { n: 4, text: 'Sellers must always reserve a pitch before the day of the sale.', answer: 'FALSE' },
              { n: 5, text: 'Home-made cakes can be sold at the sale.', answer: 'FALSE' },
              { n: 6, text: 'The money raised will be used to buy books.', answer: 'TRUE' },
              { n: 7, text: 'Buyers can park their cars at the school free of charge.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'match', from: 8, to: 14,
            instr: 'Look at the five advertisements for language schools, <b>A–E</b>.<br>Which school mentions each of the following?<br>Write the correct letter, <b>A–E</b>. <i>NB</i> You may use any letter more than once.',
            boxTitle: 'Language schools',
            options: [
              { k: 'A', t: 'Lingua House' },
              { k: 'B', t: 'Polyglot Online' },
              { k: 'C', t: 'Eastgate Language Centre' },
              { k: 'D', t: 'The Conversation Café' },
              { k: 'E', t: 'Horizon Language Academy' }
            ],
            questions: [
              { n: 8, text: 'lessons that take place at your workplace', answer: 'E' },
              { n: 9, text: 'a chance to try a class without paying', answer: 'A' },
              { n: 10, text: 'sessions without any professional teachers', answer: 'D' },
              { n: 11, text: 'activities for young learners', answer: 'E' },
              { n: 12, text: 'help with preparing for official tests', answer: 'C' },
              { n: 13, text: 'complete freedom to choose when lessons happen', answer: 'B' },
              { n: 14, text: 'reduced prices for students', answer: 'C' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Harlow Logistics – Staff Handbook (extracts)',
          html: `
<h3>First aid at work</h3>
<p>Harlow Logistics has a team of trained first aiders on every shift. Their names and extension numbers are displayed on the noticeboard beside the staff kitchen, and they can be recognised by the green badge they wear on their uniform.</p>
<p>First aid kits are located at reception, in the warehouse office and at the loading bay. They are checked once a month by the safety manager. If you use anything from a kit, please tell a first aider so that it can be replaced.</p>
<p>Every injury, however minor, must be recorded in the accident book, which is kept at reception. This helps us to identify risks and prevent accidents from happening again.</p>
<p>In the case of a serious injury or illness, call 999 for an ambulance first, then inform reception, who will send someone to wait at the main gate and direct the ambulance crew to the right place.</p>
<p>Please be aware that first aiders are not permitted to give staff any medication, including common painkillers. An eye wash station is located next to the chemical store.</p>
<p>Any employee may volunteer to become a first aider. The company pays for a one-day emergency first aid course, and volunteers attend a refresher course every three years.</p>

<h3>Fire evacuation procedure</h3>
<p>If you discover a fire, raise the alarm immediately by breaking the glass on the nearest call point. Do not attempt to put out the fire yourself unless you have been trained to use extinguishers and the fire is very small.</p>
<p>The fire alarm is a continuous ringing bell. The alarm system is tested every Tuesday at 10 a.m.; during a test, the bell rings for no more than thirty seconds and no action is required.</p>
<p>When the alarm sounds, leave the building by the nearest available exit. Do not stop to collect personal belongings, and never use the lifts. Go directly to the assembly point at the far end of the visitors’ car park.</p>
<p>Fire wardens, who wear yellow vests, will check that all areas have been cleared and will take a register using the electronic signing-in system. If you have invited a visitor onto the site, you are responsible for making sure they leave the building with you and report to the assembly point.</p>
<p>Do not re-enter the building until a fire officer or senior warden tells you that it is safe to do so.</p>
<p>Staff with mobility difficulties will have a personal evacuation plan agreed with their manager. Refuge areas are provided on each stairwell landing; each one is fitted with an intercom so that people waiting there can speak to the fire wardens.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 20,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.',
            template: `
              <p class="sent">A list of first aiders can be found on the noticeboard next to the [[15]].</p>
              <p class="sent">First aiders are easy to identify because they wear a [[16]].</p>
              <p class="sent">The first aid kits are inspected every month by the [[17]].</p>
              <p class="sent">All injuries must be written down in the [[18]].</p>
              <p class="sent">When an ambulance is called, a member of staff will wait for it at the [[19]].</p>
              <p class="sent">First aiders are not allowed to provide [[20]] of any kind.</p>`,
            answers: {
              15: ['staff kitchen', 'kitchen'], 16: ['green badge', 'badge'], 17: ['safety manager'],
              18: ['accident book'], 19: ['main gate', 'gate'], 20: ['medication']
            }
          },
          {
            type: 'tf', variant: 'tf', from: 21, to: 27,
            instr: 'Look at the fire evacuation procedure.<br>Do the following statements agree with the information given in the text?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 21, text: 'Staff should try to put out any fire they discover.', answer: 'FALSE' },
              { n: 22, text: 'The fire alarm is tested once a week.', answer: 'TRUE' },
              { n: 23, text: 'Full fire drills take place twice a year.', answer: 'NOT GIVEN' },
              { n: 24, text: 'Lifts may be used if the fire is on a different floor.', answer: 'FALSE' },
              { n: 25, text: 'Employees must make sure their visitors reach the assembly point.', answer: 'TRUE' },
              { n: 26, text: 'Fire wardens receive extra pay for their duties.', answer: 'NOT GIVEN' },
              { n: 27, text: 'People in refuge areas are able to communicate with fire wardens.', answer: 'TRUE' }
            ]
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'Signed, Sealed, Delivered: a Short History of the Post',
          html: `
<p><b class="para">A</b> Long before anyone could post a letter to a friend, rulers understood that controlling the flow of information meant controlling territory. In the sixth century BCE, the Persian Empire built a chain of stations along its Royal Road, each a day’s ride apart, where riders handed messages to fresh riders in a relay that could cross the empire in about a week. The Romans created a similar network, and imperial China maintained post stations for more than two thousand years. These systems had one thing in common: they existed to serve the state. Ordinary people who wished to send a message had to rely on travelling merchants, pilgrims or friends who happened to be going in the right direction.</p>
<p><b class="para">B</b> This began to change in Europe at the end of the fifteenth century. Merchants, universities and religious orders had already set up their own courier networks, but in 1490 the emperor Maximilian I asked the Taxis family, originally from northern Italy, to organise a regular service linking his territories. The family’s network grew to cover much of Europe, and in time it began carrying letters for private customers who were prepared to pay. In England, the royal post was opened to the public in 1635, partly because the king needed the money that letter-writers would bring in. For the first time, a merchant in York or a widow in Bristol could, at least in theory, send a letter through an official service.</p>
<p><b class="para">C</b> In practice, however, the system had serious flaws. Postage was normally paid not by the sender but by the person receiving the letter, and the charge depended on both the distance travelled and the number of sheets of paper used. A single letter from London to Edinburgh could cost more than a labourer earned in a day. Not surprisingly, people found ways to cheat. Since the recipient could examine a letter before deciding whether to accept it, senders developed codes, marking the outside in ways that conveyed a simple message, after which the recipient would refuse to pay and hand the letter back. Meanwhile, members of Parliament enjoyed free postage and frequently lent their signatures to friends.</p>
<p><b class="para">D</b> The solution came from an English teacher and reformer named Rowland Hill. In 1837 he published a pamphlet arguing that the real cost of the post lay not in transporting letters but in the complicated business of calculating and collecting charges. He proposed a single low rate for any letter within the country, regardless of distance, to be paid in advance by the sender. Proof of payment would be a small printed label with glue on the back. The penny post was introduced in 1840, along with the world’s first adhesive stamp, the Penny Black. The effect was immediate: within a year the number of letters sent had doubled, and by the end of the decade it had risen nearly fivefold. Other countries soon followed, with Switzerland and Brazil issuing their own stamps in 1843.</p>
<p><b class="para">E</b> Sending letters abroad, though, remained complicated. Each pair of countries negotiated its own agreement, and the cost of an international letter could depend on the route it took and the number of borders it crossed. In 1874, representatives of twenty-two countries met in the Swiss city of Bern and created what became the Universal Postal Union. Its members agreed to charge similar rates for international mail and to treat letters from other countries in the same way as their own. Crucially, each country would keep the money from the stamps it sold, rather than dividing payments with other countries, on the assumption that the letters sent and received would roughly balance out. The Union still exists today as an agency of the United Nations.</p>
<p><b class="para">F</b> For much of the twentieth century, post offices expanded their role, offering savings accounts, pensions and parcel services. Since the early 2000s, however, the volume of letters has fallen sharply in most developed countries, largely because of email. At the same time, online shopping has produced a boom in parcels, and postal services now compete with private delivery companies for this business. In several countries, including Germany, the Netherlands and the United Kingdom, the postal service has been privatised. Some operators have responded by offering new services; in France and Japan, for example, families can pay postal workers to visit elderly relatives on their rounds and check that they are well.</p>`
        },
        groups: [
          {
            type: 'match', from: 28, to: 33,
            instr: 'The text has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Agreeing on rules across borders' },
              { k: 'ii', t: 'The role of the post in wartime' },
              { k: 'iii', t: 'A simple idea that transformed communication' },
              { k: 'iv', t: 'A service designed only for rulers' },
              { k: 'v', t: 'How stamps became collectors’ items' },
              { k: 'vi', t: 'Why sending a letter was costly and open to abuse' },
              { k: 'vii', t: 'From private networks to a public service' },
              { k: 'viii', t: 'Fewer letters, new challenges' },
              { k: 'ix', t: 'Delivering mail to remote communities' }
            ],
            questions: [
              { n: 28, text: 'Paragraph A', answer: 'iv' },
              { n: 29, text: 'Paragraph B', answer: 'vii' },
              { n: 30, text: 'Paragraph C', answer: 'vi' },
              { n: 31, text: 'Paragraph D', answer: 'iii' },
              { n: 32, text: 'Paragraph E', answer: 'i' },
              { n: 33, text: 'Paragraph F', answer: 'viii' }
            ]
          },
          {
            type: 'mc', from: 34, to: 36,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 34, text: 'Before 1840, who normally paid for a letter?', options: [
                { k: 'A', t: 'the person who sent it' },
                { k: 'B', t: 'the person who received it' },
                { k: 'C', t: 'the government' },
                { k: 'D', t: 'a member of Parliament' }], answer: 'B' },
              { n: 35, text: 'What was the immediate result of the penny post?', options: [
                { k: 'A', t: 'The number of letters doubled within a year.' },
                { k: 'B', t: 'The cost of transporting letters fell.' },
                { k: 'C', t: 'Many other countries issued stamps that year.' },
                { k: 'D', t: 'Letters were delivered more quickly.' }], answer: 'A' },
              { n: 36, text: 'Under the Universal Postal Union agreement, each country', options: [
                { k: 'A', t: 'set its own rate for international mail.' },
                { k: 'B', t: 'shared its stamp income with other members.' },
                { k: 'C', t: 'kept the money from the stamps it sold.' },
                { k: 'D', t: 'checked letters arriving from abroad.' }], answer: 'C' }
            ]
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>The post today</h4>
                <p>Since the early 2000s, the number of letters has fallen sharply, mainly because of [[37]]. However, online shopping has caused a large increase in [[38]]. In some countries the postal service has been [[39]], and some operators now offer new services, such as visiting [[40]] people to make sure they are well.</p>
              </div>`,
            answers: { 37: ['email', 'e-mail'], 38: ['parcels'], 39: ['privatised', 'privatized'], 40: ['elderly'] }
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
<p><b>The graph below shows the average daily water use per person in three cities between 1990 and 2020.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'line',
          title: 'Average daily water use per person (litres)',
          categories: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
          unit: 'litres',
          series: [
            { name: 'Harbourton', values: [180, 195, 210, 205, 185, 165, 150] },
            { name: 'Kelmscott', values: [120, 130, 145, 160, 170, 175, 178] },
            { name: 'Ravenford', values: [90, 92, 95, 110, 130, 150, 165] }
          ],
          max: 250
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>International tourism has grown enormously in recent decades. Some people argue that it brings economic and cultural benefits, while others believe it damages local communities and the environment.</b></p>
<p><b>Do you think tourism does more harm than good?</b></p>
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
<p>You recently completed a short course and enjoyed it very much. A friend of yours is interested in taking a similar course.</p>
<p>Write a letter to your friend. In your letter</p>
<ul>
<li>describe the course you took</li>
<li>explain why you found it so useful</li>
<li>give your friend some advice about how to get the most out of it</li>
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
<p><b>In many countries, more and more people are now working from home for some or all of the week.</b></p>
<p><b>Do the advantages of this development outweigh the disadvantages?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 8, listening);
  IELTS.add('reading-academic', 8, readingAcademic);
  IELTS.add('reading-general', 8, readingGeneral);
  IELTS.add('writing-academic', 8, writingAcademic);
  IELTS.add('writing-general', 8, writingGeneral);
})();
