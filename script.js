// Update the copyright year automatically.

document.getElementById("year").textContent =
    new Date().getFullYear();


// Handle the quote form.

const quoteForm = document.getElementById("quote-form");

quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(quoteForm);

    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(
        `Landscaping inquiry from ${name}`
    );

    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n\n` +
        `Project details:\n${message}`
    );

    // Replace this with the real business email.
    const businessEmail = "hello@example.com";

    document.getElementById("form-status").textContent =
        "Opening your email application...";

    window.location.href =
        `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
