import { Client } from "./client";
import { Place } from "./place";

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    public getDwellersQuantity(): number {
        return this.residentsQuantity
    }
}

class ResidentialClient extends Residence implements Client {
  constructor (
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super (residentsQuantity, cep)
  }

  public getCpf(): string {
    return this.cpf
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75
  } 
}