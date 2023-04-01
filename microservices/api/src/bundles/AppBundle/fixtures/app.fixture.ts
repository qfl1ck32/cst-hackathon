import { Service, Inject, ContainerInstance, Kernel } from "@bluelibs/core";
import { DatabaseService } from "@bluelibs/mongo-bundle";
import { EJSON, ObjectId } from "@bluelibs/ejson";
import { PasswordService } from "@bluelibs/password-bundle";
import { PermissionService, SecurityService } from "@bluelibs/security-bundle";

import dataMap from "./app.dataMap";
import { LoggerService } from "@bluelibs/logger-bundle";
import { UserRole } from "../collections";

@Service()
export class AppFixture {
  @Inject()
  passwordService: PasswordService;

  @Inject()
  permissionService: PermissionService;

  @Inject()
  databaseService: DatabaseService;

  @Inject()
  kernel: Kernel;

  @Inject()
  loggerService: LoggerService;

  private adminUserId: ObjectId;

  async init() {
    return;

    if (!(await this.shouldRun())) {
      return;
    }

    await this.clean();
    console.log(`Running app fixtures.`);
    await this.loadData();
    console.log(`Completed app fixtures.`);
  }

  async loadData() {
    await this.createAdmin();
  }

  async createAdmin() {
    const usersCollection = this.databaseService.getMongoCollection("users");

    const email = "admin@app.com";
    const password = "123";

    await this.loggerService.info(
      `Creating admin: [${email} : ${password}]...`
    );

    const userId = (
      await usersCollection.insertOne({
        updatedAt: new Date(),
        createdAt: new Date(),
        activeNotifications: [],
        profile: {
          firstName: "Andrei",
          lastName: "Rusu",
        },
        isEnabled: true,
        roles: [UserRole.ADMIN],
        deletionInfo: {},
      })
    ).insertedId;

    await this.passwordService.attach(userId, {
      email,
      username: email,
      isEmailVerified: true,
      password,
    });

    this.adminUserId = userId;
  }

  async clean() {
    for (const collectionName in dataMap) {
      const collection =
        this.databaseService.getMongoCollection(collectionName);
      await collection.deleteMany({});
    }
    await this.databaseService.getMongoCollection("permissions").deleteMany({});
  }

  async handleUsers() {
    const usersCollection = this.databaseService.getMongoCollection("users");
    const users = await usersCollection.find({}).toArray();

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const userId = user._id;
      const email = user.email || `user-${i}@bluelibs.com`;

      await this.passwordService.attach(userId, {
        email,
        username: email,
        isEmailVerified: true,
        password: "bluelibs",
      });

      console.log(`Created new login ${email}:bluelibs`);
    }
  }

  // Runs if all data maps are empty or we're in a test environment
  async shouldRun() {
    if (this.kernel.isTesting()) return false;

    for (const collectionName in dataMap) {
      const collection =
        this.databaseService.getMongoCollection(collectionName);
      if ((await collection.find().count()) === 0) {
        return true;
      }
    }

    return false;
  }
}
