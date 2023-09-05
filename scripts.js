// Get references to the search input and a container for displaying suggestions
const nameSearchInput = document.getElementById('nameSearch');
const suggestionsContainer = document.getElementById('suggestionsContainer');

// Array of staff names
const staffNames = [
    "POMPI BISWAS (HP)",
    "TANIMA (MEDWIK)",
    "PINKI PAUL (HP)",
    "SUMAN NANDI (HMB)",
    "SUSHMITA SAHA (HP)",
    "SUSHANTO MITRA (HP)",
    "SITARAM YADAV (HP)",
    "AVIJIT KARMAKAR (HMB)",
    "RAJU SAHA (P7)",
    "ALOK KARMAKAR (HP)",
    "RAKHI SARDAR (P7)",
    "SOMNATH MAZUMDAR (P7)",
    "NETAI KHAN (HMB)",
    "AMIT JHA (HMB)",
    "USHA PARMANIK (HMB)",
    "NEELKANTHA DAS (HMB)",
    "SHASHI SAROJ (HMB)",
    "SUMAN TRIPATHY (HMB)",
    "SOMNATH MAITY (HMB)",
    "GANESH ADHIKARY (P7)",
    "ASHUTOSH KUMAR (P7)",
    "RAJ HAZRA (P7)",
    "SHAMSI AFREEN (P7)",
    "JYOTI (P7)",
    "PAYEL DAS (P7)",
    "SHYAM HELA (MEDWIK)"
];

// Function to update and display suggestions
function updateSuggestions() {
  const searchTerm = nameSearchInput.value.toLowerCase();
  const matchingNames = staffNames.filter(name => name.toLowerCase().includes(searchTerm));

  // Clear previous suggestions
  suggestionsContainer.innerHTML = '';

  // Display matching names as suggestions
  matchingNames.forEach(name => {
    const suggestion = document.createElement('div');
    suggestion.textContent = name;
    suggestion.classList.add('suggestion');
    suggestion.addEventListener('click', () => {
      nameSearchInput.value = name;
      suggestionsContainer.innerHTML = '';
    });
    suggestionsContainer.appendChild(suggestion);
  });
}

// Listen for input changes in the search box
nameSearchInput.addEventListener('input', updateSuggestions);








function updateInRadioValue() {
    const inRadioButton = document.getElementById('in');
    const outRadioButton = document.getElementById('out');
    const currentTime = new Date().toLocaleTimeString();
    inRadioButton.value = currentTime;
    outRadioButton.value = currentTime;
  }
  
  // Update the "In" radio button value initially
  updateInRadioValue();
  
  // Update the "In" radio button value every second (adjust the interval as needed)
  setInterval(updateInRadioValue, 1000);


  function updateClockAndDate() {
    const digitalClock = document.getElementById('digitalClock');
    const dateElement = document.getElementById('date');
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    const currentDate = now.toLocaleDateString();

    digitalClock.textContent = `Current Time: ${currentTime}`;
    dateElement.textContent = `Date: ${currentDate}`;
}

// Update the digital clock and date initially
updateClockAndDate();

// Update the digital clock and date every second
setInterval(updateClockAndDate, 1000);




































































const scriptURL = 'https://script.google.com/macros/s/AKfycbwdNJaDuMrOXqui0YpTgqpchbPIXk7Ea8C6LdGiq5Baaf7vvWWnSt36qSRkkpUHu3XD/exec'
        const form = document.forms['product']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => alert("Thank you! your form is submitted successfully." ))
            .then(() => {  window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
        })