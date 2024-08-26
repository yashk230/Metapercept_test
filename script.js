function fetchJSONData() {
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => console.error('Unable to fetch data:', error));
}

function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';

    data.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');

        courseDiv.innerHTML = `
            <img src="${course.ImageUrl}"class="p-5 card-img-top">
            <h3>${course.Name}</h3>
            <p class="card-text">${course.ShortDesc}</p>
            <button type="submit">View</button>
        `;

        container.appendChild(courseDiv);
    });
}

fetchJSONData();