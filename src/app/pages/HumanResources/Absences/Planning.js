import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './planning.scss';
import { Grid } from '@material-ui/core';
import FilterList from '../../../Components/Lists/FilterList';

const Planning = () => {
    const [state, setState] = React.useState({
        filters: [
            { name: 'demandeur', label: 'Demandeur' },
            { name: 'equipe', label: 'Equipe' }
        ],
        advancedSearch: false
    });

    const toogleAdvancedSearch = () => {
        setState(prev => ({
            ...prev,
            advancedSearch: !prev.advancedSearch
        }));
    };

    const { advancedSearch } = state;

    return (
        <Grid container spacing={1}>

            {advancedSearch
                ? (
                    <Grid item xs={12} md={3}>
                        <FilterList filters={state.filters} />
                    </Grid>
                )
                : false}
            <Grid item xs={12} md={advancedSearch ? 9 : 12}>
                <div className="card card-custom">
                    <div className="card-header">
                        <div className="card-title">
                            <small>Filtres:</small>
                            <button
                              type="button"
                              className="btn text-xs btn-light-primary font-weight-bold ml-4 mr-1"
                              onClick={toogleAdvancedSearch}
                            >
                                Filtre avancé
                            </button>
                            <button
                              type="button"
                              className="btn text-xs btn-light-primary font-weight-bold mx-1"
                            >
                                Congés payés
                            </button>
                            <button
                              type="button"
                              className="btn text-xs btn-light-primary font-weight-bold mx-1"
                            >
                                RTT
                            </button>
                            <button
                              type="button"
                              className="btn text-xs btn-light-primary font-weight-bold mx-1"
                            >
                                Congés sans solde
                            </button>
                            <button
                              type="button"
                              className="btn text-xs btn-light-primary font-weight-bold mx-1"
                            >
                                Arrêt de travail
                            </button>
                            <button
                              type="button"
                              className="btn text-xs btn-light-primary font-weight-bold mx-1"
                            >
                                Congés maternité
                            </button>
                            <button
                              type="button"
                              className="btn text-xs btn-light-primary font-weight-bold mx-1"
                            >
                                Tout afficher
                            </button>
                        </div>
                        {/* <div className="card-toolbar">
                            <button type="button" className="btn btn-light-primary font-weight-bold">
                                <i className="ki ki-plus " />
                                {' '}
                                Add Event
                            </button>
                        </div> */}
                    </div>
                    <div className="card-body">
                        <FullCalendar
                          id="kt_calendar"
                          plugins={[
                              dayGridPlugin,
                              timeGridPlugin
                          ]}
                          initialView="dayGridMonth"
                          buttonText={{
                              today: "Aujourd'hui",
                              month: 'Mois',
                              week: 'Semaines',
                              day: 'Jours',
                              list: 'Liste'
                          }}
                          weekends
                          headerToolbar={{
                              start: 'today prev,next',
                              center: 'title',
                              end: 'dayGridMonth,timeGridDay'
                          }}
                          locale="fr"
                          eventContent={renderEventContent}
                          events={[
                              {
                                  title: 'Some lorem ipsum Some lorem ipsum 1',
                                  date: '2021-11-11',
                                  backgroundColor: '#673ab7',
                                  borderColor: '#673ab7',
                                  textColor: '#fff',
                                  extendedProps: {
                                      description: 'Some lorem ipsum Some lorem ipsum Some lorem ipsum'
                                  }
                              },
                              {
                                  title: 'event 2',
                                  date: '2021-11-12',
                                  extendedProps: {
                                      description: 'Some lorem ipsum Some lorem ipsum Some lorem ipsum'
                                  }
                              }
                          ]}
                          eventColor="#378006"
                        />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

function renderEventContent(eventInfo) {
    const { description } = eventInfo.event.extendedProps;
    return (

        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="calendar-quick-actions-tooltip">{description}</Tooltip>}
        >
            <div className="fc-content">
                <span className="circle white" />
                <span
                  className="fc-title"
                >
                    {eventInfo.event.title}
                </span>
            </div>
        </OverlayTrigger>
    );
}

export default Planning;
