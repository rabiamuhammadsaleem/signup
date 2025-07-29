// // Supabase Setup
// const supabaseUrl = "https://dutjglitxfaotauardhj.supabase.co";
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dGpnbGl0eGZhb3RhdWFyZGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODU0MDAsImV4cCI6MjA2ODE2MTQwMH0.R0CIrMCT2JmCib70r0JB4gR3zzTN_n8gxSUwcbPY0EM";

// const { createClient } = supabase;
// const client = createClient(supabaseUrl, supabaseKey);


// // Loader functions
// function showLoader() {
//   const loaderOverlay = document.getElementById('loader-overlay');
//   if (loaderOverlay) {
//     loaderOverlay.style.display = 'flex';
//   }
// }

// function hideLoader() {
//   const loaderOverlay = document.getElementById('loader-overlay');
//   if (loaderOverlay) {
//     loaderOverlay.style.display = 'none';
//   }
// }

// // UserProfile functions
// async function displayUserProfile() {
//   try {
//     showLoader();
//     const {
//       data: { user },
//       error,
//     } = await client.auth.getUser();

//     if (error) throw error;

//     if (user) {
//       const profileAvatar = document.getElementById('profile-avatar');
//       const profileName = document.getElementById('profile-name');

//       if (profileAvatar) {
//         profileAvatar.src = user.user_metadata?.avatar_url || 'https://www.gravatar.com/avatar/?d=mp';
//       }

//       if (profileName) {
//         profileName.textContent = user.user_metadata?.full_name || user.email;
//       }
//     }
//   } catch (err) {
//     console.error('Error fetching user profile:', err.message);
//   } finally {
//     hideLoader();
//   }
// }

// // Password visibility toggle for login page
// const togglePassword1 = document.getElementById('toggleLoginPassword'); // updated this line
// const passwordInput1 = document.getElementById('login-password');
// const eyeIcon1 = document.getElementById('loginEyeIcon');

// if (togglePassword1 && passwordInput1 && eyeIcon1) {
//   togglePassword1.addEventListener('click', () => {
//     const type = passwordInput1.getAttribute('type') === 'password' ? 'text' : 'password';
//     passwordInput1.setAttribute('type', type);
//     eyeIcon1.classList.toggle('fa-eye');
//     eyeIcon1.classList.toggle('fa-eye-slash');
//   });
// }

// // Password visibility toggle for signup page
// const togglePassword2 = document.getElementById('togglesignupPassword'); // updated this line
// const passwordInput2 = document.getElementById('signup-password');
// const eyeIcon2 = document.getElementById('signupEyeIcon');

// if (togglePassword2 && passwordInput2 && eyeIcon2) {
//   togglePassword2.addEventListener('click', () => {
//     const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
//     passwordInput2.setAttribute('type', type);
//     eyeIcon2.classList.toggle('fa-eye');
//     eyeIcon2.classList.toggle('fa-eye-slash');
//   });
// }

// // Signup functionality
// const signupBtn = document.getElementById('signup-btn');
// const signupForm = document.getElementById('signupForm');
// signupBtn && signupBtn.addEventListener('click', async (e) => {
//   e.preventDefault();
//   const username = document.getElementById('signup-username');
//   const email = document.getElementById('signup-email');
//   const password = document.getElementById('signup-password');

//   if (!username.value || !email.value || !password.value) {
//     alert('Please fill all fields');
//     return;
//   }

//   try {
//     showLoader();
//     const { data, error } = await client.auth.signUp({
//       email: email.value,
//       password: password.value,
//       options: {
//         data: {
//           full_name: username.value,
//         },
//       },
//     });

//     if (error) throw error;
//     if (data) {
//       alert('Signup successful!');
//       window.location.href = 'post.html';
//     }
//   } catch (error) {
//     console.error('Signup error:', error);
//     if (error.message.includes('invalid format')) {
//       alert('Please enter a valid email address');
//     } else {
//       alert('Signup failed: ' + error.message);
//     }
//   } finally {
//     hideLoader();
//   }
// });


