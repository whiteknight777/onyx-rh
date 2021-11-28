import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseTable from '../../../Components/AdvancedTables/BaseTable';
import NameFormated from '../../../Components/NameFormated/NameFormated';
import { API_URL } from '../../../modules/Auth/contexts/authCrud';

function Teams() {
    const [state, setState] = React.useState({
        headRows: [
            {
                id: 'id',
                numeric: false,
                disablePadding: true,
                label: 'Id',
                showColumn: false
            },
            {
                id: 'color',
                numeric: false,
                disablePadding: false,
                label: '#',
                showColumn: true
            },
            {
                id: 'name',
                numeric: false,
                disablePadding: false,
                label: 'Nom',
                showColumn: true
            },
            {
                id: 'manager',
                numeric: false,
                disablePadding: false,
                label: 'Responsable',
                showColumn: true
            },
            {
                id: 'email',
                numeric: false,
                disablePadding: false,
                label: 'Email',
                showColumn: true
            },
            {
                id: 'address',
                numeric: false,
                disablePadding: false,
                label: 'Adresse',
                showColumn: false
            },
            {
                id: 'createdAt',
                numeric: false,
                disablePadding: false,
                label: 'Date création',
                showColumn: true
            },
            {
                id: 'updatedAt',
                numeric: false,
                disablePadding: false,
                label: 'Dernière modification',
                showColumn: true
            },
            {
                id: 'actions',
                numeric: false,
                disablePadding: false,
                label: 'Actions',
                showColumn: true
            }
        ],
        data: []
    });
    const history = useHistory();

    const goto = (url) => {
        history.push(url);
    };

    const prepareData = (json) => {
        const result = [];
        json.forEach(el => {
            result.push({
                id: el.id,
                color: <NameFormated name={el.name} color={el.color} />,
                name: el.name,
                manager: el.manager.fullname,
                email: el.manager.email,
                address: el.address,
                createdAt: el.createdAt,
                updatedAt: el.updatedAt,
                actions: [
                    {
                        type: 'show',
                        label: 'Consulter informations',
                        handleClick: (row, index) => {
                            goto('/unite-organisationnelle/details');
                        }
                    }
                ]
            });
        });
        return result;
    };

    React.useEffect(() => {
        fetch(`${API_URL}/employees/teams`)
            .then(response => response.json())
            .then(json => {
                setState(prev => ({
                    ...prev,
                    data: prepareData(json)
                }));
            });
    // eslint-disable-next-line
    }, []);

    const onClickAddAction = () => {
        console.log('fired add action');
        history.push('/unite-organisationnelle/nouveau');
    };

    const { data, headRows } = state;

    return (
        <>
            {state.data.length !== 0 ? (
                <BaseTable
                  rows={data}
                  addAction={() => {
                      onClickAddAction();
                  }}
                  title="Liste des unités organisationnelles"
                  subTitle="Consultez vos différentes unités"
                  headRows={headRows}
                />
            ) : false}
        </>
    );
}

export default Teams;
