import Component from "../Component.js";

export default class LoginContainer extends Component {
    constructor() {
        super(".login-container", `
            <div class="login-inner-container">
                <div class="login-header">
                    <h1 class="form-header" id="toLoginForm">Login</h1>
                    <h1 class="form-header" id="toCreateAccountForm">Criar conta</h1>
                </div> 
                <div class="login-slider">
                    <div class="login-form">
                        <form class="form-panel">
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" required>
                            </div>
            
                            <div class="form-group">
                                <label for="password">Senha:</label>
                                <input type="password" id="password" required>
                            </div>
            
                            <button type="button" class="login-button">Entrar</button>
                        </form>
                    </div>
        
                    <div class="create-account-form">
                        <form class="form-panel">
                            <div class="form-group">
                                <label for="name">Nome:</label>
                                <input type="text" id="newName" required>
                            </div>
        
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="newEmail" required>
                            </div>
        
                            <div class="form-group">
                                <label for="password">Senha:</label>
                                <input type="password" id="newPassword" required>
                            </div>
        
                            <div class="form-group seller">
                                <label for="seller">Quero ser um vendedor:</label>
                                <input type="checkbox" id="seller">
                            </div>
        
                            <button type="button" class="create-account-button">Criar Conta</button>
        
                        </form>
                    </div>
                </div>
            </div>    
        `);
    }
}