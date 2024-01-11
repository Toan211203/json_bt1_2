fetch('data.json')
.then (response => response.json())
.then(data =>{
    const getInfo = document.getElementById("info");
    data.sinh_vien.forEach(sv =>{
        const svDiv = document.createElement('div');
        svDiv.classList.add('sinh-vien');
        svDiv.innerHTML = `<p>Id: ${sv.id}</p>
        <p>Fullname: ${sv.fullname}</p>
        <p>Age: ${sv.age}</p>
        <p>Address: ${sv.address}</p>
        <br>
        `;
        getInfo.appendChild(svDiv);
    });
})
.catch(error=>{
    console.error("Error: ", error);
})
