// Get modal elements
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModalButton = document.getElementById('close-modal');

// Function to open the modal
function openModal(content) {
    modalContent.textContent = content; // Set the content of the modal
    modal.style.display = 'block'; // Show the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none'; // Hide the modal
}

// Add event listener to the close button
closeModalButton.addEventListener('click', closeModal);

// Example: Open the modal when the "Family" button is clicked
document.querySelector('.nav-button[href="family.html"]').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent navigation
    openModal('Welcome to the Family Page!'); // Set modal content
});