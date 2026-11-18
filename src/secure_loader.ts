export class HybridEngine {
  private state: number;

  constructor(seed: number = 53) {
    this.state = seed;
  }

  dispatch_factory(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 53) % 997;
    }
    return result;
  }
}

const obj = new HybridEngine();
console.log(obj.dispatch_factory(53));
