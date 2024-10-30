export class Slugs {
  constructor() {}
  static async textToSlug(inputedText: string): Promise<string> {
    return inputedText
      .toLowerCase() // Convert to lowercase
      .trim() // Remove leading and trailing spaces
      .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
  }
}
