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
        id: 13,
        role: 'admin',
        userName: 'David',
        inclusionDate: new Date(2001, 07, 01),
        exclusionDate: null,
        countOfPerfomance: 0
    }]

module.exports = {perfomances, users}