const quotes = [
    "保持清澈，不仅是眼睛，还有看世界的态度。",
    "休息是为了走更远的路，也是为了看更美的风景。",
    "屏幕很大，但世界更广阔。",
    "你的眼睛值得这三分钟的宁静。"
];

async function initExercise() {
    const stage = document.getElementById('stage');
    const header = document.getElementById('header');
    const ball = document.getElementById('ball');
    const progressBox = document.querySelector('.progress-container');
    const progressBar = document.getElementById('progress-bar');
    const hint = document.getElementById('hint');

    // prepare audio beep function
    const playBeep = () => {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = 600;
            osc.connect(gain);
            gain.connect(ctx.destination);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch (e) {
            // fallback: no audio support
            console.warn('beep failed', e);
        }
    };

    // text-to-speech guidance (uses Web Speech API)
    const speak = (text) => {
        if ('speechSynthesis' in window) {
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'zh-CN';
            utter.rate = 0.8; // slower than normal
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utter);
        }
    };

    header.style.display = 'none';
    stage.style.display = 'block';
    progressBox.style.display = 'block';
    // force a reflow so that the new styles take effect immediately
    document.body.offsetHeight;

    const sleep = (ms) => new Promise(res => setTimeout(res, ms));

    // ---- duration constants (ms) ----
    const D_STEP1 = 30000;
    const D_STEP1_HALF = D_STEP1 / 2;
    const D_STEP2 = 60000;
    const D_STEP3 = 6 * (3000 + 5000); // each cycle 8s
    const D_STEP4 = 30000;
    const D_END = 20000;
    const TOTAL_DURATION = D_STEP1 + D_STEP2 + D_STEP3 + D_STEP4 + D_END + 3000; // plus small pauses

    // helpers for repeated actions
    const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
    const formatTime = (ms) => {
        if (ms % 60000 === 0) return (ms/60000) + ' 分钟';
        return (ms/1000) + ' 秒';
    };
    const setHint = (text) => {
        hint.innerText = text;
        playBeep();
        speak(text);
    };

    // progress updater independent of steps
    const progressLoop = async (total) => {
        const start = Date.now();
        while (Date.now() - start < total) {
            const pct = ((Date.now() - start) / total) * 100;
            progressBar.style.width = pct + '%';
            await sleep(100);
        }
        progressBar.style.width = '100%';
    };

    // start progress tracking in background
    progressLoop(TOTAL_DURATION);

    // step1: 闭眼深呼吸
    document.getElementById('quote-box').innerText = getQuote();
    setHint(`慢慢闭上眼，深呼吸，彻底放松，坚持 ${formatTime(D_STEP1)} `);
    await sleep(D_STEP1_HALF);
    setHint(`仍然闭眼，继续深呼吸`);
    await sleep(D_STEP1_HALF);

    // step2: 8字循环观球
    document.getElementById('quote-box').innerText = '';
    setHint(`目光跟随小球，保持自然呼吸，坚持 ${formatTime(D_STEP2)}`);
    ball.style.display = 'block';
    let start2 = Date.now();
    while (Date.now() - start2 < D_STEP2) {
        let t = (Date.now() - start2) / 1000;
        let x = (stage.offsetWidth / 2 - 12) + (stage.offsetWidth * 0.35) * Math.sin(t * 0.7);
        let y = (stage.offsetHeight / 2 - 12) + (stage.offsetHeight * 0.2) * Math.sin(t * 1.4);
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
        await sleep(10);
    }
    ball.style.display = 'none';

    // step3: 远近拉伸（6 次，约 1 分钟）
    // small pause before starting
    await sleep(1000);
    for (let i = 0; i < 6; i++) {
        setHint("看屏幕中央的小球");
        ball.style.display = 'block'; 
        ball.style.left = '50%';
        ball.style.top = '50%';
        ball.style.transform = 'scale(2)';
        await sleep(3000);
        setHint("看窗外或视线最远方");
        ball.style.transform = 'scale(0.2)';
        ball.style.opacity = '0.3';
        await sleep(5000);
        ball.style.opacity = '1';
    }

    // step4: 眼周轻按摩
    ball.style.display = 'none';
    setHint(`轻轻按摩眼周，放松肌肉，坚持 ${formatTime(D_STEP4)}`);
    document.getElementById('quote-box').innerText = getQuote();
    await sleep(D_STEP4);

    // step5: 结束
    setHint(`搓热双手，温熨双眼，坚持 ${formatTime(D_END)}`);
    document.getElementById('quote-box').innerText = getQuote();
    await sleep(D_END);
    setHint("结束练习");
    await sleep(2000);
    location.reload();
}