export class FilenameConverter {
  convert(filename: string): string {
    return filename.replace('.md', '')
      .replace(/\s/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '');
  }
}
