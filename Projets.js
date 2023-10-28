const url = 'http://159.203.24.222:3000/api/questions/topic/11';

fetch(url, {
     method : "GET",
     headers: {
    'Authorization': 'Bearer fe9656f5-7469-4362-bbf2-2fd85397db01'
  }
})
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector("#questionTable tbody");
    tableBody.innerHTML = "";
    data.forEach(question => {
      const row = document.createElement("tr");
       row.innerHTML = `
           <td>${question.text}</td>
           <td>${question.authorAnswer}</td>
           <td>${question.hint}</td>
            <td>${question.typeName}</td>
            `;
            tableBody.appendChild(row);
});
})
.catch(error => console.error(error));