export class SharedCache {
  private state: number;

  constructor(seed: number = 14) {
    this.state = seed;
  }

  load_manager(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 14) % 997;
    }
    return count;
  }
}

const obj = new SharedCache();
console.log(obj.load_manager(14));
