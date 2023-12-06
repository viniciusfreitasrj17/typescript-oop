export default class Personage {
  constructor(
    private _name: string,
    private _energy: number,
    private _health: number,
    private _attack: number,
    private _defense: number,
    private _xp: number = 0,
  ) {}
  // or
  // constructor(name: string) { this.name = name }

  // Getters
  public get name() : string {
    return this._name;
  }

  private get energy() : number {
    return this._energy;
  }
  
  private get health() : number {
    return this._health;
  }

  private get attack() : number {
    return this._attack;
  }

  private get defense() : number {
    return this._defense;
  }

  private get xp() : number {
    return this._xp;
  }
  
  // Setters
  private set name(v : string) {
    this._name = v;
  }
  
  private set energy(v : number) {
    this._energy = v;
  }

  private set health(v : number) {
    this._health = v;
  }
  
  private set attack(v : number) {
    this._attack = v;
  }
  
  private set defense(v : number) {
    this._defense = v;
  }
  
  private set xp(v : number) {
    this._xp = v;
  }
  
  // Core
  public status(): string {
    return `
    Personage: 
    Nome: ${this.name}
    Ataque: ${this.attack}
    Defesa: ${this.defense}
    Energia: ${this.energy}
    Vida: ${this.health}
    XP: ${this.xp}\n`
  }

  public trainningAttack(): void {
    this.attack += this.random(7);
    this.energy -= this.random(10);
    if (this.attack > 100) {
        this.attack = 100
    }
  }

  public trainningDefense(): void {
    this.defense += this.random(5);
    this.energy -= this.random(10);
    if (this.defense > 100) {
        this.defense = 100
    }
  }

  public toSleep(hours: number): void {
    this.energy += hours * this.random(10);
    if (this.energy > 100) {
      this.energy = 100
    }
  }

  public toFight(): void {
    this.health -= this.random(100);
    this.energy -= this.random(10);
    this.upXP()
  }

  public isDead(): boolean {
    return this.health <= 0 || this.energy <= 0
  }
  
  public upXP(): void {
    this.xp += this.random(10);
  };

  private random(factor: number): number {
    return Math.random() * factor;
  }
}

