/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import {
    Table, TableBody,
    TableCell, TablePagination, TableRow, Checkbox, makeStyles
} from '@material-ui/core';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import ActionsToolbar from './ActionsToolbar';
import BtnActions from '../BtnActions/BtnActions';
import DrawerAction from './DrawerAction';

const useStyles = makeStyles((theme) => ({
    fullContent: {
        minHeight: '100%'
    }
}));

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function AdvanceTables({
    title = 'Agents Stats',
    subtitle = 'More than 400+ new members',
    handleAddAction,
    handleRefreshAction,
    handleSearchSubmit,
    rows,
    hideColumns,
    columns
}) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

    const classes = useStyles();

    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    }

    function handleSelectAllClick(event) {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    }

    function handleClick(event, id) {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    }

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
    }

    const isSelected = name => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={[classes.fullContent, 'card card-custom'].join(' ')}>

            {/* begin::Body */}
            <div className="card-body py-5 mb-2">
                {/* begin::Table */}
                <div className="table-responsive">
                    <EnhancedTableToolbar
                      numSelected={selected.length}
                      subtitle={subtitle}
                      title={title}
                      actions={(
                          <ActionsToolbar
                            columns={columns}
                            hideColumns={(columnKey) => {
                                hideColumns(columnKey);
                            }}
                            refreshAction={() => {
                                handleRefreshAction();
                            }}
                            addAction={() => {
                                handleAddAction();
                            }}
                            handleSearchSubmit={(value, action) => {
                                handleSearchSubmit(value, action);
                            }}
                          />
                      )}
                    />
                    <div className="">
                        <Table
                          aria-labelledby="tableTitle"
                        >
                            <EnhancedTableHead
                              numSelected={selected.length}
                              order={order}
                              orderBy={orderBy}
                              onSelectAllClick={handleSelectAllClick}
                              onRequestSort={handleRequestSort}
                              rowCount={rows.length}
                              columns={columns}
                            />
                            <TableBody>
                                {stableSort(rows, getSorting(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        const columnNames = Object.getOwnPropertyNames(row);
                                        return (
                                            <TableRow
                                              hover
                                              role="checkbox"
                                              aria-checked={isItemSelected}
                                              tabIndex={-1}
                                              key={row.id}
                                              selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                      checked={isItemSelected}
                                                      onClick={event => handleClick(event, row.id)}
                                                      inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </TableCell>
                                                {columnNames.map((column, key) => {
                                                    if (columns[key].showColumn === true) {
                                                        if (key === 0) {
                                                            return (
                                                                <TableCell
                                                                  component="th"
                                                                  id={labelId}
                                                                  key={`row-${index}-column-${key}`}
                                                                  scope="row"
                                                                  padding="none"
                                                                >
                                                                    {row[column]}
                                                                </TableCell>
                                                            );
                                                        }
                                                        if (column === 'actions') {
                                                            return (
                                                                <TableCell
                                                                  align="left"
                                                                  key={`row-${index}-column-${key}`}
                                                                >
                                                                    <>
                                                                        {row[column].map((action, k) => (
                                                                            <BtnActions
                                                                              key={k}
                                                                              type={action.type}
                                                                              handleClick={() => {
                                                                                  action.handleClick(row, index);
                                                                              }}
                                                                              label={action.label}
                                                                              icon={action.icon}
                                                                            />
                                                                        ))}
                                                                    </>
                                                                </TableCell>
                                                            );
                                                        }
                                                        return (
                                                            <TableCell
                                                              align="left"
                                                              key={`row-${index}-column-${key}`}
                                                            >
                                                                {row[column]}
                                                            </TableCell>
                                                        );
                                                    }
                                                    return false;
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows >= rowsPerPage && (
                                <TableRow>
                                    <TableCell align="center" colSpan={columns.length + 1}>
                                        Aucune(s) donnée(s) disponible...
                                    </TableCell>
                                </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 20, 50, 100]}
                      component="div"
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      labelRowsPerPage="Ligne par page:"
                      labelDisplayedRows={({ from, to, count }) => (
                          `${from}-${to} sur ${count !== -1 ? count : `plus de ${to}`}`
                      )}
                      backIconButtonProps={{
                          'aria-label': 'Page précédente'
                      }}
                      nextIconButtonProps={{
                          'aria-label': 'Page suivante'
                      }}
                      backIconButtonText="Page précédente"
                      nextIconButtonText="Page suivante"
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                    <DrawerAction
                      numSelected={selected.length}
                      onClose={() => {
                          setSelected([]);
                      }}
                    />
                </div>
                {/* end::Table */}
            </div>
            {/* end::Body */}
        </div>
    );
}

export default AdvanceTables;
