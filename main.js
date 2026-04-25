/* =====================
   NexFlow AI — main.js
   ===================== */

// ⚠️ Replace this with your actual Formspree form ID
// Get it from formspree.io after creating a form
const FORMSPREE_URL = 'https://formspree.io/f/mojybdjz';

let waitlistCount = 214;

/**
 * Scrolls smoothly to the waitlist section.
 */
function scrollToWaitlist() {
  document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Handles waitlist form submission and sends email to Formspree.
 */
async function joinWaitlist() {
  const input   = document.getElementById('emailInput');
  const joinBtn = document.getElementById('joinBtn');
  const email   = input.value.trim();

  // Basic validation
  if (!email || !email.includes('@')) {
    input.style.borderColor = 'rgba(220, 80, 80, 0.5)';
    setTimeout(() => { input.style.borderColor = ''; }, 1500);
    return;
  }

  // Disable button and show loading state
  joinBtn.disabled = true;
  joinBtn.textContent = 'Sending...';

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    });

    if (response.ok) {
      // Success — update the UI
      waitlistCount++;
      document.getElementById('counter').innerHTML =
        '<strong>' + waitlistCount + '</strong> people already waiting';

      document.getElementById('successMsg').style.display = 'flex';
      input.value    = '';
      input.disabled = true;
      joinBtn.textContent = 'Joined!';
    } else {
      throw new Error('Server error');
    }

  } catch (error) {
    // Something went wrong — show error and re-enable button
    joinBtn.disabled = false;
    joinBtn.textContent = 'Join now';
    input.style.borderColor = 'rgba(220, 80, 80, 0.5)';
    setTimeout(() => { input.style.borderColor = ''; }, 2000);
    alert('Something went wrong. Please try again!');
  }
}

// Allow pressing Enter inside the email field
document.getElementById('emailInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') joinWaitlist();
});
