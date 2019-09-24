- todo list objects: The primary todo list objects are supplied through the tests on todoTests.js

- monthYear(month, year) function: A function used in both the todoList and todoManager objects to
identify tasks sharing the same month and year. Returns an array. This function is moved to the
top of the document as an independent function to be reused throughout different parts of the code
to reduce redundancy.

- delete method: stores the location(s) (i.e., index numbers) of the task to be deleted into an array.
Identifies the task to be deleted by the title. Iterates through that array of index numbers and splices
the todo list on one stored index number at a time.

- update: identifies items to be updated by item title. Accepts item property and the change to be made 
as arguments.

- completedInRange: method is similar to the monthYear function, but functions differently because
the extra conditional, i.e., whether or not the task has been completed, is taken into consideration.
The 'completed' condition precludes use of the monthYear function in this method.

- generateId: To generate an ID, the list length must be taken into consideration so that the program 
knows when to begin the count (i.e., initialize at 0 or increment the previous number).