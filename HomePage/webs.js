const profileButton = document.getElementById('profileButton'); 
profileButton.addEventListener('click', () => {
    window.location.href = 'Profile/profile.html'; 
});

const userId = localStorage.getItem('loggedInUserId');
console.log("User id"+userId)

document.getElementById('symptomAnalysisCard').addEventListener('click', function() {
    window.location.href = 'Symptom/index.html';
});

document.getElementById('treatmentPlanCard').addEventListener('click', function() {
    window.location.href = 'PatientHistory/PH.html';
});

document.getElementById('syntheticDataCard').addEventListener('click', function() {
    window.location.href = 'SMD/index.html';
});
