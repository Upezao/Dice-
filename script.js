const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
let msg = document.querySelector('h1');

const randomDice = () => {
    const random = Math.floor(Math.random()*10);

    if (random >=1 && random <=6) {
        rollDice(random);
    }

    else {
        randomDice();
    }
}

const rollDice = random => {
    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                msg.textContent = 'Dano Fraco';
                msg.style.color = 'blue';  
                document.body.appendChild(h1);
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                msg.textContent = 'Dano Critico';
                msg.style.color = 'red'; 
                document.body.appendChild(h1);
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                msg.textContent = 'Dano Fraco';
                msg.style.color = 'blue';  
                document.body.appendChild(h1);
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                msg.textContent = 'Dano Forte';
                msg.style.color = 'orange'; 
                document.body.appendChild(h1);
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                msg.textContent = 'Dano Moderado';
                msg.style.color = 'green';
                document.body.appendChild(h1);
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                msg.textContent = 'Dano Moderado';
                msg.style.color = 'green'; 
                document.body.appendChild(h1);
                break;    
            default:
                break;
        }

        dice.style.animation = 'none';

    }, 4050);
}

rollBtn.addEventListener('click',randomDice);