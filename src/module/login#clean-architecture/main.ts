import { LoginController } from "./Controller/LoginController";
import { LoginInteractor } from "./Interactor/LoginInteractor";
import { LoginPresenter } from "./Presenter/LoginPresenter";
import { LoginView } from "./View/LoginView";
import { LoginViewModel } from "./ViewModel/LoginViewModel";

export const boot = (render: any) => {
    const interactor = new LoginInteractor();

    const presenter = new LoginPresenter(interactor);

    const controller = new LoginController(interactor);

    const view = new LoginView(controller);

    const viewModelChangeHandler = (viewModel: LoginViewModel): void => {
        render(view.render(viewModel))
    }

    presenter.setViewModelChangeHandler(viewModelChangeHandler);
};
