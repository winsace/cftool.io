document.addEventListener("DOMContentLoaded", function () {
    const errorTableBody = document.getElementById("errorTableBody");
    const searchInput = document.getElementById("searchInput");
    const viewErrorBtn = document.getElementById("viewErrorBtn");

    let errorData = [];

    async function fetchErrorData() {
        try {
            const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSaVFSW49sOojSa_FaVcpyHeuNhoOcfjgRpXR9pe7ETbAKY8YkxiGC87KRcelU2TlkdxwJWVChve5qX/pub?gid=481226094&single=true&output=csv');
            if (!response.ok) {
                throw new Error('Failed to fetch eq.csv');
            }
            const data = await response.text();
            
            if (!data.trim()) {
                throw new Error('Empty CSV data');
            }
            
            const rows = data.trim().split('\n').slice(1);

            errorData = [];
            errorTableBody.innerHTML = '';

            rows.forEach(row => {
                const columns = row.split(',');
                const UID = columns[0]?.trim();
                const domain = columns[1]?.trim();
                const errorCode = columns[2]?.trim();
                const description = columns[3]?.trim();
                const action = columns[4]?.trim();
                const sampleTicket = columns[5]?.trim();
                const sampleIM = columns[6]?.trim();
                const lastUpdate = columns[7]?.trim();
                const rep = columns[8]?.trim();

                // Handle multiline text in the description field
                const descriptionLines = description.split('|').map(line => line.trim()); // Split description by '|' delimiter
                const formattedDescription = descriptionLines.join('<br>'); // Join lines with <br> for HTML line breaks

                const error = {
                    UID,
                    domain,
                    errorCode,
                    description: formattedDescription, // Use formatted description
                    action,
                    sampleTicket,
                    sampleIM,
                    lastUpdate,
                    rep
                };
                errorData.push(error);

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="px-2 py-2 border"><input type="radio" name="errorRadio" value="${UID}"></td>
                    <td class="px-2 py-2 border">${UID}</td>
                    <td class="px-2 py-2 border">${domain}</td>
                    <td class="px-2 py-2 border">${errorCode}</td>
                    <td class="px-2 py-2 border">${formattedDescription}</td> <!-- Use formatted description -->
                    <td class="px-2 py-2 border">${action}</td>
                    <td class="px-2 py-2 border">${sampleTicket}</td>
                    <td class="px-2 py-2 border">${sampleIM}</td>
                    <td class="px-2 py-2 border">${lastUpdate}</td>
                    <td class="px-2 py-2 border">${rep}</td>
                `;
                errorTableBody.appendChild(tr);
            });
        } catch (error) {
            console.error('Error fetching or parsing CSV:', error);
            alert('An error occurred. Please try again later.');
        }
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
                <td class="px-2 py-2 border"><input type="radio" name="errorRadio" value="${error.UID}"></td>
                <td class="px-2 py-2 border">${error.UID}</td>
                <td class="px-2 py-2 border">${error.domain}</td>
                <td class="px-2 py-2 border">${error.errorCode}</td>
                <td class="px-2 py-2 border">${error.description}</td>
                <td class="px-2 py-2 border">${error.action}</td>
                <td class="px-2 py-2 border">${error.sampleTicket}</td>
                <td class="px-2 py-2 border">${error.sampleIM}</td>
                <td class="px-2 py-2 border">${error.lastUpdate}</td>
                <td class="px-2 py-2 border">${error.rep}</td>
            `;
            errorTableBody.appendChild(tr);
        });
    }

    function viewErrorDetails() {
        const selectedRadio = document.querySelector('input[name="errorRadio"]:checked');
        if (!selectedRadio) {
            alert('Please select an error to view.');
            return;
        }
        const UID = selectedRadio.value;
        window.open(`view.html?UID=${UID}`, '_blank', 'width=600,height=400');
    }

    fetchErrorData();

    searchInput.addEventListener('input', filterErrorData);
    viewErrorBtn.addEventListener('click', viewErrorDetails);
});

