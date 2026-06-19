new Chart(document.getElementById("hola"), {
                type: "bar",
                data: {
                    labels: [
                        "2021",
                        "2022",
                        "2023",
                        "2024",
                        "2025"
                    ],

                    datasets: [
                        {
                            label: "Editorial",
                            data: [1, 2, 14, 15, 12],
                            borderWidth: 1,
                            backgroundColor:"#48188C"
                        },
                        {
                            label: "Tipografía",
                            data: [0, 1, 6, 6, 11],
                            borderWidth: 1,
                            backgroundColor:"#C7C6C4"
                        }
                    ],
                },
                options: {
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            beginAtZero: true,
                            stacked: true,
                        },
                    },
                },
            });
			
			new Chart(document.getElementById("hola2"), {
                type: "bar",
                data: {
                    labels: [
                        "4,0–4,5",
                        "4,6–5,0",
                        "5,1–5,5",
                        "5,6–6,0",
						"6,1–6,5",
                        "6,6–7,0"
                    ],

                    datasets: [
                        {
                            label: "Editorial",
                            data: [2, 3, 10, 14, 12, 3],
                            borderWidth: 1,
                            backgroundColor:"#48188C"
                        },
                        {
                            label: "Tipografía",
                            data: [1, 1, 5, 6, 5, 6],
                            borderWidth: 1,
                            backgroundColor:"#C7C6C4"
                        }
                    ],
                },
                options: {
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            beginAtZero: true,
                            stacked: true,
                        },
                    },
                },
            });

const t = document.querySelector("#este");
const URL = "https://api.myjson.online/v1/records/f2d16ce4-66e7-45d2-83c8-88a4fed5abfd";
fetch(URL)
    .then((respuesta) => {
        if (!respuesta.ok) {
            throw new Error("Error HTTP: " + respuesta.status);
        }
        return respuesta.json();
    })
    .then((datos) => {
        var trabajo = datos.data;
        console.log(trabajo);
        trabajo.forEach((x) => {
            t.innerHTML += `<tr style="${x.ok == 1 ? "background-color: var(--color-iluminadisimo); color: var(--color-oscurisimo)" : ""}">
                <td>${x["name"]}</td>
                <td>${x["title"]}</td>
                <td>${x["Formato Específico"]}</td>
                <td>${x["semester"]}</td>
                <td>${x["grade"]}</td>
            </tr>`;
        });
    })
    .catch((error) => {
        console.error("Algo salió mal:", error);
    });

function sinAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Filtro de búsqueda
document.getElementById("elInput").addEventListener("keyup", function () {
    const valor = sinAcentos(this.value.toLowerCase());
    document.querySelectorAll("#este tr").forEach(function (fila) {
        // Se busca si el texto de la fila incluye el valor introducido
        fila.style.display = sinAcentos(fila.textContent.toLowerCase()).includes(valor) ? "" : "none";
    });
});
