class MUARAMBADUK_API {
  private static URL = process.env.API_HOST;

  public static async Get(url: string) {
    return await fetch(`${this.URL}/${url}`, { cache: 'no-store' })
      .then((result) => result.json())
      .catch((err) => {
        throw new Error(err);
      });
  }
}

export default MUARAMBADUK_API;
