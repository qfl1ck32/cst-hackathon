import { ObjectId } from "@bluelibs/ejson";

export class EndUsersSearchBookResponse {
  exists: boolean;

  bookId?: ObjectId;
  title?: string;
  author?: string;
}
