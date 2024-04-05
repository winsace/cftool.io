document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const UID = urlParams.get('UID');

    if (!UID) {
        alert('Error UID not provided.');
        return;
    }

    // Function to fetch error details based on UID
    async function fetchErrorDetails() {
        try {
            const response = await fetch(`https://raw.githubusercontent.com/winsace/cftool.io/main/xsieq.csv`);
            if (!response.ok) {
                throw new Error('Failed to fetch error details.');
            }
            const data = await response.text();

            if (!data.trim()) {
                throw new Error('Empty CSV data');
            }

            const rows = data.trim().split('\n').slice(1);
            const errorDetails = rows.find(row => row.startsWith(`${UID},`));

            if (!errorDetails) {
                throw new Error('Error details not found.');
            }

            const [foundUID, domain, errorCode, description, action, sampleTicket, sampleIM, lastUpdate, rep] = errorDetails.split(',');
            const errorDetailsContainer = document.getElementById('errorDetailsContainer');
            errorDetailsContainer.innerHTML = `
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">UID:</label>
                    <p>${foundUID}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Domain:</label>
                    <p>${domain}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Error Code:</label>
                    <p>${errorCode}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <p>${description}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Action:</label>
                    <p>${action}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Sample Ticket:</label>
                    <p>${sampleTicket}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Sample IM:</label>
                    <p>${sampleIM}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Last Update:</label>
                    <p>${lastUpdate}</p>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Rep:</label>
                    <p>${rep}</p>
                </div>
            `;
        } catch (error) {
            console.error('Error fetching or displaying error details:', error);
            alert('An error occurred while fetching or displaying error details.');
        }
    }

    fetchErrorDetails();
});
