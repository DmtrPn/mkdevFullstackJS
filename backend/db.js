let perfomances = [
    {
        id: 101,
        title: "Hamlet",
        description: "Good story",
        actorsCount: 15,
        premiereDate: new Date(2001, 08, 07),
        closingDate: null,
        visitors: 98,
        rating: 5,
        commentCount: 3
    }]

let users = [
    {
        id: 103,
        role: 'admin',
        userName: 'David',
        inclusionDate: new Date(2001, 07, 01),
        exclusionDate: null,
        countOfPerfomance: 0
    }]

let perfomanceComments = [
    {
        id: 107,
        perfomanceId: 101,
        fromUserId: 103,
        toUserId: 0,
        text: 'some text',
        createdIn: new Date(),
        editedOn: 0
    }
]

perfomances.update = (params, data) => {

    let index = perfomances.findIndex(function(perfomance){
        if(perfomance.id == params.id){
            return true;
        }
    })

    if (index != -1) {
        perfomances[index] = data
        return index
    } else {
        return false
    }
}

users.update = (params, data) => {

    let index = users.findIndex(function(user){
        if(user.id == params.id){
            return true;
        }
    })

    if (index != -1) {
        user[index] = data
        return index
    } else {
        return false
    }
}

perfomanceComments.update = (params, data) => {

    let index = perfomanceComment.findIndex(function(user){
        if(perfomanceComments.id == params.id){
            return true;
        }
    })

    if (index != -1) {
        perfomanceComments[index] = data
        return index
    } else {
        return false
    }
}

module.exports = {perfomances, users, perfomanceComments}