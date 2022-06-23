const tabButton = document.getElementById('wrapper-button');
const content = document.getElementById('wrapper-content');
const tabElement = Array.from(document.querySelectorAll('.button'));


for(let index = 0; index < tabElement.length; index ++){
tabElement[index].addEventListener('click' , e =>{
        const currTab = e.target.dataset.btn;
        changeClass(e.target);
        for(let i = 0; i < content.children.length; i++){
            content.children[i].classList.remove('wrapper-offer_active');
            if(content.children[i].dataset.content == currTab){
                content.children[i].classList.add('wrapper-offer_active');
            }
        }
});
};

const changeClass = element =>{
    for(let i = 0; i < tabButton.children.length; i++){
        tabButton.children[i].classList.remove('button_active');
    }
    element.classList.add('button_active');
};

// Window 
const btnOpen = document.getElementById('button-open');
const modalWindow = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', ()=> {
    modalWindow.classList.add('wrapper-modal_active');
})

const closeModel = () => {
    modalWindow.classList.remove('wrapper-modal_active');
}

overlay.addEventListener('click' , closeModel);

/////////////////////////////////////////////

// Slide

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      sliders = document.querySelectorAll('.wrapper-box__slider'),
      dots = document.querySelectorAll('.dots-wrapper__tab'),
      wrapper = document.querySelectorAll('.wrapper-box');

// console.log(sliders);
      let index = 0;

const activeSlide = n => {
    for(slide of sliders){
        slide.classList.remove('wrapper-box__slider_active');
    }
        sliders[n].classList.add('wrapper-box__slider_active');
    };

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('dots-wrapper__tab_active');
    }
    dots[n].classList.add('dots-wrapper__tab_active');
};

const prepareCurrentSlide = ind =>{
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == sliders.length - 1){
        index = 0
        prepareCurrentSlide(index);
    } else{
        index++;
        prepareCurrentSlide(index);
    }       
}

const prevSlide = () => {
    if (index == 0){
        index = sliders.length -1;
        prepareCurrentSlide(index);
    } else{
        index--;
        prepareCurrentSlide(index);
    }
};     
    
dots.forEach((item,indexDot) => {
    item.addEventListener('click' , ()=>{
        index = indexDot
        prepareCurrentSlide(index);
    })
}); 


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
/////////////////////////////////////////////