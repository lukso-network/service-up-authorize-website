import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the main heading', async ({ page }) => {
    await page.goto('/');
    
    const heading = page.getByRole('heading', { name: 'Universal Profile Authorize' });
    await expect(heading).toBeVisible();
  });

  test('should have two action cards', async ({ page }) => {
    await page.goto('/');
    
    // Check for "new app/browser extension" card
    await expect(page.getByText('I have a new Universal Profile app or browser extension')).toBeVisible();
    
    // Check for manual controller authorization card
    await expect(page.getByText('Authorize a controller key manually')).toBeVisible();
  });

  test('should navigate to target page when clicking Import to a new device', async ({ page }) => {
    await page.goto('/');
    
    const startButton = page.getByRole('button', { name: 'Import to a new device' });
    await startButton.click();
    
    await expect(page).toHaveURL('/target');
  });

  test('should navigate to authorize page when clicking Authorize Controller', async ({ page }) => {
    await page.goto('/');
    
    const authorizeButton = page.getByRole('button', { name: 'Authorize Controller' });
    await authorizeButton.click();
    
    await expect(page).toHaveURL('/authorize');
  });

  test('should display how it works section', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByRole('heading', { name: 'How it works' })).toBeVisible();
    await expect(page.getByText('Connect New Wallet')).toBeVisible();
    await expect(page.getByText('Share Authorization')).toBeVisible();
    await expect(page.getByText('Authorize & Done')).toBeVisible();
  });

  test('should have header with logo and nav links', async ({ page }) => {
    await page.goto('/');
    
    // Check logo
    await expect(page.getByText('UP Authorize')).toBeVisible();
    
    // Check nav links
    const docsLink = page.getByRole('link', { name: 'Docs' });
    await expect(docsLink).toHaveAttribute('href', 'https://docs.lukso.tech');
    
    const upCloudLink = page.getByRole('link', { name: 'UP Cloud' });
    await expect(upCloudLink).toHaveAttribute('href', 'https://universalprofile.cloud');
  });
});

test.describe('Target Page', () => {
  test('should display connect wallet UI', async ({ page }) => {
    await page.goto('/target');
    
    await expect(page.getByText('Connect Your New Wallet')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Connect Wallet' })).toBeVisible();
  });

  test('should show step indicator', async ({ page }) => {
    await page.goto('/target');
    
    await expect(page.locator('p').filter({ hasText: /^Connect$/ })).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Search$/ })).toBeVisible();
    await expect(page.locator('p').filter({ hasText: /^Share$/ })).toBeVisible();
  });

  test('should have back button', async ({ page }) => {
    await page.goto('/target');
    
    const backButton = page.getByRole('button', { name: 'Back' });
    await expect(backButton).toBeVisible();
    
    await backButton.click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('Authorize Page', () => {
  test('should show manual controller entry when no params', async ({ page }) => {
    await page.goto('/authorize');
    
    await expect(page.getByLabel('Controller Address')).toBeVisible();
    await expect(page.getByPlaceholder('0x...')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Continue' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Authorization Required' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Go to Home' })).toHaveCount(0);
  });

  test('should navigate home when canceling manual entry', async ({ page }) => {
    await page.goto('/authorize');
    
    const cancelButton = page.getByRole('button', { name: 'Cancel' });
    await expect(cancelButton).toBeVisible();
    
    await cancelButton.click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('Success Page', () => {
  test('should display success message', async ({ page }) => {
    await page.goto('/success');
    
    await expect(page.getByText('Authorization Complete!')).toBeVisible();
  });

  test('should show next steps', async ({ page }) => {
    await page.goto('/success');
    
    await expect(page.getByText("What's next?")).toBeVisible();
    await expect(page.getByRole('button', { name: 'Done' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'View on UP Cloud' })).toBeVisible();
  });

  test('should navigate home when clicking Done', async ({ page }) => {
    await page.goto('/success');
    
    await page.getByRole('button', { name: 'Done' }).click();
    await expect(page).toHaveURL('/');
  });
});
