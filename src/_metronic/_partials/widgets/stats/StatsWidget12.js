/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from 'react';
import objectPath from 'object-path';
import ApexCharts from 'apexcharts';
import SVG from 'react-inlinesvg';
import { useHtmlClassService } from '../../../layout';
import { toAbsoluteUrl } from '../../../_helpers';

// eslint-disable-next-line
export function StatsWidget12({ className }) {
    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => ({
        colorsGrayGray500: objectPath.get(
            uiService.config,
            'js.colors.gray.gray500'
        ),
        colorsGrayGray200: objectPath.get(
            uiService.config,
            'js.colors.gray.gray200'
        ),
        colorsGrayGray300: objectPath.get(
            uiService.config,
            'js.colors.gray.gray300'
        ),
        colorsThemeBasePrimary: objectPath.get(
            uiService.config,
            'js.colors.theme.base.primary'
        ),
        colorsThemeLightPrimary: objectPath.get(
            uiService.config,
            'js.colors.theme.light.primary'
        ),
        fontFamily: objectPath.get(uiService.config, 'js.fontFamily')
    }), [uiService]);

    useEffect(() => {
        const element = document.getElementById('kt_stats_widget_12_chart');

        if (!element) {
            return;
        }

        const options = getChartOption(layoutProps);
        const chartnewUsers = new ApexCharts(element, options);
        chartnewUsers.render();
        return function cleanUp() {
            chartnewUsers.destroy();
        };
    }, [layoutProps]);

    return (
        <div className={`card card-custom ${className}`}>
            <div className="card-body d-flex flex-column p-0" style={{ height: '100%' }}>
                <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
                    <div className="d-flex flex-column text-left">
                        <span className="text-dark-75 font-weight-bolder font-size-h3">
                            +6,5K
                        </span>
                        <span className="text-muted font-weight-bold">New Users</span>
                    </div>
                </div>
                <div
                  id="kt_stats_widget_12_chart"
                  className="card-rounded-bottom p-4"
                  style={{ height: '360px' }}
                />
            </div>
        </div>
    );
}

function getChartOption(layoutProps) {
    const options = {
        series: [
            {
                name: 'Congés payés',
                data: [13, 2, 4, 8, 15, 28, 38]
            }
        ],
        chart: {
            type: 'area',
            height: '360px',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                distributed: false
            }
        },
        legend: {
            show: true
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            opacity: 0.8
        },
        stroke: {
            curve: 'smooth',
            show: false,
            width: 3
            // colors: [layoutProps.colorsThemeBasePrimary]
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true
            },
            labels: {
                show: true,
                style: {
                    // colors: layoutProps.colorsGrayGray500,
                    fontSize: '12px',
                    fontFamily: layoutProps.fontFamily
                }
            },
            crosshairs: {
                show: true,
                position: 'front',
                stroke: {
                    // color: layoutProps.colorsGrayGray300,
                    width: 1,
                    dashArray: 3
                }
            },
            tooltip: {
                enabled: true,
                formatter: undefined,
                offsetY: 0,
                style: {
                    fontSize: '12px',
                    fontFamily: layoutProps.fontFamily
                }
            }
        },
        yaxis: {
            min: 0,
            max: 55,
            axisBorder: {
                show: false
            },
            labels: {
                show: true,
                style: {
                    // colors: layoutProps.colorsGrayGray500,
                    fontSize: '12px',
                    padding: '10px 0',
                    fontFamily: layoutProps.fontFamily
                }
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px',
                fontFamily: layoutProps.fontFamily
            },
            y: {
                formatter(val) {
                    return `${ val } jour(s)`;
                }
            }
        },
        colors: [layoutProps.colorsThemeBasePrimary, layoutProps.colorsGrayGray500],
        markers: {
            colors: [layoutProps.colorsThemeLightPrimary],
            strokeColor: [layoutProps.colorsThemeBasePrimary],
            strokeWidth: 1
        }
    };
    return options;
}
