function solution(s) {
    var str_length = s.length;
    var answer;
    
    if(str_length % 2 === 0){
        answer = s.substr((str_length / 2)-1, 2);
    }else{
        answer = s.substr(str_length / 2, 1);
    }
    
    return answer;
}