import axios from 'axios';

class MUARAMBADUK_API {
  private static URL = process.env.API_HOST;

  public static async Get(url: string) {
    return await axios
      .get(`${this.URL}/${url}`)
      .then((result) => result.data)
      .catch((err) => {
        throw new Error(err);
      });
  }
}

export default MUARAMBADUK_API;
