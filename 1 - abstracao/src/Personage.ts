export default class Personage {
  constructor(
    public name: string,
    public energy: number,
    public health: number,
    public attack: number,
    public defense: number,
    private xp: number = 0,
  ) {}
  // or
  // constructor(name: string) { this.name = name }

  status(): string {
    return `
Personage: 
Nome: ${this.name}
Ataque: ${this.attack}
Defesa: ${this.defense}
Energia: ${this.energy}
Vida: ${this.health}
XP: ${this.xp}\n`
  }

  trainningAttack(): void {
    this.attack += Math.random() * 7;
    this.energy -= Math.random() * 10;
    if (this.attack > 100) {
        this.attack = 100
    }
  }

  trainningDefense(): void {
    this.defense += Math.random() * 5;
    this.energy -= Math.random() * 10;
    if (this.defense > 100) {
        this.defense = 100
    }
  }

  toSleep(hours: number): void {
    this.energy += hours * (Math.random() * 10);
    if (this.energy > 100) {
      this.energy = 100
    }
  }


  toFight(): void {
    this.health -= Math.random() * 100;
    this.energy -= Math.random() * 10;
    this.upXP()
  }

  isDead(): boolean {
    return this.health <= 0 || this.energy <= 0
  }
  
  upXP(): void {
    this.xp += Math.random() * 10;
  };
}

