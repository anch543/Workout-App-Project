const moodRadios = document.querySelectorAll('input[name="mood"]');

moodRadios.forEach((radio) => {
    radio.addEventListener('click', (event) => {
        const selectedMood = event.target.value;
        displayMoodDescription(selectedMood);
    });
});

function displayMoodDescription(mood) {
    const moodDescription = document.getElementById('mood-description');

    const moodData = {
        calm: {
            title: 'Calm',
            description: 'Feeling peaceful, relaxed, and composed.',
            suggestion: 'Meditation, Yoga, Stretching',
            backgroundColor: '#ADD8E6',
        },
        excited: {
            title: 'Excited',
            description: 'Experiencing a high level of enthusiasm or eagerness.',
            suggestion: 'High-Intensity Interval Training (HIIT), Dance, Running',
            backgroundColor: '#FF7F00',
        },
        happy: {
            title: 'Happy',
            description: 'Feeling content, joyful, and satisfied.',
            suggestion: 'Swimming, Biking, Team sports',
            backgroundColor: '#40E0D0',
        },
        angry: {
            title: 'Angry',
            description: 'Experiencing strong feelings of displeasure or hostility.',
            suggestion: 'Kickboxing, Strength Training, Running',
            backgroundColor: '#D81FF4',
        },
        scared: {
            title: 'Scared',
            description: 'Feeling frightened or anxious due to perceived danger.',
            suggestion: 'Yoga, Tai-Chi, Breathing Exercises',
            backgroundColor: '#E39EE1',
        },
        sad: {
            title: 'Sad',
            description: 'Feeling unhappy, sorrowful, or downhearted.',
            suggestion: 'Walking, Gardening, Socializing Outside',
            backgroundColor: '#9EAAE3',
        },
        annoyed: {
            title: 'Annoyed',
            description: 'Feeling slightly angry or irritated.',
            suggestion: 'Jump Roping, Stair Climbing, Punching Bag',
            backgroundColor: '#E7AB9E',
        }
    };

    const selectedMoodData = moodData[mood];
    if (selectedMoodData) {
        moodDescription.innerHTML = `
        <h2>${selectedMoodData.title}</h2>
        <p>${selectedMoodData.description}</p>
        <br>
        <p>Based on your mood, we suggest the following exercise: <br>
        ${selectedMoodData.suggestion}</p>`;

        moodDescription.style.backgroundColor = selectedMoodData.backgroundColor;

    }
}