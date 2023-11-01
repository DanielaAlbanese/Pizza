import Pizza from "./Pizza";

abstract class ConstructorPizza {
  protected pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  getPizza(): Pizza {
    return this.pizza;
  }

  abstract construirTipo(): void;
  abstract construirTamaño(): void;
  abstract construirIngredientes(): void;
}

export default ConstructorPizza;
