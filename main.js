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
    const card = `
    <div class="team-card">
        <div class="card-image">
            <img src="${teamMembers[i].image}" alt="${teamMembers[i].fullName}">
        </div>
        <div class="card-text">
            <h3>${teamMembers[i].fullName}</h3>
            <p>${teamMembers[i].jobPosition}</p>
        </div>
    </div>
    `;
    
    // 3a. Stampo in HTML le card create
    teamCardsContainer.innerHTML += card;
}

// 4. Genero l'evento al click del pulsante "Add"
addBtn.addEventListener("click", 
    function(){
        // 4a. Creo un oggetto
        const newTeamMember = {
            fullName: newFullName.value,
            image: newImage.value,
            jobPosition: newJobPosition.value,
        }

        // 4b. Creo una nuova card
        const newCard = `
        <div class="team-card">
            <div class="card-image">
                <img src="${newTeamMember.image}" alt="${newTeamMember.fullName}">
            </div>
            <div class="card-text">
                <h3>${newTeamMember.fullName}</h3>
                <p>${newTeamMember.jobPosition}</p>
            </div>
        </div>
        `;

        // 4c. Stampo in HTML la nuova card e la pusho nell'array di oggetti (teamMembers)
        teamCardsContainer.innerHTML += newCard;
        teamMembers.push(newTeamMember);
    }
);