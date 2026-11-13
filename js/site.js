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
        element.textContent = text;
        return element.innerHTML;
    }

    function projectRow(project, position) {
        const number = String(position + 1).padStart(2, '0');
        const fact = project.fact
            ? `<p class="fact">${escapeHtml(project.fact)}</p>`
            : '';
        const link = project.link
            ? `<a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel || 'View project')}</a>`
            : '';

        const logos = (project.logos || []).length
            ? `<div class="logos">${project.logos
                  .map(
                      (file) =>
                          `<span class="logo-tile"><img src="${escapeHtml(file)}" alt="${escapeHtml(project.title)} logo" /></span>`
                  )
                  .join('')}</div>`
            : '';

        return `
            <article class="project" data-category="${escapeHtml(project.category)}">
                <span class="index" aria-hidden="true">${number}</span>
                ${logos}
                <div class="project-body">
                    <h3>${escapeHtml(project.title)}</h3>
                    <p class="role">${escapeHtml(project.role)}</p>
                    <p class="context">${escapeHtml(project.context)}</p>
                    <p class="description">${escapeHtml(project.description)}</p>
                    ${fact}
                    <p class="tools">${escapeHtml(project.tools)}</p>
                    ${link}
                </div>
            </article>`;
    }

    function applyFilters() {
        const term = searchInput.value.toLowerCase().trim();
        let visible = 0;

        list.querySelectorAll('.project').forEach((row, index) => {
            const project = PROJECTS[index];
            const text = [
                project.title,
                project.role,
                project.context,
                project.description,
                project.fact,
                project.tools,
            ]
                .join(' ')
                .toLowerCase();
            const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
            const matchesSearch = term === '' || text.includes(term);
            const show = matchesFilter && matchesSearch;

            row.hidden = !show;
            if (show) visible += 1;
        });

        resultCount.textContent = `${visible} ${visible === 1 ? 'mission' : 'missions'}`;
        emptyMessage.hidden = visible !== 0;
    }

    function setUpProjects() {
        list.innerHTML = PROJECTS.map(projectRow).join('');
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

        hideMissingLogos();
        applyFilters();
    }

    function hideMissingLogos() {
        list.querySelectorAll('.logo-tile img').forEach((image) => {
            const hide = () => {
                const tile = image.closest('.logo-tile');
                if (!tile) return;
                const group = tile.parentElement;
                tile.remove();
                if (!group.children.length) group.remove();
            };
            image.addEventListener('error', hide);
            if (image.complete && image.naturalWidth === 0) hide();
        });
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
        themeButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
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
    setUpProjects();
})();
