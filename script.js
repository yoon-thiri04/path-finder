document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = form.querySelector('input[type="text"]').value;
        const dates = form.querySelectorAll('input[type="text"]')[1].value;
        alert(`Searching for accommodations in ${location} from ${dates}`);
    });
});
