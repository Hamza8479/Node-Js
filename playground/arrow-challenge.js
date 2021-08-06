const eventt = {
  name: "birthday party",
  guestList: ["hamza", "sherry", "adeel"],
  printGuestList() {
    const that = this;
    console.log(this.name);

    this.guestList.forEach((curr) => {
      console.log(`${curr} is up for ${that.name}`);
    });
  },
};

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((val) => !val.completed);
  },
};

console.log(tasks.getTasksToDo());

// eventt.printGuestList();
