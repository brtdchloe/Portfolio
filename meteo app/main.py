from outils import data_villes, villes_select, meteo_ville, air_ville
from keys import keys
from pyscript import display, document, when #type:ignore

gps = document.querySelector("#ville")
icon_previsions = document.querySelector("#icon_previsions")
degre = document.querySelector("#degre")
affichage_previsions = document.querySelector("#meteo")
minmax = document.querySelector("#minmax")
btn_atmo = document.querySelector("#btn_atmo")
btn_vent = document.querySelector("#btn_vent")
atmo = document.querySelector("#atmo")
vent = document.querySelector("#vent")
image_air = document.querySelector("#image_air")
select_html = document.querySelector("#villes")
btn_compo = document.querySelector("#btn_compo")
compo = document.querySelector("#composants")
animation = document.querySelector("#animation")
darkmode = document.querySelector("#darkmode")

liste_villes = sorted([ville['city'] for ville in data_villes('fr.json')])
liste_villes_non_sorted = [ville['city'] for ville in data_villes('fr.json')]
villes_select(select_html, liste_villes)
liste_latitudes = [ville['lat'] for ville in data_villes('fr.json')]
liste_longitudes = [ville['lng'] for ville in data_villes('fr.json')]

ville = "Valenciennes"
    
@when('change', select_html)
async def choix_ville(event):
    global ville
    ville = select_html.value
    gps.innerHTML = select_html.value
    previsions = await meteo_ville(ville, keys[0])
    if previsions['name'] == select_html.value:
        temps = previsions['main']
        degre.innerHTML = f"{temps['temp']}°C"
        icon_previsions.src = f"https://openweathermap.org/img/wn/{previsions["weather"][0]["icon"]}@4x.png"
        minmax.innerHTML = f"{temps['temp_min']}°C / {temps['temp_max']}°C Ressenti : {temps['feels_like']}°C"
        affichage_previsions.innerHTML = previsions['weather'][0]['description'].title()
        affichage_previsions.value = affichage_previsions.innerHTML
        if affichage_previsions.value == "Légère Pluie" or affichage_previsions.value == "Bruine Légère" or affichage_previsions.value == "Pluie Modérée" or affichage_previsions.value == "Forte Pluie":
            animation.src="/assets/pluie.gif"
            animation.innerHTML = animation.value
        if affichage_previsions.value == "Légères Chutes De Neige" or affichage_previsions.value == "Chutes De Neige" or affichage_previsions.value == "Pluie Légère Et Neige":
            animation.src="assets/neige.gif"
            animation.innerHTML = animation.value
        if affichage_previsions.value == "Couvert" or affichage_previsions.value == "Nuageux" or affichage_previsions.value == "Peu Nuageux" or affichage_previsions.value == "Partiellement Nuageux":
            animation.src = "assets/nuages.png"
            animation.innerHTML = animation.value
        if affichage_previsions.value == "Ciel Dégagé":
            animation.src = "assets/ensoleillé.png"
            animation.innerHTML = animation.value
        if affichage_previsions.value == "Brume" or affichage_previsions.value == "Brouillard":
            animation.src = "assets/brume.png"
            animation.innerHTML = animation.value
        else : 
            animation.src="assets/transparent.png"
            animation.innerHTML = animation.value

@when('click', btn_atmo)
async def qualite_air(event):
    for ind in range(len(liste_villes_non_sorted)):
        if liste_villes_non_sorted[ind] == select_html.value:
            lat = liste_latitudes[ind]
            lon = liste_longitudes[ind]
    air = await air_ville(lat, lon, keys[0]) 
    if air['list'][0]['main']['aqi'] == 1:
        image_air.src = "/assets/bon.jpg"
        image_air.innerHTML = image_air.value
    elif air['list'][0]['main']['aqi'] == 2:
        image_air.src = "/assets/moyen.jpg"
        image_air.innerHTML = image_air.value
    elif air['list'][0]['main']['aqi'] == 3:
        image_air.src = "/assets/mauvais.jpg"
        image_air.innerHTML = image_air.value
    elif air['list'][0]['main']['aqi'] == 4:
        image_air.src = "/assets/tres mauvais.jpg"
        image_air.innerHTML = image_air.value
    elif air['list'][0]['main']['aqi'] == 5:
        image_air.src = "/assets/extremement mauvais.jpg"
        image_air.innerHTML = image_air.value

@when('click', btn_vent)
async def vents(event):
    previsions = await meteo_ville(ville, keys[0])
    if previsions['name'] == select_html.value:
        infosvent = previsions['wind']
        vent.innerHTML = f"Vitesse vent : {infosvent['speed']}"

@when('click', btn_compo)
async def composition(event):
    for ind in range(len(liste_villes_non_sorted)):
        if liste_villes_non_sorted[ind] == select_html.value:
            lat = liste_latitudes[ind]
            lon = liste_longitudes[ind]
    composants = await air_ville(lat, lon, keys[0])
    compo.innerHTML = f"""Co : {composants['list'][0]['components']['co']} <br>
    No : {composants['list'][0]['components']['no']}<br>
    No2 : {composants['list'][0]['components']['no2']}<br>
    O3 : {composants['list'][0]['components']['o3']}<br>
    So2 :  {composants['list'][0]['components']['so2']}<br>
    Pm2_5 :  {composants['list'][0]['components']['pm2_5']}<br> 
    Pm10 : {composants['list'][0]['components']['pm10']}"""