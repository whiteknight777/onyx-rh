import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import BaseTable from '../../../Components/AdvancedTables/BaseTable';
import DrawerBox from '../../../Components/Drawer/DrawerBox';
import { API_URL } from '../../../modules/Auth/contexts/authCrud';
import Authorization from './Authorization/Authorization';
import TypeDoc from './TypeDoc/TypeDoc';
import { MixedWidget14 } from '../../../../_metronic/_partials/widgets/mixed/MixedWidget14';
import Explorer from './Explorer';

function Documents() {
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
                id: 'type',
                numeric: false,
                disablePadding: false,
                label: '#',
                showColumn: true
            },
            {
                id: 'label',
                numeric: false,
                disablePadding: false,
                label: 'Nom',
                showColumn: true
            },
            {
                id: 'slug',
                numeric: false,
                disablePadding: false,
                label: 'Slug',
                showColumn: false
            },
            {
                id: 'parent',
                numeric: false,
                disablePadding: false,
                label: 'Parent',
                showColumn: false
            },
            {
                id: 'size',
                numeric: false,
                disablePadding: false,
                label: 'size',
                showColumn: true
            },
            {
                id: 'extension',
                numeric: false,
                disablePadding: false,
                label: 'Extension',
                showColumn: true
            },
            {
                id: 'fileType',
                numeric: false,
                disablePadding: false,
                label: 'Type',
                showColumn: true
            },
            {
                id: 'owner',
                numeric: false,
                disablePadding: false,
                label: 'Proprietaire',
                showColumn: true
            },
            {
                id: 'url',
                numeric: false,
                disablePadding: false,
                label: 'url',
                showColumn: false
            },
            {
                id: 'restrictions',
                numeric: false,
                disablePadding: false,
                label: 'Accès',
                showColumn: true
            },
            {
                id: 'createdAt',
                numeric: false,
                disablePadding: false,
                label: 'Date création',
                showColumn: false
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
        data: [],
        path: ['root'],
        open: false
    });
    const history = useHistory();

    const goParent = (slug) => {
        const data = JSON.stringify({
            slug // slug account entreprise
        });
        if (state.data.length >= 0) {
            setState(prev => ({
                ...prev,
                data: []
            }));
        }
        const request = new Request(`${API_URL}/documents/go-parent`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });
        fetch(request)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setState(prev => ({
                        ...prev,
                        data: prepareData(json),
                        path: prev.path.filter(e => e !== slug)
                    }));
                }, 100);
            });
    };

    const openFolder = (slug) => {
        const data = JSON.stringify({
            slug // slug account entreprise
        });
        if (state.data.length >= 0) {
            setState(prev => ({
                ...prev,
                data: []
            }));
        }
        const request = new Request(`${API_URL}/documents/find`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        });
        fetch(request)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setState(prev => ({
                        ...prev,
                        data: prepareData(json),
                        path: prev.path.concat(slug)
                    }));
                }, 100);
            });
    };

    const prepareData = (json) => {
        const result = [];
        let parentRow = 0;
        json.forEach(el => {
            if (el.parent === 'root') {
                result.push({
                    id: el.id,
                    type: <TypeDoc value={el.type} />,
                    label: <Explorer label={el.label} type={el.type} openFolder={() => openFolder(el.slug)} />,
                    slug: el.slug,
                    parent: el.parent,
                    size: el.size,
                    extension: el.extension,
                    fileType: el.fileType,
                    owner: el.owner,
                    url: el.url,
                    restrictions: <Authorization value={el.restrictions.status} />,
                    createdAt: el.createdAt,
                    updatedAt: el.updatedAt,
                    actions: [
                        {
                            type: 'show',
                            label: 'Consulter informations',
                            handleClick: (row, index) => {
                                // goto('/ressources-humaines/equipes/details');
                                setState(prev => ({
                                    ...prev,
                                    open: true
                                }));
                            }
                        }
                    ]
                });
            } else {
                if (parentRow === 0) {
                    result.push({
                        id: '',
                        type: <TypeDoc value="Folder" />,
                        label: <Explorer label=". ." type="Folder" openFolder={() => goParent(el.parent)} />,
                        slug: '',
                        parent: '',
                        size: '',
                        extension: '',
                        fileType: '',
                        owner: '',
                        url: '',
                        restrictions: '',
                        createdAt: '',
                        updatedAt: '',
                        actions: [
                        ]
                    });
                    parentRow = 1;
                }
                result.push({
                    id: el.id,
                    type: <TypeDoc value={el.type} />,
                    label: <Explorer label={el.label} type={el.type} openFolder={() => openFolder()} />,
                    slug: el.slug,
                    parent: el.parent,
                    size: el.size,
                    extension: el.extension,
                    fileType: el.fileType,
                    owner: el.owner,
                    url: el.url,
                    restrictions: <Authorization value={el.restrictions.status} />,
                    createdAt: el.createdAt,
                    updatedAt: el.updatedAt,
                    actions: [
                        {
                            type: 'show',
                            label: 'Consulter informations',
                            handleClick: (row, index) => {
                                // goto('/ressources-humaines/equipes/details');
                                setState(prev => ({
                                    ...prev,
                                    open: true
                                }));
                            }
                        }
                    ]
                });
            }
        });
        return result;
    };

    const getData = () => {
        const data = JSON.stringify({
            slug: 'rocket-engine' // slug account entreprise
        });
        if (state.data.length !== 0) {
            setState(prev => ({
                ...prev,
                data: []
            }));
        }
        const request = new Request(`${API_URL}/documents/list`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            });
        fetch(request)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setState(prev => ({
                        ...prev,
                        data: prepareData(json)
                    }));
                    console.log(state.data.length);
                }, 50);
            });
    };

    React.useEffect(() => {
        getData();
    // eslint-disable-next-line
    }, []);

    const onClickAddAction = () => {
        console.log('fired add action');
        // history.push('/ressources-humaines/absences/nouveau');
    };

    const { data, headRows } = state;

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
                {/* <div className="card card-custom h-100">
                    <div className="card-body d-flex flex-column">
                        <div className="pt-5">
                            <p className="text-center font-weight-normal font-size-lg pb-7">
                                Notes: Current sprint requires stakeholders
                                <br />
                                to approve newly amended policies
                            </p>
                            <a href="/" className="btn btn-success btn-shadow-hover font-weight-bolder w-100 py-3">Generate Report</a>
                        </div>
                    </div>
                </div> */}
                <MixedWidget14 />
            </Grid>
            <Grid item xs={12} md={9}>
                {state.data.length !== 0 ? (
                    <BaseTable
                      rows={data}
                      addAction={() => {
                          onClickAddAction();
                      }}
                      refreshAction={() => {
                          getData();
                      }}
                      title="Liste des documents"
                      subTitle={state.path.join(' / ')}
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
                                        {/* <RequestStatus value={0} /> */}
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
            </Grid>

        </Grid>
    );
}

export default Documents;
