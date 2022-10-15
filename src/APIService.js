export default class APIService {
  static async UpdateDica(dica_id, body, token) {
    const resp = await fetch(`http://127.0.0.1:8000/api/dicas/${dica_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    });
    return await resp.json();
  }

  static async InsertDica(body, token) {
    const resp = await fetch("http://127.0.0.1:8000/api/dicas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    });
    return await resp.json();
  }

  static DeleteDica(dica_id, token) {
    return fetch(`http://127.0.0.1:8000/api/dicas/${dica_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }

  static LoginUser(body) {
    return fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
