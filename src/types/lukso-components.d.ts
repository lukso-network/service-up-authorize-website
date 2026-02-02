// Type definitions for LUKSO web components in React
// Note: Do NOT import @lukso/web-components here as it causes build issues
// The actual import happens client-side only in LuksoProfileAvatar.tsx

type ProfileSize = '2x-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large';

// Extend JSX IntrinsicElements for LUKSO web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lukso-profile': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'profile-url'?: string;
          'profile-address'?: string;
          'has-identicon'?: boolean;
          size?: ProfileSize;
          'is-square'?: boolean;
          placeholder?: string;
        },
        HTMLElement
      >;
      'lukso-username': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          name?: string;
          address?: string;
          size?: ProfileSize;
          'is-full-width'?: boolean;
          suffix?: string;
        },
        HTMLElement
      >;
      'lukso-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: string;
          'is-full-width'?: boolean;
          'is-loading'?: boolean;
          disabled?: boolean;
        },
        HTMLElement
      >;
      'lukso-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'is-hoverable'?: boolean;
          'is-full-width'?: boolean;
        },
        HTMLElement
      >;
      'lukso-image': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          placeholder?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
