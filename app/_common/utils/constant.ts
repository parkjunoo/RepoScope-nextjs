class Constant {
  static readonly BASE_URL = "https://api.github.com";
  static readonly TIMEOUT = 15000;
  static readonly API_VERSION = "v1";
  static getFullApiUrl() {
    return `${this.BASE_URL}/api/${this.API_VERSION}`;
  }
}

export default Constant;
