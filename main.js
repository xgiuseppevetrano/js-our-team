const teamMemberse = [
    {
        fullName: "Wayne Barnett",
        image: "img/wayne-barnett-founder-ceo.jpg",
        job-position: "Founder & CEO",
    },
    {
        fullName: "Angela Caroll",
        image: "img/angela-caroll-chief-editor.jpg",
        job-position: "Chief Editor",
    },
    {
        fullName: "Walter Gordon",
        image: "img/walter-gordon-office-manager.jpg",
        job-position: "Office Manager",
    },
    {
        fullName: "Angela Lopez",
        image: "img/angela-lopez-social-media-manager.jpg",
        job-position: "Social Media Manager",
    },
    {
        fullName: "Scott Estrada",
        image: "img/scott-estrada-developer.jpg",
        job-position: "Developer",
    },
    {
        fullName: "Barbara Ramos",
        image: "img/barbara-ramos-graphic-designer.jpg",
        job-position: "Graphic Designer",
    },
];

const teamCardsContainer = document.querySelector(".team-container");

for (let i = 0; i < teamMembers.length; i++) {
    const card = `
        <div class="team-card">
            <div class="card-image">
                <img src="${teamMembers[i].image}" alt="${teamMembers[i].name}">
            </div>
            <div class="card-text">
                <h3>${teamMembers[i].name}</h3>
                <p>${teamMembers[i].job-position}</p>
            </div>
        </div>
    `;
    teamCardsContainer.innerHTML += card;
}