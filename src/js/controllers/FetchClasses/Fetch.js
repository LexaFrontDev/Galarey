export class Fetch {
    constructor(type, url, headers = {}, payload = {}) {
        switch (type) {
            case 'get':
                this.get(url, headers).then(data => console.log(data));
                break;
            case 'post':
                this.post(url, headers, payload).then(data => console.log(data));
                break;
            case 'put':
                this.put(url, headers, payload).then(data => console.log(data));
                break;
            case 'delete':
                this.delete(url, headers).then(data => console.log(data));
                break;
            default:
                console.error('Неизвестный тип запроса');
        }
    }

    async get(url, headers) {
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...headers 
                }
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            return await response.json(); 
        } catch (error) {
            console.error('Ошибка при выполнении GET-запроса:', error);
        }
    }

    async post(url, headers, payload) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers 
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            return await response.json(); 
        } catch (error) {
            console.error('Ошибка при выполнении POST-запроса:', error);
        }
    }

    async put(url, headers, payload) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Ошибка при выполнении PUT-запроса:', error);
        }
    }

    async delete(url, headers) {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                }
            });

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Ошибка при выполнении DELETE-запроса:', error);
        }
    }
}
