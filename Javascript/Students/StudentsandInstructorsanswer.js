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
    for (var Students in users) {
        console.log(Students)
        for (var i = 0; i < users[Students].length; i++) { //users["students"] -> users.students
            var fullname = users[Students][i].first_name + users[Students].last_name
            console.log(`${i} - ${users[Students][i].first_name} ${users[Students][i].last_name} - ${fullname.length}`)
        }
    }
}
printThings();