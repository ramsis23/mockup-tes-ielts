/* Test 9 — konten orisinal untuk latihan.
   Format audio: ['N', teks] = narator, ['A'|'B'|'C', teks] = pembicara, ['P', detik] = jeda. */
(() => {
  /* ===================================================== LISTENING */
  const listening = {
    parts: [
      /* ---------- Part 1 */
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'gap', from: 1, to: 7,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>GREENFIELD MEDICAL PRACTICE<br><span>New Patient Registration</span></h4>
                <table class="form-table">
                  <tr><td>Surname:</td><td>[[1]]</td></tr>
                  <tr><td>First name:</td><td>Daniel</td></tr>
                  <tr><td>Date of birth:</td><td>14th [[2]] 1991</td></tr>
                  <tr><td>Address:</td><td>Flat 6, [[3]] Court, Millbrook</td></tr>
                  <tr><td>Postcode:</td><td>[[4]]</td></tr>
                  <tr><td>Occupation:</td><td>[[5]]</td></tr>
                  <tr><td>Previous doctor:</td><td>Dr Patel, in [[6]]</td></tr>
                  <tr><td>Known allergies:</td><td>[[7]]</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['okafor'], 2: ['march'], 3: ['ashdown'], 4: ['mb3 8lp'],
              5: ['electrician'], 6: ['norwich'], 7: ['penicillin']
            }
          },
          {
            type: 'gap', from: 8, to: 10,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>Information for new patients</h4>
                <ul>
                  <li>First health check is with the practice [[8]]</li>
                  <li>The check takes about [[9]] minutes</li>
                  <li>Repeat prescriptions should be ordered through the [[10]]</li>
                </ul>
              </div>`,
            answers: { 8: ['nurse'], 9: ['20', 'twenty'], 10: ['app'] }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a man registering as a new patient at a doctor’s surgery. First, you have some time to look at questions 1 to 7.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 1 to 7.'],
          ['A', "Good afternoon, Greenfield Medical Practice. How can I help?"],
          ['B', "Hi. I've just moved to the area and I'd like to register with the surgery, if you're taking new patients."],
          ['A', "We are, yes. I can start the registration now and then you'll just need to come in and sign the form. Can I take your surname first?"],
          ['B', "It's Okafor. That's O, K, A, F, O, R."],
          ['A', "O, K, A, F, O, R. And your first name?"],
          ['B', "Daniel."],
          ['A', "Thank you, Daniel. What's your date of birth?"],
          ['B', "The fourteenth of March, nineteen ninety-one."],
          ['A', "Sorry, was that the fourth?"],
          ['B', "No, the fourteenth. One four."],
          ['A', "Fourteenth of March, ninety-one. Got it. And what's your new address?"],
          ['B', "It's Flat 6, Ashdown Court. I'll spell that: A, S, H, D, O, W, N. It's in Millbrook, just off the high street."],
          ['A', "Oh yes, I know it, the new building near the station. And the postcode?"],
          ['B', "M, B, 3, 8, L, P."],
          ['A', "M, B, 3, 8, L, P. Lovely. Could I ask your occupation? We record it because some jobs carry particular health risks."],
          ['B', "Sure. I actually trained as a plumber, but for the last four years I've been working as an electrician."],
          ['A', "Electrician. OK. And who was your previous doctor? We'll need to request your records from them."],
          ['B', "Dr Patel. The practice was in Norwich. I lived there for about six years before moving here. Before that I was in Cambridge, but my records should all be with Dr Patel now."],
          ['A', "That's fine, we'll contact the Norwich practice. Now, do you have any allergies we should know about?"],
          ['B', "Nothing to food, no nuts or anything like that. But I am allergic to penicillin. I had quite a bad reaction to it as a child."],
          ['A', "Penicillin. That's important, so I'll put a note on the front of your file."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 8 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 8 to 10.'],
          ['A', "Now, all new patients are asked to have a short health check when they join."],
          ['B', "Is that with one of the doctors?"],
          ['A', "Not usually. The doctors are very busy, so it's normally done by the practice nurse. She'll check your blood pressure, height and weight, and ask a few questions about your lifestyle."],
          ['B', "How long does it take? I'd need to arrange time off work."],
          ['A', "We book thirty minutes in the diary, but in practice it takes about twenty minutes. Ten minutes is never quite enough, so we don't offer shorter slots."],
          ['B', "OK, twenty minutes is fine. And one more thing. I take a medicine for asthma, so I'll need repeat prescriptions. How do I order those?"],
          ['A', "We used to take orders over the phone, but we stopped that last year because the lines were always busy. And we no longer have the paper box in reception. Everything now goes through the app. You can download it once you're registered."],
          ['B', "The app. Great, that's much easier for me anyway."],
          ['A', "Perfect. So, if you can come in this week to sign the form, we'll book your health check at the same time."],
          ['B', "I'll come in on Thursday. Thanks very much for your help."],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 2 */
      {
        title: 'Part 2',
        instr: 'Listen and answer questions 11–20.',
        range: [11, 20],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'match', from: 11, to: 15,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 11–15.
              <table class="form-table" style="text-align:center;margin-top:8px">
                <tr><td colspan="4"><b>KINGSGATE SHOPPING CENTRE – Ground Floor</b> (North at top)</td></tr>
                <tr><td>A</td><td>B</td><td>C</td><td>D</td></tr>
                <tr><td>E</td><td colspan="2">Central Atrium<br>(fountain)</td><td>F</td></tr>
                <tr><td>G</td><td colspan="2">Main Entrance (South)</td><td>H</td></tr>
              </table>`,
            boxTitle: 'Plan locations',
            options: [
              { k: 'A', t: 'north-west corner' }, { k: 'B', t: 'north side, left of centre' },
              { k: 'C', t: 'north side, right of centre' }, { k: 'D', t: 'north-east corner' },
              { k: 'E', t: 'west of the atrium' }, { k: 'F', t: 'east of the atrium' },
              { k: 'G', t: 'left of the main entrance' }, { k: 'H', t: 'right of the main entrance' }
            ],
            questions: [
              { n: 11, text: 'Customer services', answer: 'H' },
              { n: 12, text: 'Food court', answer: 'D' },
              { n: 13, text: 'Children’s play area', answer: 'E' },
              { n: 14, text: 'Escalators to the cinema', answer: 'B' },
              { n: 15, text: 'Bicycle store', answer: 'F' }
            ]
          },
          {
            type: 'mc', from: 16, to: 18,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 16, text: 'The shopping centre was built on the site of', options: [
                { k: 'A', t: 'a railway yard.' },
                { k: 'B', t: 'a bus station.' },
                { k: 'C', t: 'a car factory.' }], answer: 'C' },
              { n: 17, text: 'What is special about the roof of the centre?', options: [
                { k: 'A', t: 'It collects rainwater.' },
                { k: 'B', t: 'It is covered in solar panels.' },
                { k: 'C', t: 'It can be opened in summer.' }], answer: 'A' },
              { n: 18, text: 'On Sundays the centre is open from', options: [
                { k: 'A', t: '9 a.m. to 6 p.m.' },
                { k: 'B', t: '10 a.m. to 4 p.m.' },
                { k: 'C', t: '11 a.m. to 5 p.m.' }], answer: 'C' }
            ]
          },
          {
            type: 'multi', from: 19, to: 20, ns: [19, 20],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> services are free for visitors?',
            options: [
              { k: 'A', t: 'parking for the first three hours' },
              { k: 'B', t: 'wheelchair hire' },
              { k: 'C', t: 'storing bags in the cloakroom' },
              { k: 'D', t: 'charging electric cars' },
              { k: 'E', t: 'gift wrapping' }
            ],
            answers: ['A', 'B']
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear the manager of a new shopping centre speaking on a local radio programme. First, you have some time to look at questions 11 to 15.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 15.'],
          ['A', "Good morning, and thanks for having me on the programme. As many of your listeners will know, Kingsgate Shopping Centre opens its doors next Saturday, and I'd like to give people an idea of how to find their way around the ground floor."],
          ['A', "So, imagine you're coming in through the main entrance, on the south side of the building. Our original plan was to put customer services immediately on your left as you come in, but in the end a pharmacy took that unit. So customer services is now on the other side, immediately to the right of the main entrance. That's where you can pick up maps, report lost property and so on."],
          ['A', "Straight ahead of you is the central atrium, with the fountain in the middle. If you're hungry, walk across the atrium and keep going to the far side. The food court takes up the whole north-east corner of the building. Please don't confuse it with the north-west corner, which is a large bookshop with a small café inside it."],
          ['A', "Families with young children will want to know about the play area. That's on the west side, right next to the atrium, so parents can sit by the fountain and keep an eye on the kids."],
          ['A', "The cinema itself is on the first floor, but the escalators up to it are on the ground floor, on the north side. They're not directly opposite the entrance; they're slightly to the left, next to the bookshop. The unit to the right of them, which is next to the food court, is still empty, but we hope to announce a tenant soon."],
          ['A', "And for cyclists, we've got a secure bicycle store with space for two hundred bikes. You'll find that on the east side of the atrium, opposite the play area."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 16 to 20.'],
          ['A', "A lot of people have asked me about the history of the site. Many assume we've built on the old bus station, but that was actually across the road, and it's still there. In fact, the land was occupied for nearly seventy years by a car factory, which closed in the nineteen nineties. The railway yard people sometimes mention was further north, where the new housing is."],
          ['A', "We're also proud of the building's design. At one stage we planned to cover the roof with solar panels, but unfortunately the cost was too high. Instead, the roof collects rainwater, which is stored underground and used for the toilets and for watering the plants in the atrium."],
          ['A', "Now, opening times. From Monday to Friday we'll be open from nine in the morning until nine at night. On Saturdays it's nine until six. And on Sundays, we open at eleven and close at five. Some people had hoped for ten until four, but the trading rules don't allow more than six hours on a Sunday anyway."],
          ['A', "Finally, a few words about our services. Parking in the multi-storey car park is free for the first three hours, and after that it's one pound an hour. We also have wheelchairs and mobility scooters. The scooters have a small charge, but wheelchairs can be borrowed free of charge from customer services. There's a cloakroom if you want to leave heavy bags while you shop, although there is a fee of two pounds per item. We have twenty charging points for electric cars; you pay for those through an app. And some people have asked about gift wrapping. We did offer that free at our pop-up store last Christmas, but in the new centre it will be a paid service."],
          ['A', "So, we look forward to seeing you all next Saturday."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 3 */
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'f', B: 'm', C: 'm' },
        groups: [
          {
            type: 'multi', from: 21, to: 22, ns: [21, 22],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> problems did the students have during the field trip?',
            options: [
              { k: 'A', t: 'A piece of equipment stopped working.' },
              { k: 'B', t: 'The weather made one site unsafe.' },
              { k: 'C', t: 'The bus arrived late.' },
              { k: 'D', t: 'Some samples were lost.' },
              { k: 'E', t: 'A member of the group became ill.' }
            ],
            answers: ['A', 'B']
          },
          {
            type: 'mc', from: 23, to: 26,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 23, text: 'Why did the students choose the section of river near Hollin Farm?', options: [
                { k: 'A', t: 'It was easy to reach from the road.' },
                { k: 'B', t: 'It allowed them to compare two sides of a possible pollution source.' },
                { k: 'C', t: 'Their tutor had recommended it.' }], answer: 'B' },
              { n: 24, text: 'What surprised the students about their water quality results?', options: [
                { k: 'A', t: 'Nitrate levels downstream were lower than expected.' },
                { k: 'B', t: 'The water temperature varied a great deal.' },
                { k: 'C', t: 'There were more insects at the downstream site.' }], answer: 'A' },
              { n: 25, text: 'Josh thinks the results for river insects', options: [
                { k: 'A', t: 'are the most interesting part of the project.' },
                { k: 'B', t: 'match the findings of earlier studies.' },
                { k: 'C', t: 'may be unreliable because of the sample size.' }], answer: 'C' },
              { n: 26, text: 'The tutor advises the students to', options: [
                { k: 'A', t: 'repeat their sampling in the spring.' },
                { k: 'B', t: 'compare their data with official records.' },
                { k: 'C', t: 'shorten the discussion section.' }], answer: 'B' }
            ]
          },
          {
            type: 'match', from: 27, to: 30,
            instr: 'Who will do each of the following tasks?<br>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A</b>, <b>B</b> or <b>C</b>, next to Questions 27–30.',
            boxTitle: 'People',
            options: [
              { k: 'A', t: 'Megan' },
              { k: 'B', t: 'Josh' },
              { k: 'C', t: 'both Megan and Josh' }
            ],
            questions: [
              { n: 27, text: 'drawing the maps', answer: 'B' },
              { n: 28, text: 'writing the methodology', answer: 'A' },
              { n: 29, text: 'doing the statistical analysis', answer: 'C' },
              { n: 30, text: 'preparing the presentation slides', answer: 'A' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two geography students, Megan and Josh, talking to their tutor, Dr Rowe, about a river field trip. First, you have some time to look at questions 21 to 26.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 26.'],
          ['C', "Come in, both of you. So, how did the field trip to the River Hollin go?"],
          ['A', "Mostly well, I think, although we did have a couple of difficulties."],
          ['B', "The first was the flow meter. It worked fine at the first site, but halfway through the second one it just stopped. We think water got into the battery compartment."],
          ['A', "So we had to measure the speed of the current the old-fashioned way, timing an orange floating downstream."],
          ['C', "That's a perfectly acceptable method, as long as you explain it. Anything else?"],
          ['A', "Well, on the second day there was really heavy rain overnight, and the river level at the upstream site rose so much that it wasn't safe to go in. We had to wait until the afternoon."],
          ['B', "People expected the bus to be a problem, but actually it was on time both days. And we were worried we'd lost some of the water samples, but they'd just been put in the wrong box."],
          ['C', "Good. Now remind me why you chose that stretch of river, near Hollin Farm."],
          ['B', "Well, you'd suggested the section by the old mill, and it was certainly easier to get to from the road. But near the farm we could take samples just above and just below the place where the farm's drainage enters the river."],
          ['A', "So it was a chance to see whether the farm was affecting the water."],
          ['C', "Very sensible. And what did you find?"],
          ['A', "This was the surprising part. We'd assumed nitrate levels would be much higher downstream, because of fertiliser running off the fields. But they were actually lower than we expected, only slightly above the upstream readings."],
          ['B', "The temperature was about the same at both sites, which we'd predicted. And there were fewer insects downstream, which also fitted what we thought."],
          ['C', "Josh, you don't look entirely convinced by the insect results."],
          ['B', "No. I mean, they're interesting, and they do seem to agree with what other people have found. But we only took three kick samples at each site. With such a small number, I'm not sure we can really trust them."],
          ['C', "That's an honest point, and you should say so in your report. Now, I wouldn't suggest going back to do it all again; there isn't time before the deadline. What I would do is look at the records the Environment Agency publishes for that river. Comparing your data with theirs would make your conclusions much stronger."],
          ['A', "That's a good idea. And should we cut down the discussion? It's already quite long."],
          ['C', "No, the length is fine for now. Focus on the comparison."],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 27 to 30.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 27 to 30.'],
          ['C', "So, how are you going to divide up the work?"],
          ['A', "Well, I was going to do the maps, but Josh is much better with the mapping software than I am."],
          ['B', "Yes, I'll do those. I've already started on the site location map."],
          ['A', "In that case, I'll write up the methodology. I kept the field notebook, so I know exactly what we did and in what order."],
          ['C', "And the statistics? That's often where marks are lost."],
          ['B', "We thought we'd do that together. It's the part we're both least confident about, so we can check each other's work."],
          ['A', "Exactly. And then there's the presentation at the end of term. Josh offered to do the slides, but he'll be busy with the maps, so I'll take that on."],
          ['B', "I'll still help with the talk itself, of course."],
          ['C', "That sounds like a fair division. Send me a draft in two weeks."],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 4 */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'm' },
        groups: [
          {
            type: 'gap', from: 31, to: 35,
            instr: 'Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Process</th><th>Inventor</th><th>Date</th><th>Key features</th></tr>
                <tr><td>Heliograph</td><td>Niépce</td><td>1826</td><td>exposure took around eight [[31]]</td></tr>
                <tr><td>Daguerreotype</td><td>Daguerre</td><td>1839</td><td>image formed on a plate coated with [[32]]; each image could not be [[33]]</td></tr>
                <tr><td>Calotype</td><td>Talbot</td><td>1841</td><td>used a paper negative; pictures were less [[34]] than daguerreotypes</td></tr>
                <tr><td>Wet collodion</td><td>Archer</td><td>1851</td><td>glass plate had to be developed within about [[35]] minutes</td></tr>
              </table>`,
            answers: { 31: ['hours'], 32: ['silver'], 33: ['copied'], 34: ['sharp'], 35: ['10', 'ten'] }
          },
          {
            type: 'gap', from: 36, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>The impact of early photography</h4>
                <ul>
                  <li>Portraits: by the 1850s, families from the [[36]] class could afford them</li>
                  <li>Art: some painters used photographs as a [[37]] when working</li>
                  <li>Science: astronomers produced detailed images of the [[38]]</li>
                  <li>Travel: photographers moved their equipment in a [[39]] that also served as a darkroom</li>
                  <li>1888: customers sent the whole [[40]] back to the factory for processing</li>
                </ul>
              </div>`,
            answers: { 36: ['middle'], 37: ['reference'], 38: ['moon'], 39: ['wagon', 'waggon'], 40: ['camera'] }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture on the early history of photography. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. Today I want to look at how photography developed during the nineteenth century, and at some of the ways it changed society."],
          ['A', "The basic idea of projecting an image through a small hole, the camera obscura, had been known for centuries. The real challenge was making that image permanent. The first person to succeed was the Frenchman Nicéphore Niépce, who in 1826 produced what he called a heliograph, a view from an upstairs window of his house. The exposure was extremely long. Estimates vary, and some historians argue it may have been days, but the figure usually given is around eight hours. Because of this, the sun lights both sides of the buildings in the picture."],
          ['A', "Niépce worked with Louis Daguerre, and after Niépce's death, Daguerre developed a much faster process. The daguerreotype was announced in 1839. The image was formed on a copper plate coated with silver, which was polished until it looked like a mirror. The results were astonishingly detailed. But there was a major drawback: each daguerreotype was unique. It could not be copied, so if you wanted two pictures, you had to take two photographs."],
          ['A', "Meanwhile, in England, William Henry Fox Talbot was working on a different approach. His calotype, patented in 1841, produced a paper negative, from which any number of positive prints could be made. This idea, the negative and positive, became the basis of photography for the next hundred and fifty years. However, because the image passed through the fibres of the paper, calotypes were less sharp than daguerreotypes, and many customers preferred the clarity of Daguerre's method."],
          ['A', "The next breakthrough came in 1851, when Frederick Scott Archer introduced the wet collodion process. Here, a chemical mixture was spread on glass. It combined the sharpness of the daguerreotype with the ability to make copies. The difficulty was that the plate had to be exposed and developed while it was still wet, which meant within about ten minutes. Photographers sometimes say fifteen, but in warm weather the plate dried even faster than ten."],
          ['A', "So what effect did all this have? First, on portraits. Before photography, only the wealthy could afford to have a portrait painted. By the 1850s, studios had opened in every major city, and families from the middle class could afford them, often for the first time. Working-class families followed somewhat later, as prices fell further."],
          ['A', "Second, art. Some painters feared that photography would mean the end of painting altogether. Others, however, welcomed it, and used photographs as a reference when working, which saved their models from sitting for hours."],
          ['A', "Third, science. Photography allowed scientists to record things accurately for the first time. Astronomers, in particular, were quick to take advantage of it. Early attempts to photograph the stars failed because they were too faint, but by the 1850s astronomers had produced detailed images of the moon, showing its craters clearly."],
          ['A', "Fourth, travel. The wet collodion process was very demanding outdoors, because photographers had to carry all their chemicals with them. Many travelled with a horse-drawn wagon, which also served as a darkroom, so plates could be developed on the spot."],
          ['A', "Finally, the change that brought photography to everyone. In 1888, an American company launched a simple box camera, sold already loaded with enough film for one hundred pictures. When the film was finished, the customer did not remove it. Instead, they sent the whole camera back to the factory, where the film was developed and printed, and the camera was reloaded and returned. Photography was no longer a skill for experts; it had become a hobby for millions."],
          ['A', "Next week, we'll look at how photography was used in journalism."],
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
      /* ---------- Passage 1 */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
        range: [1, 13],
        passage: {
          title: 'How Sharks Sense Their World',
          html: `
<p><b class="para">A</b> Sharks have patrolled the oceans for more than 400 million years, long before the first dinosaurs appeared. For much of human history they have been portrayed as mindless eating machines, able to locate a swimmer from enormous distances. While this image owes more to films than to science, it does contain a grain of truth. Sharks possess a remarkable range of senses, and what makes them such effective hunters is not any single ability but the way these senses work in sequence, each one taking over as the animal moves closer to its target.</p>
<p><b class="para">B</b> The first sense to come into play is usually hearing. Sharks have no external ears, but inside the skull, behind each eye, lies an inner ear that is especially sensitive to low-frequency sounds. These are exactly the kind of irregular, pulsing vibrations produced by an injured or struggling fish. Because sound travels much faster and further in water than in air, a shark may pick up such signals from several hundred metres away. In field experiments, sharks have been attracted to underwater speakers playing recordings of distressed fish, even when no food was present.</p>
<p><b class="para">C</b> Smell is often described as the shark’s most powerful sense, and it is certainly impressive. Up to two-thirds of the brain of some species is devoted to processing odours. Unlike our own, a shark’s nostrils play no part in breathing; water flows into them simply as the animal swims, passing over folds of sensitive tissue. Popular accounts claim that a shark can detect a single drop of blood in an ocean, but this is a considerable exaggeration. Laboratory studies suggest that certain substances can be detected at concentrations of around one part per ten billion, which is remarkable, yet the odour must still be carried to the shark by currents. Interestingly, sharks seem to steer towards a smell by comparing the timing of its arrival at each nostril, turning towards the side that detects it first.</p>
<p><b class="para">D</b> As the shark approaches, another system becomes important. Running along each side of its body is the lateral line, a narrow canal containing clusters of hair cells that respond to changes in water pressure. This allows the animal to feel the movements of other creatures within a range of a few body lengths, without needing to see them at all. The lateral line is particularly valuable at night or in muddy coastal waters. In one well-known series of experiments, researchers temporarily covered the eyes of captive sharks and found that the animals were still able to locate and strike at moving prey with surprising accuracy.</p>
<p><b class="para">E</b> Shark vision was long dismissed as poor, but more recent research has revised that view. Behind the retina, many species have a layer of mirror-like cells known as the tapetum lucidum, which reflects light back through the eye a second time. This gives sharks excellent vision in dim conditions, and in some species the eye may be up to ten times more sensitive to low light than our own. Colour, however, is another matter. When scientists examined the retinas of seventeen species, they found that most possessed only a single type of cone cell, suggesting that these sharks are probably colour-blind and see the world in shades of grey.</p>
<p><b class="para">F</b> The final sense, and perhaps the most extraordinary, is electroreception. Scattered across the snout of every shark are hundreds of tiny pores, each leading to a canal filled with a clear gel. These organs, known as the ampullae of Lorenzini, can detect the weak electrical fields produced by the muscles and nerves of other animals. Their range is very short, usually less than a metre, so they are most useful in the last moments of an attack, when many sharks roll their eyes back for protection and can no longer see their prey. Some researchers believe electroreception may also aid navigation across ocean basins, by allowing sharks to sense the Earth’s magnetic field, although this remains unproven.</p>`
        },
        groups: [
          {
            type: 'match', from: 1, to: 6,
            instr: 'Reading Passage 1 has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'A sense that operates only at very close range' },
              { k: 'ii', t: 'Detecting movement without the need for sight' },
              { k: 'iii', t: 'A fearsome reputation partly explained' },
              { k: 'iv', t: 'A powerful ability whose strength is often overstated' },
              { k: 'v', t: 'Seeing well in poor light' },
              { k: 'vi', t: 'Picking up signals from a distance' },
              { k: 'vii', t: 'Why sharks avoid certain colours' },
              { k: 'viii', t: 'The threat posed by human activity' },
              { k: 'ix', t: 'How young sharks learn to hunt' }
            ],
            questions: [
              { n: 1, text: 'Paragraph A', answer: 'iii' },
              { n: 2, text: 'Paragraph B', answer: 'vi' },
              { n: 3, text: 'Paragraph C', answer: 'iv' },
              { n: 4, text: 'Paragraph D', answer: 'ii' },
              { n: 5, text: 'Paragraph E', answer: 'v' },
              { n: 6, text: 'Paragraph F', answer: 'i' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 7, to: 10,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 7, text: 'Sharks use their nostrils for breathing as well as for smelling.', answer: 'FALSE' },
              { n: 8, text: 'Scientists now believe that most shark species can see in colour.', answer: 'FALSE' },
              { n: 9, text: 'Sharks that live in deep water have larger eyes than those living near the surface.', answer: 'NOT GIVEN' },
              { n: 10, text: 'Sharks that could not see were still able to catch moving prey.', answer: 'TRUE' }
            ]
          },
          {
            type: 'gap', from: 11, to: 13,
            instr: 'Complete the sentences below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <p class="sent">11. Sharks find the direction of a smell by comparing the [[11]] with which it reaches each nostril.</p>
              <p class="sent">12. The ampullae of Lorenzini are canals that contain a clear [[12]].</p>
              <p class="sent">13. Electroreception might also help sharks with [[13]] over long distances.</p>`,
            answers: { 11: ['timing'], 12: ['gel'], 13: ['navigation'] }
          }
        ]
      },

      /* ---------- Passage 2 */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Catching Carbon',
          html: `
<p><b class="para">A</b> Every year, power stations, steelworks and cement plants release billions of tonnes of carbon dioxide into the atmosphere. For more than three decades, engineers have argued that much of this gas could be trapped before it escapes and locked safely underground. The idea, known as carbon capture and storage, or CCS, now features prominently in almost every major plan to limit global warming. Yet despite this support, the technology has spread far more slowly than its advocates once predicted, and today it captures only a tiny fraction of global emissions.</p>
<p><b class="para">B</b> There are three main ways of capturing carbon at an industrial site. The most widely used, post-combustion capture, treats the waste gases after fuel has been burned. The gases are passed through chemical solvents that absorb carbon dioxide; the solvents are then heated to release a concentrated stream of the gas, and recycled. In pre-combustion capture, the fuel is first converted into a mixture of hydrogen and carbon dioxide; the carbon dioxide is separated out, and the hydrogen is burned to produce energy. A third method, oxy-fuel combustion, involves burning fuel in pure oxygen rather than air, so that the exhaust consists almost entirely of carbon dioxide and water vapour, which are relatively easy to separate.</p>
<p><b class="para">C</b> Once captured, the carbon dioxide is compressed until it behaves like a liquid, transported by pipeline or ship, and injected deep underground, usually at depths of more than 800 metres. Suitable locations include oil and gas fields that have been emptied and saline aquifers, layers of porous rock filled with salty water. In both cases, an impermeable layer of cap rock above the storage zone prevents the gas from rising back to the surface. One project beneath the North Sea has been injecting around a million tonnes of carbon dioxide a year since 1996, and regular seismic surveys show the gas remaining where it was placed.</p>
<p><b class="para">D</b> The main obstacle has been cost. Capturing carbon requires a great deal of energy, chiefly to heat the solvents, and a power station fitted with capture equipment may lose between 15 and 25 per cent of its output. Unless governments place a significant price on emissions, there is little financial reason for companies to invest. For this reason, many of the earliest projects sold their carbon dioxide to oil companies, which pumped it into ageing oil fields to force out the remaining oil. Critics point out the irony: a technology intended to fight climate change was being used to produce more fossil fuel.</p>
<p><b class="para">E</b> A newer and more ambitious variation is direct air capture, which removes carbon dioxide not from factory chimneys but from the ambient air. In principle, this could reverse past emissions rather than simply prevent new ones. The difficulty is that carbon dioxide makes up only about 0.04 per cent of the atmosphere, so enormous volumes of air must be moved by fans and processed to collect even a small amount, which demands large quantities of energy. Current costs are several hundred dollars per tonne. In Iceland, one small plant powered by geothermal energy dissolves the captured gas in water and pumps it into basalt rock, where it reacts with minerals and turns to stone within about two years.</p>
<p><b class="para">F</b> Not everyone welcomes these developments. Some environmental groups argue that the promise of future carbon removal creates what economists call a moral hazard: it allows governments and companies to delay the far more urgent task of switching to renewable energy, in the belief that the problem can be cleaned up later. Others raise concerns about leakage. Although existing sites appear secure, stored carbon dioxide would need to be monitored for centuries, long after the companies responsible have ceased to exist.</p>
<p><b class="para">G</b> Despite these doubts, many analysts believe that carbon capture will be indispensable in certain industries. In cement production, for example, about two-thirds of emissions come not from burning fuel but from the chemical reaction that occurs when limestone is heated. Switching to clean electricity cannot eliminate these emissions. Similar problems arise in parts of the steel and chemical industries. In such cases, capture may be the only realistic option, suggesting that the technology’s future lies not as a universal solution but as a specialised tool for the hardest problems.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 17,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Which paragraph contains the following information?<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Paragraphs',
            options: [
              { k: 'A', t: 'Paragraph A' }, { k: 'B', t: 'Paragraph B' }, { k: 'C', t: 'Paragraph C' },
              { k: 'D', t: 'Paragraph D' }, { k: 'E', t: 'Paragraph E' }, { k: 'F', t: 'Paragraph F' },
              { k: 'G', t: 'Paragraph G' }
            ],
            questions: [
              { n: 14, text: 'a reference to industries whose emissions are not caused only by burning fuel', answer: 'G' },
              { n: 15, text: 'an explanation of why taking carbon dioxide from the air uses so much energy', answer: 'E' },
              { n: 16, text: 'a description of a storage project that has run for many years', answer: 'C' },
              { n: 17, text: 'a concern that the technology could slow down other solutions', answer: 'F' }
            ]
          },
          {
            type: 'gap', from: 18, to: 21,
            instr: 'Complete the table below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Stage / method</th><th>Description</th></tr>
                <tr><td>Post-combustion capture</td><td>waste gases pass through chemical [[18]], which are heated to release the gas</td></tr>
                <tr><td>Pre-combustion capture</td><td>fuel turned into carbon dioxide and [[19]] before burning</td></tr>
                <tr><td>Oxy-fuel combustion</td><td>fuel burned in pure [[20]]</td></tr>
                <tr><td>Storage</td><td>gas injected into empty oil and gas fields or saline [[21]]</td></tr>
              </table>`,
            answers: { 18: ['solvents'], 19: ['hydrogen'], 20: ['oxygen'], 21: ['aquifers'] }
          },
          {
            type: 'multi', from: 22, to: 23, ns: [22, 23],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> criticisms of carbon capture are mentioned in the passage?',
            options: [
              { k: 'A', t: 'Building the equipment takes too long.' },
              { k: 'B', t: 'Captured gas has been used to obtain more fossil fuel.' },
              { k: 'C', t: 'It may reduce the pressure to adopt renewable energy.' },
              { k: 'D', t: 'It requires very large amounts of fresh water.' },
              { k: 'E', t: 'It has been banned in a number of countries.' }
            ],
            answers: ['B', 'C']
          },
          {
            type: 'gap', from: 24, to: 26,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <div class="notes-box">
                <h4>Direct air capture</h4>
                <p>Unlike other forms of capture, this method removes carbon dioxide from the [[24]] air. Because the gas is present in such low concentrations, the process is expensive. At one plant in Iceland, the gas is dissolved in water and injected into [[25]] rock, where it becomes solid. Critics note that all stored carbon dioxide must be [[26]] for hundreds of years.</p>
              </div>`,
            answers: { 24: ['ambient'], 25: ['basalt'], 26: ['monitored'] }
          }
        ]
      },

      /* ---------- Passage 3 */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'The Conquest of Pain',
          html: `
<p>Before the middle of the nineteenth century, a surgical operation was an ordeal that few patients would willingly face. With no reliable way to dull pain, surgeons were judged largely on their speed. The most celebrated could remove a leg in under three minutes, and spectators in operating theatres sometimes timed them. Speed was not a matter of showmanship: every additional second increased the patient’s suffering and the risk of fatal shock. Alcohol, opium and various herbal preparations were all tried, but none could produce the deep, controllable unconsciousness that major surgery demanded.</p>
<p>It is one of the curiosities of medical history that the means of relief were available for decades before anyone used them. In 1800, the young English chemist Humphry Davy, experimenting with nitrous oxide, noticed that the gas eased the pain of an inflamed gum. He even remarked that it might be useful in surgical operations. Yet the suggestion was ignored. Part of the explanation, I would argue, lies in attitudes rather than knowledge. Many physicians regarded pain as an unavoidable, even necessary, part of treatment, and few saw its elimination as a scientific priority. Nitrous oxide, meanwhile, became better known as a source of amusement: travelling lecturers invited audiences to inhale it and laugh at the results, and so-called ether parties became fashionable among students.</p>
<p>It was at one such gathering that a doctor in rural Georgia, Crawford Long, noticed that friends who had inhaled ether felt nothing when they stumbled and bruised themselves. In 1842 he used ether while removing a tumour from a patient’s neck, apparently with complete success. Long, however, did not publish his results until 1849, by which time others had claimed the discovery. It is hard to blame him for his caution: he was a country doctor with few cases and no reputation, and a failed experiment could have ended his career. But the consequence was that his work had no influence on the wider medical world.</p>
<p>The decisive events took place in Boston. In 1845, a dentist named Horace Wells arranged a public demonstration of nitrous oxide at the Massachusetts General Hospital. Unfortunately, the patient cried out during the procedure, probably because the gas had been removed too soon, and the audience dismissed Wells as a fraud. A year later, his former partner, William Morton, tried again, this time with ether. On 16 October 1846, before an audience of doctors, a surgeon removed a growth from a patient’s jaw while the man lay quietly. News of the success spread across the Atlantic within weeks. Morton, though, was as interested in profit as in medicine. He added colouring and perfume to the ether to disguise it, gave it a new name, and attempted to patent it. The attempt failed, but it soured relations with the medical profession, and Morton spent his later years in bitter disputes over who deserved the credit.</p>
<p>Ether had disadvantages: it irritated the lungs, caused vomiting and was highly flammable. In 1847, the Edinburgh obstetrician James Young Simpson searched for an alternative. One evening he and two colleagues sat around his dining table inhaling a series of chemicals; when they tried chloroform, all three slid unconscious to the floor. Simpson soon began using chloroform to relieve the pain of childbirth, which provoked fierce opposition. It is often claimed that this opposition was simply religious, based on the belief that suffering in labour was divinely ordained. That is too simple. Many doctors genuinely believed that pain served a useful purpose in labour, and others were alarmed by reports of sudden deaths under chloroform.</p>
<p>Those deaths were real, and they prompted the work of the London physician John Snow, better remembered today for his study of cholera. Snow approached anaesthesia scientifically, measuring how much vapour was needed to produce different levels of unconsciousness and designing inhalers that controlled the dose. In 1853 he gave chloroform to Queen Victoria during the birth of her eighth child. The queen recorded her relief in her journal, and in my view her example did more than any medical argument to make pain relief in childbirth socially acceptable.</p>
<p>It would be pleasing to report that anaesthesia immediately made surgery safe. It did not. Freed from the need for speed, surgeons attempted longer and more ambitious operations, but death rates after surgery barely fell, and in some hospitals they rose. The cause was infection, which remained poorly understood. Only after Joseph Lister introduced antiseptic methods in the late 1860s, using carbolic acid to clean wounds and instruments, did the full benefits of anaesthesia begin to be realised. The conquest of pain, then, was not a single moment of discovery but a slow process in which scientific insight, social attitudes and personal ambition were all intertwined.</p>`
        },
        groups: [
          {
            type: 'mc', from: 27, to: 30,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 27, text: 'According to the writer, surgeons before anaesthesia worked quickly because', options: [
                { k: 'A', t: 'spectators expected a dramatic performance.' },
                { k: 'B', t: 'a longer operation was more dangerous for the patient.' },
                { k: 'C', t: 'operating theatres were needed for other patients.' },
                { k: 'D', t: 'they were paid according to the number of operations.' }], answer: 'B' },
              { n: 28, text: 'The writer suggests that Davy’s observation was ignored mainly because', options: [
                { k: 'A', t: 'Davy was a chemist rather than a doctor.' },
                { k: 'B', t: 'nitrous oxide was too expensive to produce.' },
                { k: 'C', t: 'doctors did not consider removing pain to be important.' },
                { k: 'D', t: 'Davy did not record his findings accurately.' }], answer: 'C' },
              { n: 29, text: 'Wells’s demonstration in 1845 was unsuccessful because', options: [
                { k: 'A', t: 'the wrong gas was used.' },
                { k: 'B', t: 'the patient may not have received enough of the gas.' },
                { k: 'C', t: 'the audience interrupted the operation.' },
                { k: 'D', t: 'Morton refused to assist him.' }], answer: 'B' },
              { n: 30, text: 'The writer mentions the colouring and perfume added to ether in order to show', options: [
                { k: 'A', t: 'how Morton improved the safety of the substance.' },
                { k: 'B', t: 'why patients preferred ether to nitrous oxide.' },
                { k: 'C', t: 'that Morton had commercial motives.' },
                { k: 'D', t: 'how quickly the news spread to Europe.' }], answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 31, to: 35,
            instr: 'Do the following statements agree with the claims of the writer in Reading Passage 3?<br>Choose<br><b>YES</b> if the statement agrees with the claims of the writer<br><b>NO</b> if the statement contradicts the claims of the writer<br><b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this',
            questions: [
              { n: 31, text: 'Long’s delay in publishing his results is understandable.', answer: 'YES' },
              { n: 32, text: 'Opposition to chloroform in childbirth was based only on religious beliefs.', answer: 'NO' },
              { n: 33, text: 'Queen Victoria’s use of chloroform helped to change public attitudes.', answer: 'YES' },
              { n: 34, text: 'Snow’s inhalers were adopted by most British hospitals within ten years.', answer: 'NOT GIVEN' },
              { n: 35, text: 'The introduction of anaesthesia quickly reduced the number of deaths after surgery.', answer: 'NO' }
            ]
          },
          {
            type: 'match', from: 36, to: 40,
            instr: 'Look at the following statements (Questions 36–40) and the list of people below.<br>Match each statement with the correct person, <b>A–G</b>.',
            boxTitle: 'List of People',
            options: [
              { k: 'A', t: 'Humphry Davy' },
              { k: 'B', t: 'Crawford Long' },
              { k: 'C', t: 'Horace Wells' },
              { k: 'D', t: 'William Morton' },
              { k: 'E', t: 'James Young Simpson' },
              { k: 'F', t: 'John Snow' },
              { k: 'G', t: 'Joseph Lister' }
            ],
            questions: [
              { n: 36, text: 'tested a number of substances on himself and others in his home', answer: 'E' },
              { n: 37, text: 'developed equipment to control the amount of anaesthetic given', answer: 'F' },
              { n: 38, text: 'noticed a pain-relieving effect but did not apply it to surgery', answer: 'A' },
              { n: 39, text: 'tried to conceal the identity of the substance he used', answer: 'D' },
              { n: 40, text: 'introduced methods that made operations less likely to cause infection', answer: 'G' }
            ]
          }
        ]
      }
    ]
  };

  /* ===================================================== READING GENERAL TRAINING */
  const readingGeneral = {
    parts: [
      /* ---------- Section 1 */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
        range: [1, 14],
        passage: {
          title: 'Market news and phone offers',
          html: `
<h3>Hollybrook Farmers’ Market</h3>
<p>Fresh, local and seasonal! Hollybrook Farmers’ Market takes place on the first and third Saturday of every month, from 8 a.m. to 1 p.m. Since the town square is being repaved this year, the market has moved to the car park behind the library.</p>
<p>All of our stallholders grow, rear or make what they sell, and every producer comes from within 30 miles of Hollybrook. You’ll find vegetables, cheese, meat, bread, honey, plants and much more.</p>
<p>We are trying to cut down on plastic, so please bring your own bags. Paper bags are available at some stalls for a small charge.</p>
<p>Don’t miss our cooking demonstrations, given by local chefs at 10 a.m. and 11.30 a.m. They’ll show you how to make the most of what’s in season, and there are free samples to try.</p>
<p>Parking: the library car park is closed to cars on market days. Free parking is available at Mill Street, a five-minute walk away. The pay-and-display car park on Station Road is also open.</p>

<h3>Mobile phone plans – this month’s offers</h3>
<p><b class="para">A</b> <b>Basic Talk</b> – £6 per month, 12-month contract. Unlimited calls and texts within the UK. No mobile data, so this plan is ideal if you only want a phone for calls. Free SIM card.</p>
<p><b class="para">B</b> <b>Flexi 30</b> – £12 per month. 15GB of data plus unlimited calls and texts. This is a 30-day rolling plan: there is no minimum term and you can cancel whenever you like. Please note that we may change the monthly price, giving you 30 days’ notice.</p>
<p><b class="para">C</b> <b>Family Share</b> – £40 per month, 24-month contract. Up to five SIM cards share a single pool of 100GB. Built-in parental controls let you decide which websites and apps children can use.</p>
<p><b class="para">D</b> <b>Unlimited Plus</b> – £35 per month, 24-month contract. Unlimited data, calls and texts, plus free roaming in 50 countries. After 12 months, you can swap your handset for the latest model at no extra cost.</p>
<p><b class="para">E</b> <b>Student Saver</b> – £10 per month, 12-month contract. 50GB of data plus unlimited calls and texts. You must provide evidence that you are enrolled at a college or university. Includes six months of free music streaming.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the notes below.<br>Choose <b>ONE WORD AND/OR A NUMBER</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Hollybrook Farmers’ Market</h4>
                <ul>
                  <li>Held twice a month, on a [[1]] morning</li>
                  <li>Current location: behind the [[2]]</li>
                  <li>Producers are based no more than [[3]] miles away</li>
                  <li>Customers are asked to bring their own [[4]]</li>
                  <li>Cooking demonstrations are run by [[5]] from the area</li>
                  <li>Free car parking is at [[6]] Street</li>
                </ul>
              </div>`,
            answers: { 1: ['saturday'], 2: ['library'], 3: ['30', 'thirty'], 4: ['bags'], 5: ['chefs'], 6: ['mill'] }
          },
          {
            type: 'match', from: 7, to: 14,
            instr: 'Look at the five mobile phone plans, <b>A–E</b>.<br>For which plan are the following statements true?<br><b>NB</b> You may use any letter more than once.',
            boxTitle: 'Plans',
            options: [
              { k: 'A', t: 'Basic Talk' }, { k: 'B', t: 'Flexi 30' }, { k: 'C', t: 'Family Share' },
              { k: 'D', t: 'Unlimited Plus' }, { k: 'E', t: 'Student Saver' }
            ],
            questions: [
              { n: 7, text: 'You can get a new phone part of the way through the contract.', answer: 'D' },
              { n: 8, text: 'You can end the agreement at any time.', answer: 'B' },
              { n: 9, text: 'You must show proof that you are studying.', answer: 'E' },
              { n: 10, text: 'Several people can use the same data allowance.', answer: 'C' },
              { n: 11, text: 'It does not include internet access.', answer: 'A' },
              { n: 12, text: 'It comes with an entertainment service for part of the year.', answer: 'E' },
              { n: 13, text: 'It allows adults to restrict what children can access.', answer: 'C' },
              { n: 14, text: 'The monthly cost might go up.', answer: 'B' }
            ]
          }
        ]
      },

      /* ---------- Section 2 */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Corran Logistics – Staff information',
          html: `
<h3>Annual leave for part-time employees</h3>
<p>All part-time employees are entitled to paid annual leave on a pro-rata basis, meaning in proportion to the hours they work. To make this fair for people with different working patterns, part-time leave is calculated in hours rather than days.</p>
<p>A full-time employee working 37.5 hours a week receives 28 days, or 210 hours, of leave per year, including public holidays. A part-time employee working 15 hours a week would therefore receive 84 hours. When a public holiday falls on one of your normal working days, the hours for that day are deducted from your allowance. If you do not normally work on the day of the week when most public holidays fall, such as Monday, you will not lose out: you still receive your full pro-rata allowance and may take it on other days.</p>
<p>Requests for more than two consecutive days off must be submitted through the HR portal at least two weeks in advance. Requests for a single day or two days can be made with 48 hours’ notice. Your line manager will normally respond within three working days.</p>
<p>The leave year runs from January to December. Up to five days (pro rata) of unused leave may be carried over into the following year, but this must be taken by the end of March, or it will be lost.</p>
<p>Employees on variable-hours contracts, whose hours change from week to week, build up leave at a rate of 12.07 per cent of the hours they actually work. Your running total is shown on your monthly payslip.</p>

<h3>Team Days 2025</h3>
<p>Following the success of last year’s events, Corran Logistics is once again offering every member of staff a Team Day. This year the events will be held on Fridays throughout June, so that weekend plans are not affected.</p>
<p>The company pays all costs, including transport to and from the venue. Staff who work shifts and would normally be on duty will receive paid time for the full day.</p>
<p>There are four options to choose from:</p>
<ul>
<li><b>Raft building</b> – teams design and build a raft, then race it across the lake at Kelby Park. Swimming ability is required.</li>
<li><b>Cookery challenge</b> – under the guidance of a professional chef, teams compete to produce a three-course lunch, which everyone then eats together.</li>
<li><b>Escape room</b> – solve a series of puzzles against the clock in the city centre.</li>
<li><b>Volunteering</b> – spend the day helping a local charity with gardening, decorating or other practical tasks.</li>
</ul>
<p>To book a place, please speak to your team leader by 15 May. Places on each activity are limited and will be allocated on a first-come, first-served basis. If you have any dietary requirements, please inform the catering team at least one week before your event.</p>`
        },
        groups: [
          {
            type: 'tf', variant: 'tf', from: 15, to: 21,
            instr: 'Do the following statements agree with the information given in the text?<br>Choose<br><b>TRUE</b> if the statement agrees with the information<br><b>FALSE</b> if the statement contradicts the information<br><b>NOT GIVEN</b> if there is no information on this',
            questions: [
              { n: 15, text: 'Part-time employees have their leave calculated in hours.', answer: 'TRUE' },
              { n: 16, text: 'Part-time staff who do not work on Mondays receive less leave than other part-time staff.', answer: 'FALSE' },
              { n: 17, text: 'A request for one day of leave must be made two weeks in advance.', answer: 'FALSE' },
              { n: 18, text: 'Employees can be paid money instead of taking unused leave.', answer: 'NOT GIVEN' },
              { n: 19, text: 'Leave carried over from the previous year must be used by the end of March.', answer: 'TRUE' },
              { n: 20, text: 'Staff with variable hours earn leave based on the hours they have worked.', answer: 'TRUE' },
              { n: 21, text: 'Employees with more than five years’ service receive extra leave.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'gap', from: 22, to: 27,
            instr: 'Complete the notes below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Team Days</h4>
                <ul>
                  <li>Events take place on [[22]] in June</li>
                  <li>Company covers all costs, including [[23]]</li>
                  <li>Raft building: race takes place at [[24]]</li>
                  <li>Cookery challenge: teams make a three-course [[25]]</li>
                  <li>To book: contact your [[26]] by 15 May</li>
                  <li>Dietary needs: tell the [[27]] a week before</li>
                </ul>
              </div>`,
            answers: {
              22: ['fridays'], 23: ['transport'], 24: ['kelby park'], 25: ['lunch'],
              26: ['team leader'], 27: ['catering team']
            }
          }
        ]
      },

      /* ---------- Section 3 */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'Sand Dunes: The Coast’s Living Defences',
          html: `
<p><b class="para">A</b> Along many coastlines, the first line of defence against the sea is not a wall of concrete but a ridge of sand. Coastal dunes act as a natural barrier, absorbing the energy of storm waves and protecting the land behind them from flooding. Unlike artificial structures, they are constantly on the move: sand is removed during winter storms and returned by wind and gentle waves in calmer months. A healthy dune system can therefore survive damage that would destroy a fixed barrier, as long as it is given space and time to recover.</p>
<p><b class="para">B</b> Dunes begin to form on the upper part of a beach, above the reach of ordinary high tides. Here, dry sand is picked up by onshore winds and blown inland. When the wind meets an obstacle, such as a line of seaweed, a piece of driftwood or a small plant, it slows down and drops some of the sand it is carrying. Over time a small mound develops, which itself slows the wind further, causing more sand to collect. In this way, a tiny pile can grow into a ridge several metres high within a few years.</p>
<p><b class="para">C</b> Sand alone, however, is easily blown or washed away. What turns a temporary mound into a stable dune is vegetation. The most important plant on many European coasts is marram grass, which is remarkably well suited to this harsh environment. Its leaves roll up in dry weather to reduce water loss, and its long roots bind the sand together. Most importantly, marram actually grows faster when it is buried: as sand piles up around it, the plant pushes upwards to reach the light, so the dune and the grass rise together. Once the dune is established, other plants move in, adding organic matter and gradually turning sand into soil.</p>
<p><b class="para">D</b> For much of the twentieth century, coastal engineers preferred hard defences such as sea walls. These can be effective in the short term, but they have a serious drawback. When waves strike a vertical wall, much of their energy is reflected back towards the sea, carrying sand with it. This process, known as scour, can strip away the beach in front of the wall, leaving it more exposed than before. Dunes, by contrast, absorb wave energy gradually. They are also considerably cheaper to maintain, and because they rebuild themselves naturally, they can adjust to rising sea levels in a way that a fixed wall cannot.</p>
<p><b class="para">E</b> Despite their value, dunes have suffered greatly from human activity. In many places they have been flattened to make way for housing, car parks and golf courses. Even where they remain, heavy foot traffic can kill the vegetation that holds them together. A single path worn through the grass can become a channel through which the wind removes sand, creating a large hollow known as a blowout. Once this begins, a dune can be breached surprisingly quickly during a storm, allowing the sea to flood the land behind.</p>
<p><b class="para">F</b> In recent decades, coastal authorities have increasingly turned to dune restoration. The process often begins with the installation of fences made of wooden slats, which slow the wind so that it drops its sand in the right place. In several countries, volunteers collect discarded Christmas trees each January and lay them along damaged areas, where they perform the same role. Public access is managed by building boardwalks, which allow people to reach the beach without trampling the plants. These measures are usually followed by replanting with marram grass. Results have generally been encouraging: in some areas, restored dunes have grown by more than a metre within five years, and have withstood storms that once caused serious flooding.</p>`
        },
        groups: [
          {
            type: 'match', from: 28, to: 33,
            instr: 'The text has six paragraphs, <b>A–F</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'How dunes start to grow' },
              { k: 'ii', t: 'The role of plants in holding sand in place' },
              { k: 'iii', t: 'A barrier that is always changing' },
              { k: 'iv', t: 'The harm caused by people' },
              { k: 'v', t: 'Repairing damaged dunes' },
              { k: 'vi', t: 'The economic importance of beach tourism' },
              { k: 'vii', t: 'Why a natural defence may be better than a built one' },
              { k: 'viii', t: 'A home for rare wildlife' }
            ],
            questions: [
              { n: 28, text: 'Paragraph A', answer: 'iii' },
              { n: 29, text: 'Paragraph B', answer: 'i' },
              { n: 30, text: 'Paragraph C', answer: 'ii' },
              { n: 31, text: 'Paragraph D', answer: 'vii' },
              { n: 32, text: 'Paragraph E', answer: 'iv' },
              { n: 33, text: 'Paragraph F', answer: 'v' }
            ]
          },
          {
            type: 'mc', from: 34, to: 36,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 34, text: 'According to paragraph B, a dune begins to form when', options: [
                { k: 'A', t: 'high tides carry sand onto the beach.' },
                { k: 'B', t: 'wind-blown sand is stopped by an object.' },
                { k: 'C', t: 'wet sand dries out in the sun.' },
                { k: 'D', t: 'waves push sand into a ridge.' }], answer: 'B' },
              { n: 35, text: 'Marram grass is especially useful for dunes because it', options: [
                { k: 'A', t: 'needs very little sunlight.' },
                { k: 'B', t: 'produces a large amount of soil.' },
                { k: 'C', t: 'grows more quickly when covered by sand.' },
                { k: 'D', t: 'keeps its leaves flat in dry weather.' }], answer: 'C' },
              { n: 36, text: 'What does the writer say about sea walls?', options: [
                { k: 'A', t: 'They can cause the beach in front of them to disappear.' },
                { k: 'B', t: 'They are more effective as sea levels rise.' },
                { k: 'C', t: 'They are cheaper than dunes in the long term.' },
                { k: 'D', t: 'They are no longer built in Europe.' }], answer: 'A' }
            ]
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Dune restoration</h4>
                <p>Restoration work usually starts with putting up wooden [[37]] to make the wind deposit sand. In some countries, old Christmas [[38]] are used in a similar way. To stop visitors damaging the plants, paths called [[39]] are built. Finally, the dunes are improved by [[40]] with marram grass.</p>
              </div>`,
            answers: { 37: ['fences'], 38: ['trees'], 39: ['boardwalks'], 40: ['replanting'] }
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
<p><b>The pie charts below show how household waste was disposed of in one city in 2000, 2010 and 2020.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'pie',
          title: 'Methods of household waste disposal (%)',
          pies: [
            { label: '2000', slices: [
              { name: 'Landfill', value: 68 }, { name: 'Recycling', value: 14 },
              { name: 'Composting', value: 6 }, { name: 'Incineration', value: 12 }] },
            { label: '2010', slices: [
              { name: 'Landfill', value: 45 }, { name: 'Recycling', value: 28 },
              { name: 'Composting', value: 12 }, { name: 'Incineration', value: 15 }] },
            { label: '2020', slices: [
              { name: 'Landfill', value: 22 }, { name: 'Recycling', value: 41 },
              { name: 'Composting', value: 19 }, { name: 'Incineration', value: 18 }] }
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
<p><b>Robots and automated systems are increasingly doing jobs that were once done by people. Some people believe this will lead to widespread unemployment, while others think it will create more and better jobs than it destroys.</b></p>
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
<p>A friend recently invited you to a special event that they had organised, but you were unable to attend.</p>
<p>Write a letter to your friend. In your letter</p>
<ul>
<li>apologise for missing the event</li>
<li>explain why you could not attend</li>
<li>suggest a way to make up for your absence</li>
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
<p><b>Some people think that schools should teach children how to manage money, such as saving, budgeting and avoiding debt. Others believe this is the responsibility of parents.</b></p>
<p><b>To what extent do you agree that money management should be taught at school?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 9, listening);
  IELTS.add('reading-academic', 9, readingAcademic);
  IELTS.add('reading-general', 9, readingGeneral);
  IELTS.add('writing-academic', 9, writingAcademic);
  IELTS.add('writing-general', 9, writingGeneral);
})();
