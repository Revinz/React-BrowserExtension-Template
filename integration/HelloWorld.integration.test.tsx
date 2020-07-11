import "expect-puppeteer";

/*
 * Integration Test to check if everything works
 */

describe("Youtube", () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
    await page.goto("https://youtube.com");
  });

  it('should display "youtube" text on page', async () => {
    await expect(page).toMatch("youtube");
  });

  it("should contain 'primary' area'", async () => {
    const primary = await page.waitForSelector("#primary");
    await expect(primary).toBeDefined();
  });

  it("should contain 'helloworld-customdiv'", async () => {
    const primary = await page.waitForSelector("helloworld-customdiv");
    await expect(primary).toBeDefined();
  });
});
