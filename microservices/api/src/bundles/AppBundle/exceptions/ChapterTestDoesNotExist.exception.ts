import { Exception } from "@bluelibs/core";

export class ChapterTestDoesNotExistException extends Exception<any> {
  getMessage() {
    // Note: you have access to this.data
    return `Exception ChapterTestDoesNotExist has occured.`;
  }
}
