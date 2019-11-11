importScripts ('https://www.gstatic.com/firebasejs/5.7.3/firebase-app.js'); 
importScripts ('https://www.gstatic.com/firebasejs/5.7.3/firebase-messaging.js'); 

firebase.initializeApp ({ 
    messagingSenderId: '378697952415' 
}); 
const messaging = firebase.messaging();
