# MapGlHurdal

## Coordinate Systems

- WGS84 (EPSG:4326)

    - Default for GeoJson files

    - Coordinate System: Geographic coordinate system (GCS).

    - Units: Degrees of latitude and longitude.

    - Description: WGS84 is a global standard coordinate system used by GPS. Coordinates are expressed in degrees of latitude (north/south) and longitude (east/west), which represent positions on the Earth's surface as if it were a sphere.

    - Use Case: WGS84 is typically used for storing raw geographic coordinates. It is the default in many geographic datasets and is required by standards like GeoJSON.

- Web Mercator (EPSG:3857)

    - Coordinate System: Projected coordinate system (PCS).

    - Units: Meters.

    - Description: Web Mercator projects the Earth’s surface onto a flat, two-dimensional plane using the Mercator projection. Instead of latitude and longitude, it uses x and y coordinates in meters. This projection distorts areas near the poles but preserves angles, making it useful for maps where visualizing shapes and distances (within reasonable latitudes) is more important than size accuracy.

    - Use Case: Web Mercator is commonly used in web mapping applications (e.g., Google Maps, OpenStreetMap, Bing Maps) because it allows for seamless panning and zooming.
