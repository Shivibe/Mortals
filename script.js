<script>
  // Function to redirect to the new webpage
  function redirectToNewPage() {
    // Change the URL to the path of the local file
    var win = window.open("file:///C:/Users/admin/Desktop/ls%20fi/aff/aff.html", '_blank');
    if (win) {
      // Browser has allowed the new window to open
      win.focus();
    } else {
      // Browser has blocked the new window from opening
      alert('Please allow popups for this website to proceed.');
    }
  }

  // Event listener for the calculate button
  document.getElementById("calculate-btn").addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Redirect to the new webpage
    redirectToNewPage();
  });
</script>
