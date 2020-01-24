export class District {
  public id: number;
  public name: string;
  public order: number;
  public provinceId: number;

  constructor(id: number, name: string, order: number, provinceId: number) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.provinceId = provinceId;
  }
}
