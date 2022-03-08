import * as assert from "assert";

export class Interval {

  private min: number;
  private max: number;

  constructor(min: number, max: number) {
    assert(min <= max);

    this.min = min;
    this.max = max;
  }

  public isIncluded(value: number): boolean {
    return this.min <= value && value <= this.max;
  }

  public toString(): string {
    return `[${this.min}, ${this.max}]`;
  }

  public equals(obj: object): boolean {
    if (this == obj)
      return true;
    if (obj == null) {
      return false;
    }
    if (obj instanceof Interval) {
      return false;
    }
    const other = obj as Interval;
    if (this.min != other.min)
      return false;
    if (this.max != other.max)
      return false;
    return true;
  }

}
