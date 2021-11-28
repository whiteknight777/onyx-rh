const teamsFixtures = [
    {
        id: 1,
        name: 'DSI',
        description: 'I distinguish three main text objectives could be merely to inform people.A second could be persuade people. You want people to bay objective.',
        color: '#9c27b0',
        manager: {
            fullname: 'Chelsey Dietrich',
            job: 'Directeur du SI',
            pic: '/media/users/300_19.jpg',
            email: 'shanna@melissa.tv'
        },
        members: [{
            fullname: 'Chelsey Dietrich',
            job: 'Directeur du SI',
            pic: '/media/users/300_19.jpg',
            email: 'shanna@melissa.tv'
        }],
        parentTeam: null,
        childTeams: [
            {
                name: 'Marketing',
                manager: {
                    fullname: 'Ervin Howell',
                    job: 'Chef de projet',
                    pic: '/media/users/300_21.jpg',
                    email: 'shanna@melissa.tv'
                }
            }
        ],
        address: 'San Francisco, California L-12-20 Vertex, Cybersquare 45000',
        createdAt: '19/08/2021, 10:41:05',
        updatedAt: '22/08/2021, 09:21:02'
    },
    {
        id: 2,
        name: 'Marketing',
        description: 'I distinguish three main text objectives could be merely to inform people.A second could be persuade people. You want people to bay objective.',
        color: '#f64e60',
        manager: {
            fullname: 'Ervin Howell',
            job: 'Chef de projet',
            pic: '/media/users/300_21.jpg',
            email: 'shanna@melissa.tv'
        },
        members: [
            {
                fullname: 'Ervin Howell',
                job: 'Chef de projet',
                pic: '/media/users/300_21.jpg',
                email: 'shanna@melissa.tv'
            },
            {
                fullname: 'Leanne Graham',
                job: 'Analyste de données',
                pic: '/media/users/300_20.jpg',
                email: 'shanna@melissa.tv'
            }
        ],
        parentTeam: {
            name: 'DSI',
            manager: {
                fullname: 'Chelsey Dietrich',
                job: 'Directeur du SI',
                pic: '/media/users/300_19.jpg',
                email: 'shanna@melissa.tv'
            }
        },
        childTeams: [
            {
                name: 'Service SEO',
                manager: {
                    fullname: 'Chelsey Dietrich',
                    job: 'Responsable SEO',
                    pic: '/media/users/300_19.jpg',
                    email: 'shanna@melissa.tv'
                }
            }
        ],
        address: 'San Francisco, California L-12-20 Vertex, Cybersquare 45000',
        createdAt: '20/08/2021, 11:11:05',
        updatedAt: '22/08/2021, 16:21:02'
    },
    {
        id: 3,
        name: 'Service SEO',
        description: 'I distinguish three main text objectives could be merely to inform people.A second could be persuade people. You want people to bay objective.',
        color: '#00838f',
        manager: {
            fullname: 'Chelsey Dietrich',
            job: 'Responsable SEO',
            pic: '/media/users/300_19.jpg',
            email: 'shanna@melissa.tv'
        },
        members: [
            {
                fullname: 'Chelsey Dietrich',
                job: 'Responsable SEO',
                pic: '/media/users/300_19.jpg',
                email: 'shanna@melissa.tv'
            },
            {
                fullname: 'collabo 2',
                job: 'Community manager',
                pic: '/media/users/300_20.jpg',
                email: 'shanna@melissa.tv'
            },
            {
                fullname: 'collabo 3',
                job: 'Redacteur contenu web',
                pic: '/media/users/300_20.jpg',
                email: 'shanna@melissa.tv'
            }
        ],
        parentTeam: {
            name: 'Marketing',
            manager: {
                fullname: 'Ervin Howell',
                job: 'Chef de projet',
                pic: '/media/users/300_21.jpg',
                email: 'shanna@melissa.tv'
            }
        },
        childTeams: [],
        address: 'San Francisco, California L-12-20 Vertex, Cybersquare 45000',
        createdAt: '20/08/2021, 13:41:05',
        updatedAt: '22/08/2021, 12:21:02'
    }
];

module.exports = teamsFixtures;
