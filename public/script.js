document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('login_name').value;
        const password = document.getElementById('login_password').value;
        const remember = document.getElementById('login_remember').checked;
        
        try {

            console.log(username, password, remember);
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                    remember
                })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Login exitoso
                window.location.href = '/dashboard';
            } else {
                // Mostrar mensaje de error
                const errorDiv = document.querySelector('.error');
                errorDiv.innerHTML = `<p>${data.message}</p>`;
            }
        } catch (error) {
            console.error('Error:', error);
            const errorDiv = document.querySelector('.error');
            errorDiv.innerHTML = '<p>Error al conectar con el servidor</p>';
        }
    });
}); 