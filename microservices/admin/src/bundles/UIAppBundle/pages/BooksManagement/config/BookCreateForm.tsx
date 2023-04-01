import { Service } from "@bluelibs/core";
import { BookCreateForm as BaseBookCreateForm } from "./BookCreateForm.base";

@Service({ transient: true })
export class BookCreateForm extends BaseBookCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
