export class LocalStorage{
    static setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key: string) {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key)!);
        }
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}