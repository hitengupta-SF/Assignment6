var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    constructor() {
        /* loadData = () => {
            this.users = data.map((element: { id: number; firstName: string; middleName: string; lastName: string; email: string; phone: string; role: string; address: string; }) => new User(element));
        }
     */
        this.refresh = () => {
            this.users = [];
            // this.loadData();
        };
        this.users = [];
        // this.loadData();
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((element) => element.id === id);
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.users.push(user);
            return user;
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.users.findIndex((element) => element.id === user.id);
            this.users[index] = user;
            return user;
        });
    }
    delete(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.users.findIndex((element) => element.id === user.id);
            this.users.splice(index, 1);
            return user;
        });
    }
    findByIdAndUpdate(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.users.findIndex((element) => element.id === id);
            this.users[index] = user;
            return this.users[index];
        });
    }
    findByIdAndDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.users.findIndex((element) => element.id === id);
            const user = this.users[index];
            this.users.splice(index, 1);
            return user;
        });
    }
}
export const userService = new UserService();
//# sourceMappingURL=UserService.js.map