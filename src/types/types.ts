import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type FormData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

export type InputFieldProps = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: IconDefinition;
};

export type Errors = {
  [key: string]: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

export interface IUser {
  email: string;
  password: string;
}

export interface TableRow {
  name: string;
  price: number;
  quantity: number;
}

export interface IlogIn {
  onLogin: () => void;
}
export type ButtonProps = {
  to: string;
  name: string;
  icon?: React.ElementType;
  isActive: boolean;
  onClick: (item: string) => void;
};

export interface IBusinessMan {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IClient {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IInvoice {
  InvoiceId: string;
  issueDate: string;
  dueDate: string;
  status: boolean;
  paymentMethod: string;
}

export interface IPreview {
  user: IBusinessMan;
  client: IClient;
  invoice: IInvoice;
  pageType: string;
  list: TableRow[];
}

export interface IButton {
  icon: string;
  text: string;
  onClick: () => void;
  className?: string;
}
export interface InvoiceCardProps {
  clientName: string;
  clientEmail: string;
  invoiceNumber: string;
  date: string;
  totalAmount: number;
  status: string;
  profileImage?: string;
  onDelete: () => void;
  onEdit: () => void;
}
export interface DeleteConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export interface FilterModalProps {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  filterStatus: { paid: boolean; unpaid: boolean };
  setFilterStatus: React.Dispatch<
    React.SetStateAction<{ paid: boolean; unpaid: boolean }>
  >;
  applyFilter: () => void;
  closeFilter: () => void;
}