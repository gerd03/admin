let userLoggedIn = false; // Track login status
let currentUserRole = ''; // Track the current user role

// Array of Quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

// Function to close modals
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function closeVaultModal() {
    document.getElementById('vault-modal').style.display = 'none';
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Function to open login modal
function openLoginModal() {
    if (!userLoggedIn) {
        document.getElementById('login-modal').style.display = 'block';
    }
}

// Function to check vault password for file download
function checkVaultPassword() {
    const password = document.getElementById('vault-password').value;
    if (password === "EMD12345") {
        alert("Access granted. You can download files.");
        closeVaultModal();
        initiateFileDownload(currentFile); 
    } else {
        alert("Incorrect password.");
        document.getElementById('vault-password').value = ''; // Clear password input
    }
}

// Function to email for permission
function emailForPermission() {
    window.location.href = "mailto:alejandromartinez050302@gmail.com?subject=Request for Download Permission";
}

// On file download button click
let currentFile = ''; 
function onFileDownloadAttempt(file) {
    currentFile = file;
    if (userLoggedIn) {
        initiateFileDownload(currentFile);
    } else {
        document.getElementById('vault-modal').style.display = 'block';
    }
}

// Function to initiate actual file download
function initiateFileDownload(file) {
    const link = document.createElement('a');
    link.href = file; 
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function for call me alert
function callMe() {
    alert('Please call me at 09615745812');
}

// Buy me a coffee modal
function buyMeCoffee() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modal.style.display = 'block';
    modalText.innerHTML = `
        <h2>Buy Me a Coffee</h2>
        <p>If you'd like to support me, you can send a tip via GCash.</p>
        <p><strong>Name:</strong> Alejandro Jr. Morante Martinez</p>
        <p><strong>GCash Number:</strong> 09615745812</p>
    `;
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const mailtoLink = `mailto:alejandromartinez050302@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
}

// Function to set login mode (Admin or Guest)
function setLoginMode(mode) {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('username').value = mode; 
}

// Function to handle login
function login() {
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '119383080048') {
        alert('Admin login successful.');
        userLoggedIn = true;
        currentUserRole = 'Admin';
        updateUserInterface();
        closeLoginModal();
    } else if (username === 'guest' && password === 'EMD12345') {
        alert('Guest login successful.');
        userLoggedIn = true;
        currentUserRole = 'Guest';
        updateUserInterface();
        closeLoginModal();
    } else {
        alert('Invalid credentials.');
    }
    document.getElementById('password').value = ''; // Clear password input
}

// Function to update user interface based on role
function updateUserInterface() {
    const logoutBtn = document.getElementById('logout-btn');
    const loginBtn = document.getElementById('login-btn');
    logoutBtn.style.display = 'inline';
    loginBtn.style.display = 'none';
    logoutBtn.textContent = `Logout (${currentUserRole})`;
}

// Function to handle logout
function triggerLogout() {
    document.getElementById('logout-message').style.display = 'block';
    displayRandomQuote();
    setTimeout(() => {
        document.getElementById('logout-message').style.display = 'none';
        resetUserInterface();
    }, 5000);
}

// Function to reset user interface on logout
function resetUserInterface() {
    const loginBtn = document.getElementById('login-btn');
    document.getElementById('logout-btn').style.display = 'none';
    loginBtn.style.display = 'inline';
    userLoggedIn = false;
    currentUserRole = '';
}

// Function to open specific section
function openSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Ensure random quote is displayed on load
window.onload = displayRandomQuote;