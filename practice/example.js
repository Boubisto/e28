function sayHello() {
    // Extracting data from the DOM
    let name = document.getElementById('name').value;

    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hello ' + name;

    // Altering the DOM
    document.body.appendChild(newParagraph);
}

const button = document.querySelector('button');
button.addEventListener('click', sayHello);


var myCuteCat = {
    name: "Angel",
    age: 3,
    isFeisty: true,
    likes: ["rubber bands", "boxes", "4am petting sessions"],
    fur: {colors: ["orange", "white"], pattern: "striped"},
    meow: function() {
      document.write('MEOWWW');
    }
  };

  let x = myCuteCat.likes[1] ;
      console.log(x);