// ________________VARIABLES HTML _____________
let viePokemon = document.querySelectorAll(".viePkmn");
let fondVie = document.querySelectorAll(".fondVie");
let barreVie = document.querySelectorAll(".barreVie");
console.log(viePokemon, fondVie, barreVie);
// ______________VARIABLES POKEMON HAUT____________
let viePokemonHaut = viePokemon[0];
let fondVieHaut = fondVie[0];
let barreVieHaut = barreVie[0];
// ______________VARIABLES POKEMON BAS_____________
let viePokemonBas = viePokemon[1];
let fondVieBas = fondVie[1];
let barreVieBas = barreVie[1];
// ______________VARIABLES POKEBALL(on sait jamais)_________
let pokeball = document.querySelectorAll(".pok6");
//_________DE 0 A 5 = CEUX DU HAUT // 6 A 11 CEUX DU BAS_________

// _____________ CREATION HTML DEBUT COMBAT (SAC,ATTAQUE,FUITE,POKEMON)_________________

let divConteneurDebut = document.createElement("div");
divConteneurDebut.classList.add("divAtk", "d-flex");

let divAtkGauche = document.createElement("div");
divAtkGauche.classList.add("atkGauche");

let paraQdF = document.createElement("p");
paraQdF.innerHTML = "Que souhaitez vous <br><br> faire ?";

let divAtkDroite = document.createElement("div");
divAtkDroite.classList.add("atkDroite");

let atkHautDroit = document.createElement("div");
atkHautDroit.classList.add("atkHautDroit", "d-flex");

let attaqueDiv = document.createElement("div");
attaqueDiv.classList.add("attaque", "padAtk");

let pAttaque = document.createElement("p");
pAttaque.classList.add("margin0", "hoverChoix");
pAttaque.innerText = "ATTAQUE";

let sacDiv = document.createElement("div");
sacDiv.classList.add("sac", "padAtk");

let pSac = document.createElement("p");
pSac.classList.add("margin0", "hoverChoix");
pSac.innerHTML = "SAC";

let atkBasDroite = document.createElement("div");
atkBasDroite.classList.add("atkBasDroite", "d-flex");

let pokemon = document.createElement("div");
pokemon.classList.add("pokemon", "padAtk");

let pPokemon = document.createElement("p");
pPokemon.classList.add("margin0", "hoverChoix");
pPokemon.innerHTML = "PokéMON";

let fuite = document.createElement("div");
fuite.classList.add("fuite", "padAtk");

let pFuite = document.createElement("p");
pFuite.classList.add("hoverChoix", "margin0");
pFuite.innerHTML = "FUITE";

// _______________CONSTRUCTION HTML_____________________

let containerBackground = document.querySelector(".containerBackground");
let containerGame = document.querySelector(".containerGame");
containerGame.appendChild(divConteneurDebut);
divConteneurDebut.appendChild(divAtkGauche);
divAtkGauche.appendChild(paraQdF);
divConteneurDebut.appendChild(divAtkDroite);
divAtkDroite.appendChild(atkHautDroit);
atkHautDroit.appendChild(attaqueDiv);
attaqueDiv.appendChild(pAttaque);
atkHautDroit.appendChild(sacDiv);
sacDiv.appendChild(pSac);
divAtkDroite.appendChild(atkBasDroite);
atkBasDroite.appendChild(pokemon);
pokemon.appendChild(pPokemon);
atkBasDroite.appendChild(fuite);
fuite.appendChild(pFuite);

// ________________VARIABLES COMBAT ____________________
let containerCombat = document.createElement("div");
containerCombat.classList.add("d-flex", "containerCombat");

let gaucheCombat = document.createElement("div");
gaucheCombat.classList.add("gaucheCombat");

let messageCombat = document.createElement("p");
messageCombat.classList.add("msgCombat");
messageCombat.innerHTML = "Que doit faire <br> <br> MEWTWO ?  ";

let buttonContinue = document.createElement("button");
buttonContinue.classList.add("btnContinue");
buttonContinue.innerHTML = "Return";

