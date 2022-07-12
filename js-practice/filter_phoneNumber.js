function solution(phone_number) {
    var answer = phone_number;
    for(var i = 0; i < phone_number.length - 4; i++){
        answer = answer.substr(0,i) + '*' + answer.substr(i+1);
    }
    
    return answer;
}