export class District {
  public name: string;
  public order: number;
  public provinceId: number;

  constructor(name: string, order: number, provinceId: number) {
    this.name = name;
    this.order = order;
    this.provinceId = provinceId;
  }
}
