import React from "react";
import ListItem from "./ListItem";

const Lists = () => {
  return (
    <div className="listWrap">
      <ul className="list-group">
        <ListItem title="Title 1" delHandler={} doneHandler={} />
        <ListItem title="Title 2" />
        <ListItem title="Title 3" />
      </ul>
    </div>
  );
};

export default Lists;
