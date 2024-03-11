 
    function validateForm() {
        var firstName = document.getElementById("firstname").value.trim();
        var lastName = document.getElementById("lastname").value.trim();
        var email = document.getElementById("useremail").value.trim();
        var accountType = document.getElementById("accountType").value;
        var password = document.getElementById("userpassword").value.trim();

        if (firstName === "" || lastName === "" || email === "" || accountType === "--select account--" || password === "") {
            alert("Please fill out all fields.");
            return false; // Prevent form submission
        
    }

