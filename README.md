# KETIDGZ_Application

Receive Location Data
The server application receives location data from the client through the Mobius platform. This data include latitude and longitude coordinates information.

Fetch Shelter Information
Using the received location data, the server application makes use of the KakaoMap API to fetch information about nearby shelters. These include the coordinates, name, address, contact information, and other relevant details of the shelters in the vicinity.

Distance Calculation
The server application employs a distance calculation algorithm, such as the Haversine formula, to determine the distance between the client's location and each of the available shelters. This helps identify the nearest shelter.

Select Nearest Shelter
Based on the calculated distances, the server application selects the nearest shelter as the destination for the client. This shelter is chosen as the most suitable option for the client to seek refuge.

Generate KakaoMap URL
The server application generates a KakaoMap URL that represents the route from the client's location to the selected shelter. This URL typically includes the necessary parameters, such as the origin and destination coordinates, to display the route on KakaoMap.

Upload URL to Mobius Platform
The generated KakaoMap URL is uploaded to the Mobius platform, making it accessible to the client. This allows the client to retrieve the URL and access the route information from the server.
