const documents = [
    {
        id: 1,
        type: 'Folder',
        label: 'Rocket Engine',
        slug: 'rocket-engine',
        parent: 'root',
        size: '330 Mo',
        extension: '-',
        fileType: 'folder',
        owner: 'Admin',
        restrictions: {
            status: 0, // 0 => public, 1 => Privé, 2 => Restreint
            accessList: [],
            notAccessList: []
        },
        width: '-',
        height: '-',
        url: 'chemin/absolue/fichier.ext',
        account: 'Rocket-engine',
        createdAt: '18/08/2021, 10:41:05',
        updatedAt: '22/08/2021, 14:21:02'
    },
    {
        id: 2,
        type: 'File',
        label: 'Fichier excel 1',
        slug: 'fichier-excel-1',
        parent: 'rocket-engine',
        size: '330 Ko',
        extension: 'xls',
        fileType: 'file/xls',
        owner: 'Admin',
        restrictions: {
            status: 0, // 0 => public, 1 => Privé, 2 => Restreint
            accessList: [],
            notAccessList: []
        },
        width: 1151,
        height: 898,
        url: 'chemin/absolue/fichier.ext',
        account: 'Rocket-engine',
        createdAt: '18/08/2021, 10:41:05',
        updatedAt: '22/08/2021, 14:21:02'
    },
    {
        id: 3,
        type: 'File',
        label: 'First pic',
        slug: 'first-pic',
        parent: 'rocket-engine',
        size: '530 Ko',
        extension: 'png',
        fileType: 'image/png',
        owner: 'Admin',
        restrictions: {
            status: 0, // 0 => public, 1 => Privé, 2 => Restreint
            accessList: [],
            notAccessList: []
        },
        width: 1151,
        height: 898,
        url: 'chemin/absolue/fichier.ext',
        account: 'Rocket-engine',
        createdAt: '18/08/2021, 10:41:05',
        updatedAt: '22/08/2021, 14:21:02'
    }
];

module.exports = documents;
