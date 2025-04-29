export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PartialNote {
  title: string;
  content: string;
}

export interface SecurityContact {
  id: string;
  name: string;
  phone: string;
}