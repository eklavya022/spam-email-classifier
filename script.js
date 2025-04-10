function checkSpam() {
  const text = document.getElementById("emailInput").value.toLowerCase();
  const result = document.getElementById("result");

  const spamKeywords = [
    "win money",
    "free gift",
    "click here",
    "act now",
    "urgent",
    "limited time",
    "credit card",
    "lottery",
    "congratulations",
    "you have been selected"
  ];

  const isSpam = spamKeywords.some(keyword => text.includes(keyword));

  if (isSpam) {
    result.innerHTML = "🚫 This email is <span class='spam'>SPAM</span>.";
  } else {
    result.innerHTML = "✅ This email seems <span class='safe'>SAFE</span>.";
  }
}

function loadSample(type) {
  const emailInput = document.getElementById("emailInput");
  if (type === "spam") {
    emailInput.value = `Congratulations! You've won a free gift card.
Click here to claim now.
This offer is for a limited time only. Act now!`;
  } else {
    emailInput.value = `Dear John,

I hope this email finds you well. Please find attached the report you requested.
Let me know if you need any changes.

Best regards,
Jane`;
  }
}
