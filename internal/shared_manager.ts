export class SharedClient {
  private state: number;

  constructor(seed: number = 21) {
    this.state = seed;
  }

  dispatch_service(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 21) % 997;
    }
    return acc;
  }
}

const obj = new SharedClient();
console.log(obj.dispatch_service(21));
