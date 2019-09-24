function monthYear(month, year) {
 var match = [];
 var currentList = todoList.getCopyOfList();
  for (var i = 0; i < currentList.length; i++) {
    if (currentList[i].month === month && currentList[i].year === year) {
      match.push(currentList[i]);
    }
  }
  return match;
}

var highestID;
function generateID() {
  if (todoList.getCopyOfList().length === 0) {
    highestID = 0;
  } else {
    highestID++;
  }
  return highestID;
}

var todoList = (function() {
  var list = [];
  var sharedMethod = {
    isWithinMonthYear: function(month, year) {
      return monthYear(month, year);
    }
  }

  return {
  getCopyOfList: function() {
    return JSON.parse(JSON.stringify(list));
  },
  add: function(title, month, year, description) {
    var item = {};
    item.id = generateID();
    item.title = title;
    item.month = month;
    item.year = year;
    item.description = description;
    item.completed = false;
    item.isWithinMonthYear = sharedMethod.isWithinMonthYear;
    list.push(item);
  },
  delete: function(itemTitle) {
    var index = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].title === itemTitle) index.push(i);
    }
    for (var j = 0; j < index.length; j++) {
      list.splice(index[j], 1);
    }
  },
  initialize: function(set) {
    for (var i = 0; i < set.length; i++) {
      set[i].id = generateID();
      set[i].completed = false;
      set[i].isWithinMonthYear = sharedMethod.isWithinMonthYear;
      list.push(set[i]);
    }
  },
  update: function(itemTitle, property, info) {
    var index;
    for (var i = 0; i < list.length; i++) {
      if (list[i].title === itemTitle) {
        index = i;
      }
    }
    list[index][property] = info;
  },
  getItem: function(id) {
    var item;
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        item = this.getCopyOfList()[i];
        break;
      }
    }
    return item;
  },
};
 })();

 var todoManager = {
  list: function() {
    return todoList.getCopyOfList();
  },
  completed: function() {
    var completedTasks = [];
    var currentList = todoList.getCopyOfList();
    for (var i = 0; i < currentList.length; i++) {
      if (currentList[i].completed === true) {
        completedTasks.push(currentList[i]);
      }
    }
    return completedTasks;
  },
  todosWithMonthYear: function(month, year) {
    return monthYear(month, year);
  },
  completedInRange: function(month, year) {
    var complete = [];
    var currentList = todoList.getCopyOfList();
    for (var i = 0; i < currentList.length; i++) {
      if (currentList[i].month === month && currentList[i].year === year && currentList[i].completed === true) {
        complete.push(currentList[i]);
      }
    }
    return complete;
  }
 }


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

var todoData5 = {
  title: 'Walk Dog',
  month: '2',
  year: '2020',
  description: 'So dog doesn\'t get fat',
};

var todoData6 = {
  title: 'Walk Turtle',
  month: '2',
  year: '2020',
  description: 'So cat doesn\'t go hungry',
};

var todoSet = [todoData1, todoData2, todoData3, todoData4, todoData5, todoData6];

todoList.initialize(todoSet);