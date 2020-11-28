import { LoginControllerInterface } from '../Controller/LoginControllerInterface';
import { LoginViewModel } from '../ViewModel/LoginViewModel';
import React from 'react';

export class LoginView {
    private controller: LoginControllerInterface

    constructor(controller: LoginControllerInterface) {
        this.controller = controller;
    }

    render(viewModel: LoginViewModel) {
        return (
            <div>
                Is loading: {viewModel.isLoading ? 'Yes' : 'No'}<br />
                Is success: {viewModel.isSuccess ? 'Yes' : 'No'}<br />
                Errors: {viewModel.errors.length > 0 ? viewModel.errors[0] : 'No'}<br />
                <button onClick={() => this.controller.login('myemail@gmail.com', '123456')}>
                    Login
                </button>
            </div>
        );
    }
}
