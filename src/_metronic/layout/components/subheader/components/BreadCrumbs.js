/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../../app/modules/Auth/contexts/userProvider';

// eslint-disable-next-line
export function BreadCrumbs({ items }) {

    const { userStore } = React.useContext(UserContext);
    const { user } = userStore;

    if (!items || !items.length) {
        return '';
    }

    const removeTags = (str) => {
        if ((str === null) || (str === '')) return false;
        str = str.toString();

        // Regular expression to identify HTML tags in
        // the input string. Replacing the identified
        // HTML tag with a null string.
        return str.replace(/(<([^>]+)>)/ig, '');
    };

    return (
        <div className="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            <div className="d-flex align-items-center flex-wrap mr-2">
                <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">
                    <ul className="breadcrumb text-sm breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2">
                        <li className="breadcrumb-item">
                            <Link to="/dashboard">
                                <i className="flaticon2-shelter icon-1x" />
                            </Link>
                        </li>
                        {items.map((item, index) => (
                            <li key={`bc${index}`} className="breadcrumb-item">
                                <Link className="" to={{ pathname: item.pathname }}>
                                    {removeTags(item.title)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </h5>
                <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
                <span className="text-muted font-weight-bold mr-4">{`${user?.companyName} #XRS-45670`}</span>
            </div>
        </div>

    );
}
