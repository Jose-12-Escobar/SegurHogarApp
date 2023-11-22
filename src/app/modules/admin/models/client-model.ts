export interface Client {
  nombre: string;
  apellidos: string;
  fe_nacimiento: string;
  tipo_documento: Tipodocumento;
  documento: string;
  email: string;
  telefono: string;
}

interface Tipodocumento {
  name: string;
}
