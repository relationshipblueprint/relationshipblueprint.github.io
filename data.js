export const BOOK_URL = 'https://jknowles1.gumroad.com/l/vdtxht';
export const FREE_URL = 'https://jknowles1.gumroad.com/l/free-sample-chapter';

                                                                      

export const styles                                                                       = {
    fixer: { name: 'The Fixer', summary: 'When something is wrong, you want it solved now. Feelings can feel like a delay, so your partner may feel rushed or unheard.', tryThis: 'Before offering a solution, say back what you heard and ask: "Do you want ideas, or do you want me to listen?"' },
    withdrawer: { name: 'The Withdrawer', summary: 'When tension rises you go quiet or leave the room to cool down. Your partner may read that as not caring.', tryThis: 'Say what you are doing and when you will return: "I need 20 minutes to settle. I will come back and we will finish this."' },
    pleaser: { name: 'The Pleaser', summary: 'You keep the peace by saying "it is fine". The problem is that your needs stay hidden and build up.', tryThis: 'Pick one small need this week and say it out loud: "I would really like it if we could..."' },
    debater: { name: 'The Debater', summary: 'You argue the facts and want to be right. You are often correct, and your partner still feels like they lost.', tryThis: 'Swap "you always" for one specific moment and one feeling: "When X happened, I felt Y."' },
};

export const questions                                                                 = [
    { q: 'Your partner says something that hurts. Your first move is to...', options: [
        { label: 'Explain why it happened and how to fix it', style: 'fixer' },
        { label: 'Go quiet and pull back', style: 'withdrawer' },
        { label: 'Say "it is fine" and move on', style: 'pleaser' },
        { label: 'Point out what they got wrong', style: 'debater' } ] },
    { q: 'In the middle of a tense talk, you want to...', options: [
        { label: 'Reach a decision so it is over', style: 'fixer' },
        { label: 'Leave the room or change the subject', style: 'withdrawer' },
        { label: 'Agree, so the mood gets lighter', style: 'pleaser' },
        { label: 'Make my case clearly, with examples', style: 'debater' } ] },
    { q: 'After a fight, you usually...', options: [
        { label: 'Make a plan so it does not repeat', style: 'fixer' },
        { label: 'Need hours or days before I can talk', style: 'withdrawer' },
        { label: 'Apologize first, even if I was not the only one at fault', style: 'pleaser' },
        { label: 'Replay it and think about what I should have said', style: 'debater' } ] },
    { q: 'When you need something from your partner, you...', options: [
        { label: 'Tell them exactly what to do', style: 'fixer' },
        { label: 'Hope they notice without being asked', style: 'withdrawer' },
        { label: 'Hint, or say it is no big deal', style: 'pleaser' },
        { label: 'List the reasons it is fair', style: 'debater' } ] },
    { q: 'The sentence you hear most from your partner is...', options: [
        { label: '"I just want you to listen."', style: 'fixer' },
        { label: '"Please do not shut me out."', style: 'withdrawer' },
        { label: '"Tell me what you really want."', style: 'pleaser' },
        { label: '"This is not a debate."', style: 'debater' } ] },
    { q: 'An old issue comes up again. You think...', options: [
        { label: '"We already solved this."', style: 'fixer' },
        { label: '"Here we go. I am done."', style: 'withdrawer' },
        { label: '"I do not want to upset them."', style: 'pleaser' },
        { label: '"I have the facts to prove it."', style: 'debater' } ] },
];

                                                                    
export const situations              = [
    { id: 'ignored', label: 'I feel ignored', need: 'a few minutes of your full attention' },
    { id: 'apology', label: 'I need to apologize', need: 'to make this right' },
    { id: 'chores', label: 'Chores feel uneven', need: 'a fair split we both agree on' },
    { id: 'phone', label: 'The phone is in the way', need: 'phone-free time together' },
    { id: 'money', label: 'We disagree about money', need: 'a plan we both understand' },
    { id: 'pause', label: 'I need a break to calm down', need: 'time to settle before we continue' },
];

