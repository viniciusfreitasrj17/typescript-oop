import prompt, { Prompt } from 'prompt-sync'
import Personage from './Personage'

const person: Personage = new Personage("Vitt Ogre", 100, 40, 20, 20)

const keyboard: Prompt = prompt()
let option: number = 0

while (option != 9) {
  console.log("+========== Personage ==========+");
  console.log("|1. Trainning Attack            |");
  console.log("|2. Trainning Defense           |");
  console.log("|3. Sleep                       |");
  console.log("|4. Fight                       |");
  console.log("|8. Print Atrribuits            |");
  console.log("|9. Quit                        |");
  console.log("+===============================+");

  option = +keyboard("Choice a option: ")

  switch (option) {
    case 1:
        person.trainningAttack()
        console.log(person.status())
        break;
    case 2:
        person.trainningDefense()
        console.log(person.status())
        break;
    case 3:
        const hours: number = +keyboard("Type hours: ")
        person.toSleep(hours)
        console.log(person.status())
        break;
    case 4:
        person.toFight()
        console.log(person.status())
        break;
    case 8:
        console.log(person.status())
        break;
    default:
        break;
  }

  if(person.isDead()) {
    break;
  }
}

console.log("Game Over!")
