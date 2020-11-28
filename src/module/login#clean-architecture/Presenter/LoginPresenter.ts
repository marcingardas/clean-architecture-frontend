import { LoginInteractorOutputInterface } from "../Interactor/LoginInteractorOutputInterface";
import { LoginViewModel } from "../ViewModel/LoginViewModel";

export class LoginPresenter {
    private interactor: LoginInteractorOutputInterface
    private viewModelChangeHandler: (viewModel: LoginViewModel) => void = () => {}
    private viewModel: LoginViewModel = {
        isLoading: false,
        isSuccess: false,
        errors: [],
    }

    constructor(interactor: LoginInteractorOutputInterface) {
        this.interactor = interactor;

        this.interactor.withLoginHandler(this.login.bind(this));
        this.interactor.withLoginErrorHandler(this.loginError.bind(this));
        this.interactor.withLoginSuccessHandler(this.loginSuccess.bind(this));
    }

    setViewModelChangeHandler(viewModelChangeHandler: (viewModel: LoginViewModel) => void) {
        this.viewModelChangeHandler = viewModelChangeHandler;

        this.viewModelChangeHandler(this.viewModel);
    }

    login() {
        this.viewModel.isLoading = true;
        this.viewModel.isSuccess = false;
        this.viewModel.errors = [];

        this.viewModelChangeHandler({...this.viewModel});
    }

    loginSuccess() {
        this.viewModel.isLoading = false;
        this.viewModel.isSuccess = true;

        this.viewModelChangeHandler({...this.viewModel});
    }

    loginError() {
        this.viewModel.isLoading = false;
        this.viewModel.errors = ['An error has occured'];

        this.viewModelChangeHandler({...this.viewModel});
    }
}