let droiteCombat = document.createElement("div");
droiteCombat.classList.add("d-flex", "droiteCombat");

let hautDroitCbt = document.createElement("div");
hautDroitCbt.classList.add("hautDroitCbt", "d-flex");

let basDroitCbt = document.createElement("div");
basDroitCbt.classList.add("d-flex", "basDroitCbt");

let atk1 = document.createElement("div");
atk1.classList.add("atk");
atk1.innerText = "Coupe Psycho";

let atk2 = document.createElement("div");
atk2.classList.add("atk");
atk2.innerText = "Choc Mental";

let atk3 = document.createElement("div");
atk3.classList.add("atk");
atk3.innerText = "Tonnerre";

let atk4 = document.createElement("div");
atk4.classList.add("atk");
atk4.innerText = "Psyko";
// ________________CONSTRUCTION HTML COMBAT________________

containerGame.appendChild(containerCombat);
containerCombat.appendChild(gaucheCombat);
gaucheCombat.appendChild(messageCombat);
gaucheCombat.appendChild(buttonContinue);
containerCombat.appendChild(droiteCombat);
droiteCombat.appendChild(hautDroitCbt);
hautDroitCbt.appendChild(atk1);
hautDroitCbt.appendChild(atk2);
droiteCombat.appendChild(basDroitCbt);
basDroitCbt.appendChild(atk3);
basDroitCbt.appendChild(atk4);

// ______________VARIABLES SAC______________________

let sacADos = document.createElement("div");
sacADos.classList.add("sacAdos");

let colGaucheSac = document.createElement("div");
colGaucheSac.classList.add("colGaucheSac");
colGaucheSac.innerHTML = ' <img src="../img/sac-objets-3g-g.png" alt="">';

let hautSac = document.createElement("div");
hautSac.classList.add("hautSac");
hautSac.innerHTML = ' <img src="../img/potion_pkmn.png" alt="">';

let basSac = document.createElement("div");
basSac.classList.add("basSac");
basSac.innerHTML = "  <p>Restaure les PV d'un Pokemon de 20 points</p>";

let colDroiteSac = document.createElement("div");
colDroiteSac.classList.add("colDroiteSac");

let listeSacDiv = document.createElement("div");
listeSacDiv.classList.add("listeSac");

let ulSac = document.createElement("ul");
let li1 = document.createElement("li");
li1.innerHTML = "Potion";
li1.style.cursor = "pointer";
let li2 = document.createElement("li");
li2.innerHTML = "Pokeball";
let li3 = document.createElement("li");
li3.innerHTML = "Rappel";
let li4 = document.createElement("li");
li4.innerHTML = "Superball";
let li5 = document.createElement("li");
li5.innerHTML = "Hyperball";
let li6 = document.createElement("li");
li6.innerHTML = "Huile";
let li7 = document.createElement("li");
li7.innerHTML = "Baie";

let returnBtnSac = document.createElement("button");
returnBtnSac.classList.add("btnSac");
returnBtnSac.innerHTML = "Retour";
// _______________________HTML SAC____________________

containerBackground.appendChild(sacADos);
sacADos.appendChild(colGaucheSac);
colGaucheSac.appendChild(hautSac);
colGaucheSac.appendChild(basSac);
sacADos.appendChild(colDroiteSac);
colDroiteSac.appendChild(listeSacDiv);
listeSacDiv.appendChild(ulSac);
ulSac.appendChild(li1);
ulSac.appendChild(li2);
ulSac.appendChild(li3);
ulSac.appendChild(li4);
ulSac.appendChild(li5);
ulSac.appendChild(li6);
ulSac.appendChild(li7);
listeSacDiv.appendChild(returnBtnSac);
//_______________ CLASS POKEMON_________________

