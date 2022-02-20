import React from 'react';
import { render, fireEvent, act } from "@testing-library/react-native";
import ChoosePicture from "../../components/ChoosePicture/index";

it("renders default elements", () => {
    const { getAllByText } = render(<ChoosePicture />);

    expect(getAllByText("Tyrex").length).toBe(1);
    expect(getAllByText("Snake").length).toBe(1);
    expect(getAllByText("Monkey").length).toBe(1);
});