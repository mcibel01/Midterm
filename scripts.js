// filter workout plans by level
function filterPlans(level) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (level === 'all' || card.classList.contains(level)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// calculate the ideal workout plan
function calculateWorkoutPlan() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const goal = document.getElementById('goal').value;
    let result;

    if (goal === 'lose weight') {
        result = (age < 30 && weight > 70) ? 
            'Try our HIIT 30-Day Challenge!' : 
            'Yoga or cardio might be a good start.';
    } else if (goal === 'gain muscle') {
        result = 'Our advanced strength training is perfect for you!';
    } else {
        result = 'Maintain your fitness with a mix of cardio and strength training.';
    }

    document.getElementById('result').innerText = result;
    return false;  // dont allow form submission
}
