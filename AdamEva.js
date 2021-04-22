class Apple {
    constructor(weigth) {
        this.weight = weigth;
    }

    decrease() {
        this.weight--;
    }

    isEmpty() {
        if (this.weight > 0) {
            return true;
        }else {
            return false;
        }
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender;
    }

    setGender(gender){
        this.gender = gender;
    }


    checkApple(Apple){
        return Apple.isEmpty();
    }


    eat(Apple){
        if (this.checkApple(Apple)){
            Apple.decrease();
            this.weight ++;
        }else {
            alert('oh het tao');
        }
    }

    say(str){
        alert(str);
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(weight){
        this.weight = weight;
    }

}