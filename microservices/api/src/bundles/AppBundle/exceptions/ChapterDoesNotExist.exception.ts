import { Exception } from "@bluelibs/core";

export class ChapterDoesNotExistException extends Exception<any> {
  getMessage() {
    // Note: you have access to this.data
    return `Exception ChapterDoesNotExist has occured.`;
  }
}