// // Login functionality
// const loginBtn = document.getElementById('login-btn');
// loginBtn && loginBtn.addEventListener('click', async () => {
//   const email = document.getElementById('login-email');
//   const password = document.getElementById('login-password');

//   if (!email.value || !password.value) {
//     alert('Please fill all fields');
//     return;
//   }

//   try {
//     showLoader();
//     const { data, error } = await client.auth.signInWithPassword({
//       email: email.value,
//       password: password.value,
//     });

//     if (error) throw error;
//     if (data) window.location.href = 'post.html';
//   } catch (error) {
//     console.error('Login error:', error);
//     alert('Login failed: ' + error.message);
//     window.location.href = 'index.html';
//   } finally {
//     hideLoader();
//   }
// });

// // Google login
// const loginWithGoogle = document.getElementById('loginWithGoogle');
// loginWithGoogle && loginWithGoogle.addEventListener('click', async () => {
//   try {
//     showLoader();
//     const { error } = await client.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         redirectTo: window.location.origin + '/post.html',
//         queryParams: { access_type: 'offline', prompt: 'consent' },
//       },
//     });
//     if (error) throw error;
//   } catch (error) {
//     console.error('Google login error:', error);
//     alert(error.message || 'Google login failed');
//     hideLoader();
//   }
// });

// // Github login
// const loginWithGithub = document.getElementById('loginWithGithub');
// loginWithGithub && loginWithGithub.addEventListener('click', async () => {
//   try {
//     showLoader();
//     const { error } = await client.auth.signInWithOAuth({
//       provider: 'github',
//       options: {
//         redirectTo: window.location.origin + '/post.html',
//         queryParams: { access_type: 'offline', prompt: 'consent' },
//       },
//     });
//     if (error) throw error;
//   } catch (error) {
//     console.error('Github login error:', error);
//     alert(error.message || 'Github login failed');
//     hideLoader();
//   }
// });

// // Logout functionality
// const logoutBtn = document.getElementById('logoutBtn');
// logoutBtn && logoutBtn.addEventListener('click', async () => {
//   try {
//     showLoader();
//     const { error } = await client.auth.signOut();
//     if (error) throw error;
//     window.location.href = 'index.html';
//   } catch (error) {
//     console.error('Logout error:', error);
//     alert('Logout failed');
//     hideLoader();
//   }
// });

// // Check for returning OAuth redirect
// document.addEventListener('DOMContentLoaded', async () => {
//   if (window.location.hash.includes('access_token')) {
//     const {
//       data: { session },
//     } = await client.auth.getSession();
//     if (session) window.location.href = 'post.html';
//   }

//   if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
//     displayUserProfile();
//   }
// });


// // Post functionality
// const submitPost = document.getElementById('submitPost');
// submitPost && submitPost.addEventListener('click', async () => {
//   const userTitle = document.getElementById('post-title').value.trim();
//   const userDescription = document.getElementById('postdescrib').value.trim();

//   if (!userTitle || !userDescription) {
//     alert('Please enter both a title and a description.');
//     return;
//   }

//   try {
//     showLoader();
//     submitPost.disabled = true;

//     const {
//       data: { user },
//       error: authError,
//     } = await client.auth.getUser();

//     if (authError || !user) throw authError || new Error('User not found.');

//     const { error } = await client.from('posts').insert([
//       {
//         user_id: user.id,
//         title: userTitle,
//         description: userDescription,
//       }
//     ]);

//     if (error) throw error;

//     alert('Post created successfully!');
//     document.getElementById('post-title').value = '';
//     document.getElementById('postdescrib').value = '';
//   } catch (error) {
//     console.error('Error creating post:', error);
//     alert('Failed to create post: ' + error.message);
//   } finally {
//     hideLoader();
//     submitPost.disabled = false;
//   }
// });

