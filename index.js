document.addEventListener("DOMContentLoaded", function () {
    const errorTableBody = document.getElementById("errorTableBody");
    const searchInput = document.getElementById("searchInput");
    const viewErrorBtn = document.getElementById("viewErrorBtn");

    let errorData = [];

    async function fetchErrorData() {
        try {
            const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSWiy5k4oM4qn4Por4LKSUMLkchO4mZWLt79VV7kXctFMBCR6JctzAhlSmRLhKhe3ed59hCPa7UcyB7/pub?gid=287360518&single=true&output=tsv');
            if (!response.ok) {
                throw new Error('Failed to fetch xsieq.tsv');
            }
            const data = await response.text();
            
            if (!data.trim()) {
                throw new Error('Empty TSV data');
            }
            
            const rows = data.trim().split('\n').slice(1);

            errorData = [];
            errorTableBody.innerHTML = '';

            rows.forEach(row => {
                const columns = row.split('\t');
                const formattedColumns = columns.map(col => {
                    const lines = col.split('|').map(line => line.trim()); // Split by '|' delimiter for multiline
                    return lines.join('<br>'); // Join lines with <br> for HTML line breaks
                });

                const [UID, domain, errorCode, description, action, sampleTicket, sampleIM, lastUpdate, rep] = formattedColumns;

                const error = {
                    UID,
                    domain,
                    errorCode,
                    description,
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
                    <td class="px-2 py-2 border">${description}</td>
                    <td class="px-2 py-2 border">${action}</td>
                    <td class="px-2 py-2 border">${sampleTicket}</td>
                    <td class="px-2 py-2 border">${sampleIM}</td>
                    <td class="px-2 py-2 border">${lastUpdate}</td>
                    <td class="px-2 py-2 border">${rep}</td>
                `;
                errorTableBody.appendChild(tr);
            });
        } catch (error) {
            console.error('Error fetching or parsing TSV:', error);
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
