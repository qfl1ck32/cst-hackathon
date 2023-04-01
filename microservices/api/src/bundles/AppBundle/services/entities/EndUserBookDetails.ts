export class EndUserBookChapterDetails {
  title: string;
  isPassed: boolean;
  numberOfTries: number;
}

export class EndUserBookDetails {
  progress: number;
  chapters: EndUserBookChapterDetails[];
  title: string;
  author: string;
}
