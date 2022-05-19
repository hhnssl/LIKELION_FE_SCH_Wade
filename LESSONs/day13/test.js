    //모듈 패턴이라고 함
    //모듈패턴: 중요한 정보는 일부러 보호하기 위해 클로저 공간으로 만들고 그것을 모듈 패턴이라 한다.
    function Person() {
      let age = 15; //폐쇄된 공간

      return {
        getAge: function () { return age },
        setAge: function (data) { age = data }
      }
    }

    const person = Person();
    console.log(person.getAge()); //15
    console.log(person.age); //undefined 접근불가

    person.setAge(40);
    console.log(person.getAge()); //40