import { Exception } from "@bluelibs/core";

export class EndUserDoesNotOwnBookException extends Exception<any> {
  getMessage() {
    // Note: you have access to this.data
    return `Exception EndUserDoesNotOwnBook has occured.`;
  }
}
