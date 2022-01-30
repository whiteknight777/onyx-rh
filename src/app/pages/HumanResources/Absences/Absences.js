import React from 'react';
import { useHistory } from 'react-router-dom';
import BaseTable from '../../../Components/AdvancedTables/BaseTable';
import DrawerBox from '../../../Components/Drawer/DrawerBox';
import RequestStatus from './RequestStatus/RequestStatus';
import Axios from '../../../modules/Auth/contexts/axiosSetup';

function Absences() {
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
                id: 'applicant',
                numeric: false,
                disablePadding: false,
                label: 'Demandeur',
                showColumn: true
            },
            {
                id: 'requestType',
                numeric: false,
                disablePadding: false,
                label: 'Type demande',
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
                id: 'team',
                numeric: false,
                disablePadding: false,
                label: 'Equipe',
                showColumn: true
            },
            {
                id: 'startDate',
                numeric: false,
                disablePadding: false,
                label: 'Date de début',
                showColumn: false
            },
            {
                id: 'endDate',
                numeric: false,
                disablePadding: false,
                label: 'Date de fin',
                showColumn: false
            },
            {
                id: 'daysNumber',
                numeric: false,
                disablePadding: false,
                label: 'Nb Jours',
                showColumn: true
            },
            {
                id: 'status',
                numeric: false,
                disablePadding: false,
                label: 'Statut',
                showColumn: true
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
        data: [],
        open: false
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
                applicant: el.applicant,
                requestType: el.requestType,
                manager: el.manager.fullname,
                team: el.team,
                startDate: el.startDate,
                endDate: el.endDate,
                daysNumber: el.daysNumber,
                status: <RequestStatus value={el.decision.requestStatus} />,
                createdAt: el.createdAt,
                updatedAt: el.updatedAt,
                actions: [
                    {
                        type: 'show',
                        label: 'Consulter informations',
                        handleClick: (row, index) => {
                            // goto('/equipes/details');
                            setState(prev => ({
                                ...prev,
                                open: true
                            }));
                        }
                    }
                ]
            });
        });
        return result;
    };

    const getData = () => Axios.get('employees/absences')
        .then(response => {
            const { data } = response;
            setState(prev => ({
                ...prev,
                data: prepareData(data)
            }));
        });

    React.useEffect(() => {
        getData();
    // eslint-disable-next-line
    }, []);

    const onClickAddAction = () => {
        console.log('fired add action');
        history.push('/absences/nouveau');
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
                  refreshAction={() => {
                      getData();
                  }}
                  title="Liste des absences"
                  subTitle="Consultez les différentes demandes d'absences"
                  headRows={headRows}
                />
            ) : false}
            <DrawerBox
              anchor="right"
              variant="temporary"
              onClose={() => {
                  setState(prev => ({
                      ...prev,
                      open: false
                  }));
              }}
              open={state.open}
            >
                <div className="card card-custom drawer-box">
                    <div className="card-header h-auto py-4">
                        <div className="card-title">
                            <h3 className="card-label">
                                Récapitulatif
                                <span className="d-flex text-muted pt-2 font-size-sm">
                                    Demande
                                </span>
                            </h3>
                        </div>
                        <div className="card-toolbar">
                            {/* <a href="#" className="btn btn-default btn-sm font-weight-bold"> */}
                            <i className="flaticon2-gear" />
                            {/* </a> */}
                        </div>
                    </div>
                    <div className="card-body py-4">
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Demandeur:</span>
                            <div className="col-7">
                                <span className="form-control-plaintext font-weight-bolder">Leanne Graham</span>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Equipe:</span>
                            <div className="col-7">
                                <span className="form-control-plaintext font-weight-bolder">London, UK.</span>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Type demande:</span>
                            <div className="col-7">
                                <span className="form-control-plaintext">
                                    <span className="font-weight-bolder">345,000M</span>
                                </span>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Nbre Jour(s):</span>
                            <div className="col-7">
                                <span className="form-control-plaintext font-weight-bolder">+456 7890456</span>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Date départ:</span>
                            <div className="col-7">
                                <span className="form-control-plaintext font-weight-bolder">
                                    info@loop.com
                                </span>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Date fin:</span>
                            <div className="col-7">
                                <span className="form-control-plaintext font-weight-bolder">
                                    www.loop.com
                                </span>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Status:</span>
                            <div className="col-7">
                                <span className="font-weight-bolder">
                                    <RequestStatus value={0} />
                                </span>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <span className="col-5 col-form-label">Responsable N1:</span>
                            <div className="col-7">
                                <span className="form-control-plaintext font-weight-bolder">
                                    www.loop.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary font-weight-bold mr-2">Valider</button>
                        <button type="button" className="btn btn-light-danger font-weight-bold">Rejeter demande</button>
                    </div>
                </div>
            </DrawerBox>
        </>
    );
}

export default Absences;
