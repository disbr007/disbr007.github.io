## Planet Satellite Imagery - Searching to Archiving Pipeline
<p style="text-align: center;"><i>Tools for managing Planet satellite imagery for stereoscopic DEM creation.</i></p>

This repository is an end-to-end pipeline for searching for, ordering, 
downloading, ingesting, and archiving Planet satellite imagery at the Polar Geospatial
Center, with the goal of creating stereoscopic digital elevation models. <br>  

[planet_tools repository](https://github.com/disbr007/planet_tools)<br>

Functionality included:<br>
- Querying the Planet Data API for footprints meeting specifications (location, acquisition time, etc.):<br> 
*[search4footprints.py](https://github.com/disbr007/planet_tools/blob/master/search4footprints.py)*
- Storing footprints in a Postgres/PostGIS database
- Determining best stereo-candidates using PostGIS and python:<br>
*[multilook_selection.py](https://github.com/disbr007/planet_tools/blob/master/multilook_selection.py)* <br>
*[table_views_generation.sql](https://github.com/disbr007/planet_tools/blob/master/sql/tables_views_generation.sql)*
- Ordering and downloading imagery via Amazon AWS:<br>
*[order_and_download.py](https://github.com/disbr007/planet_tools/blob/master/order_and_download.py)*
- Ingesting, archiving, and indexing imagery:<br>
*[shelve_scenes.py](https://github.com/disbr007/planet_tools/blob/master/shelve_scenes.py)*
- Retrieving archived imagery:<br>
*[scene_retriever.py](https://github.com/disbr007/planet_tools/blob/master/scene_retreiver.py)*
- Creating a footprint of a folder of Planet imagery:<br>
*[fp_planet.py](https://github.com/disbr007/planet_tools/blob/master/fp_planet.py)*

<!--- TODO
add more descriptions
add code snippets
add images--->