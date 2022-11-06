import items from './data.js';

const renderItem = item => {
    const image = item.image
        ? `<a href="./images/${item.image}" target="_blank"><img src="./images/s_${item.image}" alt="${item.title}"></a>`
        : '';

    const cms = item.cms ? `<div>Шаблон для ${item.cms.charAt(0).toUpperCase() + item.cms.slice(1)}</div>` : '';
    const date = `<div>Сделан в ${item.date.split('-')[0]} году</div>`;

    return `
<div class="row-block">
    <div class="image-block">${image}</div>
    <div class="description-block">
        <h4 class="mt0">${item.title}</h4>
        ${cms}
        ${date}
    </div>
</div>
`;
};

document.getElementById('items').innerHTML = items.reverse().map(renderItem).join('');
