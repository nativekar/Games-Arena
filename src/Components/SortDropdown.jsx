import React from "react";
import { Dropdown, Header, Icon } from "semantic-ui-react";

const options = [
  {
    key: "alphabetically",
    text: "Alphabetically",
    value: "alphabetically",
    content: "Alphabetically",
  },
];

const SortDropdown = () => (
  <Header as="h4">
    <Icon name="trophy" />
    <Header.Content>
      Sort By
      <Dropdown
        inline
        header="Adjust time span"
        options={options}
        defaultValue={options[0].value}
      />
    </Header.Content>
  </Header>
);

export default SortDropdown;
