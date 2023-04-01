import { Service } from "@bluelibs/core";
import { ObjectId } from "@bluelibs/ejson";
import chalk from "chalk";

@Service()
export class LoggerService {
  public log(text: string) {
    console.log(text);

    return text;
  }

  private getCalleeInfo() {
    const [className, methodName] = new Error().stack.split(" ")[24].split(".");

    return `[${className} : ${methodName}]`;
  }

  private formatChalkText(text: string) {
    return `[${text}]`;
  }

  private logFormatted(chalkText: string, text: string) {
    return this.log(
      `${this.formatChalkText(chalkText)} ${this.getCalleeInfo()} - ${text}`
    );
  }

  public info(text: string) {
    return this.logFormatted(chalk.blue("INFO"), text);
  }

  public warning(text: string) {
    return this.logFormatted(chalk.red("WARNING"), text);
  }

  public formatJson(text: Record<string, any>) {
    return JSON.stringify(text, null, 2);
  }

  public formatResolverArgs(input: Record<string, any>, userId?: ObjectId) {
    return `${this.formatJson(input)} - ${userId ?? "anonymous"}`;
  }
}
