import { Exception } from "@bluelibs/core";

export class EndUserAlreadyOwnsBookException extends Exception<any> {
  getMessage() {
    // Note: you have access to this.data
    return `Exception EndUserAlreadyOwnsBook has occured.`;
  }
}
