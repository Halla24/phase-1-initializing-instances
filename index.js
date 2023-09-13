 class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  let breakfast = new Breakfast("Toast", "Coffee");

  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }

  let lunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");

  class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }

  let dinner = new Dinner("Green Salad", "Minestrone Soup", "Steak", "Chocolate Cake");