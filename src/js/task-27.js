// Реализовать методы для работы с задачей:

// toString - печать на экран. Адаптировать код функции печати
// toggle - переключает статус задачи (свойство done) на обратный
// isOverdue - возвращает true если задача просрочена. Иначе false.
// postpone(timeSpan) - откладывает срок выполнения задачи на указное время (в часах или днях)
// let task = new Task({id: 1, title: 'Some task'});
// console.log('' + task);
// 1. [ ] Some task
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
class Task {
    constructor(param) {
        if(param) {
            this.id = param.id;
            this.title = param.title;
            this.desc = param.desc;
            this.done = param.done;   
            this.dueDate = param.dueDate;
        } else {

        }
    }
  
  
  
  toString() {
    let completedTask
    if (this.done === false || this.done === undefined) {
      completedTask = '[ ]'
    }
    else {
      completedTask = '[x]'
    }
    let number
    if (this.dueDate === undefined) {
      number = ''
    }
    else {
      let month = this.dueDate.toLocaleString('en-US', { month: 'short' })
      let day = this.dueDate.getDate()
      number = `(${month} ${day})`
    }

 
  
    if (this.desc === undefined) {
      return `${this.id + '.'} ${completedTask} ${this.title} ${number} `
    }
    else {
      return `${this.id + '.'} ${completedTask} ${this.title} \n ${' '} ${this.desc} ${number} `
    }
    
  }
  toggle() {
    return this.done = this.done === true ? false : true;
  }
  isOverdue() {
    let currentDate = new Date();
    if (currentDate - this.dueDate  < 0) {
      return false
    } else {
      return false
    }
  }

   
  postpone(timeSpan) {
    let due = this.dueDate;
    let data = {
      days: timeSpan.days !== undefined ? timeSpan.days : 0,
      months: timeSpan.months !== undefined ? timeSpan.months : 0,
      years: timeSpan.years !== undefined ? timeSpan.years : 0,
      hours: timeSpan.hours !== undefined ? timeSpan.hours : 0,
      minutes: timeSpan.minutes !== undefined ? timeSpan.minutes : 0
    }
    if (due !== undefined) {
      due.setDate(due.getDate() + data.days);
      due.setMonth(due.getMonth() + data.months);
      due.setYear(due.getFullYear() + data.years);
      due.setHours(due.getHours() + data.hours);
      due.setMinutes(due.getMinutes() + data.minutes);
    }
    return due;

  }

setDescription(text) {
        this.desc = text;
        return this.desc;
    }
}






// let task = new Task({id: 1, title: 'Some task'});
// console.log('' + task);





// let task = new Task();
// task.toggle();
// console.log(task.done);
// task.toggle();
// console.log(task.done);






// let now = new Date();
// let yesterday = new Date();
// yesterday.setDate(now.getDate() - 1);

// let task = new Task({dueDate: yesterday});
//  console.log(task.isOverdue());
// let task = new Task();
// console.log(task.isOverdue());
// let now = new Date();
// let yesterday = new Date();
// yesterday.setDate(now.getDate() - 1);

// let task = new Task({dueDate: yesterday});
// console.log(task.isOverdue());
let now = new Date();
let tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1);

let task = new Task({dueDate: tomorrow});
console.log(task.isOverdue());




// let task = new Task();
// console.log(task.isOverdue());





// let now = new Date();
// let tomorrow = new Date();
// tomorrow.setDate(now.getDate() + 1);

// let task = new Task({dueDate: tomorrow});
// console.log(task.isOverdue());






// let start = new Date('2022-01-17');
// let task = new Task({dueDate: start});
// task.postpone({days: 2})
// console.log(task.dueDate.toDateString());

     


