import React from 'react';
import { render, fireEvent, act } from "@testing-library/react-native";
import NewsLetter from "../../components/NewsLetter/index";

const flushMicrotasksQueue = () =>
    new Promise((resolve) => setImmediate(resolve));

it("renders default elements", () => {
    const { getAllByText, getByPlaceholderText } = render(<NewsLetter />);

    expect(getAllByText("Subscription").length).toBe(1);
    expect(getAllByText("Subscribe").length).toBe(1);
    getByPlaceholderText("email");
    getByPlaceholderText("firstname");
});

it("shows invalid input messages when both inputs are empty", () => {
    const { getByTestId, getAllByText } = render(<NewsLetter />);

    fireEvent.press(getByTestId("subscribeBtn"));

    expect(getAllByText("Champ vide").length).toBe(2);
});

it("shows invalid email error message", () => {
    const { getByTestId, getByText, queryAllByText } = render(<NewsLetter />);

    fireEvent.changeText(getByTestId("firstnameInput"), "abcd");
    fireEvent.press(getByTestId("subscribeBtn"));
    expect(queryAllByText("Champ vide").length).toBe(1);

    fireEvent.changeText(getByTestId("emailInput"), "efgh");
    fireEvent.press(getByTestId("subscribeBtn"));
    getByText("Email non valide");
    expect(queryAllByText("Champ vide").length).toBe(0);
});

it("handles valid input submission", async () => {
    fetch.mockResponseOnce(JSON.stringify({ passes: true }));

    const pushMock = jest.fn();
    const { getByTestId, queryAllByText } = render(<NewsLetter navigation={{ push: pushMock }}/>);

    fireEvent.changeText(getByTestId("emailInput"), "test@gmail.com");
    fireEvent.changeText(getByTestId("firstnameInput"), "test_user");
    fireEvent.press(getByTestId("subscribeBtn"));

    await act(flushMicrotasksQueue);
    expect(queryAllByText("Champ vide").length).toBe(0);
    expect(queryAllByText("Email non valide").length).toBe(0);
});