/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Badge } from "../";
import { EndUserBook } from "../";
import { User } from "../";

@Schema()
export class EndUser {
  @Is(an.objectId())
  _id?: ObjectId;

  badges: Badge;

  @Is(an.objectId().required())
  badgesId: ObjectId;

  books: EndUserBook;

  @Is(an.objectId().required())
  booksId: ObjectId;

  @Is(a.number().required())
  experience: number;

  @Is(a.string().required())
  fullName: string;

  @Is(a.number().required())
  gold: number;

  @Is(a.number().required())
  level: number;

  owner: User;

  @Is(an.objectId().required())
  ownerId: ObjectId;
}
