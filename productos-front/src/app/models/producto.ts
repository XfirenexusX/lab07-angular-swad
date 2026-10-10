// Tipo literal: solo se permiten estos dos valores
export type EstadoStock = 'OK' | 'INSUFICIENTE';
 
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  // Lo calcula el backend (@Transient): no es una columna de MySQL
  estadoStock: EstadoStock;
}