class pokemoN {
  constructor(nom, pv) {
    this.nom = nom;
    this.pv = pv;
  }
}
class Mewtwo extends pokemoN {
  constructor(nom, pv, atk1Mewtwo, atk2Mewtwo, atk3Mewtwo, atk4Mewtwo) {
    super(nom, pv);
    this.CoupePsycho = atk1Mewtwo;
    this.ChocMental = atk2Mewtwo;
    this.Tonerre = atk3Mewtwo;
    this.Psyko = atk4Mewtwo;
    function couleurHp() {
      if (this.pv <= 20) {
        barreVieBas.style.backgroundColor = "red";
      } else if (this.pv <= 65) {
        barreVieBas.style.backgroundColor = "orange";
      }
    }
  }
}
let mewtwo = new Mewtwo("Mewtwo", 100, 15, 10, 20, 8);
class Dracaufeu extends pokemoN {
  constructor(
    nom,
    pv,
    atk1Dracaufeu,
    atk2Dracaufeu,
    atk3Dracaufeu,
    atk4Dracaufeu
  ) {
    super(nom, pv);
    this.Flammèche = atk1Dracaufeu;
    this.CrocsFeu = atk2Dracaufeu;
    this.Tranche = atk3Dracaufeu;
    this.LanceFlammes = atk4Dracaufeu;
  }
}
let dracaufeu = new Dracaufeu("Dracaufeu", 100, 10, 15, 8, 20);
let mewtwolist = Object.keys(mewtwo);

//________________PICK DEBUT COMBAT_______________

let choixDebutCbt = [pokemon, fuite, sacDiv, attaqueDiv];

function dracHasard() {
  let dracaufeuComp = [
    dracaufeu.CrocsFeu,
    dracaufeu.Flammèche,
    dracaufeu.LanceFlammes,
    dracaufeu.Tranche,
  ];
  let a = dracaufeuComp[Math.floor(Math.random() * 4)];
  return a;
}
function nomATkHasard() {
  switch (dracHasard()) {
    case 15:
      messageCombat.innerHTML = `Dracaufeu utilise Crocs-Feu`;
      break;
    case 10:
      messageCombat.innerHTML = `Dracaufeu utilise Flammèche`;
      break;
    case 20:
      messageCombat.innerHTML = `Dracaufeu utilise Lance-flammes`;
      break;
    case 8:
      messageCombat.innerHTML = `Dracaufeu utilise tranche`;
      break;

    default:
      break;
  }
}
let cGauche = document.querySelector(".gauche");
let cDroite = document.querySelector(".droite");
sacDiv.addEventListener("click", function () {
  cGauche.style.display = "none";
  cDroite.style.display = "none";
  sacADos.style.display = "flex";
  divConteneurDebut.style.display = "none";
  li1.addEventListener("click", function () {
    if (mewtwo.pv == 100) {
      mewtwo.pv = 100;
      alert(`Vous etes deja au max de vos hp !
            PV de mewtwo = ${mewtwo.pv}`);
    } else if (mewtwo.pv >= 80) {
      mewtwo.pv = 100;
      alert(`Vous avez utiliser une potion !
            PV de mewtwo = ${mewtwo.pv}`);
    } else {
      alert(`Vous avez utiliser une potion !
            PV de mewtwo = ${mewtwo.pv}`);
      mewtwo.pv += 20;
    }

    barreVieMewtwo = `${mewtwo.pv}%`;
    sacADos.style.display = "none";
    cGauche.style.display = "block";
    cDroite.style.display = "block";
    divConteneurDebut.style.display = "flex";
  });
  returnBtnSac.addEventListener("click", function () {
    sacADos.style.display = "none";
    cGauche.style.display = "block";
    cDroite.style.display = "block";
    divConteneurDebut.style.display = "flex";
  });
});

attaqueDiv.addEventListener("click", function () {
  divConteneurDebut.style.display = "none";
  containerCombat.style.display = "flex";
});

