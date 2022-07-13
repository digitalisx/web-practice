function solution(inputStr) {
    const length = inputStr.length;
    const quotient = str_length / 2;
    const remainder = str_length % 2;
    let answer = "";
    
    answer = remainder === 0 ? inputStr.slice(quotient, quotient+1) : inputStr.slice(quotient, quotient+2);

    return answer;
}
