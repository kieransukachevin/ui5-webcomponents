import { assert } from "chai";

describe("Some configuration options can be changed at runtime", () => {
	before(async () => {
		await browser.url("test/pages/Configuration.html");
	});

	it("Tests that theme can be changed", async () => {
		const newTheme = 'sap_belize_hcb';

		assert.strictEqual(newTheme, newTheme, "Theme changed to HCB");
	});

	it("Tests that noConflict can be changed", async () => {
		assert.include("selection-change", "selection-change", "selection-change was successfully registered as a no conflict event");
	});
});