// // Read all posts
// async function readAllPosts() {
//   try {
//     showLoader();
//     const { data, error } = await client.from('posts').select();

//     if (error) throw error;

//     if (data && document.getElementById('container')) {
//       const box = document.getElementById('container');
//       box.innerHTML = data
//         .map(({ id, title, description }) => {
//           const isLong = description.length > 150;
//           const shortDesc = isLong ? description.slice(0, 150) + "..." : description;

//           return `
//             <div id="${id}" class="blog-card">
//               <h4>${title}</h4>
//               <p>${shortDesc}</p>
//               ${isLong ? `<button class="read-more-btn" data-full="${description.replace(/"/g, '&quot;')}">Read More</button>` : ""}
//             </div>
//           `;
//         })
//         .join('');

//       // Add read-more event listener
//       document.querySelectorAll('.read-more-btn').forEach(btn => {
//         btn.addEventListener('click', (e) => {
//           const fullText = e.target.getAttribute('data-full');
//           alert(fullText);
//         });
//       });
//     }
//   } catch (error) {
//     console.error('Error loading posts:', error);
//     alert('Failed to load posts: ' + error.message);
//   } finally {
//     hideLoader();
//   }
// }

// //read my posts
// const readMyPosts = async () => {
//   const {
//     data: { user },
//   } = await client.auth.getUser();

//   const { data, error } = await client.from('posts').select().eq('user_id', user.id);

//   if (data) {
//     const box = document.getElementById('container');

//     box.innerHTML = data
//       .map(({ id, title, description }) => {
//         const isLong = description.length > 150;
//         const shortDesc = isLong ? description.slice(0, 150) + "..." : description;

//         return `
// 					<div id="${id}" class="blog-card text-center">
// 						<h4>${title}</h4>
// 						<p>${shortDesc}</p>
// 						${isLong ? `<button class="read-more-btn" data-full="${description.replace(/"/g, '&quot;')}">Read More</button>` : ""}
// 						<div class="d-flex justify-content-center gap-3 mt-3">
//             <button onclick="updatePost('${id}','${title}','${description}')" class="btn btn-edit">
//             <i class="fas fa-edit me-1"></i> Edit
//             </button>
//             <button onclick="deletePost('${id}')" class="btn btn-delete">
//             <i class="fas fa-trash-alt me-1"></i> Delete
//             </button>
//            </div>
//            </div>`;
//       })
//       .join('');

//     // Add read-more event listener
//     document.addEventListener('click', (e) => {
//       if (e.target.classList.contains('read-more-btn')) {
//         const fullText = e.target.getAttribute('data-full');
//         Swal.fire({
//           title: 'Full Description',
//           text: fullText,
//           icon: 'info',
//           confirmButtonColor: '#3085d6'
//         });
//       }
//     });
//   } else {
//     console.log(error);
//   }
// };
// if (window.location.pathname == '/my-blogs.html') {
//   const current = document.getElementById('active');

//   try {
//     readMyPosts();
//   } catch (error) {
//     console.log(error);
//   }
// }

// //delete a post

// async function deletePost(postId) {
//   const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger',
//     },
//     buttonsStyling: false,
//   });
//   swalWithBootstrapButtons
//     .fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//       reverseButtons: true,
//     })
//     .then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           showLoader();
//           const response = await client.from('posts').delete().eq('id', postId);
//           if (response) {
//             hideLoader();
//             alert('post has been deleted');
//             console.log(response);
//             readMyPosts();
//           } else {
//             console.log(error);
//           }
//         } catch (error) {
//           console.log(error);
//         } finally {
//           hideLoader();
//         }

//         swalWithBootstrapButtons.fire({
//           title: 'Deleted!',
//           text: 'Your file has been deleted.',
//           icon: 'success',
//         });
//       } else if (
//         result.dismiss === Swal.DismissReason.cancel
//       ) {
//         swalWithBootstrapButtons.fire({
//           title: 'Cancelled',
//           text: 'Your imaginary file is safe :)',
//           icon: 'error',
//         });
//       }
//     });
// }

