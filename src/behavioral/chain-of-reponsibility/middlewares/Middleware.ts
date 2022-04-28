export default abstract class Middleware {
  public next!: Middleware;

  public abstract check(email: string, password: string): boolean;

  public linkWith(next: Middleware): Middleware {
    this.next = next;
    return next;
  }

  protected checkNext(email: string, password: string): boolean {
    if (!this.next) {
      return true;
    }
    return this.next.check(email, password);
  }
}
