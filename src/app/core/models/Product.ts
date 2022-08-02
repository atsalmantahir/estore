export class Product
{
  id: string;
  title: string;
  description: string;
  unitPrice: number;

  constructor(id: string, title: string, description: string, unitPrice: number){
    this.id = id;
    this.title = title;
    this.description = description;
    this.unitPrice = unitPrice;
  }
} 