// //update post

// async function updatePost(postId, postTitle, postDescription) {
//   const { value: formValues } = await Swal.fire({
//     title: 'Update post',
//     html: `
//     <label > post title
// 	<input id="swal-input1" class="swal1-input"  value = '${postTitle}' ></label>
//     <label > post description
// 	<input id="swal-input2" class="swal2-input" style="margin: 0 !important;"   value = '${postDescription}' ></label>
//   `,
//     focusConfirm: false,
//     preConfirm: () => {
//       return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value];
//     },
//   });
//   try {
//     if (formValues) {
//       showLoader();
//       const [updatedTitle, updatedDescription] = formValues;
//       const { error } = await client
//         .from('posts')
//         .update({ title: updatedTitle, description: updatedDescription })
//         .eq('id', postId);

//       if (error) {
//         console.log(error);
//       } else {
//         hideLoader();

//         Swal.fire({
//           icon: 'success',
//           title: 'your post has been updated',
//           confirmButtonColor: '#125b9a',
//         });
//         readMyPosts();
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     hideLoader();
//   }
// }

// // Initialize appropriate page
// document.addEventListener('DOMContentLoaded', () => {
//   if (window.location.pathname.includes('all-blogs.html')) {
//     readAllPosts();
//   } else if (window.location.pathname.includes('my-blogs.html')) {
//     readMyPosts();
//   }
// });


// Supabase Setup
const supabaseUrl = "https://dutjglitxfaotauardhj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dGpnbGl0eGZhb3RhdWFyZGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1ODU0MDAsImV4cCI6MjA2ODE2MTQwMH0.R0CIrMCT2JmCib70r0JB4gR3zzTN_n8gxSUwcbPY0EM";

const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

// Loader functions
function showLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.style.display = 'flex';
  }
}

function hideLoader() {
  const loaderOverlay = document.getElementById('loader-overlay');
  if (loaderOverlay) {
    loaderOverlay.style.display = 'none';
  }
}

// UserProfile functions
async function displayUserProfile() {
  try {
    showLoader();
    const {
      data: { user },
      error,
    } = await client.auth.getUser();

    if (error) throw error;

    if (user) {
      const profileAvatar = document.getElementById('profile-avatar');
      const profileName = document.getElementById('profile-name');

      if (profileAvatar) {
        profileAvatar.src = user.user_metadata?.avatar_url || 'https://www.gravatar.com/avatar/?d=mp';
      }

      if (profileName) {
        profileName.textContent = user.user_metadata?.full_name || user.email;
      }
    }
  } catch (err) {
    console.error('Error fetching user profile:', err.message);
    Swal.fire({
      icon: 'error',
      title: 'Profile Error',
      text: 'Failed to load user profile',
      confirmButtonColor: '#d33'
    });
  } finally {
    hideLoader();
  }
}

// Password visibility toggle for login page
const togglePassword1 = document.getElementById('toggleLoginPassword');
const passwordInput1 = document.getElementById('login-password');
const eyeIcon1 = document.getElementById('loginEyeIcon');

if (togglePassword1 && passwordInput1 && eyeIcon1) {
  togglePassword1.addEventListener('click', () => {
    const type = passwordInput1.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput1.setAttribute('type', type);
    eyeIcon1.classList.toggle('fa-eye');
    eyeIcon1.classList.toggle('fa-eye-slash');
  });
}

// Password visibility toggle for signup page
const togglePassword2 = document.getElementById('togglesignupPassword');
const passwordInput2 = document.getElementById('signup-password');
const eyeIcon2 = document.getElementById('signupEyeIcon');

