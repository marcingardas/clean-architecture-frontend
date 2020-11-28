export interface LoginInteractorOutputInterface {
    withLoginHandler(loginHandler: () => void): void
    withLoginErrorHandler(loginErrorHandler: (errors: string[]) => void): void
    withLoginSuccessHandler(loginSuccessHandler: () => void): void
};
