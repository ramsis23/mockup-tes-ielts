/* Konten tes 7 (orisinal, dibuat khusus untuk latihan ini).
   Format audio: ['N', teks] = narator, ['A'|'B'|'C', teks] = pembicara, ['P', detik] = jeda. */
(() => {
  /* ===================================================== LISTENING */
  const listening = {
    parts: [
      /* ---------- Part 1 ---------- */
      {
        title: 'Part 1',
        instr: 'Listen and answer questions 1–10.',
        range: [1, 10],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the form below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <div class="form-box">
                <h4>HOMEGUARD INSURANCE<br><span>Home Contents Quotation</span></h4>
                <table class="form-table">
                  <tr><td>Name:</td><td>Daniel [[1]]</td></tr>
                  <tr><td>Address:</td><td>Flat 3, [[2]] Court, Millbrook</td></tr>
                  <tr><td>Year building was built:</td><td>[[3]]</td></tr>
                  <tr><td>Security:</td><td>[[4]] alarm (no window locks)</td></tr>
                  <tr><td>Estimated value of contents:</td><td>£ [[5]]</td></tr>
                  <tr><td>Cover to start:</td><td>[[6]] March</td></tr>
                </table>
              </div>`,
            answers: {
              1: ['okafor'], 2: ['wexley'], 3: ['1962'], 4: ['burglar'],
              5: ['28000', '28,000', 'twenty-eight thousand'], 6: ['14', '14th', 'fourteenth']
            }
          },
          {
            type: 'gap', from: 7, to: 10,
            instr: 'Complete the table below.<br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Optional extra</th><th>Details</th><th>Cost per year</th></tr>
                <tr><td>Accidental damage</td><td>most common claim: paint or wine spilt on a [[7]]</td><td>£36</td></tr>
                <tr><td>Personal possessions</td><td>covers items taken outside the home, e.g. a [[8]]</td><td>£ [[9]]</td></tr>
                <tr><td>Legal expenses</td><td>not required</td><td>–</td></tr>
              </table>
              <p class="sent">Policy documents will be sent by [[10]].</p>`,
            answers: {
              7: ['carpet'], 8: ['laptop'], 9: ['54', 'fifty-four', 'fifty four'], 10: ['post']
            }
          }
        ],
        audio: [
          ['N', 'Part 1. You will hear a man telephoning an insurance company to arrange cover for the contents of his home. First, you have some time to look at questions 1 to 6.'],
          ['P', 25],
          ['N', 'Now listen carefully and answer questions 1 to 6.'],
          ['A', 'Good afternoon, Homeguard Insurance, Priya speaking. How can I help?'],
          ['B', "Hi. I've just moved into a new flat and I need to sort out contents insurance. I was hoping to get a quote."],
          ['A', "Certainly. I'll just take a few details. Can I start with your name?"],
          ['B', "Yes, it's Daniel Okafor."],
          ['A', 'And how do you spell your surname, Daniel?'],
          ['B', 'O, K, A, F, O, R.'],
          ['A', "O, K, A, F, O, R. Thank you. And the address of the property you'd like to insure?"],
          ['B', "It's Flat 3, Wexley Court. That's W, E, X, L, E, Y. It's in Millbrook."],
          ['A', 'Lovely. Do you happen to know when the building was built? It affects the price slightly.'],
          ['B', "Let me think. The letting agent said 1926 at first, but then he checked his file and it was actually 1962. It's one of those concrete blocks from the sixties."],
          ['A', '1962, fine. Now, what security do you have? Are there locks on the windows?'],
          ['B', "The windows don't have locks, unfortunately, but there's a burglar alarm. The landlord had it fitted last year."],
          ['A', "That's good. An alarm usually brings the price down a little. Next, I need an estimate of the total value of everything you own in the flat. Furniture, clothes, electrical goods, that sort of thing."],
          ['B', 'I actually worked it out last night. I thought it would be about twenty-five thousand pounds, but when I added in my camera equipment, it came to twenty-eight thousand.'],
          ['A', "So I'll put twenty-eight thousand pounds. It's always better not to underestimate. And when would you like the cover to start?"],
          ['B', "Well, my tenancy started on the tenth, but I'm not actually moving my things in until the fourteenth, so the fourteenth of March would be fine."],
          ['A', 'The fourteenth of March. Got it.'],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 7 to 10.'],
          ['P', 25],
          ['N', 'Now listen and answer questions 7 to 10.'],
          ['A', 'Now, there are some optional extras you might want to consider. The first is accidental damage.'],
          ['B', 'What does that cover, exactly?'],
          ['A', 'Things that get broken or damaged by accident inside the home. The most common claim we get is for paint or red wine spilt on a carpet.'],
          ['B', "Well, I'm planning to decorate the bedroom next month, so that might be useful. I was more worried about my sofa, to be honest, but that's got a stain-proof cover anyway."],
          ['A', 'Accidental damage costs thirty-six pounds a year.'],
          ['B', "Fine, I'll add that."],
          ['A', "The next one is personal possessions cover. That protects items you carry outside the home, for example a laptop, if it's lost or stolen while you're out."],
          ['B', "That's a good idea. I take mine to work most days. My phone's already insured through my mobile provider, so it's really just the laptop I'd need it for."],
          ['A', "That option used to be forty-five pounds a year, but I'm afraid it's recently gone up to fifty-four."],
          ['B', "Fifty-four. OK, that's still worth it."],
          ['A', "And finally there's legal expenses cover."],
          ['B', "No, I don't think I need that one."],
          ['A', "No problem. So, the policy documents. We can email them to you or send them by post."],
          ['B', "Normally I'd say email, but my laptop's being repaired this week, so could you send them by post?"],
          ['A', 'Of course. They should arrive within five working days.'],
          ['B', 'Great. Thanks very much for your help.'],
          ['N', 'That is the end of Part 1. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 2 ---------- */
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
              { n: 11, text: 'New volunteers are asked to commit to', options: [
                { k: 'A', t: 'one shift a week for at least six months.' },
                { k: 'B', t: 'two shifts a week for at least three months.' },
                { k: 'C', t: 'one shift every two weeks for a year.' }], answer: 'A' },
              { n: 12, text: 'Before their first shift, all volunteers must', options: [
                { k: 'A', t: 'attend a fire safety session.' },
                { k: 'B', t: 'have a health check.' },
                { k: 'C', t: 'complete an online course.' }], answer: 'C' },
              { n: 13, text: 'Volunteers who cannot attend a shift should', options: [
                { k: 'A', t: 'send a text message to their supervisor.' },
                { k: 'B', t: 'telephone the volunteer office.' },
                { k: 'C', t: 'email the volunteer team.' }], answer: 'B' },
              { n: 14, text: 'What does the speaker say about uniforms?', options: [
                { k: 'A', t: 'Volunteers must provide their own shirts.' },
                { k: 'B', t: 'Shirts are washed by the hospital laundry.' },
                { k: 'C', t: 'Identity badges must be visible at all times.' }], answer: 'C' }
            ]
          },
          {
            type: 'match', from: 15, to: 20,
            instr: `Label the plan below.<br>Write the correct letter, <b>A–H</b>, next to Questions 15–20.`,
            figure: `<svg viewBox="0 0 660 430" role="img" aria-label="Ground floor plan of St Aldwyn’s Hospital with locations A to H">
              <text class="fig-title" x="300" y="30" text-anchor="middle">St Aldwyn’s Hospital – Ground Floor</text>
              <rect class="area" x="300" y="50" width="100" height="90"/>
              <rect class="area" x="200" y="212" width="100" height="28"/>
              <line class="thin" x1="170" y1="50" x2="170" y2="140"/><line class="thin" x1="300" y1="50" x2="300" y2="140"/><line class="thin" x1="400" y1="50" x2="400" y2="140"/>
              <line class="thin" x1="40" y1="140" x2="560" y2="140"/>
              <line class="thin" x1="40" y1="190" x2="170" y2="190"/><line class="thin" x1="330" y1="190" x2="560" y2="190"/>
              <line class="thin" x1="170" y1="190" x2="170" y2="370"/><line class="thin" x1="330" y1="190" x2="330" y2="370"/>
              <line class="thin" x1="430" y1="190" x2="430" y2="280"/>
              <line class="thin" x1="40" y1="280" x2="170" y2="280"/><line class="thin" x1="330" y1="280" x2="560" y2="280"/>
              <path class="line" d="M220 370 H40 V50 H560 V370 H280"/>
              <text class="halo" x="350" y="100" text-anchor="middle">Lifts</text>
              <text x="300" y="170" text-anchor="middle">Main corridor</text>
              <text x="250" y="231" text-anchor="middle">Reception</text>
              <g class="lbl" text-anchor="middle">
                <rect class="box" x="93" y="83" width="24" height="24"/><text class="lbl" x="105" y="100">A</text>
                <rect class="box" x="223" y="83" width="24" height="24"/><text class="lbl" x="235" y="100">B</text>
                <rect class="box" x="468" y="83" width="24" height="24"/><text class="lbl" x="480" y="100">C</text>
                <rect class="box" x="93" y="223" width="24" height="24"/><text class="lbl" x="105" y="240">D</text>
                <rect class="box" x="368" y="223" width="24" height="24"/><text class="lbl" x="380" y="240">E</text>
                <rect class="box" x="483" y="223" width="24" height="24"/><text class="lbl" x="495" y="240">F</text>
                <rect class="box" x="93" y="313" width="24" height="24"/><text class="lbl" x="105" y="330">G</text>
                <rect class="box" x="433" y="313" width="24" height="24"/><text class="lbl" x="445" y="330">H</text>
              </g>
              <path class="solid" d="M250 380 l-9 16 h18 z"/>
              <text x="250" y="416" text-anchor="middle">Main entrance</text>
              <g class="compass" transform="translate(615 70)"><line class="thin" x1="0" y1="-18" x2="0" y2="18"/><line class="thin" x1="-18" y1="0" x2="18" y2="0"/><path class="solid" d="M0 -22 l-5 10 h10 z"/><path class="solid" d="M0 22 l-5 -10 h10 z"/><path class="solid" d="M22 0 l-10 -5 v10 z"/><path class="solid" d="M-22 0 l10 -5 v10 z"/><text x="0" y="-27" text-anchor="middle">N</text><text x="0" y="37" text-anchor="middle">S</text><text x="33" y="4" text-anchor="middle">E</text><text x="-33" y="4" text-anchor="middle">W</text></g>
            </svg>`,
            boxTitle: 'Locations on the plan',
            options: [
              { k: 'A', t: 'A' }, { k: 'B', t: 'B' }, { k: 'C', t: 'C' },
              { k: 'D', t: 'D' }, { k: 'E', t: 'E' }, { k: 'F', t: 'F' },
              { k: 'G', t: 'G' }, { k: 'H', t: 'H' }
            ],
            questions: [
              { n: 15, text: 'Volunteer office', answer: 'H' },
              { n: 16, text: 'Hospital shop', answer: 'D' },
              { n: 17, text: 'Café', answer: 'C' },
              { n: 18, text: 'Chapel', answer: 'A' },
              { n: 19, text: 'Staff lockers', answer: 'E' },
              { n: 20, text: 'Patient library', answer: 'B' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 2. You will hear a volunteer coordinator giving an induction talk to a group of new hospital volunteers. First, you have some time to look at questions 11 to 14.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 11 to 14.'],
          ['A', "Good morning, everyone, and welcome to Saint Aldwyn's Hospital. My name's Gareth Price, and I coordinate the volunteer programme here. I'd like to start by thanking you all for giving up your time. Volunteers make a huge difference to our patients, whether that's chatting to someone who hasn't had a visitor all week, or helping a worried relative find the right ward."],
          ['A', "Let me begin with what we ask of you. When the programme first started, we asked volunteers to do two shifts a week, but we found that was too much for a lot of people, especially those with jobs or young families. So now the minimum is one shift a week, and we ask you to stay with us for at least six months. That gives you time to get to know the staff, and for the staff to get to know you."],
          ['A', "You've all had your identity checks and references done, so thank you for that. Some hospitals also insist on a health check, but we don't require one here. The one thing you absolutely must do before your first shift is complete our infection control course. It's done online and takes about an hour. Fire safety is important too, of course, but your supervisor will go through that with you in person on your first day."],
          ['A', "Now, inevitably there will be times when you can't come in. If that happens, please don't send a text message to your supervisor. They're usually busy on the ward and may not see it for hours. And the volunteer email inbox isn't checked at weekends. So please ring the volunteer office directly, and if nobody answers, leave a voicemail. We'll make sure the ward is told."],
          ['A', "Finally, uniforms. You'll each be given two green polo shirts. In the past these were washed in the hospital laundry, but these days we ask you to wash them at home. You'll need to wear your own dark trousers or skirt. And the most important rule of all: your identity badge must be clearly visible at all times while you're in the building, even when you're on a break in the café."],
          ['N', 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 15 to 20.'],
          ['A', "Right. If you look at the plan of the ground floor I've given you, I'll show you where the key places are. You'll come in through the main entrance, at the bottom of the plan. The first room you need to know is the volunteer office, because that's where you sign in at the start of every shift. It's immediately on your right as you come through the entrance doors, so you can't miss it."],
          ['A', "Straight ahead of you as you come in is the main reception desk. To the left of reception is the hospital shop. It's run entirely by volunteers, and some of you will be working there. Please don't confuse it with the room in the corner on your left, right beside the entrance. That's the visitors' cloakroom."],
          ['A', "Walk past reception and you'll come to the main corridor, which runs across the whole building. If you turn right and go past the lifts, the café is the last room on your left, right at the end of the corridor. Opposite the café, on the other side of the corridor, is the X-ray waiting area, which is often very busy, so do keep the corridor clear there."],
          ['A', "If you turn left at the corridor instead, you'll find the chapel at the far end, in the corner on your right. It's open to people of all faiths, or none, and it's a quiet place if a relative needs somewhere to sit."],
          ['A', "Now, where do you leave your coats and bags? The staff lockers are directly to the right of reception, between reception and the X-ray waiting area. You'll be given a key on your first day."],
          ['A', "And last but not least, the patient library. It's between the chapel and the lifts, on the far side of the corridor. Volunteers take a trolley of books from there up to the wards every morning."],
          ['A', "OK, that's the ground floor. Let's take a short break now, and then we'll go and see the wards."],
          ['N', 'That is the end of Part 2. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 3 ---------- */
      {
        title: 'Part 3',
        instr: 'Listen and answer questions 21–30.',
        range: [21, 30],
        speakers: { A: 'f', B: 'm' },
        groups: [
          {
            type: 'multi', from: 21, to: 22, ns: [21, 22],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> requirements of the project brief do the students mention?',
            options: [
              { k: 'A', t: 'The model must cross a gap of 60 centimetres.' },
              { k: 'B', t: 'Only balsa wood and glue may be used.' },
              { k: 'C', t: 'The model must weigh no more than 250 grams.' },
              { k: 'D', t: 'The model must be finished within two weeks.' },
              { k: 'E', t: 'The report must include a breakdown of costs.' }
            ],
            answers: ['A', 'C']
          },
          {
            type: 'mc', from: 23, to: 26,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 23, text: 'Why did Leo originally want to build an arch bridge?', options: [
                { k: 'A', t: 'He thought it would look impressive.' },
                { k: 'B', t: 'He had built one before.' },
                { k: 'C', t: 'It would need fewer materials.' }], answer: 'B' },
              { n: 24, text: 'What went wrong with the first test model?', options: [
                { k: 'A', t: 'The glue did not dry properly.' },
                { k: 'B', t: 'The joints broke apart.' },
                { k: 'C', t: 'The deck bent in the middle.' }], answer: 'C' },
              { n: 25, text: 'How does Maya suggest solving the problem?', options: [
                { k: 'A', t: 'by adding diagonal pieces' },
                { k: 'B', t: 'by using thicker strips of wood' },
                { k: 'C', t: 'by making the span shorter' }], answer: 'A' },
              { n: 26, text: 'How will the students apply the load when testing?', options: [
                { k: 'A', t: 'by adding sand to a bucket' },
                { k: 'B', t: 'by using metal weights from the lab' },
                { k: 'C', t: 'by filling a container with water' }], answer: 'A' }
            ]
          },
          {
            type: 'match', from: 27, to: 30,
            instr: 'What comment do the students make about each bridge design?<br>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 27–30.',
            boxTitle: 'Comments',
            options: [
              { k: 'A', t: 'It would be difficult to build accurately.' },
              { k: 'B', t: 'It would be too heavy.' },
              { k: 'C', t: 'It was used by last year’s winning team.' },
              { k: 'D', t: 'It has the best strength-to-weight ratio.' },
              { k: 'E', t: 'It is the least attractive design.' },
              { k: 'F', t: 'It would need too much string.' }
            ],
            questions: [
              { n: 27, text: 'beam bridge', answer: 'E' },
              { n: 28, text: 'arch bridge', answer: 'A' },
              { n: 29, text: 'suspension bridge', answer: 'F' },
              { n: 30, text: 'truss bridge', answer: 'D' }
            ]
          }
        ],
        audio: [
          ['N', 'Part 3. You will hear two engineering students, Maya and Leo, discussing a project in which they have to design and build a model bridge. First, you have some time to look at questions 21 to 26.'],
          ['P', 30],
          ['N', 'Now listen carefully and answer questions 21 to 26.'],
          ['B', "OK, Maya, shall we go over the project brief again before we decide anything? I want to make sure we haven't missed something."],
          ['A', 'Good idea. So, the main thing is the span. The model has to cross a gap of sixty centimetres between two tables.'],
          ['B', 'Right. And we can only use balsa wood strips and glue.'],
          ['A', "Not quite. We're allowed string as well, up to two metres of it. It says so in the materials list at the bottom."],
          ['B', "Oh, I missed that. And there's a weight limit, isn't there?"],
          ['A', "Yes, the finished model can't weigh more than two hundred and fifty grams. That's going to be the hard part."],
          ['B', "And we've got two weeks to build it?"],
          ['A', "Three, actually. The deadline was extended. And we have to hand in a written report, but it's about the design process, not the costs, so we don't need to worry about prices."],
          ['B', 'Good. Now, about the design. I know I was keen on an arch at first.'],
          ['A', 'I assumed that was because arches look so impressive.'],
          ['B', "That's not really why. I built one for a school competition years ago, so I felt I knew what I was doing. But I'm open to other ideas."],
          ['A', "Well, the first test model we made last week didn't go very well."],
          ['B', "No. At first I thought the glue hadn't dried properly, but when I looked at it again, the joints were fine. The real problem was the deck. It sagged badly in the middle as soon as we put any weight on it."],
          ['A', "So how do we fix that? We can't make the span shorter, obviously, because that's fixed. We could use thicker strips of wood, but then we'd go over the weight limit."],
          ['B', 'True.'],
          ['A', "What I think we should do is add diagonal pieces underneath the deck, so they form triangles. They'd stiffen it without adding much weight."],
          ['B', 'That makes sense. And for testing, how are we going to put the load on? The lab has a set of metal weights.'],
          ['A', "Yes, but they go up in steps of five hundred grams, which is far too big a jump. I'd rather hang a bucket from the middle and gradually pour sand into it. Then we can weigh the sand afterwards."],
          ['B', "What about water? That'd be easier to pour."],
          ['A', 'It could spill and soak the wood. Sand is safer.'],
          ['B', 'OK, sand it is.'],
          ['N', 'Before you hear the rest of the conversation, you have some time to look at questions 27 to 30.'],
          ['P', 30],
          ['N', 'Now listen and answer questions 27 to 30.'],
          ['A', "Let's look at the four basic designs in the textbook before we commit to anything. The beam bridge first."],
          ['B', "Well, it's the simplest. It would probably be strong enough, but it's so plain. Of all the designs, it's definitely the least attractive, and part of the mark is for appearance."],
          ['A', 'Agreed. And the arch?'],
          ['B', "I still like it, but getting the balsa to curve evenly is really hard. If one side bends more than the other, it's very difficult to build accurately, and the whole thing would be weak."],
          ['A', "What about a suspension bridge? People assume they're heavy, but they're not, really."],
          ['B', "No, weight isn't the issue. It's the cables. We'd need a huge amount of string, far more than the two metres the brief allows."],
          ['A', 'True. So that leaves the truss.'],
          ['B', "The team that won last year used a truss, didn't they?"],
          ['A', "No, theirs was a cantilever design. But the truss is made entirely of triangles, and of the four, it gives you the best strength-to-weight ratio. With our weight limit, that's what matters most."],
          ['B', "Then let's go with the truss, and use your diagonal bracing idea underneath the deck as well."],
          ['A', "Perfect. I'll start on the drawings tonight."],
          ['N', 'That is the end of Part 3. You now have 30 seconds to check your answers.'],
          ['P', 30]
        ]
      },

      /* ---------- Part 4 ---------- */
      {
        title: 'Part 4',
        instr: 'Listen and answer questions 31–40.',
        range: [31, 40],
        speakers: { A: 'f' },
        groups: [
          {
            type: 'mc', from: 31, to: 33,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.',
            questions: [
              { n: 31, text: 'Which belief about where birds go in winter lasted the longest?', options: [
                { k: 'A', t: 'They hibernated in mud under water.' },
                { k: 'B', t: 'They changed into other species.' },
                { k: 'C', t: 'They hid in caves and hollow trees.' }], answer: 'A' },
              { n: 32, text: 'The stork found in Germany in 1822 was important because it', options: [
                { k: 'A', t: 'was the first bird ever marked by humans.' },
                { k: 'B', t: 'proved that a bird had travelled a long distance.' },
                { k: 'C', t: 'had survived a very serious injury.' }], answer: 'B' },
              { n: 33, text: 'The lecturer mentions the bar-tailed godwit as an example of a bird which', options: [
                { k: 'A', t: 'flies faster than any other species.' },
                { k: 'B', t: 'makes the longest non-stop flight.' },
                { k: 'C', t: 'is the smallest long-distance migrant.' }], answer: 'B' }
            ]
          },
          {
            type: 'gap', from: 34, to: 40,
            instr: 'Complete the notes below.<br>Write <b>ONE WORD ONLY</b> for each answer.',
            template: `
              <div class="notes-box">
                <h4>How migrating birds navigate</h4>
                <ul>
                  <li><b>Sun:</b> birds allow for its movement across the sky by using an internal [[34]]</li>
                  <li><b>Stars:</b> young birds learn the centre of rotation of the night sky while still in the [[35]]</li>
                  <li><b>Earth’s [[36]] field:</b> possibly detected by special proteins in the eyes</li>
                  <li><b>Landmarks</b> (near the destination): rivers, mountain ranges and [[37]]</li>
                </ul>
                <h4>Threats</h4>
                <ul>
                  <li>Artificial [[38]] attracts birds flying at night and disorients them</li>
                  <li>Loss of [[39]] which birds use as refuelling stops</li>
                  <li>Climate change: the peak in [[40]] numbers now comes earlier, so chicks miss the main food supply</li>
                </ul>
              </div>`,
            answers: {
              34: ['clock'], 35: ['nest'], 36: ['magnetic'], 37: ['coastlines', 'coastline', 'coasts'],
              38: ['lighting', 'light', 'lights'], 39: ['wetlands', 'wetland'], 40: ['insect', 'insects']
            }
          }
        ],
        audio: [
          ['N', 'Part 4. You will hear a lecture about bird migration. First, you have some time to look at questions 31 to 40.'],
          ['P', 35],
          ['N', 'Now listen carefully and answer questions 31 to 40.'],
          ['A', "Good morning. Today I'm going to talk about one of the most remarkable phenomena in the natural world: bird migration. Every year, billions of birds travel between their breeding grounds and the places where they spend the winter, and some of these journeys cover tens of thousands of kilometres."],
          ['A', 'For most of human history, people had no idea where birds went in winter. The Greek philosopher Aristotle suggested that some species transformed into other species as the seasons changed. Other writers proposed that birds simply hid in caves or hollow trees. But the belief that survived the longest, well into the eighteenth century, was that swallows spent the winter hibernating in the mud at the bottom of ponds and lakes.'],
          ['A', "Real evidence began to appear in the nineteenth century. In 1822, a white stork was found in a German village with an African spear through its neck. It wasn't the first bird to be marked by humans in some way, and surprisingly, the spear hadn't injured it very seriously. What made it so important was that it proved the bird had made a long-distance journey to Africa and back. Systematic ringing of birds, with small numbered metal rings on their legs, only began towards the end of that century."],
          ['A', "Today, thanks to tiny tracking devices, we know a great deal more. Take the bar-tailed godwit. It isn't the fastest bird, and it certainly isn't the smallest, but it holds the record for the longest non-stop flight of any bird, travelling from Alaska to New Zealand, more than eleven thousand kilometres, without stopping to eat or rest."],
          ['A', 'So how do birds find their way? Scientists believe they use several methods, often in combination. The first is the sun. The difficulty is that the sun moves across the sky during the day, so birds must compensate for this, and they do so by using an internal clock. In experiments where this clock was artificially shifted by several hours, birds set off in the wrong direction.'],
          ['A', "Many species migrate at night, and these birds use the stars. Interestingly, they don't seem to be born knowing particular constellations. Instead, young birds learn which part of the night sky stays still, in other words the centre of rotation, while they are still in the nest. This was demonstrated in planetarium experiments in which the artificial sky was made to rotate around a different star."],
          ['A', "A third method involves the Earth's magnetic field. Birds are able to detect it, possibly through special proteins in their eyes, which may allow them to actually see magnetic lines in some way. This is still an area of very active research."],
          ['A', 'Finally, as birds get closer to their destination, they seem to rely more on landmarks, such as rivers, mountain ranges and coastlines. Some researchers also believe that seabirds use their sense of smell, but the evidence for that is still being debated.'],
          ['A', 'Let me turn now to the threats that migrating birds face. One growing problem is artificial lighting. Birds flying at night are attracted to brightly lit buildings, where they can become disoriented and exhausted, or collide with glass. Some cities now switch off decorative lighting during peak migration periods.'],
          ['A', 'A second threat is the loss of wetlands. Many species depend on them as refuelling stops along the route, where they can rest and feed. When these areas are drained for farming or development, birds may simply not have enough energy to complete the journey.'],
          ['A', "And lastly, climate change. Many birds time their departure using day length, which of course hasn't changed. But warmer springs mean that the peak in insect numbers now comes earlier in the year. So by the time the birds arrive and their chicks hatch, the main food supply has already passed its peak."],
          ['A', "In the next lecture, we'll look at some of the conservation projects that are trying to address these problems."],
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
          title: 'Sugar: From Luxury to Staple',
          html: `
<p>Few substances have shaped human history as profoundly as sugar. Today it is so cheap and so widely available that it is easy to forget that for most of the past two thousand years it was a rare luxury, enjoyed only by the wealthy. The story of how sugar travelled from the forests of the Pacific to almost every kitchen on earth is also a story of trade, empire and human suffering.</p>
<p>Sugarcane, a tall tropical grass, appears to have been domesticated in New Guinea around 8000 BCE. The earliest growers did not extract sugar from it at all; instead, they simply chewed the stalks to enjoy the sweet juice inside. Over thousands of years the plant spread slowly westward through South-East Asia and eventually reached India. It was there, probably around the fourth century CE, that people first discovered how to boil the juice and turn it into solid crystals that could be stored and transported. The Sanskrit word for these grains, <i>sharkara</i>, is the distant ancestor of the English word ‘sugar’.</p>
<p>The ability to produce crystals transformed sugar from a local snack into a valuable trading commodity. Persian traders carried the knowledge west, and after the expansion of the Arab world in the seventh and eighth centuries, sugarcane was planted across the Middle East, North Africa and southern Spain. Arab cooks developed elaborate sweets and syrups, and physicians recommended sugar as a remedy for a range of illnesses, from coughs to stomach complaints.</p>
<p>Europeans north of the Mediterranean came to know sugar largely through contact with the Arab world, including during the Crusades. For centuries it remained extremely expensive. In medieval England it was classed alongside pepper and cinnamon as a spice, and it was sold in small quantities by apothecaries, who also prepared medicines. A wealthy household might keep its sugar in a locked box, while the rest of the population sweetened their food, if at all, with honey.</p>
<p>By the fifteenth century the Italian city of Venice had become the dominant force in the European sugar trade. Raw sugar was shipped in from Egypt, Cyprus and other parts of the eastern Mediterranean, and Venetian workshops specialised in refining it into the whiter, purer product that rich customers preferred. Refined sugar was moulded into tall cones, which could be broken into pieces as needed, and skilled confectioners even created sculptures from it to decorate banquet tables.</p>
<p>The decisive shift came with European expansion into the Atlantic. Portuguese settlers established sugar estates on the island of Madeira in the fifteenth century, and Christopher Columbus took sugarcane cuttings to the Caribbean on his second voyage in 1493. Over the following two centuries, vast plantations were created in Brazil and across the Caribbean islands. Growing and processing cane was exhausting and dangerous work, and plantation owners relied on enslaved labour brought by force from Africa. Millions of people were transported across the Atlantic to produce sugar for European markets, a trade whose consequences are still felt today.</p>
<p>As production increased, prices fell, and sugar became part of everyday life, particularly in Britain. Combined with tea, another imported product, it provided a cheap source of energy for factory workers during the Industrial Revolution. Historians estimate that average consumption in England increased several times over during the eighteenth century, although such figures are based on import records and are necessarily approximate.</p>
<p>Meanwhile, scientists in Europe were searching for an alternative source. In 1747 the German chemist Andreas Marggraf showed that the sugar found in beetroot was chemically identical to that obtained from cane. His student Franz Achard developed a variety of beet with a higher sugar content and, in 1801, opened the first factory to extract sugar from beet, in Silesia. The industry received a major boost a few years later, when a British naval blockade cut France off from Caribbean supplies and Napoleon ordered large areas of land to be planted with sugar beet. Because beet can be grown in cool climates, it allowed countries without tropical colonies to produce their own sugar, and by the end of the nineteenth century beet accounted for more than half of the world’s output.</p>
<p>In the twentieth century, sugar consumption continued to climb in most industrialised countries, interrupted only by rationing during the two world wars. More recently, concern about obesity, diabetes and tooth decay has led a number of governments to introduce taxes on sugary drinks. Whether such measures will reverse a habit that took centuries to form remains to be seen.</p>`
        },
        groups: [
          {
            type: 'gap', from: 1, to: 6,
            instr: 'Complete the table below.<br>Choose <b>ONE WORD ONLY</b> from the passage for each answer.',
            template: `
              <table class="form-table">
                <tr><th>Place and time</th><th>Development</th></tr>
                <tr><td>New Guinea, c. 8000 BCE</td><td>earliest growers [[1]] the stalks to obtain the juice</td></tr>
                <tr><td>India, c. 4th century CE</td><td>juice boiled to make [[2]]</td></tr>
                <tr><td>Medieval England</td><td>sugar classed as a [[3]] and sold by apothecaries</td></tr>
                <tr><td>Venice, 15th century</td><td>workshops specialised in [[4]] imported raw sugar</td></tr>
                <tr><td>Brazil and the Caribbean</td><td>plantations relied on enslaved [[5]]</td></tr>
                <tr><td>Silesia, 1801</td><td>first factory to extract sugar from [[6]]</td></tr>
              </table>`,
            answers: {
              1: ['chewed'], 2: ['crystals'], 3: ['spice'], 4: ['refining'], 5: ['labour', 'labor'], 6: ['beet', 'beetroot']
            }
          },
          {
            type: 'tf', variant: 'tf', from: 7, to: 13,
            instr: 'Do the following statements agree with the information given in Reading Passage 1?<br>Write <b>TRUE</b> if the statement agrees with the information, <b>FALSE</b> if the statement contradicts the information, <b>NOT GIVEN</b> if there is no information on this.',
            questions: [
              { n: 7, text: 'Arab doctors believed that sugar could help to cure certain illnesses.', answer: 'TRUE' },
              { n: 8, text: 'Most people in medieval England who sweetened their food used honey.', answer: 'TRUE' },
              { n: 9, text: 'In the fifteenth century, Venice grew much of its own sugarcane.', answer: 'FALSE' },
              { n: 10, text: 'Columbus introduced sugarcane to the Caribbean on his first voyage there.', answer: 'FALSE' },
              { n: 11, text: 'The sugar estates on Madeira were more profitable than those in Brazil.', answer: 'NOT GIVEN' },
              { n: 12, text: 'Marggraf opened the world’s first beet sugar factory.', answer: 'FALSE' },
              { n: 13, text: 'Britain was the first country to introduce a tax on sugary drinks.', answer: 'NOT GIVEN' }
            ]
          }
        ]
      },

      /* ---------- Passage 2 ---------- */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
        range: [14, 26],
        passage: {
          title: 'Building by Numbers: 3D Printing in Construction',
          html: `
<p><b class="para">A</b> On a quiet plot of land at the edge of a city, a machine that looks rather like an oversized crane is moving slowly back and forth. From a nozzle at the end of its arm, a thick grey paste flows out in a continuous ribbon, and with each pass the ribbon settles on top of the one below. Within hours, the outline of a house has risen from the ground. This is 3D-printed construction. The printer, which may be mounted on a fixed frame called a gantry or on a robotic arm, follows instructions taken directly from a digital model of the building. It deposits a specially formulated concrete mix in layers a few centimetres thick, gradually building up walls without the need for bricks, blocks or the wooden moulds normally used to shape concrete.</p>
<p><b class="para">B</b> The idea is not as new as it might appear. Engineers began experimenting with printing building components in the late 1990s, adapting techniques that had previously been used to make small plastic prototypes in factories. For many years, however, the results remained largely confined to university laboratories and trade exhibitions. It is only in the last decade that printed homes, offices and even footbridges have been completed and put into use, partly because printers have become larger and more reliable, and partly because software for converting architectural drawings into printing instructions has improved dramatically.</p>
<p><b class="para">C</b> Supporters of the technology point to a number of advantages. The first is speed: once a site has been prepared, the walls of a small house can be printed in under two days of machine time, although finishing the building takes considerably longer. The second is a reduction in waste. Conventional construction generates enormous quantities of rubbish, from broken bricks to discarded timber, whereas a printer deposits material only where it is needed. A third benefit is freedom of design. On a traditional site, a curved wall is expensive because it requires custom-made moulds and skilled labour; for a printer, a curve costs no more than a straight line, which allows architects to experiment with shapes that would otherwise be unaffordable.</p>
<p><b class="para">D</b> The technology could also change who works on building sites. A printed wall requires only a small team to operate and supervise the machine, compared with the bricklayers, carpenters and labourers needed for a conventional build. In countries facing a shortage of skilled tradespeople, this is presented as a major advantage. Critics, however, warn that widespread adoption could put construction workers out of work, particularly in regions where building provides one of the few sources of stable employment. Supporters counter that the industry will need new kinds of specialists, such as technicians to programme, operate and maintain the printers, and that these roles may well be safer and better paid.</p>
<p><b class="para">E</b> Nevertheless, significant technical obstacles remain. The printing material must satisfy two apparently contradictory requirements: it has to be fluid enough to be pumped through a hose and nozzle, yet it must set quickly enough to support the weight of the layers placed on top of it. Getting this balance right demands careful control of the mix. Reinforcement is another challenge. Ordinary concrete structures contain steel bars that give them strength under tension, but these are difficult to combine with a continuous printing process, so many printed walls rely instead on thicker sections or on fibres mixed into the concrete. Finally, the weather can cause problems. Because temperature and humidity affect how quickly the material hardens, printing in the open air can produce inconsistent results, and some companies have chosen to print wall sections inside factories and transport them to the site.</p>
<p><b class="para">F</b> Beyond the technical difficulties, there are regulatory and financial hurdles. Building codes in most countries were written with conventional methods in mind, and printed structures do not always fit neatly into existing categories, which can lead to lengthy approval processes. Banks and other lenders have been reluctant to offer mortgages on printed homes, and insurers have also been cautious, largely because there is little long-term data on how such buildings perform over several decades. Several testing programmes are now under way to address this gap, but their results will take years to emerge.</p>
<p><b class="para">G</b> Looking ahead, much attention is focused on the environment. Cement production is responsible for a substantial share of global carbon dioxide emissions, and although printing uses less material overall, most printed buildings still rely heavily on cement-based mixes. Researchers are therefore experimenting with alternatives, including local soil and recycled materials such as crushed glass. Space agencies have even investigated whether printers could one day use lunar dust to construct shelters on the Moon, avoiding the enormous cost of transporting materials from Earth. For the foreseeable future, though, most experts expect printing to complement conventional building rather than replace it, with printed walls combined with roofs, windows and plumbing installed in the usual way.</p>`
        },
        groups: [
          {
            type: 'match', from: 14, to: 18,
            instr: 'Reading Passage 2 has seven paragraphs, <b>A–G</b>.<br>Which paragraph contains the following information?<br>Write the correct letter, <b>A–G</b>. <b>NB</b> You may use any letter more than once.',
            boxTitle: 'Paragraphs',
            options: [
              { k: 'A', t: 'Paragraph A' }, { k: 'B', t: 'Paragraph B' }, { k: 'C', t: 'Paragraph C' },
              { k: 'D', t: 'Paragraph D' }, { k: 'E', t: 'Paragraph E' }, { k: 'F', t: 'Paragraph F' },
              { k: 'G', t: 'Paragraph G' }
            ],
            questions: [
              { n: 14, text: 'a reference to the difficulty of obtaining loans for printed buildings', answer: 'F' },
              { n: 15, text: 'an explanation of why printing outdoors may be unreliable', answer: 'E' },
              { n: 16, text: 'a description of how a printed wall is produced', answer: 'A' },
              { n: 17, text: 'a mention of new kinds of jobs that the technology could create', answer: 'D' },
              { n: 18, text: 'a possible use of the technology beyond Earth', answer: 'G' }
            ]
          },
          {
            type: 'multi', from: 19, to: 20, ns: [19, 20],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> advantages of 3D-printed construction are mentioned in paragraph C?',
            options: [
              { k: 'A', t: 'lower running costs for the people who live in the buildings' },
              { k: 'B', t: 'less material thrown away' },
              { k: 'C', t: 'the ability to produce curved walls at no extra cost' },
              { k: 'D', t: 'no need to prepare the site before building' },
              { k: 'E', t: 'faster completion of the whole building, including finishing' }
            ],
            answers: ['B', 'C']
          },
          {
            type: 'multi', from: 21, to: 22, ns: [21, 22],
            instr: 'Choose <b>TWO</b> letters, <b>A–E</b>.',
            text: 'Which <b>TWO</b> problems with the printing material does the writer mention?',
            options: [
              { k: 'A', t: 'It must flow easily but also harden fast.' },
              { k: 'B', t: 'It costs more than ordinary concrete.' },
              { k: 'C', t: 'It is hard to use together with steel reinforcement.' },
              { k: 'D', t: 'It cracks when the temperature falls below freezing.' },
              { k: 'E', t: 'It releases harmful fumes while being printed.' }
            ],
            answers: ['A', 'C']
          },
          {
            type: 'gap', from: 23, to: 26,
            instr: 'Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.',
            template: `
              <p class="sent"><b>23</b> The printer receives its instructions from a [[23]] of the building.</p>
              <p class="sent"><b>24</b> Critics are concerned that [[24]] could lose their jobs if the technology becomes common.</p>
              <p class="sent"><b>25</b> Insurers are hesitant partly because of a lack of [[25]] on how printed buildings perform.</p>
              <p class="sent"><b>26</b> Possible substitutes for cement-based mixes include [[26]] and recycled materials.</p>`,
            answers: {
              23: ['digital model'], 24: ['construction workers'], 25: ['long-term data', 'long term data'], 26: ['local soil', 'soil']
            }
          }
        ]
      },

      /* ---------- Passage 3 ---------- */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
        range: [27, 40],
        passage: {
          title: 'Tomorrow, Always Tomorrow: Why We Procrastinate',
          html: `
<p><b class="para">A</b> Procrastination is often described as a modern affliction, the inevitable result of smartphones, social media and an endless stream of entertainment. Yet the habit is far older than any of these. Writers in ancient Greece puzzled over why people knowingly act against their own best interests, and Roman politicians complained of colleagues who postponed urgent decisions. What has changed is not the existence of procrastination but our understanding of it. Over the past three decades, psychologists have moved away from treating it as a simple failure of organisation and towards seeing it as a complex problem of emotion and identity.</p>
<p><b class="para">B</b> It is important first to distinguish procrastination from ordinary delay. Postponing a task can be perfectly rational: a doctor who waits for test results before choosing a treatment is not procrastinating. Researchers reserve the term for the voluntary delay of an intended action despite expecting to be worse off as a result. The procrastinator, in other words, knows that putting off the task is likely to cause stress, lower-quality work or missed opportunities, and does it anyway. Large-scale surveys conducted by the sociologist Dr Rachel Ebdon suggest that around one in five adults regard themselves as chronic procrastinators, a proportion that appears in studies across many different countries.</p>
<p><b class="para">C</b> For a long time, the standard explanation was poor time management: if people only planned better, the reasoning went, they would get things done. Dr Helena Marsh, who has studied the problem for over twenty years, argues that this misses the point entirely. In her view, procrastination is fundamentally about mood. People avoid tasks that make them feel anxious, bored or inadequate, and the delay provides immediate, if temporary, relief from those feelings. In one experiment, Marsh’s team put participants in a sad mood and then gave them a choice between practising for an upcoming test and playing games. Half were told that a herbal tablet they had taken – which in fact contained no active ingredient – would ‘freeze’ their mood for an hour, making any attempt to cheer themselves up pointless. Those participants practised just as much as people in a neutral mood; it was only those who believed that distraction could lift their mood who put off practising. This helps to explain why time-management courses so often disappoint: they offer people a better schedule without addressing the feelings that made them abandon the previous one.</p>
<p><b class="para">D</b> A second line of research concerns how we think about the future. Professor Kenji Arata used brain scanning to compare what happened when volunteers thought about themselves now, about themselves ten years in the future, and about a stranger. Strikingly, the pattern of activity for the future self resembled that for the stranger more closely than that for the present self. If the person who will face tomorrow’s deadline feels like someone else, Arata suggests, it becomes much easier to leave the problem to them. In a follow-up study, participants who were shown digitally aged images of their own faces were more willing to put money aside for retirement than those who saw images of their current selves, suggesting that the future self can be made to feel more real.</p>
<p><b class="para">E</b> Perfectionism is frequently blamed for procrastination, and many people describe themselves as delaying because they want to do a task perfectly. However, Dr Lucia Ferrante, who reviewed dozens of studies on the subject, found that the link between high personal standards and delay was much weaker than is popularly believed. What did predict procrastination was a fear of being judged by others: people who worried that their work would expose them as incompetent were far more likely to put it off. Ferrante therefore argues that it is anxiety about evaluation, rather than the pursuit of excellence itself, that keeps people from starting.</p>
<p><b class="para">F</b> Modern technology has not created procrastination, but it has undoubtedly made it easier. A generation ago, a student avoiding an essay might tidy a desk or make a cup of tea; today, an almost limitless supply of distraction is available in a pocket, and much of it is deliberately designed to be difficult to put down. Every notification offers precisely the brief escape from discomfort that, according to Marsh, the procrastinator is seeking.</p>
<p><b class="para">G</b> What, then, can be done? One of the most promising techniques is what Professor Owen Bryce calls ‘if–then planning’. Rather than resolving vaguely to work harder, people specify exactly when and where they will act: ‘If it is nine o’clock and I am at my desk, then I will open the report.’ Bryce’s studies show that such plans significantly increase the likelihood of starting, partly because they remove the need to make a fresh decision at the critical moment. He also recommends reducing the first step to something almost absurdly small, such as writing a single sentence, since starting is usually the hardest part. Strategies of this kind are, in my view, likely to achieve far more than simply relying on willpower, which tends to be weakest precisely when a task feels most unpleasant.</p>
<p><b class="para">H</b> Perhaps the most surprising finding comes from Dr Samira Haddad, who followed university students through their first year of examinations. Students who forgave themselves for procrastinating before the first set of exams were less likely to procrastinate before the next set. Self-criticism, it seems, simply adds another layer of negative emotion to the task, making it even more tempting to avoid. Far from being a sign of weakness, then, a measure of kindness towards oneself may be one of the most effective tools against delay. Procrastination is not a character flaw to be punished, nor a simple matter of laziness, but a very human response to discomfort, and it is best treated as such.</p>`
        },
        groups: [
          {
            type: 'mc', from: 27, to: 30,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 27, text: 'In paragraph A, the writer suggests that procrastination', options: [
                { k: 'A', t: 'is mainly a consequence of modern technology.' },
                { k: 'B', t: 'has been recognised as a problem for a very long time.' },
                { k: 'C', t: 'affects politicians more than other groups.' },
                { k: 'D', t: 'is now less common than it was in the past.' }], answer: 'B' },
              { n: 28, text: 'According to paragraph B, procrastination differs from other kinds of delay because the person', options: [
                { k: 'A', t: 'does not realise that they are delaying.' },
                { k: 'B', t: 'is waiting for more information before acting.' },
                { k: 'C', t: 'expects the delay to have negative results.' },
                { k: 'D', t: 'only puts off tasks that are unimportant.' }], answer: 'C' },
              { n: 29, text: 'What did Marsh’s experiment with the herbal tablet show?', options: [
                { k: 'A', t: 'People in a sad mood always delayed more than people in a neutral mood.' },
                { k: 'B', t: 'The tablet made it easier for participants to concentrate.' },
                { k: 'C', t: 'Sad participants found games less attractive than practice.' },
                { k: 'D', t: 'People delayed mainly when they thought it could improve how they felt.' }], answer: 'D' },
              { n: 30, text: 'What was the effect of showing participants digitally aged images of themselves?', options: [
                { k: 'A', t: 'They were more prepared to save money for the future.' },
                { k: 'B', t: 'They became more anxious about getting old.' },
                { k: 'C', t: 'They completed tasks more quickly.' },
                { k: 'D', t: 'They found it harder to recognise themselves.' }], answer: 'A' }
            ]
          },
          {
            type: 'match', from: 31, to: 35,
            instr: 'Look at the following statements (Questions 31–35) and the list of researchers below.<br>Match each statement with the correct researcher, <b>A–F</b>.',
            boxTitle: 'List of Researchers',
            options: [
              { k: 'A', t: 'Helena Marsh' },
              { k: 'B', t: 'Kenji Arata' },
              { k: 'C', t: 'Lucia Ferrante' },
              { k: 'D', t: 'Owen Bryce' },
              { k: 'E', t: 'Samira Haddad' },
              { k: 'F', t: 'Rachel Ebdon' }
            ],
            questions: [
              { n: 31, text: 'Thinking about oneself in the future can resemble thinking about another person.', answer: 'B' },
              { n: 32, text: 'Being kind to oneself after a delay can make further delay less likely.', answer: 'E' },
              { n: 33, text: 'People put off tasks to gain short-term relief from unpleasant feelings.', answer: 'A' },
              { n: 34, text: 'Deciding in advance on a precise time and place to act makes starting more likely.', answer: 'D' },
              { n: 35, text: 'The role of high standards as a cause of delay has been exaggerated.', answer: 'C' }
            ]
          },
          {
            type: 'tf', variant: 'yn', from: 36, to: 40,
            instr: 'Do the following statements agree with the views of the writer in Reading Passage 3?<br>Write <b>YES</b> if the statement agrees with the views of the writer, <b>NO</b> if the statement contradicts the views of the writer, <b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this.',
            questions: [
              { n: 36, text: 'Time-management courses are an effective solution for most procrastinators.', answer: 'NO' },
              { n: 37, text: 'Digital devices have made it easier for people to avoid tasks.', answer: 'YES' },
              { n: 38, text: 'Employers should provide staff with training in self-compassion.', answer: 'NOT GIVEN' },
              { n: 39, text: 'Making the first step very small is likely to be more useful than relying on willpower.', answer: 'YES' },
              { n: 40, text: 'Procrastination is essentially a result of laziness.', answer: 'NO' }
            ]
          }
        ]
      }
    ]
  };

  /* ===================================================== READING GENERAL TRAINING */
  const readingGeneral = {
    parts: [
      /* ---------- Section 1 ---------- */
      {
        title: 'Part 1',
        instr: 'You should spend about 20 minutes on Questions 1–14, which are based on Section 1 below.',
        range: [1, 14],
        passage: {
          title: 'City Information',
          html: `
<h3><b class="para">A</b> CityCycle: Bike Hire Across the City</h3>
<p>CityCycle has more than 300 docking stations across the city centre and inner suburbs, and bikes can be hired 24 hours a day, 365 days a year.</p>
<p><b>How to hire</b><br>You can hire a bike using the CityCycle app or at the touchscreen terminal found at every docking station. Terminals accept all major bank cards, and the card you use will be charged for any additional time.</p>
<p><b>Prices</b><br><b>Day pass – £3:</b> valid for 24 hours from the time of purchase. The first 30 minutes of each journey are free; after that, each additional 30 minutes costs £1.50.<br><b>Annual membership – £90:</b> the first 45 minutes of each journey are free.</p>
<p><b>Electric bikes</b><br>Electric bikes are available at selected docking stations, which are marked in the app with a lightning symbol. A supplement of £1 per journey applies.</p>
<p><b>Who can ride?</b><br>Riders must be aged 16 or over. Anyone under 18 must have the consent of a parent or guardian, which is given when the account is registered.</p>
<p><b>Returning your bike</b><br>Push the bike firmly into any empty dock until the light turns green. If the docking station is full, use the terminal to request an extra 15 minutes free of charge so that you can reach another station.</p>
<p><b>Safety</b><br>Helmets are not provided, but we strongly recommend that you wear one. To report a fault or an accident, call our 24-hour helpline.</p>

<h3><b class="para">B</b> Hollins Museum of Science and Industry – Visitor Information</h3>
<p><b>Opening times</b><br>Tuesday to Sunday, 10.00–17.00. The museum is closed on Mondays, except on public holidays, when it opens at the usual times. Last admission is 45 minutes before closing.</p>
<p><b>Late openings</b><br>On the first Thursday of every month, the museum stays open until 21.00 for <i>Science After Dark</i>, an evening of talks, live music and hands-on activities for visitors aged 18 and over.</p>
<p><b>Admission</b><br>Entry to the permanent galleries is free. Tickets for our special exhibition, <i>Engines of Change</i>, cost £8 (£5 for students and visitors over 65).</p>
<p><b>Planetarium</b><br>Shows run every hour from 11.00 and last 25 minutes. Spaces are limited, so please book at the ticket desk as soon as you arrive. Shows are not suitable for children under four.</p>
<p><b>Facilities</b><br>Lockers are available on the lower ground floor and require a refundable coin. The Skyline Café on the top floor serves hot and cold food from 10.30 to 16.30. Wheelchairs can be borrowed free of charge from the information desk in the main hall.</p>
<p><b>Groups</b><br>Groups of 10 or more must book at least two weeks in advance.</p>`
        },
        groups: [
          {
            type: 'tf', variant: 'tf', from: 1, to: 7,
            instr: 'Look at the information about CityCycle (text A).<br>Do the following statements agree with the information given in the text?<br>Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.',
            questions: [
              { n: 1, text: 'CityCycle bikes can be hired at any time of the day or night.', answer: 'TRUE' },
              { n: 2, text: 'You must have a smartphone in order to hire a bike.', answer: 'FALSE' },
              { n: 3, text: 'Day pass holders pay nothing for a journey of less than 30 minutes.', answer: 'TRUE' },
              { n: 4, text: 'CityCycle intends to open more docking stations next year.', answer: 'NOT GIVEN' },
              { n: 5, text: 'Sixteen-year-olds can hire a bike without a parent’s permission.', answer: 'FALSE' },
              { n: 6, text: 'Riders who find a docking station full can get extra time without paying.', answer: 'TRUE' },
              { n: 7, text: 'Most CityCycle journeys last less than half an hour.', answer: 'NOT GIVEN' }
            ]
          },
          {
            type: 'gap', from: 8, to: 14,
            instr: 'Look at the information about the Hollins Museum (text B).<br>Complete the sentences below.<br>Choose <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> from the text for each answer.',
            template: `
              <p class="sent"><b>8</b> Apart from public holidays, the museum does not open on [[8]].</p>
              <p class="sent"><b>9</b> Visitors cannot enter the museum later than [[9]] before it closes.</p>
              <p class="sent"><b>10</b> <i>Science After Dark</i> takes place on the first [[10]] of each month.</p>
              <p class="sent"><b>11</b> Visitors have to pay to see the [[11]].</p>
              <p class="sent"><b>12</b> Places at the planetarium should be reserved at the [[12]].</p>
              <p class="sent"><b>13</b> The café can be found on the [[13]] of the building.</p>
              <p class="sent"><b>14</b> Visitors who need a wheelchair can borrow one from the [[14]].</p>`,
            answers: {
              8: ['mondays', 'monday'], 9: ['45 minutes', 'forty-five minutes'], 10: ['thursday'],
              11: ['special exhibition'], 12: ['ticket desk'], 13: ['top floor'], 14: ['information desk']
            }
          }
        ]
      },

      /* ---------- Section 2 ---------- */
      {
        title: 'Part 2',
        instr: 'You should spend about 20 minutes on Questions 15–27, which are based on Section 2 below.',
        range: [15, 27],
        passage: {
          title: 'Workplace Guidance',
          html: `
<h3>Claiming Work-Related Expenses – Staff Guidance</h3>
<p>This guidance applies to all employees of Harlow &amp; Finch Ltd, including temporary staff, who incur costs while carrying out company business.</p>
<p><b>What you can claim</b></p>
<ul>
<li>Travel by train, bus or coach. Only standard class tickets will be reimbursed; first-class travel is not permitted unless it has been authorised in advance by a director.</li>
<li>Use of your own car for business journeys, at a rate of 45p per mile. Journeys between your home and your usual workplace cannot be claimed.</li>
<li>Meals, up to £15 per day, when you are away from your usual workplace for more than five hours.</li>
<li>Overnight accommodation, which must be booked through the company’s travel team.</li>
</ul>
<p><b>How to claim</b><br>Claims should be made using the online expenses form within 30 days of the expense being incurred. Scanned receipts must be attached for every item; bank or credit card statements are not accepted as proof of purchase. Any single claim over £200 must be approved by your line manager before it can be processed.</p>
<p><b>Payment</b><br>Approved claims are paid together with your monthly salary. Claims received after the 20th of the month will be paid in the following month.</p>
<p><b>Items that cannot be claimed</b><br>Alcoholic drinks, parking or speeding fines, and personal items such as toiletries will not be reimbursed under any circumstances.</p>

<h3>Making a Good Impression at Interview</h3>
<p><b class="para">A</b> Before the interview, spend time learning about the organisation. Read its website carefully, look for any recent news stories about it, and try to understand what it does, who its customers are and what challenges it is facing. Interviewers can quickly tell which candidates have done this preparation and which have not.</p>
<p><b class="para">B</b> Most interviewers will ask you to describe situations in which you have used particular skills, such as solving a problem or working as part of a team. Rather than making general claims about yourself, think of real examples from your previous jobs, studies or voluntary work, and practise explaining what you did and what the result was.</p>
<p><b class="para">C</b> Plan your journey well in advance and, if possible, make a trial trip to the location on an earlier day. Aim to arrive about ten minutes before your appointment. Arriving much earlier than this can be inconvenient for the interviewer, who may feel obliged to see you before they are ready.</p>
<p><b class="para">D</b> It is generally a good idea to dress slightly more formally than the people who work at the organisation do on a normal day. If you are unsure, it is perfectly acceptable to ask the person who arranged the interview. Whatever you choose, make sure your clothes are clean, comfortable and fit well.</p>
<p><b class="para">E</b> Remember that you are communicating even when you are not speaking. A firm handshake, regular eye contact and an upright posture all suggest confidence, while folded arms or looking at the floor may give the opposite impression, even if that is not what you intend.</p>
<p><b class="para">F</b> At the end of most interviews, you will be asked whether you have any questions. Always prepare two or three in advance. Questions about training opportunities or the team you would be joining show genuine interest; questions about holiday entitlement are best left until you have received an offer.</p>
<p><b class="para">G</b> Within a day of the interview, send a short email to thank the interviewer for their time. If you are not offered the job, it is worth politely asking for feedback, as this can help you to perform better next time.</p>`
        },
        groups: [
          {
            type: 'gap', from: 15, to: 20,
            instr: 'Complete the notes below.<br>Choose <b>ONE WORD AND/OR A NUMBER</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Expense claims – key points</h4>
                <ul>
                  <li>Public transport: only [[15]] class tickets are paid for</li>
                  <li>Own car: 45p for every [[16]] travelled on business</li>
                  <li>Meals: can be claimed if away from usual workplace for over [[17]] hours</li>
                  <li>Deadline: submit claim within [[18]] days</li>
                  <li>Proof: scanned [[19]] needed for each item</li>
                  <li>Claims arriving after the 20th are paid the following [[20]]</li>
                </ul>
              </div>`,
            answers: {
              15: ['standard'], 16: ['mile'], 17: ['five', '5'], 18: ['30', 'thirty'], 19: ['receipts', 'receipt'], 20: ['month']
            }
          },
          {
            type: 'match', from: 21, to: 27,
            instr: 'The text <i>Making a Good Impression at Interview</i> has seven paragraphs, <b>A–G</b>.<br>Choose the correct heading for each paragraph from the list of headings below.',
            boxTitle: 'List of Headings',
            options: [
              { k: 'i', t: 'Be ready to ask as well as answer' },
              { k: 'ii', t: 'Handling difficult questions' },
              { k: 'iii', t: 'What your body says' },
              { k: 'iv', t: 'Getting the timing right' },
              { k: 'v', t: 'Discussing salary and benefits' },
              { k: 'vi', t: 'Learn about the organisation' },
              { k: 'vii', t: 'After the interview is over' },
              { k: 'viii', t: 'Writing a strong application' },
              { k: 'ix', t: 'Think about your appearance' },
              { k: 'x', t: 'Prepare evidence of your skills' }
            ],
            questions: [
              { n: 21, text: 'Paragraph A', answer: 'vi' },
              { n: 22, text: 'Paragraph B', answer: 'x' },
              { n: 23, text: 'Paragraph C', answer: 'iv' },
              { n: 24, text: 'Paragraph D', answer: 'ix' },
              { n: 25, text: 'Paragraph E', answer: 'iii' },
              { n: 26, text: 'Paragraph F', answer: 'i' },
              { n: 27, text: 'Paragraph G', answer: 'vii' }
            ]
          }
        ]
      },

      /* ---------- Section 3 ---------- */
      {
        title: 'Part 3',
        instr: 'You should spend about 20 minutes on Questions 28–40, which are based on Section 3 below.',
        range: [28, 40],
        passage: {
          title: 'Kites Around the World',
          html: `
<p><b class="para">A</b> For a toy that most people associate with windy afternoons in the park, the kite has a surprisingly long and varied history. It has been used to send messages, catch fish, carry out scientific experiments and even help develop the first aeroplanes. In many parts of the world, kite flying remains an important part of festivals and religious celebrations.</p>
<p><b class="para">B</b> Most historians agree that kites were first made in China, probably more than two thousand years ago. The earliest examples were built from silk stretched over a light frame of bamboo, materials that were strong, flexible and readily available. Paper kites appeared later, once paper had become cheap enough to be used for such purposes. Chinese records describe kites being put to practical use, particularly by the army. Stories of kites lifting soldiers into the air to spy on enemy camps are probably exaggerated, but there is good evidence that they were used to send signals between units and to measure distances across rivers or walls.</p>
<p><b class="para">C</b> From China, kites spread across Asia. In Korea and Japan they became associated with good fortune and were often decorated with images of heroes or mythical creatures. Some Japanese towns still hold festivals in which teams fly enormous kites, sometimes several metres across, that require dozens of people to launch. In Malaysia, the traditional <i>wau bulan</i>, or ‘moon kite’, takes its name from the crescent shape of its lower section, and is decorated with brightly coloured floral patterns. In parts of the Pacific, fishermen used kites made from leaves to carry a baited line far out over the water, keeping the fisherman and his boat out of sight of the fish.</p>
<p><b class="para">D</b> In India, kite flying reaches its peak during the festival of Uttarayan, held each January in the state of Gujarat, when the skies above the cities fill with thousands of kites. A central part of the celebration is kite fighting, in which flyers attempt to cut the strings of rival kites. To gain an advantage, some flyers coat their strings with powdered glass. This practice has caused serious injuries to both people and birds, and as a result such strings have been banned in a number of cities, although enforcing the ban has proved difficult.</p>
<p><b class="para">E</b> On the other side of the world, in the Guatemalan town of Santiago Sacatepéquez, families build giant circular kites for the Day of the Dead on 1 November. Some measure more than ten metres in diameter and take months to make from tissue paper and bamboo. The kites are flown in the town cemetery, and according to local tradition they help to carry messages between the living and relatives who have died.</p>
<p><b class="para">F</b> Kites reached Europe relatively late, and there they were valued less for celebration than for science. The best-known example is the experiment attributed to Benjamin Franklin in 1752, in which a kite flown in a thunderstorm was used to demonstrate that lightning is a form of electricity. Later, meteorologists attached thermometers and other instruments to kites in order to record conditions high above the ground, and for several decades kites were an important tool in weather forecasting, until they were replaced by balloons and aircraft in the first half of the twentieth century. In 1893, the Australian inventor Lawrence Hargrave designed the box kite, which was far more stable than earlier designs and could lift much heavier loads. His work influenced several early aviation pioneers, who tested their designs by flying them as kites before attempting powered flight.</p>
<p><b class="para">G</b> Today, kites are enjoying something of a revival. In kitesurfing, a rider standing on a board is pulled across the water by a large, steerable kite, reaching considerable speeds. Some cargo ships have been fitted with huge kites that help to pull the vessel along, reducing the amount of fuel it burns. Most ambitiously, engineers are developing kites that generate electricity. Flying hundreds of metres above the ground, where the wind is stronger and steadier than near the surface, these kites drive generators as they pull on their cables. It remains to be seen whether such systems will become widespread, but it seems that the kite still has new heights to reach.</p>`
        },
        groups: [
          {
            type: 'mc', from: 28, to: 31,
            instr: 'Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.',
            questions: [
              { n: 28, text: 'The earliest Chinese kites were made of', options: [
                { k: 'A', t: 'paper and wood.' },
                { k: 'B', t: 'leaves and string.' },
                { k: 'C', t: 'silk and bamboo.' },
                { k: 'D', t: 'cloth and metal.' }], answer: 'C' },
              { n: 29, text: 'According to paragraph B, there is reliable evidence that the Chinese army used kites to', options: [
                { k: 'A', t: 'communicate between groups of soldiers.' },
                { k: 'B', t: 'lift soldiers high enough to watch the enemy.' },
                { k: 'C', t: 'carry weapons across rivers.' },
                { k: 'D', t: 'frighten enemy troops at night.' }], answer: 'A' },
              { n: 30, text: 'In Santiago Sacatepéquez, the giant kites are believed to', options: [
                { k: 'A', t: 'bring good harvests to local farmers.' },
                { k: 'B', t: 'protect the town from storms.' },
                { k: 'C', t: 'mark the beginning of the new year.' },
                { k: 'D', t: 'link the living with family members who have died.' }], answer: 'D' },
              { n: 31, text: 'What was important about Hargrave’s box kite?', options: [
                { k: 'A', t: 'It was the first kite to carry weather instruments.' },
                { k: 'B', t: 'It was steadier and could carry more weight than earlier kites.' },
                { k: 'C', t: 'It was the first kite to be powered by an engine.' },
                { k: 'D', t: 'It was used to prove that lightning is electrical.' }], answer: 'B' }
            ]
          },
          {
            type: 'tf', variant: 'tf', from: 32, to: 36,
            instr: 'Do the following statements agree with the information given in the text?<br>Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.',
            questions: [
              { n: 32, text: 'Kite fighting is an important feature of a festival in Gujarat.', answer: 'TRUE' },
              { n: 33, text: 'Glass-coated kite strings have been banned throughout India.', answer: 'FALSE' },
              { n: 34, text: 'The <i>wau bulan</i> is named after the shape of part of the kite.', answer: 'TRUE' },
              { n: 35, text: 'Benjamin Franklin was injured during his kite experiment.', answer: 'NOT GIVEN' },
              { n: 36, text: 'Kites carrying instruments are still widely used to forecast the weather.', answer: 'FALSE' }
            ]
          },
          {
            type: 'gap', from: 37, to: 40,
            instr: 'Complete the summary below.<br>Choose <b>ONE WORD ONLY</b> from the text for each answer.',
            template: `
              <div class="notes-box">
                <h4>Modern uses of kites</h4>
                <p>In the sport of kitesurfing, a person stands on a [[37]] and is pulled across the water. Large kites attached to cargo ships help these vessels to use less [[38]]. Engineers are also working on kites that produce [[39]]; these fly high above the ground, where the wind is not only stronger but also [[40]].</p>
              </div>`,
            answers: {
              37: ['board'], 38: ['fuel'], 39: ['electricity'], 40: ['steadier']
            }
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
<p><b>The chart below shows the percentage of adults in different age groups in one country who cycled at least once a week in 2005 and 2025.</b></p>
<p><b>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</b></p>
<p>Write at least 150 words.</p>`,
        chart: {
          type: 'bar',
          title: 'Adults who cycled at least once a week, by age group (%)',
          categories: ['16–24', '25–34', '35–44', '45–54', '55–64', '65+'],
          unit: '%',
          series: [
            { name: '2005', values: [18, 14, 12, 10, 7, 4] },
            { name: '2025', values: [22, 25, 19, 15, 13, 9] }
          ],
          max: 30
        }
      },
      {
        title: 'Part 2',
        instr: 'You should spend about 40 minutes on this task. Write at least 250 words.',
        minWords: 250,
        prompt: `
<p>Write about the following topic:</p>
<div class="essay-topic">
<p><b>Some people argue that museums and art galleries should be free for everyone to enter. Others believe that visitors should pay an entrance fee.</b></p>
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
<p>There is a public park near your home which you use regularly. You think the park could be improved.</p>
<p>Write a letter to the local council. In your letter</p>
<ul>
<li>describe how you use the park</li>
<li>explain what problems there are in the park at present</li>
<li>suggest what improvements the council could make</li>
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
<p><b>In many countries, more and more people are choosing to buy second-hand clothes, furniture and electronic goods instead of new ones.</b></p>
<p><b>Why is this happening? Is it a positive or negative development?</b></p>
</div>
<p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
<p>Write at least 250 words.</p>`
      }
    ]
  };

  IELTS.add('listening', 7, listening);
  IELTS.add('reading-academic', 7, readingAcademic);
  IELTS.add('reading-general', 7, readingGeneral);
  IELTS.add('writing-academic', 7, writingAcademic);
  IELTS.add('writing-general', 7, writingGeneral);
})();
