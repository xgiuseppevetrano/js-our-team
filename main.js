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

// 2. Prendo dall'HTML il container in cui inserirò le card
const teamCardsContainer = document.querySelector(".team-container");

// 3. Creo un ciclo per scorrere l'array di oggetti
for (let i = 0; i < teamMembers.length; i++) {
    // 3a. Stampo nell'HTML le card dei membri del team
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
    teamCardsContainer.innerHTML += card;
}

// BONUS
// 1. Prendo le variabili che mi serveno
const newFullName = document.getElementById("name");
const newImage = document.getElementById("image");
const newJobPosition = document.getElementById("role");
const addBtn = document.getElementById("addMemberButton");

// 2. Creo un nuovo oggetto con all'interno i valori presi dal form
const newTeamMember = {
    fullName: newFullName.value,
    image: newImage.value,
    jobPosition: newJobPosition.value,
}

// 3. Genero l'evento al click del pulsante "Add"
addBtn.addEventListener("click", 
    function(){
        // 4. Pusho dentro l'array di oggetti (teamMembers) il nuovo oggetto (newTeamMember)
        teamMembers.push(newTeamMember);
    }
);