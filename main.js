/* =====================
   NexFlow AI — main.js
   ===================== */

let waitlistCount = 214;

/**
 * Scrolls smoothly to the waitlist section.
 */
function scrollToWaitlist() {
  document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Handles waitlist form submission.
 * Replace the TODO below with a real API call (e.g. Mailchimp, Airtable, etc.)
 */
function joinWaitlist() {
  const input   = document.getElementById('emailInput');
  const joinBtn = document.getElementById('joinBtn');
  const email   = input.value.trim();

  // Basic validation
  if (!email || !email.includes('@')) {
    input.style.borderColor = 'rgba(220, 80, 80, 0.5)';
    setTimeout(() => { input.style.borderColor = ''; }, 1500);
    return;
  }

  // TODO: Replace this block with your real backend / email service call.
  // Example using Airtable REST API:
  //
  // fetch('https://api.airtable.com/v0/YOUR_BASE_ID/Waitlist', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'Bearer YOUR_API_KEY',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ fields: { Email: email } })
  // });

  // Update UI
  waitlistCount++;
  document.getElementById('counter').innerHTML =
    '<strong>' + waitlistCount + '</strong> people already waiting';

  document.getElementById('successMsg').style.display = 'flex';

  input.value    = '';
  input.disabled = true;
  joinBtn.disabled = true;
}

// Allow pressing Enter inside the email field
document.getElementById('emailInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') joinWaitlist();
});
