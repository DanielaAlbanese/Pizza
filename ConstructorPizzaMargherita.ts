import ConstructorPizza from "./ConstructorPizza";

class ConstructorPizzaMargherita extends ConstructorPizza {
  construirTipo() {
    this.pizza.setTipo("Margherita");
  }

  construirTamaño() {
    this.pizza.setTamaño("Mediana");
  }

  construirIngredientes() {
    this.pizza.setIngredientes(["Queso mozzarella", "Tomate", "Albahaca"]);
  }
}

export default ConstructorPizzaMargherita;