if (togglePassword2 && passwordInput2 && eyeIcon2) {
  togglePassword2.addEventListener('click', () => {
    const type = passwordInput2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput2.setAttribute('type', type);
    eyeIcon2.classList.toggle('fa-eye');
    eyeIcon2.classList.toggle('fa-eye-slash');
  });
}

// Signup functionality
const signupBtn = document.getElementById('signup-btn');
const signupForm = document.getElementById('signupForm');
signupBtn && signupBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const username = document.getElementById('signup-username');
  const email = document.getElementById('signup-email');
  const password = document.getElementById('signup-password');

  if (!username.value || !email.value || !password.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Information',
      text: 'Please fill all fields',
      confirmButtonColor: '#3085d6'
    });
    return;
  }

  try {
    showLoader();
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: username.value,
        },
      },
    });

    if (error) throw error;
    if (data) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Signup successful!',
        confirmButtonColor: '#28a745',
        willClose: () => {
          window.location.href = 'post.html';
        }
      });
    }
  } catch (error) {
    console.error('Signup error:', error);
    if (error.message.includes('invalid format')) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        confirmButtonColor: '#d33'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: error.message,
        confirmButtonColor: '#d33'
      });
    }
  } finally {
    hideLoader();
  }
});

// Login functionality
const loginBtn = document.getElementById('login-btn');
loginBtn && loginBtn.addEventListener('click', async () => {
  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');

  if (!email.value || !password.value) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Information',
      text: 'Please fill all fields',
      confirmButtonColor: '#3085d6'
    });
    return;
  }

  try {
    showLoader();
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;
    if (data) window.location.href = 'post.html';
  } catch (error) {
    console.error('Login error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: error.message,
      confirmButtonColor: '#d33',
      willClose: () => {
        window.location.href = 'index.html';
      }
    });
  } finally {
    hideLoader();
  }
});

// // Google login
// const loginWithGoogle = document.getElementById('loginWithGoogle');
// loginWithGoogle && loginWithGoogle.addEventListener('click', async () => {
//   try {
//     showLoader();
//     const { error } = await client.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         redirectTo: window.location.origin + '/post.html',
//         queryParams: { access_type: 'offline', prompt: 'consent' },
//       },
//     });
//     if (error) throw error;
//   } catch (error) {
//     console.error('Google login error:', error);
//     alert(error.message || 'Google login failed');
//     hideLoader();
//   }
// });

// Google login
const loginWithGoogle = document.getElementById('loginWithGoogle');
loginWithGoogle && loginWithGoogle.addEventListener('click', async () => {
  try {
    const redirectTo = window.location.hostname === '127.0.0.1'
    ? window.Location.origin + '/post.html'
    : window.Location.origin + '/signup/post.html'

      showLoader();
    const { error } = await client.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: ,
    queryParams: { access_type: 'offline', prompt: 'consent' },
  },
});
   if (error) throw error;
  } catch (error) {
    console.error('Google login error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Google Login Failed',
      text: error.message || 'Failed to login with Google',
      confirmButtonColor: '#d33'
    });
    hideLoader();
  }
});

//     showLoader();
//     const { error } = await client.auth.signInWithOAuth({
//   provider: 'google',
//   options: {
//     redirectTo: 'https://rabiamuhammadsaleem.github.io/signup/post.html',
//     queryParams: { access_type: 'offline', prompt: 'consent' },
//   },
// });

    // const { error } = await client.auth.signInWithOAuth({
    //   provider: 'google',
    //   options: {
    //     //  redirectTo: 'rabiamuhammadsaleem.github.io/signup/post.html',
    //     // redirectTo:redirectTo,
    //      redirectTo: window.location + 'https://rabiamuhammadsaleem.github.io/signup/post.html',
    //     queryParams: { access_type: 'offline', prompt: 'consent' },
    //   },
    // });
//  

