

export function RoutesRegister(){
    return `
        <div class="Register">
            <form id="registerForm">
                <input class="userRegName" placeholder="Напишите имя" type="text"  name="name">
                <input class="userRegPassword" placeholder="Напишите парол" type="password"  name="password">
                <input type="checkbox" placeholder="Запомни меня"/>
                <button type="submit">Регистрация</button>
            </form>
        </div>
    `;
}
