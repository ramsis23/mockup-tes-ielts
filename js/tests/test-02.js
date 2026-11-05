/* Konten tes 2 (orisinal, dibuat khusus untuk latihan ini).
   Format audio: ['N', teks] = narator, ['A'|'B', teks] = pembicara, ['P', detik] = jeda. */
(() => {
  const TF_INSTR = 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this';

  /* ===================================================== LISTENING */
  const listening = {
    parts: [
      /* ---------- Part 1: car rental ---------- */
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
                <h4>SWIFT CAR HIRE<br><span>Booking Form</span></h4>
                <table class="form-table">
                  <tr><td>Customer name:</td><td>Daniel [[1]]</td></tr>
                  <tr><td>Collection date:</td><td>[[2]] July</td></tr>
                  <tr><td>Collection point:</td><td>[[3]] Street branch</td></tr>
                  <tr><td>Rental period:</td><td>[[4]] days</td></tr>
                  <tr><td>Type of car:</td><td>[[5]]</td></tr>
                  <tr><td>Extras:</td><td>child [[6]]</td></tr>
                  <tr><td>Daily rate:</td><td>£ [[7]]</td></tr>
                  <tr><td>Insurance:</td><td>[[8]] cover</td></tr>
                  <tr><td>Documents to bring:</td><td>driving licence, credit card and [[9]]</td></tr>
                  <tr><td>Booking reference:</td><td>CR [[10]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['whitcombe'], 2: ['23', '23rd', 'twenty-third', 'twenty third'], 3: ['harbour', 'harbor'],
              4: ['10', 'ten'], 5: ['estate', 'estate car'], 6: ['seat'],
              7: ['38', 'thirty-eight', 'thirty eight'], 8: ['full'], 9: ['passport'], 10: ['50974']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a man telephoning a car hire company to book a car for a holiday. First, you have some time to look at questions 1 to 5.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 1 to 5.'],
          ['B', 'Good afternoon, Swift Car Hire, Priya speaking. How can I help you?'],
          ['A', "Hi. I'd like to book a car for a family holiday next month, please."],
          ['B', "Certainly. I'll open a new booking for you. Can I take your name first?"],
          ['A', "Yes, it's Daniel Whitcombe."],
          ['B', 'And how do you spell your surname?'],
          ['A', 'W, H, I, T, C, O, M, B, E.'],
          ['B', 'W, H, I, T, C, O, M, B, E. Thank you, Mr Whitcombe. And when would you like to collect the car?'],
          ['A', "Well, we fly in on the twenty-first of July, but we're staying with my sister for a couple of days first, so we won't actually need it until the twenty-third."],
          ['B', 'So collection on the twenty-third of July. And where would you like to pick it up? We have a desk at the airport, or there is our branch in the town centre.'],
          ['A', "The airport would normally be easiest, but my sister lives down by the harbour, so the town branch makes more sense. Which street is that on?"],
          ['B', "It's on Harbour Street, just opposite the ferry terminal."],
          ['A', 'Perfect. Harbour Street, then.'],
          ['B', 'And how long will you need the car for?'],
          ['A', "I was going to say nine days, but we've just added an extra night at the end of the trip, so let's make it ten days."],
          ['B', 'Ten days, no problem. Now, what size of car did you have in mind?'],
          ['A', "I was looking at the compact models on your website, but there are four of us and we'll have quite a lot of luggage, so I think we really need an estate."],
          ['B', "That's sensible. The estate cars have a much bigger boot, and they're very comfortable on long journeys."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 6 to 10.'],
          ['B', 'Would you like any extras with the car? We can provide satellite navigation, a roof box or a child seat.'],
          ['A', "We'll use our phones for directions, so we don't need the sat nav. And the estate should have enough room, so no roof box. But our youngest is only three, so we'll need a child seat, please."],
          ['B', "I've added that. It's free of charge on bookings of more than a week."],
          ['A', "Oh, that's good. And what's the daily rate for the estate?"],
          ['B', "Normally it's forty-two pounds a day, but because you're booking for more than seven days, it comes down to thirty-eight pounds a day."],
          ['A', 'Thirty-eight. That sounds fine.'],
          ['B', "Now, insurance. Basic cover is included in the price, but with basic cover you'd have to pay the first eight hundred pounds of any damage. Alternatively, you can choose full cover, which means you pay nothing extra if something happens."],
          ['A', "With the children in the car, I'd rather not take any risks. I'll go for full cover, please."],
          ['B', "Good. When you collect the car, you'll need to bring your driving licence, of course, and the credit card you're paying with. We'll also need to see your passport as a form of identification."],
          ['A', 'Right. Do you need a utility bill or anything like that, to show my address?'],
          ['B', "No, that's not necessary. Just those three things."],
          ['A', 'Okay, great.'],
          ['B', "Finally, let me give you your booking reference. It's C, R, then five, oh, nine, seven, four."],
          ['A', 'C, R, five, oh, nine, seven, four. Got it.'],
          ['B', "You'll also receive an email confirmation within the next hour. Is there anything else I can help you with?"],
          ['A', "No, that's everything. Thanks very much for your help."],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 2: museum volunteer orientation ---------- */
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'match', from: 11, to: 15,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–F</b>, next to Questions 11–15.
              <div class="form-box" style="margin-top:12px">
                <h4>Westmoor Museum – Ground Floor</h4>
                <table class="form-table" style="text-align:center;border:1px solid currentColor">
                  <tr><td style="border:1px solid currentColor;width:25%"><b>A</b></td><td style="border:1px solid currentColor">Egyptian Gallery</td><td style="border:1px solid currentColor"><b>B</b></td><td style="border:1px solid currentColor">Staircase</td></tr>
                  <tr><td style="border:1px solid currentColor">Café</td><td style="border:1px solid currentColor">Main Hall</td><td style="border:1px solid currentColor"><b>C</b></td><td style="border:1px solid currentColor"><b>D</b></td></tr>
                  <tr><td style="border:1px solid currentColor"><b>E</b></td><td style="border:1px solid currentColor">Reception</td><td style="border:1px solid currentColor"><b>F</b></td><td style="border:1px solid currentColor">Gift Shop</td></tr>
                  <tr><td></td><td>▲ Main Entrance</td><td></td><td></td></tr>
                </table>
              </div>`,
            boxTitle: 'Locations on the plan',
            options: [
              { k: 'A', t: 'Location A' },
              { k: 'B', t: 'Location B' },
              { k: 'C', t: 'Location C' },
              { k: 'D', t: 'Location D' },
              { k: 'E', t: 'Location E' },
              { k: 'F', t: 'Location F' }
            ],
            questions: [
              { n: 11, text: 'Volunteers’ room', answer: 'E' },
              { n: 12, text: 'Cloakroom', answer: 'F' },
              { n: 13, text: 'Education Centre', answer: 'A' },
              { n: 14, text: 'First aid room', answer: 'C' },
              { n: 15, text: 'Lost property office', answer: 'D' }
            ]
          },
          {
            type: 'mc', from: 16, to: 18,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 16, text: 'What is the minimum time commitment for volunteers?', options: [
                { k: 'A', t: 'one day every week' },
                { k: 'B', t: 'two shifts a month' },
                { k: 'C', t: 'four hours a week' }], answer: 'B' },
              { n: 17, text: 'The training sessions for new volunteers', options: [
                { k: 'A', t: 'take place when the museum is closed.' },
                { k: 'B', t: 'are led by the museum’s curators.' },
                { k: 'C', t: 'include a short online course.' }], answer: 'A' },
              { n: 18, text: 'If volunteers at the information desk cannot answer a question, they should', options: [
                { k: 'A', t: 'ask the duty supervisor.' },
                { k: 'B', t: 'direct the visitor to the website.' },
                { k: 'C', t: 'write it down in a book.' }], answer: 'C' }
            ]
          },
          {
            type: 'multi', from: 19, to: 20, ns: [19, 20],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> benefits do volunteers receive?',
            options: [
              { k: 'A', t: 'free parking' },
              { k: 'B', t: 'a discount in the café' },
              { k: 'C', t: 'free entry to special exhibitions' },
              { k: 'D', t: 'a reference for future employers' },
              { k: 'E', t: 'an invitation to an annual dinner' }
            ],
            answers: ['C', 'D']
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear the volunteer coordinator at a museum talking to a group of new volunteers. First, you have some time to look at questions 11 to 15.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 15.'],
          ['A', "Good morning, everyone, and thank you all for coming to this orientation session. My name's Rosa Delgado, and I coordinate the volunteer programme here at the Westmoor Museum. We're absolutely delighted to have you on board."],
          ['A', "I'd like to begin by helping you find your way around the ground floor, so please look at the plan you've been given. We're standing at the main entrance now, and directly in front of us is reception."],
          ['A', "The first room you'll need is the volunteers' room. That's where you'll sign in, leave your bags and have your breaks. As you come in through the entrance, it's the room immediately on your left, just below the café. There's a keypad on the door, and I'll give you the code later."],
          ['A', "On the other side of reception, to the right as you come in, between reception and the gift shop, is the cloakroom. Visitors leave their coats and umbrellas there, and some of you will be working in it on busy days."],
          ['A', "Now, if you walk straight through the Main Hall towards the Egyptian Gallery, you'll find the Education Centre. Some of you may have been here before, when it was on the right of the gallery, next to the staircase. That room is now used for storage. The Education Centre has moved to the opposite corner, so it's on the left of the Egyptian Gallery, at the back of the building."],
          ['A', "Next, the first aid room. This is very important. It's on the right-hand side of the Main Hall, the room directly next to the hall, opposite the café. If anyone feels unwell, bring them there and call the duty supervisor."],
          ['A', "And finally, the lost property office. Go past the first aid room towards the east wall, and it's the room in the corner, just above the gift shop. Anything that visitors leave behind should be taken there, with a note of where and when it was found."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 16 to 20.'],
          ['A', "Let me say a little about what we expect from you. Some of our volunteers come in one day every week, which is wonderful, but we don't expect that of everyone. The minimum we ask is two shifts a month. Each shift lasts about four hours, either morning or afternoon."],
          ['A', "Your training will take place on Mondays, when the museum is closed to the public, so you'll have the galleries to yourselves. The sessions are run by our senior volunteers. The curators do give occasional talks, but they don't lead the training. And we've decided against online modules. We find people learn much more face to face."],
          ['A', "Many of you will spend time on the information desk. Please don't worry that you need to know everything. And try not to send every difficult question to the duty supervisor, because they're usually busy out on the gallery floor. Instead, write the visitor's question in the blue book on the desk, together with their email address, and our education team will reply within a few days."],
          ['A', "Now, the benefits. I'm afraid we can't offer free parking, as the car park belongs to the city council, not to us. And because the café is run by a separate company, there's no discount there either, sadly. However, you'll be able to visit all our special exhibitions free of charge, and some of those tickets cost fifteen pounds or more. Also, after six months of volunteering, we'll be very happy to write a reference for you, which many people find useful when they apply for jobs. We used to hold an annual dinner for volunteers, but these days we have a summer picnic in the museum gardens instead."],
          ['A', "Right, let's take a short break, and then I'll show you the volunteers' room."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 3: student sleep survey ---------- */
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
              { n: 21, text: 'What made the students decide to research sleep habits?', options: [
                { k: 'A', t: 'a newspaper article they had read' },
                { k: 'B', t: 'a suggestion from their tutor' },
                { k: 'C', t: 'something they noticed in their classes' }], answer: 'C' },
              { n: 22, text: 'What is the main aim of their survey?', options: [
                { k: 'A', t: 'to identify what prevents students from sleeping well' },
                { k: 'B', t: 'to find links between sleep and exam results' },
                { k: 'C', t: 'to compare students in halls with those living at home' }], answer: 'A' },
              { n: 23, text: 'How will the students distribute the survey?', options: [
                { k: 'A', t: 'by email to all first-year students' },
                { k: 'B', t: 'through a social media group' },
                { k: 'C', t: 'on paper in the library' }], answer: 'B' }
            ]
          },
          {
            type: 'match', from: 24, to: 27,
            instr: 'What do the students decide to do with each section of the survey?<br>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 24–27.',
            boxTitle: 'Decisions',
            options: [
              { k: 'A', t: 'keep it as it is' },
              { k: 'B', t: 'shorten it' },
              { k: 'C', t: 'remove it completely' },
              { k: 'D', t: 'make it optional' },
              { k: 'E', t: 'move it to the end' },
              { k: 'F', t: 'change the wording' }
            ],
            questions: [
              { n: 24, text: 'questions about caffeine', answer: 'B' },
              { n: 25, text: 'the sleep diary', answer: 'D' },
              { n: 26, text: 'personal background questions', answer: 'E' },
              { n: 27, text: 'questions about screen use', answer: 'F' }
            ]
          },
          {
            type: 'gap', from: 28, to: 30,
            instr: 'Complete the sentences below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <p class="sent">The students will test the survey first on Josh’s [[28]].</p>
              <p class="sent">Participants can enter a prize draw to win a bookshop [[29]].</p>
              <p class="sent">The tutor wants to see the results by the end of [[30]].</p>`,
            answers: { 28: ['flatmates', 'flat-mates'], 29: ['voucher'], 30: ['november'] }
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two students, Josh and Maya, planning a survey about the sleep habits of university students. First, you have some time to look at questions 21 to 27.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 27.'],
          ['B', 'Hi Josh. Have you got a few minutes to go over the survey before we send it out?'],
          ['A', "Sure. Actually, I was just remembering how we came up with the idea. It was after I read that newspaper article about teenagers and sleep, wasn't it?"],
          ['B', "Well, you mentioned the article, but it was really about school pupils, so it wasn't that relevant. What convinced me was how many people in our Thursday seminar were half asleep. Some of them could barely keep their eyes open."],
          ['A', "That's true. That's what really made us choose it. Doctor Hughes just said she was happy with whatever topic we picked."],
          ['B', "So, our aim. I know we talked about comparing sleep with people's exam results."],
          ['A', "Yes, but the university won't give us access to students' grades, for privacy reasons, so we can't really do that. And I'd thought about comparing people in halls with people living at home with their parents."],
          ['B', "There aren't enough students living at home on our course for that to work. I think we should keep it simple. The main thing we want to know is what stops students sleeping well. Noise, stress, part-time jobs, that kind of thing."],
          ['A', 'Agreed. Then, how do we get it out to people? Email is the obvious way.'],
          ['B', "Hmm, but nobody reads university emails. The response rate would be terrible. And paper copies in the library would mean typing in all the data ourselves."],
          ['A', "Then the student union's social media group is the best option. It has over four thousand members, and people do actually read the posts."],
          ['B', "Let's do that. Now, I've been through the draft. The caffeine section has twelve questions. Some people suggested we take it out altogether."],
          ['A', "I don't think we should remove it. Coffee and energy drinks are a big part of the picture. But twelve questions is far too many. Let's cut it down to three or four."],
          ['B', 'Fine. What about the sleep diary? Asking people to record their sleep for a whole week is a lot.'],
          ['A', "It is, but the data would be really valuable. What if people can choose whether to do it or not? Anyone who fills it in is a bonus."],
          ['B', "Good idea. And the background questions, age, course, year of study. At the moment they're at the start, and I think they put people off."],
          ['A', "We do need them, though. Let's just put them at the end, after the interesting questions."],
          ['B', "Okay. And finally the questions on screen use. Doctor Hughes said 'screen time' was confusing, because people didn't know whether to include studying on their laptops."],
          ['A', "Right. The questions themselves are fine, we just need to express them more clearly. I'll rewrite them tonight."],
          ['N', 'Before you hear the rest of the discussion, you have some time to look at questions 28 to 30.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 28 to 30.'],
          ['B', 'Before we post it, we should try it out on a small group. Shall we use our seminar group?'],
          ['A', "They already know too much about the project. Why don't we try it on my flatmates? There are six of them, and they're all on different courses."],
          ['B', "Perfect. Your flatmates it is. And to get more people to take part, I thought we could offer some kind of reward."],
          ['A', "We can't afford to pay people. But a prize draw might work."],
          ['B', "Yes, I asked the campus bookshop, and they've agreed to give us a voucher worth thirty pounds. Everyone who completes the survey can enter the draw."],
          ['A', 'Great. And when does Doctor Hughes want the results? I thought it was the end of October.'],
          ['B', "It was, but she's given us longer because of the delay with ethics approval. She wants them by the end of November now."],
          ['A', 'That gives us a bit more breathing space, then.'],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 4: coral reef restoration ---------- */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'gap', from: 31, to: 35,
            instr: 'Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <table class="form-table" style="border:1px solid currentColor">
                <tr><td style="border:1px solid currentColor"><b>Method</b></td><td style="border:1px solid currentColor"><b>Description</b></td></tr>
                <tr><td style="border:1px solid currentColor">Coral gardening</td><td style="border:1px solid currentColor">small pieces of coral grown in underwater [[31]], then attached to the reef</td></tr>
                <tr><td style="border:1px solid currentColor">Micro-fragmenting</td><td style="border:1px solid currentColor">tiny fragments can grow up to [[32]] times faster than normal</td></tr>
                <tr><td style="border:1px solid currentColor">Larval seeding</td><td style="border:1px solid currentColor">larvae raised in tanks, then released under [[33]] placed over the reef</td></tr>
                <tr><td style="border:1px solid currentColor">Artificial structures</td><td style="border:1px solid currentColor">frames made of [[34]] give coral a surface to grow on</td></tr>
                <tr><td style="border:1px solid currentColor">Assisted evolution</td><td style="border:1px solid currentColor">corals chosen from naturally [[35]] waters are bred</td></tr>
              </table>`,
            answers: { 31: ['nurseries'], 32: ['25', 'twenty-five', 'twenty five'], 33: ['nets'], 34: ['steel'], 35: ['warmer'] }
          },
          {
            type: 'gap', from: 36, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Challenges and the future</h4>
                <ul>
                  <li>most projects are small and depend on [[36]]</li>
                  <li>success is often measured by the number of corals planted, not their [[37]]</li>
                  <li>restoration fails unless water [[38]] also improves</li>
                  <li>future: [[39]] may be used to plant coral over large areas</li>
                  <li>long-term survival of reefs requires cutting [[40]] emissions</li>
                </ul>
              </div>`,
            answers: { 36: ['donations'], 37: ['survival'], 38: ['quality'], 39: ['robots'], 40: ['carbon'] }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture about coral reef restoration. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. In last week's lecture we looked at why coral reefs around the world are in decline, mainly because of rising sea temperatures, which cause corals to lose the algae that live inside them. This is known as bleaching. Today I want to turn to a more hopeful topic: the methods scientists are using to restore damaged reefs."],
          ['A', "The most widely used method is known as coral gardening. Divers collect small pieces of healthy coral and grow them in underwater nurseries. These are often simple structures that look a bit like trees made of plastic pipe, with the coral fragments hanging from the branches. After several months, when the corals have grown large enough, they're attached to the damaged reef with a kind of marine cement."],
          ['A', "A more recent technique is micro-fragmenting. Researchers in Florida discovered, almost by accident, that if coral is cut into very tiny fragments, just a centimetre or so across, it grows much more quickly. Some species grow up to twenty-five times faster than they would normally. This is particularly important for the slow-growing corals that form the main structure of a reef."],
          ['A', "The third method is larval seeding. Many corals reproduce by releasing eggs and sperm into the water on just one or two nights each year. Scientists collect this spawn and raise the larvae in tanks. When the larvae are ready to settle, they're released onto the reef under fine nets, which are placed over the damaged area. The nets stop the larvae from being washed away for the first few days."],
          ['A', "Where a reef has been almost completely destroyed, for example by a ship running aground, there may be nothing for the coral to grow on. In these cases, artificial structures are used. Early projects used concrete blocks, but these were heavy and difficult to transport. Today, many projects use frames made of steel, which are lighter and can be shaped easily."],
          ['A', "Finally, there's what is called assisted evolution. The idea is to help corals adapt to heat. Scientists select corals from areas where the water is naturally warmer, such as parts of the Red Sea, and breed them so that their offspring can survive higher temperatures."],
          ['A', "So what are the challenges? Firstly, scale. Restoration is expensive, and most projects cover only a few hectares. They are usually run by small organisations that depend on donations rather than government funding, which makes long-term planning difficult."],
          ['A', "Secondly, there's the question of how we measure success. Many projects report how many corals they have planted, because that number looks impressive. But what really matters is their survival over several years, and that is rarely recorded."],
          ['A', "Thirdly, restoration cannot work in isolation. If water quality remains poor, for example because of farm waste or sewage flowing into the sea, newly planted corals will simply die."],
          ['A', "Looking ahead, there are some exciting developments. In Australia, engineers are testing underwater robots that can plant thousands of coral larvae a day over large areas of reef. But all the experts I've spoken to agree on one thing. Restoration can buy reefs time, but their long-term survival depends on cutting carbon emissions and slowing the warming of the oceans."],
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
          title: 'The Language of the Hive',
          html: `
<p>Beekeepers have long known that when a single honeybee discovers a rich patch of flowers, large numbers of bees from the same colony soon appear at the same spot. The Greek philosopher Aristotle recorded this behaviour more than two thousand years ago, but how the information passed from one insect to another remained a mystery until the twentieth century.</p>
<p>The breakthrough came from the Austrian zoologist Karl von Frisch, who began studying bees in the 1910s. Working with observation hives that had glass walls, he marked individual bees with tiny dots of paint and trained them to visit dishes of sugar water placed at different distances from the hive. When these foragers returned home, he noticed that they performed distinctive movements on the vertical surface of the honeycomb, and that other bees crowded around them. Von Frisch identified two main types of movement. If the food was close to the hive, within about fifty metres, the returning bee performed what he called a ‘round dance’, running in small, excited circles. This alerted her nestmates that food was available nearby but gave no indication of its direction; recruits simply searched the area around the hive.</p>
<p>For more distant food sources, the forager performed a ‘waggle dance’. In this dance, the bee runs forward in a straight line while vibrating her abdomen rapidly from side to side, then loops back to her starting point, alternately to the left and to the right, so that her path traces a figure of eight. Von Frisch realised that the angle of the straight run carried precise information. A run directly upwards on the comb meant that the food lay in the direction of the sun; a run forty degrees to the right of vertical meant that the food lay forty degrees to the right of the sun. The duration of the waggle run indicated distance: in the colonies he studied, each second of waggling represented roughly one kilometre, although later researchers found that this relationship differs from one population of bees to another. Because the inside of a hive is completely dark, the bees following the dance cannot see it. Instead, they keep their antennae in contact with the dancer and detect her movements through touch and through vibrations in the comb. Remarkably, dancers gradually alter the angle of their runs to allow for the movement of the sun across the sky, even though they cannot see it, which suggests that bees possess a kind of internal clock. For this work, von Frisch was awarded the Nobel Prize in 1973, which he shared with two other scientists of animal behaviour.</p>
<p>Not everyone was convinced. In the 1960s, the American biologist Adrian Wenner argued that recruits did not need the dance at all. In his view, they found food mainly by smell, using the scent of flowers carried on the forager’s body together with odours at the feeding site itself. Wenner’s experiments showed that recruits often arrived at feeding stations with a matching scent, regardless of what the dance had indicated. The debate continued for many years, until in 2005 a team of researchers fitted bees with tiny radar transponders and tracked their flights. The recruits flew in the direction indicated by the dance, but they frequently relied on odour to find the exact location once they were close. Both sides, it seemed, had been partly right.</p>
<p>The waggle dance is not the only signal bees use. The American biologist Thomas Seeley has spent decades studying what happens when a colony divides. In spring, the old queen leaves with several thousand workers, which form a cluster on a branch while a few hundred scouts search for a suitable cavity in which to build a new nest. Each scout that finds a promising site returns and dances for it, and scouts that have found better sites dance more vigorously and for longer. Over a period of hours or days, support gradually shifts towards the best option, until enough scouts have gathered at one site for the swarm to fly there. Another researcher, James Nieh, has investigated the so-called stop signal, a short vibrating pulse that one bee delivers to another, often by butting her head against the dancer. Nieh found that bees which had been attacked at a feeding site produced this signal more often, reducing the number of recruits sent to a dangerous place. A third signal, the tremble dance, is performed by a forager that has to wait a long time before other bees take her nectar; it appears to tell the colony that more workers are needed to receive and store food.</p>
<p>Bees also communicate through chemicals known as pheromones. The queen produces a substance that prevents workers from rearing new queens, while guard bees release an alarm pheromone with a smell rather like bananas when they sting, which encourages other bees to join the defence.</p>
<p>Understanding these systems has practical value. Bees pollinate a large proportion of the crops that humans eat, and scientists now use the dance to investigate how certain pesticides affect the ability of foragers to navigate. Meanwhile, the way swarms reach collective decisions has inspired computer programmers designing systems in which many simple units must work together without a leader.</p>`
        },
        groups: [
          {
            type: 'tf', variant: 'tf', from: 1, to: 6,
            instr: TF_INSTR,
            questions: [
              { n: 1, text: 'Aristotle had noticed that many bees from one colony gathered at the same food source.', answer: 'TRUE' },
              { n: 2, text: 'Von Frisch was the first scientist to mark individual bees with paint.', answer: 'NOT GIVEN' },
              { n: 3, text: 'The round dance informs other bees of the direction in which to fly.', answer: 'FALSE' },
              { n: 4, text: 'The link between the length of the waggle run and distance is the same for all bee populations.', answer: 'FALSE' },
              { n: 5, text: 'Von Frisch did not receive the Nobel Prize on his own.', answer: 'TRUE' },
              { n: 6, text: 'Most biologists in the 1960s accepted Wenner’s explanation.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'gap', from: 7, to: 10,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>Recent findings about bee signals</h4>
                <p>In 2005, researchers attached small [[7]] to bees in order to follow their flights. They discovered that recruits followed the direction given in the dance but used [[8]] to locate the precise spot. When a colony divides, a few hundred [[9]] look for a new nest site and compete through their dances. A forager which has to wait a long time to hand over her nectar performs a [[10]] dance to show that extra workers are required.</p>
              </div>`,
            answers: { 7: ['transponders'], 8: ['odour', 'odor'], 9: ['scouts'], 10: ['tremble'] }
          },
          {
            type: 'match', from: 11, to: 13,
            instr: 'Look at the following statements (Questions 11–13) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–D</b>.<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'Karl von Frisch' },
              { k: 'B', t: 'Adrian Wenner' },
              { k: 'C', t: 'Thomas Seeley' },
              { k: 'D', t: 'James Nieh' }
            ],
            questions: [
              { n: 11, text: 'claimed that scent could explain how new foragers find food', answer: 'B' },
              { n: 12, text: 'studied how a group of bees reaches agreement on where to live', answer: 'C' },
              { n: 13, text: 'linked a particular signal to danger at a food source', answer: 'D' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Fresh Water from the Sea',
          html: `
<p><b class="para">A</b> Almost 97 per cent of the water on Earth is found in the oceans, and most of the remainder is locked up in ice sheets and glaciers. The fraction that is both fresh and easily accessible is tiny, yet it must supply a global population of more than eight billion people, as well as the farms and industries on which they depend. As cities grow and droughts become more frequent, an increasing number of governments are turning to a technology that promises an almost limitless supply: desalination, the removal of salt from seawater. More than 20,000 desalination plants are now in operation worldwide, and in some countries of the Middle East they provide the majority of drinking water.</p>
<p><b class="para">B</b> The basic principle is ancient. Sailors on long voyages knew that boiling seawater and collecting the steam produced water that was safe to drink, and simple stills were used on ships for centuries. The first large-scale plants, built in the mid-twentieth century, followed the same idea. In a process known as multi-stage flash distillation, seawater is heated and passed through a series of chambers at progressively lower pressure, causing it to evaporate rapidly; the vapour is then condensed into fresh water. These plants were reliable, but they consumed enormous quantities of energy, which is why they were built mainly in oil-rich states around the Persian Gulf, where fuel was cheap.</p>
<p><b class="para">C</b> The technology that transformed the industry emerged in the 1960s and spread widely from the 1970s onwards. Reverse osmosis does not involve heating at all. Instead, seawater is forced under high pressure through semi-permeable membranes, sheets of plastic material with pores so small that water molecules can pass through while salt and most other impurities are left behind. Early membranes were fragile and quickly became blocked, but steady improvements in their design have made them far more durable and efficient. Today, reverse osmosis accounts for the large majority of new desalination capacity around the world.</p>
<p><b class="para">D</b> Even so, desalination remains energy-intensive, and energy is the largest single element in the cost of the water it produces. A major advance has been the introduction of devices called pressure exchangers, which capture the pressure of the concentrated salty water leaving the membranes and transfer it to the seawater coming in. As a result of such innovations, the energy needed to produce a cubic metre of fresh water has fallen by more than half since the 1990s. In sunny regions, some new plants are now powered partly by solar farms, which reduces both running costs and carbon emissions.</p>
<p><b class="para">E</b> The most serious environmental concern, however, is not energy but brine, the highly concentrated salt solution left over after fresh water has been extracted. For every litre of drinking water produced, a typical plant generates around one and a half litres of brine. When this is pumped back into the sea, it tends to sink and spread across the seabed, where it can reduce oxygen levels and harm the organisms living there. The brine may also contain chemicals that are added to prevent the membranes from becoming clogged. In addition, the pipes that draw in seawater can trap fish larvae and other small creatures, which can affect marine ecosystems some distance from the plant itself.</p>
<p><b class="para">F</b> Engineers are now looking for ways to reduce this damage, and even to profit from it. Some plants release brine through diffusers, pipes with many small openings that mix it rapidly with the surrounding water so that it does not settle in one place. Others are experimenting with extracting valuable minerals, such as magnesium and lithium, from brine and selling them. In several countries, brine is evaporated in shallow ponds for salt production, and researchers have even raised salt-tolerant fish in it. If such approaches become economically viable, what is currently regarded as waste could become a useful resource.</p>
<p><b class="para">G</b> Not everyone welcomes the spread of desalination. Critics argue that a seemingly unlimited supply of water may discourage people and businesses from saving it, and that money spent on expensive plants would be better spent repairing leaking pipes, which in some cities lose a third of the water they carry. They also point out that the cost of building and running plants puts them beyond the reach of many poorer countries, which are often those facing the most severe shortages. Supporters reply that desalination offers a supply that does not depend on rainfall, and that no other source can provide such security during prolonged droughts. Most specialists now take a middle position: desalination is a valuable tool, but it is most effective when combined with water conservation, the recycling of wastewater and better management of existing rivers and underground reserves.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 20,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Turning an unwanted product to advantage' },
              { k: 'ii', t: 'A method that dispenses with heat' },
              { k: 'iii', t: 'Why seawater tastes salty' },
              { k: 'iv', t: 'A growing demand for a scarce resource' },
              { k: 'v', t: 'Opposing views on the value of the technology' },
              { k: 'vi', t: 'Cutting the power required' },
              { k: 'vii', t: 'The role of government research funding' },
              { k: 'viii', t: 'A harmful leftover' },
              { k: 'ix', t: 'An old idea applied on a large scale' },
              { k: 'x', t: 'The rise of bottled water' }
            ],
            questions: [
              { n: 14, text: 'Paragraph A', answer: 'iv' },
              { n: 15, text: 'Paragraph B', answer: 'ix' },
              { n: 16, text: 'Paragraph C', answer: 'ii' },
              { n: 17, text: 'Paragraph D', answer: 'vi' },
              { n: 18, text: 'Paragraph E', answer: 'viii' },
              { n: 19, text: 'Paragraph F', answer: 'i' },
              { n: 20, text: 'Paragraph G', answer: 'v' }
            ]
          },
          {
            type: 'gap', from: 21, to: 23,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <p class="sent">In reverse osmosis, seawater passes through membranes under high [[21]].</p>
              <p class="sent">Devices known as [[22]] reuse energy from the salty water leaving the membranes.</p>
              <p class="sent">The pipes that take in seawater can capture [[23]] and other small creatures.</p>`,
            answers: { 21: ['pressure'], 22: ['pressure exchangers'], 23: ['fish larvae', 'larvae'] }
          },
          {
            type: 'multi', from: 24, to: 25, ns: [24, 25],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> criticisms of desalination are mentioned in paragraph G?',
            options: [
              { k: 'A', t: 'It may reduce the incentive to use water carefully.' },
              { k: 'B', t: 'It is too costly for many of the countries that need it most.' },
              { k: 'C', t: 'Plants take too many years to build.' },
              { k: 'D', t: 'The water produced has an unpleasant taste.' },
              { k: 'E', t: 'Local residents object to the appearance of the plants.' }
            ],
            answers: ['A', 'B']
          },
          {
            type: 'mc', from: 26, to: 26,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 26, text: 'What is the view of most specialists, according to the writer?', options: [
                { k: 'A', t: 'Desalination should gradually replace other water sources.' },
                { k: 'B', t: 'Desalination works best as one part of a wider strategy.' },
                { k: 'C', t: 'The environmental costs of desalination are too high.' },
                { k: 'D', t: 'Desalination will soon be affordable for every country.' }], answer: 'B' }
            ]
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Marks That Speak: The Origins of Writing',
          html: `
<p>Of all human inventions, writing is perhaps the one that most clearly divides history from what came before it. Without written records, our knowledge of past societies depends on the interpretation of objects, buildings and bones; with them, we can hear, however faintly, the voices of the people themselves. It is natural, then, that scholars have long been preoccupied with the question of where and how writing began. For much of the twentieth century, the dominant view was that it had been invented only once, in Mesopotamia, the region between the rivers Tigris and Euphrates in present-day Iraq, and that the idea had spread from there to other civilisations. This theory, sometimes called monogenesis, now has few supporters. Most specialists accept that writing arose independently in at least three, and probably four, places: Mesopotamia, Egypt, China and Mesoamerica.</p>
<p>The Mesopotamian case remains the best documented. In the 1970s, the archaeologist Denise Schmandt-Besserat proposed an influential account of its development. She drew attention to thousands of small clay objects, shaped as cones, spheres and discs, which had been found at sites across the Near East dating from as early as 8000 BCE. She argued that these tokens were used to keep track of goods: a particular shape might stand for a measure of grain, another for a sheep. When goods were sent from one place to another, the corresponding tokens were sealed inside hollow clay balls, so that the receiver could break the ball open and check that nothing was missing. To avoid having to break the container, people began pressing the tokens into its soft outer surface before sealing it, leaving marks that showed what was inside. Eventually, Schmandt-Besserat suggested, it became clear that the marks alone were sufficient, and the tokens were abandoned in favour of flat clay tablets.</p>
<p>The earliest tablets, from the city of Uruk and dating from around 3200 BCE, appear to support this view. They are overwhelmingly administrative: lists of rations, records of livestock, accounts of land and labour. Yet the token theory has not gone unchallenged. Critics accept that it offers a convincing explanation for the origin of numerical signs, but argue that it accounts far less well for the hundreds of pictorial signs representing objects, people and places, many of which have no equivalent among the tokens. Writing, they suggest, drew on several existing traditions of marking and symbol-making, rather than evolving from a single source.</p>
<p>What turned these record-keeping systems into true writing, capable of representing language in all its variety, was the development of signs that stood for sounds. The key step was the rebus principle, by which a picture of one thing is used to represent another word that sounds the same. In Sumerian, the language of southern Mesopotamia, the word for ‘arrow’ and the word for ‘life’ were both pronounced ‘ti’, so the sign for an arrow could also be used to write ‘life’, a concept that is otherwise very hard to draw. Once scribes could represent sounds, they could record names, verbs and eventually whole sentences. Even so, centuries passed before writing was used for literature; the earliest known literary texts from Mesopotamia date from several hundred years after the first tablets.</p>
<p>Egypt presents a different picture. Small bone and ivory labels discovered in a royal tomb at Abydos have been dated to around 3250 BCE, which would make Egyptian writing at least as old as that of Mesopotamia. Significantly, many early Egyptian inscriptions appear on ceremonial objects and royal monuments, where they record the names of rulers and the events of their reigns. This has led some scholars to question the widespread assumption that writing everywhere emerged from the needs of bureaucracy. In Egypt, display and the expression of royal power may have been just as important as accounting.</p>
<p>In China, the oldest substantial body of writing consists of inscriptions on animal bones and turtle shells, used by the kings of the Shang dynasty around 1200 BCE to ask questions of their ancestors about harvests, wars and illness. The script on these oracle bones is already highly developed, with thousands of distinct characters, which strongly suggests a long earlier history. That history is invisible to us, probably because earlier texts were written on bamboo or wood, materials that rarely survive. In Mesoamerica, finally, a number of writing systems developed during the first millennium BCE; the best understood, that of the Maya, combined signs for whole words with signs for syllables and was used largely to record the dates, ancestry and achievements of rulers.</p>
<p>The search for a single moment of invention, I would argue, is ultimately misleading. In every case, writing appears to have emerged gradually, over generations, from earlier practices, and the uses to which it was put varied considerably from one society to another. What the four cases share is not a common purpose but a common setting: each arose in a society with cities, powerful rulers and a growing need to communicate across distance and time. Writing was less a sudden discovery than a slow and repeated response to the demands of increasingly complex communities.</p>`
        },
        groups: [
          {
            type: 'mc', from: 27, to: 30,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 27, text: 'What does the writer say about the theory of monogenesis?', options: [
                { k: 'A', t: 'It was first proposed in the 1970s.' },
                { k: 'B', t: 'It is no longer widely accepted.' },
                { k: 'C', t: 'It has recently been supported by new evidence.' },
                { k: 'D', t: 'It applies to Egypt but not to China.' }], answer: 'B' },
              { n: 28, text: 'According to Schmandt-Besserat, why did people press tokens into the outside of clay containers?', options: [
                { k: 'A', t: 'to make the containers stronger' },
                { k: 'B', t: 'to show who had sent the goods' },
                { k: 'C', t: 'so that the contents could be known without opening them' },
                { k: 'D', t: 'so that the tokens could be used again' }], answer: 'C' },
              { n: 29, text: 'The example of the Sumerian word ‘ti’ is used to show how', options: [
                { k: 'A', t: 'pictures were simplified over time.' },
                { k: 'B', t: 'abstract ideas could be written using signs for sounds.' },
                { k: 'C', t: 'different languages shared the same signs.' },
                { k: 'D', t: 'numbers came to be represented in writing.' }], answer: 'B' },
              { n: 30, text: 'Why does the writer believe that Chinese writing had a long earlier history?', options: [
                { k: 'A', t: 'The oracle bone script was already very sophisticated.' },
                { k: 'B', t: 'Older bamboo texts have been discovered.' },
                { k: 'C', t: 'Shang kings referred to earlier records.' },
                { k: 'D', t: 'Chinese writing was borrowed from Mesopotamia.' }], answer: 'A' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 31, to: 35,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 31, text: 'Written records allow historians to learn about past societies more directly than objects do.', answer: 'YES' },
              { n: 32, text: 'The token theory adequately explains the origin of all early Mesopotamian signs.', answer: 'NO' },
              { n: 33, text: 'Literature was among the first uses of writing in Mesopotamia.', answer: 'NO' },
              { n: 34, text: 'The labels found at Abydos were made by craftsmen from Mesopotamia.', answer: 'NOT GIVEN' },
              { n: 35, text: 'Researchers should concentrate on identifying the exact date when writing was invented.', answer: 'NO' }
            ]
          },
          {
            type: 'match', from: 36, to: 40,
            instr: 'Complete each sentence with the correct ending, <b>A–H</b>, below.',
            boxTitle: 'List of Endings',
            options: [
              { k: 'A', t: 'were mainly concerned with economic records.' },
              { k: 'B', t: 'were often linked to the authority of rulers.' },
              { k: 'C', t: 'were written on materials that have not survived.' },
              { k: 'D', t: 'were created to communicate with ancestors.' },
              { k: 'E', t: 'used a mixture of word signs and syllable signs.' },
              { k: 'F', t: 'were later copied by Egyptian scribes.' },
              { k: 'G', t: 'were found only in southern Mesopotamia.' },
              { k: 'H', t: 'were used to represent quantities of goods.' }
            ],
            questions: [
              { n: 36, text: 'According to Schmandt-Besserat, the small clay tokens', answer: 'H' },
              { n: 37, text: 'The earliest tablets from Uruk', answer: 'A' },
              { n: 38, text: 'Many of the first Egyptian inscriptions', answer: 'B' },
              { n: 39, text: 'The Shang oracle bone inscriptions', answer: 'D' },
              { n: 40, text: 'The Maya writing system', answer: 'E' }
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
          title: 'Holiday Cottages and Library Information',
          html: `
<h3>Coast and Country Holiday Cottages</h3>
<p><b class="para">A</b> <b>Heron’s Rest</b> – A charming stone cottage on the banks of the River Fal, sleeping four in two upstairs bedrooms. Well-behaved dogs are welcome (maximum two) for a small charge of £15 per stay. Wi-Fi throughout. The village pub and shop are a five-minute stroll away. Please note that in July and August there is a minimum stay of three nights.</p>
<p><b class="para">B</b> <b>Gull Cottage</b> – Wake up to the sound of the sea. This bright, modern house is just 300 metres from the sandy beach at Porthwen, which you can reach on foot in five minutes. Sleeps six. Fast broadband and a large garden with barbecue. Sorry, no pets. Short breaks available all year round.</p>
<p><b class="para">C</b> <b>The Old Dairy</b> – A beautifully converted single-storey barn, with all rooms on the ground floor and wide doorways, making it ideal for guests with limited mobility. Sleeps two. On arrival you’ll find a welcome hamper containing fresh bread, eggs, local bacon and homemade jam for your first breakfast. The coast is eight miles away by car.</p>
<p><b class="para">D</b> <b>Larch Lodge</b> – Escape from it all in this wooden cabin deep in Treworgan Forest. Sleeps five. There is deliberately no Wi-Fi or television, and mobile phone signal is limited, so this is the perfect place for a digital detox. A wood-burning stove keeps things cosy, and bicycles are provided free of charge.</p>
<p><b class="para">E</b> <b>Bramble Farmhouse</b> – Ideal for family reunions and celebrations, this spacious farmhouse sleeps up to ten. Book seven nights or more and receive 15% off the total price. Large kitchen with seating for twelve, games room and a private tennis court. Saturday changeover.</p>
<h3>Hallbrook Public Library – Rules for Members</h3>
<p><b>Joining:</b> Membership is free for anyone who lives, works or studies in the borough. Please bring proof of address when you register. Others may join for an annual fee of £20.</p>
<p><b>Borrowing:</b> Adult members may borrow up to 12 items at a time; children’s cards allow up to 8 items. Books may be borrowed for three weeks and DVDs for one week.</p>
<p><b>Renewals:</b> Items may be renewed up to three times online, by phone or in person, unless they have been reserved by another member.</p>
<p><b>Charges:</b> Since 2022, there are no overdue charges on books. Overdue DVDs are charged at 50p per day. Members who lose or damage an item will be asked to pay the cost of replacing it.</p>
<p><b>Computers:</b> Members may use the public computers on the ground floor free of charge for one hour per day. Sessions can be booked in advance at the help desk or on our website. Printing costs 10p per page for black and white and 30p for colour.</p>
<p><b>Behaviour:</b> Food is not permitted anywhere in the library, although bottled water is allowed. Mobile phones must be switched to silent in the quiet study room on the second floor. Children under 12 must be accompanied by an adult at all times.</p>`
        },
        groups: [
          {
            type: 'match', from: 1, to: 7,
            instr: 'Look at the five holiday cottages, <b>A–E</b>.<br>For which cottage are the following statements true?<br>Write the correct letter, <b>A–E</b>.<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Holiday Cottages',
            options: [
              { k: 'A', t: 'Heron’s Rest' },
              { k: 'B', t: 'Gull Cottage' },
              { k: 'C', t: 'The Old Dairy' },
              { k: 'D', t: 'Larch Lodge' },
              { k: 'E', t: 'Bramble Farmhouse' }
            ],
            questions: [
              { n: 1, text: 'Guests can bring their dog.', answer: 'A' },
              { n: 2, text: 'There is a reduced price for longer bookings.', answer: 'E' },
              { n: 3, text: 'It is suitable for people who cannot use stairs.', answer: 'C' },
              { n: 4, text: 'Guests can walk to the beach.', answer: 'B' },
              { n: 5, text: 'Food is provided for the first morning.', answer: 'C' },
              { n: 6, text: 'Guests cannot use the internet.', answer: 'D' },
              { n: 7, text: 'Short stays are not allowed at certain times of year.', answer: 'A' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 8, to: 14,
            instr: 'Do the following statements agree with the information given in the library rules?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 8, text: 'Anyone can become a library member without paying.', answer: 'FALSE' },
              { n: 9, text: 'Children are allowed to borrow fewer items than adults.', answer: 'TRUE' },
              { n: 10, text: 'DVDs can be kept for the same length of time as books.', answer: 'FALSE' },
              { n: 11, text: 'Members may reserve a maximum of five items at once.', answer: 'NOT GIVEN' },
              { n: 12, text: 'Members have to pay to print documents.', answer: 'TRUE' },
              { n: 13, text: 'A computer session may be extended if nobody else is waiting.', answer: 'NOT GIVEN' },
              { n: 14, text: 'Young children are not allowed in the library without an adult.', answer: 'TRUE' }
            ]
          }
        ]
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Annual Leave and Staff Training',
          html: `
<h3>Annual Leave Policy – Brightwater Logistics</h3>
<p><b>Entitlement</b><br>All full-time employees are entitled to 25 days of paid annual leave per year, in addition to public holidays. Part-time staff receive leave in proportion to the hours they work. To reward loyalty, employees receive one additional day of leave for every five years of continuous service, up to a maximum of 30 days in total.</p>
<p><b>Requesting leave</b><br>All leave must be approved by your line manager before you make any travel arrangements. Requests for up to five consecutive working days should be made at least two weeks in advance. Requests for more than five consecutive days must be submitted at least four weeks in advance. All requests should be made through the staff portal; paper forms are no longer accepted.</p>
<p><b>Busy periods</b><br>Because December is our busiest period, leave during that month is limited, and no more than two members of any team may be absent at the same time. Requests for this period are considered in the order in which they are received.</p>
<p><b>Carrying over leave</b><br>Our leave year runs from January to December. We encourage staff to take their full entitlement each year. However, up to five unused days may be carried over into the following year, provided that they are taken by the end of March. Any days not taken by then will be lost.</p>
<p><b>Leaving the company</b><br>Employees who leave the company will be paid for any leave they have earned but not taken. This is calculated on a pro-rata basis, according to the number of months worked in the current leave year.</p>

<h3>Delivering Excellent Customer Service – Two-Day Course</h3>
<p><b class="para">A</b> This course has been designed for employees in any role that involves regular contact with customers, whether face to face, by phone or online. It is particularly recommended for staff who have joined the company within the past year, although experienced colleagues who would like to refresh their skills are also welcome.</p>
<p><b class="para">B</b> Over the two days, participants will look at how to identify what customers really need, how to communicate clearly and politely, and how to deal calmly with complaints. There will also be a session on writing professional emails and a short introduction to the company’s new customer database.</p>
<p><b class="para">C</b> The course is highly practical. Rather than listening to long lectures, participants work in small groups of no more than eight and practise handling realistic situations through role-play. Trainers give individual feedback, and sessions are filmed so that participants can watch their own performance afterwards.</p>
<p><b class="para">D</b> At the end of the second day, participants complete a short written test and a practical task with an actor playing a difficult customer. Those who pass receive a certificate recognised by the Institute of Customer Service, which can count towards further professional qualifications.</p>
<p><b class="para">E</b> The course runs at our training centre on Mill Road, which is a ten-minute walk from the main office. Sessions start at 9.00 and finish at 4.30. A hot lunch, as well as tea and coffee, is provided free of charge, and any special dietary requirements can be catered for if you let us know in advance.</p>
<p><b class="para">F</b> To reserve a place, speak to your line manager first, then complete the online application form on the staff portal. Places are allocated on a first-come, first-served basis, and courses are usually full several weeks ahead. If you can no longer attend, please inform the training team as soon as possible so that your place can be offered to a colleague.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 21,
            instr: 'Complete the sentences below.<br>Choose <b>ONE WORD AND/OR A NUMBER</b> from the text for each answer.',
            template: `
              <p class="sent">Full-time staff receive [[15]] days of paid leave each year, not including public holidays.</p>
              <p class="sent">Staff earn an extra day of leave after every [[16]] years they work for the company.</p>
              <p class="sent">To take more than five days in a row, staff must apply at least [[17]] weeks beforehand.</p>
              <p class="sent">Leave requests must be made using the staff [[18]].</p>
              <p class="sent">The number of staff who can take leave is restricted in [[19]].</p>
              <p class="sent">Leave carried over from the previous year must be used before the end of [[20]].</p>
              <p class="sent">Payment for untaken leave when someone leaves is calculated on a [[21]] basis.</p>`,
            answers: {
              15: ['25', 'twenty-five'], 16: ['five', '5'], 17: ['four', '4'], 18: ['portal'],
              19: ['december'], 20: ['march'], 21: ['pro-rata', 'pro rata']
            }
          },
          {
            type: 'match', from: 22, to: 27,
            instr: 'The course information has six sections, <b>A–F</b>.<br>Choose the correct heading for each section from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Gaining a recognised qualification' },
              { k: 'ii', t: 'How to apply' },
              { k: 'iii', t: 'Who should attend' },
              { k: 'iv', t: 'Course fees and refunds' },
              { k: 'v', t: 'Topics covered' },
              { k: 'vi', t: 'The training approach' },
              { k: 'vii', t: 'What previous participants said' },
              { k: 'viii', t: 'Location, timing and meals' }
            ],
            questions: [
              { n: 22, text: 'Section A', answer: 'iii' },
              { n: 23, text: 'Section B', answer: 'v' },
              { n: 24, text: 'Section C', answer: 'vi' },
              { n: 25, text: 'Section D', answer: 'i' },
              { n: 26, text: 'Section E', answer: 'viii' },
              { n: 27, text: 'Section F', answer: 'ii' }
            ]
          }
        ]
      },
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'Foxes in the City',
          html: `
<p>Walk through almost any large British city late at night and there is a good chance you will see a red fox trotting confidently along the pavement, crossing a road or disappearing under a garden fence. To many people, foxes are a symbol of the countryside, yet today they are among the most familiar wild animals in urban areas. Estimates suggest that there are around 150,000 foxes living in British towns and cities, and similar populations have been recorded in cities as far apart as Zurich, Melbourne and Toronto.</p>
<p>Foxes are not newcomers to towns. They first became established in the suburbs of southern English cities in the 1930s, when large areas of low-density housing with long gardens were built on the edges of London and other cities. These new suburbs offered everything a fox needs: shelter under garden sheds, plenty of food and relatively little disturbance. From there, foxes gradually spread into city centres, a process that accelerated in the second half of the twentieth century.</p>
<p>One reason for their success is their remarkably varied diet. In the countryside, foxes eat mainly small mammals, birds, insects and fruit. In cities they eat these too, but they also take advantage of food provided, deliberately or accidentally, by humans. Studies in Bristol, where urban foxes have been researched more closely than anywhere else in the world, found that as much as half of their diet came from food left out by householders, with the rest made up of scavenged rubbish, earthworms, birds and rats. Contrary to popular belief, foxes rarely tear open rubbish bags; much of the mess blamed on them is in fact caused by cats, dogs or birds such as crows and gulls.</p>
<p>Urban foxes also behave differently from their rural relatives. They tend to live in smaller territories, because food is concentrated in a smaller area, and they are more active at night, when there are fewer people and cars around. Families usually consist of a breeding pair and their cubs, which are born in spring, often in a den dug beneath a shed or among dense vegetation. By autumn, most young foxes leave home to find territories of their own, and this is when many are killed on the roads. In fact, traffic is the main cause of death for urban foxes, and few survive beyond the age of two or three, although in captivity a fox may live for more than ten years.</p>
<p>Attitudes towards foxes vary widely. Surveys suggest that the majority of city residents like having them around and enjoy watching them in their gardens. A significant minority, however, regard them as pests. Complaints commonly concern noise, particularly the loud screams foxes make during the breeding season in winter, as well as damage to lawns and the smell of their droppings. Occasional reports of foxes entering homes attract considerable media attention, and some newspapers have called for urban foxes to be culled.</p>
<p>Wildlife experts argue that such calls are misguided. Killing foxes, they point out, is rarely effective, because when one fox is removed from a territory, another soon moves in to take its place. Instead, they recommend simple measures that make gardens less attractive to foxes: securing rubbish bins, blocking gaps under sheds and avoiding leaving pet food outside. In my opinion, the most important step is also the simplest. People who wish to enjoy foxes should resist the temptation to feed them regularly, since this encourages them to lose their natural caution around humans.</p>
<p>Foxes may also be of some benefit to cities. They help to control populations of rats and mice, and they provide many people, especially children, with their only regular contact with a wild mammal. Some researchers believe that the presence of foxes encourages residents to take a greater interest in urban wildlife more generally. Whether they are welcomed or resented, it seems clear that foxes have adapted to city life with remarkable success, and that they are likely to remain part of the urban landscape for the foreseeable future.</p>`
        },
        groups: [
          {
            type: 'mc', from: 28, to: 31,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 28, text: 'According to the writer, foxes first settled in towns because', options: [
                { k: 'A', t: 'their habitat in the countryside was destroyed.' },
                { k: 'B', t: 'new suburbs provided suitable conditions.' },
                { k: 'C', t: 'they were deliberately released there.' },
                { k: 'D', t: 'city centres had fewer predators.' }], answer: 'B' },
              { n: 29, text: 'What did studies in Bristol show?', options: [
                { k: 'A', t: 'Foxes find most of their food in rubbish bags.' },
                { k: 'B', t: 'Foxes rarely eat birds or rats.' },
                { k: 'C', t: 'People supply a large part of foxes’ food.' },
                { k: 'D', t: 'Urban foxes eat less than rural foxes.' }], answer: 'C' },
              { n: 30, text: 'Why do urban foxes have smaller territories?', options: [
                { k: 'A', t: 'There are more foxes competing for space.' },
                { k: 'B', t: 'Roads divide the city into small areas.' },
                { k: 'C', t: 'They are only active at night.' },
                { k: 'D', t: 'Their food is found within a limited area.' }], answer: 'D' },
              { n: 31, text: 'What is the most common cause of death among urban foxes?', options: [
                { k: 'A', t: 'disease' },
                { k: 'B', t: 'old age' },
                { k: 'C', t: 'road traffic' },
                { k: 'D', t: 'culling' }], answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 32, to: 36,
            instr: 'Do the following statements agree with the views of the writer in the text?<br>Choose<br><b>YES</b> if the statement agrees with the views of the writer<br><b>NO</b> if the statement contradicts the views of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 32, text: 'Foxes are responsible for most of the rubbish scattered in city streets.', answer: 'NO' },
              { n: 33, text: 'Most city residents have a negative attitude towards foxes.', answer: 'NO' },
              { n: 34, text: 'Urban foxes are more likely to carry diseases than rural foxes.', answer: 'NOT GIVEN' },
              { n: 35, text: 'Removing a fox from an area is unlikely to solve the problem for long.', answer: 'YES' },
              { n: 36, text: 'People should avoid feeding foxes on a regular basis.', answer: 'YES' }
            ]
          },
          {
            type: 'match', from: 37, to: 40,
            instr: 'Complete the summary using the list of words, <b>A–H</b>, below.',
            boxTitle: 'List of Words',
            options: [
              { k: 'A', t: 'spring' },
              { k: 'B', t: 'winter' },
              { k: 'C', t: 'autumn' },
              { k: 'D', t: 'noise' },
              { k: 'E', t: 'sheds' },
              { k: 'F', t: 'rodents' },
              { k: 'G', t: 'insects' },
              { k: 'H', t: 'children' }
            ],
            questions: [
              { n: 37, text: 'Fox cubs are born in (37) ……, often in a den under a garden building.', answer: 'A' },
              { n: 38, text: 'Residents most often complain about the (38) …… foxes make when they breed.', answer: 'D' },
              { n: 39, text: 'Foxes can be useful because they reduce the number of (39) …… in cities.', answer: 'F' },
              { n: 40, text: 'For many (40) ……, foxes are the only wild mammal they see regularly.', answer: 'H' }
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
<p><b>The graph below shows the average number of hours per week that young people aged 16–24 in one country spent on four leisure activities between 2004 and 2024.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'line',
          title: 'Average hours per week spent on leisure activities (ages 16–24)',
          categories: ['2004', '2008', '2012', '2016', '2020', '2024'],
          unit: 'hours',
          series: [
            { name: 'Watching TV', values: [18, 17, 15, 12, 10, 8] },
            { name: 'Online gaming', values: [3, 5, 7, 9, 12, 11] },
            { name: 'Social media', values: [1, 4, 8, 11, 14, 15] },
            { name: 'Sport and exercise', values: [6, 6, 5, 5, 4, 6] }
          ],
          max: 20
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>Advertising aimed at children, such as adverts for toys, snacks and games, has become increasingly common on television and online. Some people think this type of advertising should be banned completely.</b></p>
<p><b>To what extent do you agree or disagree?</b></p>
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
<p>You recently travelled by train to an important event, but your journey was very unsatisfactory.</p>
<p>Write a letter to the customer services manager of the train company. In your letter</p>
<ul>
<li>give details of your journey</li>
<li>explain what problems you experienced</li>
<li>say what you would like the company to do</li>
</ul>
<p>Write at least 150 words.</p>
<p>You do <b>NOT</b> need to write any addresses.</p>
<p>Begin your letter as follows:</p>
<p><b>Dear Sir or Madam,</b></p>`
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>In many countries, a growing number of people now work from home for some or all of the week instead of travelling to an office.</b></p>
<p><b>Do the advantages of this development outweigh the disadvantages?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 2, listening);
  IELTS.add('reading-academic', 2, readingAcademic);
  IELTS.add('reading-general', 2, readingGeneral);
  IELTS.add('writing-academic', 2, writingAcademic);
  IELTS.add('writing-general', 2, writingGeneral);
})();
