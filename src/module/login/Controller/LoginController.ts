import { LoginControllerInterface } from "../Controller/LoginControllerInterface"
import { LoginInteractorInputInterface } from "../Interactor/LoginInteractorInputInterface"

export class LoginController implements LoginControllerInterface {
    private interactor: LoginInteractorInputInterface

    constructor(interactor: LoginInteractorInputInterface) {
        this.interactor = interactor
    }

    login(email: string, password: string): void {
        this.interactor.login(email, password)
    }
};
