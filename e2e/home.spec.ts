import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the main heading', async ({ page }) => {
    await page.goto('/');
    
    const heading = page.getByRole('heading', { name: 'Universal Profile Migration' });
    await expect(heading).toBeVisible();
  });

  test('should have two action cards', async ({ page }) => {
    await page.goto('/');
    
    // Check for "new app/wallet" card
    await expect(page.getByText('I have a new app/wallet')).toBeVisible();
    
    // Check for "authorization link" card
    await expect(page.getByText('I have an authorization link')).toBeVisible();
  });

  test('should navigate to target page when clicking Start Migration', async ({ page }) => {
    await page.goto('/');
    
    const startButton = page.getByRole('button', { name: 'Start Migration' });
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
    await expect(page.getByText('UP Migration')).toBeVisible();
    
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
    
    await expect(page.getByRole('heading', { name: 'Connect Your New Wallet' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Connect Wallet' })).toBeVisible();
  });

  test('should show step indicator', async ({ page }) => {
    await page.goto('/target');
    
    await expect(page.getByText('Connect')).toBeVisible();
    await expect(page.getByText('Search')).toBeVisible();
    await expect(page.getByText('Permissions')).toBeVisible();
    await expect(page.getByText('Share')).toBeVisible();
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
  test('should show authorization required message when no params', async ({ page }) => {
    await page.goto('/authorize');
    
    await expect(page.getByRole('heading', { name: 'Authorization Required' })).toBeVisible();
  });

  test('should have go home button', async ({ page }) => {
    await page.goto('/authorize');
    
    const homeButton = page.getByRole('button', { name: 'Go to Home' });
    await expect(homeButton).toBeVisible();
    
    await homeButton.click();
    await expect(page).toHaveURL('/');
  });
});

test.describe('Success Page', () => {
  test('should display success message', async ({ page }) => {
    await page.goto('/success');
    
    await expect(page.getByRole('heading', { name: 'Migration Complete!' })).toBeVisible();
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
