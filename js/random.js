function findRandomRange(min, max){
    let range=max-min;
    return Math.floor(Math.random()*(range+1)+min); 
}