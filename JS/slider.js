let slider = document.querySelector('#slider')
const sliderItem = Array.from(slider.children);
sliderItem.forEach(function(slide, index){

    if (index != 0) {
        slide.classList.add('hidden');
    }

    slide.dataset.index = index;

    slide.addEventListener('click', function(){
        slide.classList.add('hidden');

        let nextSliderIndex;
        if (index + 1 === sliderItem.length){
            nextSliderIndex = 0;
        }else{
            nextSliderIndex = index + 1;
        }
        console.log(nextSliderIndex);
        
        const nextSlide = slider.querySelector(`[data-index="${nextSliderIndex}"]`);
        nextSlide.classList.remove('hidden');
    })
});

function showNextSlide(){
        slide.classList.add('hidden');

        let nextSliderIndex;
        if (index + 1 === sliderItem.length){
            nextSliderIndex = 0;
        }else{
            nextSliderIndex = index + 1;
        }
        console.log(nextSliderIndex);
        
        const nextSlide = slider.querySelector(`[data-index="${nextSliderIndex}"]`);
        nextSlide.classList.remove('hidden');   
}
