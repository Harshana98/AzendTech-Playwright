import { test, expect } from '@playwright/test';
import {checkBox} from '../pages/checkBox'

test('Verify checkbox functionality', async ({ page }) => {
  const checkbox = new checkBox(page);
  await checkbox.goto();
  await checkbox.clickCheckBoxes();
  await checkbox.assertCheckBoxes();
});
