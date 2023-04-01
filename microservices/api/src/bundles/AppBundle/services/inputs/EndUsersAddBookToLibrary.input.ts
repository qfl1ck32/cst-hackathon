import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class EndUsersAddBookToLibraryInput {
  @Is(an.objectId().required())
  bookId: ObjectId;
}
