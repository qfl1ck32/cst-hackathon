import "./env";
import { kernel } from "./kernel";
import "./bundles";
import { ChatGPTService } from "@bundles/AppBundle/services";

kernel
  .init()
  // TODO: my test playground:D remove it
  .then(async () => {
    const chatGPTService = kernel.container.get(ChatGPTService);

    await chatGPTService.generateQuestionsAboutBookChapter(
      "Introduction to Algorithms",
      "Divide-and-Conquer"
    );
  })
  .catch((e) => {
    console.error(e);
    process.exit(0);
  });
