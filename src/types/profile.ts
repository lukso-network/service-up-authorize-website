// Universal Profile types

export interface ProfileImage {
  width: number;
  src: string;
  url: string;
  verified: boolean;
}

export interface ProfileLink {
  title: string;
  url: string;
}

export interface ProfileSearchResult {
  id: string;
  name: string | null;
  fullName: string | null;
  profileImages: ProfileImage[];
}

export interface ProfileDetails extends ProfileSearchResult {
  description: string | null;
  backgroundImages: ProfileImage[];
  tags: string[];
  links: ProfileLink[];
}

export interface ControllerInfo {
  address: `0x${string}`;
  permissions: bigint;
  allowedCalls?: string;
  allowedDataKeys?: string;
}