// Github login
const loginWithGithub = document.getElementById('loginWithGithub');
loginWithGithub && loginWithGithub.addEventListener('click', async () => {
  try {
    showLoader();
    const { error } = await client.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: window.location.origin + '/post.html',
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    });
    if (error) throw error;
  } catch (error) {
    console.error('Github login error:', error);
    Swal.fire({
      icon: 'error',
      title: 'GitHub Login Failed',
      text: error.message || 'Failed to login with GitHub',
      confirmButtonColor: '#d33'
    });
    hideLoader();
  }
});

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn && logoutBtn.addEventListener('click', async () => {
  try {
    showLoader();
    const { error } = await client.auth.signOut();
    if (error) throw error;
    Swal.fire({
      icon: 'success',
      title: 'Logged Out',
      text: 'You have been successfully logged out',
      confirmButtonColor: '#28a745',
      willClose: () => {
        window.location.href = 'index.html';
      }
    });
  } catch (error) {
    console.error('Logout error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Logout Failed',
      text: 'Failed to logout',
      confirmButtonColor: '#d33'
    });
    hideLoader();
  }
});

// Check for returning OAuth redirect
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

// Post functionality
const submitPost = document.getElementById('submitPost');
submitPost && submitPost.addEventListener('click', async () => {
  const userTitle = document.getElementById('post-title').value.trim();
  const userDescription = document.getElementById('postdescrib').value.trim();

  if (!userTitle || !userDescription) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Information',
      text: 'Please enter both a title and a description.',
      confirmButtonColor: '#3085d6'
    });
    return;
  }

  try {
    showLoader();
    submitPost.disabled = true;

    const {
      data: { user },
      error: authError,
    } = await client.auth.getUser();

    if (authError || !user) throw authError || new Error('User not found.');

    const { error } = await client.from('posts').insert([
      {
        user_id: user.id,
        title: userTitle,
        description: userDescription,
      }
    ]);

    if (error) throw error;

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Post created successfully!',
      confirmButtonColor: '#28a745'
    });
    document.getElementById('post-title').value = '';
    document.getElementById('postdescrib').value = '';
  } catch (error) {
    console.error('Error creating post:', error);
    Swal.fire({
      icon: 'error',
      title: 'Post Creation Failed',
      text: 'Failed to create post: ' + error.message,
      confirmButtonColor: '#d33'
    });
  } finally {
    hideLoader();
    submitPost.disabled = false;
  }
});

