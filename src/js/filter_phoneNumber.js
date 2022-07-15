function solution(phoneNumber) {
    const length = phoneNumber;
    const answer = "*".repeat(length-4) + phoneNumber(-4,length); 
    
    return answer;
}
