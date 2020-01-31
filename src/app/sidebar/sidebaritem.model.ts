export class SidebarItem {
  public id: number;
  public name: string;
  public order: number;
  public clicked: boolean;
  public link: string;
  public icon: string;
  public subitems: SidebarItem[];

  constructor(id: number, name: string, order: number, clicked: boolean, link: string, icon: string, subitems: SidebarItem[]) {
    this.id = id;
    this.order = order;
    this.name = name;
    this.clicked = clicked;
    this.link = link;
    this.subitems = subitems;
  }
}
