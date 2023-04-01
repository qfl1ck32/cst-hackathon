import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import { ObjectId } from "@bluelibs/ejson";
import { PasswordService } from "@bluelibs/password-bundle";
import { PermissionService } from "@bluelibs/security-bundle";
import { XAuthService } from "@bluelibs/x-auth-bundle";
import { EndUsersCollection, UserRole, UsersCollection } from "../collections";
import { PermissionDomain } from "../constants";
import { EndUsersLoginInput, EndUsersRegisterInput } from "./inputs";

@Service()
export class EndUserService {
  @Inject()
  private xAuthService: XAuthService;

  @Inject()
  private endUsersCollection: EndUsersCollection;

  @Inject()
  private passwordService: PasswordService;

  @Inject()
  private permissionService: PermissionService;

  public async register(input: EndUsersRegisterInput) {
    // TODO: check if username is taken (the framework assumes username = e-mail, which is kinda dumb but whatever)
    const userId = (
      await this.xAuthService.register({
        email: input.email,
        password: input.password,
      })
    ).userId as ObjectId;

    await this.passwordService.updateData(userId, {
      username: input.username,
    });

    await this.endUsersCollection.insertOne(
      {
        level: 1,

        gold: 0,
        experience: 0,
      },
      {
        context: {
          userId,
        },
      }
    );

    await this.permissionService.add({
      userId,
      domain: PermissionDomain.APP,
      permission: UserRole.END_USER,
    });
  }

  public async login(input: EndUsersLoginInput) {
    const response = (await this.xAuthService.login({
      username: input.usernameOrEmail,
      password: input.password,
    })) as { token: string };

    return response.token;
  }
}
