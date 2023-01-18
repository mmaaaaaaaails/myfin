const headerInput = document.querySelector('.header_input');
const headerInputCross = document.querySelector('.header_input-cross');
const headerInputDisabled = document.querySelector('.header_input-disabled');
const headerSubtitle = document.querySelector(".header_subtitle");
const headerSubtitleLink = document.querySelector(".header_subtitle-link");
const headerSubtitleFull = document.querySelector(".header_subtitle-full");
const stockContent = document.querySelector('.stock_content');
const tabs = document.querySelectorAll('.stock_tab-title');
const stockTabWrapper = document.querySelector('.stock_tab');
const stockContentLimited = document.querySelector(".stock_content-limited");
const stockContentFull = document.querySelector(".stock_bottom-full");
const select = document.querySelector('.stock_select');
const calendarContent = document.querySelector('.calendar_content');
const calendarContentFull = document.querySelector('.calendar_content-full');
const selectTitle = select.querySelector('.stock_select-title');
const selectLabels = select.querySelectorAll('.stock_select-label');


headerInputCross.addEventListener('click', () => {
    headerInput.value = '';
})

if (headerInput.disabled) {
    headerInputCross.classList.add('hide');
}

if (!headerInput.disabled) {
    headerInputDisabled.classList.add('hide');
}

headerSubtitleLink.addEventListener('click',(e) => {
    e.preventDefault();
});

headerSubtitleFull.addEventListener('click',(e) => {
    e.preventDefault();
    headerSubtitle.classList.toggle('full');
});

stockContentFull.addEventListener('click',(e) => {
    e.preventDefault();
    stockContentLimited.classList.toggle('full');
});

calendarContentFull.addEventListener('click',(e) => {
    e.preventDefault();
    calendarContent.classList.toggle('full');
});


tabs.forEach((e) => {
    e.addEventListener('click', () => {
        tabs.forEach((event) => {
            event.classList.remove('stock_tab-active')
        })
        e.classList.add('stock_tab-active');
    })
})

const openTab = (index) => {
    stockContent.querySelector('.active').classList.remove('active');
    stockContent.querySelector(`.tab-${index}`).classList.add('active');
}

stockTabWrapper.addEventListener('click', event => {
    const index = event.target.closest('.stock_tab-title').dataset.value;
    openTab(index);
});


selectTitle.addEventListener('click', () => {
    if ('active' === select.getAttribute('data-state')) {
        select.setAttribute('data-state', '');
    } else {
        select.setAttribute('data-state', 'active');
    }
});


for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (evt) => {
        selectTitle.textContent = evt.target.textContent;
        select.setAttribute('data-state', '');
    });
}

