import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import { ObjectId } from "@bluelibs/ejson";
import { EndUsersLoginInput, EndUsersRegisterInput } from "./inputs";

@Service()
export class EndUserService {
  public async register(input: EndUsersRegisterInput) {
    console.log(input);
  }

  public async login(input: EndUsersLoginInput) {}
}
