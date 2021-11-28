/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from 'react';
import objectPath from 'object-path';
import ApexCharts from 'apexcharts';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../_helpers';
import { useHtmlClassService } from '../../../layout';

// eslint-disable-next-line
export function StatsWidget11({ className, symbolShape, baseColor }) {
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
        colorsThemeBaseSuccess: objectPath.get(
            uiService.config,
        `js.colors.theme.base.${baseColor}`
        ),
        colorsThemeLightSuccess: objectPath.get(
            uiService.config,
        `js.colors.theme.light.${baseColor}`
        ),
        fontFamily: objectPath.get(uiService.config, 'js.fontFamily')
    }), [uiService, baseColor]);

    useEffect(() => {
        const element = document.getElementById('kt_stats_widget_11_chart');

        if (!element) {
            return;
        }

        const options = getChartOption(layoutProps);
        const chart = new ApexCharts(element, options);
        chart.render();
        return function cleanUp() {
            chart.destroy();
        };
    }, [layoutProps]);

    return (
        <div className={`card card-custom ${className}`}>
            <div className="card-body p-0">
                <div
                  id="kt_stats_widget_11_chart"
                  className="card-rounded-bottom"
                  style={{ height: '150px' }}
                />
            </div>
        </div>
    );
}

function getChartOption(layoutProps) {
    const options = {
        series: [44, 55, 67],
        chart: {
            height: 180,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '12px'
                    },
                    value: {
                        fontSize: '14px',
                        offsetY: 3
                    },
                    total: {
                        show: true,
                        label: 'Absences',
                        fontSize: '12px',
                        fontWeight: 600,
                        formatter(w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249;
                        }
                    }
                }
            }
        },
        labels: ['CP', 'CNP', 'RTT']
    };
    return options;
}
