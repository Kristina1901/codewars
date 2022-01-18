// Реализуйте функцию для печати в консоль объекта типа Task в следующем виде:

// 1. [x] Implement task output (Aug 25)
//    Use fields: title, desc, done, dueDate
// 1. - идентификатор задачи
// [x] - задача выполнена. [ ] - задача открыта
// Implement task output - название задачи
// (Aug 25) - вывод даты завершения, если задана
// Use fields: title, desc, done, dueDate - вывод описания задачи, если задано.
// Обратите внимание на отступы и форматирование. Они должны соответствовать примеру.

// В выполнении задания вам пригодится техника интерполяции строк для формирования вывода и тип Date для описание срока выполнения задач
function printTask(index, { title, done, desc, dueDate }) {
  let completedTask
  if (done === false) {
   completedTask = '[ ]'
  }
  else {
    completedTask = '[x]'
  }
 let number 
  if (dueDate === undefined) {
   number = ''
  }
   else {
    let month = dueDate.toLocaleString('en-US', { month: 'short' })
    let day = dueDate.getDate()
    number = `(${month} ${day})`
  }

 
  
    if (desc === undefined) {
     console.log(`${index + '.'} ${completedTask} ${title} ${number} `) 
    }
    else {
       console.log(`${index + '.'} ${completedTask} ${title} \n ${' '} ${desc} ${number} `)
    }
    



 
    
    
  
}
console.log(printTask(1, { done: false, title: 'Undone task' }))
console.log(printTask(2, { done: true, title: 'Done task' }))
console.log(printTask(3, { done: false, title: 'Objects', desc: 'Learn more about this' }))
console.log(printTask(4, {done: false, title: 'Complete first course task', dueDate: new Date('2022-01-17')}))

// 1.[] Undone task


