import { Service } from "@bluelibs/core";
import { BookListFiltersForm as BaseBookListFiltersForm } from "./BookListFiltersForm.base";

@Service({ transient: true })
export class BookListFiltersForm extends BaseBookListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
