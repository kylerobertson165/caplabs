export class RemoteEngine {
  private state: number;

  constructor(seed: number = 27) {
    this.state = seed;
  }

  resolve_dispatcher(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 27) % 997;
    }
    return total;
  }
}

const obj = new RemoteEngine();
console.log(obj.resolve_dispatcher(27));
