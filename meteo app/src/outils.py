import json
import requests #type:ignore
from pyscript import document, fetch #type:ignore

def data_villes(fichier_json):
    with open(fichier_json, 'r', encoding="utf8") as villes:
        return json.load(villes)
    
def villes_select(html_select, villes):
    for ville in villes:
        option = document.createElement('option')
        option.value = ville
        option.innerHTML = ville
        html_select.appendChild(option)

async def meteo_ville(ville, key):
    previsions = await fetch(f"https://api.openweathermap.org/data/2.5/weather?q={ville}&lang=fr&units=metric&appid={key}")
    return await previsions.json()

async def air_ville(lat, lon, key):
    qualite_air_ville = await fetch(f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={key}")
    return await qualite_air_ville.json()