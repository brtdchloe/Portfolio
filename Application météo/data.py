import json

def lire_data(data : str):
    with open(data) as f:
        data_dict = json.load(f)
    return data_dict

if __name__ == '__main__':
    from pprint import pprint
    extrait = lire_data('fr.json')[3:10]
    for ville in extrait:
        print(ville['city'])
        
