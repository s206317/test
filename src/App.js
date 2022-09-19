import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Picniclunch from "./projektgranssnitt/test/PicniclunchComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Picniclunch", module)
  .add("default", () => <Picniclunch {...myProps} {...actions} />)
  .add("pinned", () => <Picniclunch {...myProps} pinned={true} {...actions} />)
  .add("archived", () => (
    <Picniclunch {...myProps} archived={true} {...actions} />
  ));


export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Picniclunch", module)
  .add("default", () => <Picniclunch {...myProps} {...actions} />)
  .add("pinned", () => <Picniclunch {...myProps} pinned={true} {...actions} />)
  .add("archived", () => (
    <Picniclunch {...myProps} archived={true} {...actions} />
  ));