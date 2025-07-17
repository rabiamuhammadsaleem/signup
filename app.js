const supabaseUrl = "https://dutjglitxfaotauardhj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dGpnbGl0eGZhb3RhdWFyZGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODU0MDAsImV4cCI6MjA2ODE2MTQwMH0.R0CIrMCT2JmCib70r0JB4gR3zzTN_n8gxSUwcbPY0EM"

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey)
console.log(createClient)
console.log(client);

// Check and display user profile if logged in
async function displayUserProfile() { 
	try {
		const {
			data: { user },
			error,
		} = await client.auth.getUser();
		if (error) throw error;
		console.log(user)
		if (user) {
			if (document.getElementById('profile-avatar')) {
				document.getElementById('profile-avatar').src =
					user.user_metadata?.avatar_url || 'https://www.gravatar.com/avatar/?d=mp';
				document.getElementById('profile-name').textContent = user.user_metadata?.full_name || user.email;
				document.getElementById('profile-email').textContent = user.email;
			}
			console.log(window.location.pathname.includes('index.html'))
			// todo
			if (window.location.pathname.includes('index.html')) {
				window.location.href = 'post.html';
			}

		} else if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
			window.location.href = 'index.html';
		} 
	} catch (error) {
		console.error('Error:', error);
		if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
			window.location.href = 'index.html';
		}
	}
}

// Set up password visibility toggle
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('signup-password');
const eyeIcon = document.getElementById('eyeIcon');

if (togglePassword && passwordInput && eyeIcon) {
	togglePassword.addEventListener('click', () => {
		const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
		passwordInput.setAttribute('type', type);
		eyeIcon.classList.toggle('fa-eye');
		eyeIcon.classList.toggle('fa-eye-slash');
	});
}

// Handle signup form submission
const signupBtn = document.getElementById('signupBtn');
signupBtn &&
	signupBtn.addEventListener('click', async () => {
		const email = document.getElementById('signup-email');
		const password = document.getElementById('signup-password');

		if (email && password) {
			try {
				const { data, error } = await client.auth.signUp({
					email: email.value,
					password: password.value,
				});
				if (data) window.location.href = 'post.html'

				if (error) throw error;
			} catch (error) {
				console.error('Signup error:', error);
				if (error.message.includes('invalid format')) {
					alert('Please enter a valid email address');
				}
			}
		} else {
			if (email) {
				alert('Please your password');

			} else {
				alert('Please your email');

			}
		}
	});


// Handle login form submission
const loginBtn = document.getElementById('loginBtn');
loginBtn &&
	loginBtn.addEventListener('click', async () => {
		const email = document.getElementById('login-email');
		const password = document.getElementById('login-password');

		if (email && password) {
			try {
				const { data, error } = await client.auth.signInWithPassword({
					email: email.value,
					password: password.value,
				});
				if (data) window.location.href = 'post.html';
				if (error) throw error;
			} catch (error) {
				console.error('Login error:', error);
				if (error.message.includes('invalid format')) {
					alert('Please enter a valid email address');
				}
			}
		} else {
			alert('Please fill all fields');
		}
	});

// Handle Google login
const loginWithGoogle = document.getElementById('loginWithGoogle');
loginWithGoogle &&
	loginWithGoogle.addEventListener('click', async () => {
		try {
			const { error } = await client.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo: window.location.origin + '/post.html',
					queryParams: { access_type: 'offline', prompt: 'consent' },
				},
			});
			if (error) throw error;
		} catch (error) {
			console.error('Google login error:', error);
			alert(error.message || 'Google login failed');
		}
	});

// Handle logout
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn &&
	logoutBtn.addEventListener('click', async () => {
		try {
			const { error } = await client.auth.signOut();
			if (error) throw error;
			window.location.href = 'index.html';
		} catch (error) {
			console.error('Logout error:', error);
			alert('Logout failed');
		}
	});

// Check for returning Google OAuth redirect
document.addEventListener('DOMContentLoaded', async () => {
	if (window.location.hash.includes('access_token')) {
		const {
			data: { session },
		} = await client.auth.getSession();
		if (session) window.location.href = 'post.html';
	}
	if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
		displayUserProfile();
	}
});

