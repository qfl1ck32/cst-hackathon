export class EndUserSubmitTestResponseAnswer {
  question: string;
  answer: string;
  correct: boolean;
  explanation?: string;
}

export class EndUserSubmitTestResponse {
  hasPassed: boolean;
  score: number;
  attempts: number;
  answers: EndUserSubmitTestResponseAnswer[];
}
