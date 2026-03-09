// Navigation item type
export interface NavItem {
  id: string;
  label: string;
}

// Floating tag type for hero section
export interface FloatingTag {
  id: string;
  text: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

// Tag style types
export type TagStyle = 'solid' | 'outline' | 'soft';

export interface TagItem {
  text: string;
  style: TagStyle;
}
