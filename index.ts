import ConstructorPizzaMargherita from "./ConstructorPizzaMargherita";
import ConstructorPizzaHawaiana from "./ConstructorPizzaHawaiana";
import Pizzeria from "./Pizzeria";

const constructorMargherita = new ConstructorPizzaMargherita();
const pizzeriaMargherita = new Pizzeria(constructorMargherita);

pizzeriaMargherita.construirPizza();
const pizzaMargherita = pizzeriaMargherita.getPizza();
pizzaMargherita.getInfo();

const constructorHawaiana = new ConstructorPizzaHawaiana();
const pizzeriaHawaiana = new Pizzeria(constructorHawaiana);

pizzeriaHawaiana.construirPizza();
const pizzaHawaiana = pizzeriaHawaiana.getPizza();
pizzaHawaiana.getInfo();
