// const supabaseUrl = "https://dutjglitxfaotauardhj.supabase.co"
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...." // your key
const supabaseUrl = "https://dutjglitxfaotauardhj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dGpnbGl0eGZhb3RhdWFyZGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODU0MDAsImV4cCI6MjA2ODE2MTQwMH0.R0CIrMCT2JmCib70r0JB4gR3zzTN_n8gxSUwcbPY0EM"

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);
console.log(createClient, client);

// Signup
const signupBtn = document.getElementById("signupBtn");
signupBtn && signupBtn.addEventListener("click", function () {
    const signupEmail = document.getElementById("signup-email");
    const signupPass = document.getElementById("signup-password");

    if (signupEmail && signupPass) {
        async function signupUser() {
            try {
                const loader = document.getElementById("loader");
                loader.style.display = "block";
                const { data, error } = await client.auth.signUp({
                    email: signupEmail.value,
                    password: signupPass.value,
                });
                loader.style.display = "none";
                if (error) {
                    console.log(error.message);
                    alert(error.message);
                } else {
                    console.log(data);
                    alert("User created successfully, please verify your email.");
                    window.location.href = "login.html";
                }
            } catch (error) {
                console.log(error.message);
                alert("Something went wrong");
            }
        }
        signupUser();
    } else {
        alert("Please fill in all fields.");
    }
});

// Login
const loginBtn = document.getElementById("loginBtn");
loginBtn && loginBtn.addEventListener("click", function () {
    const loginEmail = document.getElementById("login-email");
    const loginPass = document.getElementById("login-password");

    if (loginEmail && loginPass) {
        async function loginUser() {
            try {
                const loader = document.getElementById("loader");
                loader.style.display = "block";
                const { data, error } = await client.auth.signInWithPassword({
                    email: loginEmail.value,
                    password: loginPass.value,
                });
                loader.style.display = "none";
                if (error) {
                    console.log(error.message);
                    alert(error.message);
                } else {
                    console.log(data);
                    alert("Logged in successfully!");
                    window.location.href = "home.html";
                }
            } catch (error) {
                console.log(error.message);
                alert("Something went wrong");
            }
        }
        loginUser();
    } else {
        alert("Please fill in all fields.");
    }
});
