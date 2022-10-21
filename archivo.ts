class Animal { 
    private name: string;
    public constructor(name:string) { 
        this.name = name;
    }
}

class Dog extends Animal { 
    public constructor() { 
        super();
    }

    public makeSound() : void { 
        console.log('wuff wuff');
    }
}

class Cat extends Animal { 
    public constructor() { 
        super();
    }

    public 
}



  
  
     public makeSound(): void {
      console.log('meow meow');
    }
   }
   let minino: Cat = new Cat('Pocky');
   minino.makeSound(); // -> meow meow
   let firulais: Dog = new Dog('Pocky');
   firulais.makeSound(); // -> wuff wuff
   