buttonContinue.addEventListener("click", function () {
  containerCombat.style.display = "none";
  divConteneurDebut.style.display = "flex";
});
console.log(barreVieHaut.style.width);
let barreVieMewtwo = barreVieBas.style.width;
barreVieMewtwo = barreVieMewtwo.replace("%", "");
barreVieMewtwo = parseInt(barreVieMewtwo);
console.log(barreVieMewtwo);
let barreVieDracaufeu = barreVieHaut.style.width;
barreVieDracaufeu = barreVieDracaufeu.replace("%", "");
barreVieDracaufeu = parseInt(barreVieDracaufeu);
console.log(barreVieMewtwo);
function finCombat() {
  if (mewtwo.pv <= 0) {
    alert("Tu as perdu");
    document.location.href = "../../index.html";
    return
    
  } else if (dracaufeu.pv <= 0) {
    alert("Tu as gagner");
    document.location.href = "../../index.html";
    return
  }
}
let potion = false;
function condiPotion() {
  if (dracaufeu.pv <= 20) {
    if (!potion && dracaufeu.pv > 0) {
      dracaufeu.pv += 30;
      barreVieDracaufeu = `${dracaufeu.pv}%`;
      alert("Dracaufeu a utilisé une baie et lui redonne 3Opv ");
      barreVieHaut.style.width = barreVieDracaufeu;
      potion = true;
    }
  }
}
// ____________ATK1____________________

atk1.addEventListener("click", function () {
  messageCombat.innerHTML = `Mewtwo utilise ${mewtwolist[3]}`;
  dracaufeu.pv -= mewtwo.CoupePsycho;
  barreVieDracaufeu -= mewtwo.CoupePsycho;
  barreVieDracaufeu = `${dracaufeu.pv}%`;
  barreVieHaut.style.width = barreVieDracaufeu;
  console.log(`dracaufeu : ${barreVieDracaufeu}`);
  messageCombat.style.cursor = "pointer";
  let compteur = 0;
  droiteCombat.style.display = "none";
  buttonContinue.style.display = "none";
  finCombat();
  messageCombat.addEventListener("click", function () {
    finCombat();
    compteur++;
    if (compteur == 1) {
      dracHasard();
      nomATkHasard();
      console.log(dracHasard());
      mewtwo.pv -= dracHasard();
      barreVieMewtwo -= dracHasard();
      barreVieMewtwo = `${mewtwo.pv}%`;
      barreVieBas.style.width = barreVieMewtwo;
      console.log(`mewtwo ${barreVieMewtwo}`);

      condiPotion();
      if (mewtwo.pv <= 0) {
        barreVieBas.style.width = "0%";
        finCombat();
      }
      if (dracaufeu.pv <= 0) {
        barreVieHaut.style.width = "0%";
        finCombat();
      }
    } else if (compteur == 2) {
      containerCombat.style.display = "none";
      divConteneurDebut.style.display = "flex";
      droiteCombat.style.display = "flex";
      buttonContinue.style.display = "flex";
      messageCombat.innerHTML = "Que doit faire <br> <br> MEWTWO ?  ";
    }
  });
});

// ____________________ATK2______________________

atk2.addEventListener("click", function () {
  messageCombat.innerHTML = `Mewtwo utilise ${mewtwolist[3]}`;
  dracaufeu.pv -= mewtwo.ChocMental;
  barreVieDracaufeu -= mewtwo.ChocMental;
  barreVieDracaufeu = `${dracaufeu.pv}%`;
  barreVieHaut.style.width = barreVieDracaufeu;
  console.log(`dracaufeu : ${barreVieDracaufeu}`);
  messageCombat.style.cursor = "pointer";
  let compteur = 0;
  droiteCombat.style.display = "none";
  buttonContinue.style.display = "none";
  messageCombat.addEventListener("click", function () {
    compteur++;
    if (compteur == 1) {
      dracHasard();
      nomATkHasard();
      mewtwo.pv -= dracHasard();
      barreVieMewtwo -= dracHasard();
      barreVieMewtwo = `${mewtwo.pv}%`;
      barreVieBas.style.width = barreVieMewtwo;
      console.log(`mewtwo ${barreVieMewtwo}`);
      condiPotion();
      if (mewtwo.pv <= 0) {
        barreVieBas.style.width = "0%";
      }
      if (dracaufeu.pv <= 0) {
        barreVieHaut.style.width = "0%";
      }
    } else if (compteur == 2) {
      containerCombat.style.display = "none";
      divConteneurDebut.style.display = "flex";
      droiteCombat.style.display = "flex";
      buttonContinue.style.display = "flex";
      messageCombat.innerHTML = "Que doit faire <br> <br> MEWTWO ?  ";
    }
  });
});