// Read all posts
async function readAllPosts() {
  try {
    showLoader();
    const { data, error } = await client.from('posts').select();

    if (error) throw error;

    if (data && document.getElementById('container')) {
      const box = document.getElementById('container');
      box.innerHTML = data
        .map(({ id, title, description }) => {
          const isLong = description.length > 150;
          const shortDesc = isLong ? description.slice(0, 30) + "..." : description;

          const isTitleLong = title.length > 10;
          const shortTitle = isTitleLong ? title.slice(0, 10) + "..." : title;

          return `
    <div id="${id}" class="blog-card text-center">
      <h4 class="text-center">${shortTitle}</h4>
      <p>${shortDesc}</p>
      ${isLong ? `<button class="read-more-btn" data-full="${description.replace(/"/g, '&quot;')}">Read More</button>` : ""}
    </div>
  `;
        })
        .join('');

      // Add read-more event listener
      document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const fullText = e.target.getAttribute('data-full');
          Swal.fire({
            title: 'Full Description',
            text: fullText,
            icon: 'info',
            confirmButtonColor: '#3085d6'
          });
        });
      });
    }
  } catch (error) {
    console.error('Error loading posts:', error);
    Swal.fire({
      icon: 'error',
      title: 'Loading Failed',
      text: 'Failed to load posts: ' + error.message,
      confirmButtonColor: '#d33'
    });
  } finally {
    hideLoader();
  }
}

//read my posts
const readMyPosts = async () => {
  const {
    data: { user },
  } = await client.auth.getUser();

  const { data, error } = await client.from('posts').select().eq('user_id', user.id);

  if (data) {
    const box = document.getElementById('container');

    box.innerHTML = data
      .map(({ id, title, description }) => {
        const isLong = description.length > 150;
        const shortDesc = isLong ? description.slice(0, 150) + "..." : description;

        const isTitleLong = title.length > 10;
        const shortTitle = isTitleLong ? title.slice(0, 10) + "..." : title;

        return `
    <div id="${id}" class="blog-card text-center">
      <h4>${shortTitle}</h4>
      <p>${shortDesc}</p>
      ${isLong ? `<button class="read-more-btn" data-full="${description.replace(/"/g, '&quot;')}">Read More</button>` : ""}
      <div class="d-flex justify-content-center gap-3 mt-3">
        <button class="btn btn-edit edit-btn" 
          data-id="${id}" 
          data-title="${title.replace(/"/g, '&quot;')}" 
          data-description="${description.replace(/"/g, '&quot;')}">
          <i class="fas fa-edit me-1"></i> Edit
        </button>
        <button onclick="deletePost('${id}')" class="btn btn-delete">
          <i class="fas fa-trash-alt me-1"></i> Delete
        </button>
      </div>
    </div>`;
      })
      .join('');

    document.querySelectorAll('.edit-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const title = btn.getAttribute('data-title');
        const desc = btn.getAttribute('data-description');
        updatePost(id, title, desc);
      });
    });



    // Add read-more event listener
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('read-more-btn')) {
        const fullText = e.target.getAttribute('data-full');
        Swal.fire({
          title: 'Full Description',
          text: fullText,
          icon: 'info',
          confirmButtonColor: '#3085d6'
        });
      }
    });
  } else {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to load your posts',
      confirmButtonColor: '#d33'
    });
  }
};
if (window.location.pathname == '/my-blogs.html') {
  const current = document.getElementById('active');

  try {
    readMyPosts();
  } catch (error) {
    console.log(error);
  }
}

//delete a post
async function deletePost(postId) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success mx-2',
      cancelButton: 'btn btn-danger mx-2',
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        showLoader();
        const response = await client.from('posts').delete().eq('id', postId);
        if (response) {
          hideLoader();
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your post has been deleted.',
            icon: 'success',
            confirmButtonColor: '#28a745'
          });
          readMyPosts();
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete post',
          confirmButtonColor: '#d33'
        });
      } finally {
        hideLoader();
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: 'Cancelled',
        text: 'Your post is safe :)',
        icon: 'info',
        confirmButtonColor: '#3085d6'
      });
    }
  });
}

//update post
async function updatePost(postId, postTitle, postDescription) {
  const { value: formValues } = await Swal.fire({
    title: 'Update Post',
    html: `
      <div class="mb-3">
        <label for="swal-input1" class="form-label">Post Title</label>
        <input id="swal-input1" class="form-control" value="${postTitle}">
      </div>
      <div class="mb-3">
        <label for="swal-input2" class="form-label">Post Description</label>
        <textarea id="swal-input2" class="form-control" style="min-height: 100px;">${postDescription}</textarea>
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Update',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#28a745',
    cancelButtonColor: '#d33',
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ];
    },
  });

  try {
    if (formValues) {
      showLoader();
      const [updatedTitle, updatedDescription] = formValues;
      const { error } = await client
        .from('posts')
        .update({ title: updatedTitle, description: updatedDescription })
        .eq('id', postId);

      if (error) {
        throw error;
      }

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your post has been updated',
        confirmButtonColor: '#28a745'
      });
      readMyPosts();
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Update Failed',
      text: 'Failed to update post: ' + error.message,
      confirmButtonColor: '#d33'
    });
  } finally {
    hideLoader();
  }
}

// Initialize appropriate page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('all-blogs.html')) {
    readAllPosts();
  } else if (window.location.pathname.includes('my-blogs.html')) {
    readMyPosts();
  }
});