export function buildPhrases(s           , detail        )           {
    const d = detail.trim();
    const when = d ? `When ${d}, I` : 'I';
    switch (s.id) {
        case 'ignored': return [
            `I am not trying to blame you. ${when} felt ignored, and what I need is ${s.need}.`,
            'Can we set ten minutes tonight where we both put everything away and just talk?',
            'I miss feeling close to you. Can you help me with that?'];
        case 'apology': return [
            `I am sorry for ${d ? d : 'what I did'}. I see how it affected you.`,
            'I do not want to defend myself right now. I want to understand how it felt for you.',
            'Here is what I will do differently next time.'];
        case 'chores': return [
            `${when} start to feel like I am carrying more of the load. I would like ${s.need}.`,
            'Can we write down everything that needs doing and split it together?',
            'I am not keeping score. I want us to feel like a team.'];
        case 'phone': return [
            `I noticed ${d ? d : 'we are on our phones a lot'}. I would like ${s.need}.`,
            'Can we try phones away during dinner this week and see how it feels?',
            'I am not saying phones are bad. I just want more of you.'];
        case 'money': return [
            `Money is hard to talk about. ${when} get worried. What I need is ${s.need}.`,
            'Can we sit down once a week for twenty minutes and look at the numbers together?',
            'I want us on the same side of the problem.'];
        default: return [
            'I care about this, and I am too upset to talk well right now. I need 20 minutes.',
            `I will come back at a set time so we can finish this. I need ${s.need}.`,
            'This is not me leaving. It is me getting ready to listen.'];
    }
}

                                                                                                                                                 
export const articles            = [
    { slug: 'how-to-apologize-to-your-partner', title: 'How to apologize to your partner so it actually lands', query: 'how to apologize to my partner',
      intro: 'A good apology is short, specific and has no "but" in it. Here is a simple way to do it when you are nervous and want to get it right.',
      sections: [
        { h: 'Name exactly what you did', p: ['"I am sorry if you were hurt" puts the problem on their reaction. Say what you did instead: "I am sorry I interrupted you and made a joke when you were telling me something serious."'] },
        { h: 'Say how it affected them', p: ['Show you understand the effect, not just the act. "I can see that left you feeling small in front of our friends." If you are not sure, ask: "How did that feel for you?"'] },
        { h: 'Drop the "but"', p: ['Everything after "but" cancels what you said before it. If you have your own side, save it for later, after they feel heard.'] },
        { h: 'Say what you will do next time', p: ['One clear change is better than a big promise. "Next time I will wait until you finish before I speak."'] },
        { h: 'Give them room', p: ['You are not owed forgiveness right away. Let them have the time they need and follow through on the change.'] } ],
      chapterNote: 'The book is full of exact phrases for hard conversations.' },
    { slug: 'my-partner-ignores-me-what-to-do', title: 'My partner ignores me: what to do (and say)', query: 'partner ignores me',
      intro: 'Feeling ignored hurts, and the usual reaction, pushing harder or going cold, makes it worse. This is a calmer way to bring it up.',
      sections: [
        { h: 'Check what "ignoring" means here', p: ['Sometimes it is distraction, tiredness or a phone. Sometimes it is avoidance. The fix is different, so get curious before you decide it is deliberate.'] },
        { h: 'Pick a calm time', p: ['Not in the middle of a fight, and not at bedtime. Try: "Can we talk for ten minutes after dinner? Nothing is wrong. I want us to feel closer."'] },
        { h: 'Use one moment and one feeling', p: ['"When I was telling you about my day and you kept scrolling, I felt unimportant." It is hard to argue with, because it is your experience.'] },
        { h: 'Ask for one small thing', p: ['"Could we put phones away during dinner?" A small, clear request is easier to say yes to than a big complaint.'] },
        { h: 'Notice the response', p: ['Give it a few weeks. If you keep asking kindly and nothing changes, that is information, and it may be time for a counselor.'] } ],
      chapterNote: 'The book covers phones, distraction and distance in one chapter, with scripts you can use tonight.' },
    { slug: 'how-to-stop-fighting-with-your-partner', title: 'How to stop having the same fight again and again', query: 'how to stop fighting with my partner',
      intro: 'Couples rarely fight about the dishes. They fight about feeling unseen, unfair or alone. Here is how to break the loop.',
      sections: [
        { h: 'Spot your pattern', p: ['Most people have a default: fix it, go quiet, smooth it over or argue it. Knowing yours helps you catch it in the moment. The quiz on this site is a quick way to find out.'] },
        { h: 'Agree on a pause word', p: ['Pick a word or phrase either of you can use when it is heating up. It means: stop, breathe, and come back in 20 minutes. The one who asks for the pause is the one who restarts the talk.'] },
        { h: 'Start soft', p: ['How a talk starts usually decides how it ends. "I feel worried about us and I would like to talk" beats "You never listen".'] },
        { h: 'Repair quickly', p: ['A small repair, such as "that came out harsher than I meant", can stop a bad moment from becoming a bad night.'] } ],
      chapterNote: 'The book has a chapter on fighting fair: rules, red flags and reset tools.' },
    { slug: 'how-to-say-it-so-your-partner-hears-you', title: 'How to say hard things so your partner can hear them', query: 'how to communicate better with partner',
      intro: 'The same message can start a fight or a conversation. The difference is usually in how you open it.',
      sections: [
        { h: 'Lead with what you want, not what they did wrong', p: ['"I would like us to share the evening chores more evenly" lands better than "You never help".'] },
        { h: 'Be specific', p: ['"Always" and "never" invite a debate about whether they are true. A single recent example is harder to dispute.'] },
        { h: 'Say the feeling in one word', p: ['Hurt, worried, lonely, overwhelmed. One honest word does more than a paragraph of reasons.'] },
        { h: 'Then listen', p: ['Ask: "What is this like for you?" and say back what you heard before you respond.'] } ],
      chapterNote: 'The book has a chapter on saying it so it can be heard, with ready-to-use phrases.' },
];