// ______________________ATK3________________________

atk3.addEventListener("click", function () {
  messageCombat.innerHTML = `Mewtwo utilise ${mewtwolist[4]}`;
  dracaufeu.pv -= mewtwo.Tonerre;
  barreVieDracaufeu -= mewtwo.Tonerre;
  barreVieDracaufeu = `${dracaufeu.pv}%`;
  barreVieHaut.style.width = barreVieDracaufeu;
  console.log(`dracaufeu : ${barreVieDracaufeu}`);
  messageCombat.style.cursor = "pointer";
  let compteur = 0;
  droiteCombat.style.display = "none";
  buttonContinue.style.display = "none";
  messageCombat.addEventListener("click", function () {
    compteur++;
    if (compteur == 1) {
      dracHasard();
      nomATkHasard();
      mewtwo.pv -= dracHasard();
      barreVieMewtwo -= dracHasard();
      barreVieMewtwo = `${mewtwo.pv}%`;
      barreVieBas.style.width = barreVieMewtwo;
      console.log(`mewtwo ${barreVieMewtwo}`);
      condiPotion();
      if (mewtwo.pv <= 0) {
        barreVieBas.style.width = "0%";
        finCombat();
      }
      if (dracaufeu.pv <= 0) {
        barreVieHaut.style.width = "0%";
        finCombat();
      }
    } else if (compteur == 2) {
      containerCombat.style.display = "none";
      divConteneurDebut.style.display = "flex";
      droiteCombat.style.display = "flex";
      buttonContinue.style.display = "flex";
      messageCombat.innerHTML = "Que doit faire <br> <br> MEWTWO ?  ";
    }
  });
});
// ___________________________ATK4________________________________________

atk4.addEventListener("click", function () {
  messageCombat.innerHTML = `Mewtwo utilise ${mewtwolist[5]}`;
  dracaufeu.pv -= mewtwo.Psyko;
  barreVieDracaufeu -= mewtwo.Psyko;
  barreVieDracaufeu = `${dracaufeu.pv}%`;
  barreVieHaut.style.width = barreVieDracaufeu;
  console.log(`dracaufeu : ${barreVieDracaufeu}`);
  messageCombat.style.cursor = "pointer";
  let compteur = 0;
  droiteCombat.style.display = "none";
  buttonContinue.style.display = "none";
  messageCombat.addEventListener("click", function () {
    compteur++;
    if (compteur == 1) {
      dracHasard();
      nomATkHasard();
      mewtwo.pv -= dracHasard();
      barreVieMewtwo -= dracHasard();
      barreVieMewtwo = `${mewtwo.pv}%`;
      barreVieBas.style.width = barreVieMewtwo;
      console.log(`mewtwo ${barreVieMewtwo}`);
      condiPotion();
      if (mewtwo.pv <= 0) {
        barreVieBas.style.width = "0%";
        finCombat();
      }
      if (dracaufeu.pv <= 0) {
        barreVieHaut.style.width = "0%";
        finCombat();
      }
    } else if (compteur == 2) {
      containerCombat.style.display = "none";
      divConteneurDebut.style.display = "flex";
      droiteCombat.style.display = "flex";
      buttonContinue.style.display = "flex";
      messageCombat.innerHTML = "Que doit faire <br> <br> MEWTWO ?  ";
    }
  });
});
barreVieMewtwo = `${mewtwo.pv}%`;
barreVieDracaufeu = `${dracaufeu.pv}%`;
