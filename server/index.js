import express from "express";
import bodyParser from "body-parser";
import * as turf from '@turf/turf'
import { verifyToken } from "./middleware/auth.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(bodyParser.json());

//Sample spreaded lines
const lines = {
    L01: {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: [
                [-122.483696, 37.833818],
                [-122.483482, 37.833174],
                [-122.514633, 37.819616]
            ]
        },
        properties: {
            id: 'L01'
        }
    },
    L02: {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [-122.483696, 37.833818],
                [-122.483482, 37.833174],
                [-122.514633, 37.819616]
            ]
        },
        "properties": {
            id: 'L02'
        }
    },
};

//Api for generating token
app.get('/token', (req, res) => {
    const token = jwt.sign({ id: 123 }, process.env.JWT_SECRET);
    res.status(200).json({ token });
})


//Api for finding intersecting linestring
app.post('/linestring', verifyToken, (req, res) => {
    try {
        const { coordinates } = req.body.geometry;

        //Checking invalid coordinates input
        if (!Array.isArray(coordinates) || coordinates.length < 2) {
            return res.status(500).send({ error: 'Invalid linestring' });
          }
        console.log(`Received linestring with ${coordinates.length} points`);

        const intersectingLines = [];
        //Finding intersecting lines and pushing it into array
        for (const [id, line] of Object.entries(lines)) {
            const lineString = turf.lineString(line.geometry.coordinates);
            const intersection = turf.lineIntersect(lineString, req.body.geometry);
            if (intersection.features.length > 0) {
                intersectingLines.push({
                    id: line.properties.id,
                    intersectionPoint: intersection.features[0].geometry.coordinates
                });
            }
        }

        console.log(`Found ${intersectingLines.length} intersecting lines:`, intersectingLines.map(line => line.id));

        //Returning array
        res.send(intersectingLines);
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
});

//Port working on 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});