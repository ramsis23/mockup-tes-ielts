/* Konten tes 5 (orisinal, dibuat khusus untuk latihan ini).
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
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'gap', from: 1, to: 5,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>HARBOUR LETTINGS<br><span>Tenant Registration Form</span></h4>
                <table class="form-table">
                  <tr><td>Name:</td><td>Daniel [[1]]</td></tr>
                  <tr><td>Current address:</td><td>17 [[2]] Road, Leeds</td></tr>
                  <tr><td>Occupation:</td><td>[[3]]</td></tr>
                  <tr><td>Maximum rent:</td><td>£ [[4]] per month</td></tr>
                  <tr><td>Preferred location:</td><td>near the [[5]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['okafor'], 2: ['pelham'], 3: ['pharmacist'],
              4: ['950', 'nine hundred and fifty', 'nine hundred fifty'], 5: ['station', 'railway station', 'train station']
            }
          },
          {
            type: 'gap', from: 6, to: 10,
            instr: 'Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Location</th><th>Advantages</th><th>Disadvantages</th></tr>
                <tr><td>Carlton Street<br>(2 bedrooms, second floor)</td><td>a very large [[6]]</td><td>no [[7]] available</td></tr>
                <tr><td>Mill Lane<br>(1 bedroom, ground floor)</td><td>has its own [[8]]<br>rent includes the [[9]]</td><td>[[10]] minutes’ walk to the station</td></tr>
              </table>`,
            answers: {
              6: ['kitchen'], 7: ['parking'], 8: ['garden'], 9: ['internet', 'broadband'],
              10: ['20', 'twenty']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a man talking to an employee at a letting agency about renting a flat. First, you have some time to look at questions 1 to 5.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 1 to 5.'],
          ['A', 'Good afternoon, Harbour Lettings, Rachel speaking. How can I help?'],
          ['B', 'Hi. I’m moving to the area for work next month, and I’m looking for a flat to rent. A colleague said you might have a few on your books.'],
          ['A', 'We certainly do. Have you registered with us before?'],
          ['B', 'No, this is the first time.'],
          ['A', 'Not a problem. I’ll just take a few details so I can match you with suitable properties. Can I start with your name?'],
          ['B', 'Yes, it’s Daniel Okafor.'],
          ['A', 'Could you spell the surname for me, please?'],
          ['B', 'Of course. O, K, A, F, O, R.'],
          ['A', 'O, K, A, F, O, R. Thanks. And where are you living at the moment?'],
          ['B', 'I’m renting a room in a shared house in Leeds. The address is 17 Pelham Road.'],
          ['A', 'Is that P, E, L, H, A, M?'],
          ['B', 'That’s right.'],
          ['A', 'Great. And can I ask what you do for a living? Landlords usually like to know.'],
          ['B', 'Sure. I actually trained as a nurse, but I changed careers a few years ago, and now I’m a pharmacist. I’ll be starting at the new medical centre on Queen Street.'],
          ['A', 'Lovely. Now, what sort of budget do you have in mind? What’s the most you’d want to pay each month?'],
          ['B', 'Well, ideally I’d like to keep it to around eight hundred and fifty pounds, but I’ve seen the prices round here, so I could go up to nine hundred and fifty if the place was right. That’s really my limit, though.'],
          ['A', 'OK, I’ll put nine hundred and fifty as the maximum. And is there a particular part of town you’re interested in?'],
          ['B', 'I did think about the city centre, but it seems very expensive. What matters most is being near the station, because I’ll probably go back to Leeds most weekends to see my family.'],
          ['A', 'That makes sense. Being close to the station still gives you quite a few options.'],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 6 to 10.'],
          ['A', 'Right, I’ve got two flats that might suit you. The first is on Carlton Street, about ten minutes from the station. It’s on the second floor of a converted house, and it has two bedrooms.'],
          ['B', 'Two bedrooms would be great. I could use one as a study.'],
          ['A', 'Exactly. The best thing about it is the kitchen, which is really large. The owner had it completely redone last year. The bathroom is rather small, I have to say, but it’s clean and modern.'],
          ['B', 'That doesn’t worry me too much. Is there anywhere to leave a car?'],
          ['A', 'Unfortunately, that’s the main problem. There’s no parking, either on the street or behind the building. You’d need to rent a space in the multi-storey, and that’s quite costly.'],
          ['B', 'Hmm. I am bringing my car with me. What about the other one?'],
          ['A', 'The second flat is on Mill Lane. It’s a one-bedroom place on the ground floor, and it has its own garden, which is quite unusual for a flat in this area.'],
          ['B', 'Oh, that sounds nice. Is it in good condition?'],
          ['A', 'Very good. And another advantage is that the rent includes the internet. Gas and electricity are extra, but the broadband is all paid for by the landlord.'],
          ['B', 'That’s helpful. And how far is it from the station?'],
          ['A', 'That’s the drawback, really. It’s a bit further out. I’d say it’s around twenty minutes on foot. There is a bus, but it only runs every half an hour.'],
          ['B', 'Twenty minutes is fine. I enjoy walking. Could I see both of them?'],
          ['A', 'Of course. Would Saturday morning work for you?'],
          ['B', 'Saturday is perfect.'],
          ['A', 'Then I’ll book you in for ten o’clock at Carlton Street and eleven at Mill Lane, and I’ll send you the details by email.'],
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
              { n: 11, text: 'The garden was originally created in order to', options: [
                { k: 'A', t: 'display plants collected by explorers.' },
                { k: 'B', t: 'teach medical students about plants.' },
                { k: 'C', t: 'supply fruit and vegetables to the town.' }], answer: 'B' },
              { n: 12, text: 'What change has recently been made at the garden?', options: [
                { k: 'A', t: 'Children no longer have to pay.' },
                { k: 'B', t: 'The opening hours have been extended.' },
                { k: 'C', t: 'A new car park has opened.' }], answer: 'A' },
              { n: 13, text: 'According to the guide, the best time to visit the rose garden is', options: [
                { k: 'A', t: 'early in the morning.' },
                { k: 'B', t: 'around lunchtime.' },
                { k: 'C', t: 'just after it has rained.' }], answer: 'A' },
              { n: 14, text: 'Visitors who want to join a guided walk should', options: [
                { k: 'A', t: 'book on the website.' },
                { k: 'B', t: 'go to the gift shop.' },
                { k: 'C', t: 'ask at the information desk.' }], answer: 'C' }
            ]
          },
          {
            type: 'match', from: 15, to: 20,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 15–20.
              <table class="form-table" style="text-align:center;margin-top:8px">
                <tr><th colspan="4">Kingsmere Botanic Garden (north at the top)</th></tr>
                <tr><td><b>A</b></td><td><b>B</b></td><td>Lake</td><td><b>C</b></td></tr>
                <tr><td><b>D</b></td><td>Fountain</td><td><b>E</b></td><td><b>F</b></td></tr>
                <tr><td><b>G</b></td><td>Main Entrance</td><td>Visitor Centre</td><td><b>H</b></td></tr>
              </table>`,
            boxTitle: 'Locations on the plan',
            options: [
              { k: 'A', t: 'position A' }, { k: 'B', t: 'position B' }, { k: 'C', t: 'position C' },
              { k: 'D', t: 'position D' }, { k: 'E', t: 'position E' }, { k: 'F', t: 'position F' },
              { k: 'G', t: 'position G' }, { k: 'H', t: 'position H' }
            ],
            questions: [
              { n: 15, text: 'Tropical Glasshouse', answer: 'G' },
              { n: 16, text: 'Herb Garden', answer: 'D' },
              { n: 17, text: 'Rock Garden', answer: 'B' },
              { n: 18, text: 'Tea Room', answer: 'E' },
              { n: 19, text: 'Japanese Garden', answer: 'C' },
              { n: 20, text: 'Seed Bank exhibition', answer: 'H' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a guide welcoming a group of visitors to a botanical garden. First, you have some time to look at questions 11 to 14.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 14.'],
          ['A', 'Good morning, everyone, and welcome to Kingsmere Botanic Garden. My name’s Andrew, and I’m one of the volunteer guides here. Before you set off to explore, I’d like to tell you a little about the garden and show you where everything is.'],
          ['A', 'The garden was founded in 1683, which makes it one of the oldest in the country. Many people assume it was set up to display the exotic plants that explorers brought back from their travels, and it’s true that we built up a very large collection of those in the nineteenth century. But that wasn’t the original purpose. It began as a teaching garden for the local medical school, where students learned to recognise the plants that were used to make medicines.'],
          ['A', 'Now, some news for those of you who are regular visitors. Our opening hours are the same as always, nine until six in the summer. What has changed is that we no longer charge for children. Since April, anyone under sixteen gets in free, and we’ve seen a lot more families as a result. We had hoped to open the new car park this spring as well, but unfortunately that won’t be ready until next year.'],
          ['A', 'If you’re planning to visit the rose garden, and I hope you will, here’s a word of advice. Most visitors go there around lunchtime, when it’s extremely busy. Some people will tell you the roses smell best after rain, but in my experience you can’t beat the early morning, before the sun gets hot. That’s when the scent is strongest, so if you come again, try to get there before ten.'],
          ['A', 'We also run free guided walks every day at eleven and at two. You don’t need to book online, and there’s no need to go to the gift shop either. Just ask at the information desk inside the visitor centre, and they’ll put your name down.'],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 15 to 20.'],
          ['A', 'Right, if you look at the plan in your leaflet, you’ll see that we’re standing at the main entrance, at the bottom. The visitor centre is just here on our right.'],
          ['A', 'Immediately on your left as you come in is the Tropical Glasshouse. It’s kept at about twenty-five degrees all year round, so you may want to take your coat off before you go in.'],
          ['A', 'If you walk past the glasshouse and carry on along the western path, you’ll come to the Herb Garden. It’s directly behind the glasshouse, to the left of the fountain, and it’s a lovely, sheltered spot.'],
          ['A', 'Now, if you walk straight ahead from the entrance, you’ll pass the fountain. Keep going on the same path, right up to the top of the garden, and you’ll reach the Rock Garden. It’s just to the left of the lake, so you get wonderful views across the water from there.'],
          ['A', 'Hungry visitors will want to know about the Tea Room. It’s very close to the fountain, just on its right-hand side, and its terrace looks straight out over the lake, which is directly to the north of it. It gets busy at lunchtime, so it’s worth going a little earlier.'],
          ['A', 'On the far side of the lake, in the top right-hand corner of the garden, is the Japanese Garden. To get there, take the eastern path and follow it all the way to the top. Please keep to the stepping stones, as the moss there is very delicate.'],
          ['A', 'And finally, don’t miss our Seed Bank exhibition. You might expect it to be inside the visitor centre, but it’s actually in a separate building right next door, to the east of the visitor centre, in the bottom right-hand corner of the plan. It explains how we store the seeds of thousands of endangered plants.'],
          ['A', 'Well, that’s all from me. Enjoy your visit.'],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'mc', from: 21, to: 23,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 21, text: 'What problem do the students identify with their first draft?', options: [
                { k: 'A', t: 'It was too long.' },
                { k: 'B', t: 'It focused too much on economic effects.' },
                { k: 'C', t: 'It contained too many statistics.' }], answer: 'B' },
              { n: 22, text: 'Tom found Dr Fischer’s article useful because it', options: [
                { k: 'A', t: 'had been published recently.' },
                { k: 'B', t: 'compared several different countries.' },
                { k: 'C', t: 'included interviews with local residents.' }], answer: 'C' },
              { n: 23, text: 'What will the students use at the start of the presentation?', options: [
                { k: 'A', t: 'a video clip' },
                { k: 'B', t: 'a question for the audience' },
                { k: 'C', t: 'a photograph' }], answer: 'C' }
            ]
          },
          {
            type: 'multi', from: 24, to: 25, ns: [24, 25],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> positive effects of tourism will the students include in their presentation?',
            options: [
              { k: 'A', t: 'improved transport links' },
              { k: 'B', t: 'the survival of traditional crafts' },
              { k: 'C', t: 'cleaner beaches' },
              { k: 'D', t: 'employment for young people' },
              { k: 'E', t: 'better local healthcare' }
            ],
            answers: ['B', 'D']
          },
          {
            type: 'match', from: 26, to: 30,
            instr: 'What do the students say about each of the following measures for managing tourism?<br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 26–30.',
            boxTitle: 'Comments',
            options: [
              { k: 'A', t: 'effective but unpopular with some residents' },
              { k: 'B', t: 'too expensive for many places' },
              { k: 'C', t: 'has benefited the environment' },
              { k: 'D', t: 'only suitable for small destinations' },
              { k: 'E', t: 'difficult to enforce' },
              { k: 'F', t: 'has reduced visitor numbers too much' }
            ],
            questions: [
              { n: 26, text: 'entry fees for day visitors', answer: 'E' },
              { n: 27, text: 'limits on cruise ships', answer: 'C' },
              { n: 28, text: 'a fixed daily charge for every tourist', answer: 'D' },
              { n: 29, text: 'restrictions on holiday rentals', answer: 'A' },
              { n: 30, text: 'promoting off-season travel', answer: 'B' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two students, Maya and Tom, discussing a presentation they are preparing on the impact of tourism. First, you have some time to look at questions 21 to 25.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 25.'],
          ['B', 'So, Maya, did you get a chance to read through the draft I sent you?'],
          ['A', 'I did, thanks. I think the structure works well, and the timing’s fine. When I read it aloud, it came to just under fifteen minutes, which is exactly what Dr Lewis asked for.'],
          ['B', 'That’s a relief. I was worried it was too long.'],
          ['A', 'No, length isn’t the issue. What struck me was that almost everything was about money: hotel revenue, jobs, how much visitors spend. We hardly said anything about the effects on local culture or the environment.'],
          ['B', 'You’re right. I think I got carried away with the economic side because the data was so easy to find. We need to balance it out.'],
          ['A', 'Exactly. And there are plenty of figures in there already, so I don’t think we should add any more.'],
          ['B', 'Agreed. Actually, that article by Dr Fischer that you found could help with the cultural side. I know it only looks at one country, and it’s nearly ten years old now, but what made it valuable for me was all the interviews with people who actually live in the tourist areas. You get a real sense of how they feel.'],
          ['A', 'Yes, those quotes are brilliant. We could put one or two on the slides.'],
          ['B', 'Good idea. Now, how do we want to start? I was thinking of a short video clip of the crowds in Venice.'],
          ['A', 'It would be eye-catching, but remember what happened in the last seminar, when the sound didn’t work? I’d rather not take the risk. What about asking the audience a question, like how many of them have been abroad on holiday this year?'],
          ['B', 'Hmm, people often don’t respond to that kind of thing, and it can feel awkward. I think a single, striking photograph would be just as effective, and there’s nothing that can go wrong.'],
          ['A', 'Fine, let’s go with that. There’s a great one of a cruise ship towering over the old town.'],
          ['B', 'Perfect. Now, for the section on positive effects, we said we’d mention two. Which ones do you think?'],
          ['A', 'Well, I was going to suggest improved transport, but in a lot of places the new roads and airports mainly benefit visitors rather than residents, so it’s a bit complicated.'],
          ['B', 'True. What about the way tourism can keep traditional crafts alive? In the Fischer article, several weavers said they’d have given up long ago if it weren’t for tourists buying their work.'],
          ['A', 'Definitely include that. And I think the other one should be employment for young people. In many rural areas, tourism is the main reason they don’t have to move to the cities to find work.'],
          ['B', 'Yes. I did consider cleaner beaches, because some resorts have invested a lot in that, but the evidence is rather mixed. Let’s stick with those two.'],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 26 to 30.'],
          ['A', 'Then there’s the section on managing tourism. We’ve got five measures to talk about. Shall we agree what we think about each one?'],
          ['B', 'OK. First, entry fees for day visitors, like the one Venice introduced.'],
          ['A', 'In theory it’s a good idea, but from what I’ve read, it’s very hard to enforce. There are so many ways into the city, and checking everyone’s ticket is almost impossible.'],
          ['B', 'Yes, that seems to be the main issue. Next, limits on cruise ships.'],
          ['A', 'Some people claim they’ve hurt local businesses, but the research I found showed a real improvement in the environment, especially the air and water quality in the harbour.'],
          ['B', 'Good. Then there’s the kind of system Bhutan uses, where every visitor pays a fixed amount for each day they stay.'],
          ['A', 'Some critics say it’s cut visitor numbers too much, but the government actually wants fewer, higher-spending tourists, so that isn’t really a fair criticism. For me, the real point is that it only works in small places. A country with a huge tourism industry couldn’t do it.'],
          ['B', 'Fair enough. What about restrictions on holiday rentals, so that flats go back to local people?'],
          ['A', 'Well, it does seem to work, because rents have come down in some cities. But it’s been very unpopular with residents who were making money from renting out their homes.'],
          ['B', 'So, effective, but unpopular with some locals. And last, promoting off-season travel.'],
          ['A', 'I like the idea, but it isn’t cheap. You need big advertising campaigns to persuade people to travel in winter, and most small towns simply can’t afford them.'],
          ['B', 'So, too expensive for a lot of places. Right, I think we’re nearly there.'],
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
                <tr><th>Device</th><th>How it worked</th><th>Problem</th></tr>
                <tr><td>Sundial</td><td>showed the position of a [[31]]</td><td>did not work at night or when it was [[32]]</td></tr>
                <tr><td>Water clock</td><td>water flowed out of a [[33]] through a small hole</td><td>rate of flow was affected by [[34]]</td></tr>
                <tr><td>Candle clock</td><td>marked with lines; widely used in [[35]]</td><td>candles burned at different speeds</td></tr>
              </table>`,
            answers: {
              31: ['shadow'], 32: ['cloudy'], 33: ['container'], 34: ['temperature'], 35: ['monasteries']
            }
          },
          {
            type: 'gap', from: 36, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Later developments in timekeeping</h4>
                <p><b>Mechanical clocks</b></p>
                <ul>
                  <li>first installed in [[36]] in the late 13th century</li>
                  <li>driven by falling weights and controlled by an escapement</li>
                  <li>early versions often had no [[37]] and simply rang a bell</li>
                </ul>
                <p><b>Pendulum clock</b> (Huygens, 1656)</p>
                <ul><li>accurate to within a [[38]] per day</li></ul>
                <p><b>Marine chronometer</b> (John Harrison)</p>
                <ul><li>allowed sailors to calculate their [[39]] at sea</li></ul>
                <p><b>Railways</b></p>
                <ul><li>local time differences made [[40]] very confusing</li><li>standard time adopted by most companies in 1847</li></ul>
              </div>`,
            answers: {
              36: ['cathedrals'], 37: ['face', 'dial'], 38: ['minute'], 39: ['longitude'], 40: ['timetables']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture on the history of timekeeping. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', 'Good morning. Today we’re going to look at how people have measured time, from the earliest devices to the systems we rely on today. It’s a story that tells us a great deal, not only about technology, but also about how societies have been organised.'],
          ['A', 'Let’s begin with the sundial, one of the oldest timekeeping devices we know of. Examples from ancient Egypt date back more than three thousand years. The principle is simple. A sundial shows the position of a shadow cast by a vertical stick or plate, and that shadow moves as the sun crosses the sky. Of course, sundials had obvious limitations. They were useless at night, and they also failed whenever it was cloudy, which in some parts of the world was much of the year.'],
          ['A', 'To get around this, people developed the water clock. In its simplest form, water flowed slowly out of a container through a small hole near the bottom, and the falling water level, measured against lines on the inside, showed how much time had passed. Water clocks worked day and night, but they weren’t perfect either. The rate of flow changed with temperature, because water becomes thicker and moves more slowly when it’s cold, so a water clock would often run slow in winter.'],
          ['A', 'Another solution was the candle clock. These were candles marked with evenly spaced lines, each representing roughly an hour of burning. They were widely used in monasteries, where monks needed to know when to gather for prayer during the night. The difficulty, naturally, was that candles burned at different speeds depending on draughts and the quality of the wax.'],
          ['A', 'The real turning point came with the mechanical clock. The first examples appeared in Europe in the late thirteenth century, and they were installed in cathedrals rather than in homes or town squares. They were driven by falling weights and controlled by a device called the escapement, which released the energy in small, regular steps. Interestingly, these early clocks often had no face at all. Instead of showing the time, they simply rang a bell at regular intervals to call people to prayer. Even when dials were added, they usually had only an hour hand.'],
          ['A', 'Accuracy was still poor. A good mechanical clock might gain or lose fifteen minutes a day. That changed dramatically in 1656, when the Dutch scientist Christiaan Huygens built the first pendulum clock. Because a pendulum swings at a very regular rate, his clocks were accurate to within about a minute a day, which was a huge improvement.'],
          ['A', 'However, pendulum clocks didn’t work on ships, where the motion of the waves disturbed them. This was a serious problem, because sailors needed accurate time to calculate their longitude, in other words, how far east or west they were. Many ships were lost because of errors in navigation. The answer came from an English carpenter, John Harrison, whose marine chronometers, developed in the eighteenth century, kept accurate time even in rough seas.'],
          ['A', 'Finally, let’s consider the railways. Until the mid-nineteenth century, each town in Britain kept its own local time, based on the position of the sun. Bristol, for example, was about ten minutes behind London. Once trains began connecting these towns, the differences made timetables extremely confusing, and passengers frequently missed their connections. So in 1847, most railway companies adopted a single standard time across the network, and eventually the whole country followed.'],
          ['A', 'Next week, we’ll look at how atomic clocks have taken accuracy to an entirely new level.'],
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
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'Why Do Animals Sleep?',
          html: `
<p><b class="para">A</b> Almost every animal that scientists have studied sleeps in some form, yet the purpose of sleep remains one of biology’s most persistent puzzles. From an evolutionary point of view, sleep appears to be a risky habit. A sleeping animal cannot search for food, look after its young or watch for predators, and for many species these hours of inactivity must come at a considerable cost. The fact that sleep has survived in so many different creatures, from insects to elephants, suggests that its benefits must be substantial.</p>
<p><b class="para">B</b> Before they can compare sleep across species, researchers need a reliable way of recognising it. In humans, sleep is usually identified by recording electrical activity in the brain, but this method cannot be used on many animals, either because their brains are too small or because they are impossible to study in a laboratory. Instead, biologists rely on a set of behavioural signs. A sleeping animal is typically still, adopts a characteristic posture and responds more slowly to sound or touch than when it is awake. Crucially, the state can be reversed quickly, which distinguishes sleep from hibernation or coma. A further sign is that animals deprived of sleep tend to catch up later by sleeping for longer or more deeply, a process known as sleep rebound.</p>
<p><b class="para">C</b> Using these criteria, scientists have found enormous variation in how much animals sleep. Brown bats may sleep for up to twenty hours a day, while adult elephants in the wild have been recorded sleeping for only around two hours. Giraffes are similarly light sleepers, often taking a series of naps lasting just a few minutes each, sometimes while standing up. In general, large plant-eating animals sleep less than meat-eaters, possibly because they must spend so much of the day feeding and because lying down exposes them to attack. A lion that has eaten well, by contrast, can afford to rest for most of the day.</p>
<p><b class="para">D</b> Some of the most remarkable adaptations are found in animals that cannot afford to lose consciousness completely. Dolphins and whales must come to the surface regularly to breathe, and they also need to remain alert to danger. Their solution is unihemispheric sleep, in which one half of the brain sleeps while the other remains awake. During this time, the eye connected to the waking half stays open, and the animal can continue to swim slowly and rise to the surface for air. After a while, the two halves of the brain swap roles. Young dolphins appear to manage on this kind of sleep alone for several weeks after birth, a period in which constant movement helps to keep them warm and away from predators.</p>
<p><b class="para">E</b> Birds use a similar strategy. In one study of mallard ducks resting in a row, the birds at either end kept the eye facing away from the group open far more often than those in the middle, as if they were guarding the edge of the flock against predators. More recently, researchers attached small recording devices to frigatebirds, which can spend weeks flying over the ocean without landing. They discovered that the birds did sleep in flight, sometimes with both halves of the brain at once, but for less than an hour a day in total, compared with more than twelve hours a day when they were back on land.</p>
<p><b class="para">F</b> Perhaps the most surprising discovery is that sleep may not require a brain at all. The upside-down jellyfish is a simple creature with a scattered network of nerves but no central brain. Researchers noticed that it became less active at night: its regular pulsing slowed down, and it was slower to respond when food was dropped nearby. When the jellyfish were kept awake by pulses of water during the night, they were noticeably less active the following day. In other words, the animal met all the behavioural criteria for sleep. This suggests that sleep evolved very early, long before complex brains, and that its original function may be simpler than was previously thought.</p>
<p><b class="para">G</b> Exactly what that function is remains open to debate. One leading theory proposes that sleep allows the brain to clear away waste products that build up during waking hours. Another argues that sleep helps to strengthen useful connections between nerve cells while weakening unimportant ones, a process that supports learning and memory. A third view emphasises energy: by sleeping, an animal reduces its need for food at times when finding it would be difficult. Many scientists now believe that sleep is unlikely to have a single purpose, and that it has taken on different roles in different animals over millions of years.</p>`
        },
        groups: [
          {
            type: 'match', from: 1, to: 4,
            instr: 'Reading Passage 1 has seven paragraphs, <b>A–G</b>.<br>Which paragraph contains the following information?<br>Write the correct letter, <b>A–G</b>.',
            boxTitle: 'Paragraphs',
            options: [
              { k: 'A', t: 'Paragraph A' }, { k: 'B', t: 'Paragraph B' }, { k: 'C', t: 'Paragraph C' },
              { k: 'D', t: 'Paragraph D' }, { k: 'E', t: 'Paragraph E' }, { k: 'F', t: 'Paragraph F' },
              { k: 'G', t: 'Paragraph G' }
            ],
            questions: [
              { n: 1, text: 'an example of an animal that sleeps in many brief periods', answer: 'C' },
              { n: 2, text: 'evidence of sleep in a creature without a central brain', answer: 'F' },
              { n: 3, text: 'a description of the signs used to identify sleep in animals', answer: 'B' },
              { n: 4, text: 'an explanation of why some birds keep one eye open while resting', answer: 'E' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 5, to: 9,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 5, text: 'Recording brain activity is a practical way of identifying sleep in most animal species.', answer: 'FALSE' },
              { n: 6, text: 'Sleep differs from hibernation in how quickly an animal can return to its normal state.', answer: 'TRUE' },
              { n: 7, text: 'Brown bats sleep for longer than any other mammal.', answer: 'NOT GIVEN' },
              { n: 8, text: 'Meat-eating animals generally sleep less than plant-eating animals.', answer: 'FALSE' },
              { n: 9, text: 'Frigatebirds sleep for much longer on land than they do while flying.', answer: 'TRUE' }
            ]
          },
          {
            type: 'gap', from: 10, to: 13,
            instr: 'Complete the summary below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>Sleep in dolphins</h4>
                <p>Dolphins cannot sleep in the same way as humans because they must regularly come to the surface to [[10]] and they need to stay alert to danger. Instead, they use a form of rest called [[11]], in which only one half of the brain sleeps at a time. The eye linked to the waking half of the brain remains [[12]]. Newborn dolphins depend on this type of sleep for several weeks, since constant movement keeps them [[13]] and safe from predators.</p>
              </div>`,
            answers: {
              10: ['breathe'], 11: ['unihemispheric sleep', 'unihemispheric'], 12: ['open'], 13: ['warm']
            }
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'The Battery Behind the Electric Car',
          html: `
<p><b class="para">A</b> When people discuss electric vehicles, conversation tends to turn to range, charging points and government incentives. Yet the single component that does most to determine whether an electric car succeeds is one that drivers rarely see: the battery pack beneath the floor. For much of the past decade, the battery has accounted for between a quarter and a third of the total cost of building an electric car. As a result, it largely decides the price at which the vehicle can be sold, and therefore whether ordinary households can afford it. Manufacturers that control the supply and cost of batteries are, in effect, controlling the future of the industry.</p>
<p><b class="para">B</b> Almost all modern electric cars rely on lithium-ion technology, the same basic chemistry found in mobile phones and laptops. A lithium-ion cell has two electrodes, a cathode and an anode, separated by a liquid known as an electrolyte. During charging, lithium ions travel from the cathode to the anode, where they are stored; when the car is driven, they flow back again, releasing energy that powers the motor. The amount of energy a cell can hold for a given weight, known as its energy density, is critical. A battery with higher energy density allows a car to travel further without becoming heavier, which in turn improves efficiency.</p>
<p><b class="para">C</b> The most striking development of recent years has been the fall in cost. In 2010, a battery pack cost well over one thousand US dollars for every kilowatt-hour of storage. By the early 2020s, the figure had fallen to below one hundred and fifty dollars, a reduction of almost ninety per cent. Economists point to two main causes. The first is scale: as manufacturers built enormous factories, sometimes called gigafactories, the cost of producing each cell dropped sharply. The second is steady improvement in cell design, which has allowed engineers to pack more energy into the same space while using less expensive material. Lower labour costs, often assumed to be important, appear to have played only a minor role, since modern battery production is highly automated.</p>
<p><b class="para">D</b> However, the success of the battery has raised difficult questions about where its ingredients come from. Many lithium-ion cathodes contain cobalt, a large share of which is mined in the Democratic Republic of the Congo, where reports of unsafe working conditions have caused international concern. Lithium itself is often extracted from salt flats in South America by pumping underground brine into vast evaporation ponds, a process that uses large amounts of water in some of the driest regions on Earth. Local farming communities have argued that this threatens their livelihoods, and some governments have begun to demand a greater share of the profits.</p>
<p><b class="para">E</b> Partly in response, manufacturers have been turning to chemistries that reduce or eliminate the need for scarce metals. Lithium iron phosphate batteries contain no cobalt or nickel. They store less energy than conventional designs, but they are cheaper, last for more charging cycles and are considered less likely to overheat, which has made them popular for smaller city cars. Sodium-ion batteries, which replace lithium with an element found in ordinary salt, are at an earlier stage but could prove valuable where cost matters more than range. Further ahead are solid-state batteries, which use a solid material instead of a liquid electrolyte. Their supporters claim that they could be charged much faster and would be far less likely to catch fire, although producing them reliably in large quantities remains a significant challenge.</p>
<p><b class="para">F</b> A final question concerns what happens when a battery reaches the end of its life in a vehicle. Car batteries are generally replaced when they can hold around seventy to eighty per cent of their original charge, but this still leaves considerable capacity. Increasingly, old packs are being given a second life as stationary storage, for example storing electricity generated by solar panels during the day so that it can be used in the evening. When a battery can no longer be used at all, recycling plants can recover a high proportion of its valuable metals. If recycling becomes widespread, some analysts believe that old batteries could eventually supply a substantial part of the materials needed for new ones, reducing the pressure on mines.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 19,
            instr: 'Reading Passage 2 has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Giving used batteries a further purpose' },
              { k: 'ii', t: 'Government subsidies for buyers' },
              { k: 'iii', t: 'The part that largely decides a vehicle’s price' },
              { k: 'iv', t: 'Concerns over the sources of key materials' },
              { k: 'v', t: 'Why drivers remain unconvinced' },
              { k: 'vi', t: 'A simple account of how the technology works' },
              { k: 'vii', t: 'Alternatives that depend less on rare metals' },
              { k: 'viii', t: 'A dramatic drop in production costs' },
              { k: 'ix', t: 'The problem of cold weather' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'iii' },
              { n: 15, text: 'Paragraph B', answer: 'vi' },
              { n: 16, text: 'Paragraph C', answer: 'viii' },
              { n: 17, text: 'Paragraph D', answer: 'iv' },
              { n: 18, text: 'Paragraph E', answer: 'vii' },
              { n: 19, text: 'Paragraph F', answer: 'i' }
            ]
          },
          {
            type: 'multi', from: 20, to: 21, ns: [20, 21],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> factors does the writer give as the main reasons for the fall in battery costs?',
            options: [
              { k: 'A', t: 'the construction of very large factories' },
              { k: 'B', t: 'government controls on prices' },
              { k: 'C', t: 'improvements in the design of cells' },
              { k: 'D', t: 'cheaper electricity for manufacturers' },
              { k: 'E', t: 'lower wages for factory workers' }
            ],
            answers: ['A', 'C']
          },
          {
            type: 'multi', from: 22, to: 23, ns: [22, 23],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> claims are made about solid-state batteries?',
            options: [
              { k: 'A', t: 'They could be recharged more quickly.' },
              { k: 'B', t: 'They are already produced in large numbers.' },
              { k: 'C', t: 'They would be safer in terms of fire risk.' },
              { k: 'D', t: 'They are cheaper than lithium iron phosphate batteries.' },
              { k: 'E', t: 'They are mainly suitable for small city cars.' }
            ],
            answers: ['A', 'C']
          },
          {
            type: 'gap', from: 24, to: 26,
            instr: 'Complete the sentences below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <p class="sent"><b>24</b> When a lithium-ion battery is being charged, lithium ions are stored at the [[24]].</p>
              <p class="sent"><b>25</b> Extracting lithium from South American salt flats requires a great deal of [[25]].</p>
              <p class="sent"><b>26</b> Old car batteries can be used to store energy produced by [[26]] panels.</p>`,
            answers: { 24: ['anode'], 25: ['water'], 26: ['solar'] }
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Rethinking the Silk Road',
          html: `
<p><b class="para">A</b> The phrase ‘Silk Road’ conjures up images of camel caravans carrying bales of precious cloth across thousands of kilometres of desert, from China to the markets of Rome. Yet the term itself is surprisingly modern. It was coined in 1877 by the German geographer Ferdinand von Richthofen, who was surveying possible railway routes across China, and it only entered popular use in the twentieth century. People who travelled these routes in ancient and medieval times would not have recognised the name, nor would they have thought of themselves as using a single road. The romantic image, in other words, tells us more about nineteenth-century European imaginations than about the past, and it has tended to obscure a more complex and, in some ways, more interesting reality.</p>
<p><b class="para">B</b> The first difficulty lies in the word ‘road’. There was never one fixed highway linking East and West, but rather a shifting network of tracks, mountain passes and oasis towns, whose importance rose and fell with political conditions, climate and access to water. According to the historian Elena Moraes, it is more accurate to speak of a web of overlapping regional circuits than of a road. Few goods, she argues, travelled the full distance in the hands of one merchant. Instead they moved in stages, bought and sold many times over, so that a piece of silk might change owners a dozen times before it reached the Mediterranean, its price rising at every step.</p>
<p><b class="para">C</b> Nor was silk necessarily the most significant commodity. Documents preserved by the dry desert air at sites such as Dunhuang and Turfan in western China reveal a picture dominated by everyday local exchange: grain, horses, ordinary cloth, medicines and paper. Kenji Arai, who has catalogued several thousand of these documents, concludes that the volume of long-distance luxury trade was modest. In his view, many oasis communities were largely self-sufficient, and the arrival of a large caravan was a notable event rather than a routine one. Silk itself frequently functioned less as merchandise than as money: Chinese soldiers stationed on the western frontier were often paid in bolts of cloth, which they then spent in local markets.</p>
<p><b class="para">D</b> If the quantity of goods was smaller than once believed, the movement of ideas was arguably far greater. Buddhism spread from India into Central Asia and China along these routes, carried by monks and merchants alike, and Christianity, Manichaeism and later Islam followed similar paths. Technologies travelled too: papermaking, which originated in China, had reached Samarkand by the eighth century and from there spread to the Islamic world and eventually to Europe. Leila Haddad regards this transfer of knowledge, rather than the trade in luxuries, as the network’s most lasting legacy. She stresses, however, that ideas rarely arrived intact. They were reinterpreted, combined with local traditions and sometimes transformed almost beyond recognition, so that the Buddhism of eastern China, for instance, differed markedly from that of its Indian origins.</p>
<p><b class="para">E</b> Central to these exchanges were communities of intermediaries who specialised in long-distance commerce. The best known are the Sogdians, an Iranian-speaking people from the region around Samarkand, who established trading settlements across Central Asia and into China between the fourth and eighth centuries. A bundle of letters written by Sogdian merchants and found in a watchtower near Dunhuang reveals a sophisticated commercial network founded on family connections and mutual trust. Samuel Okoro contends that the Sogdians owed their success less to any advantage in transport than to their command of several languages and their ease in moving between cultures. They were, in his phrase, ‘professional translators of goods’.</p>
<p><b class="para">F</b> The overland routes also faced growing competition from the sea. By the ninth century, ships loaded with ceramics, spices and textiles were sailing regularly between the ports of southern China, South-East Asia, India and the Persian Gulf. A single vessel could carry far more cargo than a caravan of camels, and at considerably lower cost per item. The maritime archaeologist Marcus Brandt maintains that historians have long underestimated these sea lanes simply because shipwrecks are harder to locate than desert manuscripts, so that the surviving evidence has favoured the land routes. The excavation of a ninth-century wreck off the coast of Indonesia, which contained some sixty thousand pieces of Chinese pottery, has done much to correct this imbalance.</p>
<p><b class="para">G</b> None of this means that the Silk Road was unimportant. Rather, the revised picture suggests that its significance lay not in the scale of its commerce but in the connections it created between distant societies, connections that were slow, indirect and often invisible to those who took part in them. A merchant in Samarkand did not need to know where his silk had come from, or where it would end up, for the network to function. Some scholars have proposed abandoning the term altogether. That seems unnecessary. ‘Silk Road’ remains a convenient shorthand, provided it is understood as a metaphor for a network rather than as a description of a road.</p>`
        },
        groups: [
          {
            type: 'match', from: 27, to: 31,
            instr: 'Look at the following statements (Questions 27–31) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–E</b>.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'Elena Moraes' },
              { k: 'B', t: 'Kenji Arai' },
              { k: 'C', t: 'Samuel Okoro' },
              { k: 'D', t: 'Leila Haddad' },
              { k: 'E', t: 'Marcus Brandt' }
            ],
            questions: [
              { n: 27, text: 'The type of evidence that has survived has distorted historians’ view of trade.', answer: 'E' },
              { n: 28, text: 'Most goods passed through the hands of many different traders.', answer: 'A' },
              { n: 29, text: 'Linguistic and cultural skills were the key to commercial success.', answer: 'C' },
              { n: 30, text: 'Beliefs and knowledge were altered as they moved from place to place.', answer: 'D' },
              { n: 31, text: 'Many settlements along the routes rarely saw large groups of merchants.', answer: 'B' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 32, to: 36,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 32, text: 'Medieval travellers thought of the routes they used as a single road.', answer: 'NO' },
              { n: 33, text: 'More ideas than goods may have travelled along the routes.', answer: 'YES' },
              { n: 34, text: 'Sea voyages were more dangerous than overland journeys.', answer: 'NOT GIVEN' },
              { n: 35, text: 'Ships offered a cheaper way of transporting goods than camels.', answer: 'YES' },
              { n: 36, text: 'The term ‘Silk Road’ should no longer be used.', answer: 'NO' }
            ]
          },
          {
            type: 'mc', from: 37, to: 40,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 37, text: 'The writer mentions Ferdinand von Richthofen in paragraph A in order to', options: [
                { k: 'A', t: 'show that the name ‘Silk Road’ is relatively recent.' },
                { k: 'B', t: 'explain why railways were built across China.' },
                { k: 'C', t: 'praise early European research on Asian trade.' },
                { k: 'D', t: 'prove that silk reached Rome by land.' }], answer: 'A' },
              { n: 38, text: 'According to paragraph C, the documents found at Dunhuang and Turfan suggest that', options: [
                { k: 'A', t: 'silk was the main product traded in the region.' },
                { k: 'B', t: 'most trade involved ordinary goods exchanged locally.' },
                { k: 'C', t: 'oasis towns depended on caravans for their food.' },
                { k: 'D', t: 'luxury trade increased over time.' }], answer: 'B' },
              { n: 39, text: 'What does the writer say about Chinese soldiers on the western frontier?', options: [
                { k: 'A', t: 'They protected merchants from attack.' },
                { k: 'B', t: 'They were responsible for producing silk.' },
                { k: 'C', t: 'They received silk as a form of payment.' },
                { k: 'D', t: 'They were forbidden to trade in local markets.' }], answer: 'C' },
              { n: 40, text: 'What is the writer’s main conclusion in paragraph G?', options: [
                { k: 'A', t: 'The importance of the Silk Road has been greatly exaggerated.' },
                { k: 'B', t: 'Merchants were well informed about the origins of their goods.' },
                { k: 'C', t: 'The routes mattered mainly because of the links they formed between societies.' },
                { k: 'D', t: 'Historians now agree on how the network should be described.' }], answer: 'C' }
            ]
          }
        ]
      }
    ]
  },

  /* ===================================================== READING GENERAL TRAINING */
  readingGeneral: {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
        range: [1, 14],
        passage: {
          title: 'Westfield Community Centre',
          html: `
<h3>Noticeboard</h3>
<p><b class="para">A</b> <b>Yoga for Beginners</b><br>Gentle classes every Tuesday at 10 a.m. in the Garden Room. No experience needed. Please bring your own mat, as we have only a few spares. £5 per session, but your first class is free, so come along and see if it suits you.</p>
<p><b class="para">B</b> <b>Lost Property</b><br>Items left in the building are kept at reception for four weeks. After that, anything that has not been collected will be donated to the charity shop on Station Road. We currently have a large number of umbrellas and children’s water bottles. Please ask at the desk.</p>
<p><b class="para">C</b> <b>Volunteer Drivers Wanted</b><br>Could you spare a few hours a month to take older residents to hospital and doctor’s appointments? You must have held a full driving licence for at least three years. All petrol costs will be paid back to you. Contact Margaret on 01632 960 418.</p>
<p><b class="para">D</b> <b>Hall Hire</b><br>Our main hall can be hired for birthday parties, meetings and other private events. Bookings must be made at least two weeks in advance. The hall is not available for hire on Sundays. A deposit of £50 is required, which will be refunded if the hall is left clean and undamaged.</p>
<p><b class="para">E</b> <b>Repair Café</b><br>Last Saturday of every month, 10 a.m.–1 p.m. Bring your broken toasters, lamps, torn clothes and bicycles, and our volunteers will try to fix them while you have a cup of tea. Free of charge, although donations are welcome. Sorry, we cannot take large appliances such as fridges or washing machines.</p>
<p><b class="para">F</b> <b>Homework Club</b><br>Monday to Thursday, 3.30–5 p.m., in the Library Room. A quiet place to study with help from qualified teachers. Open to children aged 8–14. A parent or carer must sign children in on arrival and sign them out when they leave.</p>
<h3>Harbourside Food Festival – Programme</h3>
<p><b>Saturday 14 and Sunday 15 June, Harbourside Park</b></p>
<p>Entry to the festival is free for everyone. To try food at the stalls, buy tasting tokens (£1 each) from the information tents, where both cash and card payments are accepted.</p>
<p><b>Saturday</b><br>11.00 Official opening by the mayor<br>12.00–3.00 Cooking demonstrations by local chefs in the Demo Tent. Seats are available on a first-come, first-served basis; there is no need to book.<br>4.00 Cupcake decorating for children (places must be booked online in advance; £3 per child)</p>
<p><b>Sunday</b><br>9.00 onwards Farmers’ market<br>1.00 Chilli-eating contest (over-18s only)<br>2.00–6.00 Live music on the harbour stage</p>
<p><b>Getting here</b><br>There is no parking at the park. A shuttle bus runs every 15 minutes from the railway station, and there are bicycle racks at the north gate.</p>
<p>Dogs are welcome on leads, but they are not permitted inside any of the food tents.</p>`
        },
        groups: [
          {
            type: 'match', from: 1, to: 7,
            instr: 'Look at the six notices, <b>A–F</b>, on the community centre noticeboard.<br>Which notice mentions the following?<br>Write the correct letter, <b>A–F</b>.<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Notices',
            options: [
              { k: 'A', t: 'Yoga for Beginners' }, { k: 'B', t: 'Lost Property' }, { k: 'C', t: 'Volunteer Drivers Wanted' },
              { k: 'D', t: 'Hall Hire' }, { k: 'E', t: 'Repair Café' }, { k: 'F', t: 'Homework Club' }
            ],
            questions: [
              { n: 1, text: 'repayment of travel expenses', answer: 'C' },
              { n: 2, text: 'a requirement for adults to record when children arrive and leave', answer: 'F' },
              { n: 3, text: 'something that costs nothing on the first occasion', answer: 'A' },
              { n: 4, text: 'money that will be returned under certain conditions', answer: 'D' },
              { n: 5, text: 'items that will be given away after a fixed period', answer: 'B' },
              { n: 6, text: 'a kind of item that cannot be accepted', answer: 'E' },
              { n: 7, text: 'a minimum period of experience', answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 8, to: 14,
            instr: 'Do the following statements agree with the information given in the food festival programme?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 8, text: 'Visitors must pay to enter the festival.', answer: 'FALSE' },
              { n: 9, text: 'Tasting tokens can be bought with a bank card.', answer: 'TRUE' },
              { n: 10, text: 'Seats for the cooking demonstrations should be reserved beforehand.', answer: 'FALSE' },
              { n: 11, text: 'The cupcake decorating session is suitable for children under five.', answer: 'NOT GIVEN' },
              { n: 12, text: 'People under 18 may take part in the chilli-eating contest.', answer: 'FALSE' },
              { n: 13, text: 'The shuttle bus from the railway station is free of charge.', answer: 'NOT GIVEN' },
              { n: 14, text: 'Dogs are not allowed in the food tents.', answer: 'TRUE' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Norbridge Logistics – Staff Information',
          html: `
<h3>Requesting Flexible Working</h3>
<p>Norbridge Logistics recognises that a better balance between work and home life can benefit both staff and the company. Any employee who has completed their probation period may ask to change their working pattern. Common arrangements include part-time hours, compressed hours (working full-time hours over four days instead of five), job sharing and working from home on some days.</p>
<p><b>How to apply</b><br>Complete form FW1, available on the staff intranet, and send it to your line manager. In the form, you should explain the change you would like, the date you would like it to start, and how you think it would affect your team. Applications that do not address this last point are often delayed, so please consider it carefully.</p>
<p><b>What happens next</b><br>Your manager will arrange a meeting with you within 14 days of receiving your form to discuss the request. You may bring a colleague to this meeting if you wish. A final decision will normally be given within two months. Where it is unclear whether a new arrangement will work, the company may agree to a trial period of three months before making the change permanent.</p>
<p><b>If your request is refused</b><br>Your manager must give you the business reasons for the decision in writing. If you are not satisfied, you may appeal within 10 working days by writing to the Human Resources department. Please note that staff may make only one flexible working request in any 12-month period.</p>
<h3>Staff Training Courses – Spring Programme</h3>
<p><b class="para">A</b> <b>Health and Safety Refresher</b><br>A half-day session held in the warehouse training room. All warehouse and loading staff are required to attend once every two years. Covers safe lifting, fire procedures and the reporting of accidents.</p>
<p><b class="para">B</b> <b>Spreadsheets for Beginners</b><br>This course is completed entirely online and can be done at your own pace over four weeks. Ideal for office staff who want to build confidence with data. A certificate is issued on completion.</p>
<p><b class="para">C</b> <b>Leading a Team</b><br>A two-day course for staff who have recently been promoted to supervisor. Applicants need the approval of their department manager before booking. The course takes place at the Riverside Hotel, ten minutes from our main site, and lunch is provided.</p>
<p><b class="para">D</b> <b>First Aid at Work</b><br>A three-day course run by an external trainer. Successful participants receive a qualification that is valid for three years, after which a shorter renewal course must be taken. To ensure cover across the company, a maximum of two people per department can attend each course.</p>
<p><b class="para">E</b> <b>Customer Communication</b><br>A one-day workshop that uses role-play to practise handling difficult telephone calls and complaints. Strongly recommended for anyone in the customer service team. The workshop is repeated every three months.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 20,
            instr: 'Complete the notes below.<br>Choose <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Flexible working: key points</h4>
                <ul>
                  <li>Who can apply: staff who have finished their [[15]]</li>
                  <li>Form FW1 must explain the likely effect of the change on the employee’s [[16]]</li>
                  <li>Manager organises a [[17]] within 14 days</li>
                  <li>A new arrangement may first be tested for [[18]]</li>
                  <li>Appeals: write to HR within [[19]] working days</li>
                  <li>Limit: one request every [[20]] months</li>
                </ul>
              </div>`,
            answers: {
              15: ['probation period', 'probation'], 16: ['team'], 17: ['meeting'],
              18: ['three months', '3 months'], 19: ['10', 'ten'], 20: ['12', 'twelve']
            }
          },
          {
            type: 'match', from: 21, to: 27,
            instr: 'Look at the five training courses, <b>A–E</b>.<br>For which course are the following statements true?<br>Write the correct letter, <b>A–E</b>.<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Training Courses',
            options: [
              { k: 'A', t: 'Health and Safety Refresher' },
              { k: 'B', t: 'Spreadsheets for Beginners' },
              { k: 'C', t: 'Leading a Team' },
              { k: 'D', t: 'First Aid at Work' },
              { k: 'E', t: 'Customer Communication' }
            ],
            questions: [
              { n: 21, text: 'It does not involve attending in person.', answer: 'B' },
              { n: 22, text: 'Certain employees must take it at regular intervals.', answer: 'A' },
              { n: 23, text: 'Participants need permission from a senior colleague.', answer: 'C' },
              { n: 24, text: 'The number of participants from each department is limited.', answer: 'D' },
              { n: 25, text: 'It involves acting out situations.', answer: 'E' },
              { n: 26, text: 'It is held away from the company’s premises.', answer: 'C' },
              { n: 27, text: 'It leads to a qualification that has an expiry date.', answer: 'D' }
            ]
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'Lights Along the Coast',
          html: `
<p><b class="para">A</b> For as long as people have sailed, they have needed some way of finding their way safely back to land. The most famous early answer was the Pharos of Alexandria, completed in the third century BC on a small island at the entrance to the city’s harbour. Standing perhaps a hundred metres high, it was one of the tallest structures in the ancient world, and a fire burned at its summit to guide ships at night. It was counted among the Seven Wonders of the Ancient World. Over many centuries, however, it was badly damaged by earthquakes, and by the fifteenth century it had collapsed. In 1477 a fort was built on the site, partly using stones from the ruined tower.</p>
<p><b class="para">B</b> Elsewhere, lighthouses remained modest for a very long time. The Romans built a number of towers along the coasts of their empire, including one at Dover whose remains can still be seen today. In medieval Europe, lights were often kept by monks or by local landowners, who burned wood, coal or candles in an open fire or a simple lantern. Such lights were weak, smoky and easily blown out. Sailors could rarely see them from far away, and on stormy nights, when they were needed most, they frequently failed altogether.</p>
<p><b class="para">C</b> The greatest engineering challenge was building on isolated rocks far out at sea, where the danger to ships was greatest. The Eddystone reef, some twenty kilometres off the coast of south-west England, shows how difficult this could be. The first lighthouse there, a wooden tower completed in 1698, was swept away by a great storm only five years later, killing its designer, who was carrying out repairs at the time. The breakthrough came in 1759, when the engineer John Smeaton completed a new tower of granite blocks cut to lock tightly into one another. He based its shape on the trunk of an oak tree, broad at the base and narrowing towards the top, so that waves would be deflected rather than meeting a flat wall. Smeaton’s design became the model for rock lighthouses around the world.</p>
<p><b class="para">D</b> Improving the light itself was a separate problem. Mirrors helped, but much of the light was still wasted. In 1822, the French physicist Augustin-Jean Fresnel proposed a new kind of lens made of concentric rings of glass prisms, each angled to bend the light into a single powerful beam. Because it did not need to be one thick, solid piece, the Fresnel lens used much less glass than earlier designs and was lighter and cheaper to make. A large Fresnel lens could send a beam that was visible more than thirty kilometres away, and within a few decades such lenses had been installed in lighthouses across the globe.</p>
<p><b class="para">E</b> For the people who looked after the lights, the work was demanding and often lonely. Keepers took turns to stay awake through the night, making sure the lamp never went out. Before electricity, they had to trim the wicks of the oil lamps every few hours to stop them smoking, which earned them the nickname ‘wickies’. On remote rock stations, keepers might spend weeks at a time with only two or three colleagues, cut off from their families whenever bad weather prevented the relief boat from landing. On shore stations, by contrast, whole families sometimes lived at the lighthouse, and children often helped their parents with the daily tasks.</p>
<p><b class="para">F</b> During the twentieth century, electric lamps replaced oil, and lights began to be switched on and off automatically. Gradually, the keepers were no longer needed. In the United Kingdom, the last keepers left their lighthouse in 1998, ending a tradition that had lasted for centuries. Today, most ships rely on satellite navigation, so lighthouses have become mainly a backup system in case electronic equipment fails. Many still operate, monitored from distant control centres, while others have been turned into museums or holiday cottages, allowing visitors to experience a little of the keepers’ isolated way of life.</p>`
        },
        groups: [
          {
            type: 'match', from: 28, to: 33,
            instr: 'The text has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'A hard and isolated way of life' },
              { k: 'ii', t: 'The most dangerous coast in Europe' },
              { k: 'iii', t: 'A wonder of the ancient world' },
              { k: 'iv', t: 'How lighthouses are paid for today' },
              { k: 'v', t: 'Early lights that could not be relied on' },
              { k: 'vi', t: 'Machines take over from people' },
              { k: 'vii', t: 'A scientific advance in focusing light' },
              { k: 'viii', t: 'Designing towers to survive the waves' }
            ],
            questions: [
              { n: 28, text: 'Paragraph A', answer: 'iii' },
              { n: 29, text: 'Paragraph B', answer: 'v' },
              { n: 30, text: 'Paragraph C', answer: 'viii' },
              { n: 31, text: 'Paragraph D', answer: 'vii' },
              { n: 32, text: 'Paragraph E', answer: 'i' },
              { n: 33, text: 'Paragraph F', answer: 'vi' }
            ]
          },
          {
            type: 'match', from: 34, to: 37,
            instr: 'Complete each sentence with the correct ending, <b>A–G</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'the shape of a tree.' },
              { k: 'B', t: 'far less glass than previous lenses.' },
              { k: 'C', t: 'they regularly had to cut the lamp wicks.' },
              { k: 'D', t: 'are now mainly used as a reserve system.' },
              { k: 'E', t: 'have been moved further inland.' },
              { k: 'F', t: 'they lived with their families on rock stations.' },
              { k: 'G', t: 'the design of Roman towers.' }
            ],
            questions: [
              { n: 34, text: 'Smeaton’s Eddystone lighthouse was based on', answer: 'A' },
              { n: 35, text: 'The Fresnel lens required', answer: 'B' },
              { n: 36, text: 'Lighthouse keepers were known as ‘wickies’ because', answer: 'C' },
              { n: 37, text: 'Because of satellite navigation, lighthouses', answer: 'D' }
            ]
          },
          {
            type: 'gap', from: 38, to: 40,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>The Pharos of Alexandria</h4>
                <p>The Pharos was built on an island at the entrance to the harbour of Alexandria. At the top of the tower, a [[38]] was kept burning so that ships could find their way at night. Over the centuries, the structure suffered serious damage from [[39]], and it had fallen down by the fifteenth century. Some of its stones were later used to construct a [[40]] in 1477.</p>
              </div>`,
            answers: { 38: ['fire'], 39: ['earthquakes'], 40: ['fort'] }
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
<p><b>The diagram below shows the stages in the production of olive oil.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'process',
          title: 'How olive oil is produced',
          steps: [
            'Olives harvested from trees (October–December) by hand or by machines that shake the branches',
            'Leaves and twigs removed; olives washed in cold water',
            'Olives crushed (with stones) into a paste by steel hammers or stone mills',
            'Paste stirred slowly for 30–40 minutes so that small drops of oil join together',
            'Paste spun in a centrifuge: oil separated from water and solid waste',
            'Solid waste dried and sold as fuel or fertiliser',
            'Oil left to settle and then filtered',
            'Oil stored in stainless steel tanks at 15–18°C',
            'Oil bottled in dark glass, labelled and sent to shops'
          ],
          cycle: false
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>Some people believe that public transport, such as buses and trains, should be free for everyone, paid for by the government. Others argue that passengers should continue to pay for the services they use.</b></p>
<p><b>Discuss both these views and give your own opinion.</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  },

  /* ===================================================== WRITING GENERAL TRAINING */
  writingGeneral: {
    parts: [
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on this task. Write at least 150 words.',
        minWords: 150,
        prompt: `
<p>You would like to take some time off work next month for an important personal reason.</p>
<p>Write a letter to your manager. In your letter</p>
<ul>
<li>explain why you need time off</li>
<li>say how much time you need and when</li>
<li>suggest how your work could be covered while you are away</li>
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
<p><b>In many countries, more and more people are choosing to buy second-hand clothes, furniture and electronic goods instead of new ones.</b></p>
<p><b>Why is this happening? Is it a positive or negative development?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  }
};
IELTS.add('listening', 5, T.listening);
IELTS.add('reading-academic', 5, T.readingAcademic);
IELTS.add('reading-general', 5, T.readingGeneral);
IELTS.add('writing-academic', 5, T.writingAcademic);
IELTS.add('writing-general', 5, T.writingGeneral);
})();
