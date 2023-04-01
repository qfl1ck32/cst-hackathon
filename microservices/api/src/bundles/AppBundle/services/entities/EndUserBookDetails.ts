import { ObjectId } from "@bluelibs/ejson";

export class EndUserBookChapterDetails {
  _id: ObjectId;

  title: string;
  isPassed: boolean;
  numberOfTries: number;
  score: number;
}

export class EndUserBookDetails {
  progress: number;
  chapters: EndUserBookChapterDetails[];
  title: string;
  author: string;
}
