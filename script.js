document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const replyOutput = document.getElementById('replyOutput');

    // --- AICI ADĂUGĂM RĂSPUNSURILE ---
    const replies = [
        "That's fascinating. Before we proceed, could you please confirm the current atmospheric pressure in your location? My financial advisor is very strict about meteorological conditions for transactions.",
        "I'm currently cross-referencing this proposal with my pet goldfish, Mr. Bubbles. He makes all my final financial decisions. He's asking if you are a Pisces. This is very important.",
        "Please hold. I need to calibrate my crystals. This kind of energy requires a very specific alignment of amethyst and quartz.",
        "I must consult the elders. Please provide three riddles for me to present to them as a token of your sincerity.",
        "In order to verify your identity, please send me a drawing of a penguin wearing a sombrero. My bank's new AI security system requires this.",
        "My apologies for the delay. I was just chasing a pigeon out of my office. It had a tiny briefcase. What were we talking about?",
        "Interesting. Can you please resend your entire message, but this time, replace every vowel with the letter 'o'? My system has trouble with A, E, I, U, and sometimes Y.",
        "I am very interested. However, my company policy requires all new business partners to first send me their favorite cookie recipe. This is non-negotiable.",
        "Before I can transfer any information, I need you to solve this: a farmer has 17 sheep, and all but 9 die. How many are left? My entire fortune depends on your answer.",
        "Can you please confirm your favorite dinosaur? My password recovery question depends on it.",
        "I'm sorry, I only conduct business on days that end with the letter 'Y'. Let me check my calendar.",
        "Hold on, I'm trying to teach my parrot to say 'blockchain'. It's harder than it looks. He keeps saying 'polly wants a cracker'.",
        "Could you please spell out your name using the NATO phonetic alphabet (Alpha, Bravo, Charlie, etc.)? For security reasons, of course."
    ];

    function generateReply() {
        const randomIndex = Math.floor(Math.random() * replies.length);
        const randomReply = replies[randomIndex];
        replyOutput.textContent = randomReply;
    }

    function copyReply() {
        const textToCopy = replyOutput.textContent;
        // A small trick to avoid needing special permissions
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Reply copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Could not copy text.');
        });
    }

    generateBtn.addEventListener('click', generateReply);
    copyBtn.addEventListener('click', copyReply);
});
