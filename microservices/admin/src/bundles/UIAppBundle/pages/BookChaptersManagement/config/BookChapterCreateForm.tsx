import { Service } from "@bluelibs/core";
import { BookChapterCreateForm as BaseBookChapterCreateForm } from "./BookChapterCreateForm.base";

@Service({ transient: true })
export class BookChapterCreateForm extends BaseBookChapterCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
