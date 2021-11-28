import React from 'react';
import PropTypes from 'prop-types';
import {
    TableCell, TableHead, TableRow,
    TableSortLabel, Checkbox
} from '@material-ui/core';

function EnhancedTableHead(props) {
    const {
        onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, columns
    } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={numSelected > 0 && numSelected < rowCount}
                      checked={numSelected === rowCount}
                      onChange={onSelectAllClick}
                      inputProps={{ 'aria-label': 'Select all' }}
                    />
                </TableCell>
                {columns.map(row => {
                    if (row.showColumn === true) {
                        return (
                            <TableCell
                              key={row.id}
                              align={row.numeric ? 'right' : 'left'}
                              padding={row.disablePadding ? 'none' : 'default'}
                              sortDirection={orderBy === row.id ? order : false}
                            >
                                <TableSortLabel
                                  active={orderBy === row.id}
                                  direction={order}
                                  onClick={createSortHandler(row.id)}
                                >
                                    {row.label}
                                </TableSortLabel>
                            </TableCell>
                        );
                    }
                    return false;
                })}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    columns: PropTypes.array.isRequired
};

export default EnhancedTableHead;
