'use client';

import React, { useEffect } from 'react';
import { User, Mail, Lock } from 'lucide-react';

const LoginClientPage: React.FC = () => {
  useEffect(() => {
    let loginBtn = document.querySelector('.login');
    let createBtn = document.querySelector('.create');
    let body = document.body;
    let confirmPass = document.querySelector('#confirmpassword') as HTMLInputElement;
    let password = document.querySelector('#password') as HTMLInputElement;
    let themeBtn = document.querySelector('#themeButton');
    let themeText = document.querySelector('.theme-text');
    let savedTheme = localStorage.getItem('theme');
    let email = document.getElementById('email') as HTMLInputElement;
    let error = document.getElementById('error');
    let emailSpan = document.getElementById('for-email');
    let signUp = document.querySelector('.form.signup');
    let signIn = document.querySelector('.form.signin');
    
    // Add dark theme by default if none is saved
    if (!savedTheme) {
        body.classList.add('dark');
        savedTheme = 'dark';
    } else {
        body.className = savedTheme;
    }

    if(themeText) {
        setTimeout(() => {
            themeText.textContent = body.className.toUpperCase();
        }, 2000);
    }
    

    let themes = ['light', 'dark', 'lightsOut'];
    
    var count = 0;
    if (savedTheme === null) {
      count = 1; // Default to dark
    } else {
      count = themes.indexOf(savedTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            count++;
            let selected;
            if (count > themes.length - 1) {
                count = 0;
            }
            selected = themes[count];
            
            localStorage.setItem('theme', selected);
            body.className = selected;
            if(themeText) {
                themeText.textContent = selected.toUpperCase();
            }
        });
    }

    if (loginBtn && signUp && signIn) {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signUp.classList.add('fadeout');
        signIn.classList.add('fadein');
        setTimeout(() => {
          (signUp as HTMLElement).style.display = 'none';
          (signIn as HTMLElement).style.display = 'flex';
        }, 1000);

        setTimeout(() => {
          signUp.classList.remove('fadeout');
          signIn.classList.remove('fadein');
        }, 3000);
      });
    }

    if (createBtn && signUp && signIn) {
      createBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signIn.classList.add('fadeout');
        signUp.classList.add('fadein');
        setTimeout(() => {
          (signIn as HTMLElement).style.display = 'none';
          (signUp as HTMLElement).style.display = 'flex';
        }, 1000);
        setTimeout(() => {
          signIn.classList.remove('fadeout');
          signUp.classList.remove('fadein');
        }, 3000);
      });
    }

    if (email && emailSpan && error) {
      email.addEventListener('input', () => {
        if (!email.validity.valid && email.value !== '') {
          (emailSpan as HTMLElement).style.opacity = '0';
          (error as HTMLElement).style.display = 'block';
          email.classList.add('handle-error');
        } else {
          email.classList.remove('handle-error');
          (error as HTMLElement).style.display = 'none';
          (emailSpan as HTMLElement).style.opacity = '1';
        }
      });
    }
    
    if (confirmPass && password) {
        confirmPass.disabled = true;
        confirmPass.classList.add('disable');
        password.addEventListener('input', () => {
            if (password.validity.valid) {
                confirmPass.disabled = false;
                confirmPass.classList.remove('disable');
            } else {
                confirmPass.disabled = true;
                confirmPass.classList.add('disable');
            }
        });
    }
  }, []);

  return (
    <>
      <div className="theme" id="themeButton">
        <div className="theme-btn">
          <span className="theme-text">THEMIFY</span>
          {/* Icons are handled by CSS based on body class */}
        </div>
      </div>

      <main>
        <div className="container">
          <div className="form signup " id="signup">
            <h2>Sign Up</h2>
            <div className="inputBox">
              <input type="text" required autoComplete="off" minLength={3} />
              <User />
              <span>username</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                id="email"
                required
                autoComplete="off"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
              />
              <Mail />
              <span id="for-email">email</span>
              <p id="error">invalid email human</p>
            </div>
            <div className="inputBox">
              <input type="password" id="password" required autoComplete="off" minLength={8} />
              <Lock />
              <span>create password</span>
            </div>
            <div className="inputBox">
              <input type="password" id="confirmpassword" required autoComplete="off" minLength={8} />
              <Lock />
              <span>confirm password</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Create Account" />
            </div>
            <p className="p-text">
              Already a member? <a href="#" className="login">login in</a>
            </p>
          </div>
          <div className="form signin " id="signin">
            <h2>Sign In</h2>
            <div className="inputBox">
              <input type="text" id="name" required autoComplete="off" minLength={3} />
              <User />
              <span>username</span>
            </div>
            <div className="inputBox">
              <input type="password" required autoComplete="off" minLength={8} />
              <Lock />
              <span>password</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>
            <p className="p-text">
              Not yet a member? <a href="#" className="create">Sign up</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginClientPage;
