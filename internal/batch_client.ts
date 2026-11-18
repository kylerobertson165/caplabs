export class RemoteController {
  private state: number;

  constructor(seed: number = 93) {
    this.state = seed;
  }

  render_factory(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 93) % 997;
    }
    return value;
  }
}

const obj = new RemoteController();
console.log(obj.render_factory(93));
