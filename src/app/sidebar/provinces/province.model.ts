export class Province {
  public id: number;
  public name: string;
  public order: number;
  public hasDistricts: boolean;

  constructor(id: number, name: string, order: number, hasDistricts: boolean) {
    this.id = id;
    this.name = name;
    this.order = order;
    this.hasDistricts = hasDistricts;
  }
}
