import {ControlAccordion, ControlAccordionPropsType} from "../Components/ControlledComponents/ControlAccordion/ControlAccordion";
import {Story} from "@storybook/react";
const Template:Story<ControlAccordionPropsType> = (args) => <ControlAccordion{...args}/>;

export default {
    title: 'Accordion',
    component: ControlAccordion,
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    name: 'Control Menu 1',
    collapsed:true
}



