var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message),
      passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}

test("start with empty list", function() {
  return todoList.getCopyOfList().length === 6;
});

test("add 'Walk Dog' to list", function() {
  todoList.add('Walk Dog', '1', '2019', 'So dog is healthy');
  return todoList.getCopyOfList()[todoList.getCopyOfList().length - 1].title === 'Walk Dog';
});

// _.first
test("delete 'Walk Dog' from list", function() {
  todoList.add('Walk Dog')
  todoList.delete('Walk Dog');
  return todoList.getCopyOfList().length === 6;
});


test("initialize collection with 4 items", function() {

  var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
  };

  var todoData2 = {
    title: 'Buy Apples',
    month: '',
    year: '2017',
    description: 'An apple a day keeps the doctor away',
  };

  var todoData3 = {
    title: 'Buy chocolate',
    month: '1',
    year: '',
    description: 'For the cheat day',
  };

  var todoData4 = {
   title: 'Buy Veggies',
    month: '',
    year: '',
    description: 'For the daily fiber needs',
  };

  var todoSet = [todoData1, todoData2, todoData3, todoData4];

  todoList.initialize(todoSet);

  return todoList.getCopyOfList().length === 10;

  });


test("update property", function() {
todoList.update('Buy chocolate', 'description', 'One a day keeps the Dr away')
var index;
  for (var i = 0; i < todoList.getCopyOfList().length; i++) {
    if (todoList.getCopyOfList()[i].title === 'Buy chocolate') {
      index = i;
    }
  }
  return todoList.getCopyOfList()[index].description === "One a day keeps the Dr away";
});

test("get item returns item with appropriate id", function() {
  var item = todoList.getItem(1)
  return item.title === 'Buy Apples';
});

test("lists tasks within same month and year", function() {
  todoList.add('Eat lunch', '3', '2019', 'To stay healthy');
  todoList.add('Make dinner', '3', '2019', 'So don\'t go hungry');
  return todoManager.todosWithMonthYear('3', '2019').length === 2;
});

test("list returns a list of all items", function() {
  return todoManager.list().length === 12;
});

// _.without
test("completed returns completed items", function() {
  todoList.update('Buy Apples', 'completed', true)
  return todoManager.completed()[0].title === 'Buy Apples';
});

test("all items are returned", function() {
  return todoManager.list !== [];
});

test("all items with a month of 3 and year of 2021 are returned", function() {
  todoList.add('Feed Cat', '3', '2021', 'So cat doesn\'t starve');
  todoList.add('Walk Bird', '3', '2021', 'So dog doesn\'t get fat');
  return todoManager.todosWithMonthYear('3', '2021').length === 2;
});

test("all completed items with a month of 2 and year of 2020 are returned", function() {
  todoList.update('Walk Turtle', 'completed', true);
  return todoManager.completedInRange('2', '2020').length === 1;
});

