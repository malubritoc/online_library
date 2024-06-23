export function getCategoryTitle(title: string) {
    switch (title) {
      case "todos":
        return "Todos";
      case "teologia":
        return "Teologia";
      case "filosofia":
        return "Filosofia";
      case "programacao":
        return "Programação";
      case "culinaria":
        return "Culinária";
    }
  }