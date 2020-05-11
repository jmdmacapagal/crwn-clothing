import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menuItem.component";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory">
      {sections.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
