import { Amedas, DataFile, NationWide, Area } from './types'

export function parseDataFile(text: string): DataFile {
    const lines = text.split("\n");
    const data = []
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].length == 0) {
            continue;
        }
        const columns = lines[i].trim().split(/\s+/).map(e => Number.parseFloat(e));
        data.push(columns)
    }
    for (let i = 3; i < 120; i++) {
        data[i] = data[i].slice(2)
    }
    for (let i = 125; i < 128; i++) {
        data[i] = data[i].slice(1)
    }
    const columns = lines[0].trim().split(/\s+/);
    return {
        area: Number.parseInt(columns[0]),
        id: Number.parseInt(columns[1]),
        name: columns[2],
        lat_d: Number.parseInt(columns[3]),
        lat_m: Number.parseFloat(columns[4]),
        long_d: Number.parseInt(columns[5]),
        long_m: Number.parseFloat(columns[6]),
        alti: Number.parseInt(columns[7]),
        data: data,
    } as DataFile
}

export function parseAmedasFile(text: string): Amedas[] {
    const info = text.split("\n");
    const list: Amedas[] = [];
    for (let i = 0; i < info.length; i++) {
        if (info[i].length == 0) {
            continue;
        }
        const columns = info[i].split(",");
        list.push({
            id: Number.parseInt(columns[0]),
            name: columns[1],
            area: Number.parseInt(columns[2]),
            lat: Number.parseFloat(columns[3]),
            long: Number.parseFloat(columns[4]),
            alti: Number.parseFloat(columns[5]),
        });
    }
    return list
}

export function parseNationwideFile(text: string): NationWide {
    const columns = text.split(",");
    return {
        left: Number.parseInt(columns[3]),
        bottom: Number.parseInt(columns[4]),
        right: Number.parseInt(columns[5]),
        top: Number.parseInt(columns[6]),
    }
}

export function parseAreaFile(text: string): Area[] {
    const info = text.split("\n");
    const areaList: Area[] = [];
    for (let i = 0; i < info.length; i++) {
        if (info[i].length == 0) {
            continue;
        }
        const columns = info[i].split(",");
        areaList.push({
            id: Number.parseInt(columns[0]),
            name: columns[1],
            region: Number.parseInt(columns[2]),
            left: Number.parseInt(columns[3]),
            bottom: Number.parseInt(columns[4]),
            right: Number.parseInt(columns[5]),
            top: Number.parseInt(columns[6]),
        });
    }
    return areaList
}