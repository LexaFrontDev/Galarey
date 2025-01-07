

export function Routeslogin(){
    return `
        <div class="Login">
            <form action="" method="post">
                <input class="userLoginMail" placeholder="Напишите почту" type="email"  name="email">
                <input class="userLoginPassword" placeholder="Напишите парол" type="password"  name="password">
                <button type="submit">Логин</button>
            </form>
        </div>
    `;
}