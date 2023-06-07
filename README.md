# Todo-List
# Here Is My Second Project In Github i Create a Simple Todo-List with Local storage 

```
Welcome to My Github Profile.
as I create a simple Todo-List from scratch using HTML, CSS, and JavaScript.
```
Here Is The Simple Explainations of This Code For New One !

1) The code starts by defining variables for various elements, such as input, addTask button, taskList, and checkbox. It also loads tasks from local storage into an array called tasks.

2) The addTaskItem function is triggered when the user clicks the addTask button. It creates a new list item (li) element with the input value and adds it to the taskList. It also adds the input value to the tasks array and stores it in local storage. Finally, it clears the input value.

3) The clearAllTasks function is responsible for removing all the tasks from the taskList. It does this by setting the innerHTML of the taskList to an empty string and also removes the tasks from local storage.

4) The editTask function is called when the user clicks the editTask button. It iterates over all the checkboxes in the taskList and checks if they are checked. If a checkbox is checked, it replaces the text content of its parent node (li) with an input element, allowing the user to edit the task. The edited task is then saved in the tasks array and local storage.

5) The onBlurInput function is triggered when the user changes the value in the input field within the editTask function. It pushes the changed value to the tasks array and updates the local storage with the new tasks array.

6) The deleteTask function is called when the user clicks the deleteTask button. It iterates over all the checkboxes in the taskList and checks if they are checked. If a checkbox is checked, it removes the parent node (li) from the taskList, updates the tasks array by removing the corresponding task, and saves the updated tasks array to local storage.

7) The loadTasks function is responsible for loading the saved tasks from local storage and displaying them in the taskList when the page is loaded. It iterates over the tasks array, creates a new li element for each task, and adds it to the taskList.

8) The loadTasks function is called to load the saved tasks when the page is loaded.

9) The HTML elements are connected to their respective JavaScript functions using event listeners and inline event handlers.

12) Overall, this code allows the user to add tasks, edit existing tasks, delete tasks, and persist the tasks in local storage. It provides functionality for managing a todo-list application.


![image](https://github.com/ParagUnhale1998/Todo-List/blob/main/preview.png)
