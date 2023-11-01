class Pizza {
    private tipo: string;
    private tamaño: string;
    private ingredientes: string[];
  
    constructor() {
      this.tipo = "";
      this.tamaño = "";
      this.ingredientes = [];
    }
  
    setTipo(tipo: string) {
      this.tipo = tipo;
    }
  
    setTamaño(tamaño: string) {
      this.tamaño = tamaño;
    }
  
    setIngredientes(ingredientes: string[]) {
      this.ingredientes = ingredientes;
    }
  
    getInfo() {
      console.log(`Pizza: tipo=${this.tipo}, tamaño=${this.tamaño}, ingredientes=${this.ingredientes.join(", ")}`);
    }
  }
  
  export default Pizza;
  