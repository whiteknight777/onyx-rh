import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseTable from '../../../Components/AdvancedTables/BaseTable';
import NameFormated from '../../../Components/NameFormated/NameFormated';
import Axios from '../../../modules/Auth/contexts/axiosSetup';

function Staff() {
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
                id: 'icon',
                numeric: false,
                disablePadding: false,
                label: '#',
                showColumn: true
            },
            {
                id: 'name',
                numeric: false,
                disablePadding: false,
                label: 'Nom & Prenom(s)',
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
                id: 'phone',
                numeric: false,
                disablePadding: false,
                label: 'Téléphone',
                showColumn: true
            },
            {
                id: 'zipcode',
                numeric: false,
                disablePadding: false,
                label: 'Code postal',
                showColumn: false
            },
            {
                id: 'city',
                numeric: false,
                disablePadding: false,
                label: 'Ville',
                showColumn: true
            },
            {
                id: 'street',
                numeric: false,
                disablePadding: false,
                label: 'Rue',
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
                showColumn: false
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
                icon: <NameFormated name={el.name} />,
                name: el.name,
                email: el.email,
                phone: el.phone,
                zipcode: el.address.zipcode,
                street: el.address.street,
                city: el.address.city,
                createdAt: el.createdAt,
                updatedAt: el.updatedAt,
                actions: [
                    {
                        type: 'show',
                        label: 'Consulter informations',
                        handleClick: (row, index) => {
                            goto('/collaborateurs/details');
                        }
                    }
                ]
            });
        });
        return result;
    };

    React.useEffect(() => {
        Axios.get('employees/staff')
            .then(response => {
                const { data } = response;
                setState(prev => ({
                    ...prev,
                    data: prepareData(data)
                }));
            });
    // eslint-disable-next-line
    }, [history]);

    const onClickAddAction = () => {
        console.log('fired add action');
        history.push('/collaborateurs/nouveau');
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
                  title="Liste des collaborateurs"
                  subTitle="Consultez les informations de vos collaborateurs"
                  headRows={headRows}
                />
            ) : false}
        </>
    );
}

export default Staff;
