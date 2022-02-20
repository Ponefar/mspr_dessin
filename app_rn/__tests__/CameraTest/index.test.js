import React from 'react';
import { render, fireEvent } from "@testing-library/react-native";
import CameraScreen from '../../components/Camera/index';

describe('Camera Tests', () => {
    test('test camera in initial state', () => {
        const { getByTestId } = render(<CameraScreen />);
        expect(getByTestId("InitView"));
    });

    test('test camera without permission', () => {
        const { getByText, getByTestId } = render(<CameraScreen />);
        fireEvent.press(getByTestId("cancelPermissionTestBtn"));
        expect(getByText("No access to camera"))
    });

    test('test camera grant permission', () => {
        const { getByText, getByTestId } = render(<CameraScreen />);
        fireEvent.press(getByTestId("givePermissionTestBtn"));
        expect(getByTestId("cameraView"));
    });

    test('test change camera type into front and back functionality', () => {
        const { getByTestId, queryAllByText } = render(<CameraScreen />);
        fireEvent.press(getByTestId("givePermissionTestBtn"));
        getByTestId("cameraView")
        fireEvent.press(getByTestId("typeChangeBtn"));
        expect(queryAllByText("front"));
        fireEvent.press(getByTestId("typeChangeBtn"));
        expect(queryAllByText("back"));
    });
});