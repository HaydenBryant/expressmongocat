function handleClick() {

    console.log('this button is clicked');

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/api?name=' + name + '&email=' + email)

        .then(response => {
            return response.text();
        })

        .then(response => {
            console.log(response)
            document.getElementById('results').innerHTML = response;
        })
}
