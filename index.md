## About Me
I am a Master’s candidate studying the use of remote sensing for natural resource applications, from invasive
species management to landscape change - incorporating image segmentation, classification, and
machine learning. As a Graduate Research Assistant at the Polar Geospatial Center, I work both independently and
collaboratively to perform geospatial analyses, create static and dynamic map products, automate workflows, 
and develop custom GIS solutions.<br>

---

## Selected Projects
### [Planet - Satellite Imagery Searching to Archiving Pipeline](/planet_tools)<br>
Complete pipeline for the selection, ordering, downloading, and archiving of 
[Planet satellite imagery](https://www.planet.com/) for the purpose of  stereoscopic
digital elevation model creation. Candidate imagery footprints are located using 
Planet's [Data API](https://developers.planet.com/docs/apis/data/) based on location, 
date of collection, and acquisition metadata. Footprints are stored and analyzed using 
PostGRES/PostGIS. Suitable imagery is ordered using Planet's 
[Orders API](https://developers.planet.com/docs/orders/) via Amazon AWS. 
Ordered imagery is downloaded from AWS to a local file server, where it is ingested, 
indexed in a PostGIS table and archived. Imagery can then be retrieved from it's 
archived location using a command line tool.<br>
[Project Repository](https://github.com/disbr007/planet_tools)<br>
[<img src="images/planet_thumb.png?raw=true" width="500" height="500">](/planet_tools)
<br><br>

### [Imagery Selection for Coastline Mapping](/coastline)<br>
An imagery selection workflow for Polar coastline mapping incorporating sample daily sea
ice maps to determine the suitability of satellite imagery for use with a coastline 
mapping algorithm.<br>
[Project Repository](https://github.com/jeff-diz/coastline)<br>
[<img src="images/sea_ice_example.png?raw=true" width="500" height="500">](/coastline)
<br><br>

### [Polar Geospatial Center - Visualizations](/pgc_viz)<br>
Visualizations made for the Polar Geospatial Center.<br>
[<img src="images/pgc_viz/dove_classic_storage_estimates.png?raw=true"/>](/pgc_viz)
<br><br>

### [BWCAW Permit Map](https://disbr007.github.io/bwcaw_permits/) *(in progress)*<br>
A Leaflet web map displaying the locations of Boundary Waters Canoe Area Wilderness
entry points, campsites, and portages. Development is in progress, with the goal of added 
real-time permit availability for each entry point. Permit availability web-scrapping from
recreation.gov is functional, but needs to be connected to the web map.<br>
[Project Repository](https://github.com/disbr007/bwcaw_permits)<br>
[<img src="images/bwcaw_permits.png?raw=true" width="998" height="500">](https://disbr007.github.io/bwcaw_permits/)
<br><br>

### [DEM Processing Tools](/dem_processing)<br>
Tools for working with DEMs and creating derivatives.<br>
[Project Repository](https://github.com/jeff-diz/dem_processing)<br>
[<img src="images/dem_derivatives.png?raw=true" width="500" height="500">](/dem_processing)
<br><br>

### [Object-Based-Images-Analysis: Phragmites-Australis](https://umn.maps.arcgis.com/apps/MapJournal/index.html?appid=c6c2aa9fa0684b92ae0e29a8bbb9212d)<br>
ArcGIS Online Story Map detailing a project using UAS imagery to map the invasive wetland
species *phragmites-australis*, using an object-based-image-analysis workflow.<br>
[<img src="images/obia_phrag_thumn.PNG?raw=true" width="715" height="500">](https://umn.maps.arcgis.com/apps/MapJournal/index.html?appid=c6c2aa9fa0684b92ae0e29a8bbb9212d)
<br><br>

### [Campaign to Save the Boundary Waters](/cstbw)<br>
Maps created in support of the Campaign to Save the Boundary Waters.<br>
[<img src="images/stbw_thumb.jpg?raw=true" width="650.5" height="500">](/cstbw)
.
<!--- TODO
add About Me, Contact Info, Resume--->