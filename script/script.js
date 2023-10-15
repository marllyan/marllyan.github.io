let circularProgress = document.querySelector(".circular-progress"),
    circularProgress1 = document.querySelector(".circular-progress1"),
    circularProgress2 = document.querySelector(".circular-progress2"),
    circularProgress3 = document.querySelector(".circular-progress3"),
    progressValue = document.querySelector(".progress-value"),
    progressValue1 = document.querySelector(".progress-value1"),
    progressValue2 = document.querySelector(".progress-value2"),
    progressValue3 = document.querySelector(".progress-value3");

// html
let progressStartValue = 0,    
    progressEndValue = 67,    
    speed = 27;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    

    circularProgress.style.background = `conic-gradient(#00ff00 ${progressStartValue * 3.6}deg, #191919 0deg)`
    

    if(progressStartValue == progressEndValue)
      {
        clearInterval(progress);
    }    
}, speed);

// css
let progressStartValue1 = 0,    
    progressEndValue1 = 49,    
    speed1 = 38;
    
let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    

    circularProgress1.style.background = `conic-gradient(#00Bfff ${progressStartValue1 * 3.6}deg, #191919 0deg)`
    

    if(progressStartValue1 == progressEndValue1)
      {
        clearInterval(progress1);
    }    
}, speed1);

// javascript
let progressStartValue2 = 0,    
    progressEndValue2 = 9,    
    speed2 = 200;
    
let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    

    circularProgress2.style.background = `conic-gradient(#FFDF00 ${progressStartValue2 * 3.6}deg, #191919 0deg)`
    

    if(progressStartValue2 == progressEndValue2)
      {
        clearInterval(progress2);
    }    
}, speed2);

// pyton
let progressStartValue3 = 0,    
    progressEndValue3 = 5,    
    speed3 = 400;
    
let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    

    circularProgress3.style.background = `conic-gradient(#ff00ff ${progressStartValue3 * 3.6}deg, #191919 0deg)`
    

    if(progressStartValue3 == progressEndValue3)
      {
        clearInterval(progress3);
    }    
}, speed3);