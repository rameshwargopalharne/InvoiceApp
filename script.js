document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/invoice')
        .then(resp => resp.json())
        .then(data => {
            let html = '<ul>';

            if (!data.items || data.items.length === 0) {
                html = '<p>No items in invoice.</p>';
            } else {
                data.items.forEach(item => {
                    html += `<li>${item.name} - $${item.price}</li>`;
                });
                html += '</ul>';
            }

            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(er => console.error("Failed to load invoice:", er));
});
