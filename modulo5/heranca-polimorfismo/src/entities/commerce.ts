import { Client } from "./client";
import { Place } from "./place";

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
}

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super (floorsQuantity, cep)
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53
  }

  public getCnpj(): string {
    return this.cnpj
  }
}