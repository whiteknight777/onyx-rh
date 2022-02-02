import React from 'react';
import { toAbsoluteUrl } from '../../../../../_metronic/_helpers';

const Template = ({ ...props }) => {
    const { name, title } = props;
    return (
        <div className="d-flex align-items-center px-5 py-5">
            <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                <div className="symbol symbol-30 symbol-circle">
                    <img alt={name} src={toAbsoluteUrl('/media/users/300_10.jpg')} />
                </div>
                <div className="symbol symbol-lg-75 symbol-circle symbol-primary d-none">
                    <span className="font-size-h3 font-weight-boldest">AKA</span>
                </div>
            </div>
            <div className="d-flex flex-column">
                <a
                  href="/"
                  className="text-dark font-weight-bold text-hover-primary mb-0"
                >
                    {name}
                </a>
                <span className="text-muted font-weight-bold">{title}</span>
            </div>
        </div>

    );
};

export default Template;
