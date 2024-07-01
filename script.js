function calculateResult() {
    const totalQuestions = parseInt(document.getElementById('totalQuestions').value);
    const attemptedQuestions = parseInt(document.getElementById('attemptedQuestions').value);
    const correctMarks = parseFloat(document.getElementById('correctMarks').value);
    const negativeMarks = parseFloat(document.getElementById('negativeMarks').value);
    const unattendedQuestions = parseInt(document.getElementById('unattendedQuestions').value);
    const wrongAnswers = parseInt(document.getElementById('wrongAnswers').value);

    const correctAnswers = attemptedQuestions - wrongAnswers;
    const totalMarks = (correctAnswers * correctMarks) - (wrongAnswers * negativeMarks);
    const percentage = (totalMarks / (totalQuestions * correctMarks)) * 100;

    // Pass the results to the results page
    window.location.href = `results.html?totalMarks=${totalMarks.toFixed(2)}&percentage=${percentage.toFixed(2)}`;
}

function resetForm() {
    document.getElementById('marksForm').reset();
}
