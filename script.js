let dark = document.querySelector('.dark');
let body = document.querySelector('body');
let sidebar = document.querySelector('.sidebar')
let main = document.querySelector('.main');
let pro = document.querySelectorAll('.pro');
let other_top = document.querySelector('.top');
let feature = document.querySelector('.feature');
let header = document.querySelector('.header');
let search = document.querySelector('.search');
let input = document.querySelector('input');
let button = document.querySelectorAll('button');

dark.addEventListener('click',()=>{
    if ( dark.classList.contains('fa-sun')) {
        dark.classList.add('fa-moon');
        dark.classList.remove('fa-sun');
        sidebar.classList.remove('dark_sidebar');
        main.classList.remove('main_dark');
        header.classList.remove('header_dark');
        search.classList.remove('search_dark');
        input.classList.remove('input');
        other_top.classList.remove('top_dark');
        Array.from(pro).forEach((pr)=>{
            pr.classList.remove('pro_dark');
        });
        Array.from(button).forEach((pr)=>{
            pr.classList.remove('btn_dark');
        })
        feature.classList.remove('f_dark');
    }else{
        input.classList.add('input');
        search.classList.add('search_dark');
        sidebar.classList.add('dark_sidebar')
        main.classList.add('main_dark')
        Array.from(pro).forEach((pr)=>{
            pr.classList.add('pro_dark')
        });
        Array.from(button).forEach((pr)=>{
            pr.classList.add('btn_dark');
        })
        dark.classList.remove('fa-moon');
        dark.classList.add('fa-sun');
        other_top.classList.add('top_dark');
        feature.classList.add('f_dark');
        header.classList.add('header_dark');
        
    }
});

