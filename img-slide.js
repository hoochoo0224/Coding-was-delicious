window.onload = function() {
    const kindWrap =  document.querySelector('.kind_wrap');
    const slider = kindWrap.querySelector('.slider');
    const slideLis = slider.querySelectorAll('li')
    const moveButton = kindWrap.querySelector('.arrow');
  
    /* ul 넓이 계산해 주기 */
    const liWidth = slideLis[0].clientWidth;
    const sliderWidth = liWidth * slideLis.length;
    slider.style.width = `${sliderWidth}px` ;
  
    /* 리스너 설치하기 */
    let currentIdx = 0; // 슬라이드 현재 번호
    let translate = 0; // 슬라이드 위치 값

    setInterval(()=>{
        if (currentIdx !== slideLis.length -1) {
            translate -= liWidth;
            slider.style.transform = `translateX(${translate}px)`;
            currentIdx += 1;
        } else if (currentIdx >= slideLis.length -1) {
            translate += liWidth * (currentIdx);
            currentIdx = 0;
            slider.style.transform = `translateX(${translate}px)`;
        }
    }, 8000)

    moveButton.addEventListener('click', moveSlide);
    function moveSlide(event) {
        event.preventDefault();
        if (event.target.className === 'next') {
            if (currentIdx !== slideLis.length -1) {
                translate -= liWidth;
                slider.style.transform = `translateX(${translate}px)`;
                currentIdx += 1;
            } else if (currentIdx >= slideLis.length -1) {
                translate += liWidth * (currentIdx);
                currentIdx = 0;
                slider.style.transform = `translateX(${translate}px)`;
            }
        } else if (event.target.className === 'prev') {
            if (currentIdx !== 0) {
                translate += liWidth;
                slider.style.transform = `translateX(${translate}px)`;
                currentIdx -= 1;
            } 
            // else if (currentIdx <= 0) {
            //     translate += liWidth * (currentIdx);
            //     currentIdx = slideLis.length -1;
            //     slider.style.transform = `translateX(${translate}px)`;
            // }
        }
    }
}