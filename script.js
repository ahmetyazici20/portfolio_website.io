document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

const toggleModeBtn = document.getElementById('toggle-mode');
toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
        alert("Lütfen tüm alanları doldurun!");
        return false;
    }
    alert("Mesajınız gönderildi!");
    return true;
}

document.getElementById('more-btn')?.addEventListener('click', () => {
    const extraText = document.getElementById('extra-text');
    extraText.style.display = extraText.style.display === 'none' ? 'block' : 'none';
});

function filterProjects() {
    const filterValue = document.getElementById("filter-input").value.toLowerCase();
    const projects = document.querySelectorAll(".portfolio-item");

    projects.forEach(project => {
        const projectName = project.getAttribute("data-name").toLowerCase();
        if (projectName.includes(filterValue)) {
            project.classList.remove("hidden");
        } else {
            project.classList.add("hidden");
        }
    });
}
