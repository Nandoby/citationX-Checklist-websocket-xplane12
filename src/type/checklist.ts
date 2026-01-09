export interface Checklist {
  right: string;
  left: string;
  color?: string;
  subtitle?: string;
  isSub?: boolean
  checked?: boolean
  id: number
  tooltip?: string
}

export interface Props {
  checklist: Checklist[];
  color: string;
  title: string;
}
