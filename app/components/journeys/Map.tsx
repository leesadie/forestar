'use client';

import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import '@/app/Page.module.css';

import usePrompt1Modal from '@/app/hooks/prompts/usePrompt1Modal';
import usePrompt2Modal from '@/app/hooks/prompts/usePrompt2Modal';
import usePrompt3Modal from '@/app/hooks/prompts/usePrompt3Modal';
import usePrompt4Modal from '@/app/hooks/prompts/usePrompt4Modal';
import usePrompt5Modal from '@/app/hooks/prompts/usePrompt5Modal';
import usePrompt6Modal from '@/app/hooks/prompts/usePrompt6Modal';
import usePrompt7Modal from '@/app/hooks/prompts/usePrompt7Modal';
import usePrompt8Modal from '@/app/hooks/prompts/usePrompt8Modal';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xlZTI1IiwiYSI6ImNsanE0ODFiaDAya3ozbGxzYWYxaHVhM3UifQ.nJBpcV19qIb9wCO_t0hFww'

const Map = () => {
    const mapContainer = useRef(null);

    //to open prompt modals at markers
    const prompt1Modal = usePrompt1Modal();
    const prompt2Modal = usePrompt2Modal();
    const prompt3Modal = usePrompt3Modal();
    const prompt4Modal = usePrompt4Modal();
    const prompt5Modal = usePrompt5Modal();
    const prompt6Modal = usePrompt6Modal();
    const prompt7Modal = usePrompt7Modal();
    const prompt8Modal = usePrompt8Modal();

    //to play audio at marker locations
    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    //calculate distance with Haversine formula
    const calculateDistance = (coord1: any, coord2: any) => {
        const R = 6371;
        const lat1 = coord1.lat;
        const lon1 = coord1.lng;
        const lat2 = coord2[1];
        const lon2 = coord2[0];

        const deg2rad = (deg: number) => { //convert degrees to radians
            return deg * (Math.PI / 180)
        };

        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);

        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) *
                Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = R * c;
        return distance * 1000 //convert to meters
    }

    //map
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/outdoors-v11',
            center: [-123.22208, 49.25914],
            zoom: 15,
            pitch: 60
        });

        map.on('load', () => {
            map.addSource('mapbox-dem', {
                type: 'raster-dem',
                url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
                tileSize: 512,
                maxzoom: 16,
            })

            map.setTerrain({'source': 'mapbox-dem'});

            //sky layer
            map.addLayer({
                id: 'sky',
                type: 'sky',
                paint: {
                  "sky-type": "atmosphere",
                  "sky-atmosphere-sun": [0.0, 90.0],
                  "sky-atmosphere-sun-intensity": 15,
                },
            })

            //custom marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = 'url(/images/marker_final.svg)';
            el.style.backgroundSize = 'cover'
            el.style.width = '30px';
            el.style.height = '40px';

            //markers with watch location
            const marker1 = new mapboxgl.Marker(el) //location 1 - orientation
                .setLngLat([-123.22208, 49.25914])
                .addTo(map);

             
            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22208, 49.25914];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker1.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_1_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker1.remove();
                }
            });
            

            marker1.getElement().addEventListener('click', () => {
                prompt1Modal.onOpen(); //prompt 1 modal on open; have to close other modals manually
                prompt2Modal.onClose();
                prompt3Modal.onClose();
                prompt4Modal.onClose();
                prompt5Modal.onClose();
                prompt6Modal.onClose();
                prompt7Modal.onClose();
                prompt8Modal.onClose(); 
            })

            const marker2 = new mapboxgl.Marker(el) //location 2 - pre-mood survey + info
                .setLngLat([-123.22275, 49.25928])
                .addTo(map);

            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22275, 49.25928];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker2.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_2_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker2.remove();
                }
            });

            marker2.getElement().addEventListener('click', () => {
                prompt2Modal.onOpen(); //prompt 2 modal on open; have to close other modals manually
                prompt1Modal.onClose();
                prompt3Modal.onClose();
                prompt4Modal.onClose();
                prompt5Modal.onClose();
                prompt6Modal.onClose();
                prompt7Modal.onClose();
                prompt8Modal.onClose();
            })

            const marker3 = new mapboxgl.Marker(el) //location 3 - intersection cleveland/heron
                .setLngLat([-123.22412, 49.26009])
                .addTo(map);
             
            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22412, 49.26009];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker3.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_3_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker3.remove();
                }
            });
            

            marker3.getElement().addEventListener('click', () => {
                prompt3Modal.onOpen(); //prompt 3 modal on open; have to close other modals manually
                prompt1Modal.onClose();
                prompt2Modal.onClose();
                prompt4Modal.onClose();
                prompt5Modal.onClose();
                prompt6Modal.onClose();
                prompt7Modal.onClose();
                prompt8Modal.onClose();
            })

            const marker4 = new mapboxgl.Marker(el) //location 4 - lily of the valley entrance
                .setLngLat([-123.22575, 49.26102])
                .addTo(map);

            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22575, 49.26102];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker4.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_4_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker4.remove();
                }
            });

            marker4.getElement().addEventListener('click', () => {
                prompt4Modal.onOpen(); //prompt 4 modal on open; have to close other modals manually
                prompt1Modal.onClose();
                prompt2Modal.onClose();
                prompt3Modal.onClose();
                prompt5Modal.onClose();
                prompt6Modal.onClose();
                prompt7Modal.onClose();
                prompt8Modal.onClose();
            })

            const marker5 = new mapboxgl.Marker(el) //location 5 - western hemlock trees
                .setLngLat([-123.22514, 49.26107])
                .addTo(map);

            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22514, 49.26107];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker5.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_5_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker5.remove();
                }
            });

            marker5.getElement().addEventListener('click', () => {
                prompt5Modal.onOpen(); //prompt 5 modal on open; have to close other modals manually
                prompt1Modal.onClose();
                prompt2Modal.onClose();
                prompt3Modal.onClose();
                prompt4Modal.onClose();
                prompt6Modal.onClose();
                prompt7Modal.onClose();
                prompt8Modal.onClose();
            })

            const marker6 = new mapboxgl.Marker(el) //location 6 - douglas fir tree
                .setLngLat([-123.22490, 49.26110])
                .addTo(map);

            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22490, 49.26110];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker6.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_6_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker6.remove();
                }
            });

            marker6.getElement().addEventListener('click', () => {
                prompt6Modal.onOpen(); //prompt 6 modal on open; have to close other modals manually
                prompt1Modal.onClose();
                prompt2Modal.onClose();
                prompt3Modal.onClose();
                prompt4Modal.onClose();
                prompt5Modal.onClose();
                prompt7Modal.onClose();
                prompt8Modal.onClose();
            })

            const marker7 = new mapboxgl.Marker(el) //location 7 - the vine maple
                .setLngLat([-123.22420, 49.26115])
                .addTo(map);

            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22420, 49.26115];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker7.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_7_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker7.remove();
                }
            });

            marker7.getElement().addEventListener('click', () => {
                prompt7Modal.onOpen(); //prompt 7 modal on open; have to close other modals manually
                prompt1Modal.onClose();
                prompt2Modal.onClose();
                prompt3Modal.onClose();
                prompt4Modal.onClose();
                prompt5Modal.onClose();
                prompt6Modal.onClose();
                prompt8Modal.onClose();
            })

            const marker8 = new mapboxgl.Marker(el) //location 8 - sit spot
                .setLngLat([-123.22378, 49.26119])
                .addTo(map);

            navigator.geolocation.watchPosition(function (position) {
                const userLocation = {
                    lng: position.coords.longitude,
                    lat: position.coords.latitude
                };

                const targetLocation = [-123.22378, 49.26119];
                const distance = calculateDistance(
                    userLocation,
                    targetLocation
                )

                if (distance < 30) {
                    marker8.addTo(map);
                    <audio ref={audioRef}>
                        <source src="/audiofull/Marker_8_default.mp3" type="audio/mpeg"/>
                    </audio>
                } else {
                    marker8.remove();
                }
            });

            marker8.getElement().addEventListener('click', () => {
                prompt8Modal.onOpen(); //prompt 8 modal on open; have to close other modals manually
                prompt1Modal.onClose();
                prompt2Modal.onClose();
                prompt3Modal.onClose();
                prompt4Modal.onClose();
                prompt5Modal.onClose();
                prompt6Modal.onClose();
                prompt7Modal.onClose();
            })

             
            const testmarker = new mapboxgl.Marker(el)
                .setLngLat([-123.22208, 49.25914])
                .addTo(map);
        
            testmarker.getElement().addEventListener('click', () => {
                prompt3Modal.onOpen();
                prompt2Modal.onClose();
                prompt1Modal.onClose();
                prompt4Modal.onClose();
                prompt5Modal.onClose();
                prompt6Modal.onClose();
                prompt7Modal.onClose();
                prompt8Modal.onClose();
            })
             

            //route line outline
            map.addSource('route', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: [
                            [-123.222446, 49.259072],
                            [-123.222817, 49.259271],
                            [-123.222967, 49.259402],
                            [-123.223966, 49.259967],
                            [-123.224124, 49.260092],
                            [-123.224926, 49.260558],
                            [-123.225812, 49.261052],
                            [-123.225534, 49.261148],
                            [-123.225315, 49.261132],
                            [-123.224801, 49.261193],
                            [-123.224558, 49.261146],
                            [-123.224295, 49.261230],
                            [-123.224099, 49.261215],
                            [-123.223807, 49.261255],
                            [-123.223649, 49.261217],
                            [-123.223393, 49.261217]
                        ]
                    }
                }
            });

            map.addLayer({
                id: 'route',
                type: 'line',
                source: 'route',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'square',
                },
                paint: {
                    'line-color': '#274307',
                    'line-width': 10,
                }
            })

            //route line dashed
            map.addSource('dash-route', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: [
                            [-123.222446, 49.259072],
                            [-123.222817, 49.259271],
                            [-123.222967, 49.259402],
                            [-123.223966, 49.259967],
                            [-123.224124, 49.260092],
                            [-123.224926, 49.260558],
                            [-123.225812, 49.261052],
                            [-123.225534, 49.261148],
                            [-123.225315, 49.261132],
                            [-123.224801, 49.261193],
                            [-123.224558, 49.261146],
                            [-123.224295, 49.261230],
                            [-123.224099, 49.261215],
                            [-123.223807, 49.261255],
                            [-123.223649, 49.261217],
                            [-123.223393, 49.261217]
                        ]
                    }
                }
            });

            map.addLayer({
                id: 'dash-route',
                type: 'line',
                source: 'dash-route',
                layout: {
                    "line-join": "round",
                    'line-cap': 'square'
                },
                paint: {
                    'line-color': '#84CC16',
                    'line-dasharray': [2, 2],
                    'line-width': 2
                }
            })

            //controls
            const geolocation = new mapboxgl.GeolocateControl({
                positionOptions: {enableHighAccuracy: true},
                trackUserLocation: true,
                showUserHeading: true,
              });
              map.addControl(geolocation)
        
            const nav = new mapboxgl.NavigationControl();
            map.addControl(nav)
        })

        return () => map.remove();
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{ width: '100%', height: '100vh'}}
        >
        </div>
    )

}

export default Map;