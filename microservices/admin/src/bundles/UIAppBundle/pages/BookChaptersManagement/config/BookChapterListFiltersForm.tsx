import { Service } from "@bluelibs/core";
import { BookChapterListFiltersForm as BaseBookChapterListFiltersForm } from "./BookChapterListFiltersForm.base";

@Service({ transient: true })
export class BookChapterListFiltersForm extends BaseBookChapterListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
