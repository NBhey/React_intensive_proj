export function debounce(func, time, callNow){
    let timeoutId;
    
    return function(...args){
        const callNowOr=callNow && !timeoutId;

        clearTimeout(timeoutId);

        if (callNowOr) {
            func.apply(null, args);
          } else {
            timeoutId = setTimeout(() => func.apply(null, args), time);
          }
    }
}