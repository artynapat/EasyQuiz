function checkAnswer(answer) {
    const result = document.getElementById('result');
    let x = 0;
    if (answer === 'c') {
        x =x+1;
        result.textContent = "ถูกต้อง "+ x + " คะแนน";
        result.style.color = 'green';
    } else {
        result.textContent = "ตอบผิดตอบใหม่อีกครั้ง";
        result.style.color = 'red';
    }
}

function checkAnswer02(answer) {
    const result = document.getElementById('result02');
    let x = 0;
    if (answer === 'b') {
        x =x+1;
        result.textContent = "ถูกต้อง "+ x + " คะแนน";
        result.style.color = 'green'; 
    } else {
        result.textContent = "ตอบผิดตอบใหม่อีกครั้ง";
        result.style.color = 'red';
    }
}

