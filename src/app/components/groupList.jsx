import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    sectetItem
}) => {
    console.log(Object.keys(items));
    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    key={items[item][valueProperty]}
                    className={
                        "list-group-item" +
                        (items[item] === sectetItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(items[item])}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOf([PropTypes.object.isRequired, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    sectetItem: PropTypes.object.isRequired
};

export default GroupList;
