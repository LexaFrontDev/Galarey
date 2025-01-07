
export function RoutesHome() {
    return `
        <div class="HomePage">
        
            <div class="HomePage__nav">
                <h1 class="HomePage__nav__logo">Logo</h1>
                    <ul class="HomePage__nav__link">
                        <li class="HomePage__nav__items auth"><a class="links" href="register">Регистрация</a></li>
                        <li class="HomePage__nav__items auth"><a class="links" href="login">Логин</a></li>    
                        <li class="HomePage__nav__items main"><a class="links" href="news">Новости</a></li>        
                        <li class="HomePage__nav__items main"><a class="links" href="profile">Профил</a></li>   
                    </ul>
            </div>
        
        </div>
    `;
}
