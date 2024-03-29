document.addEventListener("DOMContentLoaded", function () {
    // Function to create announcement elements
    function createAnnouncementElement(announcementText) {
        const announcementElement = document.createElement('p');
        announcementElement.textContent = announcementText;
        announcementElement.classList.add('announcement');
        return announcementElement;
    }

    // Function to fetch announcements from URL and display them
    function fetchAndDisplayAnnouncements(url, containerId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Parse data into an array of announcements
                const announcements = data.split('\n').filter(Boolean); // Split by new line and remove empty lines

                // Render announcements
                const announcementContainer = document.getElementById(containerId);
                announcements.forEach(announcement => {
                    announcementContainer.appendChild(createAnnouncementElement(announcement));
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Fetch and display announcements for each container
    fetchAndDisplayAnnouncements('https://raw.githubusercontent.com/winsace/cftool.io/main/dnt.txt', 'dntAnnouncement');
    fetchAndDisplayAnnouncements('https://raw.githubusercontent.com/winsace/cftool.io/main/escalated.txt', 'escalatedAnnouncement');
    fetchAndDisplayAnnouncements('https://raw.githubusercontent.com/winsace/cftool.io/main/latest.txt', 'latestAnnouncement');

    // Error Management section
    const errorTableBody = document.getElementById("errorTableBody");
    const searchInput = document.getElementById("searchInput");
    const viewErrorBtn = document.getElementById("viewErrorBtn");

    let errorData = [];

    async function fetchErrorData() {
        try {
            const response = await fetch('xsieq.csv');
            if (!response.ok) {
                throw new Error('Failed to fetch xsieq.csv');
            }
            const data = await response.text();
            
            if (!data.trim()) {
                throw new Error('Empty CSV data');
            }
            
            const rows = data.trim().split('\n').slice(1);

            errorData = [];
            errorTableBody.innerHTML = '';

            rows.forEach((row, index) => {
                const columns = row.split(',');
                const formattedColumns = columns.map(col => {
                    const lines = col.split('|').map(line => line.trim());
                    return lines.join('<br>');
                });

                const [UID, domain, errorCode, description, action, sampleTicket, sampleIM, lastUpdate, rep] = formattedColumns;

                const error = {
                    domain,
                    errorCode,
                    description,
                    action,
                    sampleTicket,
                    sampleIM,
                    lastUpdate,
                };
                errorData.push(error);

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="px-2 py-2 border"><input type="radio" name="errorRadio" value="${domain}"></td>
                    <td class="px-2 py-2 border">${domain}</td>
                    <td class="px-2 py-2 border">${errorCode}</td>
                    <td class="px-2 py-2 border">${description}</td>
                    <td class="px-2 py-2 border">${action}</td>
                    <td class="px-2 py-2 border">${sampleTicket}</td>
                    <td class="px-2 py-2 border">${sampleIM}</td>
                    <td class="px-2 py-2 border">${lastUpdate}</td>
                `;
                errorTableBody.appendChild(tr);
            });
            applyRowColors(); // After fetching, apply row colors
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    function applyRowColors() {
        const rows = errorTableBody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            if (index % 2 === 0) {
                row.classList.add('bg-light-blue');
            } else {
                row.classList.remove('bg-light-blue');
            }
        });
    }

    function filterErrorData() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = errorData.filter(error => 
            error.errorCode.toLowerCase().includes(searchTerm) ||
            error.description.toLowerCase().includes(searchTerm)
        );

        errorTableBody.innerHTML = '';

        filteredData.forEach(error => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-2 py-2 border"><input type="radio" name="errorRadio" value="${error.domain}"></td>
                <td class="px-2 py-2 border">${error.domain}</td>
                <td class="px-2 py-2 border">${error.errorCode}</td>
                <td class="px-2 py-2 border">${error.description}</td>
                <td class="px-2 py-2 border">${error.action}</td>
                <td class="px-2 py-2 border">${error.sampleTicket}</td>
                <td class="px-2 py-2 border">${error.sampleIM}</td>
                <td class="px-2 py-2 border">${error.lastUpdate}</td>
            `;
            errorTableBody.appendChild(tr);
        });
        applyRowColors(); // After filtering, reapply row colors
    }

    function viewErrorDetails() {
        const selectedRadio = document.querySelector('input[name="errorRadio"]:checked');
        if (!selectedRadio) {
            alert('Please select an error to view.');
            return;
        }
        const domain = selectedRadio.value;
        window.open(`view.html?domain=${domain}`, '_blank', 'width=600,height=400');
    }

    fetchErrorData();

    searchInput.addEventListener('input', filterErrorData);
    viewErrorBtn.addEventListener('click', viewErrorDetails);
});
