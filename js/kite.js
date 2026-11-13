/*
  Kite lines: a kite sways above the hero on three lines that run to a bar.
  As you scroll, the kite climbs and the lines pull taut. A thin line also
  draws itself down the left edge, and section rules draw in when they appear.
*/

(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.querySelector('.hero');
    const scene = document.querySelector('.kite-scene');
    const kite = document.getElementById('kite');
    const bar = document.getElementById('bar');
    const lineLeft = document.getElementById('lineLeft');
    const lineCenter = document.getElementById('lineCenter');
    const lineRight = document.getElementById('lineRight');
    const pageLine = document.querySelector('.page-line span');

    let heroVisible = true;
    let frame = null;

    function curve(from, to, sag, sway) {
        const midX = (from.x + to.x) / 2 + sway + sag * 0.9;
        const midY = (from.y + to.y) / 2 + sag * 0.3;
        return `M${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${midX.toFixed(1)} ${midY.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
    }

    function drawScene(time) {
        const width = hero.clientWidth;
        const height = hero.clientHeight;
        const compact = width < 700;
        const progress = Math.min(window.scrollY / Math.max(height, 1), 1);
        const t = time / 1000;

        const sway = reduceMotion ? 0 : Math.sin(t * 0.7) * 10;
        const bob = reduceMotion ? 0 : Math.cos(t * 0.9) * 6;
        const tilt = reduceMotion ? 0 : Math.sin(t * 0.7 + 0.6) * 5;
        const scale = compact ? 0.45 : 1;

        const kiteX = width * (compact ? 0.84 : 0.8) + sway * (compact ? 0.5 : 1);
        const kiteY = height * (compact ? 0.07 : 0.2) + bob - progress * 40;
        const barX = width * (compact ? 0.93 : 0.74);
        const barY = height * (compact ? 0.9 : 0.9);

        kite.setAttribute(
            'transform',
            `translate(${kiteX.toFixed(1)} ${kiteY.toFixed(1)}) rotate(${(tilt - 8).toFixed(1)}) scale(${scale})`
        );
        bar.setAttribute('transform', `translate(${barX.toFixed(1)} ${barY.toFixed(1)})`);

        const wing = 74 * scale;
        const tipLeft = { x: kiteX - wing, y: kiteY + 6 * scale + tilt * 0.4 };
        const tipRight = { x: kiteX + wing, y: kiteY + 6 * scale - tilt * 0.4 };
        const middle = { x: kiteX, y: kiteY - 8 * scale };
        const sagAmount = (reduceMotion ? 22 : 30 + Math.sin(t * 1.1) * 6) * (1 - progress * 0.9);

        lineLeft.setAttribute('d', curve(tipLeft, { x: barX - 16, y: barY }, sagAmount, -sway * 0.6));
        lineCenter.setAttribute('d', curve(middle, { x: barX, y: barY }, sagAmount * 0.6, sway * 0.3));
        lineRight.setAttribute('d', curve(tipRight, { x: barX + 16, y: barY }, sagAmount, sway * 0.6));
    }

    function loop(time) {
        drawScene(time);
        frame = heroVisible ? requestAnimationFrame(loop) : null;
    }

    function startLoop() {
        if (!frame) frame = requestAnimationFrame(loop);
    }

    function setUpKite() {
        drawScene(0);
        if (reduceMotion) {
            window.addEventListener('resize', () => drawScene(0));
            window.addEventListener('scroll', () => drawScene(0), { passive: true });
            return;
        }

        if ('IntersectionObserver' in window) {
            new IntersectionObserver((entries) => {
                heroVisible = entries[0].isIntersecting;
                if (heroVisible) startLoop();
            }).observe(hero);
        }
        startLoop();
    }

    function updatePageLine() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        pageLine.style.transform = `scaleY(${ratio.toFixed(4)})`;
    }

    function setUpPageLine() {
        if (reduceMotion) return;
        updatePageLine();
        window.addEventListener('scroll', updatePageLine, { passive: true });
        window.addEventListener('resize', updatePageLine);
    }

    function setUpRules() {
        const rules = document.querySelectorAll('.rule');
        if (reduceMotion || !('IntersectionObserver' in window)) {
            rules.forEach((rule) => rule.classList.add('is-in'));
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.6 }
        );
        rules.forEach((rule) => observer.observe(rule));
    }

    setUpKite();
    setUpPageLine();
    setUpRules();
})();
