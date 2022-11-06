import items from './data.js';

const renderItem = item => {
    const image = item.image
        ? `<a href="./images/${item.image}" target="_blank"><img src="./images/s_${item.image}" alt="${item.title}"></a>`
        : '';

    const text = item.text ? `<div>${item.text}</div>` : '';
    const works = item.works ? `<div>Моя работа: ${item.works}</div>` : '';
    const technologies = item.technologies ? `<div>Использованные технологии: ${item.technologies}</div>` : '';
    const cms = item.cms ? `<div>Движок сайта: ${item.cms === 'ms' ? 'собственный' : item.cms}</div>` : '';
    const url = item.url ? `<div><a href="${item.url}">${item.url}</a></div>` : '';
    const date = `<div>Сделан в ${item.date.split('-')[0]} году</div>`;

    let parts = [];
    if (item.admin === '1') parts.push('модуль администрирования');
    if (item.partner === '1') parts.push('партнерскую программу');
    if (item.billing === '1') parts.push('систему оплаты');
    parts = parts.length ? `<div>Сайт имеет : ${parts.join(', ')}</div>` : '';

    return `
<div class="row-block">
    <div class="image-block">${image}</div>
    <div class="description-block">
        <h4 class="mt0">${item.title}</h4>
        ${text}
        ${works}
        ${technologies}
        ${cms}
        ${parts}
        ${date}
        ${url}
    </div>
</div>
`;
};

document.getElementById('items').innerHTML = items.reverse().map(renderItem).join('');
