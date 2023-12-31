import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type MyLabelProps  } from "../components/MyLabel";

const meta: Meta<MyLabelProps> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters:{
        layout: 'centered'
    },
    argTypes : {
        size: { control: 'inline-radio' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args:{
        label: 'Basic Label',
    }
};

export const AllCaps: Story = {
    args:{
        label: 'All Caps Label',
        allCaps: true
    }
};

export const Secondary: Story = {
    args:{
        label: 'Secondary Label',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args:{
        label: 'Custom Color Label',
        fontColor: 'red'
    }
};

export const CustomBackGroundColor: Story = {
    args:{
        label: 'Custom Color Label',
        backgroundColor: 'black',
        fontColor: 'white'
    }
};
