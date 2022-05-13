// FUNCTIONS

// ritorna il markup html per aggiungere un nuovo membo alla pagina
function newMember(newMember) {
    return `<div class="team-card">
    <div class="card-image">
      <img
        src="img/${newMember.profilePicture}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${newMember.nome}</h3>
      <p>${newMember.ruolo}</p>
    </div>
  </div>`;

}

//hook  ai tag html necessari 
const teamContainer = document.querySelector('.team-container');
const addMember = document.querySelector('#addMemberButton');
const clear = '';
// Array di oggetti aventi le informazioni sul team originario dell'azienda
let foundingMembers = [
    {
        nome: 'Wayne Barret',
        ruolo: 'Founder',
        profilePicture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Walter Gordon Barret',
        ruolo: 'Office Manager',
        profilePicture: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Scoot Estrada',
        ruolo: 'Developer',
        profilePicture: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        profilePicture: 'barbara-ramos-graphic-designer.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        profilePicture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Angela Carrol',
        ruolo: 'Chief Editor',
        profilePicture: 'angela-caroll-chief-editor.jpg'
    }
];

// ciclo per i fondatori
for (let i = 0; i < foundingMembers.length; i++) {
    teamContainer.innerHTML += newMember(foundingMembers[i])
}

//zona bonus ,aggiunta membri successivi
addMember.addEventListener('click', function () {
    const newPosition = {
        nome: document.querySelector('#name').value,
        ruolo: document.querySelector('#role').value,
        profilePicture: document.querySelector('#image').value
    }
    foundingMembers.push(newPosition);
    teamContainer.innerHTML += newMember(newPosition);
    document.querySelector('#name').value = clear;
    document.querySelector('#role').value = clear;
    document.querySelector('#image').value = clear;
}
);

