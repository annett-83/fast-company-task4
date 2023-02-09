import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handeleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handeleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        { (columns[column].path) && (selectedSort.path === columns[column].path)
                            ? (selectedSort.order === "asc")
                                ? <i className="bi bi-caret-up-fill"></i>
                                : <i className="bi bi-caret-down-fill"></i>
                            : null
                        }
                    </th>
                ))}
                {/* <th scope="col">Качества</th>
                <th onClick={() => handeleSort("profession.name")} scope="col">
                    Профессия
                </th>
                <th
                    onClick={() => handeleSort("completedMeetings")}
                    scope="col"
                >
                    Встретился, раз
                </th>
                <th onClick={() => handeleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => handeleSort("bookmark")} scope="col">
                    Избранное
                </th>
                <th /> */}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
