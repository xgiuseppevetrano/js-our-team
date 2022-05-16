/*---------------
    FUNCTIONS
---------------*/
function printCard(container, object) {
    const card = `
    <div class="team-card">
        <div class="card-image">
            <img src="${object.image}" alt="${object.fullName}">
        </div>
        <div class="card-text">
            <h3>${object.fullName}</h3>
            <p>${object.jobPosition}</p>
        </div>
    </div>
    `;

    container.innerHTML += card;
}

/*------------
    MAIN
------------*/
// 1. Creo un array di oggetti
const teamMembers = [
    {
        fullName: "Wayne Barnett",
        image: "img/wayne-barnett-founder-ceo.jpg",
        jobPosition: "Founder & CEO",
    },
    {
        fullName: "Angela Caroll",
        image: "img/angela-caroll-chief-editor.jpg",
        jobPosition: "Chief Editor",
    },
    {
        fullName: "Walter Gordon",
        image: "img/walter-gordon-office-manager.jpg",
        jobPosition: "Office Manager",
    },
    {
        fullName: "Angela Lopez",
        image: "img/angela-lopez-social-media-manager.jpg",
        jobPosition: "Social Media Manager",
    },
    {
        fullName: "Scott Estrada",
        image: "img/scott-estrada-developer.jpg",
        jobPosition: "Developer",
    },
    {
        fullName: "Barbara Ramos",
        image: "img/barbara-ramos-graphic-designer.jpg",
        jobPosition: "Graphic Designer",
    },
];

// 2. Prendo dall'HTML gli elementi che mi serveno
const teamCardsContainer = document.querySelector(".team-container");
const newFullName = document.getElementById("name");
const newImage = document.getElementById("image");
const newJobPosition = document.getElementById("role");
const addBtn = document.getElementById("addMemberButton");

// 3. Creo un ciclo per creare le card
for (let i = 0; i < teamMembers.length; i++) {
    printCard(teamCardsContainer, teamMembers[i]);
}

// 4. Genero l'evento al click del pulsante "Add"
addBtn.addEventListener("click", 
    function(){
        // 4a. Controllo se ho le giuste informazioni all'interno dei campi input
        if (newFullName.value === "" || newJobPosition.value === "") {
            alert ("Name and role are required information");
            return;
        }
        
        if (newImage.value === "") {
            newImage.value = "https://via.placeholder.com/400x429";
        }
        
        // 4b. Creo un oggetto
        const newTeamMember = {
            fullName: newFullName.value,
            image: newImage.value,
            jobPosition: newJobPosition.value,
        }
        
        // 4c. Pusho l'oggetto nell'array di oggetti (teamMembers)
        teamMembers.push(newTeamMember);

        // 4d. Creo una nuova card
        printCard(teamCardsContainer, newTeamMember);

        // 4e. Pulisco i campi input
        newFullName.value = "";
        newImage.value = "";
        newJobPosition.value = "";
    }
);