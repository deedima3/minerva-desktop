export class CookiesApi {
  static deleteCookie(name: string) {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}
