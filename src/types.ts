export interface DataFile {
    area: number
    id: number
    name: string
    long_d: number
    long_m: number
    lat_d: number
    lat_m: number
    alti: number
    data: number[][]
}

export interface Amedas {
    id: number
    name: string
    area: number
    alti: number
    long: number
    lat: number
}

export interface Area {
    id: number
    name: string
    region: number
    left: number
    bottom: number
    top: number
    right: number
}

export interface Region {
    id: number
    name: string
}

export interface NationWide {
    left: number
    bottom: number
    top: number
    right: number
}