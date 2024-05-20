document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const income = parseInt(document.getElementById('income').value);
    const assets = parseInt(document.getElementById('assets').value);
    
    // 등급 결정 로직
    let grade;
    if (income > 100000 && assets > 500000) {
        grade = 1;
    } else if (income > 50000 && assets > 250000) {
        grade = 2;
    } else if (income > 20000 && assets > 100000) {
        grade = 3;
    } else {
        grade = 4;
    }
    
    // 회원 정보 저장 (여기서는 예시로 localStorage 사용)
    const user = { username, grade };
    localStorage.setItem('user', JSON.stringify(user));
    
    // 등급별 페이지로 리디렉션
    window.location.href = `grade${grade}.html`;
});
