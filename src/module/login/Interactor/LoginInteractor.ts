import { LoginInteractorInputInterface } from "./LoginInteractorInputInterface";
import { LoginInteractorOutputInterface } from "./LoginInteractorOutputInterface";

export class LoginInteractor implements LoginInteractorInputInterface, LoginInteractorOutputInterface {
    private loginHandler!: () => void
    private loginErrorHandler!: (errors: string[]) => void
    private loginSuccessHandler!: () => void

    withLoginHandler(loginHandler: () => void): void {
        this.loginHandler = loginHandler;
    }

    withLoginErrorHandler(loginErrorHandler: (errors: string[]) => void): void {
        this.loginErrorHandler = loginErrorHandler;
    }

    withLoginSuccessHandler(loginSuccessHandler: () => void): void {
        this.loginSuccessHandler = loginSuccessHandler;
    }

    async login(email: string, password: string): Promise<void> {
        this.loginHandler();

        await new Promise(r => setTimeout(r, 2000));

        this.loginSuccessHandler();
    }
};
