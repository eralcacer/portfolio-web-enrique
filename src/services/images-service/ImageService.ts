export default class ImageService {
  static async getImagePath(tecnologyString: string): Promise<string> {
    try {
      switch (tecnologyString) {
        case "Node.js":
          return (await import("../../assets/node-logo.png")).default;
        case "AWS":
          return (await import("../../assets/aws-logo.png")).default;
        case "Docker":
          return (await import("../../assets/docker-logo.png")).default;
        case "MongoDB":
          return (await import("../../assets/mongodb-logo.svg")).default;
        case "React Native":
          return (await import("../../assets/react-logo.png")).default;
        case "React":
          return (await import("../../assets/react-logo.png")).default;
        case "TensorFlow":
          return (await import("../../assets/tensorflow-logo.png")).default;
        case "TypeScript":
          return (await import("../../assets/typescript-logo.png")).default;
        case "Python":
          return (await import("../../assets/python-logo.png")).default;
        case "JavaScript":
          return (await import("../../assets/javascript-logo.png")).default;
        case "Java":
          return (await import("../../assets/java-logo.png")).default;
        case "Angular":
          return (await import("../../assets/angular-logo-new.png")).default;
        case "Nginx":
          return (await import("../../assets/nginx-logo.png")).default;
        case "Google Drive API":
          return (await import("../../assets/googgle-drive-logo.png")).default;
        case "LangChain":
          return (await import("../../assets/langchain-logo.png")).default;
        case "Solidity":
          return (await import("../../assets/solidity-logo.png")).default;
        case "Spring Boot":
          return (await import("../../assets/spring-boot-logo.png")).default;
        case "JUnit":
          return (await import("../../assets/junit-logo.png")).default;
        default:
          return "";
      }
    } catch (e) {
      console.error(`Issue getting Image: ${e}`);
      return "";
    }
  }
}
