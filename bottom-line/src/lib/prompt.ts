export const buildPrompt = (sermonNotes: string) => `Role:
You are an expert sermon writer and communicator.

Task:
Generate a list of highly rated bottom line statements using PREACH Framework and the Bottom Line Statement Rating Scale.

Instructions:
STEP 1: [This is a thinking step. DO NOT Output.] Analyze my sermon notes to determine bottom line statements based on the PREACH framework. For each literary device in the PREACH framework, brainstorm 5 bottom line statements.
STEP 2: [This is a thinking step. DO NOT Output.] Using the Bottom Line Statement Rating Scale, rate each bottom line statement. 
STEP 3: [This is a thinking step. DO NOT Output.] Improve each bottom line statement.
STEP 4: Create a list of the top ten highest rated bottom line statements from your brainstorm list. Identify which category of the PREACH framework it comes from. Introduce your top ten statements with this sentence: Here are ten bottom line statements for your sermon based on the Carey Nieuwhof PREACH Framework.

Context:
- [Sermon Notes]
${sermonNotes}

- Audience: The sermon will be delivered to a contemporary, evangelical Christian Church. The average congregant is in their 30s to 40s with children. They have a below average familiarity with Christian language. Using everyday language is preferred.

- PREACH Framework: 

P: Parallelism, Personification
R: Repetition (including Anaphora and Epistrophe), Rhyme
E: Echo
A: Alliteration
C: Compare(including Simile and Metaphor), Contrast, Chiasmus
H: Hyperbole

Paralellism: Parallelism in the context of creating a bottom line statement for a sermon involves using similar grammatical structures in successive clauses or sentences. This technique helps to create a sense of rhythm, balance, and clarity, making the message more memorable and impactful.

Examples of bottom line statements that use Paralellism:
- Live with intention, act with purpose, and love with passion.
- Pray consistently, give generously, serve faithfully.
- Trust in His timing, rely on His promises, rest in His peace.
- Forgive quickly, love deeply, live fully.
- Embrace grace, extend kindness, embody compassion.

Personification: Personification in the context of creating a bottom line statement for a sermon involves attributing human characteristics or actions to abstract concepts, inanimate objects, or animals.

Examples of bottom line statements that use personification:
- Let faith be your compass, leading you through life’s storms.
- Allow love to be the bridge that connects hearts.
- Let peace guard your heart and mind in every situation.
- Let wisdom whisper in your ear, guiding your every decision.
- May joy light up your path and brighten your days.

Anaphora: Anaphora in the context of creating a bottom line statement for a sermon involves the repetition of a word or phrase at the beginning of successive clauses or sentences.

Examples of bottom line statements that use Anaphora:
- Keep praying in the storm, keep trusting in the trial, keep believing in the breakthrough.
- Love without limits, love without fear, love without conditions.
- Stand firm in your faith, stand firm in your hope, stand firm in your love.
- Give generously, give joyfully, give sacrificially.
- Seek peace in your heart, seek peace in your home, seek peace in your world.

Epistrophe: Epistrophe in the context of creating a bottom line statement for a sermon involves the repetition of a word or phrase at the end of successive clauses or sentences.

Examples of bottom line statements that use Epistrophe
- We must pray with faith, live with faith, and walk with faith.
- God’s love never fails, His mercy never fails, His grace never fails.
- Find peace in your heart, peace in your home, peace in your world.
- We are called to serve with joy, to give with joy, and to live with joy.
- Believe in His promises, trust in His promises, hope in His promises.

RHYME: Rhyme in the context of creating a bottom line statements for a sermon involves crafting a sentence or phrase where the ending sounds of the key words match.

Examples of bottom line statements that use Rhyme:  
- Be knowing where your money is going.
- You’ll never address what you fail to confess.
- Raise your standard of giving before your standard of living. 
- Do what you can. Open your hands.  
- Your stress reveals what your mind conceals.   
- In unity, there is opportunity.

ECHO: Echo in the context of creating a bottom line statement for a sermon involves repeating a key word or phrase within the statement to reinforce the message and make it more memorable.

Examples of bottom line statements that use Echo: 
- You can make excuses or you can make progress, but you can’t make both.  
- The best sex life is a surrendered sex life.  
- God doesn’t run away from runaways.  
- Prayer changes everything. It changes things. It changes you.
- Do what you’re best at when you’re at your best.  
- When you believe the best about others, you tend to get the best from others.  
- Fixing your mind on Christ fixes your mind.   
- Forgive as you have been forgiven.

ALLITERATION: Alliteration in the context of creating a bottom line statement for a sermon involves crafting a memorable and impactful sentence where consecutive or closely connected words begin with the same consonant sound.

Examples of bottom line statements that use alliteration:  
- Faith-based religion is not perpetually at war with fact-based science.  
- In the future, churches that love their model more than their mission will die. 
- Your bravest moments are your brightest moments.
- Prayer isn’t a button to be pressed; it’s a bond to be pursued.
- Gifts given without gratitude for the Giver frustrate more than they fulfill.
- Saying no to good gifts lets you say yes to greater goals.
- Persistent prayer produces powerful results.   

Simile: Simile in the context of creating a bottom line statement for a sermon involves making a comparison between two different things using the words "like" or "as."

Examples of bottom line statements that use simile: 
- Faith is like a candle in the darkness, bringing light and hope to every corner of our lives.
- Grace is like rain on a parched land, refreshing and renewing our spirits.
- Community is like a tapestry, each thread interwoven to create a beautiful and strong fabric.
- Kindness is like a gentle breeze, calming and comforting those it touches.
- Truth is like a compass, always pointing us in the right direction even when the path is unclear.

METAPHOR: A metaphor in the context of creating a bottom line statement for a sermon involves using a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable. This technique draws a direct comparison between two seemingly unrelated things to illustrate a point or concept in a vivid and imaginative way.

Examples of bottom line statements that use metaphor:  
- Never wrestle with a pig. You both get dirty, but the pig revels in it.
- Don’t let a spectator dictate your strategy in the game.
- The seed you sow produces the crop you harvest.  
- Becoming a Christian is like getting married. Being a Christian is like being married.  
- Plant seeds of wisdom today to harvest a garden of blessings tomorrow.

CONTRAST: Contrast in the context of creating a bottom line statement for a sermon involves juxtaposing two opposing or distinctly different ideas to highlight their differences.

Examples of bottom line statements that use Contrast:  
- Darkness cannot drive out darkness; only light can.
- Influence takes years to build but seconds to destroy.
- Few are judged into life change; many are loved into it
- If you don’t take the Sabbath, the Sabbath will take you.  
- You can accomplish more with 300 engaged Christians than with 3000 disengaged Christians.  
- Visible practices reveal an invisible God.
- Those entitled to everything are grateful for nothing.
- Sin thrives where Christ is absent.
- Selfish living leads to emptiness, but selfless living brings fulfillment.

Chiasmus: Chiasmus in the context of creating a bottom line statement for a sermon involves reversing the order of words or phrases in two parallel clauses to create a mirrored effect. This literary device highlights the relationship between the ideas and emphasizes the contrast or connection, making the statement more memorable and impactful.

Examples of bottom line statements that use Chiasmus:
- Don’t let fear control your faith; let your faith control your fear.
- Serve not to be seen, but be seen to serve.
- God doesn’t call the equipped; He equips the called.
- We live to love, and we love to live.
- Seek God’s will in your work, and work God’s will in your life.

Hyperbole: Hyperbole in the context of creating a bottom line statement for a sermon involves using exaggerated terms or statements to emphasize a point dramatically. This literary device is not meant to be taken literally but is used to highlight the significance or intensity of the message, making it more memorable and impactful.

Examples of bottom line statements that use Hyperbole:
- God’s love for you is deeper than the deepest ocean and higher than the highest mountain.
- A single prayer can move mountains and change the world.
- Living without faith is like living without air; it’s impossible to survive.
- Forgiveness can heal a heart that’s been broken a thousand times.
- God’s blessings are more numerous than the stars in the sky.

Constraints:
- DO NOT OUTPUT the thinking steps. Only output STEP 4 in the instructions.
- Avoid churchy language. Use common everyday language.
- Avoid controversial language that might trigger the culture war. 
- Use language consistent with evangelical Christian doctrine
- DO NOT reveal the rating for a bottom line statement or the rating scale. 

Bottom Line Statement Rating Scale:
Clarity:
- 1-3: The statement is confusing or vague.
- 4-6: The statement is somewhat clear but could be more concise.
- 7-9: The statement is clear and easy to understand.
- 10: The statement is crystal clear and immediately understandable.

Memorability:
- 1-3: The statement is forgettable and doesn’t stand out.
- 4-6: The statement is somewhat memorable but not striking.
- 7-9: The statement is catchy and memorable.
- 10: The statement is extremely memorable and likely to be repeated.

Relevance:
- 1-3: The statement is not relevant to the sermon’s theme.
- 4-6: The statement is somewhat relevant but could be more focused.
- 7-9: The statement is relevant and ties in well with the sermon.
- 10: The statement is highly relevant and perfectly aligned with the sermon’s message.

Emotional Impact:
- 1-3: The statement does not evoke any strong emotions.
- 4-6: The statement evokes some emotion but could be stronger.
- 7-9: The statement evokes strong emotions and connects well with the audience.
- 10: The statement evokes very strong emotions and deeply resonates with the audience.

Creativity:
- 1-3: The statement is bland and lacks creativity.
- 4-6: The statement is somewhat creative but not exceptional.
- 7-9: The statement is creatively phrased and engaging.
- 10: The statement is highly creative and uses literary devices masterfully.
`;
