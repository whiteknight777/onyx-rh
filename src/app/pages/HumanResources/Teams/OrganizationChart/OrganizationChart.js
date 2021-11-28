import { Button } from '@material-ui/core';
import React from 'react';
import OrgTree from 'react-org-tree';
import { printElement } from '../../../../../_metronic/_helpers';
import Template from './Template';

function OrganizationChart() {
    const [state, setState] = React.useState({
        options: {
            expandAll: true,
            collapsable: true,
            horizontal: false
        },
        data: {
            id: 0,
            label: <Template name="Jane Cooper" title="Manager" />,
            children: [{
                id: 1,
                label: <Template name="Jane Cooper" title="Manager" />,
                children: [{
                    id: 4,
                    label: <Template name="Jane Cooper" title="Manager" />
                }, {
                    id: 5,
                    label: <Template name="Jane Cooper" title="Manager" />
                }, {
                    id: 6,
                    label: <Template name="Jane Cooper" title="Manager" />
                }]
            }, {
                id: 2,
                label: <Template name="Jane Cooper" title="Manager" />
            }, {
                id: 3,
                label: <Template name="Jane Cooper" title="Manager" />
            }]
        }
    });

    const { data, options } = state;
    return (
        <div className="row pb-15">
            <div className="no-print row w-full">
                <div className="col-xl-12 px-10">
                    <div className="flex items-center">
                        <label htmlFor="horizontal" className="ml-3 block text-sm font-medium text-gray-700">
                            <input
                              id="horizontal"
                              name="horizontal"
                              type="checkbox"
                              checked={options.horizontal}
                              onClick={(e) => {
                                  setState(prev => ({
                                      ...prev,
                                      options: {
                                          horizontal: !prev.options.horizontal,
                                          collapsable: !prev.options.horizontal !== true
                                      }
                                  }));
                                  setTimeout(() => {
                                      e.preventDefault();
                                  }, 50);
                              }}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mr-2"
                            />
                            Position
                            {' '}
                            {options.horizontal ? '(Horizontal)' : '(Vertical)'}
                        </label>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="collapsable" className="ml-3 block text-sm font-medium text-gray-700">
                            <input
                              id="collapsable"
                              name="collapsable"
                              type="checkbox"
                              disabled={options.horizontal}
                              checked={options.collapsable}
                              onClick={(e) => {
                                  setState(prev => ({
                                      ...prev,
                                      options: {
                                          collapsable: !prev.options.collapsable
                                      }
                                  }));
                                  setTimeout(() => {
                                      e.preventDefault();
                                  }, 50);
                              }}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mr-2"
                            />
                            Collapsable
                        </label>
                    </div>
                    <div className="flex items-center">
                        <Button
                          variant="outlined"
                          onClick={(e) => {
                              e.persist();

                              window.print();
                          }}
                        >
                            Imprimer
                        </Button>
                    </div>
                </div>
            </div>
            <div className="row w-full">
                <div id="organigramme" className="col-xl-12 px-10">
                    <OrgTree
                      data={data}
                      horizontal={options.horizontal}
                      collapsable={options.collapsable}
                      expandAll={options.expandAll}
                      className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}
export default OrganizationChart;
