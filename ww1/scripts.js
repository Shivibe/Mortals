// Function to load report content from an external JSON file
function loadReportContent() {
  fetch('report.json')
    .then(response => response.json())
    .then(data => {
      Object.keys(data).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.innerHTML = data[sectionId];
        }
      });
    })
    .catch(error => console.error('Error loading report:', error));
}

// Call the function to load report content when the page is loaded
document.addEventListener('DOMContentLoaded', loadReportContent);
