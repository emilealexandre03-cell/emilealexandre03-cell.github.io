/* Project search and filters adapted from Portfolio-Demo by Cao Tri DO (ISC license). */

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
        element.textContent = text == null ? '' : text;
        return element.innerHTML;
    }

    function pad(number) {
        return String(number).padStart(2, '0');
    }

    function row(project, index) {
        const meta = [project.place, project.period].filter(Boolean).map(escapeHtml).join(' · ');
        const bullets = project.bullets.length
            ? `<ul>${project.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
            : '';
        const stat = project.stat
            ? `<p class="stat"><strong>${escapeHtml(project.stat)}</strong><span>${escapeHtml(project.statLabel)}</span></p>`
            : '';
        const chips = project.categories
            .map((c) => `<span class="chip chip-${escapeHtml(c)}">${escapeHtml(CATEGORIES[c])}</span>`)
            .join('');

        return `
            <details class="row">
                <summary>
                    <span class="num">${pad(index + 1)}</span>
                    <span class="main">
                        <span class="title">${escapeHtml(project.title)}</span>
                        <span class="org">${escapeHtml(project.role)} · ${escapeHtml(project.org)}</span>
                    </span>
                    <span class="meta">${meta}</span>
                    <span class="toggle" aria-hidden="true"></span>
                </summary>
                <div class="detail">
                    <div class="detail-text">
                        <p>${escapeHtml(project.summary)}</p>
                        ${bullets}
                        <p class="tags">${escapeHtml(project.tags)}</p>
                        <p class="chips">${chips}</p>
                    </div>
                    ${stat}
                </div>
            </details>`;
    }

    function applyFilters() {
        const term = searchInput.value.toLowerCase().trim();
        let visible = 0;

        list.querySelectorAll('.row').forEach((element, index) => {
            const project = PROJECTS[index];
            const text = [
                project.title,
                project.role,
                project.org,
                project.place,
                project.period,
                project.summary,
                project.bullets.join(' '),
                project.tags,
                project.categories.map((c) => CATEGORIES[c]).join(' '),
            ]
                .join(' ')
                .toLowerCase();
            const matchesFilter = activeFilter === 'all' || project.categories.includes(activeFilter);
            const matchesSearch = term === '' || text.includes(term);
            const show = matchesFilter && matchesSearch;

            element.hidden = !show;
            if (show) visible += 1;
        });

        resultCount.textContent = `${visible} ${visible === 1 ? 'experience' : 'experiences'}`;
        emptyMessage.hidden = visible !== 0;
    }

    function setUpProjects() {
        list.innerHTML = PROJECTS.map(row).join('');
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
        themeButton.textContent = theme === 'dark' ? 'Light' : 'Dark';
        themeButton.setAttribute(
            'aria-label',
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        );
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

    setUpProjects();
    setUpContactLinks();
    setUpTheme();
})();
