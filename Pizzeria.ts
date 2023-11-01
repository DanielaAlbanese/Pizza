import ConstructorPizza from "./ConstructorPizza";
import Pizza from "./Pizza";

class Pizzeria {
  private constructorPizza: ConstructorPizza;

  constructor(constructorPizza: ConstructorPizza) {
    this.constructorPizza = constructorPizza;
  }

  construirPizza() {
    this.constructorPizza.construirTipo();
    this.constructorPizza.construirTamaño();
    this.constructorPizza.construirIngredientes();
  }

  getPizza(): Pizza {
    return this.constructorPizza.getPizza();
  }
}

export default Pizzeria;
