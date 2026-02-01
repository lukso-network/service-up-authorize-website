import { describe, it, expect } from 'vitest';
import { getBestProfileImage } from './queries';
import type { ProfileImage } from '@/types/profile';

describe('getBestProfileImage', () => {
  it('should return null for empty array', () => {
    expect(getBestProfileImage([])).toBeNull();
  });

  it('should return null for undefined', () => {
    expect(getBestProfileImage(undefined as unknown as ProfileImage[])).toBeNull();
  });

  it('should return the only image when array has single item', () => {
    const images: ProfileImage[] = [
      { width: 100, src: 'src1', url: 'url1', verified: true },
    ];
    
    expect(getBestProfileImage(images)).toBe('url1');
  });

  it('should prefer URL over src', () => {
    const images: ProfileImage[] = [
      { width: 100, src: 'src1', url: 'url1', verified: true },
    ];
    
    expect(getBestProfileImage(images)).toBe('url1');
  });

  it('should fall back to src when url is empty', () => {
    const images: ProfileImage[] = [
      { width: 100, src: 'src1', url: '', verified: true },
    ];
    
    expect(getBestProfileImage(images)).toBe('src1');
  });

  it('should select image closest to small target (64px)', () => {
    const images: ProfileImage[] = [
      { width: 32, src: 'small', url: 'small-url', verified: true },
      { width: 64, src: 'medium', url: 'medium-url', verified: true },
      { width: 256, src: 'large', url: 'large-url', verified: true },
    ];
    
    expect(getBestProfileImage(images, 'small')).toBe('medium-url');
  });

  it('should select image closest to medium target (200px)', () => {
    const images: ProfileImage[] = [
      { width: 64, src: 'small', url: 'small-url', verified: true },
      { width: 180, src: 'medium', url: 'medium-url', verified: true },
      { width: 400, src: 'large', url: 'large-url', verified: true },
    ];
    
    expect(getBestProfileImage(images, 'medium')).toBe('medium-url');
  });

  it('should select image closest to large target (400px)', () => {
    const images: ProfileImage[] = [
      { width: 100, src: 'small', url: 'small-url', verified: true },
      { width: 200, src: 'medium', url: 'medium-url', verified: true },
      { width: 350, src: 'large', url: 'large-url', verified: true },
    ];
    
    expect(getBestProfileImage(images, 'large')).toBe('large-url');
  });

  it('should default to medium size preference', () => {
    const images: ProfileImage[] = [
      { width: 64, src: 'small', url: 'small-url', verified: true },
      { width: 200, src: 'exact-medium', url: 'exact-medium-url', verified: true },
      { width: 800, src: 'very-large', url: 'very-large-url', verified: true },
    ];
    
    // Default is medium (200px target)
    expect(getBestProfileImage(images)).toBe('exact-medium-url');
  });

  it('should handle unsorted image arrays', () => {
    const images: ProfileImage[] = [
      { width: 500, src: 'large', url: 'large-url', verified: true },
      { width: 50, src: 'small', url: 'small-url', verified: true },
      { width: 200, src: 'medium', url: 'medium-url', verified: true },
    ];
    
    // Should still find closest to 200px target
    expect(getBestProfileImage(images, 'medium')).toBe('medium-url');
  });
});
