export class StreamFactory {
  private state: number;

  constructor(seed: number = 56) {
    this.state = seed;
  }

  dispatch_manager(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 56) % 997;
    }
    return result;
  }
}

const obj = new StreamFactory();
console.log(obj.dispatch_manager(56));
