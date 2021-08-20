export interface Agency {
  agencia: string,
  distrito: string,
  provincia: string,
  departamento: string,
  direccion: string,
  lat: number,
  lon: number
}

export const agencies = [
  {
    agencia: "Las Flores",
    distrito: "San Juan De Lurigancho",
    provincia: "Lima",
    departamento: "Lima",
    direccion: "Las Flores de Primavera 1487",
    lat: -77.01232817,
    lon: -12.0046896
  }
]