export interface Checklist {
  right: string;
  left: string;
  color?: string;
  subtitle?: string;
  isSub?: boolean
  checked?: boolean
  id: number
  tooltip?: string
  validate?: (data: Record<string, any>) => boolean;
}

export interface Props {
  checklist: Checklist[];
  color: string;
  title: string;
}
