import ConstructorPizza from "./ConstructorPizza";

class ConstructorPizzaHawaiana extends ConstructorPizza {
  construirTipo() {
    this.pizza.setTipo("Hawaiana");
  }

  construirTamaño() {
    this.pizza.setTamaño("Grande");
  }

  construirIngredientes() {
    this.pizza.setIngredientes(["Jamón", "Piña", "Queso mozzarella"]);
  }
}

export default ConstructorPizzaHawaiana;
