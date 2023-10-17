// Cart JavaScript
const bagLogo = document.getElementById('bag_click');
const bag = document.querySelector('.bag');
const close = document.querySelector('.close');

if (bagLogo){
    bagLogo.addEventListener('click', ()=>{
        bag.classList.add('show_bag');
    })
}
if (close){
    close.addEventListener('click', ()=>{
        bag.classList.remove('show_bag');
    })
}


// Mobile Menubar Show Javascript
const menuBar = document.getElementById('menu_bar');
const showMenuBar = document.getElementById('menu_bar_section');
const closeMenuBar = document.getElementById('close_menu');
const searchClick = document.getElementById('nav_search');

const showMenu = () => {
    showMenuBar.classList.add('show_menu_bar');
}

const closeMenu = () => {
    showMenuBar.classList.remove('show_menu_bar');
}

const showSearch = () => {
    showMenuBar.classList.add('show_menu_bar');
}

menuBar.addEventListener('click', showMenu);
closeMenuBar.addEventListener('click', closeMenu);
searchClick.addEventListener('click', showSearch);


// Back to Top JavaScript
// const mainSection = document.querySelector('#main_section');
// const footerElem = document.querySelector('footer');

// const scrollElement = document.createElement('div');
// scrollElement.classList.add('scrollTop-style');

// scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-top"></i>`;

// footerElem.after(scrollElement);

// const scrollTop = () => {
//     mainSection.scrollIntoView({behavior: 'smooth'});
// }

// scrollElement.addEventListener('click', scrollTop);


// Back to Top Mobile JavaScript
const mainSection_mobile = document.querySelector('#main_section');
const back = document.querySelector('.back');

const backToTop = () => {
    mainSection_mobile.scrollIntoView({behavior: 'smooth'});
}

back.addEventListener('click', backToTop);


// Help Click 1
const helpClick = document.getElementById('help_click');
const helpContent = document.getElementById('help_content');
const minus = document.getElementById('minus');


const showContent = () => {
    helpContent.classList.add('show_hlep_content');
    helpClick.classList.remove('fa-plus');
}
const showMinus = () => {
    minus.classList.add('show_minus');
}
const remove = () => {
    helpContent.classList.remove('show_hlep_content');
    minus.classList.remove('show_minus');
    helpClick.classList.add('fa-plus');
}

helpClick.addEventListener('click', showContent);
helpClick.addEventListener('click', showMinus);
minus.addEventListener('click', remove);


// ROW Section Javascript
const clickRow = document.getElementById('click_row');
const row = document.getElementById('row');
const downRow = document.getElementById('down_row');

const showRow = () =>{
    row.classList.add('row_box');
    clickRow.classList.remove('fa-chevron-up');
}

const showDown = () =>{
    downRow.classList.add('fa-chevron-down');
}

const removeRow = () =>{
    row.classList.remove('row_box');
    downRow.classList.remove('show_down');
    clickRow.classList.add('fa-chevron-up');
}

clickRow.addEventListener('click', showRow);
clickRow.addEventListener('click', showDown);
downRow.addEventListener('click', removeRow);