// // signup functionality
// const signupBtn = document.getElementById("signupBtn")
// signupBtn && signupBtn.addEventListener("click", function () {
//     const signupEmail = document.getElementById("signup-email")
//     const signupPass = document.getElementById("signup-password")


//     //    false        &&   false
//     //     true        &&   true

//     //    false  &&                  true


//     //    true                true 

//     if (signupEmail && signupPass) {
//         console.log(signupEmail, signupPass)

//         async function signupUser() {
//             try {
//                 const loader = document.getElementById("loader")
//                 loader.style.display = "block"
//                 const { data, error } = await client.auth.signUp({
//                     email: signupEmail.value,
//                     password: signupPass.value,
//                 })
//                 loader.style.display = "none"
//                 if (error) {
//                     console.log(error.message)
//                 }
//                 else {
//                     console.log(data)
//                     alert("user created successsfully")
//                 }
//                 // navigate to login page
//                 window.location.href = "login.html"
//             }
//             catch (error) {
//                 console.log(error)
//                 console.log(error.message)

//                 switch (error.message) {
//                     case "Unable to validate email address: invalid format":
//                         console.log("hello")
//                         alert("please give us the right format of email address");
//                         break;
//                 }

//             }



//         }
//         signupUser()


//     }

//     else {
//         alert("please fill fields")
//     }


// })
// // const signupBtn = document.getElementById("signupBtn")
// // signupBtn && signupBtn.addEventListener("click", function () {
// //     const signupEmail = document.getElementById("signup-email")
// //     const signupPass = document.getElementById("signup-password")


// //     //    false        &&   false
// //     //     true        &&   true

// //     //    false  &&                  true


// //     //    true                true 

// //     if (signupEmail && signupPass) {
// //         console.log(signupEmail, signupPass)

// //         async function sigupUser() {
// //             try {
// //                 const loader = document.getElementById("loader")
// //                 loader.style.display = "block"
// //                 const { data, } = await client.auth.signUp({
// //                     email: signupEmail.value,
// //                     password: signupPass.value,
// //                 })
// //                 loader.style.display = "none"
// //                 console.log(data)
// //                 // navigate to login page

// //                 window.location.href = "login.html"
// //             }
// //             catch (error) {
// //                 console.log(error.message)

// //                 switch (error.message) {
// //                     case "Unable to validate email address: invalid format":
// //                         console.log("hello")
// //                         alert("please give us the right format of email address");
// //                         break;
// //                 }

// //             }



// //         }
// //         sigupUser()


// //     }

// //     else {
// //         alert("please fill fields")
// //     }


// // })



// //login functionality


// const loginBtn = document.getElementById("loginBtn")
// loginBtn && loginBtn.addEventListener("click", function () {
//     const loginEmail = document.getElementById("login-email")
//     const loginPass = document.getElementById("login-password")


//     //    false        &&   false
//     //     true        &&   true

//     //    false  &&                  true


//     //    true                true 

//     if (loginEmail && loginPass) {
//         console.log(loginEmail, loginPass)

//         async function loginUser() {
//             try {
//                 const loader = document.getElementById("loader")
//                 loader.style.display = "block"
//                 const { data, error } = await client.auth.signInWithPassword({
//                     email: loginEmail.value,
//                     password: loginPass.value,
//                 })
//                 loader.style.display = "none"
//                 if (error) {
//                     console.log(error.message)
//                 }
//                 else {
//                     console.log(data)
//                     alert("user created successsfully")
//                 }
//                 // navigate to login page
//                 window.location.href = "home.html"
//             }
//             catch (error) {
//                 console.log(error)
//                 console.log(error.message)

//                 switch (error.message) {
//                     case "Unable to validate email address: invalid format":
//                         console.log("hello")
//                         alert("please give us the right format of email address");
//                         break;
//                 }

//             }



//         }
//         loginUser()


//     }

//     else {
//         alert("please fill fields")
//     }


// })