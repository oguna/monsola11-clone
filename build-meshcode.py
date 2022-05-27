import array
import os

dirpath = 'C:\\Program Files (x86)\\日射量データベース閲覧システム\\data\\map\\table'

meshcodes = array.array('L')
amedascodes = array.array('L')

# 全てのファイルから読み込み
files = os.listdir(dirpath)
for file in files:
    filepath = os.path.join(dirpath, file)
    with open(filepath) as f:
        for line in f.readlines():
            columns = line.split(',')
            meshcode = int(columns[0])
            amedascode = int(columns[1])
            meshcodes.append(meshcode)
            amedascodes.append(amedascode)

# 重複除去
meshcode_dict = dict()
duplicated = 0
for i in range(len(meshcodes)):
    meshcode = meshcodes[i]
    amedascode = amedascodes[i]
    if meshcode_dict.get(meshcode):
        old_amedascode = meshcode_dict.get(meshcode)
        if old_amedascode != amedascode:
            raise Exception()
        duplicated += 1
    else:
        meshcode_dict[meshcode] = amedascode
print('duplicated: ', duplicated)

# ソート
meshcodes = array.array('L', sorted(meshcode_dict.keys()))
amedascodes = array.array('L')
for meshcode in meshcodes:
    amedascodes.append(meshcode_dict[meshcode])

# ファイルに書き込み
"""
with open('./public/data/_maptable', 'wb') as f:
    f.write(array.array('L', [len(meshcodes)]).tobytes())
    f.write(meshcodes.tobytes())
    f.write(amedascodes.tobytes())
print(len(meshcodes), len(amedascodes))
"""

# 1次メッシュコードを集計
first_meshcodes = dict()
for i in range(len(meshcodes)):
    meshcode = meshcodes[i] // 10000
    amedascode = amedascodes[i]
    if first_meshcodes.get(meshcode):
        count = first_meshcodes.get(meshcode)
        first_meshcodes[meshcode] = count + 1
    else:
        first_meshcodes[meshcode] = 1
first_meshcode_list = array.array('H', list(sorted(first_meshcodes.keys())))
first_meshcode_counts = array.array('H')
for e in first_meshcode_list:
    first_meshcode_counts.append(first_meshcodes[e])
print('first meshcode list size:', len(first_meshcode_list))

# 2次3次メッシュコードに変形
short_meshcodes = array.array('H')
for e in meshcodes:
    short_meshcodes.append(e%10000)

# アメダスコードを3バイトに変形
upper_amedascodes = array.array('B')
lower_amedascodes = array.array('H')
for i in range(len(amedascodes)):
    e = amedascodes[i]
    upper_amedascodes.append(e>>16)
    lower_amedascodes.append(e&0xffff)

print(len(short_meshcodes), len(lower_amedascodes))
# ファイルに書き込み
with open('./public/data/maptable', 'wb') as f:
    f.write(array.array('I', [len(first_meshcode_list)]).tobytes())
    f.write(first_meshcode_list.tobytes())
    f.write(array.array('I', [len(first_meshcode_counts)]).tobytes())
    f.write(first_meshcode_counts.tobytes())
    f.write(array.array('I', [len(short_meshcodes)]).tobytes())
    f.write(short_meshcodes.tobytes())
    f.write(array.array('I', [len(lower_amedascodes)]).tobytes())
    f.write(upper_amedascodes.tobytes())
    f.write(lower_amedascodes.tobytes())