window.onload = function() {
    setTimeout(function() {
        document.getElementById('intro-screen').classList.add('fade-out');
        setTimeout(function() {
            document.getElementById('intro-screen').style.display = 'none';
            document.querySelector('.chat-section').style.display = 'block';
        }, 1000);
    }, 3000); 
};

document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
});

document.addEventListener('click', function(e) {
    if(!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
        document.querySelector('.chat-sidebar-profile').classList.remove('active')
    }
});

document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        if(this.parentElement.classList.contains('active')) {
            this.parentElement.classList.remove('active')
        } else {
            document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
                i.classList.remove('active')
            })
            this.parentElement.classList.add('active')
        }
    })
});

document.addEventListener('click', function(e) {
    if(!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
        document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
            i.classList.remove('active')
        })
    }
});

document.querySelectorAll('.conversation-form-input').forEach(function(item) {
    item.addEventListener('input', function() {
        this.rows = this.value.split('\n').length
    })
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.conversation').forEach(function(i) {
        i.classList.remove('active');
    });
    document.querySelector('.conversation').classList.add('active');
});

document.querySelectorAll('[data-conversation]').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.conversation').forEach(function(i) {
            i.classList.remove('active');
        });
        document.querySelector(this.dataset.conversation).classList.add('active');
    });
});

document.querySelectorAll('.conversation-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        this.closest('.conversation').classList.remove('active');
        document.querySelector('.conversation-default').classList.add('active');
    });
});

document.querySelectorAll('.conversation-back').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        this.closest('.conversation').classList.remove('active')
        document.querySelector('.conversation-default').classList.add('active')
    })
});

function checkPassword() {
    const correctPassword = '2345'; 
    const inputPassword = document.getElementById('password-input').value;
    
    if (inputPassword === correctPassword) {
        document.getElementById('private-room-notice').style.display = 'none';
        document.getElementById('chat-content').style.display = 'block';
        document.querySelector('.conversation-form').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
}
