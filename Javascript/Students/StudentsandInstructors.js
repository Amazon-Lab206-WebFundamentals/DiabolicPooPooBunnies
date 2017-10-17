object students = {
    { first_name: 'Michael', last_name: 'Jordan' },
{ first_name: 'John', last_name: 'Rosales' },
{ first_name: 'Mark', last_name: 'Guillen' },
{ first_name: 'KB', last_name: 'Tonel' }
}
console.log{students.first_name, last_name };

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}
function printThings() {
    for (var group in users) {
        console.log(group)
        for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
            var fullname = users[group][i].first_name + users[group].last_name
            console.log(`${i} - ${users[group][i].first_name} ${users[group][i].last_name} - ${fullname.length}`)
        }
    }
}
printThings();