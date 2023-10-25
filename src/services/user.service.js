import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/users") {
        this.api = createApiClient(baseUrl);
    }
    async signin(data) {
        return (await this.api.post("/signin", data)).data;
    }
    async signup(data) {
        return (await this.api.post("/signup", data)).data;
    }
    async findByEmail(id) {
        return (await this.api.get(`/findByEmail/${id}`)).data;
    }
}

export default new UserService();