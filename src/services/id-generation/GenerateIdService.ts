export default class GenerateIdService {
  private static instance: GenerateIdService;
  private idsMap: Map<string, string>;

  constructor() {
    this.idsMap = new Map();
  }

  public static getInstance(): GenerateIdService {
    if (!GenerateIdService.instance) {
      GenerateIdService.instance = new GenerateIdService();
    }
    return GenerateIdService.instance;
  }

  private generateRandomId(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  public generateUniqueId(key: string): string {
    if (!this.idsMap.has(key)) {
      const uniqueId = `${key}-${this.generateRandomId()}`;
      this.idsMap.set(key, uniqueId);
    }
    return this.idsMap.get(key) as string;
  }
}
