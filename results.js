window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const totalMarks = urlParams.get('totalMarks');
    const percentage = urlParams.get('percentage');

    document.getElementById('totalMarks').innerText = `Total Marks: ${totalMarks}`;
    document.getElementById('percentage').innerText = `Percentage: ${percentage}%`;
}

function goBack() {
    window.history.back();
}
