import zipfile
import array
import sys

def convertTsvToBin(lines: str):
    header = lines[0].decode('shift-jis').strip().encode('utf-8')
    if len(header) > 64:
        raise RuntimeError('header overflow')
    for i in range(64-len(header)):
        header = header + b' '
    items = array.array('h')
    for line in lines[1:]:
        if len(line.strip()) == 0:
            continue
        line = line.decode()
        columns = line.split()[-17:]
        for column in columns:
            items.append(int(column.replace('.', ''), base=10))
    if sys.byteorder == 'big':
        items.byteswap()
    return header + items.tobytes()

with zipfile.ZipFile('100879224.zip') as myzip:
    for info in myzip.infolist():
        with myzip.open(info.filename, 'r') as myfile:
            lines = myfile.readlines()
            bin = convertTsvToBin(lines)
            outname = 'public/data/monsola11/'+info.filename.split('/')[-1]+'.bin'
            with open(outname, 'bw') as f:
                f.write(bin)

