export interface FormField {
  value: string,
  validation: RegExp,
  valid: boolean,
  info: string,
  showInfo: "initial" | "show" | "hide",
  touched: boolean
}

export interface FormFields {
  [key: string]: FormField
}

export interface ProfileData {
  area: string;
  tipoDeUsuario: string;
  emailContato: string;
  curso: string;
  linksArtigos: string;
  descricao: string;
  sugestaoDeTema: string;
  name: string,
  email: string,
  avatar: string,
  whatsapp: string,
}

