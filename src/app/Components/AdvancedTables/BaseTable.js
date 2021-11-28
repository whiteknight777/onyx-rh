import React from 'react';
import Grid from '@material-ui/core/Grid';
import AdvanceTables from './AdvanceTables';

function BaseTable(props) {
    const {
        rows, headRows, addAction, title, subTitle, refreshAction
    } = props;
    const [state, setState] = React.useState({
        defaultRows: rows,
        defaultHeadRows: headRows
    });

    React.useEffect(({ ...args }) => {
        console.log('rows updates', args);
    }, [rows]);

    const hideColumns = (columnKey) => {
        setState(prev => ({
            ...prev,
            defaultHeadRows: prev.defaultHeadRows.filter((el, k) => {
                if (k === columnKey) el.showColumn = !el.showColumn;
                return el;
            })
        }));
    };

    const handleSearchSubmit = (value, action) => {
        if (action === 'find') {
            setState(prev => ({
                ...prev,
                defaultRows: rows.filter(r => {
                    // recherchons la colonne qui contient la valeur
                    let matchValue = false;
                    headRows.filter(column => {
                        if (r[column.id]
                            ?.toString().toLowerCase() === value.toString().toLowerCase()) matchValue = true;
                        if (r[column.id]?.toString().toLowerCase()
                            .search(value.toString().toLowerCase()) !== -1) matchValue = true;
                        return column;
                    });
                    return matchValue ? r : null;
                })
            }));
        } else {
            // reset action
            setState(prev => ({
                ...prev,
                defaultRows: rows
            }));
        }
    };

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} md={12}>
                    <AdvanceTables
                      title={title}
                      subtitle={subTitle}
                      handleRefreshAction={() => {
                          refreshAction();
                      }}
                      handleSearchSubmit={(value, action) => {
                          handleSearchSubmit(value, action);
                      }}
                      handleAddAction={() => {
                          addAction();
                      }}
                      hideColumns={(columnKey) => {
                          hideColumns(columnKey);
                      }}
                      rows={state.defaultRows}
                      columns={state.defaultHeadRows}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default BaseTable;
