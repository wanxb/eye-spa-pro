const quotes = [
    "保持清澈，不仅是眼睛，还有看世界的态度。",
    "休息是为了走更远的路，也是为了看更清的风景。",
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

    header.style.display = 'none';
    stage.style.display = 'block';
    progressBox.style.display = 'block';

    const sleep = (ms) => new Promise(res => setTimeout(res, ms));

    // 1. 呼吸与挤眼
    hint.innerText = "慢慢闭上眼... 深呼吸";
    await sleep(3000);
    for(let i=0; i<3; i++) {
        hint.innerText = "用力挤压眼球 2 秒 (滋润眼表)";
        progressBar.style.width = (i+1)*10 + '%';
        await sleep(2500);
        hint.innerText = "呼气，彻底放松";
        await sleep(2000);
    }

    // 2. 8字循环
    hint.innerText = "目光跟随绿球，保持自然呼吸";
    ball.style.display = 'block';
    let start = Date.now();
    while (Date.now() - start < 15000) {
        let t = (Date.now() - start) / 1000;
        let x = (stage.offsetWidth/2 - 12) + (stage.offsetWidth*0.35) * Math.sin(t * 0.7);
        let y = (stage.offsetHeight/2 - 12) + (stage.offsetHeight*0.2) * Math.sin(t * 1.4);
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
        progressBar.style.width = (40 + (t/15)*30) + '%';
        await sleep(10);
    }
    ball.style.display = 'none';

    // 3. 远近拉伸
    for(let i=0; i<3; i++) {
        hint.innerText = "看屏幕中央的小点";
        ball.style.display = 'block'; ball.style.left = '50%'; ball.style.top = '50%';
        ball.style.transform = 'scale(2)';
        await sleep(2000);
        hint.innerText = "看窗外或视线最远方";
        ball.style.transform = 'scale(0.2)'; ball.style.opacity = '0.3';
        await sleep(4000);
        ball.style.opacity = '1';
        progressBar.style.width = (70 + (i+1)*10) + '%';
    }

    // 4. 结束
    stage.style.background = "#000";
    ball.style.display = 'none';
    hint.innerText = "搓热双手，温熨双眼。结束练习。";
    document.getElementById('quote-box').innerText = quotes[Math.floor(Math.random()*quotes.length)];
    await sleep(5000);
    location.reload();
}