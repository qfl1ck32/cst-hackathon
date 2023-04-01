export * from "./Book.model.base";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Book as BaseBook } from "./Book.model.base";

@Schema()
export class Book extends BaseBook {
  // You can extend the base here
}
