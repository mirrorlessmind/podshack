const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (email && password) {
      const response = await fetch("/auth/google", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/search");
      } else {
        alert(response.statusText);
      }
    }
  };
  document.querySelector(".google-form").addEventListener("submit", signupFormHandler);