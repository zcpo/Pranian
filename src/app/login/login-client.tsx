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
    let ba3 = document.getElementById('ba3');

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

    if (navigator.getBattery && ba3) {
      navigator.getBattery().then((battery) => {
        let ba3Percent = battery.level;
        battery.addEventListener('chargingchange', () => {
          ba3Percent = battery.level;
        });
        let start = 0;
        let num = ba3Percent * 100;
        let interval = setInterval(() => {
          start++;
          if (start >= num) {
            clearInterval(interval);
          }
          ba3.textContent = start + '%';
        }, 10); // Reduced interval for faster animation
      });
    }
  }, []);

  return (
    <>
      <div className="battery">
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 8C2.5 7.17157 3.17157 6.5 4 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V9C19.5 9.27614 19.7239 9.5 20 9.5C20.8284 9.5 21.5 10.1716 21.5 11V13C21.5 13.8284 20.8284 14.5 20 14.5C19.7239 14.5 19.5 14.7239 19.5 15V16C19.5 16.8284 18.8284 17.5 18 17.5H4C3.17157 17.5 2.5 16.8284 2.5 16V14C2.5 13.7239 2.72386 13.5 3 13.5C3.27614 13.5 3.5 13.7239 3.5 14V16C3.5 16.2761 3.72386 16.5 4 16.5H18C18.2761 16.5 18.5 16.2761 18.5 16V15C18.5 14.1716 19.1716 13.5 20 13.5C20.2761 13.5 20.5 13.2761 20.5 13V11C20.5 10.7239 20.2761 10.5 20 10.5C19.1716 10.5 18.5 9.82843 18.5 9V8C18.5 7.72386 18.2761 7.5 18 7.5H4C3.72386 7.5 3.5 7.72386 3.5 8V10C3.5 10.2761 3.27614 10.5 3 10.5C2.72386 10.5 2.5 10.2761 2.5 10V8Z"
          />
        </svg>
        <span id="ba3">0%</span>
      </div>

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
              Already a slayer? <a href="#" className="login">login in</a>
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
              Not yet a slayer? <a href="#" className="create">Sign up</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginClientPage;
