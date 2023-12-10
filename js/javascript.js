document.getElementById('showWorkoutsBtn').addEventListener('click', showWorkouts);
document.getElementById('showRandomWorkouts').addEventListener('click', showRandomWorkouts);
document.getElementById('exerciseType').addEventListener('change', populateExerciseNames);
document.getElementById('showSelectedWorkouts').addEventListener('click', showSelectedWorkouts);

function showWorkouts() {
    const selectedType = document.getElementById('exerciseType').value;
    
    fetch('workouts.json')
        .then((response) => response.json())
        .then((data) => {
            const filteredWorkouts = selectedType === '' ? data : data.filter(workout => workout.type === selectedType);
            displayWorkouts(filteredWorkouts);
        })
        .catch((error) => {
            console.error('Error fetching workouts:', error);
        });
}

 // Shuffle the array of workouts            
 // Select the first 5 workouts from the shuffled array
function showRandomWorkouts() {
    fetch('workouts.json')
        .then((response) => response.json())
        .then((data) => {
           
            const shuffledWorkouts = shuffleArray(data);

            const randomWorkouts = shuffledWorkouts.slice(0, 5);
            displayWorkouts(randomWorkouts); 
        })
        .catch((error) => {
            console.error('Error fetching workouts:', error);
        });
}

function displayWorkouts(workouts) {
    let workoutsHTML = '';

    workouts.forEach((workout) => {
        workoutsHTML += `
            <div>
                <h3>${workout.name}</h3>
                <p>Type: ${workout.type}</p>
                <p>Difficulty: ${workout.difficulty}</p>
                <p>Instructions: ${workout.instructions}</p>
            </div>
        `;
    });                

    document.getElementById('output').innerHTML = workoutsHTML;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}