const absences = [
    {
        id: 1,
        applicant: 'Leanne Graham',
        team: 'DSI',
        manager: {
            fullname: 'Chelsey Dietrich',
            job: 'Directeur du SI',
            pic: '/media/users/300_19.jpg',
            email: 'shanna@melissa.tv'
        },
        startDate: '24/11/2021, 10:41:05',
        endDate: '25/11/2021, 10:41:05',
        daysNumber: '2',
        reason: 'some lorem ipsum',
        requestType: 'RTT',
        decision: {
            requestStatus: 0,
            manager: [
                { id: '3', fullname: 'Chelsey Dietrich' },
                { id: '2', fullname: 'John Doe' }
            ],
            validator: 'Chelsey Dietrich',
            decisionDate: '22/08/2021, 14:21:02'
        },
        createdAt: '18/08/2021, 10:41:05',
        updatedAt: '22/08/2021, 14:21:02'
    },
    {
        id: 2,
        applicant: 'Ervin Howell',
        team: 'Marketing',
        manager: {
            fullname: 'Chelsey Dietrich',
            job: 'Directeur du SI',
            pic: '/media/users/300_19.jpg',
            email: 'shanna@melissa.tv'
        },
        startDate: '24/11/2021, 10:41:05',
        endDate: '25/11/2021, 10:41:05',
        daysNumber: '2',
        reason: 'some lorem ipsum',
        requestType: 'congé payé',
        decision: {
            requestStatus: 0,
            manager: [
                { id: '3', fullname: 'Chelsey Dietrich' },
                { id: '2', fullname: 'John Doe' }
            ],
            validator: 'Chelsey Dietrich',
            decisionDate: '22/08/2021, 14:21:02'
        },
        createdAt: '18/08/2021, 10:41:05',
        updatedAt: '22/08/2021, 14:21:02'
    }
];

module.exports = absences;
