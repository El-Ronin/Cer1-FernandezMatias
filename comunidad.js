// funcionalidad de comentarios
document.addEventListener('DOMContentLoaded', function() {
    // Contador de caracteres
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('char-count');
    
    if (messageInput && charCount) {
        messageInput.addEventListener('input', function() {
            charCount.textContent = this.value.length;
        });
    }
    
    // manejar el formulario
    const form = document.getElementById('commentForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const message = document.getElementById('message').value;
            
            if (username && message) {
                // nuevo comentario
                addComment(username, message);
                
                // limpiar el formulario
                form.reset();
                if (charCount) {
                    charCount.textContent = '0';
                }
            }
        });
    }
    
    function addComment(username, message) {
        // fecha y hora actual
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        
        // crear el comentario
        const commentDiv = document.createElement('div');
        commentDiv.className = 'card mb-3 custom-comment-card';
        commentDiv.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">${username}</h5>
                    <small class="text-muted">${date} - ${time}</small>
                </div>
                <p class="card-text">${message}</p>
            </div>
        `;
        
        // agregar el comentario
        const container = document.getElementById('comments-container');
        if (container) {
            container.insertBefore(commentDiv, container.firstChild);
        }
    }
});