const menu = [
    { url: '', title: 'Резюме' },
    { url: 'sites', title: 'Сайты' },
    { url: 'apps', title: 'Приложения' },
    { url: 'templates', title: 'Шаблоны' },
    { url: 'skins', title: 'Темы' },
];

const renderMenu = () => menu.map((page) => {
    return 'portfolio' + page.url === location.pathname.replace(/\//g, '')
        ? `<span class="button button-primary">${page.title}</span>`
        : `<a class="button" href="${location.origin}/portfolio/${page.url}">${page.title}</a>`;
}).join(' &nbsp; ');

const renderHeader = () => `
<div class="row">
    <div class="one column"></div>
    <div class="eleven columns"><h2>Портфолио</h2></div>
</div>

<hr class="mt0">

<div class="container">
    ${renderMenu()}
</div>

<hr>    
`;

document.getElementsByTagName('header')[0].innerHTML = renderHeader();