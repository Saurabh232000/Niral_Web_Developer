document.getElementById('downloadButton').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'block';
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;
    // let i=1;

    const inputs = document.querySelectorAll('#userForm input');
    inputs.forEach(input => {
        // console.log(i,valid);
        // i=i+1;
        if (!input.value) {
            valid = false;
            input.style.borderColor = 'red';
        } else {
            valid =true;
            input.style.borderColor = '';
        }
    });
    // console.log("Clicked");
    if (valid) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('downloadLink').style.display = 'block';
    } else {
        alert('Please fill all fields correctly.');
    }
});
