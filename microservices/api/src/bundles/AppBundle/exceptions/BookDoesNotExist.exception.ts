import { Exception } from "@bluelibs/core";

export class BookDoesNotExistException extends Exception<any> {
  getMessage() {
    // Note: you have access to this.data
    return `Exception BookDoesNotExist has occured.`;
  }
}
