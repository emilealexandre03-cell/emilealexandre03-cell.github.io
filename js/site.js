/* Search and filters adapted from Portfolio-Demo by Cao Tri DO (ISC license). */

(function () {
    const list = document.getElementById('projectList');
    const searchInput = document.getElementById('projectSearch');
    const filterButtons = document.querySelectorAll('.filter');
    const resultCount = document.getElementById('resultCount');
    const emptyMessage = document.getElementById('emptyMessage');
    const themeButton = document.getElementById('themeButton');

    let activeFilter = 'all';

    function escapeHtml(text) {
        const element = document.createElement('span');
        element.textContent = text;
        return element.innerHTML;
    }

    function card(item) {
        const tags = item.tools
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean)
            .map((tag) => `<li>${escapeHtml(tag)}</li>`)
            .join('');
        const result = item.resultValue
            ? `<p class="result"><strong>${escapeHtml(item.resultValue)}</strong><span>${escapeHtml(item.resultLabel)}</span></p>`
            : '';
        const link = item.link
            ? `<a class="project-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.linkLabel || 'Learn more')}</a>`
            : '';

        return `
            <article class="card" data-category="${escapeHtml(item.category)}">
                <p class="context">${escapeHtml(item.context)}</p>
                <h3>${escapeHtml(item.title)}</h3>
                <p class="organisation">${escapeHtml(item.organisation)}</p>
                <p class="description">${escapeHtml(item.description)}</p>
                ${link}
                <ul class="tags">${tags}</ul>
                ${result}
            </article>`;
    }

    function applyFilters() {
        const term = searchInput.value.toLowerCase().trim();
        let visible = 0;

        list.querySelectorAll('.card').forEach((row, index) => {
            const item = EXPERIENCES[index];
            const text = [item.title, item.organisation, item.context, item.description, item.tools]
                .join(' ')
                .toLowerCase();
            const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
            const matchesSearch = term === '' || text.includes(term);
            const show = matchesFilter && matchesSearch;

            row.hidden = !show;
            if (show) visible += 1;
        });

        resultCount.textContent = `${visible} ${visible === 1 ? 'experience' : 'experiences'}`;
        emptyMessage.hidden = visible !== 0;
    }

    function setUpExperience() {
        list.innerHTML = EXPERIENCES.map(card).join('');
        searchInput.addEventListener('input', applyFilters);

        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                activeFilter = button.dataset.filter;
                filterButtons.forEach((other) => {
                    other.setAttribute('aria-pressed', String(other === button));
                });
                applyFilters();
            });
        });

        document.getElementById('clearFilters').addEventListener('click', () => {
            searchInput.value = '';
            filterButtons[0].click();
            searchInput.focus();
        });

        applyFilters();
    }

    function setUpContactLinks() {
        document.querySelectorAll('[data-email]').forEach((link) => {
            link.href = `mailto:${PROFILE.email}`;
        });

        ['linkedin', 'cv'].forEach((key) => {
            document.querySelectorAll(`[data-profile="${key}"]`).forEach((link) => {
                if (PROFILE[key]) {
                    link.href = PROFILE[key];
                } else {
                    link.hidden = true;
                }
            });
        });
    }

    function savedTheme() {
        try {
            return localStorage.getItem('theme');
        } catch {
            return null;
        }
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeButton.textContent = theme === 'dark' ? 'Day mode' : 'Night mode';
        try {
            localStorage.setItem('theme', theme);
        } catch {
            /* The theme still works for this visit. */
        }
    }

    function setUpTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme() || (prefersDark ? 'dark' : 'light'));

        themeButton.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    document.getElementById('year').textContent = new Date().getFullYear();
    setUpTheme();
    setUpContactLinks();
    setUpExperience();
})();
